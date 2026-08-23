# Vision School International Website and Future Operations Platform

**Document:** Plain-language Product Requirements Document (PRD)

**Status:** Working draft for the Vision School team

**Version:** 1.2

**Updated:** August 23, 2026

**Team size:** Three core contributors

**First priority:** Launch the public website and keep the current Church Center registration process working

**Later goal:** Add a secure online workspace for approved Vision School staff and volunteers

## 1. What this document is for

This document is the full record of what the team discussed in the two August 20 meetings. It keeps the details that could be easy to forget, but uses plain language so ministry leaders, volunteers, designers, and developers can all understand it.

The PRD is the main requirements record. Linear is only the working task list. We should not create a separate Linear ticket for every sentence in this document.

### How we will use Linear

- Keep one Vision School initiative.
- Keep five broad projects.
- Aim for about 10–15 active issues in each project.
- Put the detailed requirements and completion checklist inside each issue.
- Create a sub-issue only when separate work truly needs a different owner or pull request.
- Keep fewer than 70 active Vision School issues whenever practical.

## 2. The simple plan

### What we are building first

We are building a trustworthy public website where someone can:

- Understand what Vision School is.
- Learn what the course covers.
- See real stories and approved photographs.
- Find an in-person or online class.
- Continue to the correct Church Center registration form.
- Find current events, contact information, donation information, and basic policies.

### What we may build later

After the public website is stable, we may build a secure workspace for approved people to manage:

- Branches, classes, and semesters.
- Teachers, speakers, and their schedules.
- Routes, flights, ground travel, lodging, and pickup details.
- Evaluations and reminders.
- Team Leader Care follow-up.
- Reports for headquarters and regional leaders.

This later workspace should be built in small parts. We should not try to build everything at once.

### Registration decision

Church Center will remain the registration system for the current cycle. We will not replace it or add our own payment system until the team has studied the full workflow, cost, privacy, legal, accounting, refund, and support requirements.

## 3. Where these requirements came from

This document combines:

- The August 20, 2026 kickoff meeting and recording.
- The August 20, 2026 design-feedback meeting and recording.
- The team’s review of Perspectives.org.
- Limited inspiration from Circuit Riders and the Seattle Haystack / Vision School Instagram material shown in the meeting.
- Public Vision School information from INTERCP International, the Korean ministry where Vision School began.

The recordings and transcripts are private and should not be added to GitHub. This document records the useful decisions without publishing the raw conversations.

## 4. What success looks like

- A first-time visitor can explain Vision School after reading the homepage.
- A visitor can find a suitable class and reach registration from a phone without staff help.
- The site feels trustworthy to students, parents, churches, missionaries, and ministry partners of different ages.
- Public class information is current and has a named owner.
- Private information never appears on the public website.
- Later, staff can see what information or action is missing without chasing people across many chats and spreadsheets.
- The same system can support more countries and languages without rebuilding everything for each region.

## 5. Who the website serves

- **Visitors and prospective students:** understand Vision School, find a class, and register.
- **Parents, pastors, churches, and partners:** understand the purpose, accountability, course expectations, and contact path.
- **Registered students:** receive approved class information and, later, secure resources.
- **Branch leaders and hosts:** maintain branch and class information in a later secure workspace.
- **Teachers, speakers, and missionaries:** see schedules, assignments, travel details, and forms in a later secure workspace.
- **Registration and travel teams:** monitor details and exceptions without exposing private information.
- **Team Leader Care:** manage sensitive follow-up with very limited access.
- **Headquarters and regional leaders:** see readiness, missing information, alerts, and reports.
- **System administrators:** approve access and manage the system safely.

## 6. Public website direction

### Overall feeling

The website should feel bright, clean, spacious, modern, and trustworthy. It should work for younger and older visitors. The page should tell one continuous story as the visitor scrolls down.

### Visual direction we want

- Perspectives.org is the main reference for page flow, spacing, strong headings, and repeated class invitations.
- Use navy, cobalt, sky blue, cool white, and related blue tints.
- Use large editorial headlines and generous spacing.
- Use a simple grid with clean image edges.
- Show a strong participant story or testimonial.
- Repeat **Find a Class** near the beginning, middle, and end of the homepage.
- Keep the phrase **“More than information. An invitation.”**
- Use real photographs that show learning, worship, prayer, small groups, fellowship, and community.

