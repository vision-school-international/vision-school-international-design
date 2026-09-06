// API reference page. Reuses the app's real navbar/sidebar/stage system
// (app/globals.css: .studio-header, .studio-brand, .studio-tabs, .studio-rail,
// .studio-stage-group, .studio-rail-item, .studio-stage, .studio-stage-header)
// instead of a parallel design system. Only operation/schema/response markup
// (which has no equivalent elsewhere in the app) gets new classes, following
// the same tokens (--review-ink, --review-paper, --review-line, mono kicker).
//
// Layout behavior researched 2026-09-06 from Redoc (menu/scroll sync, response
// sample tabs, collapsible operations) and Swagger UI (docExpansion, filter).

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { renderStudioHeader } from "./studio-header.mjs";

const distIndexPath = fileURLToPath(new URL("../dist/index.html", import.meta.url));

const getBuiltAssets = () => {
  try {
    const html = readFileSync(distIndexPath, "utf8");
    const css = html.match(/href="([^"]+\.css)"/)?.[1] ?? null;
    const js = html.match(/src="([^"]+\.js)"/)?.[1] ?? null;
    return { css, js };
  } catch {
    return { css: null, js: null };
  }
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const codeBlock = (value) =>
  `<pre class="api-code"><code>${escapeHtml(typeof value === "string" ? value : JSON.stringify(value, null, 2))}</code></pre>`;

const METHOD_COLOR = { get: "#102c57", post: "#1769c2", delete: "#53657e", put: "#66afe6", patch: "#1f2c40" };

const schemaTree = (schema, name, schemas, depth = 0) => {
  if (!schema || depth > 6) return "";
  const props = schema.properties
    ? Object.entries(schema.properties)
        .map(([propName, prop]) => {
          const required = (schema.required ?? []).includes(propName);
          const type = prop.$ref ? escapeHtml(prop.$ref.split("/").pop()) : escapeHtml(prop.type ?? "any");
          const enumNote = prop.enum ? ` · enum: ${prop.enum.map((v) => JSON.stringify(v)).join(" | ")}` : "";
          return `<div class="api-schema-prop"><div class="api-schema-row"><code>${escapeHtml(propName)}</code>${required ? '<span class="api-required">required</span>' : ""}<span class="api-schema-type">${type}${escapeHtml(enumNote)}</span></div>${prop.description ? `<div class="api-schema-desc">${escapeHtml(prop.description)}</div>` : ""}${prop.$ref ? schemaTree(schemas[prop.$ref.split("/").pop()], propName, schemas, depth + 1) : ""}</div>`;
        })
        .join("")
    : "";
  return `<div class="api-schema"><p class="api-schema-title">${escapeHtml(name ?? "object")}</p>${props}</div>`;
};

const requestBodyPanel = (operation, schemas) => {
  const body = operation.requestBody;
  if (!body) return "";
  const json = body.content?.["application/json"];
  if (!json) return "";
  const schemaHtml = json.schema ? schemaTree(json.schema, json.schema.$ref?.split("/").pop(), schemas) : "";
  const exampleHtml = json.example ? codeBlock(json.example) : "";
  return `<div class="api-op-section"><p class="review-kicker">Request Body${body.required ? ' <span class="api-required">required</span>' : ""}</p>${schemaHtml}${exampleHtml}</div>`;
};

const paramsPanel = (operation) => {
  const params = operation.parameters ?? [];
  if (params.length === 0) return "";
  return `<div class="api-op-section"><p class="review-kicker">Parameters</p><table class="api-table">
<thead><tr><th>Name</th><th>In</th><th>Type</th><th>Description</th></tr></thead>
<tbody>${params
    .map((p) => {
      const schema = p.schema ?? {};
      const typeBits = [schema.type, schema.format].filter(Boolean).join(" · ") || "—";
      return `<tr><td><code>${escapeHtml(p.name)}</code>${p.required ? ' <span class="api-required">required</span>' : ""}</td><td>${escapeHtml(p.in)}</td><td>${escapeHtml(typeBits)}</td><td>${escapeHtml(p.description ?? "")}</td></tr>`;
    })
    .join("")}</tbody>
</table></div>`;
};

const operationAnchor = (path, method) => `operation-${method}-${path.replace(/\//g, "-").replace(/[{}]/g, "")}`;

