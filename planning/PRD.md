# Vision School International Website and Operating Platform

**Document type:** Product Requirements Document  
**Status:** Draft for ministry, product, design, and engineering review  
**Version:** 1.5
**Date:** October 24, 2026 (October 23 meeting review and applied board updates)
**Primary launch:** Public website and current registration handoff  
**Long-term product:** Secure global operations platform  

## 1. Executive summary

Vision School needs a credible global public home and, over time, a secure operating platform.

The public website must quickly help a visitor understand Vision School, trust it, explore the course, find a nearby or online class, and reach the approved registration flow. It must be bright, spacious, mobile-friendly, appropriate across age groups, and built around a continuous story rather than a dense collection of cards.

The operating platform is a separate, later product layer. It should gradually replace fragmented forms, spreadsheets, email, and messages used for branch readiness, registration administration, speaker routes, travel, evaluations, Team Leader Care, reminders, and reporting. The team must not attempt the entire platform in the public-site launch.

### Product strategy

1. Launch the public website and keep Church Center for the active registration cycle.
2. Establish a controlled content and class-data workflow.
3. Add secure identity, invitations, and server-enforced permissions.
4. Deliver internal operations as small modules with separate rollout gates.
5. Evaluate replacing Church Center or adding direct payments only after operational, legal, security, and migration requirements are proven.

## 2. Source material and decision confidence

This PRD combines:

- Both October 23, 2026 team/SME recordings (01:24:55 and 00:13:05), reviewed through complete local transcripts and screen spot-checks. See [the October 23 review](./meeting-notes/2026-10-23-website-registration-and-staff-review.md).

- The August 20, 2026 kickoff recording and planning notes.
- The August 20, 2026 design-feedback recording.
- The August 25, 2026 tools, process, CMS, deployment, and operations demonstration.
- The August 31, 2026 website, initiative-planning, registration, media, and Flight Operations review.
- The September 17, 2026 VS Website Team Meeting (complete timestamped transcript reviewed; shared-screen design demonstration spot-checked), and Chris's September 19 authorization and branch-identity clarification. See [meeting decisions](./meeting-notes/2026-09-17-website-and-staff-review.md).
- Christina's August 25 overview of the current flight-team and registration-team handoffs. The detailed team orientations and source files are still needed before an internal operations build begins.
- Direct visual review of Perspectives.org and CircuitRiders.com.
- The Seattle Haystack / Vision School Instagram reference shown during the feedback recording.
- Current public program information from INTERCP International, the Korean mission organization from which Vision School originated, including its Vision School and What We Do pages.

Terms in this document use the following confidence labels:

- **Confirmed:** explicitly agreed in the meetings.
- **Direction:** strong preference that still needs final approval.
- **Proposed:** product or technical recommendation.
- **Open:** unresolved decision that needs an owner and deadline.

Recordings remain private and must not be committed. Transcript copies may be stored only in the private planning area when the project owner explicitly approves them and they have been checked for restricted credentials, booking details, personal contact information, and other sensitive material. This PRD remains the maintained requirements source; transcript wording is not automatically approved product or ministry language.

## 3. Product vision

Create the trusted global home for Vision School: one public place where people can discover the vision and join a class, and one secure place where authorized teams can coordinate each semester from branch setup through travel, reporting, and follow-up.

### North-star outcomes

- A new visitor can explain what Vision School is after reading the homepage.
- A prospective student can find the right class and reach registration on a phone without staff help.
- The site feels credible to students, parents, churches, missionaries, and ministry partners across generations.
- Every active branch, class, route, and required operational task has an accountable owner and visible status.
- Headquarters can identify missing information and exceptions without chasing people through multiple channels.
- The product can expand across countries and languages without separate regional codebases.

## 4. Problems to solve

### 4.1 Public credibility and discovery

- Vision School lacks a complete public explanation and central source of truth.
- Prospective students and parents may question legitimacy when program details, leadership context, locations, schedules, stories, and contact information are difficult to find.
- Branch and class discovery is fragmented.
- The current experience does not consistently lead people from inspiration to a specific next step.

### 4.2 Registration

- Registration currently depends on Church Center.
- The current flow may not support every desired payment or installment scenario.
- Registrations are already underway, so an immediate replacement would create unnecessary risk.
- Registration links and class status need a maintained owner and health check.

### 4.3 Branch and class operations

- Branch schedules, hosts, locations, arrival windows, and required details are collected inconsistently.
- Missing or late information creates repeated messages and delays downstream work.
- There is no single authoritative record for each semester, branch, class, and assignment.

### 4.4 Speaker routes and travel

- Missionary teachers may rotate through many branches and transportation segments in a semester.
- Flight confirmations are manually entered into spreadsheets, creating repetitive work and data-entry errors.
- Speakers need a clear view of where they go next, when to leave, how they travel, and who receives them.
- Branches and travel teams need consistent itinerary data, while booking codes and personal details remain restricted.
- Live delay data would be valuable but is not required for the first travel release.

### 4.5 Evaluations, Team Leader Care, and reporting

- Speaker-to-branch and branch-to-speaker evaluations are manually requested and frequently missed.
- Staff need reminders, missing-submission views, readable summaries, and trends.
- Team Leader Care needs restricted follow-up workflows without broadly exposing pastoral or sensitive notes.

## 5. Product principles

1. **One clear public journey.** Explain, build trust, show the course, show lived impact, and repeatedly offer Find a Class.
2. **Global by foundation.** Regions can launch incrementally, but naming and data structures must not assume one country.
3. **Mobile first.** The primary experience must work cleanly on a phone; no native mobile app is required now.
4. **Public and operational data stay separate.** Private travel, participant, evaluation, and care data must never leak into public pages, previews, analytics, or source code.
5. **Progressive replacement.** Keep working tools during transition and replace them only after a complete migration gate passes.
6. **Least privilege.** Chat-group membership or Telegram identity never grants organizational permissions by itself.
7. **Human approval.** Ministry claims, testimonials, photographs, translations, and AI-assisted content require an accountable approver.
8. **Clarity over novelty.** The main site must feel contemporary and alive without becoming youth-only, fashion-like, noisy, or trend-dependent.
9. **AI supports the work, not the relationships.** AI may help with engineering and repetitive setup, but it must not make sensitive ministry decisions, invent approved content, or replace personal care and communication.

## 6. Audiences