### What we do not want

- A crowded photo collage.
- Overlapping captions or too many diagonal shapes.
- A dark or cinematic look across most of the site.
- A youth-only, streetwear, or fashion-store feeling.
- Loud neon colors.
- Dense rows of software-style cards.
- So many rounded boxes that the page feels like an app dashboard.
- Copying another organization’s wording, photographs, logo, or code.

### Photography and video

- The overall U.S. site should show a real mix of Black, Latino, Asian, white, African, Korean, and other communities when the photographs fit the subject.
- Diversity should feel natural across the full site, not like one token photograph.
- INTERCP photographs may be used when they truthfully show the activity being discussed.
- Do not use a mission-trip photograph to imply that it shows a Vision School class when it does not.
- Confirm ownership, participant permission, regional publishing permission, captions, and alternative text before launch.
- Use video only when it adds real value and does not make the page slow or hard to read.

## 7. Public pages and homepage flow

### Main navigation

- Home
- About Vision School
- The Course / Curriculum
- Find a Class
- Events
- Stories
- Resources
- Donate
- Contact
- Sign In, only after the secure workspace is ready

### Homepage order

1. A clear statement of Vision School’s purpose and a **Find a Class** button.
2. A short explanation of the 11-week course and its weekly rhythm of worship, teaching, prayer, small groups, and fellowship.
3. Why the course matters, supported by approved photographs or video.
4. Another **Find a Class** invitation.
5. Course topics, structure, expectations, and outcomes.
6. Current class options or a class-finder preview.
7. An approved participant story or testimonial.
8. A current event or initiative, when there is one worth showing.
9. A final **Find a Class** invitation.
10. Contact, donation, organization, privacy, and policy information.

## 8. Complete public website requirements

The IDs below are kept so we can trace each meeting requirement. They do not each need their own Linear ticket.

### Explain Vision School and build trust

- **PUB-001:** The homepage must explain Vision School in words that make sense to someone who has never heard of the ministry.
- **PUB-002:** The site must clearly explain the approved relationship between Vision School and its related organizations.
- **PUB-003:** The site must explain the course structure, topics, schedule, and what students should expect.
- **PUB-004:** We may publish a story or testimonial only after the person has given permission.
- **PUB-005:** Every public photograph and video must have permission to use it and helpful text for people who cannot see or hear it.
- **PUB-006:** Every date, event, semester, class, and registration status must have a person responsible for keeping it current.
- **PUB-007:** Contact messages must go to the right person based on the subject.
- **PUB-008:** Every public event must show whether it is current, its date, location or online format, and the next action.
- **PUB-009:** Donation buttons must go to the ministry-approved destination and have a clear owner.
- **PUB-010:** Privacy and terms pages must honestly describe the information the site collects and how it is used.

### Find a class and register

- **CLS-001:** Anyone can browse public classes without signing in.
- **CLS-002:** Each class must show the term, in-person or online format, general location, schedule or status, language when needed, and registration button.
- **CLS-003:** Only information approved for the public may appear on class pages, maps, analytics, search results, or page metadata.
- **CLS-004:** The site must clearly distinguish open, full, closed, canceled, unpublished, and coming-soon classes.
- **CLS-005:** During the first release, the registration button must clearly send the visitor to the correct Church Center form.
- **CLS-006:** The team needs a regular way to find broken registration links before and during registration periods.
- **CLS-007:** If there are no matching classes or something fails, the visitor must see a helpful next step instead of a blank page.

### Manage public content

- **CMS-001:** Approved content owners must be able to update classes, events, stories, and important page text without editing code.
- **CMS-002:** Important content should be able to move through draft, review, approval, scheduled, published, and retired stages.
- **CMS-003:** The system should flag expired events, old registration links, and information that needs review.
- **CMS-004:** The team must be able to see earlier content versions and restore a working version after a bad change.

## 9. Quality requirements for the public website

### Easy to use

