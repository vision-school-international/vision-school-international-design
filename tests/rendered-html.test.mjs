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
  const bundle = (await Promise.all(
    javascript.map((name) => readFile(new URL(`../dist/assets/${name}`, import.meta.url), "utf8")),
  )).join("\n");

  assert.match(bundle, /Design concepts by section\./);
  assert.match(bundle, /Six design concepts are shown/);
  assert.match(bundle, /Navigation/);
  assert.match(bundle, /Hero/);
  assert.match(bundle, /Class finder/);
  assert.match(bundle, /Calls to action/);
  assert.match(bundle, /Concept 1 — Editorial/);
  assert.match(bundle, /Concept 2 — Contemporary/);
  assert.match(bundle, /Concept 3 — International/);
  assert.match(bundle, /Concept 4 — Community/);
  assert.match(bundle, /Concept 5 — Bold/);
  assert.match(bundle, /Concept 6 — Cinematic/);
  assert.match(bundle, /Design review/);
});
