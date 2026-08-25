---
name: create-review-component
description: Add or extend component-scoped design-review concepts in this Vision School React gallery. Use when creating a new section card, registering a concept for a specific component section, building a portable interactive React component preview, changing per-section concept availability, or adding component-specific responsive styles and verification.
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
- Parse the user's request as a component purpose. The concept name comes from
  what the component helps the visitor do, not from a style family.
- Example: if the user asks for "a navigation bar that helps users search for
  site content faster/easier," create a Navigation-scoped concept named `Search
  Navigation`.
- Treat concepts as component-scoped. A concept must not automatically appear for
  unrelated sections.
- Name concepts from the UI/UX goal of that component, such as `Search
  Navigation`, not from generic families, visual variants, ordinals, colors, or
  implementation history.
- Preserve all existing section order, card position, markup, copy, assets, styles, and interactions unless the request explicitly changes them.

### 2. Extend the catalog

- Add section metadata to `sectionTypes` in `app/concepts/componentCatalog.ts`.
- Use a plain section name and a factual description of what the component does for users.
- If the section already exists, do not add another section, synonym section, or
  fake category to hold the concept.
- Do not add `conceptKeys`, global concept lists, fallback concept names, or
  hardcoded variation families to the section catalog.
- Derive ordinals from catalog order and derive concept availability from each
  concept definition's `sections` map. Never duplicate inventory counts in copy
  or logic.

### 3. Place the implementation correctly

- Register each concept through `DesignConceptDefinition` with an explicit
  `sections` map. The shell must only render
  `selectedConcept.sections[selectedSection.key]`.
- Keep concept identity separate from renderer implementation data. The
  registry `key` and `name` are the reviewer-facing concept. Internal renderer
  constants, layout keys, CSS suffixes, or sample data names are private
  implementation details only.
- Register one concept entry for one component section. When the same renderer
  behavior is useful for multiple sections, create separate component-scoped
  concept entries and keep any reuse private; do not add multiple unrelated
  sections to one concept.
- Keep `app/concepts/conceptRegistry.tsx` as a composition layer only. It should
  collect exported concepts and filter by section; it must not invent concepts,
  format fallback names, or route by hardcoded variation families.
- Put concept-owned registrations in focused files under `app/concepts/`, such
  as `ComponentConcepts.tsx` or a component-specific concept module.
- Put portable React preview implementation in focused files under
  `app/components/`. A component preview must be usable without the gallery
  shell, hash state, concept registry, or gallery-only CSS variables.
- Keep visual markup different when the difference is the concept being reviewed.
  Share typed contracts, data plumbing, and interaction helpers only when it does
  not collapse distinct visual treatments into a generic renderer.
- Render only the selected section and selected concept.

For one new component concept, the normal file path is:

1. `app/concepts/componentCatalog.ts` for section metadata, only if missing.
2. `app/components/<ComponentName>.tsx` for the portable preview.
3. `app/concepts/<ConceptModule>.tsx` for one `DesignConceptDefinition`.
4. `app/<component-styles>.css` for scoped styles, imported once from
   `src/main.tsx`.

Correct concept registration shape:

```tsx
export const componentConcepts: readonly DesignConceptDefinition[] = [
  {
    key: "purpose-hero",
    name: "Purpose Hero",
    image: "/images/community-city.jpg",
    color: "#1769c2",
    sections: {
      hero: function renderPurposeHero() {
        return createElement(PurposeHero);
      },
    },
  },
];
```

In that pattern:

- `purpose-hero` is the actual concept key.
- `Purpose Hero` is the reviewer-facing concept name.
- `sections.hero` scopes the concept to one component section.
- `PurposeHero` is the isolated portable component preview.

Forbidden patterns:

```tsx
// Wrong: implementation style used as the public concept identity.
{ key: "blue", name: "Blue", sections: { hero: renderHero } }

// Wrong: one concept leaks across unrelated components.
{
  key: "purpose",
  name: "Purpose",
  sections: {
    hero: renderHero,
    about: renderAbout,
    course: renderCourse,
  },
}
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
- Make component copy useful for design review: what content is shown, what
  uncertainty it reduces, and what action or decision it supports.
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
- Do not recreate `tests/rendered-html.test.mjs` or add bundle-string rendered
  HTML assertions. Verify component-scoped architecture through source review,
  TypeScript, lint, build output, and focused checks that do not hardcode
  rendered copy.
- Update `README.md`, `CONTEXT.md`, `AGENTS.md`, `CLAUDE.md`, and `RULES.md` only when the maintained architecture or contributor rules changed.
- Run:

```bash
npm test
npm run lint
npx tsc --noEmit
git diff --check
```

Report exact files changed and checks run. Do not commit, push, deploy, or modify a PR unless explicitly authorized. Design PRs require the exact lowercase `design` label.
