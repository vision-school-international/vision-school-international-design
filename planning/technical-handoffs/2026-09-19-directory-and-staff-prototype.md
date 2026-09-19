# Directory and staff prototype — review handoff

## Outcome and boundaries

Continue the public directory already merged into the shared component package, review it in the design gallery, and demonstrate the separate internal speaker/staff workflow using fictional data only. This is not a production release, an approved branch database schema, or a new authentication system.

The source is [the September 17 meeting and Chris's September 19 clarification](../meeting-notes/2026-09-17-website-and-staff-review.md). The maintained requirements are in [PRD 1.4](../PRD.md), especially sections 7.4, 11, and 14.

## Verified starting points — September 19

- Components `main`: `e6c66f94aa0012abfe98da9f36c2cd1146261e80`; shared directory merged in PR #17.
- Design `main`: `bba70d578d4f144298679ac0324212b6b28d11bf`; supplied roster merged in PR #15.
- Website `main`: `65e3d68f85b3079d2f77035203c4f37de551b2e4`; current `staging`: `c0470ea6351c7ad21de55ffd837d155671036707`.
- CMS `main`: `60a913bfba5dc7feb1225a5c57882a011df48e38`; current `staging`: `45ac7e194315dc59e7abb71fb05739dbcfd8e07f`.
- Old website PRs #20/#28 are draft reference implementations. Do not merge them to bypass the shared-component integration.
- Main and staging intentionally differ in CMS/website rendering. Do not synchronize them or reintroduce SSR as an incidental part of this work.

## Current review implementation

### Shared branch directory

Extend the existing component, not a new component type. Branch records gain optional explicit `programs` values (`adults`, `youth`, `kids`), search `aliases`, and an approved `image` with URL and alternative text. Existing summary, class summary, contact, and destination fields power expandable details.

Optional localized label fields are additive; existing content still renders. Branch records are still supplied by the consumer, not stored inside the directory's Payload copy block. New localized columns will need Anthony's normal CMS migration/release review before production uses this package change.

### Design gallery

The branch concept consumes the same shared renderer, with English/Korean review and separate supplied-name versus fictional examples. DC/MD retains Frederick; DC/VA is added separately with no guessed city/programs/status/links.

The gallery previously referenced `branchFinder`, a component removed from the shared package. Retire that stale alternative and its fake destination links; preserve the existing Class Finder concept. This is not approval to expand the homepage into the full directory.

### Private operations prototype

The existing private Flight Operations repository holds a dependency-free, local-only UI demonstration. It does not select the production stack, replace Windmill, implement login, store responses, or send notifications. Its future project ownership must be verified separately from public-site work.

## Anthony's release checklist

### Review pull requests

All three are open drafts as of September 19; none is merged or deployed.

| Contribution | Review link | Verification |
|---|---|---|
| Shared branch component | [Components #18](https://github.com/vision-school-international/vision-school-international-website-components/pull/18) | GitHub package verification passed; local checks below |
| Directory gallery and planning | [Design #17](https://github.com/vision-school-international/vision-school-international-design/pull/17) | Depends on Components #18; local checks below; clean-install baseline still needs repair |
| Fictional speaker/staff prototype | [Flight Operations #1](https://github.com/vision-school-international/vision-school-international-flight-operations/pull/1) | Eight local model tests pass; no GitHub checks configured/reported |

Review the component changes before accepting the gallery dependency. The prototype can be reviewed independently. These are implementation/review links, not automatic issue-closing instructions.

### Before production integration

1. Agree the authoritative branch record shape and data owner. Do not enter guessed age/class availability or expose private staff/travel data.
2. Review the added localized component fields and create/test the required migration against the chosen CMS release branch. No database was migrated by this work.
3. Publish an appropriate shared-package version and update the CMS/website consumers together. The existing website uses 0.2.2; CMS uses 0.2.3; a source merge alone does not update either consumer.
4. Wire approved branch records to `branchDirectory`. Current CMS staging has no Branches collection; the block itself stores only directory wording.
5. Enable the interactive directory intentionally in the website. Current `PageView.astro` renders the shared React renderer without a client hydration directive; verify search and filters actually respond in the browser.
6. Keep the homepage compact; link the Branches menu and View All Class Locations to the full `/locations/` destination and Korean equivalent.
7. Verify draft exclusion, image approval, safe Church Center destinations, unknown class states, mobile/keyboard use, and English/Korean rendering before a release recommendation.
8. For the separate internal prototype: agree identity-to-role mapping, assignment-level visibility, private answer readers, official forms, and server-side due-task rules before using any real data.

## Decisions still required

- Christina: class types and current public details for each branch, selected media, and official calendar/forms.
- Anthony / Christina: which authorized department roles may read which evaluation answers.
- Chris / Anthony: owning Linear project for teaching evaluations; do not repurpose a travel-only project without agreement.
- Team: reviewed designs and ministry-approved content before deployment.

## Verification — September 19

- Shared components: TypeScript and package build pass. A local, temporary regression harness passed 58 assertions covering old/new data shapes, optional labels, aliases, class-type separation, safe destinations, and suppression of registration on preview-only records.
- Design gallery: build, existing `npm test` (which runs the build), lint, and TypeScript pass. No dependency versions or lockfile were changed.
- Staff prototype: all eight behavior tests and JavaScript syntax checks pass. These include the exact three-hour boundary, time-zone/DST handling, separate reciprocal submissions, invalid submissions, and reset behavior.
- Browser review used Chris's Scarlet Chrome profile, not the IFP profile. Directory checks included Frederick/DCMD and DCVA search, clear/combined filters, keyboard-operated details, English/Korean review, and phone/tablet/desktop layouts. The review found and fixed a narrow program dropdown at tablet width and cramped header/cards inside the gallery; component-container breakpoints now account for the actual available space.
- Staff browser checks covered visit details, speaker versus branch views, the sample form, separate reciprocal tasks, and tasks remaining open later in the week. No real information was entered or sent.
- An independent code review found the same tablet-toolbar issue; it has been fixed and rechecked. No other substantive defect was reported in that bounded review.
- Chris replaced the Claude review requirement with an independent **Astra adversarial review** on September 19. Astra completed the review and re-tested both findings after correction: an inherited custom-group-name rendering bug and planning-document trailing spaces. Final results: 44 independent React/model cases, 58 directory assertions, and eight staff tests passed. See [the Astra review record](./2026-09-19-astra-review.md). Claude access is no longer a review blocker.

### Checks that are not complete

- A clean `npm ci` is blocked by the existing design lockfile, which lacks `@emnapi/core@1.10.0` and `@emnapi/runtime@1.10.0`. Local checks used the declared dependencies without rewriting the lockfile. Anthony should repair and verify the clean-install baseline separately; these local passes are not a claim that clean CI installation passes.
- The existing gallery shell emits a React warning about paragraphs nested inside a paragraph in `app/page.tsx`. It is present in the unchanged baseline and outside this component-only contribution. The preview renders and its controls work, but the browser console is not entirely warning-free.
- No production CMS migration, package publication, consumer integration, deployment, real access-control test, or ministry/content approval has taken place.

The pull requests are review artifacts, not a release recommendation. Do not infer deployment success from this document.
