# Component Section Thumbnail Generation Guide

Step-by-step instructions for creating layout-accurate vector wireframes for new catalog sections.

## 1. File & Folder Convention
```text
thumbnails/<section-key>/thumbnail.svg
```
- `<section-key>` must match the `key` field in `app/concepts/componentCatalog.ts`.

## 2. SVG Boilerplate
```xml
<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer Component Frame -->
  <rect x="20" y="20" width="200" height="100" rx="2" stroke="rgba(255, 255, 255, 0.45)" stroke-width="1.5" fill="rgba(255, 255, 255, 0.12)" />

  <!-- Layout Elements Go Here -->
</svg>
```

## 3. Color & Token Rules
| Element Role | Color / Fill | Stroke | Border Radius |
| :--- | :--- | :--- | :--- |
| **Container Frame** | `rgba(255, 255, 255, 0.12)` | `rgba(255, 255, 255, 0.45)` (`1.5px`) | `rx="2"` |
| **Inner Card / Box**| `rgba(255, 255, 255, 0.06)` | `rgba(255, 255, 255, 0.45)` (`1px`) | `rx="2"` |
| **Primary Headline**| `rgba(255, 255, 255, 0.9)` | `none` | `rx="1"` |
| **Muted Paragraph** | `rgba(255, 255, 255, 0.25)` | `none` | `rx="1"` |
| **Accent / Button** | Brand Token (`#1769c2`, `#102c57`, etc.) | `none` | `rx="3"` or pill |
| **Dividers** | `none` | `rgba(255, 255, 255, 0.45)` (`1px`) | `none` |

## 4. Integration Checklist
- [ ] Standalone `.svg` saved to `thumbnails/<section-key>/thumbnail.svg`.
- [ ] JSX version added as a case in `app/concepts/SectionThumbnail.tsx`.
- [ ] Section defined in `app/concepts/componentCatalog.ts`.
- [ ] Tested in `npm run dev` across both desktop and mobile viewports.
- [ ] All checks passing (`npx tsc --noEmit && npm run lint && npm test`).