const operationArticle = (path, method, operation, schemas) => {
  const anchor = operationAnchor(path, method);
  const responseCodes = Object.keys(operation.responses ?? {});
  const sampleTabs = responseCodes
    .map(
      (code, i) =>
        `<button type="button" class="api-tab${i === 0 ? " is-active" : ""}" data-target="${anchor}-resp-${code}" role="tab" aria-selected="${i === 0 ? "true" : "false"}">${escapeHtml(String(code))}</button>`,
    )
    .join("");
  const responseBodies = responseCodes
    .map((code, i) => {
      const response = operation.responses[code];
      const json = response.content?.["application/json"];
      const inner = [schemaTree(json?.schema, json?.schema?.$ref?.split("/").pop(), schemas), json?.example ? codeBlock(json.example) : ""]
        .filter(Boolean)
        .join("");
      return `<div class="api-tab-panel${i === 0 ? " is-active" : ""}" data-panel="${anchor}-resp-${code}" role="tabpanel">${inner || '<p class="api-muted">No content.</p>'}</div>`;
    })
    .join("");

  return `
<article class="api-operation" id="${anchor}">
  <button type="button" class="api-op-toggle" aria-expanded="false" aria-controls="${anchor}-body">
    <span class="api-method" style="--method-color: ${METHOD_COLOR[method] ?? "#53657e"}">${method.toUpperCase()}</span>
    <code class="api-op-path">${escapeHtml(path)}</code>
    <span class="api-op-summary">${escapeHtml(operation.summary ?? "")}</span>
    <span class="api-chevron" aria-hidden="true">›</span>
  </button>
  <div class="api-op-body" id="${anchor}-body" hidden>
    <p class="api-muted">operationId: <code>${escapeHtml(operation.operationId)}</code></p>
    <p class="api-op-description">${escapeHtml(operation.description ?? "")}</p>
    ${paramsPanel(operation)}
    ${requestBodyPanel(operation, schemas)}
    <div class="api-op-section">
      <p class="review-kicker">Responses</p>
      ${responseCodes.length > 0 ? `<div class="api-tabs" role="tablist" aria-label="Response status codes">${sampleTabs}</div>${responseBodies}` : '<p class="api-muted">No responses documented.</p>'}
    </div>
  </div>
</article>`;
};

export const renderReference = ({ version, openapi, liveExamples, generatedAt }) => {
  const schemas = openapi.components?.schemas ?? {};
  const paths = Object.entries(openapi.paths);
  const tagOrder = openapi.tags.map((t) => t.name);
  const { css, js } = getBuiltAssets();

  const railHtml = tagOrder
    .map((tag) => {
      const items = paths
        .filter(([, pathItem]) => Object.values(pathItem).some((op) => op.tags?.includes(tag)))
        .flatMap(([path, pathItem]) =>
          Object.entries(pathItem)
            .filter(([, op]) => typeof op === "object" && op?.tags?.includes(tag))
            .map(([method]) => `
<li>
  <a href="#${escapeHtml(operationAnchor(path, method))}" class="studio-rail-item api-nav-link" data-anchor="${escapeHtml(operationAnchor(path, method))}">
    <span class="studio-rail-dot" style="--component-color: ${METHOD_COLOR[method] ?? "#53657e"}" aria-hidden="true"></span>
    <span class="studio-rail-name">${method.toUpperCase()} ${escapeHtml(path)}</span>
  </a>
</li>`),
        )
        .join("\n");
      return `<div class="studio-stage-group">
<p class="studio-stage-label">${escapeHtml(tag)}</p>
<ul class="studio-stage-list">${items}</ul>
</div>`;
    })
    .join("\n");

  const contentHtml = tagOrder
    .map((tag) => {
      const meta = openapi.tags.find((t) => t.name === tag);
      const operations = paths
        .filter(([, pathItem]) => Object.values(pathItem).some((op) => op.tags?.includes(tag)))
        .flatMap(([path, pathItem]) =>
          Object.entries(pathItem)
            .filter(([, op]) => typeof op === "object" && op?.tags?.includes(tag))
            .map(([method, op]) => operationArticle(path, method, op, schemas)),
        )
        .join("\n");
      return `<section class="api-tag-section" id="tag-${escapeHtml(tag.toLowerCase())}">
<h2 class="studio-stage-title">${escapeHtml(tag)}</h2>
<p class="studio-stage-description">${escapeHtml(meta?.description ?? "")}</p>
${operations}
</section>`;
    })
    .join("\n");

  const liveSection = `
<section class="api-tag-section" id="tag-live">
<h2 class="studio-stage-title">Live Examples</h2>
<p class="studio-stage-description">Captured from this running server at generation time — real data, not mockups.</p>
${liveExamples
  .map((example) => {
    const bodyId = `body-${example.path.replace(/\//g, "-").slice(1)}`;
    return `<article class="api-operation is-open" id="operation-get-${example.path.replace(/\//g, "-").slice(1)}">
  <button type="button" class="api-op-toggle" aria-expanded="true" aria-controls="${bodyId}">
    <span class="api-method" style="--method-color: ${METHOD_COLOR[example.method.toLowerCase()] ?? "#53657e"}">${example.method.toUpperCase()}</span>
    <code class="api-op-path">${escapeHtml(example.path)}</code>
    <span class="api-op-summary">${escapeHtml(example.note)}</span>
    <span class="api-chevron" aria-hidden="true">›</span>
  </button>
  <div class="api-op-body" id="${bodyId}">
    <p class="review-kicker">Live response · ${escapeHtml(String(example.status))}</p>
    <pre class="api-code"><code>${escapeHtml(example.body)}</code></pre>
  </div>
</article>`;
  })
  .join("\n")}
