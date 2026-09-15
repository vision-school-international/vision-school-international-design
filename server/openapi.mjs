// OpenAPI 3.0 description of this API, assembled from the same endpoint registry
// that powers the server routes. Single source of truth: adding an endpoint entry
// here updates /api/openapi.json and the reference docs automatically.

const buildOpenApi = ({ version }) => ({
  openapi: "3.0.4",
  info: {
    title: "Vision School Gallery API",
    version,
    description:
      "Read the component registry and compose validated pages. Every entry is validated server-side against the registry: a page cannot reference a section that does not exist or a concept that cannot render it.",
  },
  servers: [{ url: "/", description: "Current server" }],
  tags: [
    { name: "Discovery", description: "Find out what this API offers." },
    { name: "Pages", description: "Create, inspect, validate, and delete composed pages." },
  ],
  paths: {
    "/api/openapi.json": {
      get: {
        tags: ["Discovery"],
        operationId: "getOpenApiDocument",
        summary: "This OpenAPI description.",
        description:
          "The machine-readable contract for the entire API. Standards-compliant OpenAPI 3.0 — import it into Swagger UI, Postman, Stoplight, or any OpenAPI client.",
        responses: {
          "200": {
            description: "The OpenAPI document.",
            content: {
              "application/json": {
                schema: { type: "object", properties: { openapi: { type: "string" }, info: { type: "object" }, paths: { type: "object" } } },
              },
            },
          },
        },
      },
    },
    "/api/manifest": {
      get: {
        tags: ["Discovery"],
        operationId: "getManifest",
        summary: "Lightweight machine catalog of endpoints with live counts.",
        description:
          "A compact, non-standard index for agents that want the endpoint list and live entity counts in one call. For full fidelity use /api/openapi.json.",
        responses: {
          "200": {
            description: "Manifest with endpoint catalog and live counts.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    version: { type: "string", example: "1.0" },
                    generatedAt: { type: "string", format: "date-time" },
                    counts: {
                      type: "object",
                      properties: {
                        endpoints: { type: "integer" },
                        sections: { type: "integer" },
                        stages: { type: "integer" },
                        concepts: { type: "integer" },
                      },
                    },
                    workflow: { type: "array", items: { type: "string" } },
                    endpoints: { type: "array", items: { type: "object" } },
                  },
                },
                example: {
                  version: "1.0",
                  generatedAt: "2026-09-06T13:19:02.250Z",
                  counts: { endpoints: 7, sections: 21, stages: 6, concepts: 22 },
                  workflow: [
                    "GET /api/manifest — learn what endpoints exist",
                    "GET /api/registry — learn what sections and concepts exist",
                    "POST /api/pages — compose the sequence (validated server-side)",
                    "Open /pages/<key> — the composed page renders for humans",
                  ],
                },
              },
            },
          },
        },
      },
    },
    "/api/registry": {
      get: {
        tags: ["Discovery"],
        operationId: "getRegistry",
        summary: "All sections, stages, and concepts.",
        description:
          "The planning payload. Sections carry purpose/result/anatomy copy; stages group sections by page position; concepts list the renderable designs per section. Compose pages using only keys returned here.",
        responses: {
          "200": {
            description: "Registry contents.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    version: { type: "string" },
                    sections: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          key: { type: "string" },
                          name: { type: "string" },
                          description: { type: "string" },
                          anatomy: { type: "string" },
                          image: { type: "string" },
                          color: { type: "string" },
                        },
                        required: ["key", "name"],
                      },
                    },
                    stages: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          number: { type: "string" },
                          name: { type: "string" },
                          sections: { type: "array", items: { type: "string" } },
                        },
                      },
                    },
                    concepts: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          key: { type: "string" },
                          name: { type: "string" },
                          sections: { type: "array", items: { type: "string" } },
                        },
                        required: ["key", "name", "sections"],
                      },
                    },
                  },
                },
                example: {
                  sections: [
                    {
                      key: "hero",
                      name: "Hero",
                      description: "**Purpose:** State what the page offers and present the first action.\n**Result:** Users understand the page and can act within the first viewport, before scrolling.",
                      anatomy: "Headline · Subtitle · Action button · Media window",
                      color: "#1769c2",
                    },
                  ],
                  concepts: [{ key: "purpose-hero", name: "Purpose Hero", sections: ["hero"] }],
                },
              },
            },
          },
        },
      },
    },
    "/api/pages": {
      get: {
        tags: ["Pages"],
        operationId: "listPages",
        summary: "List every composed page.",
        description: "Returns the full array of page records persisted server-side, in registration order.",
        responses: {
          "200": {
            description: "Array of page records.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/PageList" },
                example: [
                  {
                    key: "missions",
                    name: "Missions Page",
                    entries: [
                      { section: "navigation", conceptKey: "search-navigation" },
                      { section: "hero", conceptKey: "purpose-hero" },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
      post: {
        tags: ["Pages"],
        operationId: "upsertPage",
        summary: "Create a page, or replace one if the key exists.",
        description:
          "Idempotent by key. Validates every entry against the registry: `section` must exist and `conceptKey` must be registered for that section. Creating with a duplicate `name` is rejected; posting an existing `key` replaces that page atomically.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/PageInput" },
              example: {
                key: "missions",
                name: "Missions Page",
                entries: [
                  { section: "navigation", conceptKey: "search-navigation" },
                  { section: "hero", conceptKey: "purpose-hero" },
                  { section: "proof", conceptKey: "trust-proof" },
                  { section: "cta", conceptKey: "decision-cta" },
                  { section: "footer", conceptKey: "utility-footer" },
                ],
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Page created.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/UpsertResult" },
                example: { ok: true, url: "/pages/missions", page: { key: "missions", name: "Missions Page", entries: [] } },
              },
            },
          },
          "200": {
            description: "Existing page replaced.",
            content: { "application/json": { schema: { $ref: "#/components/schemas/UpsertResult" } } },
          },
          "400": {
            description: "Validation failed — the errors array names each offending entry index and reason.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ValidationError" },
                example: { ok: false, errors: ['entries[1]: conceptKey "trust-proof" is not registered for section "hero"'] },
              },
            },
          },
        },
      },
    },
    "/api/pages/validate": {
      post: {
        tags: ["Pages"],
        operationId: "validateEntries",
        summary: "Validate an entries array without saving.",
        description: "Dry-run of the same validation POST /api/pages performs. Nothing is written.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  entries: { type: "array", items: { $ref: "#/components/schemas/SectionEntry" } },
                },
                required: ["entries"],
              },
              example: { entries: [{ section: "hero", conceptKey: "purpose-hero" }] },
            },
          },
        },
        responses: {
          "200": {
            description: "All entries valid.",
            content: { "application/json": { example: { ok: true, errors: [] } } },
          },
          "400": {
            description: "One or more entries invalid.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ValidationError" },
                example: { ok: false, errors: ['entries[0]: unknown section "sidebar"'] },
              },
            },
          },
        },
      },
    },
    "/api/pages/{key}": {
      delete: {
        tags: ["Pages"],
        operationId: "deletePage",
        summary: "Delete a composed page.",
        description: "Removes the page permanently. There is no undo.",
        parameters: [
          {
            name: "key",
            in: "path",
            required: true,
            description: "The page key (lowercase kebab-case).",
            schema: { type: "string", pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$" },
            example: "missions",
          },
        ],
        responses: {
          "200": {
            description: "Deleted.",
            content: { "application/json": { example: { ok: true } } },
          },
          "404": {
            description: "No page with that key.",
            content: { "application/json": { example: { error: 'no page with key "nope"' } } },
          },
        },
      },
    },
    "/api/doc": {
      get: {
        tags: ["Discovery"],
        operationId: "getApiDoc",
        summary: "Human-readable reference for this API.",
        description: "HTML reference rendered live from this OpenAPI document. GET /api redirects here.",
        responses: {
          "200": {
            description: "HTML reference page.",
            content: { "text/html": { schema: { type: "string" } } },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      SectionEntry: {
        type: "object",
        properties: {
          section: { type: "string", description: "A section key from GET /api/registry.", example: "hero" },
          conceptKey: { type: "string", description: "A concept key registered for that section.", example: "purpose-hero" },
        },
        required: ["section", "conceptKey"],
      },
      PageInput: {
        type: "object",
        properties: {
          key: { type: "string", pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$", description: "Lowercase kebab-case route key.", example: "missions" },
          name: { type: "string", description: "Human display name. Unique across pages on create.", example: "Missions Page" },
          entries: { type: "array", items: { $ref: "#/components/schemas/SectionEntry" }, description: "Ordered section sequence, top of page first." },
        },
        required: ["key", "name", "entries"],
      },
      PageList: {
        type: "array",
        items: {
          type: "object",
          properties: {
            key: { type: "string" },
            name: { type: "string" },
            entries: { type: "array", items: { $ref: "#/components/schemas/SectionEntry" } },
          },
          required: ["key", "name", "entries"],
        },
      },
      UpsertResult: {
        type: "object",
        properties: {
          ok: { type: "boolean", example: true },
          url: { type: "string", example: "/pages/missions" },
          page: { $ref: "#/components/schemas/PageInput" },
        },
        required: ["ok", "url"],
      },
      ValidationError: {
        type: "object",
        properties: {
          ok: { type: "boolean", example: false },
          errors: { type: "array", items: { type: "string" } },
        },
        required: ["ok", "errors"],
      },
    },
  },
});

export { buildOpenApi };