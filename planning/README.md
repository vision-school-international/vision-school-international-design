# Vision School planning

This folder is the shared GitHub home for Vision School meeting summaries, product requirements, plans, and issue drafts. It keeps product decisions easy to find without mixing private recordings or unfinished operational data into the website code.

## Start here

| Document | Purpose | Current status |
|---|---|---|
| [October 23 team/SME review](./meeting-notes/2026-10-23-website-registration-and-staff-review.md) | New and changed requirements, targets, decisions, and next actions from both recordings | Reviewed against full local transcripts and screen spot-checks |
| [October 23 applied board changes](./linear-drafts/2026-10-23-board-change-queue.md) | Twelve existing issues updated, four new issues, and the approved registration hierarchy | Applied and read back October 24; 40 open issues across the team |
| [Product Requirements Document](./PRD.md) | Main source for approved direction, requirements, boundaries, risks, and open decisions | Draft for team and ministry review |
| [September 17 meeting and September 19 decisions](./meeting-notes/2026-09-17-website-and-staff-review.md) | Current build priorities, branch terminology, internal prototype, and responsibilities | Chris authorized scoped implementation on September 19; launch approvals remain |
| [September 19 Linear updates](./linear-drafts/2026-09-19-meeting-applied.md) | Seven existing issues updated from the meeting; remaining tagging and evaluation-ownership decisions | Applied and read back in Linear; no new issues |
| [Current implementation and review handoff](./technical-handoffs/2026-09-19-directory-and-staff-prototype.md) | What is being built, what is not live, and Anthony's integration gates | Review work, not a production release |
| [Media placement and approval checklist](./media/2026-09-19-placement-checklist.md) | The exact content and permission decisions needed for each website section | Waiting for ministry-approved selections |
| [August 31 website and operations meeting](./meeting-notes/2026-08-31-website-and-operations-review.md) | Plain-language decisions, requirements, next work, and owner action items | Reviewed by Chris |
| [August 31 Linear issue changes](./linear-drafts/2026-08-31-website-meeting.md) | Exact proposed updates for VIS-343 and VIS-344 plus the held media-library issue | Approved by Chris for submission |
| [Branch directory forward-port handoff](./technical-handoffs/2026-09-07-branch-directory-forward-port.md) | Current architecture proposal, repository state, release sequence, and approval gates for VIS-343 and VIS-344 | Ready for Anthony's architecture review |
| [Meeting transcript index](./transcripts/README.md) | Internal source transcripts approved by Chris for team planning use | Internal reference only |
| [Image sourcing and approval notes](../IMAGE-SOURCING.md) | Sources, candidate assets, and publication-approval status | Updated by the regional-directory design work |

## Folder guide

- `meeting-notes/` contains concise meeting decisions and action items.
- `transcripts/` contains the specific internal transcript copies Chris approved for this private planning repository. They are source records, not approved requirements or public copy.
- `linear-drafts/` contains issue wording prepared under the team issue-writing standard. Linear remains the live source for issue status after submission.
- `technical-handoffs/` contains cross-repository implementation proposals and approval gates prepared for the responsible technical reviewer.
- `media/` is reserved for planning notes about sourcing, rights, approval, captions, and intended use. Actual approved design assets remain in their appropriate repository asset folders.
- `PRD.md` is the durable product-requirements source. Meeting notes should update the PRD when a decision changes the maintained product direction.

## Review and editing

Planning documents may be merged after the responsible owner has reviewed them. They do not require the same engineering review as application code because they do not deploy the website. A later change is made through another pull request, which gives the team a readable history of what changed and why.

Use these document states when helpful:

- **Draft:** still being discussed.
- **Reviewed:** the named owner has checked the document, but some external approvals may remain.
- **Approved:** accepted as the current team direction.
- **Superseded:** preserved for history but replaced by a newer document.

## Safety boundary

Do not commit passwords, login codes, API keys, raw recordings, participant lists, actual flight confirmations, booking details, pastoral information, production exports, or unapproved media. A transcript may be committed only when the project owner explicitly approves it for this private planning repository and a review confirms that it does not expose those restricted details. Transcripts must never be copied into the public website or treated as approved ministry wording.
