---
name: create-review-component
description: Add or extend component-scoped design-review concepts in this Vision School React gallery. Use when creating a new section card, registering a concept for a specific component section, building a portable interactive React component preview, changing per-section concept availability, or adding component-specific responsive styles and rendered tests.
---

# Create Review Component

Build new review concepts without changing the gallery's established navigation,
selection model, component-scoped concept architecture, or deployment model.

## Required context

Read these files before editing:

1. [`RULES.md`](../../../RULES.md)
2. [`AGENTS.md`](../../../AGENTS.md)
3. [`CONTEXT.md`](../../../CONTEXT.md)
4. `app/page.tsx`
5. `app/concepts/componentCatalog.ts`
6. `app/concepts/conceptRegistry.tsx`
7. The concept module, portable component, and CSS files affected by the
   requested component concept

Treat `RULES.md` as the repository's anti-pattern authority. A current explicit user instruction may override a rule; record the intentional change in `RULES.md`, `AGENTS.md`, `CLAUDE.md`, and `CONTEXT.md` when it changes the maintained architecture.

## Workflow

### 1. Confirm the review unit

- Add a section type, not a new page or route.
- Keep the section card in the existing catalog-driven index.
- Identify exactly which concepts the requested component section supports.
- Treat concepts as component-scoped. A concept must not automatically appear for
  unrelated sections.
- Name concepts from the UI/UX goal of that component, such as `Search
  Navigation`, not from generic families, visual variants, ordinals, colors, or
  implementation history.
- Preserve all existing section order, card position, markup, copy, assets, styles, and interactions unless the request explicitly changes them.

### 2. Extend the catalog

- Add section metadata to `sectionTypes` in `app/concepts/componentCatalog.ts`.
- Use a plain section name and a factual description of what the component does for users.
- Do not add `conceptKeys`, global concept lists, fallback concept names, or
  hardcoded variation families to the section catalog.
- Derive ordinals from catalog order and derive concept availability from each
  concept definition's `sections` map. Never duplicate inventory counts in copy
  or logic.

### 3. Place the implementation correctly

- Register each concept through `DesignConceptDefinition` with an explicit
  `sections` map. The shell must only render
  `selectedConcept.sections[selectedSection.key]`.
- Keep `app/concepts/conceptRegistry.tsx` as a composition layer only. It should
  collect exported concepts and filter by section; it must not invent concepts,
  format fallback names, or route by hardcoded variation families.
- Put concept-owned renderer definitions in focused files under `app/concepts/`.
  Existing renderer modules include `ConceptPage.tsx`, `ImmersiveConcept.tsx`,
  and component-specific files such as `SearchNavigationConcept.tsx`.
- Create a focused file under `app/components/` when a concept is a portable
  React component, has its own interaction state, or is intended for drag-and-drop
  handoff into the Astro project.
- Keep visual markup different when the difference is the concept being reviewed.
  Share typed contracts, data plumbing, and interaction helpers only when it does
  not collapse distinct visual treatments into a generic renderer.
- Render only the selected section and selected concept.

Example registration shape:

```tsx
export const navigationConcepts: readonly DesignConceptDefinition[] = [
  {
    key: "search-navigation",
    name: "Search Navigation",
    image: "/images/community-city.jpg",
    color: "#102c57",
    sections: {
      navigation: function renderSearchNavigation() {
        return createElement(SearchNavigation);
      },
    },
  },
];
```

### 4. Isolate styles and interaction

- Put substantial new component styles in a dedicated CSS file imported once from `src/main.tsx`.
- Prefix every selector with a component-specific class such as `.video-library`.
- Portable component CSS must not depend on gallery-only globals such as
  `--review-*` or `--font-geist-*`. Bind local component variables to the public
  site `global.css` token contract with fallbacks, for example
  `var(--color-page, #f4f7fb)`, `var(--color-text-strong, #102c57)`,
  `var(--color-border, #b9c9dc)`, `var(--font-mono, monospace)`.
- Portable React components should accept explicit typed props or export a small
  default data object. Do not depend on the gallery shell, hash state, concept
  registry, or review-only CSS.
- Keep the preview full width. Never place full treatment previews in a multi-column comparison.
- For collections, use one primary content area with compact selection controls when mounting every item would create a long page.
- Preserve responsive behavior at desktop, tablet, and mobile widths.
- Use buttons for state changes and links for navigation. Provide visible focus, selected state, usable target sizes, and meaningful labels.
- Avoid autoplay, unexpected context changes, duplicate IDs, and interactions that depend only on hover.

### 5. Keep content direct

- Use factual headings and labels.
- Keep component content owned by that concept/component. Do not create shared
  class/session/nav datasets that every component inherits.
- Do not add instructions, summaries, slogans, review principles, or inventory counts unless requested.
- Do not invent final claims, testimonials, locations, dates, registration links, or brand assets.
- Preserve existing sample, illustrative, and approval disclaimers.

### 6. Verify the complete path

- Confirm the section card selects the new component through the existing hash model.
- Confirm only concepts registered for the selected section appear for that
  section.
- Confirm unrelated sections do not inherit the new concept.
- Confirm switching concepts and component-internal controls mounts only the selected content.
- Update `tests/rendered-html.test.mjs` with stable, meaningful output assertions.
- Add rendered-output assertions for concept names, component-specific UI, and
  portability contracts when relevant. Keep negative assertions for historical
  labels, global fallback names, and stale palette or gallery-only CSS bindings.
- Update `README.md`, `CONTEXT.md`, `AGENTS.md`, `CLAUDE.md`, and `RULES.md` only when the maintained architecture or contributor rules changed.
- Run:

```bash
npm test
npm run lint
npx tsc --noEmit
git diff --check
```

Report exact files changed and checks run. Do not commit, push, deploy, or modify a PR unless explicitly authorized. Design PRs require the exact lowercase `design` label.
