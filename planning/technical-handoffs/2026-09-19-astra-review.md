# Astra adversarial review — September 19

**Result:** Both findings fixed and re-tested. No remaining actionable finding in the reviewed changes. This is not approval to merge or deploy.

Chris no longer has Claude Pro and explicitly requested an Astra subagent review instead. An independent Astra reviewer inspected and tested the changes while the main agent ran browser checks. Claude authentication or a subscription is no longer a review requirement for this work.

## Changes reviewed

| Pull request | Review scope |
|---|---|
| [Shared components #18](https://github.com/vision-school-international/vision-school-international-website-components/pull/18) | Branch contracts, program/audience separation, search, URLs, preview registration, localized labels, details, and responsive styles |
| [Design #17](https://github.com/vision-school-international/vision-school-international-design/pull/17) | Review controls, supplied versus fictional information, branch identity, planning changes, and component integration |
| [Flight Operations #1](https://github.com/vision-school-international/vision-school-international-flight-operations/pull/1) | Fictional visit views, forms, timing, reciprocal submissions, reset, dialog behavior, and privacy boundaries |

Initial reviewed heads: components `429f668`, design `915c8b4`, flight `7669972`. The reviewer then inspected and re-tested the corrections below. Component fix: `cdd0274`.

## Findings and corrections

1. **Inherited directory rendering bug:** A custom community-group name such as `__proto__` could be mistaken for a built-in JavaScript property and crash rendering. This existed before the PR; the review reproduced it in the baseline and the proposed code. The label dictionary now has no inherited properties, so custom names remain ordinary text. `__proto__`, `constructor`, and `toString` were re-tested using the actual React renderer without errors or warnings.
2. **Planning formatting:** Two Markdown hard-break lines contained trailing spaces. Replaced them with ordinary paragraph spacing so the complete PR diff passes the whitespace check.

No dependency, database, real account, production content, or deployment change was needed for either correction. The build's incidental machine-specific generator path was excluded from the contribution.

## Fresh verification

- **44 independent React/model cases:** legacy and malformed records, optional labels, unsafe links, preview/non-open registration suppression, text escaping, Korean labels, unusual group names, exact three-hour boundaries, daylight-saving transitions, local midnight, reciprocal submissions, duplicate submissions, and answer-length limits.
- **58 existing directory assertions:** re-run independently, covering contract/render-tree behavior, aliases, combined filters, URL handling, optional CMS fields, and consumer-owned data boundaries.
- **8 staff model tests:** all passed; JavaScript syntax checks passed.
- **Shared package:** type check and build passed after the fix.
- **Design gallery:** existing test/build, lint, and TypeScript checks passed against the rebuilt package. The existing clean-install limitation below was not repaired or hidden.
- **Browser checks by the main agent:** Scarlet Chrome profile; Frederick/DCMD produces one card; changing language/data resets filters intentionally; empty feedback cannot submit; Escape returns focus to the triggering visit; feedback containing HTML-like text stays literal; department/branch/speaker views and due-time controls behave as demonstrated.
- **Narrow layouts:** no horizontal page overflow at an actual 291px CSS viewport for the Korean directory or 320px for the staff prototype. Temporary viewport overrides were cleared. The earlier phone/tablet/desktop review remains documented in the [implementation handoff](./2026-09-19-directory-and-staff-prototype.md).

The independent reviewer ran source/model/React tests, not browser automation; browser evidence above comes from the main agent. The extra test harnesses are local audit artifacts, not newly installed test dependencies or a new CI system.

## Still outside this review

- Anthony's CMS schema/migration review, shared-package publication, website consumer updates, client-side interactivity integration, real permissions, and live scheduling.
- Christina's approved class information, photographs, contact destinations, registration links, and evaluation forms; team decisions about evaluation ownership and answer visibility.
- The existing design lockfile's clean-install failure and the unchanged gallery shell's nested-paragraph warning. These remain documented baseline issues, not new failures caused by these changes.
- Full screen-reader certification, a synthetic 320px embedded container at a desktop viewport, production deployment, real data, or ministry approval.

All three PRs remain drafts. Passing a code review does not publish the sample records or complete their associated Linear issues.
