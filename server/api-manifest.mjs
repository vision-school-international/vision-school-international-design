// Single source of truth for the API surface.
// Every route registers itself here with its docs metadata.
// Adding an endpoint = adding one entry; docs, manifest, and examples update automatically.

export const endpoints = [
  {
    method: "GET",
    path: "/api/manifest",
    group: "Discovery",
    summary: "Machine-readable catalog of every endpoint, including this one.",
    description:
      "Returns the full endpoint list with methods, paths, parameters, and request/response shapes. Point any agent or client here first — it never goes stale because it is generated from this same registry.",
    params: [],
    responseExample: {
      version: "…",
      endpoints: [{ method: "GET", path: "/api/manifest", summary: "…" }],
    },
  },
  {
    method: "GET",
    path: "/api/registry",
    group: "Discovery",
    summary: "Everything that can be placed on a page.",
    description:
      "Returns all registered sections (with purpose, result, and anatomy copy), the journey stages they group into, and every concept with the sections it can render. This is the planning payload: read it once, then compose pages.",
    params: [],
    responseExampleFields: {
      sections: "array of { key, name, description, anatomy, image, color }",
      stages: "array of { number, name, sections[] }",
      concepts: "array of { key, name, sections[] }",
    },
  },
  {
    method: "GET",
    path: "/api/pages",
    group: "Pages",
    summary: "List every composed page.",
    description: "Returns the full array of page records persisted server-side.",
    params: [],
    responseExample: [{ key: "…", name: "…", entries: [] }],
  },
  {
    method: "POST",
    path: "/api/pages",
    group: "Pages",
    summary: "Create a page, or fully update one if the key exists.",
    description:
      "Idempotent by key. Validates every entry against the registry: the section must exist and the conceptKey must be registered for that section. Duplicate page names are rejected on create.",
    params: [
      { name: "key", in: "body", type: "string", required: true, note: "lowercase kebab-case" },
      { name: "name", in: "body", type: "string", required: true, note: "unique across pages" },
      { name: "entries", in: "body", type: "array", required: true, note: "ordered { section, conceptKey } pairs" },
    ],
    requestExample: {
      key: "missions",
      name: "Missions Page",
      entries: [
        { section: "navigation", conceptKey: "search-navigation" },
        { section: "hero", conceptKey: "purpose-hero" },
      ],
    },
    responseExample: { ok: true, url: "/pages/missions", page: { key: "missions" } },
    statusCodes: { 200: "existing page updated", 201: "new page created", 400: "validation failed" },
  },
  {
    method: "POST",
    path: "/api/pages/validate",
    group: "Pages",
    summary: "Check an entries array without saving.",
    description:
      "Same validation as POST /api/pages but nothing is written. Use it to dry-run a sequence, or to explain to a user why their sequence is rejected.",
    params: [{ name: "entries", in: "body", type: "array", required: true, note: "ordered { section, conceptKey } pairs" }],
    responseExample: { ok: true, errors: [] },
  },
  {
    method: "DELETE",
    path: "/api/pages/:key",
    group: "Pages",
    summary: "Delete a composed page.",
    description: "Removes the page by key. 404 if the key does not exist.",
    params: [{ name: "key", in: "path", type: "string", required: true, note: "page key" }],
    responseExample: { ok: true },
    statusCodes: { 200: "deleted", 404: "unknown key" },
  },
  {
    method: "GET",
    path: "/api/doc",
    group: "Discovery",
    summary: "This documentation page.",
    description: "Human-readable HTML rendered live from the same manifest that /api/manifest serves.",
    params: [],
  },
];

export const workflow = [
  "GET /api/manifest — learn what endpoints exist",
  "GET /api/registry — learn what sections and concepts exist",
  "POST /api/pages — compose the sequence (validated server-side)",
  "Open /pages/<key> — the composed page renders for humans",
];