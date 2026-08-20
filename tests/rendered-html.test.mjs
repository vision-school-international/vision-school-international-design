import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function render(path = "/") {
  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the four-concept selector", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Vision School International — Design Concepts<\/title>/i);
  assert.match(html, /Choose how the story begins\./);
  assert.match(html, /The Global Classroom/);
  assert.match(html, /Sent Together/);
  assert.match(html, /Every Nation/);
  assert.match(html, /The Way Forward/);
  assert.equal((html.match(/<button/g) ?? []).length, 5);
  assert.doesNotMatch(html, /href="\/concepts\//);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

const concepts = [
  ["/concepts/global-classroom", "See the story. Find your place in it."],
  ["/concepts/sent-together", "Formed in community. Sent to the nations."],
  ["/concepts/every-nation", "Your generation. Every nation."],
  ["/concepts/way-forward", "The world is waiting. Take the next step."],
];

for (const [path, headline] of concepts) {
  test(`renders ${path}`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(headline.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(html, /Illustrative class data for design review/);
    assert.match(html, /Content subject to ministry approval/);
  });
}
