# Plan A — Component package refactor

**Status:** Draft
**Date:** 2026-09-05
**Owner:** executing agent
**Repos:** `vision-school-international/website-components` (primary) + `vision-school-international/website-components` consumer `vision-school-international/vision-school-international-design` (secondary)
**Depends on:** nothing
**Blocks:** Plan B (`./2026-09-05-plan-b-design-ux-pass.md`)
**Companion context:** [report-source.md](../../report-source.md) (component generation/storage research), [PRD.md](./PRD.md) §7 (change flow)

## 1. Mission

Move all 21 hardcoded section renderers out of the design gallery repo and into the private shared package `@vision-school-international/website-components`, publish v0.2.0, and consume the package from the design repo. After this plan completes, `app/components/` no longer exists in the design repo; every section render comes from the package.

## 2. Verified context (do not re-derive)

### Package repo (`vision-school-international-website-components`, default branch, v0.1.1)

- Structure:
  - `src/index.ts` — exports `SharedSection` type, `isSharedSection`, `sharedBlockTypes`, `sharedBlocks`
  - `src/payload.ts` + `src/payload/blocks.ts` — Payload block definitions (entry never imports React)
  - `src/react.tsx` — currently `export { SectionRenderer } from "./react/BranchFinder.js"` + `SectionRendererProps`
  - `src/react/BranchFinder.tsx` — the only renderer today; imports `../styles/branch-finder.css`
  - `src/shared/branch-finder.ts` — `Branch`, `BranchFinderCopy`, `BranchFinderSection`, `SharedSection` types + `isSharedSection` guard
  - `src/styles/branch-finder.css` — styles copied verbatim to `dist/styles/`
- Build: `scripts/build.mjs` = `tsc --build` then `scripts/copy-assets.mjs` (copies the whole `src/styles/` tree to `dist/styles/`, preserving subfolders). tsconfig: ES2022, NodeNext, `jsx: react-jsx`, strict, `verbatimModuleSyntax`, `isolatedModules`, `noUncheckedIndexedAccess`, composite, `rootDir: src`
- Exports map: `.` → `dist/index.js`, `./payload` → `dist/payload.js`, `./react` → `dist/react.js`. `files: ["dist"]`. `publishConfig.registry = https://npm.pkg.github.com`
- Peer deps: `payload ^3.88.0`, `react ^19.2.0` (design repo uses react 19.2.6 — compatible). pnpm ≥9, Node ≥20.9. `.npmrc` present in repo. CI: `.github/workflows/verify.yml`
- README contract for new section types requires: typed Payload config via `./payload`, Astro-only renderer entry, CMS schema + migration, consumers deployed before records reference the type. **This refactor does NOT add a Payload block or Astro entry — the gallery is React-only. Only the `./react` entry grows.**
- The design repo currently renders `regional-branch-directory` with a 254-line local component that duplicates BranchFinder's purpose. The package component must be reused, not duplicated.

### Design repo (`vision-school-international-design`, default branch `main`)

- 22 concept registrations across 3 files (the "concept layer"):
  - `app/concepts/ComponentConcepts.tsx` — 20 concepts, lines 58–279; hardcoded gallery sample data `classFinderDesign` at lines 24–56
  - `app/concepts/SearchNavigationConcept.tsx` — 1 concept
  - `app/concepts/RegionalBranchDirectoryConcept.tsx` — 1 concept
- Registry: `app/concepts/conceptRegistry.tsx` — `ConceptRender = (props: { section: ComponentSection }) => ReactNode` (line 7); `concepts` array (22–26); `getConceptsForSection` (30); `resolvePageSection` (38); `PageSectionEntry` type (33)
- Section catalog: `app/concepts/componentCatalog.ts` — `sectionTypes`, 21 entries (lines 1–170), `ComponentSection` type (172), `sectionId()` (173)
- 22 component files in `app/components/` (all render fixed markup, none import CSS themselves). 7 are stateful: ClassFinderCarousel, FaqAccordion, NewsletterSignup, RegionalBranchDirectory (`useMemo`+`useState`), RegistrationContactForm, SearchNavigation (`useMemo`), VideoGallery
- CSS is loaded globally in `src/main.tsx:7–14` — 8 imports, of which the section files are:
  - `app/class-finder-carousel.css` (→ ClassFinderCarousel)
  - `app/new-component-sections.css` (→ announcement, breadcrumbs, events, faq, registration, newsletter, partners, team, resources, gallery, donation)
  - `app/regional-branch-directory.css` (→ RegionalBranchDirectory)
  - `app/section-components.css` (→ PurposeHero, TrustProof, MissionAbout, CoursePathway, StudentStory, DecisionCta, UtilityFooter)
  - `app/search-navigation.css` (→ SearchNavigation)
  - `app/video-gallery.css` (→ VideoGallery)
  - (`globals.css` and `pages.css` are gallery chrome — stay local)