| Audience | Primary need | Initial experience |
|---|---|---|
| Curious visitor | Understand Vision School and its legitimacy | Public website |
| Prospective student | Find the right class and register | Public website + Church Center handoff |
| Parent, pastor, or partner | Understand purpose, accountability, expectations, and contact path | Public website |
| Registered participant | See approved class information and later resources | Registration tool; later portal |
| Branch leader or host | Maintain branch details and see readiness | Later secure portal |
| Teacher, speaker, or missionary | See assignments, travel, contacts, and forms | Later secure portal |
| Registration team | Monitor registrations and exceptions | Existing tools; later portal |
| Flight and travel team | Import confirmations and coordinate transport | Later secure portal |
| Team Leader Care | Record restricted follow-up and branch health | Later restricted module |
| Headquarters | Configure semesters and see completeness, alerts, and reporting | Later admin portal |
| System administrator | Manage approved access, roles, configuration, and audits | Later privileged portal |

## 7. Confirmed decisions

- Build a responsive website; do not build a native app now.
- Design for global use, even if North America is the first active region.
- Launch a useful public experience quickly and mature the broader platform toward Spring 2027.
- Keep Church Center for the current registration cycle.
- Treat registration replacement and payments as a later, gated workstream.
- Include a clear Vision School explanation, course content, class discovery, testimonials, events, contact, donation, and registration calls to action.
- Plan for maps, branch schedules, speaker routes, travel, forms, reminders, dashboards, and reporting in later phases.
- Treat security as a first-order requirement.
- Collect current forms, waivers, schedules, registration sheets, travel sheets, and message templates before designing internal workflows.
- Use Perspectives as the primary public-site reference.
- Use a global-friendly domain; a `.us`-only identity is insufficient for the long-term goal.
- Use Payload CMS for approved public wording, media, and class content; editors should not need to edit frontend code for routine content changes.
- Use the design gallery for layout and component review, then move an approved portable component into the production repository and connect it to the required CMS fields.
- Use a pull request for every code change. Design-related pull requests must carry the exact lowercase `design` label so the Dokploy preview workflow can run before approval.
- Keep the public Astro site and Payload CMS on Vercel for now. Use Dokploy for the design gallery and for mature independent applications when that deployment route has been reviewed.
- Use Windmill for fast, isolated internal prototypes. A successful prototype may later move into its own GitHub repository and Dokploy deployment.
- Use Authentik as the internal application doorway and permission layer. Telegram can identify a person, but access still requires an approved account and role.
- Keep a small product hierarchy for the three-person team. Use the current Platform, Website Content & Management, and Flight Operations initiatives; create a separate Registration & Engagement initiative only after registration orientation confirms its scope.
- Treat the branch and class finder as the next high-value public feature.
- Treat a Church Center or Planning Center replacement as a separate research workstream. Do not commit to a custom build until current usage, costs, compliance needs, and existing alternatives are understood.
- Use `visionschool.international` for the public experience. Keep internal applications and sensitive operations separate from the public site, with `vision.school.dev` as the working internal application domain discussed by the team.
- Centrally manage public branch information for the first release. Branch-leader self-service comes later, after roles, approval, publishing, and access-revocation rules are agreed.

### 7.1 Working tool and delivery model

| Need | Primary tool or repository | Working rule |
|---|---|---|
| Change approved wording, images, videos, class information, or links | Payload CMS | Use draft/review/publish states and the least access needed for the editor or API client. |
| Explore or approve a new page section or visual layout | Design gallery | Build one portable, component-scoped concept. Review it through a labeled pull request preview. |
| Change the public website structure or behavior | Astro production repository | Move only the approved design, connect it to CMS content, test it, and obtain Anthony's review for architecture, CMS, deployment, or security-sensitive work. |
| Prototype an internal form or workflow | Windmill | Use non-production or safely minimized data, test with the responsible team, and avoid creating a separate app when one clear workflow can serve the need. |
| Give internal users one place to open approved tools | Authentik | Show only the applications each approved user is allowed to use. Branding is low risk; authentication flows and security configuration require Anthony's review. |
| Host a mature independent application | GitHub repository plus Dokploy | Promote a proven prototype only when it needs independent engineering, broader use, or a stable release process. |
| Host the main public website and CMS | Vercel | Keep the current production path until reliability, cost, and migration evidence support a change. |
| Track planned and active work | Linear | Use the four verified initiatives and a few broad outcome-based projects. Keep fewer than 100 open, plain-language issues; update existing issues before creating new ones. Completed history is not part of the open-work limit. |

### 7.2 Change flow

1. A content-only change is reviewed and published through Payload CMS.
2. A layout or component change begins in the design gallery.
3. The design change is opened as a pull request with the `design` label and reviewed in its Dokploy preview.
4. After approval, the portable component is moved into the Astro production repository and connected to Payload fields.
5. The production change is reviewed as a separate pull request, with Anthony involved when the CMS schema, deployment, security, or architecture can be affected.
6. After merge, the team verifies the real public page rather than relying only on a successful build or deployment message.

### 7.3 Tool-access safety

- Do not put API keys, passwords, recordings, transcripts, participant lists, booking details, or production exports in GitHub, Linear, or preview content.
- Any Payload or Windmill machine access must use the smallest useful permission set. Do not create a broad “access to everything” key when read or limited update access is sufficient.
- Authentik branding may be delegated, but login flows, providers, role mappings, and other security-sensitive configuration must be reviewed by Anthony.
- Internal application domains should remain separate from the high-visibility public domain where practical.
- Every internal app needs a named owner, intended users, data sensitivity, support path, and retirement or promotion decision.

### 7.4 September 17–19 implementation decisions

These decisions take precedence over older prototype assumptions in this document.

- **Public website first.** Finish useful public class discovery before expanding registration or operations scope. Church Center remains the registration destination; embedded registration/API feasibility is still Anthony's investigation, not an approved replacement build.
- **One directory implementation.** Extend `branchDirectory` in the current shared website-components package and consume it in the design gallery. Do not merge the old Astro prototype simply because it contains similar cards. The compact homepage invitation leads to the separate full directory.
- **Explicit class types.** Adults, Youth, and Kids are confirmed separately for each branch. They are not derived from ANA, YA, YG, All Gen, or Campus labels. In particular, YG may serve adults. Unknown availability stays unknown, and remains visible under All.
- **Branch identity, confirmed by Chris September 19.** Frederick and DC/MD are the same branch: display DC/Maryland with Frederick, MD. DC/VA is a separate branch. Its city, venue, program availability, and class details have not been supplied. Preserve separate same-city program entries in the original roster.
- **Review data is not published data.** The supplied roster plus the separately confirmed DC/VA gives 37 draft branch/program entries. This is not a verified count of all active branches or classes. Sign-up counts are excluded. Fictional feature examples must be visibly separate from this roster.
- **Media selection needs an owner.** Use HQ-managed Google Drive for the current resource handoff. Leadership/content owners select and approve the exact assets and wording for each slot; do not treat a large folder or a public video as publication permission.
- **Small internal prototype only.** A calendar/visit-details and reciprocal-evaluation demonstration may use fictional data while public-site work continues. It does not approve a new production stack, replace Windmill, connect a real account, or implement access control. Anthony owns IDM/Telegram and server-enforced permission integration.
- **Evaluation timing.** Proposed private evaluation tasks become due three hours after the scheduled class start and remain pending until submitted. Approved VS department staff need the appropriate review view; the precise roles permitted to read answers must be agreed before real submissions are collected. No AI scoring is requested.
- **Review process.** Use the existing design gallery for component review and Telegram topics for comments. Gallery commenting/versioning is not part of this build. Code goes through focused PRs; design PRs carry `design`. No automatic merge, package publication, database migration, or production deployment is authorized by this implementation step.
- **No new paid service or hosting change.** Current hosting and older Vercel references must be verified with Anthony; this work does not require Chris to buy a Vercel account.

