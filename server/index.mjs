import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { fileURLToPath } from "node:url";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { sectionTypes, journeyStages } from "./registry-data.mjs";
import { concepts } from "./registry-concepts.mjs";
import { endpoints, workflow } from "./api-manifest.mjs";
import { renderApiDoc, renderManifest } from "./api-doc.mjs";

const dist = fileURLToPath(new URL("../dist", import.meta.url));
const index = fileURLToPath(new URL("../dist/index.html", import.meta.url));
const dataDir = fileURLToPath(new URL("../data", import.meta.url));
const pagesFile = new URL("pages.json", `file://${dataDir}/`);

const PAGE_KEY_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const readPages = async () => {
  try {
    const raw = await readFile(pagesFile, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writePages = async (pages) => {
  await mkdir(dataDir, { recursive: true });
  await writeFile(pagesFile, `${JSON.stringify(pages, null, 2)}\n`, "utf8");
};

export const app = new Hono();

const registrySnapshot = () => ({
  sectionCount: sectionTypes.length,
  stageCount: journeyStages.length,
  conceptCount: concepts.length,
  sectionKeys: sectionTypes.map((s) => s.key),
  conceptMapSample: Object.fromEntries(
    concepts.slice(0, 6).map((concept) => [concept.key, concept.sections]),
  ),
});

const apiVersion = "1.0";
const endpointCount = endpoints.length;

app.get("/health", (c) => c.text("ok"));

app.get("/api/manifest", (c) =>
  c.json(renderManifest({ version: apiVersion, endpointCount, registry: registrySnapshot(), workflow, endpoints })),
);

app.get("/api/doc", (c) => {
  const html = renderApiDoc({
    version: apiVersion,
    endpointCount,
    registry: registrySnapshot(),
    workflow,
    endpoints,
  });
  return c.html(html);
});

app.get("/api", (c) => c.redirect("/api/doc"));

app.get("/api/registry", (c) =>
  c.json({
    version: apiVersion,
    sections: sectionTypes,
    stages: journeyStages,
    concepts: concepts.map(({ key, name, sections }) => ({ key, name, sections })),
  }),
);

const validateEntries = (entries) => {
  if (!Array.isArray(entries)) return { ok: false, errors: ["entries must be an array"] };
  const sectionKeys = new Set(sectionTypes.map((s) => s.key));
  const allowed = new Map();
  for (const concept of concepts) {
    for (const sectionKey of concept.sections) {
      if (!allowed.has(sectionKey)) allowed.set(sectionKey, new Set());
      allowed.get(sectionKey).add(concept.key);
    }
  }
  const errors = [];
  entries.forEach((entry, index) => {
    if (!entry || typeof entry !== "object" || !sectionKeys.has(entry.section)) {
      errors.push(`entries[${index}]: unknown section "${entry?.section}"`);
      return;
    }
    if (typeof entry.conceptKey !== "string" || !allowed.get(entry.section)?.has(entry.conceptKey)) {
      errors.push(`entries[${index}]: conceptKey "${entry?.conceptKey}" is not registered for section "${entry.section}"`);
    }
  });
  return errors.length > 0 ? { ok: false, errors } : { ok: true, errors };
};

app.post("/api/pages/validate", async (c) => {
  const body = await c.req.json().catch(() => null);
  if (!body || typeof body !== "object") return c.json({ error: "Body must be a JSON object" }, 400);
  const result = validateEntries(body.entries);
  return result.ok ? c.json({ ok: true, errors: [] }) : c.json(result, 400);
});

app.get("/api/pages", async (c) => c.json(await readPages()));

app.post("/api/pages", async (c) => {
  const body = await c.req.json().catch(() => null);
  if (!body || typeof body !== "object") return c.json({ error: "Body must be a JSON object" }, 400);

  const key = typeof body.key === "string" ? body.key.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const entries = Array.isArray(body.entries) ? body.entries : [];

  if (!PAGE_KEY_PATTERN.test(key)) {
    return c.json({ error: "key must be lowercase kebab-case (a-z, 0-9, hyphens)" }, 400);
  }
  if (name.length === 0) {
    return c.json({ error: "name is required" }, 400);
  }

  const result = validateEntries(entries);
  if (!result.ok) return c.json(result, 400);

  const pages = await readPages();
  const existingIndex = pages.findIndex((page) => page.key === key);
  if (existingIndex === -1 && pages.some((page) => page.name === name)) {
    return c.json({ error: `a page named "${name}" already exists` }, 400);
  }

  const record = { key, name, entries };
  if (existingIndex >= 0) pages[existingIndex] = record;
  else pages.push(record);

  await writePages(pages);
  return c.json({ ok: true, url: `/pages/${key}`, page: record }, existingIndex >= 0 ? 200 : 201);
});

app.delete("/api/pages/:key", async (c) => {
  const { key } = c.req.param();
  const pages = await readPages();
  const next = pages.filter((page) => page.key !== key);
  if (next.length === pages.length) {
    return c.json({ error: `no page with key "${key}"` }, 404);
  }
  await writePages(next);
  return c.json({ ok: true });
});

app.use("/*", serveStatic({ root: dist }));
app.get("*", serveStatic({ path: index }));

const isMainModule = process.argv[1] === fileURLToPath(import.meta.url);

if (isMainModule) {
  serve(
    {
      fetch: app.fetch,
      hostname: process.env.HOST ?? "0.0.0.0",
      port: Number(process.env.PORT ?? 3000),
    },
    (info) => {
      console.log(`Vision School listening on http://${info.address}:${info.port}`);
    },
  );
}