- The website should aim to meet WCAG 2.2 AA accessibility guidance.
- Every link, menu, form, video choice, and button must work with a keyboard.
- Keyboard users must always be able to see what is selected.
- Text and important controls must have enough color contrast.
- The site must respect a visitor’s reduced-motion setting.
- Images need useful alternative text.
- Important videos need captions or a transcript.
- Form instructions and errors must be announced clearly.
- The site must still work when text is enlarged and on common phone sizes.

### Fast and dependable

- Important words and actions should appear quickly on a normal mobile connection.
- Photographs and videos must be sized and loaded efficiently.
- Video must not start playing with sound by itself.
- Test more than the homepage before launch.
- Important links must be checked automatically.
- Preview, testing, and production must remain separate so unfinished work does not appear publicly.
- Every launch needs a named support person and a documented way to return to the last working version.

### Easy to find and share

- Public pages need clear titles and descriptions.
- The site needs correct preferred page addresses, a sitemap, and search-engine instructions.
- Social sharing images and the browser icon must be approved.
- Draft and private pages must not appear in search engines.
- Class and location wording must be accurate and written for people, not stuffed with search terms.

### Privacy

- Never put passwords, private schedules, booking confirmations, personal details, meeting recordings, or private transcripts in GitHub or public pages.
- Collect analytics only when the team knows what question the data will answer.
- Decide how long contact messages and other personal information will be kept before collecting them.

## 10. Secure sign-in and permissions for the later workspace

- **AUTH-001:** Telegram sign-in may confirm a Telegram account, but it must never automatically give the person staff access.
- **AUTH-002:** Staff access must require an approved invitation or an administrator’s approval.
- **AUTH-003:** The system must check a person’s permission every time private information is requested or changed, not only when the page first opens.
- **AUTH-004:** Access may need to be limited by country, region, semester, branch, team, or individual record.
- **AUTH-005:** Removing access or changing a role must take effect quickly.
- **AUTH-006:** The system must record important access changes and views of especially sensitive information.
- **AUTH-007:** Pastoral notes, travel booking details, personal information, and ordinary internal information must have different access rules.

## 11. Semester, branch, speaker, and travel requirements

### Semester and branch setup

- **OPS-001:** Approved staff can create a semester and list what every branch must provide.
- **OPS-002:** Branch owners can provide the location, host, schedule, availability, transportation limits, contacts, and required forms.
- **OPS-003:** Everyone involved can see which required details are complete, missing, waiting for approval, or approved.
- **OPS-004:** Headquarters can see which branches are incomplete, who owns the next step, when it is due, and whether help is needed.
- **OPS-005:** Only approved public branch and class details may appear in the public class finder.

### Speaker assignments and routes

- **RTE-001:** Approved staff can maintain speaker profiles and availability.
- **RTE-002:** Speakers can be assigned to class sessions in the correct travel order.
- **RTE-003:** The system should warn about overlapping assignments and obvious timing conflicts.
- **RTE-004:** Speakers and branches can confirm that they received and accepted an assignment.
- **RTE-005:** Every route change needs an owner, a clear status, the right notifications, and a record of what changed.

### Travel coordination

- **TRV-001:** Approved travel staff can record flights, trains, buses, pickups, lodging, and host contacts.
- **TRV-002:** The system may read a confirmation message or document and prepare draft travel details, but a person must check them before anyone relies on them.
- **TRV-003:** Each speaker can see the next approved travel step, when to leave, where to go, and the appropriate contact person.
- **TRV-004:** A branch should see only the arrival, departure, and contact details it needs.
- **TRV-005:** Booking codes and other restricted details must never be public and must be limited to approved people.
- **TRV-006:** Unconfirmed, confirmed, changed, delayed, canceled, and acknowledged travel must look clearly different.
- **TRV-007:** Live airline or carrier tracking is helpful later but is not required for the first travel release.
- **TRV-008:** An approved user can save or print an offline itinerary without receiving information about unrelated travelers.

## 12. Evaluations and Team Leader Care