### 7.5 October 23 direction and delivery targets

These updates take precedence over older planning targets and assumptions about immediate portal replacement. They do not mark a prototype as deployed or a suggested design as approved.

- **Public credibility and class discovery remain first.** Noa and the content owners choose actual wording, media, and placements; Chris implements the reviewed choices and keeps the requirements visible to the team.
- **Meeting targets:** homepage content choices by October 28; useful homepage design/content by October 31; a November 7 soft launch with a Host/Pioneer branch-request action. End-of-December branch-information/site readiness, January route planning, and February staff-conference preparation provide the later operational context. These targets are not automatic Linear status, assignee, or due-date changes.
- **Branch requests are separate from student enrollment.** Reuse the actual branch Google Form's questions for the soft launch. The team considered a simple form/link/embedded handoff. Exact form, fields, destination, and treatment remain to be supplied. Full branch accounts are not required for that first request flow.
- **Class details before registration.** Show approved meeting day/time, venue or useful location, generation/class type, and registration action. Public contacts require explicit selection; private leaders, hospitality, translation, and transport details remain internal. Maintain Frederick/DCMD as one branch and DCVA separately.
- **Vision School banner and concise copy.** Review a recognizable, modern SVG identity alongside the existing InterCP header branding. No final logo or tagline was selected. Chris's subsequent direct request places the banner concept in the Classes page; this is an additional placement instruction, not a meeting approval of one concept.
- **Registration replacement now has a design brief.** Design People/Registrations workflows, term and country grouping, USD/CAD handling, program/payment-status filters, appropriate payment reminders, and readable registration charts. A later connected replacement is the intended direction. The brief does not authorize shutting down Planning Center or skip verification of payments, forms, financial ownership, permissions, and migration.
- **Student portal is later scope with specific needs.** Capture schedule, assignments/reading, attendance/progress, evaluations, staff communication, future camps, applications/documents, and desired payment plans. Resource-unlock weeks and example prices were illustrative, not approved fixed rules.
- **CORE transition is unresolved.** Preserve the team's productive use of existing sheets while comparing sheet-led reflection with portal-led editing. Import/export is not live two-way synchronization, and no cutover was agreed.
- **Travel entry should work from a phone.** Preserve manual entry; consider reviewed draft extraction from a receipt/screenshot/confirmation. Flight/train/bus service lookup is a feasibility question with no paid provider selected.
- **Reuse demonstrated resources.** Anthony showed existing deck tools, media, chord sheets, roles, team leads, and nation networks. Verify their owning repository and fit before rebuilding them. Keep the media team's preparation step; previous-evaluation visibility needs an access decision.
- **Possible later public features:** Youth and Kids explanatory pages, pre-enrollment interest/reminder signup, and an Alpha-inspired video treatment need further content/design decisions. Automated Canva-style graphics are an idea, not part of the first dashboard commitment.
- **Board maintenance, applied October 24:** 12 existing issues were updated and four focused issues added after their current project and initiative scopes were checked. The team now has 40 open issues. Existing statuses, assignees, priorities, estimates, labels, and relationships were preserved. See the [applied-change record](./linear-drafts/2026-10-23-board-change-queue.md).
- **Approved tracking hierarchy:** Chris approved the planned [Registration & Engagement initiative](https://linear.app/vision-school-global/initiative/registration-and-engagement-5871d8ad3bea) and its [Registration Design project](https://linear.app/vision-school-global/project/registration-design-a42dd211d57a). The first two outcomes are a fictional-data student registration prototype (VIS-348) and a staff People/Registrations prototype (VIS-349). Homepage hero wording (VIS-346) and Host/Pioneer intake (VIS-347) stay in the public content projects. The [initiative decision log](https://linear.app/vision-school-global/document/october-23-decisions-and-later-student-portal-requirements-d4da20718d9b) retains later portal needs and unresolved policies without creating a story for each idea.

## 8. Design direction from the feedback review

### 8.1 Keep

- A continuous, generous, long-scroll homepage.
- A bright, respectable, cross-generational tone.
- Strong visual hierarchy, oversized editorial headings, and deliberate whitespace.
- A clean navy, cobalt, sky-blue, and cool-white visual system.
- A prominent testimonial or participant story.
- The phrase **“More than information. An invitation.”**
- A **Find a Class** action in the opening, middle, and closing portions of the page.
- Movement and real community photographs.
- Light, restrained, campus-adjacent graphic energy as a secondary influence.

### 8.2 Change

- Tune the palette to an approved Vision School system.
- Remove crowded photo collages, overlapping captions, and competing diagonal shapes; favor a disciplined grid, straight image edges, and one strong visual gesture at a time.
- Make the class journey more central than general inspiration.
- Use a consistent spacing rhythm across sections and breakpoints.
- Replace all illustrative class listings, statistics, claims, and testimonials before production.
- Use approved Vision School footage for a montage only if it remains readable, accessible, and light enough for the main audience.
- Build the U.S. image library around authentic, multiethnic and multigenerational North American participation, including Black, Latino, Asian, white, African, and other diaspora communities across the overall experience without tokenism.
- Reuse INTERCP photography selectively when the activity clearly matches the page context, such as Vision School learning, worship, prayer, small groups, fellowship, or an origin/history story. Do not use an attractive travel or mission-field image to imply a class experience it does not show.
- Confirm image ownership, participant releases, regional publishing permissions, and appropriate alt text before production, even when a photograph comes from an affiliated organization’s public website.

### 8.3 Reject for the main site

- Neo-brutalist styling. It may be explored later for Youth Vision School only.
- Dark, cinematic treatment as the dominant site experience.
- A youth-only or streetwear/fashion-store feeling.
- Overly wide layouts that weaken the reading journey.
- Loud neon color systems.
- Dense SaaS-style card grids and excessive rounded containers.
- Copying another organization’s wording, logo, assets, or implementation.

### 8.4 Reference analysis

#### Perspectives.org — primary reference

What the team likes:

- One long, coherent homepage rather than a fragmented landing page.
- Minimal, stable navigation with a visible class action.
- Large headline scale and mixed editorial typography.
- Geometric image crops and angled transitions.
- A clear rhythm of spacious light sections, strong color bands, curriculum blocks, and testimonials.
- Repeated course/class conversion points.
- An institutional but welcoming tone that works for people under and over 30.

What to avoid copying:

- Exact colors, section copy, logo treatment, shapes, photographs, and proprietary assets.
- Any wording that could confuse Vision School with the Perspectives course or organization.

#### INTERCP International — program-content source

Use the organization’s current public Vision School information as the starting point for preview copy and content validation:

- Vision School is described as an 11-week program meeting once per week.
- Its weekly rhythm includes worship, lectures, prayer, small groups, and fellowship.
- It is intended for people who want to discover God’s heart and vision for the world, with a particular focus on unreached peoples.
- Publicly listed topics include the global mission landscape, world mission history, understanding Islam, spiritual warfare and intercessory prayer, the times, the 10/40 Window, and mission spirit.
- Current public listings mention Fall 2026 registration for the United States and Canada.

All final wording, curriculum groupings, dates, locations, registration links, statistics, and testimonials still require Vision School International owner approval before launch. Avoid publishing internal or region-specific INTERCP claims as global Vision School claims without verification.

#### CircuitRiders.com — limited secondary reference

Potentially useful:

- Real movement footage.
- A sense of momentum, worship, celebration, and participation.
- Clear routes into training and movement content.

Do not carry forward:

- Predominantly black/dark atmosphere.
- Fashion, merchandise, or streetwear cues.
- A tone aimed mainly at one youth generation.
- Content density and width that make the page feel less guided.

#### Seattle Haystack / Vision School Instagram — light secondary reference

Potentially useful:

- Light backgrounds, restrained volume, outlined display type, documentary/campus photos, and handmade event energy.

Limit:

- The meeting showed a social feed and individual post, not an approved global brand system. Treat it as mood input only.

## 9. Proposed public information architecture

### Primary navigation

- Home
- About Vision School
- The Course / Curriculum
- Find a Class
- Events
- Stories
- Resources
- Donate
- Contact
- Sign In, only when the portal is ready

### Homepage sequence

1. Global purpose statement and primary Find a Class action.
2. Concise explanation of Vision School as an 11-week journey of worship, teaching, prayer, small groups, and fellowship.
3. Why the course matters, supported by approved photography or footage.
4. Mid-page Find a Class invitation.
5. Course structure and learning outcomes.
6. Class finder preview or current-semester availability.
7. Approved participant story or testimonial.
8. Events or current initiative, if content is current.
9. Final Find a Class invitation.
10. Credibility, contact, donation, policy, and organizational footer information.

## 10. Public user journeys

### Journey P1 — Understand and trust

1. Visitor arrives through search, social, a church, or a friend.
2. Hero explains the purpose in plain language.
3. Visitor sees what the course is, who it is for, what it covers, and why it matters.
4. Approved stories, photographs, leadership/organizational context, and contact information establish credibility.
5. Visitor can continue to class discovery without opening an account.

### Journey P2 — Find and register for a class

1. Visitor selects Find a Class from the hero, sticky navigation, middle invitation, or final invitation.
2. The homepage may show a small set of featured classes or branches plus a clear View All Classes action.
3. Visitor browses or filters the complete approved list by city/region, distance/location, online/in-person, language, schedule, and term as data allows.
4. Visitor opens a branch or class detail page with status, schedule, format, location scope, expectations, contact path, and registration action.
5. If a branch maintains an approved, authoritative website, the page can hand off to it. Otherwise, Vision School provides a consistent branch/class page.
6. For the initial release, registration hands off clearly to the approved Church Center form.
7. Broken, closed, or unpublished registrations show a helpful owner-approved state.

For the first branch-directory release, the homepage should show approximately three approved featured branches. The full directory should support United States and Canada search by dependable city, state/province, or region fields. Mexico remains hidden until the team approves the expansion and supplies reliable data.

### Journey P3 — Explore without a current class

1. Visitor searches a region with no published class.
2. The site explains that no class is currently listed.
3. Visitor can choose online options, nearby regions, a contact/interest path, or future updates.
4. The site does not invent locations or expose unpublished branch data.

## 11. Public functional requirements

### Content and credibility

- **PUB-001:** The homepage must state what Vision School is and the intended outcome without requiring prior ministry knowledge.
- **PUB-002:** The site must include approved organizational relationship and accountability language.
- **PUB-003:** The site must include approved curriculum/course structure and expectations.
- **PUB-004:** Stories and testimonials must include documented publication consent.
- **PUB-005:** Every public photograph or video must have confirmed usage rights and appropriate alt text/captions.
- **PUB-006:** Dates, events, semesters, and registration status must have an owner and last-updated workflow.

### Class discovery

- **CLS-001:** Users must be able to browse published classes without signing in.
- **CLS-002:** Each published class must include term, format, location scope, schedule/status, language when applicable, and registration action.
- **CLS-003:** Only approved public fields may be included in rendered pages, client data, maps, analytics, or metadata.
- **CLS-004:** Closed, full, canceled, unpublished, and coming-soon states must be distinct.
- **CLS-005:** The initial registration action must open the approved Church Center destination with clear handoff language.
- **CLS-006:** The system must detect or report broken registration destinations before launch and during active registration periods.
- **CLS-007:** The class finder must have usable empty and error states.
- **CLS-008:** Visitors must be able to search or filter the approved branch/class list by city or region; additional filters are included only when the source data is dependable.
- **CLS-009:** Every published branch/class must have an accountable owner and an authoritative destination. Use an approved branch website when it is maintained; otherwise use the standard Vision School detail page.
- **CLS-010:** The homepage may show a small, owner-selected featured set, but View All Classes must lead to the complete approved directory.
- **CLS-011:** A branch page must represent the local branch accurately without exposing private leader, host, traveler, or venue information.
- **CLS-012:** The first release must use centrally managed branch records; branch-leader editing requires a later approved access and publishing model.
- **CLS-013:** The directory supports an explicit Adults / Youth / Kids selection together with search and country filters. Only confirmed offerings match a selected class type. YA/YG and other audience labels remain separately displayed.
- **CLS-014:** DCMD, DC/MD, and Frederick search terms find the same DC/Maryland record. DCVA and DC/VA find the distinct DC/Virginia record. Do not invent a DC/VA city or treat Frederick as a third branch.
- **CLS-015:** Compact cards can reveal additional approved branch/class information. Missing information is described as pending rather than fabricated; approved photographs require useful alternative text. Draft/demo records must not produce working registration actions.

### Contact, events, and donation

- **PUB-007:** Contact inquiries must route by approved topic and owner.
- **PUB-008:** Public events must show current status, dates, location/format, and action.
- **PUB-009:** Donation actions must use an organization-approved destination and ownership model.
- **PUB-010:** Privacy and terms notices must match the data actually collected.

### Content management

- **CMS-001:** Authorized content owners must be able to update classes, events, and core public copy without direct production access.
- **CMS-002:** Draft, review, approved, scheduled, published, and archived states are proposed for time-sensitive content.
- **CMS-003:** The site must identify stale or expired events and registrations.
- **CMS-004:** Production publishing must preserve version history and rollback.
- **CMS-005:** Publishing approved public content must trigger or clearly request the production rebuild required by the static Astro site, and the resulting public page must be verified.
- **CMS-006:** Editors and API clients must receive only the collections and actions required for their work.
- **CMS-007:** Public media records must clearly identify source, permission or consent, approval state, intended use, and appropriate alternative text before publication.

## 12. Public non-functional requirements

### Accessibility

- Target WCAG 2.2 AA.
- All navigation and controls must work by keyboard with visible focus.
- Respect reduced-motion preferences.
- Maintain sufficient color contrast in every approved palette.
- Provide meaningful alt text, captions/transcripts for essential video, semantic headings, labels, and error announcements.
- Test with zoomed text and common mobile screen sizes.

### Performance

- Prioritize fast first content on mobile connections.
- Optimize and responsively size photographs and video.
- Avoid autoplay video with audio.
- Use video posters and load motion media only when appropriate.
- Set Core Web Vitals targets before launch and test representative pages, not only the homepage.

### Search and sharing

- Unique title and description for indexable pages.
- Canonical URLs, sitemap, robots policy, and structured data where accurate.
- Organization-approved social card and favicon.
- No private or draft page indexed.
- Location and course copy must use real public terminology, not keyword-stuffed text.

### Reliability and privacy

- Production, preview, and local environments must be separated.
- No secrets, personal data, booking confirmations, private schedules, or raw meeting files in GitHub.
- Collect only analytics events that answer a product question.
- Document retention and deletion for inquiries before collecting them.
- Provide a named support owner and rollback procedure for every launch.

## 13. Secure portal scope

The portal is not part of the public MVP, but the public architecture must not block it.

### Proposed authenticated navigation

- My Dashboard
- My Class / My Branch
- Schedule
- Assignments / Route
- Travel
- Forms and Evaluations
- Resources
- Notifications
- Reports
- Administration

### Student portal needs recorded October 23

These are follow-on requirements, not November soft-launch acceptance criteria:

- **STU-001:** Students can see their class schedule, assigned reading/homework, attendance, and progress.
- **STU-002:** Students can submit the appropriate evaluations and communicate questions or required information to staff.
- **STU-003:** Approved resources, nation-network information, and applications can become available at the appropriate stage. Ministry owners define eligibility and timing; example weeks must not be hardcoded as approved rules.
- **STU-004:** Students can see upcoming approved camps/events and, in a later financial workflow, applicable balances or payment plans.
- **STU-005:** Any document upload/application workflow must have a defined owner, intended audience, and access scope before implementation with real information.

### Identity and access

- **AUTH-001:** Telegram sign-in may prove control of a Telegram identity; it must not grant a role by itself.
- **AUTH-002:** Privileged access must require an approved invitation or administrator action.
- **AUTH-003:** Authorization must be enforced on every protected server request.
- **AUTH-004:** Roles must be scoped by region, semester, branch, team, or record as appropriate.
- **AUTH-005:** Deactivation and role removal must take effect promptly.
- **AUTH-006:** Privileged role changes and sensitive record access must be auditable.
- **AUTH-007:** Pastoral notes, booking details, personal information, and general internal data must have separate visibility rules.
- **AUTH-008:** Authentik should provide one branded internal doorway where an approved user sees only the applications assigned to that user.
- **AUTH-009:** Adding a Windmill or Dokploy application to the internal doorway requires a named owner, intended audience, data classification, and approved access mapping.
- **AUTH-010:** Changes to authentication flows, identity providers, role mappings, or other security-sensitive Authentik settings require technical-owner review and a tested rollback path.

## 14. Operations requirements

### Semester and branch readiness

- **OPS-001:** Authorized staff can create a semester and define readiness requirements.
- **OPS-002:** Branch owners can submit location, host, schedule, availability, transport constraints, contacts, and required forms.
- **OPS-003:** Required fields and approval state are visible.
- **OPS-004:** Headquarters can see incomplete branches, owners, due dates, and escalation status.
- **OPS-005:** Only approved public fields can flow into the class finder.

### Speaker assignments and routes

- **RTE-001:** Authorized staff can maintain approved speaker profiles and availability.
- **RTE-002:** Speakers can be assigned to class sessions and ordered routes.
- **RTE-003:** The system identifies overlapping assignments and obvious schedule conflicts.
- **RTE-004:** Speakers and branches can acknowledge assignments.
- **RTE-005:** Route changes have an owner, status, notification, and audit record.
- **RTE-006:** The small speaker/staff prototype begins with a calendar or weekly agenda. Selecting a visit reveals the class time/time zone, location/map slot, class makeup, transportation, lodging, and a teaching-material link slot. Use fictional records until Christina supplies the current calendar/CoreDocs and Anthony approves the permission boundaries.
- **RTE-007:** One person may have both speaker and branch-staff roles. A prototype view switch is a design control, not proof of authorization. Production must enforce visibility on the server.

### Travel coordination

The August 25 overview described the present flight-team workflow as:

1. Collect schedule and traveler requirements from branches, speakers, and Vision School departments.
2. Compare routes that meet the requirements at an acceptable price.
3. Purchase the approved travel.
4. Manually enter confirmation codes and flight details into the team's trackers.
5. Give the approved itinerary details to the correct speakers and branches.

The team currently refers to a central schedule document, branch Google Forms, a flight tracker, and an expense tracker. These names and uses are meeting-level notes, not yet a verified system inventory. The full flight-team orientation, actual field list, responsible owner for each step, and permitted visibility must be documented before a replacement workflow is designed.

- **TRV-001:** Authorized travel staff can record flight, train, bus, pickup, lodging, and host-contact segments.
- **TRV-002:** Confirmation messages or documents should be parsed into draft fields to reduce manual entry; a person must verify before publication.
- **TRV-003:** Each speaker sees the next approved segment, required departure time, destination, and contact appropriate to their role.
- **TRV-004:** Branches see only the arrival/departure and contact details they need.
- **TRV-005:** Confirmation codes and other restricted booking data are never public and are limited to approved roles.
- **TRV-006:** Changed, delayed, canceled, unconfirmed, and acknowledged states must be distinct.
- **TRV-007:** Live carrier status is a later enhancement, not a first-release dependency.
- **TRV-008:** Authorized users can export an offline itinerary without exposing data from unrelated travelers.
- **TRV-009:** Before a prototype begins, inventory the central schedule document, Google Forms, flight tracker, expense tracker, message templates, owners, fields, handoffs, and duplicate entry.
- **TRV-010:** The first Windmill pilot should reduce one clearly measured manual step, use non-production or minimized data, and require a person to verify imported or AI-parsed travel details before release.
- **TRV-011:** Speakers, branch leaders, flight staff, registration staff, and headquarters must each receive only the view and actions needed for their role.
- **TRV-012:** The pilot must record who entered, purchased, verified, changed, and distributed each itinerary without copying restricted booking data into general logs.

### Evaluations and Team Leader Care

- **EVAL-001:** Private speaker-to-branch and branch-to-speaker evaluation tasks become due three hours after the scheduled class start and remain pending until submitted. Final questions come from Christina's current forms. Real scheduling must account for the class time zone and canceled/rescheduled visits; a demo clock is not a live reminder service.
- **EVAL-002:** Reminder and escalation rules must be deterministic and configurable.
- **EVAL-003:** Headquarters can see missing submissions without seeing restricted answers unnecessarily.
- **EVAL-004:** Approved users can view readable summaries and aggregate trends.
- **EVAL-005:** Sensitive comments route to the correct restricted staff group.
- **EVAL-006:** Repeated unanswered automated reminders must alert an appropriate person for human follow-up rather than continuing indefinitely or replacing personal care.
- **TLC-001:** Team Leader Care cases have a restricted owner, status, due date, and visibility scope.
- **TLC-002:** Retention, access review, export, and deletion rules must be approved before pastoral data collection begins.

A teaching-material link slot can be shown in the prototype. Uploading, storing, or granting access to actual PowerPoint files remains outside this build and is not required for the first Flight Operations release.

## 15. Proposed data model

- **Person/User:** approved identity, status, contact channels, locale, consent.
- **Role/Permission Assignment:** role, scope, approval, expiration/review.
- **Territory/Region:** global organizational hierarchy.
- **Branch:** public location data, restricted contacts, ownership, readiness.
- **Semester/Cohort:** dates, publication and registration state.
- **Class:** branch, semester, schedule, language, format, capacity/status, registration destination.
- **Session:** date/time, topic, assigned speaker, completion.
- **Speaker/Missionary Profile:** approved operational data and availability.
- **Assignment:** speaker-to-session relationship, status, acknowledgment.
- **Route:** ordered assignments and travel context.
- **Travel Segment:** mode, timing, status, restricted booking fields.
- **Event:** public or internal event details and publication state.
- **Resource/Form Template:** approved versioned document or form.
- **Form Submission:** subject, submitter, state, visibility, follow-up.
- **Notification:** audience, channel, content version, delivery and escalation state.
- **Follow-up Case:** restricted owner, due date, state, visibility.
- **Audit Event:** actor, action, target, time, result.
- **Registration/Payment Reference:** only after registration architecture approval.

## 16. Security and privacy requirements

- Complete a threat model before launching identity, travel, evaluations, payments, or Team Leader Care.
- Enforce least privilege and server-side authorization.
- Validate input and encode output at trust boundaries.
- Add session, CSRF, rate-limit, and abuse controls appropriate to the selected stack.
- Encrypt data in transit and use provider-managed encryption at rest.
- Keep secrets and production data out of source, builds, previews, and client bundles.
- Log privileged changes without duplicating sensitive field values.
- Define account revocation, incident response, data export, retention, and deletion procedures.
- Review volunteer and staff access on a recurring schedule.
- Do not send personal, travel, pastoral, payment, or participant data to an AI provider without explicit policy, data-flow review, and approval.

## 17. Registration and payments migration gate

**October 23 update:** The team demonstrated the current People/Registrations administration and requested registration mockups. Design can proceed from that verified brief while the complete field list, financial rules, owners, and migration process are collected. This is a step beyond the earlier research-only posture; the replacement itself is not yet ready for live cutover. The full orientation and operational checks below still apply before a production replacement.

The August 25 meeting requested a focused research workstream covering Vision School, Medical Missions / M&M, Mission & Business, Vision Camp, Mission Camp, and other InterCP programs that currently use Church Center or Planning Center. The names, owners, and active registration pages for every program still need to be verified.

The workstream should compare four paths in plain language:

1. Keep the current platform and improve how Vision School links to it.
2. Keep the current platform but add integrations or small internal tools around it.
3. Adopt an existing open-source or commercial alternative.
4. Build a custom platform only when the first three paths cannot meet verified needs.

Do not replace Church Center until the team has documented and tested:

- Registration fields and eligibility rules.
- Waivers, consent, signatures, and safeguarding requirements.
- Receipts, discounts, deposits, installments, refunds, disputes, and failed payments.
- Administrative corrections and customer support.
- Financial ownership, reporting, reconciliation, and access control.
- Privacy notices, retention, export, and deletion.
- Data migration, duplicate handling, rollback, and failure recovery.
- A parallel pilot with real staff and representative workflows.

The actual Church Center, Planning Center, payment-processing, support, and migration costs must be verified from current account records before making a replacement decision. A public pricing calculator or meeting screenshot is not proof of the organization's current bill.

The October 23 recordings provide an initial registration orientation and a concrete UX brief, not the complete operational inventory. Before creating production implementation issues, finish reviewing the actual fields, spreadsheet, notification, financial, and reporting workflows and verify the owning project/initiative. Keep Church Center available during the design and pilot. The simple branch Host/Pioneer intake is a separate public-flow deliverable and does not depend on replacing student registration.

## 18. Release plan

### Phase 0 — Alignment and source collection

**Goal:** remove decision bottlenecks.

- Confirm product, ministry approval, technical, content, security/privacy, and support owners.
- Decide global launch positioning and domain criteria.
- Collect approved logos, photographs, footage, stories, course copy, branch data, events, registration links, forms, and operating templates.
- Interview registration, travel, branch, and Team Leader Care representatives.
- Inventory the actual flight and registration tools, fields, owners, visibility rules, and handoffs demonstrated in each team's orientation.
- Record the approved tool route for each work item: CMS, design gallery, production repository, Windmill, Authentik, Dokploy, or Vercel.
- Document the Mexico/Monday.com pilot and reusable lessons.
- Select one of the proposed visual directions.

**Exit:** one design approved; public facts and class data have owners; launch scope and decision owners are recorded.

### Phase 1 — Public MVP

**Goal:** establish credibility and make current registration easier.

- Home, About, Course, Find a Class, class detail, Events, Stories, Contact, Donate, Privacy, and Terms.
- Responsive navigation and long-scroll homepage.
- Controlled class data and Church Center handoff.
- Approved media and content.
- Accessibility, performance, SEO, analytics, security headers, and broken-link checks.

**Exit:** a new visitor understands Vision School and can reach the correct registration action from a phone; no placeholder or private content remains.

The August 31 meeting set a working target of roughly one week for a useful public-facing draft and roughly two weeks for a clean, tested release. These are team planning targets rather than automatic issue due dates; real branch information, approved media, and approved testimonials remain the main schedule risks.

### Phase 1.1 — Current-semester support

- Admin-managed branch/class directory.
- Events and resources.
- Contact routing.
- Registration-link health checks.
- Missing public-information status view.
- Reusable social launch links and cards.

### Phase 2 — Secure portal foundation

- Approved identity approach and invitation flow.
- Server-side roles and scoped permissions.
- Branch, semester, class, user, speaker, and assignment records.
- Protected resources and audit events.
- Separate staging and production data/secrets.

### Phase 3 — Operations modules

Deliver independently behind explicit rollout gates:

1. Branch and semester readiness.
2. Speaker assignments and routes.
3. A narrow Windmill travel pilot, followed by travel import, itinerary, acknowledgment, and change management only if the pilot succeeds.
4. Evaluations, reminders, reporting, and Team Leader Care.

### Phase 4 — Registration and payment decision

- Document current workflow and verified costs.
- Inventory every active InterCP program and registration page in scope.
- Evaluate keeping the current platform, adding integrations, adopting an existing alternative, and building a custom replacement.
- Confirm legal and financial ownership.
- Pilot before migration.

### Phase 5 — Global scale and Spring 2027 polish

- Multilingual content and translation governance.
- Regional administration boundaries.
- Time-zone aware schedules.
- Cross-region routing and reporting.
- Progressive web capabilities only if usage supports them.
- Reconsider a native app only if measured needs cannot be met responsively.

## 19. Public MVP acceptance criteria

- Ministry approver accepts all public claims, course descriptions, relationships, stories, and media.
- A first-time visitor can accurately describe Vision School after the homepage journey.
- Find a Class appears in the opening, middle, and closing journey.
- A user can find a class and reach registration on current mobile and desktop browsers.
- Every published class has an owner, term, format, location scope, state, schedule information, and valid action.
- Empty, loading, error, full, closed, and unpublished states are understandable.
- No private, restricted, draft, or placeholder information appears in source, metadata, analytics, or production pages.
- Keyboard navigation, focus order, contrast, text zoom, reduced motion, landmarks, and alt text pass review.
- Performance and broken-link checks pass agreed thresholds.
- Production rollback and named support ownership are documented.

## 20. Portal launch gates

The authenticated portal may launch only when:

- Identity and privilege escalation are threat-modeled and tested.
- Server-side authorization tests cover every protected action.
- Account approval, deactivation, and role review are documented.
- Sensitive fields, visibility, and retention are approved.
- Audit, backup, restore, incident, and support procedures are tested.
- Representative staff complete end-to-end acceptance testing with non-production data.

## 21. Success metrics

### Public website

- Percentage of visitors who reach Find a Class.
- Percentage who open a class detail and select registration.
- Mobile time/taps from landing to an appropriate class.
- Registration-link error rate.
- Search visibility for approved branded and location queries.
- Accessibility and performance health.
- Credibility and clarity feedback from students, parents, branch teams, and partners.

### Operations platform

- Branch readiness completed by deadline.
- Missing required information by semester and owner.
- Manual data-entry time per travel booking.
- Coordination messages per speaker trip.
- Itineraries acknowledged before travel.
- Time to communicate and acknowledge a change.
- Evaluation completion rate and time-to-completion.
- Count and age of unresolved follow-up items.
- Measured staff time saved in before/after workflow sampling.

## 22. Risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Scope expansion | Delays the public launch | Enforce phase gates and separate modules |
| Approval ambiguity | Rework or inaccurate public content | Name approvers and record acceptance |
| Global/regional confusion | Expensive data and naming rework | Global model with incremental regional rollout |
| Telegram over-trust | Privilege escalation | Invitation binding and server-side authorization |
| Travel-data exposure | Personal safety and privacy harm | Field-level visibility, least privilege, audit, retention |
| Pastoral-data exposure | Serious trust and privacy harm | Restricted module and policy approval before collection |
| Payment complexity | Financial, legal, and support failures | Keep Church Center; verify requirements and pilot |
| Placeholder leakage | Loss of credibility | Production content gate and automated checks |
| Stale classes/events | Misleading visitors | Owners, expiry, health checks, and review dates |
| Many contributors | Conflicts and duplicated work | Protected main, issues, small PRs, CODEOWNERS, decisions log |
| Trend-driven design | Main site ages quickly or excludes older users | Approve against cross-generational design principles |

## 23. Collaboration and repository requirements

- Use the four verified Linear initiatives: **Vision School International Platform**, **Website Content & Management**, **Flight Operations App**, and the planned **Registration & Engagement** initiative approved October 24. Its first project is **Registration Design**, not a live registration or student-portal release.
- Keep projects and issues high-level enough for a three-person team. Create a separate **Registration & Engagement** initiative only after registration orientation establishes a real delivery boundary.
- Keep detailed requirements in this PRD. Linear issues should describe deliverable work, not repeat every requirement as a separate story.
- Keep fewer than 100 active issues. Update or combine an existing issue before creating another one.
- Record the intended tool or platform in the issue description or a small shared label set; do not rename product epics after tools.
- Protect `main` and require pull requests and passing checks.
- Require at least one reviewer; require the technical/security owner for identity, permissions, travel, payments, or infrastructure.
- Keep changes small and tied to a requirement or acceptance criterion.
- Use preview deployments for visual acceptance.
- For the design gallery, use the repository's portable-component workflow and apply the exact lowercase `design` label so Dokploy can create the review preview.
- Move an approved design into the production repository in a separate change and connect it to Payload fields rather than hardcoding final content.
- After a CMS publish that affects static public pages, confirm that the production rebuild ran and inspect the actual public result.
- Record material architecture decisions in `docs/decisions/`.
- Maintain `README.md`, `CONTRIBUTING.md`, `SECURITY.md`, `CODEOWNERS`, PR/issue templates, and a placeholders-only `.env.example`.
- Do not commit recordings, private transcripts, credentials, participant lists, travel confirmations, production exports, or unapproved media.

### Definition of ready

- Named user and problem.
- Scope and non-scope.
- Acceptance criteria.
- Data-sensitivity classification.
- Dependencies and owner.
- Approved design/copy when required.

### Definition of done

- Acceptance criteria pass.
- Material behavior has automated coverage.
- Mobile and desktop are verified.
- Accessibility and error states are checked.
- Security and privacy impacts are reviewed.
- Documentation and rollback notes are current.
- Product/content owner accepts the result in preview or staging.

## 24. Proposed ownership

| Responsibility | Proposed owner | Status |
|---|---|---|
| Product priorities and workflow requirements | Chris / designated product owner | Confirm exact ministry role |
| Public site, product decisions, and prototypes | Chris and assigned implementer, with ministry review | Confirm |
| Architecture, infrastructure, security | Anthony / designated technical lead | Confirm |
| Ministry approval | Vision School Department Team Leader and Ami | Confirm |
| Branch information, registration orientation, and current workflow access | Christina, coordinating with Gilbert and current team owners | Confirm after orientation |
| Travel workflow | Gilbert, named as flight-team leader in the meeting | Confirm after orientation |
| Mexico pilot lessons | Dallas contact | Identify |
| Content and media gathering | Christina with the ministry media team | Public use still requires an assigned ministry approver |
| Domain ownership and renewals | Organization-controlled account | Assign |
| Production support | Named primary and backup | Assign |

## 25. Open decisions

1. Who formally approves public launch?
2. Is the initial positioning global with North America first, or North America branded for later globalization?
3. What organization-owned domain will be used?
4. What are the exact active-semester dates and registration deadlines?
5. Which classes and regions are required at first launch?
6. What source is authoritative for class and schedule data?
7. What is the approved public relationship language for Vision School and InterCP?
8. Which claims, numbers, course structure, and terminology are approved?
9. Which proposed design direction will proceed?
10. What logo, palette, type, photography, and video assets are approved?
11. Which Church Center links and registration states must be supported?
12. What donation system is approved?
13. Which languages and territories are required in 2026–2027?
14. What identity method and non-Telegram fallback are approved?
15. Who approves privileged accounts and roles?
16. What forms, waivers, signatures, and safeguarding requirements are mandatory?
17. What information may be stored about participants, branches, speakers, travel, evaluations, and care—and for how long?
18. What are the verified Church Center and payment-processing costs and capabilities?
19. Are installment plans required or only a research item?
20. What did the Mexico/Monday.com pilot solve, and what should be reused?
21. Which travel emergencies and carrier changes must the first travel module support?
22. Who owns ongoing content, technical support, and incident response?
23. What are the exact source documents, forms, trackers, field names, owners, and handoffs used by the flight and registration teams today?
24. Which internal workflow is small and safe enough to be the first Windmill pilot, and how will success be measured?
25. Who approves access to each Authentik application, and what non-Telegram recovery or fallback is required?
26. Which Payload collections and actions does each editor or API client genuinely need?
27. Which branches have an approved, maintained website, and who owns every remaining generic branch page?
28. Which current branch and class fields are reliable enough for city/region search and public filtering?
29. Which YouTube videos, short clips, captions, people, and regional usage rights are approved for the public site?
30. Will the video library store uploaded files in Payload or manage links and metadata for externally hosted videos?
31. What may each public visitor, registered participant, branch or VSTL leader, internal staff member, and administrator view, edit, approve, publish, and revoke?
32. Which InterCP programs and active Church Center or Planning Center registrations belong in the registration-platform research inventory?
33. What are the verified current subscription, processing, support, and staff-time costs for the existing registration workflow?
34. Which preview, staging, and production environments are authoritative for each repository, and who owns rollback verification?

## 26. Immediate next actions

### October 23 immediate actions

- [ ] Noa/content owners provide homepage wording and selected media/placements for the October 28 meeting target.
- [ ] Chris implements the reviewed homepage and class-discovery changes for the October 31 target; Anthony verifies the deployment path and reported production-pipeline failure.
- [ ] Christina/Noa provide the actual branch-request Google Form, current questions, destination, and owner so the smallest Host/Pioneer flow can be tested for the November 7 target.
- [ ] Prepare registration UX options from the demonstrated People/Registrations workflow; keep the payment/migration decision separate from the branch intake.
- [ ] Agree how CORE sheets and portal data will stay current before piloting shared editing.
- [ ] Review Anthony's existing resource tools for reuse instead of creating duplicate implementation work.
- [x] Reconnect Linear, inspect the live parent scopes, apply supported updates, and read them back: 12 existing issues updated and four new issues created October 24. See the applied-change record; application code and deployments were not changed by these planning updates.

### Earlier team actions still to reconcile

- [ ] Christina obtains the first 5–10 complete, approved branch records from Gilbert or the responsible team, then continues adding the remaining locations gradually.
- [ ] Christina gathers a representative set of approved images, video sources, testimonials, captions, and public-use permissions from the media team.
- [ ] Christina schedules registration orientation and obtains access to the current registration, spreadsheet, notification, and Looker Studio workflow.
- [ ] Anthony reviews the regional branch-directory design and decides how videos will be represented in the CMS.
- [ ] Anthony experiences a real Flight Team route and compares the existing backlog with the actual workflow.
- [ ] Chris approves the branch-directory issue scope, initial public media, and staging result.
- [ ] The team records the smallest useful access for Payload, Windmill, Authentik, Dokploy, GitHub, Linear, and Vercel without placing credentials in issues or GitHub.
- [ ] The team returns to registration, branch-leader access, and detailed role issues only after the responsible orientation or decision is complete.

### First implementation milestone

- [ ] Approve the regional branch-directory design.
- [ ] Replace illustrative branch information with the first approved branch set.
- [ ] Build the homepage branch finder with approximately three featured locations.
- [ ] Build the complete U.S./Canada directory with dependable city/region search and useful empty states.
- [ ] Connect each published branch to its approved branch website or current Church Center destination.
- [ ] Verify English and Korean routes, phone and desktop layouts, keyboard use, visible focus, link safety, placeholders, and privacy behavior.
- [ ] Review the result in staging and obtain documented ministry acceptance before production launch.
