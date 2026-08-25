# Vision School International Website

An internal design review gallery for the Vision School International website. It organizes design concepts by website section.

## Review model

A design comparison gallery: choose a website section, then choose a design concept to view at full width. Only the selected section and concept are rendered at a time.

## Concept model

Concepts are registered per component section. They are not global design
families, style buckets, or final product names.

Each concept should answer a specific UI/UX need for one section. For example,
if the request is “a navigation bar that helps users search site content
faster,” the concept should be named for that purpose, such as **Search
Navigation**, and scoped only to the Navigation section.

## Directing agents

When asking an agent to add a component, describe the section and the user
problem it should solve:

```text
Create one Events calendar concept that helps visitors compare upcoming Vision
School sessions, camps, and mission dates.
```

The agent should add or update the section catalog, create an isolated portable
React component under `app/components/`, register one component-scoped concept
under `app/concepts/`, add scoped CSS imported from `src/main.tsx`, and run the
project checks.

Do not ask for global variants, style families, numbered placeholders, or
concepts shared across unrelated sections. Avoid requests like “make three
modern variants,” “add Concept 01,” or “reuse this concept everywhere.”

## Section types

- **Navigation** — Helps users move between key pages and reach class information.
- **Hero** — Introduces the program and gives the user a clear first action.
- **Proof** — Summarizes important facts at a glance.
- **About** — Explains what the program is, who it is for, and why it matters.
- **Course** — Shows what users will learn and what participation involves.
- **Class finder** — Helps users find a relevant class and take the next step.
- **Stories** — Shows participant experience and outcomes.
- **Video library** — Lets users browse and watch mission camp videos without leaving the page.
- **Calls to action** — Prompts the next action at decision points.
- **Footer** — Provides final navigation, contact, and credibility information.
- **Announcement bar** — Highlights deadlines, camps, or urgent updates.
- **Breadcrumbs** — Helps users understand deeper-page location.
- **Events calendar** — Shows sessions, camps, mission events, and dates.
- **FAQ accordion** — Answers practical questions compactly.
- **Registration form** — Converts interest into inquiry or enrollment.
- **Newsletter signup** — Retains visitors not ready to register.
- **Partner logo strip** — Shows local-church or partner credibility.
- **Team leadership** — Identifies responsible people and roles.
- **Resources listing** — Shows teaching, stories, and mission material.
- **Gallery image grid** — Shows training and community visually.
- **Donation CTA** — Gives supporters a financial participation path when applicable.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Build and serve the production site with:

```bash
npm run build
npm start
```

The frontend is a plain Vite React build in `dist/`. A small Hono server serves
that directory, provides `/health`, and falls back to `index.html` for
client-side gallery routes. Use `npm test` for the production build check.

## Dokploy

Create a Git application with the repository-verified settings:

- Build type: Railpack
- Build command: `npm run build`
- Start command: `npm start`
- Port: `3000`

Nixpacks has not been verified in this repository; do not treat it as an
alternate deployment path without validating it separately.

No Cloudflare, Wrangler, database, or runtime secrets are required.

## Review notes

- Class listings and the student story are clearly marked as illustrative.
- Final copy, locations, registration links, branding, and testimonials require ministry approval.
- The comparison suite is for internal design review, not a production launch.

## Photography credits

Concept photography is sourced from Unsplash:

- [Young people at picnic tables](https://unsplash.com/photos/young-people-sitting-at-picnic-tables-outdoors-fYF49-jXgYM)
- [Community gathering outdoors](https://unsplash.com/photos/a-group-of-men-gathered-outdoors-near-a-building-kDCzURZwS_o)
- [Youth gathering](https://unsplash.com/photos/people-gathering-in-a-event-CjMwAu4-OqY)
- [Mountain sunrise](https://unsplash.com/photos/eUFfY6cwjSU)
