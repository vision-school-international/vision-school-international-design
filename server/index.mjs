import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist", import.meta.url));
const index = fileURLToPath(new URL("../dist/index.html", import.meta.url));

export const app = new Hono();

app.get("/health", (c) => c.text("ok"));
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
