# Plan B — Design & UX pass

**Status:** Draft
**Date:** 2026-09-05
**Owner:** executing agent
**Repo:** `vision-school-international/vision-school-international-design` only
**Depends on:** Plan A merged (`./2026-09-05-plan-a-component-package-refactor.md`) — component markup will live in the package; this plan must not conflict with it
**Companion context:** [PRD.md](./PRD.md) §8 (design direction), [IMAGE-SOURCING.md](../IMAGE-SOURCING.md) (approved assets + rules)

## 1. Mission

Make the review gallery genuinely well-designed per PRD §8: disciplined grid, one strong visual gesture at a time, purposeful copy, honest imagery. Explicitly kill "random AI slop labeling" — every string a user reads must state a real purpose in a consistent voice. **No palette changes, no style-system changes.**

## 2. Verified context

### PRD constraints (binding)

- §8.1 Keep: generous long-scroll feel, bright cross-generational tone, oversized editorial headings, deliberate whitespace, clean navy/cobalt/sky-blue/cool-white system.
- §8.2 Change: disciplined grid, straight image edges, one strong visual gesture at a time, consistent spacing rhythm across sections and breakpoints.
- §8.3 Reject: neo-brutalism, dark cinematic treatment, SaaS-style card-grid density, excessive rounded containers, loud neon.
- §12 accessibility: WCAG 2.2 AA target, keyboard + visible focus, meaningful alt text, reduced-motion respected.

### Imagery rules (IMAGE-SOURCING.md, Aug 26 2026 — binding)

- 8 approved assets only: `community-city.jpg`, `community-table.jpg`, `mountain-sunrise.jpg`, `youth-gathering.jpg`, `icp-logo.webp`, `intercp-young-adults.webp`, `intercp-mission-camp.webp`, plus 4 in `public/images/vision-school-media/` (`north-america-mission-camp-crowd.webp`, `-nations.webp`, `-worship.webp`, `young-generation-mission-camp-community.webp`).
- Rules: image must match the surrounding claim; candid over posed; no tokenism or demographic labeling in alt text; no identifiable minors without releases; keep the blue color veil in CSS so source images remain intact.
- Sourcing NEW images requires the approval workflow documented in that file — out of scope for this plan.

### Current waste (verified)

- 21 sections in `app/concepts/componentCatalog.ts` reuse ~5 images repeatedly (e.g. `mountain-sunrise` appears on hero, footer, and breadcrumbs; `community-table.jpg` on about, cta, faq, partners, donation).
- Index cards (`app/pages.tsx`, `app/page.tsx`) show catalog images regardless of page context.
- Tool chrome copy reads as filler: "Designs", "Registered pages.", "Create page ↘", "View page ↘", "Add section +", plus missing empty states. Concept names themselves are purpose-scoped and stay.

### Locked design decisions from the 2026-09-05 session (binding)

- Radius system: `0` on surfaces/cards, `6px` on inputs/selects, pill (`999px`) on action buttons, circle (`50%`) only for the remove ✕ and status dots. Implemented in `app/pages.css`.
- Tokens in `app/globals.css`: `--review-ink #1f2c40`, `--review-paper #f4f7fb`, `--review-line #b9c9dc`; mono kicker = 10px/600/.15em uppercase; Georgia serif for display headings.
- Hover-revealed section chrome in `app/pageView.tsx` (concept color dot + name + section name + circular ✕) — keep this interaction model.

### Where this plan may touch (after Plan A: package owns component markup)

`app/page.tsx`, `app/pages.tsx`, `app/pageView.tsx`, `app/pages.css`, `app/globals.css` (tokens only if strictly necessary), `app/concepts/*` (images + sample data only), `public/images/` (no additions). Do NOT touch `server/`, `src/main.tsx` beyond CSS import lines, or anything under the package.

## 3. Step-by-step

### Phase 1 — image curation (respect IMAGE-SOURCING.md)

