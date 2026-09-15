// Single source of truth for the server-rendered studio header markup.
// Mirrors app/components/StudioHeader.tsx exactly (brand block + two-tab nav)
// so the /api/doc page matches the real app shell instead of a hand-copied
// duplicate. React and this server template are different runtimes and can't
// share one component, but within this runtime the header is generated once,
// here, and reused by every server-rendered page that needs it.

const TABS = [
  { key: "sections", label: "Sections", href: "/" },
  { key: "pages", label: "Pages", href: "/pages" },
  { key: "api", label: "API", href: "/api" },
];

export const renderStudioHeader = (active) => `
<header class="studio-header">
  <a class="studio-brand" href="/" aria-label="Return to the component catalog">
    <img class="review-logo" src="/images/icp-logo.webp" alt="ICP International" />
    <span class="studio-brand-text">
      <strong>Vision School International</strong>
      <em>Design Catalog</em>
    </span>
  </a>
  <nav class="studio-tabs" aria-label="Workspace switcher">
    ${TABS.map(
      (tab) =>
        `<a class="studio-tab${active === tab.key ? " is-active" : ""}" href="${tab.href}"${active === tab.key ? ' aria-current="page"' : ""}>${tab.label}</a>`,
    ).join("\n    ")}
  </nav>
</header>`;
