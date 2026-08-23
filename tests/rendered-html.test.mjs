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
  const bundle = (await Promise.all(
    javascript.map((name) => readFile(new URL(`../dist/assets/${name}`, import.meta.url), "utf8")),
  )).join("\n");

  assert.match(bundle, /Design concepts/);
  assert.match(bundle, /Navigation/);
  assert.match(bundle, /Hero/);
  assert.match(bundle, /Class finder/);
  assert.match(bundle, /Calls to action/);
  assert.match(bundle, /Video library/);
  assert.match(bundle, /Mission camp videos/);
  assert.match(bundle, /2026.*Shalom Jerusalem/);
  assert.match(bundle, /North America Young Generation Mission Camp/);
  assert.match(bundle, /ASEAN Mission Camp Sketch Video/);
  assert.match(bundle, /Editorial/);
  assert.match(bundle, /Contemporary/);
  assert.match(bundle, /International/);
  assert.match(bundle, /Community/);
  assert.match(bundle, /Bold/);
  assert.match(bundle, /Cinematic/);
  assert.match(bundle, /Concept treatments/);
  assert.match(bundle, /aria-selected/);
});
