const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const jsonBlock = (value) =>
  `<pre class="api-doc-code"><code>${escapeHtml(JSON.stringify(value, null, 2))}</code></pre>`;

const paramRows = (params) =>
  params.length === 0
    ? `<tr><td colspan="4" class="api-doc-muted">No parameters.</td></tr>`
    : params
        .map(
          (param) => `<tr>
<td><code>${escapeHtml(param.name)}</code></td>
<td>${escapeHtml(param.in)}</td>
<td>${escapeHtml(param.type)}</td>
<td>${escapeHtml(param.note ?? "")}</td>
</tr>`,
        )
        .join("");

const endpointCard = (endpoint) => `
<article class="api-doc-endpoint" id="${escapeHtml(`${endpoint.method}-${endpoint.path}`)}">
  <header class="api-doc-endpoint-head">
    <span class="api-doc-method api-doc-method--${endpoint.method.toLowerCase()}">${endpoint.method}</span>
    <code class="api-doc-path">${escapeHtml(endpoint.path)}</code>
  </header>
  <p class="api-doc-summary">${escapeHtml(endpoint.summary)}</p>
  <p class="api-doc-description">${escapeHtml(endpoint.description)}</p>
  <table class="api-doc-table" aria-label="Parameters for ${escapeHtml(endpoint.method)} ${escapeHtml(endpoint.path)}">
    <thead><tr><th>Parameter</th><th>Location</th><th>Type</th><th>Notes</th></tr></thead>
    <tbody>${paramRows(endpoint.params ?? [])}</tbody>
  </table>
  ${endpoint.requestExample ? `<h4>Request body</h4>${jsonBlock(endpoint.requestExample)}` : ""}
  ${endpoint.responseExample ? `<h4>Response</h4>${jsonBlock(endpoint.responseExample)}` : ""}
  ${endpoint.responseExampleFields ? `<h4>Response shape</h4>${jsonBlock(endpoint.responseExampleFields)}` : ""}
  ${endpoint.statusCodes ? `<h4>Status codes</h4><ul class="api-doc-status">${Object.entries(endpoint.statusCodes).map(([code, meaning]) => `<li><code>${code}</code> — ${escapeHtml(meaning)}</li>`).join("")}</ul>` : ""}
</article>`;

