import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist", import.meta.url));
const index = fileURLToPath(new URL("../dist/index.html", import.meta.url));

export const app = new Hono();

function publicOrigin(request) {
  const forwardedProto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const url = new URL(request.url);
  const protocol = forwardedProto || url.protocol.slice(0, -1);
  const host = forwardedHost || url.host;

  return `${protocol}://${host}`;
}

function withAbsoluteSocialMetadata(response, request) {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.startsWith("text/html")) return response;

  const origin = publicOrigin(request);
  const requestUrl = new URL(request.url);
  const pageUrl = new URL(`${requestUrl.pathname}${requestUrl.search}${requestUrl.hash}`, origin).href;
  const socialImageUrl = new URL("/vision-school-og.png", origin).href;
  const html = response
    .clone()
    .text()
    .then((body) => body
      .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${pageUrl}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${pageUrl}$2`)
      .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${socialImageUrl}$2`)
      .replace(/(<meta property="og:image:secure_url" content=")[^"]*(")/, `$1${socialImageUrl}$2`)
      .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${socialImageUrl}$2`));

  return html.then((body) => new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  }));
}

app.use("/*", async (c, next) => {
  await next();
  c.res = await withAbsoluteSocialMetadata(c.res, c.req.raw);
});

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
