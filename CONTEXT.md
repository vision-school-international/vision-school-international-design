# Project context

Read [RULES.md](./RULES.md) before making repository changes. For new or
extended review components, follow
[the repository component skill](./.agents/skills/create-review-component/SKILL.md).

## What this repository is

This is an internal design-review gallery for Vision School International. It
shows section-level component concepts, including navigation, hero, proof,
about, course, class finder, stories, video library, calls to action, footer,
announcement bar, breadcrumbs, events calendar, FAQ, registration form,
newsletter signup, partner strip, team leadership, resources listing, gallery,
and donation CTA. It is not a production
launch; `README.md` marks copy, locations, registration links, branding, and
testimonials as subject to ministry approval.

## Runtime path

`index.html` mounts `src/main.tsx`. That entry point renders `app/page.tsx`
with React Strict Mode and imports the component stylesheets plus
`app/globals.css`. Vite builds the browser bundle to `dist/` according to
`vite.config.ts`. `server/index.mjs` serves `dist/`, provides `GET /health`,
and falls back to `dist/index.html` for client-side routes. The server uses
`PORT` or 3000 and `HOST` or `0.0.0.0`. `src/main.tsx` also routes `/pages`
(`app/pages.tsx`) and `/design` (`app/design.tsx`, a static design-token
reference page — see `RULES.md` → Intentional exceptions) by pathname match.

## Component-gallery architecture

- `app/page.tsx` owns the review shell, section-type cards, hash navigation, and
  the selected gallery. Clicking a section card mounts only that section area;
  the concept selector then mounts one selected design treatment in its isolated
  preview article.
- `app/concepts/conceptRegistry.tsx` composes concept definitions exported by
  renderer modules and exposes the neutral render contract consumed by the
  shell. It is not allowed to invent concepts, route by variation families, or
  provide fallback names.
- `app/concepts/ComponentConcepts.tsx` registers one component-scoped concept
  for each section that uses a portable component preview.
- `app/concepts/SearchNavigationConcept.tsx` registers the navigation concept
  separately because its search behavior is component-specific.
- `app/components/PurposeHero.tsx`, `TrustProof.tsx`, `MissionAbout.tsx`,
  `CoursePathway.tsx`, `StudentStory.tsx`, `DecisionCta.tsx`, and
  `UtilityFooter.tsx` own isolated portable section previews.
- Additional portable previews such as `AnnouncementBar.tsx`,
  `BreadcrumbTrail.tsx`, `EventsCalendar.tsx`, `FaqAccordion.tsx`,
  `RegistrationContactForm.tsx`, `NewsletterSignup.tsx`,
  `PartnerLogoStrip.tsx`, `TeamLeadership.tsx`, `ResourcesBlogListing.tsx`,
  `GalleryImageGrid.tsx`, and `DonationSupportCta.tsx` follow the same
  component-scoped concept pattern.
- `app/components/ClassFinderCarousel.tsx` owns the shared class finder carousel
  state, controls, and class-session sample data contract. The concept module
  supplies the class finder design configuration for that component only.
- `app/components/VideoGallery.tsx` owns the shared video data and single-player
  interaction for the video-library section.
  `app/video-gallery.css` keeps those treatments scoped.
- Concept definitions are component-scoped. Each public concept key/name
  describes one UI/UX goal for one section, and its `sections` map contains only
  that section's renderer. Reused behavior, data, or styling must stay private
  to the implementation; each section still gets its own concept identity such
  as `Purpose Hero`, `Course Pathway`, or `Utility Footer`.
- Renderer data keys, layout keys, CSS suffixes, and sample datasets are private
  implementation details. They must not be used as gallery concept names,
  selector labels, or section availability rules.
- Component renderers are isolated React components and render only their own
  section preview.
- `app/globals.css` owns the gallery shell/index/concept layout.
  `app/section-components.css`, `app/new-component-sections.css`,
  `app/class-finder-carousel.css`, `app/search-navigation.css`, and
  `app/video-gallery.css` own scoped portable component styles.
- `eslint.config.mjs` defines lint coverage; `tsconfig.json` provides strict
  TypeScript settings but `package.json` has no dedicated typecheck script.

When changing the gallery, follow data flow from `app/page.tsx` to the concept
registry, the component-owned preview, and the scoped CSS. A section-card or
anchor change must be checked against every section type and available concept.

## Component creation contract

New component work starts from a user problem, not a visual variant. A correct
request names the section and the job the component should do, such as “Create a
Search Navigation concept for Navigation that helps users find site content
faster.”

For one new component concept, update the system in this order:

1. Add the section to `app/concepts/componentCatalog.ts` only if it does not
   already exist.
2. Create or update one portable React preview in `app/components/`.
3. Register one `DesignConceptDefinition` with one `sections` map key in
   `app/concepts/`.
4. Add scoped component CSS and import that stylesheet once from `src/main.tsx`.
5. Verify the section selector, concept selector, component interaction, build,
   lint, typecheck, and diff whitespace.

Incorrect requests ask for global concepts, style families, numbered concepts,
or one concept reused across unrelated sections. The agent should translate a
purposeful request into a component-scoped concept name, but should not invent
extra concepts or shared datasets to fill space.

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
assets, and review disclaimers. Do not reintroduce whole-page concept cards,
global concepts, hardcoded variation families, `conceptKeys`,
`supportedSections` arrays, legacy/refined buckets, or fallback concept names.
Do not mount every section area or concept treatment at once. Keep the section
and concept selection state, full-width previews, and unique outer anchor IDs.
Do not recreate rendered HTML bundle-string tests.
Do not invent new deployment targets or dependencies. Share metadata or
contracts only when the change is explicitly approved and does not collapse
intentionally different visual treatments into a generic abstraction.

Before handoff, inspect the diff and run the relevant build, test, lint, and
type checks. Report exact files changed and distinguish verified facts from
inferences. Follow the existing Git conventions, and apply the exact lowercase
`design` PR label to any design-related contribution because preview deployment
depends on it. See [AGENTS.md](./AGENTS.md) for git/PR conventions and
[CLAUDE.md](./CLAUDE.md) for the execution checklist and [RULES.md](./RULES.md)
for prohibited repository changes.
