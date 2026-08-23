# Agent instructions

Read this file first, then [CONTEXT.md](./CONTEXT.md) for the architecture and
[CLAUDE.md](./CLAUDE.md) for the short execution checklist. Keep all three files
consistent when project guidance changes.

## Project boundary

This repository is an internal Vision School International component-review
gallery, not the production ministry site. It is a Vite + React + TypeScript
frontend with a small Hono server. Preserve the current component-gallery
model: `app/page.tsx` owns the nine section-type index and one continuous,
one-column gallery; `app/concepts/ConceptPage.tsx` and
`app/RefinedConcept.tsx` render one requested section treatment at a time.

Make the smallest change that satisfies the request. Preserve existing visual
concept treatments, renderer-specific markup, responsive CSS, illustrative-content
labels, and hash navigation unless the task explicitly changes them. Do not
silently “clean up” unrelated worktree changes.

## Verified commands

The commands below come from `package.json` and `README.md`:

```bash
npm ci                 # install exactly package-lock.json
npm run dev            # Vite development server
npm run build          # writes dist/
npm start              # serves dist/ through server/index.mjs
npm test               # build plus rendered HTML checks
npm run lint           # ESLint
npx tsc --noEmit       # typecheck; there is no package.json typecheck script
```

Run the relevant checks after changes; for application changes, normally run
build, test, lint, and `npx tsc --noEmit`. `npm start` requires a prior build.
The server exposes `/health` and defaults to port 3000; `HOST` and `PORT` are
read from the environment by `server/index.mjs`.

## Deployment and dependencies

The only verified deployment instructions are the Dokploy settings in
`README.md`: Railpack, build `npm run build`, start `npm start`, port 3000.
Nixpacks is not verified. Do not invent a Cloudflare, Vercel, Netlify, Docker, or
other deployment flow; no such repository mechanism is checked in. Deploy only
when explicitly requested and only through the existing verified mechanism.

Do not add packages, scripts, services, environment variables, or deployment
configuration without explicit approval. If dependencies are missing locally,
use `npm ci`; do not edit `package.json` or `package-lock.json` to make a check
pass. Keep those files synchronized if an approved dependency change is made.

## Project-specific anti-patterns

- Do not restore whole-page concept cards, concept selection state, or a
  full-page preview flow; the review unit is a section type.
- Do not change `.component-gallery-variants` back to a multi-column layout;
  variants intentionally stack one-by-one so designers can inspect a normal
  page-width treatment.
- Do not add document IDs inside isolated previews that can duplicate across
  the six variants. Gallery anchor IDs belong to the outer section areas.
- Do not merge the legacy and refined renderers into a generic visual
  component. Their different markup and CSS are the design treatments under
  review; share only contracts or metadata when an approved change proves it
  removes duplication without changing output.
- Do not remove “sample”, “illustrative”, or ministry-approval wording from
  review content. It is a deliberate boundary in the current gallery.
- Do not replace existing image assets, copy, or CSS with invented content while
  addressing a structural request.

## Git and review conventions

Inspect `git status`, the current branch, and the relevant diff before editing.
Preserve unrelated user work. Never use destructive reset/checkout commands,
rewrite history, or push/deploy without explicit authorization.

The observed history uses concise action-oriented subjects, including
`feat(review): ...`, `fix(...) ...`, `refactor(deploy): ...`, and `Add ...`.
Follow the repository’s existing style for the area you touch; do not create a
new commit convention. Commit only when asked. For a PR, use the feature branch
and compare against `origin/main`; include scope, verification commands and
results, visual/regression notes, and any known unverified deployment fact.
There is no checked-in PR template or CI workflow, so do not claim checks or
release automation that you cannot find in the repository. Any design-related
PR must carry the exact lowercase `design` label; this label is required for
the preview deployment workflow. Verify the label is present on the PR before
handoff.

Before handoff, report exact files changed, checks run and their results, and
anything that remains unverified.