- `package.json` has no `@vision-school-international/*` dependency; no `.npmrc` in repo root or `~`; current `gh` token lacks `read:packages` — see blocker D1
- Tooling: Node ≥22.13, npm (NOT pnpm). `npm ci`, `npm run dev`, `npm run build`, `npm start`, `npm test`, `npm run lint`, `npx tsc --noEmit` (no typecheck script exists)
- Local server (`server/index.mjs`) serves `dist/`, exposes `/health`, SPA-falls back to `index.html`. Default port 3000

## 3. Step-by-step

### Phase 1 — package repo

1. `gh repo clone vision-school-international/vision-school-international-website-components /Users/dev/Projects/website-components`, create branch `feat/gallery-section-renderers`. (The `~/conductor/` folder is banned; clone fresh into `~/Projects`.)
2. Port the 21 section renderers from the design repo into `src/react/sections/`, one file per section. Each exports a named renderer matching the existing `SectionRendererProps` pattern: `(props: { section: T }) => ReactNode`. **Content that is gallery sample data (copy strings, stats, images, videos, branch lists) becomes typed props on the renderer — the package ships renderers + types, never gallery sample content.**
3. Port CSS: split the 5 shared stylesheets into per-section files under `src/styles/` (class prefixes per the mapping above). **Class names and rule bodies stay byte-identical** to minimize visual regression risk. `copy-assets.mjs` already copies the whole tree.
4. Reconcile BranchFinder: leave `src/react/BranchFinder.tsx` exactly as is. The gallery's `regional-branch-directory` concept becomes a thin wrapper that passes its sample `BranchFinderCopy` as props.
5. Extend `src/react.tsx` (do not remove the existing `SectionRenderer` export — the CMS/website consume it):
   - re-export all new section renderer components and their prop types;
   - export a `sectionRenderers` registry: `{ [sectionKey: string]: ComponentType }` covering the 21 sections;
   - if Phase 2 step 10 needs it, add `./styles/*` export-map entries so consumers can import per-section CSS paths.
6. `pnpm install && pnpm typecheck && pnpm build`. Bump version to `0.2.0`. PR to the package repo. After merge, `pnpm publish` (GitHub Packages — requires a token with `write:packages`; confirm whose credential publishes, see D1).

### Phase 2 — design repo

7. Create `.npmrc` in the design repo root:
   ```
   @vision-school-international:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
   ```
   (Adding the dependency is an owner-approved change — AGENTS.md requires explicit approval for new packages; that approval was given in planning.)
8. `NODE_AUTH_TOKEN=<token> npm install @vision-school-international/website-components@0.2.0` — the only dependency change.
9. Rewrite each concept in `app/concepts/*` to import renderers from `@vision-school-international/website-components/react`. Render bodies become thin wrappers supplying sample-data props. `resolvePageSection`, `getConceptsForSection`, concept keys/names/colors/images are unchanged.
10. Delete `app/components/` (22 files) and the 6 section CSS files. Replace the 6 CSS imports in `src/main.tsx` with the package stylesheet import(s) (one bundled import, or per-section imports per D2). Keep `globals.css` and `pages.css` local.
11. Run `npx tsc --noEmit`, `npm run lint`, `npm test`, `npm start`. Smoke-test: `/`, `/pages`, and one `/pages/<key>` rendering every section type once.

### Phase 3 — verification

12. Visual regression: for each of the 21 sections, screenshot before-refactor (pre-merge `main`) vs after (this branch) at the same viewport. Confirm pixel-equivalent rendering. Report any deltas with file:line.
13. PR to the design repo with the exact lowercase `design` label (required by the preview deployment workflow — AGENTS.md:111). Compare against `origin/main`. PR body lists: exact files changed, checks run + results, visual/regression notes, known unverified facts. Do not push/deploy anything else.

## 4. Non-negotiable constraints

- Read both repos' AGENTS.md first. No silent cleanup of unrelated changes; preserve illustrative-content labels; concept identity (keys/names/colors/images) stays gallery-side and unchanged.
- The `./payload` entry point stays untouched; no new dependencies in either repo beyond the single approved install.
- Never use the `~/conductor/` folder; clone fresh into `~/Projects`.
- Sample gallery data stays in `app/concepts/*` — it must not move into the package.

## 5. Definition of done

- `npm view @vision-school-international/website-components@0.2.0` resolves via GitHub Packages.
- Design repo: zero files under `app/components/`, zero local section CSS files, all 21 sections render from the package, `npx tsc --noEmit` + `npm run lint` + `npm test` green, visual regression clean or documented.
- Package PR and design PR merged; design PR carries the `design` label.

## 6. Open decisions (owner input required before execution)

- **D1 (blocker):** npm token with `read:packages` (install) and `write:packages` (publish). Who provides it, and is publishing authorized? Without it, Phase 1 stops after the package PR is opened and Phase 2 cannot install.
- **D2:** one bundled stylesheet vs per-section CSS files from the package (recommended default: per-section, matching the existing `copy-assets.mjs` design).
- **D3:** confirm `0.2.0` (minor) is the right bump — renderers are additive, no breaking changes.