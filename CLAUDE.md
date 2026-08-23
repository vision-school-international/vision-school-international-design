# Claude project guidance

Use [AGENTS.md](./AGENTS.md) as the governing repository instructions and
[CONTEXT.md](./CONTEXT.md) as the architecture map. This file is intentionally
short so Claude sessions do not diverge from the shared guidance.

## Working checklist

1. Inspect `git status`, the relevant source, `package.json`, and
   `package-lock.json` before changing anything.
2. Keep changes inside the requested scope. Preserve the existing component
   gallery, isolated legacy/refined renderers, one-by-one variant stack,
   responsive behavior, hash anchors, illustrative labels, and image assets.
3. Use only existing project commands and deployment instructions. Do not add a
   dependency, script, deploy target, service, or config file without explicit
   approval.
4. Verify application changes with `npm test`, `npm run lint`, and
   `npx tsc --noEmit`; run `npm run build` separately when reporting the build
   result. `npm test` already invokes the build.
5. Before handoff, inspect `git diff --check` and `git status --short`, and list
   the exact files changed.
6. Follow the repository’s existing commit and PR conventions. For design work,
   apply the exact lowercase `design` PR label before handoff; preview deployment
   depends on that label.

## Do not introduce these regressions

- whole-page concept selection or preview navigation;
- a two-column or squashed variant gallery;
- duplicate IDs across isolated previews;
- a generic renderer abstraction that erases intentional visual differences;
- removal of sample/ministry-approval disclaimers;
- an unverified deployment mechanism or an unnecessary package.

For deployment details, use the Dokploy section of `README.md` only. For PRs
and commits, follow the evidence-based conventions in `AGENTS.md`; do not infer
missing CI, release, or repository automation.