1. Build an image-assignment table for all 21 sections + both index views. For each row: section key, current image, chosen image, why it matches the section's claim. Choose from the 8 approved assets only.
   - Matching guide (from asset documentation): worship/prayer scenes → `intercp-young-adults.webp` or `vision-school-media/north-america-mission-camp-worship.webp`; large multigenerational gathering → `north-america-mission-camp-crowd.webp`; community/fellowship → `community-table.jpg` or `young-generation-mission-camp-community.webp`; flags/nations → `north-america-mission-camp-nations.webp`; congregation → `intercp-mission-camp.webp`; campus/city context → `community-city.jpg`; youth energy → `youth-gathering.jpg`.
2. Where no asset genuinely matches a section's claim (likely: events, resources, team, newsletter, donation, breadcrumbs), do **not** force an unrelated photo. Use the token system instead: color field + typographic treatment (mono kicker + Georgia), consistent with §8.2 "one strong visual gesture".
3. Audit alt text everywhere against IMAGE-SOURCING.md rules: activity-matched, no demographic labeling, no claims the image doesn't show. Commit the finished table as `planning/media/2026-09-05-image-assignments.md`.
4. Never the same image twice within one page view; a section type keeps its image across contexts (intentional reuse beats random reuse).

### Phase 2 — copy pass (no slop)

5. Rewrite tool chrome in `app/page.tsx`, `app/pages.tsx`, `app/pageView.tsx` so every visible string states purpose in one consistent review-tool voice. Test each string: "Would a reviewer who has never seen this tool know what this does?" If not, rewrite.
   - Known offenders: page index intro ("Registered pages."), create-card copy ("Register a blank page."), add-section affordance, header brand ("Designs").
   - The mono-kicker + Georgia hierarchy stays; only wording changes unless Phase 3 reveals layout issues.
6. Add honest empty states: page index with zero pages; page view with zero entries; section picker with no concepts for a section. One sentence stating the situation + one action that fixes it. No illustrations, no filler.
7. Every illustrative string keeps its "illustrative/sample" marker (AGENTS.md boundary — never remove).

### Phase 3 — visual polish (tokens only, no style-system changes)

8. Spacing rhythm audit (PRD §8.2) across index/cards/picker/chrome: normalize outliers to the scale already in use (8/12/16/18/22/26px multiples). Adjust nothing else.
9. Hierarchy check per view: one oversized editorial gesture, one accent color per card (existing `--component-color`), no competing diagonals, no collage effects.
10. Mobile verification at the existing 720px and 1050px breakpoints — confirm polish didn't break stacking.

### Phase 4 — verification

11. `npx tsc --noEmit`, `npm run lint`, `npm test`, `npm start` smoke test, visual pass desktop + mobile.
12. PR with the exact lowercase `design` label (preview workflow requirement — AGENTS.md:111). Body includes: before/after screenshots per phase, the image-assignment table reference, checks run + results, anything left unverified.

## 4. Non-negotiable constraints

- No new colors, fonts, radii, or image assets. The palette/style system and the radius decisions from the 2026-09-05 session are locked.
- No new dependencies.
- No content rewrites inside section sample data beyond what Phase 1/2 require (sample copy inside concepts is data the ministry must approve — final wording is out of scope; see PRD §8.2 "Replace all illustrative class listings… before production").
- AGENTS.md: preserve hash navigation, illustrative labels, concept identity; smallest change satisfying the request; never render multiple gallery areas or concepts at once.

## 5. Definition of done

- Every section has a deliberate image-or-typographic decision recorded in the committed table.
- Zero filler labels; all empty states handled with honest copy.
- Checks green (`tsc`, lint, build/test), PR merged with the `design` label.

## 6. Open decisions (owner input required before execution)

- **D4:** scope confirmed as *tool UI + concept sample data/images* — NOT rewriting ministry-facing content copy inside the 21 sample-data sets (that requires the ministry approval workflow). Confirm.
- **D5:** where no approved image matches a section's claim, is the typographic-treatment fallback acceptable? (Recommended default: yes — it follows §8.2 and avoids unapproved assets.)