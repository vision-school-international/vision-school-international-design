# Student and staff registration prototypes

**Date:** October 26, 2026

**Work:** [VIS-348](https://linear.app/vision-school-global/issue/VIS-348) and [VIS-349](https://linear.app/vision-school-global/issue/VIS-349)

**State:** Built and locally verified; awaiting product/ministry design review. Not merged, approved for launch, or deployed to production.

**Baseline:** Design repository `88eb3717bf99fba9f11c89e9e5dc5eb3dab1dfb9` on current remote main.

## What you can review

### Student registration

- Choose a fictional class by country, Fall/Spring term, and program.
- See branch, city, program, term, and currency together. Frederick is DC/Maryland; DC/Virginia stays separate.
- Enter sample name/email, or choose **Use sample details**.
- Review an illustrative full-payment or two-payment option, then change any section before completing the sample.
- Receive a clear sample-complete screen, not a real reservation or payment confirmation.
- Required-field errors, no-matching-class states, and changed-class/country resets are included. Changing the class requires reviewing its payment choice again.

### Staff registration

- Switch between Registrations and People. Twelve fictional registrations belong to ten fictional people; one person can have several registrations.
- Combine search, term, country, program, branch, and payment-status filters.
- See counts and a status chart for the filtered registrations, with an explicit denominator.
- Read separate USD and CAD known outstanding balances. Unknown payments are excluded and remain labeled Unknown, not silently paid or unpaid.
- View a registration or a person's complete sample registration history in a keyboard-accessible dialog.
- Select only unpaid records in the current view and preview a reminder. Changing filters clears the selection; the preview cannot send a message. Recipients are counted once even when several registrations belong to one person.
- Clear filters and recover from an empty result.

## Local previews

The local server binds to `127.0.0.1:4362`, not the network. These links work on Chris's Mac, not on teammates' computers.

- Student: <http://127.0.0.1:4362/pages/student-registration-preview>
- Staff: <http://127.0.0.1:4362/pages/staff-registration-preview>

These full-width pages use the gallery's **existing page composer**. Their layout records are saved only in ignored local runtime data; no new page route or production registration endpoint was added.

The committed, reproducible review entries are also available through the component gallery:

- <http://127.0.0.1:4362/#section-studentRegistration>
- <http://127.0.0.1:4362/#section-staffRegistration>

On another checkout, start the gallery through its documented setup and use these section hashes with that server's address. To make full-width pages, use the existing Pages workspace and add the matching Student Registration Flow or Staff Registration Workspace concept. Prototype progress is not saved: inputs live in browser memory and disappear on reload or when the component is unmounted.

## Boundaries

All people, registrations, fees, balances, and offering combinations are fictional design data. Real branch names do not make these published classes. No raw meeting material, participant data, booking information, private contacts, or credentials were added.

No production registration, payment processing, sign-in, staff permissions, shared backend, email/SMS/Telegram sending, or migration is implemented. Planning Center and the public website remain unchanged. No Convex service or schema was created for these prototypes.

The components are portable React previews with their own scoped styles. Their review-only section metadata lives in the local catalog, not in the shared package's public CMS block types. Only one selected concept mounts in the gallery. The existing section hash is now preserved and responds to hash changes so direct preview links survive reloads.

## Checks and observations

- `npm run build`: passed.
- `npm test`: passed; this repository's test script is the build check, not a behavioral test runner.
- `npm run lint`: passed after fixing payment-label accessibility and removing unnecessary noninteractive tab stops.
- `npx tsc --noEmit`: passed.
- `node --experimental-strip-types --test tests/registration-model.test.mjs`: 14 behavior tests passed. The flag supports the repository's older Node 22 versions as well as the current runtime.
- `git diff --check`: passed.
- Browser: stepped through required-field errors, a US installment review, class/country changes, a Canadian completion, empty class results, combined staff filters, unpaid reminder selection, unknown status, People grouping, dialog Escape/focus restoration, and empty-filter recovery.
- Responsive: checked phone (390px), tablet (768px), and desktop (1440px) layouts. Phone testing found and fixed narrow step markers and page-level staff-table overflow. The table now scrolls within its own container; the rest of the phone page does not overflow horizontally.
- Browser error logs for the full-width previews were empty. Screenshots are retained privately with the implementation audit rather than added to the source tree.

## Existing setup problem for Anthony

A fresh `npm ci` on unchanged main fails because the committed lockfile is missing `@emnapi/core@1.10.0` and `@emnapi/runtime@1.10.0`. Both npm 10 and npm 11 reproduced the error. The installed Homebrew Node 22 executable also fails to load a system library; that separate machine setup problem was not repaired in this task.

To keep this design work bounded, package files were not changed. The previous working design checkout had the **identical package-lock hash** (`5b42e889c8ff5a96e315466613e840598e18fa27872b54c847f34be907c02d1b`), so its installed dependency cache was copied locally. The declared sibling component library was cloned at current main and built with its frozen pnpm lockfile. Build/lint/type/behavior checks passed with that setup, but this is **not a successful clean-install verification**. Please resolve and verify the clean-install problem separately before relying on a fresh CI/deployment runner. The machine-specific generated `server/generate-registry.mjs` diff was excluded from the contribution.

## Decisions needed next

1. Approve the real fields, required questions, program/age eligibility, consent, and guardian rules.
2. Supply actual class inventory, term dates, venue information, and registration availability.
3. Approve country-specific fees, currencies, installment timing, refunds, and payment provider.
4. Agree which staff can see each branch/program and whether cross-program person history is allowed.
5. Agree reminder eligibility, wording, destination, authorization, and handling of disputed/partial/unknown payments.
6. Decide the first live backend/identity milestone and a safe transition from the existing service; do not infer it from these screens.

## Exact changed files

- `app/components/StudentRegistration.tsx`
- `app/components/StaffRegistration.tsx`
- `app/components/registration/registrationModel.ts`
- `app/student-registration.css`
- `app/staff-registration.css`
- `app/concepts/componentCatalog.ts`
- `app/concepts/ComponentConcepts.tsx`
- `app/page.tsx`
- `src/main.tsx`
- `server/registry-data.mjs` (generated catalog)
- `server/registry-concepts.mjs` (generated concept metadata)
- `tests/registration-model.test.mjs`
- `planning/technical-handoffs/2026-10-26-registration-prototypes.md`