- **EVAL-001:** Finishing a class session can start the correct teacher-to-branch and branch-to-teacher evaluation requests.
- **EVAL-002:** Reminder timing and escalation rules must be clear and adjustable by approved staff.
- **EVAL-003:** Headquarters can see who has not responded without automatically seeing private answers.
- **EVAL-004:** Approved leaders can read useful summaries and see overall patterns.
- **EVAL-005:** Sensitive comments must go only to the staff group responsible for handling them.
- **TLC-001:** Every Team Leader Care case needs a restricted owner, current status, follow-up date, and clearly limited audience.
- **TLC-002:** Before collecting pastoral information, the ministry must decide who may see it, how often access is reviewed, how long it is kept, and how it can be exported or deleted.

## 13. Information the later workspace may need

- People and their approved sign-in identity, role, language, contact details, and consent.
- Countries, regions, branches, semesters, classes, sessions, and public class details.
- Teachers and speakers, availability, assignments, routes, and acknowledgments.
- Travel steps, timing, lodging, pickups, contacts, and restricted booking details.
- Events, resources, forms, evaluations, reminders, and follow-up cases.
- A record of important changes: who changed what, when, and whether it worked.
- A registration or payment reference only after that later design is approved.

We do not need to build every part of this information structure at the beginning. We should add only what the current phase requires.

## 14. Safety and privacy rules for the later workspace

- Before releasing a feature that handles private information, list how the information could be exposed or misused and how the team will prevent it.
- Give each person only the access needed for their work.
- Check permissions on the server for every private action.
- Check and clean information coming into the system before using or displaying it.
- Protect sign-in sessions and forms from forgery, repeated guessing, and automated abuse.
- Use secure connections and trusted hosting encryption.
- Keep passwords, secret keys, and real private data out of source code, preview builds, and browsers.
- Record important administrative changes without copying sensitive details into logs.
- Document how to remove an account, respond to a security problem, restore backups, export information, and delete information.
- Review staff and volunteer access regularly.
- Do not send participant, travel, pastoral, payment, or other private data to an AI service unless the ministry has approved the exact use and data flow.

## 15. Before replacing Church Center or adding payments

Do not replace Church Center until the team has written down and tested:

- The complete registration form and who is eligible.
- Waivers, consent, signatures, and safeguarding rules.
- Receipts, discounts, deposits, payment plans, refunds, disputes, and failed payments.
- How staff correct mistakes and help registrants.
- Who owns accounting, reports, reconciliation, and access.
- Privacy notices and how long information is kept.
- How existing registrations move without duplicates or missing records.
- How the team can return to the old system if the new one fails.
- A limited real-world pilot with staff before a full move.

The team must check the real Church Center and payment-processing costs from current account records before deciding whether replacement is worthwhile.

## 16. Delivery phases

### Phase 0 — Make the important decisions

- Confirm who owns product choices, ministry approval, technology, content, privacy, and support.
- Decide the public name and global positioning.
- Gather approved logos, photographs, video, stories, course wording, class details, events, registration links, forms, and message templates.
- Learn the current registration, branch, travel, evaluation, Team Leader Care, and Mexico/Monday.com workflows.
- Approve one website design direction.

**Ready to continue when:** the design, public facts, class information, owners, and first-release scope are approved.

### Phase 1 — Public website

- Build Home, About, Course, Find a Class, Class Detail, Events, Stories, Resources, Contact, Donate, Privacy, and Terms.
- Use the approved long-scroll visual direction.
- Add current class information and a clear Church Center handoff.
- Replace all placeholder wording and media.
- Complete mobile, accessibility, speed, search, privacy, and broken-link checks.

**Ready to launch when:** a new visitor can understand Vision School and reach the correct registration form from a phone, and no placeholder or private material remains.

### Phase 1.1 — Make current-semester updates easier

- Let approved staff manage branch and class listings.
- Manage events and resources.
- Route contact messages.
- Check registration links.
- Show which public details are missing or out of date.
- Prepare approved social sharing links and images.

### Phase 2 — Secure workspace foundation

- Approve the sign-in method and invitation process.
- Add roles and limited permissions that the server checks.
- Add only the branch, semester, class, user, speaker, and assignment information needed for the first internal feature.
- Protect private resources and record important changes.
- Keep testing and production information separate.

