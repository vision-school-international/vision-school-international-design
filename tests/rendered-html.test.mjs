import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const { app } = await import("../server/index.mjs");

async function render(path = "/") {
  return app.request(`http://localhost${path}`, {
    headers: { accept: "text/html" },
  });
}

test("serves the component gallery shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Vision School International — Component Review Gallery<\/title>/i);
  assert.match(html, /href="\/favicon\.ico"/i);
  assert.match(html, /href="\/favicon\.svg"/i);
  assert.match(html, /property="og:image" content="\/vision-school-og\.png"/i);
  assert.match(html, /name="twitter:image" content="\/vision-school-og\.png"/i);
  assert.match(html, /id="root"/);
  assert.match(html, /<script type="module"/);
});

test("responds to the health check", async () => {
  const response = await app.request("http://localhost/health");
  assert.equal(response.status, 200);
  assert.equal(await response.text(), "ok");
});

test("bundles the component gallery content into the client", async () => {
  const assetNames = await readdir(new URL("../dist/assets/", import.meta.url));
  const javascript = assetNames.filter((name) => name.endsWith(".js"));
  const css = assetNames.filter((name) => name.endsWith(".css"));
  const bundle = (await Promise.all(
    javascript.map((name) => readFile(new URL(`../dist/assets/${name}`, import.meta.url), "utf8")),
  )).join("\n");
  const styles = (await Promise.all(
    css.map((name) => readFile(new URL(`../dist/assets/${name}`, import.meta.url), "utf8")),
  )).join("\n");

  assert.match(bundle, /Design concepts/);
  assert.doesNotMatch(bundle, /What user question does this component answer/);
  assert.doesNotMatch(bundle, /What action or decision should it make easier/);
  assert.match(bundle, /Navigation/);
  assert.match(bundle, /Hero/);
  assert.match(bundle, /Class finder/);
  assert.match(bundle, /Calls to action/);
  assert.match(bundle, /Video library/);
  assert.match(bundle, /Mission camp videos/);
  assert.match(bundle, /2026.*Shalom Jerusalem/);
  assert.match(bundle, /North America Young Generation Mission Camp/);
  assert.match(bundle, /ASEAN Mission Camp Sketch Video/);
  assert.match(bundle, /Search Navigation/);
  assert.match(bundle, /Purpose Hero/);
  assert.match(bundle, /Program Proof/);
  assert.match(bundle, /Mission Value Proposition/);
  assert.match(bundle, /Course Pathway/);
  assert.match(bundle, /Student Story/);
  assert.match(bundle, /Mission Video Library/);
  assert.match(bundle, /Decision CTA/);
  assert.match(bundle, /Utility Footer/);
  assert.match(bundle, /Primary links/);
  assert.match(bundle, /Hero visual/);
  assert.match(bundle, /Program facts/);
  assert.match(bundle, /Session structure/);
  assert.match(bundle, /Registration action/);
  assert.match(bundle, /Search site content/);
  assert.match(bundle, /Frederick, MD/);
  assert.match(bundle, /Gaithersburg, MD/);
  assert.match(bundle, /Baltimore, MD/);
  assert.match(bundle, /Previous class/);
  assert.match(bundle, /Next class/);
  assert.match(bundle, /aria-live/);
  assert.match(bundle, /Closest-path emphasis/);
  assert.match(bundle, /Best for users comparing commute/);
  assert.match(bundle, /Decision-path emphasis/);
  assert.match(styles, /class-finder--focused/);
  assert.match(styles, /class-finder--comparison/);
  assert.match(styles, /class-finder--decision/);
  assert.match(bundle, /Concept options/);
  assert.match(bundle, /aria-selected/);
  assert.doesNotMatch(bundle, /\d{2} \/ \d{2} · Component/);

  const historicalLabels = ["Orig" + "inal treatment", "Ref" + "ined treatment"].join("|");
  assert.doesNotMatch(bundle, new RegExp(historicalLabels, "i"));

  const oldConceptLabels = [
    ["Edit", "orial"].join(""),
    ["Contemp", "orary"].join(""),
    ["Bo", "ld"].join(""),
    ["Cinema", "tic"].join(""),
    ["Find", " Nearby"].join(""),
    ["Compare", " Fit"].join(""),
    ["Take", " Next Step"].join(""),
  ].join("|");
  assert.doesNotMatch(bundle, new RegExp(oldConceptLabels));

  const livePalette = ["#102c57", "#1769c2", "#66afe6", "#1f2c40", "#53657e", "#f4f7fb", "#b9c9dc"];
  for (const color of livePalette) {
    assert.match(styles, new RegExp(color, "i"));
  }

  const portableTokenBindings = [
    /--search-nav-bg:\s*var\(--color-page,\s*#f4f7fb\)/i,
    /--search-nav-surface:\s*var\(--color-surface,\s*#fff(?:fff)?\)/i,
    /--search-nav-text:\s*var\(--color-text-strong,\s*#102c57\)/i,
    /--search-nav-border:\s*var\(--color-border,\s*#b9c9dc\)/i,
    /--search-nav-action:\s*var\(--color-action,\s*#102c57\)/i,
    /--search-nav-font-mono:\s*var\(--font-mono,\s*monospace\)/i,
    /--finder-bg:\s*var\(--color-page,\s*#f4f7fb\)/i,
    /--finder-card:\s*var\(--color-surface,\s*#fff(?:fff)?\)/i,
    /--finder-ink:\s*var\(--color-text-strong,\s*#102c57\)/i,
    /--finder-line:\s*var\(--color-border,\s*#b9c9dc\)/i,
    /--finder-accent:\s*var\(--color-link,\s*#1769c2\)/i,
    /--finder-font-mono:\s*var\(--font-mono,\s*monospace\)/i,
  ];
  for (const tokenBinding of portableTokenBindings) {
    assert.match(styles, tokenBinding);
  }
  assert.doesNotMatch(styles, /\.search-nav[^}]*--font-geist|\.class-finder[^}]*--font-geist/i);

  const stalePalette = ["#153e3a", "#143d3a", "#df6d49", "#e1bb54", "#f5f1e6", "#fffdf8", "#5d6d67"].join("|");
  assert.doesNotMatch(styles, new RegExp(stalePalette, "i"));
});
