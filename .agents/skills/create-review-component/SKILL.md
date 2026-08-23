---
name: create-review-component
description: Add or extend section-type design-review components in this Vision School React gallery. Use when creating a new section card, adding concept treatments to a section, building an interactive component preview, changing per-section concept availability, or adding component-specific responsive styles and rendered tests.
---

# Create Review Component

Build new review components without changing the gallery's established navigation, existing treatments, or deployment model.

## Required context

Read these files before editing:

1. [`RULES.md`](../../../RULES.md)
2. [`AGENTS.md`](../../../AGENTS.md)
3. [`CONTEXT.md`](../../../CONTEXT.md)
4. `app/page.tsx`
5. `app/concepts/componentCatalog.ts`
6. The renderer and CSS files affected by the requested concepts

Treat `RULES.md` as the repository's anti-pattern authority. A current explicit user instruction may override a rule; record the intentional change in `RULES.md`, `AGENTS.md`, `CLAUDE.md`, and `CONTEXT.md` when it changes the maintained architecture.

## Workflow

### 1. Confirm the review unit

- Add a section type, not a new page or route.
- Keep the section card in the existing catalog-driven index.
- Identify exactly which concepts the section supports.
- Preserve all existing section order, card position, markup, copy, assets, styles, and interactions unless the request explicitly changes them.

### 2. Extend the catalog

- Add section metadata to `sectionTypes` in `app/concepts/componentCatalog.ts`.
- Use a plain section name and a factual description of what the component does for users.
- Add `conceptKeys` only when the section supports fewer concepts than the global catalog.
- Derive ordinals, totals, and availability from catalog data. Never duplicate inventory counts in copy or logic.

### 3. Place the implementation correctly

- Add legacy treatment markup to `app/concepts/ConceptPage.tsx`.
- Add refined treatment markup to `app/RefinedConcept.tsx`.
- Create a focused file under `app/components/` only when treatments genuinely share data or interaction behavior.
- Keep visual markup different when the difference is the concept being reviewed. Do not collapse treatments into a generic visual renderer.
- Render only the selected section and selected concept.

### 4. Isolate styles and interaction

- Put substantial new component styles in a dedicated CSS file imported once from `src/main.tsx`.
- Prefix every selector with a component-specific class such as `.video-library`.
- Keep the preview full width. Never place full treatment previews in a multi-column comparison.
- For collections, use one primary content area with compact selection controls when mounting every item would create a long page.
- Preserve responsive behavior at desktop, tablet, and mobile widths.
- Use buttons for state changes and links for navigation. Provide visible focus, selected state, usable target sizes, and meaningful labels.
- Avoid autoplay, unexpected context changes, duplicate IDs, and interactions that depend only on hover.

### 5. Keep content direct

- Use factual headings and labels.
- Do not add instructions, summaries, slogans, review principles, or inventory counts unless requested.
- Do not invent final claims, testimonials, locations, dates, registration links, or brand assets.
- Preserve existing sample, illustrative, and approval disclaimers.

### 6. Verify the complete path

- Confirm the section card selects the new component through the existing hash model.
- Confirm only approved concepts appear for the section.
- Confirm switching concepts and component-internal controls mounts only the selected content.
- Update `tests/rendered-html.test.mjs` with stable, meaningful output assertions.
- Update `README.md`, `CONTEXT.md`, `AGENTS.md`, `CLAUDE.md`, and `RULES.md` only when the maintained architecture or contributor rules changed.
- Run:

```bash
npm test
npm run lint
npx tsc --noEmit
git diff --check
```

Report exact files changed and checks run. Do not commit, push, deploy, or modify a PR unless explicitly authorized. Design PRs require the exact lowercase `design` label.