### Phase 3 — Add operations one part at a time

1. Branch and semester readiness.
2. Speaker assignments and routes.
3. Travel details, itineraries, acknowledgments, and changes.
4. Evaluations, reminders, reports, and Team Leader Care.

Each part needs its own ministry approval, privacy review, test, and rollout decision.

### Phase 4 — Registration and payment decision

- Document the current workflow and verified costs.
- Compare keeping Church Center, connecting it to the new system, partially replacing it, or fully replacing it.
- Confirm legal, financial, privacy, and support ownership.
- Run a limited pilot before moving real registrations.

### Phase 5 — More countries and languages

- Add approved translation and translation review.
- Support regional administrators without exposing unrelated regions.
- Handle time zones correctly.
- Support cross-region routes and reports.
- Add installable web-app features only if people need them.
- Reconsider a native phone app only if the responsive website cannot meet a proven need.

## 17. Public website launch checklist

- Ministry leadership approved every public claim, course description, relationship statement, story, photograph, and video.
- A first-time visitor can explain Vision School after reading the homepage.
- **Find a Class** appears near the beginning, middle, and end.
- A visitor can find a class and reach the right registration form on current phones and computers.
- Every public class has an owner, term, format, general location, status, schedule information, and working registration action.
- Empty, loading, error, full, closed, and unpublished states make sense.
- No private, draft, restricted, or placeholder information appears in pages, source code, search metadata, or analytics.
- Keyboard navigation, focus, contrast, text enlargement, reduced motion, page structure, captions, and image descriptions have been checked.
- Speed and broken-link checks pass the agreed target.
- The team knows who handles launch problems and how to return to the last working version.

## 18. Secure workspace launch checklist

The later private workspace may launch only after:

- The team has reviewed how someone could gain the wrong access.
- Automated checks cover every private action.
- Account approval, role changes, and account removal are documented.
- The ministry approved who can see each kind of sensitive information and how long it is kept.
- Backup, restore, security-response, and support steps have been tested.
- Real staff tested the full workflow with safe test information.

## 19. How we will measure progress

### Public website

- How many visitors select **Find a Class**.
- How many open a class and continue to registration.
- How easy the mobile journey is.
- How often registration links fail.
- Whether approved search terms lead people to the site.
- Accessibility, speed, and reliability results.
- Feedback from students, parents, churches, branches, and ministry partners.

### Later operations workspace

- Whether branches finish required information by the deadline.
- How much required information is still missing and who owns it.
- Time saved entering travel details.
- Number of coordination messages needed for each trip.
- Whether itineraries are acknowledged before travel.
- Time needed to communicate and acknowledge a change.
- Evaluation completion rate.
- Number and age of unfinished follow-up items.
- Staff time saved compared with the current process.

## 20. Main risks and what we will do

- **Trying to build too much:** keep the public launch separate from later operations work.
- **Unclear approval:** name the person who approves each kind of public or private information.
- **Designing only for North America:** keep names and information flexible enough for more regions.
- **Giving Telegram users too much access:** require a separate approved invitation and check permissions on the server.
- **Exposing travel or pastoral information:** limit access by information type and review it regularly.
- **Underestimating payments:** keep Church Center until the full workflow is understood and tested.
- **Publishing sample content:** require a final content check and automated placeholder search.
- **Showing old classes or events:** give each item an owner and review date.
- **Too many contributors changing the same thing:** use small pull requests and one reviewer.
- **Following a short-lived design trend:** judge the design by clarity, trust, and cross-generational usefulness.

## 21. A simple three-person working process

### Five Linear projects

1. **Public Website, Content & Launch** — design, public pages, stories, media, quality, and launch.
2. **Classes, CMS & Registration** — class information, class finder, content editing, Church Center links, and later payment research.
3. **Secure Portal & Operations** — sign-in, permissions, semesters, branches, speakers, assignments, and internal resources.
4. **Travel, Evaluations & Team Leader Care** — travel, routes, forms, reminders, reports, and restricted care work.
5. **Globalization & Future** — languages, regions, time zones, cross-region work, and any future app decision.

