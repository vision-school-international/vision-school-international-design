# Vision School International Website

An interactive design-selection suite for the new Vision School International website. The opening page presents two refined homepage directions shaped by design review feedback.

## Design directions

- **The Living Story** — editorial, trusted, story-led
- **The Open Horizon** — lighter, contemporary, quietly energetic

The concepts are informed by the clarity and conversion path of [Perspectives](https://perspectives.org/) and current INTERCP International program context while establishing an original visual identity for Vision School International.

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
that directory, provides `/health`, and falls back to `index.html` for the
concept routes. Use `npm test` for the production build and rendered-page checks.

## Dokploy

Create a Git application with:

- Build type: Railpack (Nixpacks also works)
- Build command: `npm run build`
- Start command: `npm start`
- Port: `3000`

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
