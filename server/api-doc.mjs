// Redoc-style three-panel reference rendered from the OpenAPI document.
// Layout provenance (researched 2026-09-06):
// - Redoc: three-panel design with menu/scrolling synchronization, Request samples / Response samples
//   with per-status tabs, collapsible operations, download-spec link (github.com/Redocly/redoc#redoc-features)
// - Swagger UI config: docExpansion list|full|none, filter box, tagsSorter (docs/usage/configuration.md)
// - ReadMe: left-hand operation tree, right-hand schema/examples panel
// Single source of truth remains the OpenAPI document itself (server/openapi.mjs).

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const codeBlock = (value) =>
  `<pre class="sref-code"><code>${escapeHtml(typeof value === "string" ? value : JSON.stringify(value, null, 2))}</code></pre>`;

const METHOD_CLASS = { get: "sref-method--get", post: "sref-method--post", delete: "sref-method--delete", put: "sref-method--put", patch: "sref-method--patch" };

const schemaTree = (schema, name, schemas, depth = 0) => {
  if (!schema || depth > 6) return "";
  const props = schema.properties
    ? Object.entries(schema.properties)
        .map(([name, prop]) => {
          const required = (schema.required ?? []).includes(name);
          const type = prop.$ref ? escapeHtml(prop.$ref.split("/").pop()) : escapeHtml(prop.type ?? "any");
          const enumNote = prop.enum ? ` · enum: ${prop.enum.map((v) => JSON.stringify(v)).join(" | ")}` : "";
          return `<div class="sref-prop"><div class="sprop-row"><code class="sprop-name">${escapeHtml(name)}</code>${required ? '<span class="sref-req">required</span>' : ""}<span class="sprop-type">${type}${escapeHtml(enumNote)}</span></div>${prop.description ? `<div class="sprop-desc">${escapeHtml(prop.description)}</div>` : ""}${prop.$ref ? schemaTree(schemas[prop.$ref.split("/").pop()], name, schemas, depth + 1) : ""}</div>`;
        })
        .join("")
    : "";
  return `<div class="sref-schema"><div class="sref-schema-title">${escapeHtml(name ?? "object")}</div>${props}</div>`;
};

const requestBodyPanel = (operation, schemas) => {
  const body = operation.requestBody;
  if (!body) return "";
  const json = body.content?.["application/json"];
  if (!json) return "";
  const schemaHtml = json.schema ? schemaTree(json.schema, json.schema.$ref?.split("/").pop(), schemas) : "";
  const exampleHtml = json.example ? codeBlock(json.example) : "";
  return `<div class="sref-section"><h4 class="sref-label">Request Body <span class="sref-badge">application/json</span>${body.required ? ' <span class="sref-req">required</span>' : ""}</h4>${schemaHtml}${exampleHtml}</div>`;
};

