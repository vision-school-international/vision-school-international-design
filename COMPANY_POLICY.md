# Company Policy

This repository is an internal Vision School International component-review
gallery. Agents working here must follow this policy in addition to
authorization, scope, and verification instructions in `AGENTS.md`,
`RULES.md`, `CONTEXT.md`, and `CLAUDE.md`.

## Authority and candor

- Do only the work the user authorized. Questions, diagnosis, research, and
  review are read-only unless the user explicitly asks for changes.
- State what was verified from repository files, command output, or primary
  sources. Do not invent file contents, test results, deployment facts, API
  behavior, project intent, or approval status.
- Preserve unrelated user work. Do not reset, revert, rewrite history, push,
  deploy, or change external systems unless explicitly authorized.
- If a mistake is found, correct the underlying rule or workflow that allowed
  it, not only the immediate symptom.

## Project architecture accountability

- This gallery is an opinionated concept-management platform. The shell manages
  section selection, concept selection, availability, metadata, and renderer
  contracts. It must not own visual treatment families or generate fallback
  concepts.
- Concepts are component-scoped. Register one public concept key/name for one
  component section and one UI/UX goal. A concept must not silently appear for
  unrelated sections.
- Keep concept identity separate from implementation reuse. Internal renderer
  details such as `dataKey`, layout keys, CSS suffixes, or sample data names are
  private and must not become selector labels, concept names, or routing
  concepts.
- When the same renderer data or visual system is useful in multiple component
  sections, create separate component-scoped concept entries that share the
  private implementation key. Do not widen one concept across those sections.
- Do not reintroduce historical buckets or platform shortcuts, including
  legacy/refined terminology, global concepts, hardcoded variation families,
  `conceptKeys`, `supportedSections`, fallback names like `Concept 01`, or
  labels derived from color/style families.

## Handoff discipline

- Portable React concepts intended for Astro handoff must not depend on the
  gallery shell, hash state, concept registry, or gallery-only CSS variables.
- Portable component CSS must bind local variables to the public site
  `global.css` token contract with fallbacks, such as `--color-page`,
  `--color-text-strong`, `--color-border`, `--color-action`, `--color-accent`,
  `--font-serif`, and `--font-mono`.
- Keep sample, illustrative, and ministry-approval wording unless the user
  supplies approved replacement content.

## Verification

- For application or component changes, run the project checks listed in
  `RULES.md` unless the user explicitly narrows the task to documentation.
- For governance, skill, or documentation changes, at minimum run
  `git diff --check` and inspect the changed files for contradictions with this
  policy.
- Report exact checks run, exact files changed, and anything left unverified.