export const renderApiDoc = ({ version, endpointCount, registry, workflow, endpoints }) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Gallery API — Documentation</title>
<style>
  :root { --ink: #1f2c40; --paper: #f4f7fb; --line: #b9c9dc; --slate: #53657e; --blue: #1769c2; --navy: #102c57; }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--paper); color: var(--ink); font: 15px/1.6 Arial, sans-serif; }
  .api-doc-shell { max-width: 860px; margin: 0 auto; padding: 40px 24px 80px; }
  .api-doc-kicker { margin: 0 0 8px; font: 600 10px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .15em; text-transform: uppercase; color: var(--slate); }
  h1 { margin: 0 0 14px; font: 400 clamp(34px, 5vw, 56px)/0.95 Georgia, serif; letter-spacing: -.03em; }
  .api-doc-lede { margin: 0 0 28px; max-width: 620px; color: var(--slate); }
  .api-doc-toc { margin: 0 0 32px; padding: 18px 22px; background: #fff; border: 1px solid var(--line); border-radius: 6px; }
  .api-doc-toc h2 { margin: 0 0 10px; font: 400 19px/1.2 Georgia, serif; }
  .api-doc-toc ol { margin: 0; padding-left: 20px; color: var(--slate); }
  .api-doc-toc code { font: 12px SFMono-Regular, Consolas, monospace; color: var(--ink); }
  .api-doc-meta { margin: 0 0 36px; font: 600 10px/1.4 SFMono-Regular, Consolas, monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--slate); }
  .api-doc-group { margin: 40px 0 12px; font: 600 11px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .15em; text-transform: uppercase; color: var(--navy); border-bottom: 1px solid var(--line); padding-bottom: 8px; }
  .api-doc-endpoint { margin: 0 0 18px; padding: 20px 22px; background: #fff; border: 1px solid var(--line); border-radius: 6px; }
  .api-doc-endpoint-head { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
  .api-doc-method { padding: 4px 10px; border-radius: 999px; font: 600 11px/1 SFMono-Regular, Consolas, monospace; color: #fff; }
  .api-doc-method--get { background: var(--navy); }
  .api-doc-method--post { background: var(--blue); }
  .api-doc-method--delete { background: #53657e; }
  .api-doc-path { font: 600 14px/1 SFMono-Regular, Consolas, monospace; color: var(--ink); }
  .api-doc-summary { margin: 0 0 8px; font-weight: 600; }
  .api-doc-description { margin: 0 0 14px; color: var(--slate); font-size: 14px; }
  h4 { margin: 18px 0 6px; font: 600 11px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--slate); }
  .api-doc-code { margin: 0; padding: 12px 14px; background: var(--navy); color: #e8f0fa; border-radius: 6px; overflow-x: auto; font: 12px/1.55 SFMono-Regular, Consolas, monospace; }
  .api-doc-table { width: 100%; border-collapse: collapse; margin: 0 0 6px; font-size: 13px; }
  .api-doc-table th { text-align: left; font: 600 10px/1 SFMono-Regular, Consolas, monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--slate); border-bottom: 1px solid var(--line); padding: 6px 8px 6px 0; }
  .api-doc-table td { padding: 6px 8px 6px 0; border-bottom: 1px solid color-mix(in srgb, var(--line) 50%, transparent); vertical-align: top; }
  .api-doc-status { margin: 0; padding-left: 18px; color: var(--slate); font-size: 13px; }
  .api-doc-status code { font: 12px SFMono-Regular, Consolas, monospace; }
  .api-doc-live { margin-top: 48px; padding: 20px 22px; background: #fff; border: 1px solid var(--line); border-radius: 6px; }
  .api-doc-live h2 { margin: 0 0 6px; font: 400 22px/1.2 Georgia, serif; }
  .api-doc-live p { margin: 0 0 12px; color: var(--slate); font-size: 14px; }
</style>
</head>
<body>
<main class="api-doc-shell">
  <p class="api-doc-kicker">Gallery API</p>
  <h1>API Documentation</h1>
  <p class="api-doc-lede">Everything an agent needs to discover the component registry and compose validated pages. This page is rendered live from the endpoint manifest — when the API grows, this page grows with it.</p>
  <p class="api-doc-meta">${endpointCount} endpoints · version ${escapeHtml(version)} · ${escapeHtml(String(registry.sectionCount))} sections · ${escapeHtml(String(registry.conceptCount))} concepts</p>

  <section class="api-doc-toc">
    <h2>Standard workflow</h2>
    <ol>${workflow.map((step) => `<li><code>${escapeHtml(step)}</code></li>`).join("")}</ol>
  </section>

  ${["Discovery", "Pages"]
    .map(
      (group) => `
  <h3 class="api-doc-group">${group}</h3>
  ${endpoints.filter((e) => e.group === group).map(endpointCard).join("\n")}`,
    )
    .join("\n")}

  <section class="api-doc-live">
    <h2>Live registry snapshot</h2>
    <p>Counts and examples below are fetched from the running system, not hardcoded.</p>
    <h4>Section keys</h4>
    ${jsonBlock(registry.sectionKeys)}
    <h4>Valid concept keys by section (sample)</h4>
    ${jsonBlock(registry.conceptMapSample)}
  </section>
</main>
</body>
</html>`;

export const renderManifest = ({ version, endpointCount, registry, workflow, endpoints }) => ({
  version,
  generatedAt: new Date().toISOString(),
  counts: {
    endpoints: endpointCount,
    sections: registry.sectionCount,
    stages: registry.stageCount,
    concepts: registry.conceptCount,
  },
  workflow,
  endpoints,
});