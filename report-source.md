# Component generation and storage research

Date: 2026-09-05

Scope: component generation, validation, storage, approval, and rendering only. Page authoring and stakeholder collaboration are excluded.

## Direct answer

The generated React source must not be stored in Payload and executed at request time. Payload should store a stable component key/version and the component's content data. A generated executable component must be produced as reviewed source in the shared package, compiled and tested in CI, and deployed before Payload can safely reference it.

## Repository evidence

- The design project is a React/Vite application. Its registry in `app/concepts/conceptRegistry.tsx` maps string concept keys to React render functions. It has no schema metadata or server-side registry.
- The design components are authored source files under `app/components/` and `app/concepts/`.
- The shared package repository currently exports no Payload blocks or renderers; `src/payload.ts` and `src/index.ts` are intentionally empty.
- The CMS `Pages` collection currently uses a static Payload `blocks` field. Its allowed block slugs are `hero`, `proofStrip`, `about`, `course`, `classes`, `story`, and `finalCta`, with validation for first block, uniqueness, and order. This is not the same key space as the design registry and must be reconciled before integration.

## Verified platform constraints

- Payload Blocks are configured in code. Each block has a slug and fields; the stored value carries `blockType` and content. Payload's documentation describes Blocks as schema-configured mixed content, not executable source stored in a record.
- Payload's Code field stores a string and gives the admin a code editor. It does not make that string a compiled, trusted application module.
- Payload custom admin components are resolved from configured component paths while the admin panel is compiled. They are not loaded from arbitrary database source.
- React `lazy` loads a module returned by dynamic `import()`. The module must already be a valid component available to the bundler/runtime; it is not a database-source execution mechanism.
- Astro imports framework components at build/server render time; interactive React components are hydrated as serialized islands. Astro does not make arbitrary database code into importable components.
- Node explicitly warns that `node:vm` is not a security mechanism and must not be used to run untrusted code.
- Payload provides Jobs and separate workers for long-running tasks; this is appropriate for generation/validation work, not for executing generated source in a request hook.
- Payload's Postgres workflow requires schema changes to be represented in migrations for non-development environments.

## Recommended architecture

1. Define a versioned component manifest in the shared package. It must map one stable key to: section/category, semantic version, Payload block slug, Payload field config, content validator, renderer import, and compatibility metadata.
2. Keep the database record data-only: `componentKey`, `componentVersion`, `blockType`, `blockName`, and the typed content fields. Never treat `source` or `code` as a renderable module.
3. Generate components through a backend job. The job accepts a structured design request, writes a candidate component package change, generates its Payload `Block` config and renderer, and records status/provenance.
4. Validate outside Payload's request process: format, typecheck, lint, build, schema/type generation, render tests, accessibility checks, dependency allowlist, and content-contract tests. Do not use `eval` or `node:vm` as the isolation boundary.
5. Open a GitHub pull request for the generated package change. Required review and CI are the approval gate. Only after merge and deployment should the component key become selectable in Payload.
6. Publish the package and deploy the website/CMS in a compatible release. Then Payload can safely save content using the new key/version and the deployed renderer can resolve it.

## Alternative that is materially smaller

If “generated component” means a new visual composition rather than new executable behavior, generate a constrained JSON/IR definition and render it with an existing fixed component runtime. Store the IR and content in Payload. This gives dynamic generation without schema/code deployment, but it is not a new arbitrary React component and must be described honestly as such.

## Decision

Use the IR/data-driven path for the first component-generation milestone. Reserve source-generating React components for a reviewed package pipeline. The current codebase does not yet have the manifest, generator job, package blocks, renderer entry point, or release/deploy contract needed for arbitrary generated React components.

## Sources

- Payload Blocks: https://payloadcms.com/docs/fields/blocks
- Payload Code Field: https://payloadcms.com/docs/fields/code
- Payload custom components: https://payloadcms.com/docs/custom-components/overview
- Payload migrations: https://payloadcms.com/docs/database/migrations
- Payload Jobs Queue: https://payloadcms.com/docs/jobs-queue/overview
- Payload queues and separate runners: https://payloadcms.com/docs/jobs-queue/queues
- React lazy loading: https://react.dev/reference/react/lazy
- Astro framework components and hydration: https://docs.astro.build/en/guides/framework-components/
- Node VM security warning: https://nodejs.org/api/vm.html
- GitHub Actions CI: https://docs.github.com/en/actions/get-started/continuous-integration
- GitHub protected branches: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches
