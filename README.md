# Vision School International Website

An internal design review gallery for the Vision School International website. It organizes design concepts by website section.

## Review model

A design comparison gallery: each website section is shown with its available design concepts at full width.

## Concepts

- **Editorial**
- **Contemporary**
- **International**
- **Community**
- **Bold**
- **Cinematic**

These are review labels, not final product names.

## Section types

- **Navigation** — Helps users move between key pages and reach class information.
- **Hero / introduction** — Introduces the program and gives the user a clear first action.
- **Proof / key facts** — Summarizes important facts at a glance.
- **About / value proposition** — Explains what the program is, who it is for, and why it matters.
- **Course / curriculum** — Shows what users will learn and what participation involves.
- **Class finder** — Helps users find a relevant class and take the next step.
- **Stories / testimonials** — Shows participant experience and outcomes.
- **Calls to action** — Prompts the next action at decision points.
- **Footer / utility navigation** — Provides final navigation, contact, and credibility information.

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
client-side gallery routes. Use `npm test` for the production build and
rendered-page checks.

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
