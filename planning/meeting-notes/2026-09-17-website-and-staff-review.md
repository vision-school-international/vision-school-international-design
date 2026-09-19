# September 17 website and staff review

**Source:** VS Website Team Meeting, September 17, 2026, 4:01 PM as shown by Zoom; duration 1:01:15. Complete timestamped transcript reviewed, with the shared-screen design demonstration spot-checked around 37:03. This is not a claim that every video frame was watched.

**Implementation authorization:** Chris, September 19. Build what is supported by known requirements, use the established PR/review process, and update existing Linear work where appropriate. Production release and ministry approval remain separate gates.

[Private source recording](https://us06web.zoom.us/rec/share/8GJWFHHQIz0GpIsHq73qkx6ekKYzZQ5TY4W_v6hS84PokPgkd6eH02gITnxCKr-p._DjIeTjiJxBQmGr_). No recording passcode, transcript, private itinerary, or account credential is stored here.

## What was decided

1. **Keep the public website first** (28:39–29:49). It should explain Vision School clearly, help people find a class, and reach the current registration system. The internal prototype is secondary work, not a reason to delay the public site.
2. **Add Adults / Youth / Kids discovery** (30:12–32:36). Filters and small availability indicators were discussed. These are separate from ANA / YA / YG / All Gen / Campus labels. YG does not automatically mean Youth.
3. **Use the shared design gallery** (35:35–38:31). Review the real reusable components there. Use Telegram topics for feedback for now; do not build a gallery commenting product.
4. **Ask content owners to select assets, not just supply folders** (15:56–18:24, 41:44–46:10, 57:41–58:49). Use HQ-managed Google Drive. Each photo/clip and intended placement needs approval. Code can proceed with clearly labeled placeholders.
5. **Keep Church Center for now** (25:18–28:25). Anthony will investigate whether a more seamless handoff is technically possible. Embedded registration, custom CRM, direct payments, and payment plans were not approved for immediate implementation.
6. **Try a small speaker/staff prototype with fictional data** (00:10–08:37, 50:43–54:43). Start with the calendar, then visit details and separate reciprocal evaluations. The reminder becomes due three hours after scheduled class start and remains open until submission. This is ordinary application behavior, not AI scoring.

## Chris's branch clarification — September 19

- Frederick = DCMD = DC/MD: one branch. Keep the display name **DC/Maryland**, with **Frederick, MD** below it.
- DCVA = DC/VA: a different branch. Use **DC/Virginia** as the draft display name; city, venue, class offerings, contacts, dates, and registration link remain unknown.
- The old source had 36 named branch/program entries after excluding its “Unlisted Branch” registration fallback. Adding the newly confirmed DC/VA entry gives **37 draft entries**. This does not establish 37 unique active branches, a national total, or a current enrollment figure.
- Do not collapse same-city program rows or copy the source's sign-up numbers.

## What can be built now

### Public directory

- Search aliases for the two DC-area branches, without duplicating Frederick.
- Adults / Youth / Kids selection independent of audience labels, combined with country and text search.
- Compact cards with expandable approved details and optional image/alt text.
- English and draft Korean UI; final Korean wording still needs review.
- Separate supplied-name and fictional-feature views in the gallery. No actual branch is assigned guessed class types.

### Internal review prototype

- A weekly calendar/agenda with a few fictitious visits.
- Speaker, branch-staff, and authorized-department sample views; no real account or permission system.
- Visit details: local time/time zone, location/map slot, class makeup, transportation, lodging, and teaching-material slot.
- Distinct branch-to-speaker and speaker-to-branch sample forms. Questions are placeholders until official forms arrive.
- A controllable clock showing the three-hour due rule. Submission clears that specific demo task; no email, Telegram message, or live notification is sent.

## Still needed

| Owner | Needed before real use |
|---|---|
| Christina / ministry content owners | Branch class-type mapping, public details, current class schedules/status, approved contact destinations, Church Center URLs, and selected/approved media and wording |
| Christina / VS department | Existing calendar/CoreDocs, current evaluation questions, and who should see each kind of answer |
| Anthony | Branch record/schema ownership, package release and consumer integration, database migration review, interactive website rendering, IDM/Telegram permission model, and live reminder scheduling |
| Chris | Review the visible designs, prioritize the next public-site slice, and help settle the owning Linear project for private teaching evaluations |

## Held or deferred

- Map/distance/postal-code search was suggested (22:56–23:31), but source locations, provider, and search rules are not settled. It is not required to review the directory layout.
- Student accounts, event-wide CRM, payment plans, and registration replacement remain later work.
- Real flight confirmations, lodging addresses, contact lists, evaluation answers, and account role changes are not prototype data.
- The meeting agreed Monday/Thursday reviews at 4 PM, ending by 5. This note does not create calendar events.

## Tracking boundaries

Update existing issues instead of creating a second backlog. Preserve status, owners, priority, and labels unless there is an explicit supported change. The current issue labels have no documented definitions; do not invent a label taxonomy.

Private teaching evaluations should not silently be assigned to a travel-only project. Legacy evaluation issues are canceled/archived; do not reopen them without a decision. The requirement stays in the PRD and this planning record until the owning project and answer-visibility rules are confirmed.
