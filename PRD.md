# Vision School International Website and Operating Platform

**Document type:** Product Requirements Document  
**Status:** Draft for ministry, product, design, and engineering review  
**Version:** 1.1
**Date:** August 21, 2026
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

- The August 20, 2026 kickoff recording and planning notes.
- The August 20, 2026 design-feedback recording.
- Direct visual review of Perspectives.org and CircuitRiders.com.
- The Seattle Haystack / Vision School Instagram reference shown during the feedback recording.
- Current public program information from INTERCP International, the Korean mission organization from which Vision School originated, including its Vision School and What We Do pages.

Terms in this document use the following confidence labels:

- **Confirmed:** explicitly agreed in the meetings.
- **Direction:** strong preference that still needs final approval.
- **Proposed:** product or technical recommendation.
- **Open:** unresolved decision that needs an owner and deadline.

Recordings and transcripts contain private meeting material and must not be committed to the repository. This PRD captures decisions without publishing the raw source.

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
- Include a clear Vision School explanation, course/curriculum, class discovery, testimonials, events, contact, donation, and registration calls to action.
- Plan for maps, branch schedules, speaker routes, travel, forms, reminders, dashboards, and reporting in later phases.
- Treat security as a first-order requirement.
- Collect current forms, waivers, schedules, registration sheets, travel sheets, and message templates before designing internal workflows.
- Use Perspectives as the primary public-site reference.
- Use a global-friendly domain; a `.us`-only identity is insufficient for the long-term goal.

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
2. Visitor filters by region, distance/location, online/in-person, language, schedule, and term as data allows.
3. Visitor opens a class detail page with status, schedule, format, location scope, expectations, contact path, and registration action.
4. For the initial release, registration hands off clearly to the approved Church Center form.
5. Broken, closed, or unpublished registrations show a helpful owner-approved state.

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

### Identity and access

- **AUTH-001:** Telegram sign-in may prove control of a Telegram identity; it must not grant a role by itself.
- **AUTH-002:** Privileged access must require an approved invitation or administrator action.
- **AUTH-003:** Authorization must be enforced on every protected server request.
- **AUTH-004:** Roles must be scoped by region, semester, branch, team, or record as appropriate.
- **AUTH-005:** Deactivation and role removal must take effect promptly.
- **AUTH-006:** Privileged role changes and sensitive record access must be auditable.
- **AUTH-007:** Pastoral notes, booking details, personal information, and general internal data must have separate visibility rules.

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

### Travel coordination

- **TRV-001:** Authorized travel staff can record flight, train, bus, pickup, lodging, and host-contact segments.
- **TRV-002:** Confirmation messages or documents should be parsed into draft fields to reduce manual entry; a person must verify before publication.
- **TRV-003:** Each speaker sees the next approved segment, required departure time, destination, and contact appropriate to their role.
- **TRV-004:** Branches see only the arrival/departure and contact details they need.
- **TRV-005:** Confirmation codes and other restricted booking data are never public and are limited to approved roles.
- **TRV-006:** Changed, delayed, canceled, unconfirmed, and acknowledged states must be distinct.
- **TRV-007:** Live carrier status is a later enhancement, not a first-release dependency.
- **TRV-008:** Authorized users can export an offline itinerary without exposing data from unrelated travelers.

### Evaluations and Team Leader Care

- **EVAL-001:** Session completion can trigger speaker-to-branch and branch-to-speaker evaluation requests.
- **EVAL-002:** Reminder and escalation rules must be deterministic and configurable.
- **EVAL-003:** Headquarters can see missing submissions without seeing restricted answers unnecessarily.
- **EVAL-004:** Approved users can view readable summaries and aggregate trends.
- **EVAL-005:** Sensitive comments route to the correct restricted staff group.
- **TLC-001:** Team Leader Care cases have a restricted owner, status, due date, and visibility scope.
- **TLC-002:** Retention, access review, export, and deletion rules must be approved before pastoral data collection begins.

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

Do not replace Church Center until the team has documented and tested:

- Registration fields and eligibility rules.
- Waivers, consent, signatures, and safeguarding requirements.
- Receipts, discounts, deposits, installments, refunds, disputes, and failed payments.
- Administrative corrections and customer support.
- Financial ownership, reporting, reconciliation, and access control.
- Privacy notices, retention, export, and deletion.
- Data migration, duplicate handling, rollback, and failure recovery.
- A parallel pilot with real staff and representative workflows.

The actual Church Center and payment-processing fees must be verified from current account records before making a replacement decision.

## 18. Release plan

### Phase 0 — Alignment and source collection

**Goal:** remove decision bottlenecks.

- Confirm product, ministry approval, technical, content, security/privacy, and support owners.
- Decide global launch positioning and domain criteria.
- Collect approved logos, photographs, footage, stories, course copy, branch data, events, registration links, forms, and operating templates.
- Interview registration, travel, branch, and Team Leader Care representatives.
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
3. Travel import, itinerary, acknowledgment, and change management.
4. Evaluations, reminders, reporting, and Team Leader Care.

### Phase 4 — Registration and payment decision

- Document current workflow and verified costs.
- Evaluate integration, partial replacement, and full replacement.
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

- Protect `main` and require pull requests and passing checks.
- Require at least one reviewer; require the technical/security owner for identity, permissions, travel, payments, or infrastructure.
- Keep changes small and tied to a requirement or acceptance criterion.
- Use preview deployments for visual acceptance.
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
| Product priorities and workflow requirements | Frederick / designated product manager | Confirm |
| Public site and prototypes | Chris | Confirm |
| Architecture, infrastructure, security | Anferny / designated technical lead | Confirm |
| Ministry approval | Vision School Department Team Leader and Ami | Confirm |
| Registration workflow | Registration team representative | Assign |
| Travel workflow | Flight team representative | Assign |
| Mexico pilot lessons | Dallas contact | Identify |
| Content and media approval | Ministry content owner | Assign |
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

## 26. Immediate next actions

### Within 72 hours

- [ ] Confirm product, technical, ministry, security/privacy, content, and support owners.
- [ ] Review and approve one design direction.
- [ ] Confirm global positioning and domain decision owner.
- [ ] Add collaborators and branch protection to GitHub.
- [ ] Collect approved program copy, brand files, media, testimonials, class data, events, registration destinations, policies, and contact owners.
- [ ] Create issues for every open decision with owner and due date.
- [ ] Interview registration, travel, branch, Team Leader Care, and Mexico-pilot stakeholders.

### First implementation milestone

- [ ] Build the approved responsive shell and navigation.
- [ ] Replace concept copy with ministry-approved content.
- [ ] Build Home, About, Course, Find a Class, Class Detail, Events, Stories, Contact, Donate, Privacy, and Terms.
- [ ] Add a controlled class source and Church Center handoff.
- [ ] Add accessibility, performance, broken-link, placeholder, and privacy checks.
- [ ] Review the preview on representative mobile and desktop devices.
- [ ] Obtain documented ministry acceptance before production launch.
