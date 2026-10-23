# October 23 requirements board change queue

**Status: not applied.** Linear is not connected in this session. This is a requirement-to-existing-work mapping, not a live-board export, a set of fully verified issue drafts, or confirmation that any issue was changed.

Chris authorized applying appropriate new and changed requirements. The remaining blocker is access to the current board and its project/initiative descriptions. Do not ask Chris to approve the same requested edits again once that access is restored.

## Updating rule

Read the live issue and its project/initiative before changing it. Keep existing acceptance criteria that still apply. Preserve status, assignee, priority, estimate, labels, and relationships unless an explicit, verified change is needed. Do not mark review prototypes Done or deployed from this meeting. Keep issue count low; add details to the appropriate existing outcome rather than creating a story for each field.

Use [the team's issue-writing skill](https://github.com/vision-school-international/skillshub/tree/main/linear-issue-create). The October 23 copy was verified against the installed skill. New implementation issues require its exact template, verified code scope, and verified parent project; missing ownership belongs in the decision log until resolved.

## Existing issues to inspect first

These identifiers are verified in the September 19 applied-change record. Their current wording, progress, and scope must be read from Linear before applying a patch.

| Existing work | Meeting delta to reconcile | Source |
|---|---|---|
| [VIS-343 — Branch directory](https://linear.app/vision-school-global/issue/VIS-343) | Show clear generation/class-type badges; retain photos with consistent treatment; strengthen class details with meeting day/time, venue or sufficiently precise location, optional approved public contact, and registration action. Keep public/private fields distinct. Preserve Frederick/DCMD versus DCVA. | Part 1, 00:27:11–00:32:20; 00:42:29–00:45:25; 01:03:51–01:06:07 |
| [VIS-344 — Homepage branch invitation](https://linear.app/vision-school-global/issue/VIS-344) | Retain the compact invitation and separate full directory; keep the visitor journey focused on finding a real class. Do not expand this issue into the whole directory or branch-host intake. | Part 1, 00:17:28–00:19:10; 00:27:11–00:30:12 |
| [VIS-328 — Homepage videos](https://linear.app/vision-school-global/issue/VIS-328) | Ask for the exact approved clips/placements; retain the Alpha-style looping-video idea as a design option, not a final accepted treatment or a reason to autoplay unreviewed media. | Part 1, 00:18:47–00:19:10; Part 2, 00:10:24–00:10:49 |
| [VIS-330 — Homepage photos](https://linear.app/vision-school-global/issue/VIS-330) | Add the content-owner selection handoff and homepage target dates in the description. Keep branch-photo details with directory work and coordinate a consistent image treatment. | Part 1, 00:19:12–00:21:53; 00:28:11–00:29:29; 01:12:57–01:13:48 |
| [VIS-318 — Speaker calendar and itinerary](https://linear.app/vision-school-global/issue/VIS-318) | Record the sheet-to-portal transition as unresolved; scope mobile booking entry and receipt/screenshot import against the proper travel work. Preserve manual verification and do not claim live synchronization is implemented. | Part 1, 00:46:08–01:01:09 |
| [VIS-319 — Branch visit and pickup view](https://linear.app/vision-school-global/issue/VIS-319) | Preserve a simple, readable branch view with current times, venue, and travel information. Reconcile updates with whichever source-of-truth pilot is chosen. Do not make all branches create new accounts for the November branch-request form. | Part 1, 00:59:11–01:06:07; 01:20:34–01:21:20 |
| [VIS-313 — Sign-in and permissions](https://linear.app/vision-school-global/issue/VIS-313) | Continue using existing identity/Telegram integration; flag student versus branch/staff scopes and previous-evaluation visibility for the appropriate owner. A simple Host/Pioneer request need not wait for complete branch account self-service. | Part 1, 00:03:18–00:04:34; 01:20:34–01:21:20 |

## Find the matching existing work before creating anything

1. **Homepage wording and Vision School banner.** Attach the October 28 content and October 31 homepage targets to the relevant existing homepage/hero work. Record Noa's content role in the description. The four generated SVG concepts are unapproved options; Chris's subsequent Classes-page placement request is a separate direct clarification.
2. **Host/Pioneer branch request.** This is a distinct public action and form, with a November 7 soft-launch target. Read the current branch-readiness and public-page project scopes before deciding ownership. Reuse the actual branch Google Form questions. Keep student enrollment and full branch account editing outside this first outcome.
3. **Registration UX.** Reconcile the earlier registration-platform research with the new request for mockups covering People, Registrations, term/country/program grouping, payment-status filtering, and reminder actions. This is not a wholesale migration ticket or permission to close Planning Center. Do not invent a repository or repurpose a travel project.
4. **Internal registration dashboard.** Reuse any matching reporting work. Track readable counts/charts and appropriate branch/program visibility; do not copy participant data or example prices into issues.
5. **Student portal.** Keep the long-term learning/progress, resources, event, application, and payment-plan needs in the PRD. Break out implementation only after the owning project and a first deliverable are established.
6. **CORE transition.** Locate any existing import/synchronization work. Record the choice between sheet-led reflection and portal-led editing as an unresolved decision. Do not make two-way sync a settled acceptance criterion.
7. **Teaching/media resources.** Check Anthony's demonstrated resource tools before proposing new work. Link or extend the existing implementation after its repository and owner are verified; retain the media team's preparation step. Previous speaker evaluations require a visibility decision.

## Keep these in the decision log for now

- Separate Youth and Kids pages: consult the Next Generation team; if approved, each page is its own outcome.
- Class-interest/reminder signup before enrollment opens: flow and destination not selected.
- Automatic Canva-style registration graphics: idea only.
- Paid flight/train/bus lookup: feasibility question; no provider or purchase approved.
- Which roles can read earlier branch-evaluation answers.
- Exact resource-unlock timing and application requirements for students.
- Whether the Host/Pioneer launch embeds, links to, or replaces the existing Google Form.
- Existing resources-portal repository, deployed version, ownership, and approved reuse.

## Code baselines verified on October 23

| Repository | Main commit | Relevant verified area |
|---|---|---|
| `vision-school-international-design` | `88eb3717bf99fba9f11c89e9e5dc5eb3dab1dfb9` | `planning/PRD.md`, `app/components/BranchDirectoryReview.tsx`, `app/concepts/RegionalBranchDirectoryConcept.tsx` |
| `vision-school-international-website-components` | `9636d2b964f730c4877690f711659687401a9a2e` | `src/components/branch-directory/shared.ts`, `payload.ts`, `react.tsx`, `styles.css` |
| `vision-school-international-website` | `65e3d68f85b3079d2f77035203c4f37de551b2e4` | Existing public website; new branch-detail/host routes must be verified rather than invented in issue scope. |
| `vision-school-international-cms` | `60a913bfba5dc7feb1225a5c57882a011df48e38` | Existing public-content CMS; it is not proof that a student-registration backend exists. |
| `vision-school-international-core` | `837e5c787f0f481b896179645a86e1c38fa761f9` | `src/domain.ts`, `src/App.tsx`, `planning/REQUIREMENTS.md`; current review app does not implement live sheet sync. |
| `vision-school-international-flight-operations` | `49772ad6309e3a1d907ae1857bfd4170490a6190` | `prototype/README.md` and the fictional staff workflow; not a production travel or registration service. |

## Completion check after connection is restored

- Read each affected issue and its verified parent scope.
- Apply the supported changes while preserving unrelated work and fields.
- Add only missing, concrete deliverables in the correct project.
- Read every changed issue back and record its identifier, URL, and exact changes here.
- Update this document's status only when the live-board responses confirm the changes.

See [the meeting review](../meeting-notes/2026-10-23-website-registration-and-staff-review.md) for the full requirements, decisions, and source timestamps.
