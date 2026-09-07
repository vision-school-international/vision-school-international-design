# Branch directory forward-port handoff

**Prepared:** September 7, 2026  
**Scope:** VIS-343 full directory and VIS-344 homepage branch finder  
**Status:** Ready for Anthony's architecture review. No production database, CMS content, package release, or deployment was changed while preparing this proposal.

## Outcome

- Show about three real, approved branches on the homepage and link to all locations.
- Provide a searchable directory of approved United States and Canadian branches.
- Search by branch name, city, state or province, and region.
- Show an approved image, class status, short class information, and one safe public destination when supplied.
- Keep the first release centrally managed in Payload CMS.
- Preserve English and Korean routes, keyboard use, visible focus, useful empty states, safe links, and responsive layouts.
- Keep Mexico, private contacts, sample records, and unapproved media unpublished.

The first 5–10 approved branch records are enough to publish a useful initial directory. The remaining locations can be added gradually.

## Repository state

The earlier implementation remains useful as a design and behavior reference, but it predates the current shared-component architecture:

- Closed website PR #3 and CMS PR #5 must not be merged as-is.
- Website reference commits are `923c126` and `eb6e472`.
- The earlier CMS reference commit is `fec2669`.
- New implementation must start from website `staging`, CMS `staging`, and shared components `main`.
- The existing shared `branchFinder` renders a static three-card teaser. It does not have a working View All link field, images, class status, or search.
- The CMS stores page content in `Pages.sections` and imports shared block schemas from `@vision-school-international/website-components`.
- The website renders those blocks through `SectionRenderer` in `PageView.astro`.

## Recommended architecture

Create one authoritative Payload `branches` collection and reference those records from page sections. This avoids entering the same branch separately for the homepage and directory as the list grows toward roughly 50 locations.

Add a new shared `branchDirectory` component for the complete directory. Extend the existing `branchFinder` backward-compatibly so it can reference up to three records from the same collection while still rendering older inline records until they are migrated.

This preserves the existing page-section pipeline. The component package owns the block contract and rendering, the CMS owns the branch collection and migration, and the website keeps its existing Payload boundary and page renderer.

## Proposed Branch record

Technical and lifecycle fields:

- `slug`: required, unique, lowercase route-safe key; not localized.
- Payload drafts and versions.
- Published-only anonymous reads; authenticated editors may see drafts.
- Optional `featured` editorial marker.
- Optional `displayOrder` number.

Public fields:

- Required localized `name`.
- Required localized `city`.
- Required localized `administrativeArea` for state or province.
- Required localized `region`.
- Required technical `country`: `us` or `ca`.
- Optional localized `summary`.
- Optional localized `classSummary`.
- Optional localized `schedule`.
- Required technical `classStatus`: `open`, `coming-soon`, `full`, `closed`, `cancelled`, or `no-current-class`.
- Optional upload relationship `image` to existing `media`; media alternative text remains required.
- Required technical `destinationType`: `website` or `church-center`.
- Required localized `destinationLabel`.
- Optional technical `destinationUrl`. Publication validation must require a usable approved URL when the selected status and destination call for an action; otherwise the component shows owner-written unavailable wording.

Do not add a leader name, Telegram ID, email address, phone number, private venue, or other contact information until the team approves the public-contact model.

## Proposed `branchDirectory` block

Flat localized copy fields:

- `kicker`
- `heading`
- `intro`
- `searchLabel`
- `searchPlaceholder`
- `filterLabel`
- `allCountriesLabel`
- `unitedStatesLabel`
- `canadaLabel`
- `clearLabel`
- `resultCountSingular`
- `resultCountPlural`
- `noResultsMessage`
- `emptyMessage`
- `unavailableLinkLabel`
- `destinationAriaLabelTemplate`, with a documented `{branch}` placeholder
- `classesLabel`
- A localized label for each class-status value

Content field:

- `branchRecords`: a many-relationship to `branches`, capped at 60 initially. A draft may be empty. Published empty-state behavior must be deliberate and owner-written.

Guard rules:

