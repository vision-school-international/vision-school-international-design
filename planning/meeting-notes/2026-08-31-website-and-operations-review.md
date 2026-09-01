# August 31, 2026 website and operations review

**Participants:** Christina, Anthony, and Chris
**Source reviewed:** 53-minute Zoom recording from August 31, 2026
**Document status:** Reviewed by Chris; ministry and content approvals remain separate

## Meeting purpose

The team reviewed the product structure, current website priorities, future registration work, Flight Operations requirements, and the division of work among the three-person team. Much of the meeting confirmed existing requirements and made the immediate sequence clearer.

## Decisions and updated direction

### Product organization

- The public website, CMS, design system, deployment foundation, authentication, and shared internal tooling belong to the main platform direction.
- Website content work and Flight Operations remain separate initiatives with their own practical projects and issues.
- A Registration & Engagement initiative may be created after registration orientation. The team should first see the real Church Center or Planning Center, spreadsheet, notification, and Looker Studio workflow.
- Initiatives should describe important outcomes. Projects and issues should remain simple enough for a three-person team.

### Public website and branch finder

- The immediate website priority is credibility and class discovery.
- The homepage should show approximately three real featured branches, followed by a clear way to see all locations.
- The full directory should allow visitors to search by dependable location information such as city, state or province, and region.
- The first release covers the United States and Canada. Mexico remains a later expansion until approved information is available.
- A branch may send visitors to its approved branch website or to the current Church Center registration destination.
- Branch information will be managed centrally for the first release. Branch-leader editing is a later phase that requires clear permissions and publishing safeguards.
- The team can begin with 5–10 complete, approved branches and add the rest gradually instead of waiting for all approximately 50 locations.

### Registration

- Church Center remains the registration system for the current semester.
- The Vision School website is the public front door: visitors learn about the program, find the right class, and then continue to Church Center.
- A custom registration platform is not part of the current release.
- Possible future improvements include reminders, payment-plan reminders, branch notifications, daily summaries, reporting, demographics, and integration with the current Looker Studio process. These must be verified during registration orientation before implementation issues are created.

### Media and public content

- Authentic Vision School and InterCP images, videos, testimonials, and branch information are the main delivery bottleneck.
- The site should represent a diverse, multigenerational community without using people or images out of context.
- Public media needs a recorded source, permission or consent, approval state, intended use, and useful alternative text.
- Four stills in the regional-directory design are sourced candidates, not automatically approved production assets.
- Anthony still needs to choose whether videos are uploaded to Payload or managed as links and metadata for externally hosted videos.

### Flight Operations

- The meeting confirmed the existing Flight Operations direction: one dependable source for branch and speaker availability, assignment status, routes, travel, contacts, reminders, evaluations, and the limited views each role needs.
- Automated reminders should save routine effort. Repeated nonresponse should alert a person for direct follow-up rather than replacing human care.
- PowerPoint or teaching-file storage is a later enhancement.
- Anthony should experience a real Flight Team route so the planned workflow can be checked against actual work. Chris intends to observe the workflow unless the team later asks him to take operational responsibility.

### Access, security, and AI boundaries

- The meeting discussed four broad audiences: public visitors, registered participants, branch or VSTL leaders, and internal staff or administrators.
- Exact view, editing, approval, publishing, and revocation permissions remain open and require a later access-model discussion.
- Public information belongs at `visionschool.international`; internal applications and sensitive workflows should remain separate, with `vision.school.dev` discussed as the internal application domain.
- AI may help with engineering and repetitive setup. It should not invent ministry content, make sensitive decisions, access data without approved need, or replace human communication and ministry relationships.
- Leadership discussions should lead with intended outcomes and plainly explain the security, AI, and human-relationship boundaries.

## What should be worked on next

1. Approve the regional branch-directory design.
2. Obtain an initial set of 5–10 approved branch records and a small approved media set.
3. Update the existing Linear branch issues rather than creating duplicate stories.
4. Build the homepage branch finder and complete directory as one connected release slice.
5. Verify English and Korean behavior, phone and desktop layouts, accessibility, and Church Center links in staging.
6. Update the PRD to the current initiative structure and requirements.
7. Complete registration orientation before drafting a Registration & Engagement initiative.

The team discussed a working target of roughly one week for a useful public-facing draft and roughly two weeks for a clean, tested release. These are planning targets, not automatic Linear due dates. Real content and approvals are the largest schedule risk.

## Action items

### Christina

- Ask Gilbert or the Flight Team for the branch spreadsheet.
- Begin with 5–10 complete public branch records: approved name, city, state or province, region, public contact or link, branch website if applicable, and the current Church Center destination.
- Contact the media team for real images, videos, testimonials, captions, and written public-use permission.
- Schedule registration orientation and obtain access to the current registration, spreadsheet, notification, and Looker Studio workflow.
- Continue leadership communication and help the team explain outcomes, security boundaries, AI boundaries, and preservation of human relationships.

### Anthony

- Review the regional branch-directory design and identify any changes needed before production implementation.
- Keep the PRD and technical plan aligned with the current initiative structure and public-registration handoff.
- Choose the video-management approach: Payload uploads or externally hosted video records.
- Help define the later role and permission model without delaying the centrally managed public branch finder.
- Get assigned a real Flight Team route and compare the existing Flight Operations backlog with the actual workflow.

### Chris

- Approve the branch-directory issue wording and product scope.
- Review the branch card fields, search behavior, and homepage-to-directory flow.
- Confirm which initial images and testimonials may be used publicly after Christina gathers them.
- Begin the homepage branch finder and directory work once the design and first branch records are approved.
- Review staging before production merge.
- Observe the Flight Team process and record product questions without taking over operational responsibility unless requested.

## Items intentionally not turned into issues yet

- Registration automation or replacement, pending orientation and current-system evidence.
- Branch-leader self-service, pending a complete role and approval model.
- Video-library architecture, pending the hosting decision.
- Detailed access-control implementation, pending the role workshop.

These requirements remain in the PRD so they are not forgotten.
