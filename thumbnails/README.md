# Component Section Thumbnail Guidelines & Generation Instructions

This directory contains bespoke, vector-based architectural wireframe schematics for every section type in the Vision School International component catalog.

## Purpose

Design review galleries require visual clarity at a glance. Generic stock photos and arbitrary icon placeholders fail to communicate layout structure. These thumbnails provide high-fidelity geometric wireframes of each section's actual UI anatomy and composition (e.g. browser navigation bars, multi-column metric grids, expandable accordions, video players, calendar date blocks, timeline steps).

---

## Directory Structure

Each section type has a dedicated folder containing its standalone vector asset:

```text
thumbnails/
├── navigation/thumbnail.svg      # Navigation bar with brand mark, links, CTA
├── hero/thumbnail.svg            # Split hero layout with headline, CTA, media window
├── proof/thumbnail.svg           # 3-column metric card grid with numbers & labels
├── about/thumbnail.svg           # 2-column editorial with framed image & excerpt box
├── course/thumbnail.svg          # 3-step chronological timeline with track & cards
├── classes/thumbnail.svg         # Filter bar with location pills and class cards
├── stories/thumbnail.svg         # Large quote mark, 3-line text, and avatar lockup
├── videos/thumbnail.svg          # 16:9 featured player with play button & playlist
├── cta/thumbnail.svg             # Centered focus card with top accent bar & CTA pill
├── footer/thumbnail.svg          # 4-column link directory with copyright bar
├── announcement/thumbnail.svg    # Floating ribbon banner with badge & arrow
├── breadcrumbs/thumbnail.svg     # Inline pathway with chevron dividers
├── events/thumbnail.svg          # 2 event row cards with date badge blocks
├── faq/thumbnail.svg             # 3 expandable accordion rows (expanded + collapsed)
├── registration/thumbnail.svg    # 2-column input fields, dropdown, submit button
├── newsletter/thumbnail.svg      # Inline email input box and subscribe button
├── partners/thumbnail.svg        # 4 institutional emblem badges with dividing lines
├── team/thumbnail.svg            # 3 leadership columns with circular avatar frames
├── resources/thumbnail.svg       # 3 document cards with format badges (PDF/Video)
├── gallery/thumbnail.svg         # Asymmetric 4-photo masonry grid
├── donation/thumbnail.svg        # Giving tier card with amount pills and action
├── GENERATION_INSTRUCTIONS.md    # Detailed specifications for new components
└── README.md                     # This documentation
```

---

## Technical Specifications for New Thumbnails

When adding a new component section to the catalog, follow these exact vector specifications:

### 1. Canvas & Viewport
- **`viewBox`**: `0 0 240 140` (Aspect ratio ~ `1.71:1`, perfectly fitting standard card containers)
- **`xmlns`**: `"http://www.w3.org/2000/svg"`
- **`fill`**: `"none"` on root `<svg>`

### 2. Geometry & Layering Hierarchy
1. **Outer Boundary Frame:**
   - `<rect x="20" y="20" width="200" height="100" rx="2" stroke="rgba(255, 255, 255, 0.45)" stroke-width="1.5" fill="rgba(255, 255, 255, 0.12)" />`
   - Use `rx="2"` or `rx="3"` to maintain the system's crisp, editorial boundary.
2. **Solid Text / Primary Elements:**
   - Fills: `rgba(255, 255, 255, 0.9)` for prominent headlines, titles, and active labels.
3. **Muted Subtext / Paragraph Lines:**
   - Fills: `rgba(255, 255, 255, 0.25)` with `rx="1"` for scannable wireframe lines (heights `3px`, `4px`, or `5px`).
4. **Dividers & Internal Outlines:**
   - Stroke: `rgba(255, 255, 255, 0.45)` with `stroke-width="1"`.
   - Subtle inner fills: `rgba(255, 255, 255, 0.04)` to `rgba(255, 255, 255, 0.08)`.
5. **Accent Color Highlights:**
   - Use the section's designated brand color (e.g. `#102c57`, `#1769c2`, `#66afe6`, `#1f2c40`, `#53657e`) or `currentColor` for buttons, badges, status dots, and focus accents.

---

## Step-by-Step Workflow for Future Sections

1. **Analyze Component Anatomy:**
   Identify the 3 most distinctive structural features of the section (e.g., a search filter, a multi-column card row, a player window, or an input form).
2. **Create Standalone SVG:**
   Create a new folder `thumbnails/<new-section-key>/` and draft `thumbnail.svg` using the specifications above.
3. **Add to React Component Renderer:**
   Update `app/concepts/SectionThumbnail.tsx` by adding a new `case "<new-section-key>":` block returning the corresponding JSX SVG element.
4. **Register in Catalog:**
   Add the section entry to `app/concepts/componentCatalog.ts` with its key, name, description, review points, and designated token color.
5. **Verify:**
   Run `npx tsc --noEmit && npm run lint && npm test` to ensure 0 type errors, clean linting, and a successful production build.
