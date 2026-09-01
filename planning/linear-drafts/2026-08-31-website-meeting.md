# August 31 website meeting: approved Linear changes

**Draft status:** Reviewed and approved by Chris for submission on August 31, 2026
**Issue standard:** [`linear-issue-create` from Vision School SkillHub at `fed652a`](https://github.com/vision-school-international/skillshub/commit/fed652aeb5e76463169227fee96aae046bcd0b9a)
**Submission rule:** Preserve current status, assignee, priority, estimate, labels, project, and initiative except where this document explicitly says otherwise.

## Backlog review result

- Update VIS-343 and VIS-344 with the more concrete branch-directory requirements below.
- Leave VIS-325 through VIS-342 unchanged. They already cover the reviewed website component list and use the required issue structure.
- Do not update VIS-328 until Anthony chooses whether videos are stored in Payload or represented by externally hosted links and metadata.
- Hold the new image-library issue until an approved asset list and public-use permission are attached.
- Do not create registration, branch-leader self-service, or access-control implementation issues until their remaining decisions are resolved.

## VIS-343 update

**Team:** Vision School Team
**Initiative:** Website Content & Management
**Project:** Branches & Locations Page
**Status:** Preserve current Backlog status
**Assignee:** Preserve current unassigned state
**Priority:** Preserve current unset priority
**Estimate:** Preserve current estimate of 3
**Labels:** Preserve existing labels

**Title:** `feat(branches): add searchable branch directory page`

## Context

Vision School expects roughly 50 branches across the United States and Canada, with Mexico as a possible later expansion. Visitors need one dependable place to search for a nearby branch and continue to the correct branch website or Church Center registration page. The implementation should be based on the regional-directory concept in design PR #9 and use real, approved information rather than illustrative locations.

## Outcome

English- and Korean-language visitors can search and browse published U.S. and Canadian branches, understand where each branch serves, and follow the correct public action for that branch.

## Scope

- Add corresponding English and Korean branch-directory routes under `src/pages/`, following the current localization pattern in `src/pages/index.astro` and `src/pages/ko/index.astro`.
- Build the directory presentation from production components under `src/components/` and use the typed content boundary in `src/lib/payload.ts`.
- Let visitors search by branch name, city, state or province, and region.
- Display approved branch details and a clear action that leads either to the branch website or the current Church Center registration destination.
- Include useful empty and no-match states.
- Base the layout and interaction on the approved design from PR #9.
- Use centrally managed branch content for the first release so the team can add the remaining locations gradually without changing page code.
- Preserve the existing site layout, language routing, accessibility behavior, and content safety checks.

## Out of scope

- Giving branch leaders direct editing access.
- Rebuilding Church Center registration or taking payments on the website.
- Publishing Mexico locations before the team approves that expansion.
- Publishing sample branches, unapproved contact information, or unapproved media.

## Acceptance criteria

- The directory works on the English and Korean routes and at representative phone, tablet, and desktop sizes.
- Visitors can search or filter published branches by the agreed location fields and can clear their search.
- No-results and unavailable-link states explain what the visitor can do next.
- Each published branch provides one approved destination: its branch website or the current Church Center registration link.
- Search, filters, cards, and actions work with a keyboard and have visible focus states and understandable accessible names.
- Only approved, centrally managed branch information appears publicly; illustrative data and Mexico locations remain hidden.
- Automated checks cover the main search, empty-state, localization, and link behaviors.

## References

- [Regional branch directory and authentic media design, PR #9](https://github.com/vision-school-international/vision-school-international-design/pull/9)
- [Production website baseline `e7473fe`](https://github.com/vision-school-international/vision-school-international-production/commit/e7473fec40cc3a41f3cfff809bc2e43e75b5a708)
- Related homepage issue: VIS-344

## VIS-344 update

**Team:** Vision School Team
**Initiative:** Website Content & Management
**Project:** Home Page
**Status:** Preserve current Backlog status
**Assignee:** Preserve current unassigned state
**Priority:** Preserve current unset priority
**Estimate:** Preserve current estimate of 2
**Labels:** Preserve existing labels

**Title:** `feat(home): add regional branch finder section`

## Context

The homepage needs a warmer, more credible introduction to Vision School's reach. The meeting agreed that it should show a small set of real branches without overwhelming the page, then direct visitors to the complete searchable directory.

## Outcome

Visitors see approximately three approved featured locations on the homepage and can quickly continue to the full directory or the appropriate public registration destination.

## Scope

- Replace the illustrative class-location treatment in `src/components/Classes.astro` and its data contract in `src/lib/payload.ts` with a regional branch finder based on the approved design from PR #9.
- Keep the section in the existing homepage flow assembled by `src/components/HomePageView.astro`.
- Show approximately three approved featured branches on the homepage.
- Provide a clear “view all locations” action to the directory covered by VIS-343.
- Give each featured branch the approved public action supplied by the team.
- Use centrally managed content and preserve the current English/Korean page flow, responsive layout, and accessibility behavior.

## Out of scope

- Building the full searchable directory, which belongs to VIS-343.
- Giving branch leaders direct editing access.
- Rebuilding registration or payment handling.
- Showing sample branches, Mexico locations, or unapproved media publicly.

## Acceptance criteria

- The homepage displays approximately three approved featured branches and a clear link to the full directory.
- Featured cards use real, centrally managed information and an approved branch-site or Church Center destination.
- The section works on English and Korean routes and at representative phone, tablet, and desktop sizes.
- Every interactive element works with a keyboard and has a visible focus state and an understandable accessible name.
- Missing content or links produce a safe, useful state rather than exposing placeholders or broken actions.
- Automated checks cover section rendering, localization, link safety, and the directory handoff.

## References

- [Regional branch directory and authentic media design, PR #9](https://github.com/vision-school-international/vision-school-international-design/pull/9)
- [Production homepage baseline `e7473fe`](https://github.com/vision-school-international/vision-school-international-production/commit/e7473fec40cc3a41f3cfff809bc2e43e75b5a708)
- Full directory issue: VIS-343

## Held new issue

Do not submit this issue until Chris or the ministry team supplies an approved asset list and confirms public-use permission.

**Team:** Vision School Team
**Initiative:** Website Content & Management
**Project:** Stories & Media Page
**Status:** Backlog
**Assignee:** Unassigned
**Priority:** None
**Estimate:** 3
**Labels:** None until the team defines and verifies the label taxonomy

**Title:** `feat(media): add approved image library`

## Context

The website needs authentic, diverse Vision School and InterCP images instead of stock placeholders. The current media collection records alternative text but does not yet capture the source, permission, approval status, or intended public use. Design PR #9 includes four sourced video stills, but they must not be treated as approved publication assets until the ministry team confirms permission.

## Outcome

Editors have one clearly organized library of approved images with enough source and permission information to use them safely in later page and section work.

## Scope

- Extend `src/collections/Media.ts` in the CMS repository with plain-language fields for source, permission or consent, approval status, and intended use.
- Make approval state easy for a nontechnical editor to understand.
- Add only the images from the team-approved import list.
- Preserve required alternative text and the existing media upload behavior.
- Regenerate and verify the CMS types and tests affected by the collection change.

## Out of scope

- Approving images or deciding whether the ministry has permission to publish them.
- Creating, translating, or inventing captions and ministry claims.
- Video hosting or a video catalog.
- Rendering the images in a specific public page or homepage section.

## Acceptance criteria

- Every imported image has alternative text, a source, a recorded permission or consent state, an approval state, and an intended-use note.
- Editors can clearly distinguish approved assets from assets that are pending, restricted, or not for public use.
- The issue imports only the asset list approved by Chris or the ministry team.
- Existing media uploads continue to work, and affected CMS types and automated checks pass.
- No unapproved image is presented as launch-ready content.

## References

- [CMS media collection baseline `4333164`](https://github.com/vision-school-international/vision-school-international-cms/commit/433316497da23865b7c2759d332e41bc2fcf32e0)
- [Sourced stills and image notes in design PR #9](https://github.com/vision-school-international/vision-school-international-design/pull/9)