const paramsPanel = (operation) => {
  const params = operation.parameters ?? [];
  if (params.length === 0) return "";
  return `<div class="sref-section"><h4 class="sref-label">Parameters</h4><table class="sref-table">
<thead><tr><th>Name</th><th>In</th><th>Type</th><th>Description</th></tr></thead>
<tbody>${params
    .map((p) => {
      const schema = p.schema ?? {};
      const typeBits = [schema.type, schema.format].filter(Boolean).join(" · ") || "—";
      return `<tr><td><code>${escapeHtml(p.name)}</code>${p.required ? ' <span class="sref-req">required</span>' : ""}</td><td>${escapeHtml(p.in)}</td><td>${escapeHtml(typeBits)}</td><td>${escapeHtml(p.description ?? "")}</td></tr>`;
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
        `<button type="button" class="sref-tab${i === 0 ? " is-active" : ""}" data-target="${anchor}-resp-${code}" role="tab" aria-selected="${i === 0 ? "true" : "false"}">${escapeHtml(String(code))}</button>`,
    )
    .join("");
  const responseBodies = responseCodes
    .map((code, i) => {
      const response = operation.responses[code];
      const json = response.content?.["application/json"];
      const inner = [schemaTree(json?.schema, json?.schema?.$ref?.split("/").pop(), schemas), json?.example ? codeBlock(json.example) : ""]
        .filter(Boolean)
        .join("");
      return `<div class="sref-tab-panel${i === 0 ? " is-active" : ""}" data-panel="${anchor}-resp-${code}" role="tabpanel">${inner || '<div class="sref-muted">No content.</div>'}</div>`;
    })
    .join("");

  return `
<article class="sref-operation" id="${anchor}" data-tag="${escapeHtml((operation.tags ?? [])[0] ?? "")}">
  <button type="button" class="sref-operation-toggle" aria-expanded="false" aria-controls="${anchor}-body">
    <span class="sref-method ${METHOD_CLASS[method] ?? ""}">${method.toUpperCase()}</span>
    <code class="sref-op-path">${escapeHtml(path)}</code>
    <span class="sref-op-summary">${escapeHtml(operation.summary ?? "")}</span>
    <span class="sref-chevron" aria-hidden="true">›</span>
  </button>
  <div class="sref-operation-body" id="${anchor}-body" hidden>
    <div class="sref-operation-meta"><span class="sref-muted">operationId:</span> <code>${escapeHtml(operation.operationId)}</code></div>
    <p class="sref-description">${escapeHtml(operation.description ?? "")}</p>
    ${paramsPanel(operation)}
    ${requestBodyPanel(operation, schemas)}
    <div class="sref-section">
      <h4 class="sref-label">Responses <span class="sref-badge">${responseCodes.length} status codes</span></h4>
      ${responseCodes.length > 0 ? `<div class="sref-tabs" role="tablist" aria-label="Response status codes">${sampleTabs}</div>${responseBodies}` : '<div class="sref-muted">No responses documented.</div>'}
    </div>
  </div>
</article>`;
};

export const renderReference = ({ version, openapi, liveExamples, generatedAt }) => {
  const schemas = openapi.components?.schemas ?? {};
  const paths = Object.entries(openapi.paths);
  const tagOrder = openapi.tags.map((t) => t.name);

  const railHtml = tagOrder
    .map((tag) => {
      const items = paths
        .filter(([, pathItem]) => Object.values(pathItem).some((op) => op.tags?.includes(tag)))
        .flatMap(([path, pathItem]) =>
          Object.entries(pathItem)
            .filter(([, op]) => typeof op === "object" && op?.tags?.includes(tag))
            .map(([method]) => `
<li><a href="#${escapeHtml(operationAnchor(path, method))}" class="sref-nav-link" data-anchor="${escapeHtml(operationAnchor(path, method))}">
  <span class="sref-method ${METHOD_CLASS[method] ?? ""}">${method.toUpperCase()}</span>
  <span class="sref-nav-path">${escapeHtml(path)}</span>
</a></li>`),
        )
        .join("\n");
      return `<div class="sref-nav-group" data-tag="${escapeHtml(tag)}">
<p class="sref-nav-label">${escapeHtml(tag)}</p>
<ul class="sref-nav-list">${items}</ul>
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
      return `<section class="sref-tag-section" data-tag="${escapeHtml(tag)}" id="tag-${escapeHtml(tag.toLowerCase())}">
<h2 class="sref-tag-title">${escapeHtml(tag)}</h2>
<p class="sref-tag-description">${escapeHtml(meta?.description ?? "")}</p>
${operations}
</section>`;
    })
    .join("\n");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(openapi.info.title)} ${version} — API Reference</title>
