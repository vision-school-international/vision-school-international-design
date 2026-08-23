# Repository rules

Read this file before changing the repository. These rules protect the internal design-review gallery from structural regressions and unnecessary additions.

## Keep the existing review model

- Keep this as one internal review page. Do not add pages, routes, production-site navigation, CMS models, or application flows.
- Do not move, reorder, resize, wrap, or restyle existing section cards, selectors, headings, previews, or shell elements while adding a component.
- Do not change an existing treatment's markup, copy, assets, styles, or interaction as a side effect of adding another section.
- Keep the review unit as a section type. A section card selects one section; the concept selector selects one treatment.
- Mount only the selected section and selected concept. Do not restore a continuous all-sections page or stack every concept treatment.
- Keep treatment previews full width. Do not place full previews side by side or in a multi-column comparison.
- Preserve useful section hash navigation. Do not introduce page routes for component selection.

## Follow the component architecture

- Define section metadata and concept availability in `app/concepts/componentCatalog.ts`.
- Derive section keys, ordinals, totals, and available concepts from catalog data. Do not hardcode inventory counts.
- Put legacy visual treatments in `app/concepts/ConceptPage.tsx` and refined treatments in `app/RefinedConcept.tsx`.
- Share focused data or interaction behavior under `app/components/` only when concepts genuinely use the same behavior.
- Do not merge legacy and refined visual markup into a generic renderer. Their differences are the review material.
- Scope substantial component styles behind a unique component class in a dedicated stylesheet. Do not add global selectors that can leak into other treatments.
- Import a component stylesheet once through `src/main.tsx`. Do not inject style tags or duplicate imports in renderers.
- Keep IDs unique in the mounted document. Outer gallery areas own section anchor IDs.

## Protect the user experience

- Do not add explanatory filler, instructional paragraphs, slogans, review principles, repeated summaries, or count strips unless explicitly requested.
- Use plain, informational section and concept names. Do not invent poetic naming.
- Do not create an endless page to display alternatives. Use compact controls to switch the active section, concept, or collection item.
- Do not autoplay media or trigger context changes on focus.
- Do not hide required interaction behind hover. Preserve visible keyboard focus, selected states, meaningful labels, and practical target sizes.
- Preserve desktop, tablet, and mobile behavior. Do not solve desktop layout by squashing previews or creating unusable mobile controls.

## Preserve approved content and assets

- Do not replace supplied logos, favicons, social images, photography, or videos with placeholders or invented assets.
- Do not invent final claims, testimonials, class locations, dates, registration links, or ministry approvals.
- Keep sample, illustrative, and approval disclaimers unless the user explicitly supplies approved replacements.
- Use official metadata for external media when available; do not guess titles or labels.

## Do not expand the stack

- Do not add dependencies, scripts, services, databases, CMS integrations, environment variables, or build tools without explicit approval.
- Do not change `package.json` or `package-lock.json` unless an approved dependency or script change requires both.
- Do not invent deployment targets. The verified deployment remains Dokploy with Railpack, `npm run build`, `npm start`, and port 3000.
- Do not add Docker, Cloudflare, Vercel, Netlify, Nixpacks, or CI configuration unless explicitly requested and approved.

## Git and review

- Preserve unrelated worktree changes. Do not use destructive reset, checkout, clean, or history-rewrite commands.
- Do not commit, push, deploy, or modify a pull request without explicit authorization.
- Treat `main` as the protected integration branch. Never commit to, push to, or merge into `main` directly; every change must be merged through a pull request.
- Create feature branches from the latest `origin/main` using `<type>/<short-kebab-description>`, with lowercase `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, or `design` types. Examples: `feat/video-gallery` and `docs/pr-branch-rules`.
- Open PRs against `main` and compare them with `origin/main`. A PR is required before any merge, including documentation-only changes.
- Follow the existing commit convention; do not introduce a new one.
- Apply the exact lowercase `design` label to every design-related PR because preview deployment depends on it.
- Never claim GitHub checks, preview deployment, or production deployment succeeded without evidence.

## Required verification

For application or component changes, run:

```bash
npm test
npm run lint
npx tsc --noEmit
git diff --check
```

Report failures accurately. Do not weaken tests, lint, type checking, or rendered assertions to make a change pass.

## Intentional exceptions

A current explicit user instruction can override a rule for that task. Keep the exception narrow. If it intentionally changes the maintained architecture, update this file and the linked context files in the same contribution.