</section>`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(openapi.info.title)} ${version} — API Reference</title>
${css ? `<link rel="stylesheet" href="${escapeHtml(css)}" />` : ""}
<style>
  /* Elements with no equivalent in the app design system yet, built strictly on the same tokens. */
  .api-rail-quick { display: grid; gap: 8px; margin-bottom: 22px; }
  .api-quick-link { display: flex; align-items: center; gap: 9px; padding: 9px 12px; border: 1px solid var(--review-line); border-radius: 6px; background: #fff; color: var(--review-ink); font: 600 11px/1.3 var(--font-geist-sans), Arial, sans-serif; }
  .api-quick-link:hover, .api-quick-link:focus-visible { border-color: #1769c2; color: #1769c2; outline: 0; }
  .api-search { min-width: 220px; min-height: 34px; padding: 0 12px; border: 1px solid var(--review-line); border-radius: 6px; background: #fff; color: var(--review-ink); font: 13px/1.3 var(--font-geist-sans), Arial, sans-serif; }
  .api-search:focus-visible { border-color: #1769c2; box-shadow: 0 0 0 2px color-mix(in srgb, #1769c2 30%, transparent); outline: 0; }
  .api-meta { margin-left: auto; font-family: var(--font-geist-mono), monospace; font-size: 9px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: #53657e; }
  .api-tag-section { margin: 40px 0 0; scroll-margin-top: 90px; }
  .api-operation { margin: 0 0 12px; background: #fff; border: 1px solid var(--review-line); border-radius: 6px; overflow: hidden; scroll-margin-top: 90px; }
  .api-op-toggle { display: flex; align-items: center; gap: 12px; width: 100%; padding: 14px 18px; border: 0; background: #fff; font: inherit; text-align: left; cursor: pointer; }
  .api-op-toggle:hover { background: var(--review-paper); }
  .api-method { padding: 4px 10px; border-radius: 999px; font: 600 11px/1 var(--font-geist-mono), monospace; color: #fff; background: var(--method-color); flex: 0 0 auto; }
  .api-op-path { font: 600 13.5px/1.3 var(--font-geist-mono), monospace; color: var(--review-ink); }
  .api-op-summary { margin-left: auto; color: #53657e; font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .api-chevron { flex: 0 0 auto; font: 600 14px/1 var(--font-geist-mono), monospace; color: #53657e; transition: transform 160ms ease; }
  .api-operation.is-open .api-chevron { transform: rotate(90deg); }
  .api-op-body { padding: 4px 18px 18px; border-top: 1px solid var(--review-line); }
  .api-muted { color: #53657e; font-size: 12px; }
  .api-muted code { font: 12px var(--font-geist-mono), monospace; }
  .api-op-description { margin: 6px 0 12px; color: #53657e; font-size: 14px; }
  .api-op-section { margin-top: 16px; }
  .api-required { color: #1769c2; font: 600 10px/1 var(--font-geist-mono), monospace; letter-spacing: .08em; text-transform: uppercase; margin-left: 6px; }
  .api-table { width: 100%; border-collapse: collapse; margin: 8px 0 0; font-size: 13px; }
  .api-table th { text-align: left; font: 600 10px/1 var(--font-geist-mono), monospace; letter-spacing: .1em; text-transform: uppercase; color: #53657e; border-bottom: 1px solid var(--review-line); padding: 6px 8px 6px 0; }
  .api-table td { padding: 6px 8px 6px 0; border-bottom: 1px solid color-mix(in srgb, var(--review-line) 50%, transparent); vertical-align: top; }
  .api-schema { margin: 8px 0 8px; padding: 12px 14px; background: var(--review-paper); border: 1px solid var(--review-line); border-radius: 6px; }
  .api-schema-title { margin: 0 0 8px; font: 600 11px/1 var(--font-geist-mono), monospace; letter-spacing: .1em; text-transform: uppercase; color: #102c57; }
  .api-schema-prop { padding: 5px 0; border-bottom: 1px solid color-mix(in srgb, var(--review-line) 40%, transparent); font-size: 13px; }
  .api-schema-prop:last-child { border-bottom: 0; }
  .api-schema-row { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
  .api-schema-row code { font: 600 12.5px/1.4 var(--font-geist-mono), monospace; color: #102c57; }
  .api-schema-type { font: 500 12px/1.4 var(--font-geist-mono), monospace; color: #53657e; }
  .api-schema-desc { color: #53657e; font-size: 12.5px; padding-top: 2px; }
  .api-tabs { display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0 8px; }
  .api-tab { padding: 6px 12px; border: 1px solid var(--review-line); border-radius: 999px; background: #fff; color: #53657e; font: 600 11px/1 var(--font-geist-mono), monospace; cursor: pointer; }
  .api-tab:hover, .api-tab:focus-visible { border-color: #102c57; color: #102c57; outline: 0; }
  .api-tab.is-active { border-color: #102c57; background: #102c57; color: #fff; }
  .api-tab-panel[hidden] { display: none; }
  .api-code { margin: 0; padding: 12px 14px; background: var(--review-paper); color: var(--review-ink); border: 1px solid var(--review-line); border-radius: 6px; overflow-x: auto; font: 12px/1.55 var(--font-geist-mono), monospace; }
  @media (max-width: 1050px) {
    .api-op-summary { display: none; }
  }
</style>
</head>
<body>
<main class="studio-shell">
  ${renderStudioHeader("api")}
  <div class="studio-layout">
    <aside class="studio-rail" aria-label="API operations">
      <div class="api-rail-quick">
        <a class="api-quick-link" href="/api/openapi.json">⬇ OpenAPI 3.0.4 contract</a>
        <a class="api-quick-link" href="/api/manifest">☰ Compact agent manifest</a>
      </div>
      ${railHtml}
    </aside>
    <section class="studio-stage">
      <header class="studio-stage-header">
        <p class="review-kicker">OpenAPI ${escapeHtml(openapi.openapi)} · v${escapeHtml(openapi.info.version)} · generated ${escapeHtml(generatedAt)}</p>
        <h1 class="studio-stage-title">${escapeHtml(openapi.info.title)}</h1>
        <p class="studio-stage-description">${escapeHtml(openapi.info.description)}</p>
      </header>
      <input type="search" class="api-search" placeholder="Filter operations…" aria-label="Filter operations" style="margin-top: 18px;" />
      ${contentHtml}
      ${liveSection}
    </section>
  </div>
</main>
${js ? `<script type="module" src="${escapeHtml(js)}"></script>` : ""}
<script>
(function () {
  document.querySelectorAll(".api-op-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const operation = toggle.closest(".api-operation");
      const body = document.getElementById(toggle.getAttribute("aria-controls"));
      const isOpen = operation.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (body) body.hidden = !isOpen;
    });
  });

  document.querySelectorAll(".api-tabs").forEach((tabs) => {
    tabs.addEventListener("click", (event) => {
      const tab = event.target.closest(".api-tab");
      if (!tab) return;
      const container = tabs.parentElement;
      container.querySelectorAll(".api-tab").forEach((t) => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      container.querySelectorAll(".api-tab-panel").forEach((panel) => {
        const isActive = panel.getAttribute("data-panel") === tab.getAttribute("data-target");
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    });
  });

  const search = document.querySelector(".api-search");
  if (search) {
    search.addEventListener("input", () => {
      const query = search.value.toLowerCase();
      document.querySelectorAll(".api-nav-link").forEach((link) => {
        link.parentElement.style.display = link.textContent.toLowerCase().includes(query) ? "" : "none";
      });
      document.querySelectorAll(".api-operation").forEach((operation) => {
        operation.style.display = operation.textContent.toLowerCase().includes(query) ? "" : "none";
      });
    });
  }

  const links = Array.from(document.querySelectorAll(".api-nav-link[data-anchor]"));
  const setActive = (anchor) => {
    links.forEach((link) => link.classList.toggle("is-active", link.getAttribute("data-anchor") === anchor));
  };
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: "-90px 0px -70% 0px", threshold: 0 },
  );
  document.querySelectorAll(".api-operation[id]").forEach((operation) => observer.observe(operation));

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.getElementById(link.getAttribute("data-anchor"));
      if (target) {
        target.classList.add("is-open");
        const body = target.querySelector(".api-op-body");
        if (body) body.hidden = false;
        const toggle = target.querySelector(".api-op-toggle");
        if (toggle) toggle.setAttribute("aria-expanded", "true");
      }
    });
  });

  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target && target.classList.contains("api-operation")) {
      target.classList.add("is-open");
      const body = target.querySelector(".api-op-body");
      if (body) body.hidden = false;
    }
  }
})();
</script>
</body>
</html>`;
};