### Issue-writing rule

An issue should describe one useful result that one person can own. It should include:

- Why the result matters.
- What is included.
- What is not included.
- A short checklist showing how the team will know it is complete.
- Any important privacy or approval need.
- Links to the relevant PRD section, design, or pull request.

Do not create separate issues for every acceptance-checklist line. Split an issue only when the work truly needs a different owner, release, or pull request.

### GitHub workflow

- Protect the main branch.
- Use a pull request for changes.
- Ask at least one teammate to review.
- Use preview deployments for design and content review.
- Require Anthony or the technical lead to review sign-in, permissions, private information, travel data, payments, hosting, or other security-sensitive changes.
- Never commit passwords, private transcripts, participant lists, travel confirmations, production exports, or unapproved media.

### A task is ready when

- The problem and intended user are clear.
- Everyone understands what is included and excluded.
- The completion checklist is understandable.
- The owner and important dependencies are known.
- Required design, wording, and ministry approval are available.

### A task is complete when

- The checklist passes.
- Important behavior has been tested.
- Phone and computer views have been checked when relevant.
- Accessibility, error handling, privacy, and security have been considered.
- The documentation and rollback instructions are current.
- The appropriate product, ministry, content, or technical owner accepts the result.

## 22. Proposed owners to confirm

- **Product priorities and workflow needs:** Frederick or the chosen product lead.
- **Public website and prototypes:** Chris.
- **Architecture, hosting, and security:** Anthony or the chosen technical lead.
- **Ministry approval:** Vision School Department Team Leader and Ami.
- **Registration workflow:** a registration team representative.
- **Travel workflow:** a flight/travel team representative.
- **Mexico pilot lessons:** the appropriate Dallas contact.
- **Content and media approval:** a named ministry content owner.
- **Domain ownership and renewals:** an organization-controlled account.
- **Production support:** one primary person and one backup.

## 23. Open questions

### Public launch and ownership

- Who has final approval for public launch?
- Will the first public message be “global, beginning with North America,” or use another approved description?
- Is `visionschool.international` the final organization-controlled public domain and who owns renewal access?
- Who owns ongoing content, technical support, and emergency response?

### Public information and design

- What are the exact semester dates, deadlines, first-launch classes, and regions?
- Which source is the official source for class and schedule information?
- What is the approved public relationship wording for Vision School and INTERCP?
- Which course claims, statistics, topics, and terms are approved?
- Which design direction, logo, colors, typefaces, photographs, and videos are approved?
- Which Church Center links, registration states, donation system, and contact routes are approved?

### Sign-in and private information

- What sign-in method and non-Telegram fallback will be used?
- Who approves staff accounts and roles?
- Which forms, waivers, signatures, and safeguarding rules are required?
- What personal, travel, evaluation, and pastoral information may be stored, who may see it, and how long may it be kept?

### Registration and payments

- What are the current Church Center and payment-processing costs and limits?
- Are installment payments truly required?
- Who owns refunds, disputes, accounting, reconciliation, and support if payments ever move?

### Operations and global growth

- What did the Mexico/Monday.com pilot solve, and what should we reuse?
- Which travel emergencies and carrier changes must the first travel feature support?
- Which languages and countries are required in 2026–2027?

## 24. Next actions

- [ ] Confirm the owners listed above.
- [ ] Approve one public website direction.
- [ ] Confirm the first-launch message and domain owner.
- [ ] Gather approved wording, logos, photographs, video, stories, class information, events, registration links, policies, and contact routes.
- [ ] Confirm the current Church Center forms and class states.
- [ ] Review the current registration, branch, travel, evaluation, Team Leader Care, and Mexico-pilot workflows.
- [ ] Build the approved responsive website shell and navigation.
- [ ] Replace every sample claim, class, statistic, and testimonial before launch.
- [ ] Build the public pages and class finder.
- [ ] Add the controlled class source and Church Center handoff.
- [ ] Complete accessibility, speed, broken-link, placeholder, privacy, and security checks.
- [ ] Review the site on representative phones and computers.
- [ ] Obtain recorded ministry approval before public launch.