<style>
  :root { --ink: #1f2c40; --paper: #f4f7fb; --line: #b9c9dc; --slate: #53657e; --blue: #1769c2; --navy: #102c57; --panel: #ffffff; --code-bg: #102c57; }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: var(--paper); color: var(--ink); font: 15px/1.65 Arial, sans-serif; }
  .sref-shell { min-height: 100vh; display: flex; flex-direction: column; }
  .sref-header { position: sticky; top: 0; z-index: 50; display: flex; align-items: center; gap: 18px; min-height: 64px; padding: 0 3vw; background: var(--paper); border-bottom: 1px solid var(--line); }
  .sref-header strong { font-size: 14px; font-weight: 650; }
  .sref-header .sref-counts { margin-left: auto; }
  .sref-counts { font: 600 10px/1.5 SFMono-Regular, Consolas, monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--slate); }
  .sref-search { min-width: 240px; min-height: 38px; padding: 0 12px; border: 1px solid var(--line); border-radius: 6px; background: #fff; color: var(--ink); font: 14px/1.3 Arial, sans-serif; }
  .sref-search:focus-visible { border-color: var(--blue); box-shadow: 0 0 0 2px color-mix(in srgb, var(--blue) 30%, transparent); outline: 0; }
  .sref-download { padding: 8px 14px; border: 1px solid var(--navy); border-radius: 999px; background: var(--navy); color: #fff; font: 600 11px/1.2 Arial, sans-serif; text-decoration: none; }
  .sref-download:hover, .sref-download:focus-visible { filter: brightness(1.15); outline: 0; }
  .sref-layout { display: flex; align-items: flex-start; }
  .sref-rail { width: 300px; flex: 0 0 300px; position: sticky; top: 0; max-height: 100vh; overflow-y: auto; padding: 22px 14px 40px; border-right: 1px solid var(--line); background: var(--paper); }
  .sref-nav-group + .sref-nav-group { margin-top: 24px; }
  .sref-nav-label { margin: 0 0 8px; padding: 0 10px; font: 600 10px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--slate); }
  .sref-nav-list { display: grid; gap: 3px; margin: 0; padding: 0; list-style: none; }
  .sref-nav-link { display: flex; align-items: center; gap: 9px; padding: 7px 10px; border-radius: 6px; color: var(--slate); font-size: 12.5px; text-decoration: none; transition: background 140ms ease, color 140ms ease; }
  .sref-nav-link:hover, .sref-nav-link:focus-visible { background: rgba(16, 44, 87, .05); color: var(--ink); outline: 0; }
  .sref-nav-link.is-active { background: var(--navy); color: #fff; }
  .sref-nav-link.is-active .sref-nav-path { color: #fff; }
  .sref-nav-path { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: SFMono-Regular, Consolas, monospace; font-size: 11.5px; }
  .sref-rail .sref-method { padding: 2px 6px; font-size: 9px; flex: 0 0 auto; }
  .sref-rail-quick { margin: 0 10px 22px; display: grid; gap: 8px; }
  .sref-quick-link { display: flex; align-items: center; gap: 9px; padding: 9px 12px; border: 1px solid var(--line); border-radius: 6px; background: #fff; color: var(--ink); font: 600 11px/1.3 Arial, sans-serif; text-decoration: none; }
  .sref-quick-link:hover, .sref-quick-link:focus-visible { border-color: var(--blue); color: var(--blue); outline: 0; }
  .sref-content { flex: 1; min-width: 0; padding: 30px 3vw 80px; }
  .sref-kicker { margin: 0 0 6px; font: 600 10px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .15em; text-transform: uppercase; color: var(--slate); }
  h1 { margin: 0 0 4px; font: 400 clamp(28px, 4vw, 42px)/0.98 Georgia, serif; letter-spacing: -.03em; }
  .sref-version { font: 600 11px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .12em; color: var(--slate); text-transform: uppercase; }
  .sref-lede { margin: 14px 0 6px; max-width: 700px; color: var(--slate); }
  .sref-lede code { font: 13px SFMono-Regular, Consolas, monospace; }
  .sref-tag-section { margin: 38px 0 0; scroll-margin-top: 90px; }
  .sref-tag-title { margin: 0 0 4px; font: 600 12px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .15em; text-transform: uppercase; color: var(--navy); border-bottom: 1px solid var(--line); padding-bottom: 10px; }
  .sref-tag-description { margin: 10px 0 14px; color: var(--slate); font-size: 14px; }
  .sref-operation { margin: 0 0 12px; background: #fff; border: 1px solid var(--line); border-radius: 6px; overflow: hidden; scroll-margin-top: 90px; }
  .sref-operation.is-active { border-color: var(--blue); }
  .sref-operation-toggle { display: flex; align-items: center; gap: 12px; width: 100%; padding: 14px 18px; border: 0; background: #fff; font: inherit; text-align: left; cursor: pointer; }
  .sref-operation-toggle:hover { background: color-mix(in srgb, var(--paper) 55%, #fff); }
  .sref-method { padding: 4px 10px; border-radius: 999px; font: 600 11px/1 SFMono-Regular, Consolas, monospace; color: #fff; flex: 0 0 auto; }
  .sref-method--get { background: var(--navy); }
  .sref-method--post { background: var(--blue); }
  .sref-method--delete { background: #53657e; }
  .sref-op-path { font: 600 13.5px/1.3 SFMono-Regular, Consolas, monospace; color: var(--ink); }
  .sref-op-summary { margin-left: auto; color: var(--slate); font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .sref-chevron { flex: 0 0 auto; font: 600 14px/1 SFMono-Regular, Consolas, monospace; color: var(--slate); transition: transform 160ms ease; }
  .sref-operation.is-open .sref-chevron { transform: rotate(90deg); }
  .sref-operation-body { padding: 2px 18px 18px; border-top: 1px solid var(--line); }
  .sref-operation-meta { padding: 12px 0 2px; }
  .sref-muted { color: var(--slate); font-size: 12px; }
  .sref-muted code { font: 12px SFMono-Regular, Consolas, monospace; }
  .sref-description { margin: 6px 0 12px; color: var(--slate); font-size: 14px; }
  .sref-section { margin-top: 16px; }
  .sref-label { margin: 0 0 8px; font: 600 11px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--slate); }
  .sref-badge { display: inline-block; margin-left: 6px; padding: 2px 8px; background: color-mix(in srgb, var(--blue) 12%, transparent); border-radius: 999px; font: 600 10px/1.4 SFMono-Regular, Consolas, monospace; color: var(--blue); }
  .sref-req { color: var(--blue); font: 600 10px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .08em; text-transform: uppercase; }
  .sref-table { width: 100%; border-collapse: collapse; margin: 0 0 6px; font-size: 13px; }
  .sref-table th { text-align: left; font: 600 10px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--slate); border-bottom: 1px solid var(--line); padding: 6px 8px 6px 0; }
  .sref-table td { padding: 6px 8px 6px 0; border-bottom: 1px solid color-mix(in srgb, var(--line) 50%, transparent); vertical-align: top; }
  .sref-schema { margin: 0 0 8px; padding: 12px 14px; background: var(--paper); border: 1px solid var(--line); border-radius: 6px; }
  .sref-schema-title { margin: 0 0 8px; font: 600 11px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--navy); }
  .sref-prop { padding: 5px 0; border-bottom: 1px solid color-mix(in srgb, var(--line) 40%, transparent); font-size: 13px; }
  .sref-prop:last-child { border-bottom: 0; }
  .sprop-row { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
  .sprop-name { font: 600 12.5px/1.4 SFMono-Regular, Consolas, monospace; color: var(--navy); }
  .sprop-type { font: 500 12px/1.4 SFMono-Regular, Consolas, monospace; color: var(--slate); }
  .sprop-desc, .sprop-row + .sprop-desc { color: var(--slate); font-size: 12.5px; padding-top: 2px; }
  .sref-tabs { display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 8px; }
  .sref-tab { padding: 6px 12px; border: 1px solid var(--line); border-radius: 999px; background: #fff; color: var(--slate); font: 600 11px/1 SFMono-Regular, Consolas, monospace; cursor: pointer; }
  .sref-tab:hover, .sref-tab:focus-visible { border-color: var(--navy); color: var(--navy); outline: 0; }
  .sref-tab.is-active { border-color: var(--navy); background: var(--navy); color: #fff; }
  .sref-tab-panel[hidden] { display: none; }
  .sref-code { margin: 0 0 6px; padding: 12px 14px; background: var(--code-bg); color: #e8f0fa; border-radius: 6px; overflow-x: auto; font: 12px/1.55 SFMono-Regular, Consolas, monospace; }
  .sref-response-head { margin: 10px 0 6px; font: 600 11px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--slate); }
  .sref-status { padding: 2px 8px; border-radius: 4px; background: color-mix(in srgb, var(--navy) 8%, transparent); font: 600 12px/1.4 SFMono-Regular, Consolas, monospace; }
  .sref-try { margin-top: 10px; padding: 12px 14px; background: var(--paper); border: 1px solid var(--line); border-radius: 6px; font: 12px/1.6 SFMono-Regular, Consolas, monospace; overflow-x: auto; white-space: pre; }
  .sref-try-label { display: block; font: 600 10px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--slate); margin-bottom: 6px; }
  .sref-footer { margin-top: 44px; padding-top: 16px; border-top: 1px solid var(--line); font-size: 13px; color: var(--slate); }
  .sref-footer code { font: 12px SFMono-Regular, Consolas, monospace; }
  .sref-empty { padding: 24px; text-align: center; color: var(--slate); font-size: 14px; }
  @media (max-width: 1050px) {
    .sref-layout { flex-direction: column; }
    .sref-rail { position: static; width: 100%; flex: 0 0 auto; max-height: none; border-right: 0; border-bottom: 1px solid var(--line); }
    .sref-nav-list { display: flex; flex-wrap: wrap; gap: 6px; }
    .sref-content { padding: 24px 4vw 60px; }
    .sref-op-summary { display: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .sref-chevron { transition: none; }
  }
</style>
</head>
<body>
<div class="sref-shell">
  <header class="sref-header">
    <strong>${escapeHtml(openapi.info.title)}</strong>
    <input type="search" class="sref-search" placeholder="Filter operations…" aria-label="Filter operations" />
    <span class="sref-counts">v${escapeHtml(openapi.info.version)} · ${paths.length} paths · ${paths.reduce((count, [, item]) => count + Object.keys(item).length, 0)} ops</span>
    <a class="sref-download" href="/api/openapi.json" download="openapi.json">OpenAPI 3.0</a>
  </header>
  <div class="sref-layout">
    <aside class="sref-rail" aria-label="API operations">
      <div class="sref-rail-quick">
        <a class="sref-quick-link" href="/api/openapi.json">⬇ OpenAPI 3.0.4 contract</a>
        <a class="sref-quick-link" href="/api/manifest">☰ Compact agent manifest</a>
      </div>
      ${railHtml}
    </aside>
    <main class="sref-content">
      <p class="sref-kicker">OpenAPI ${escapeHtml(openapi.openapi)}</p>
      <h1>${escapeHtml(openapi.info.title)}</h1>
      <span class="sref-version">v${escapeHtml(openapi.info.version)} · generated ${escapeHtml(generatedAt)}</span>
      <p class="sref-lede">${escapeHtml(openapi.info.description)}</p>
      ${contentHtml}
      <section class="sref-tag-section" id="tag-live">
        <h2 class="sref-tag-title">Live Examples</h2>
        <p class="sref-tag-description">Captured from this running server at generation time — real data, not mockups.</p>
        ${liveExamples
          .map(
            (example) => `<article class="sref-operation is-open" id="${escapeHtml(`operation-get-${example.path.replace(/\//g, "-").slice(1)}`)}">
  <button type="button" class="sref-operation-toggle" aria-expanded="true" aria-controls="${escapeHtml(`body-${example.path.replace(/\//g, "-").slice(1)}`)}">
    <span class="sref-method ${METHOD_CLASS[example.method.toLowerCase()] ?? ""}">${example.method.toUpperCase()}</span>
    <code class="sref-op-path">${escapeHtml(example.path)}</code>
    <span class="sref-op-summary">${escapeHtml(example.note)}</span>
    <span class="sref-chevron" aria-hidden="true">›</span>
  </button>
  <div class="sref-operation-body" id="${escapeHtml(`body-${example.path.replace(/\//g, "-").slice(1)}`)}">
    <div class="sref-try"><span class="sref-try-label">Live response · ${escapeHtml(String(example.status))}</span>${escapeHtml(example.body)}</div>
  </div>
</article>`,
          )
          .join("\n")}
      </section>
      <footer class="sref-footer">
        Contract: <code>GET /api/openapi.json</code> (OpenAPI 3.0.4) · Compact index: <code>GET /api/manifest</code> · This page: <code>GET /api/doc</code>
      </footer>
    </main>
  </div>
</div>
<script>
(function () {
  // Collapse/expand operations (Swagger UI docExpansion: "list" behavior)
  document.querySelectorAll(".sref-operation-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const operation = toggle.closest(".sref-operation");
      const body = document.getElementById(toggle.getAttribute("aria-controls"));
      const isOpen = operation.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (body) body.hidden = !isOpen;
    });
  });

  // Response status-code sample tabs (Redoc response samples pattern)
  document.querySelectorAll(".sref-tabs").forEach((tabs) => {
    tabs.addEventListener("click", (event) => {
      const tab = event.target.closest(".sref-tab");
      if (!tab) return;
      const container = tabs.parentElement;
      container.querySelectorAll(".sref-tab").forEach((t) => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      const scope = container.parentElement;
      scope.querySelectorAll(".sref-tab-panel").forEach((panel) => {
        const isActive = panel.getAttribute("data-panel") === tab.getAttribute("data-target");
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    });
  });

  // Sidebar filter (Swagger UI filter pattern)
  const search = document.querySelector(".sref-search");
  if (search) {
    search.addEventListener("input", () => {
      const query = search.value.toLowerCase();
      document.querySelectorAll(".sref-nav-link").forEach((link) => {
        const match = link.textContent.toLowerCase().includes(query);
        link.style.display = match ? "" : "none";
      });
      document.querySelectorAll(".sref-nav-group").forEach((group) => {
        const visible = Array.from(group.querySelectorAll(".sref-nav-link")).some((link) => link.style.display !== "none");
        group.style.display = visible ? "" : "none";
      });
      document.querySelectorAll(".sref-operation").forEach((operation) => {
        const text = operation.textContent.toLowerCase();
        operation.style.display = text.includes(query) ? "" : "none";
      });
    });
  }

  // Scroll-sync + active highlighting (Redoc menu/scrolling synchronization)
  const links = Array.from(document.querySelectorAll(".sref-nav-link[data-anchor]"));
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
  document.querySelectorAll(".sref-operation[id]").forEach((operation) => observer.observe(operation));

  // Sidebar click: expand target and mark active
  document.querySelectorAll(".sref-nav-link[data-anchor]").forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.getElementById(link.getAttribute("data-anchor"));
      if (target) {
        target.classList.add("is-open", "is-active");
        const body = target.querySelector(".sref-operation-body");
        if (body) body.hidden = false;
        const toggle = target.querySelector(".sref-operation-toggle");
        if (toggle) toggle.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Deep-link open on load
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target && target.classList.contains("sref-operation")) {
      target.classList.add("is-open");
      const body = target.querySelector(".sref-operation-body");
      if (body) body.hidden = false;
      const toggle = target.querySelector(".sref-operation-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "true");
    }
  }
})();
</script>
</body>
</html>`;
};