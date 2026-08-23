# Project context

Read [RULES.md](./RULES.md) before making repository changes. For new or
extended review components, follow
[the repository component skill](./.agents/skills/create-review-component/SKILL.md).

## What this repository is

This is an internal design-review gallery for Vision School International. It
shows the shared section types—navigation, hero/introduction, proof/key facts,
about/value proposition, course/curriculum, class finder, stories/testimonials,
video library, calls to action, and footer/utility navigation—against the available design concepts. It is not a production
launch; `README.md` marks copy, locations, registration links, branding, and
testimonials as subject to ministry approval.

## Runtime path

`index.html` mounts `src/main.tsx`. That entry point renders `app/page.tsx`
with React Strict Mode and imports `app/legacy-concepts.css`,
`app/video-gallery.css`, and `app/globals.css`. Vite builds the browser bundle to `dist/` according to
`vite.config.ts`. `server/index.mjs` serves `dist/`, provides `GET /health`,
and falls back to `dist/index.html` for client-side routes. The server uses
`PORT` or 3000 and `HOST` or `0.0.0.0`.

## Component-gallery architecture

- `app/page.tsx` owns the review shell, section-type cards, hash navigation, and
  the selected gallery. Clicking a section card mounts only that section area;
  the concept selector then mounts one selected design treatment in its isolated
  preview article.
- `app/concepts/ConceptPage.tsx` owns the original/legacy visual treatments.
- `app/RefinedConcept.tsx` owns the refined visual treatments.
- `app/components/VideoGallery.tsx` owns the shared video data and single-player
  interaction for the Editorial, Contemporary, and International video-library
  treatments. `app/video-gallery.css` keeps those treatments scoped.
- Both renderers receive a concept key and one `ComponentSection`, then render
  only that section. Their different markup and CSS are intentional comparison
  material, not accidental duplicate product components.
- `app/globals.css` owns the gallery shell/index/variant layout, refined
  `.refined-*` treatment styles, and related shared selectors. `app/legacy-concepts.css`
  owns the legacy `.site-mock`/`.mock-*` treatment system. Keep selectors scoped
  to their role and avoid changing one renderer by relying on another renderer’s
  selectors.
- `tests/rendered-html.test.mjs` builds the site and checks rendered output;
  `eslint.config.mjs` defines lint coverage; `tsconfig.json` provides strict
  TypeScript settings but `package.json` has no dedicated typecheck script.

When changing the gallery, follow data flow from `app/page.tsx` to both
renderers and then to the CSS selectors and rendered-page test. A section-card
or anchor change must be checked against every section type and available
concept. A renderer change must be checked in both legacy and refined paths.

## Source-of-truth commands and deployment

Use the scripts in `package.json`: `npm run dev`, `npm run build`, `npm start`,
`npm test`, and `npm run lint`. Use `npx tsc --noEmit` for the strict compiler
check. Use `npm ci` when installing from the committed lockfile.

`README.md` documents Dokploy as the deployment path: Railpack,
`npm run build`, `npm start`, port 3000. Nixpacks is not verified. No checked-in cloud, container, or
other deployment configuration was found. If a deployment fact cannot be
verified from those sources, say so rather than guessing.

## Maintenance rules

Preserve existing visual treatments, responsive behavior, hash navigation,
assets, and review disclaimers. Do not reintroduce whole-page concept cards or
mount every section area or concept treatment at once. Keep the section and
concept selection state, full-width previews, and unique outer anchor IDs. Do not
invent new deployment targets or dependencies. Share metadata or contracts only
when the change is explicitly approved and does not collapse intentionally
different visual treatments into a generic abstraction.

## Git and pull-request workflow

Treat `main` as the protected integration branch. All changes, including
documentation, configuration, tests, and code, must be developed on a feature
branch and merged through a pull request; never commit, push, or merge directly
to `main`. Create branches from the latest `origin/main` with the format
`<type>/<short-kebab-description>`, using lowercase `feat`, `fix`, `docs`,
`refactor`, `test`, `chore`, or `design` types. Open each PR against `main`,
compare it with `origin/main`, and apply the exact lowercase `design` label to
design-related PRs.

Before handoff, inspect the diff and run the relevant build, test, lint, and
type checks. Report exact files changed and distinguish verified facts from
inferences. Follow the existing Git conventions, and apply the exact lowercase
`design` PR label to any design-related contribution because preview deployment
depends on it. See [AGENTS.md](./AGENTS.md) for git/PR conventions and
[CLAUDE.md](./CLAUDE.md) for the execution checklist and [RULES.md](./RULES.md)
for prohibited repository changes.