- Require `blockType === "branchDirectory"`.
- Require non-empty localized copy fields.
- Accept zero to 60 resolved branch records at the website boundary.
- Validate the presence and shape of each record, enum membership, and media shape when present.
- Keep URL safety in publication validation and rendering rather than relying only on the type guard.

The expected generated Postgres names fit the 63-character limit: `pages_blocks_branch_directory_branches_locales` is 46 characters and the expected versioned equivalent is 49. The actual generated schema still must be checked before accepting the migration.

## Existing `branchFinder` compatibility

Preserve its inline `branches` array for existing stored content. Add:

- Optional `branchRecords` relationship to `branches`, limited to three.
- Optional localized class-status labels.
- Optional technical `viewAllHref` for the locations route.

Render referenced records when present and fall back to old inline records otherwise. View All must be a real, validated internal link rather than plain text. Removing the legacy shape later requires a separate breaking release and reviewed migration.

## Interaction decision

`PageView.astro` currently renders `SectionRenderer` without an Astro client directive. Several existing shared components use React state and click handlers, so they can be server-rendered while remaining non-interactive in the browser. The directory search will have the same problem unless the integration changes.

Anthony should approve one approach:

1. Hydrate interactive shared sections with a measured island strategy such as `client:visible`; or
2. Split static and interactive renderer entry points so only components that require JavaScript are hydrated.

Do not add component-owned network requests or a second page-fetch architecture. Branch records should arrive through the existing Page section response, with enough relationship depth to resolve branch media.

## Implementation and release sequence

1. Shared component package:
   - Approve the schema first.
   - Add the five-file `branch-directory` component and one registry entry.
   - Extend `branchFinder` compatibly.
   - Implement the approved clean blue treatment, search, country filters, clear action, accessible result announcements, no-results state, safe destinations, responsive layout, focus styles, reduced motion, and image fallback.
   - Run the permitted package checks and open a focused PR.
   - After approval, merge, bump the package by the correct semantic version, publish it through GitHub Packages, and verify the temporary publish credential was removed.
2. CMS:
   - Add and register the `Branches` collection.
   - Update the component-package dependency.
   - Add published-only public reads, drafts, localization, media, and publication validation.
   - Generate Payload types and schema.
   - Create a reviewed, forward-only migration. Do not use schema push or run a production migration without separate approval.
   - Add the collection to MCP only with the minimum approved permissions.
   - Ensure changes to published branches trigger the website rebuild.
3. Website:
   - Update the component-package dependency.
   - Apply the approved hydration strategy.
   - Resolve Branch records and media through the existing Page content boundary.
   - Keep production completeness checks fail-closed while allowing authenticated draft preview.
   - Run the permitted website checks.
4. Staging:
   - Run the reviewed database migration.
   - Deploy the CMS.
   - Enter approved English and Korean section copy and the first 5–10 approved branch records.
   - Deploy the website.
   - Verify phone and desktop layouts, keyboard use, English and Korean, empty states, and every destination.
   - Production remains a separate owner-approved release.

## Related current PRs

- Website PR #16 and CMS PR #32 are independent Nixpacks cache changes. Anthony should merge or rebase them in the appropriate deployment order.
- Website PR #17 was merged into staging and removed the page completeness gate globally. The intended draft-preview fix should be reviewed so incomplete drafts can preview without allowing incomplete published pages into the public build.
- Website PR #18 documents build and preview findings.
- Vercel checks are not an accepted review dependency for this project. Chris chose the existing local and Dokploy staging process rather than a paid Vercel account.

## Content handoff

Christina can supply the first records gradually. Each publishable record needs:

- Branch name.
- City.
- State or province.
- Region.
- Country.
- Class status.
- Approved summary and any schedule or class summary.
- Approved destination type, label, and URL.
- Approved image and alternative text when available.
- English and Korean review status.

Chris approves the public fields and visual result. Christina gathers and confirms source information and media permission. Anthony approves architecture, schema, migration, package publication, and deployment order.

## Stop conditions

Do not merge the obsolete implementation branches, publish sample or private data, use unapproved media, invent Korean copy, run a production migration, publish a package, merge implementation PRs, or deploy until the responsible approval and credentials are available.
