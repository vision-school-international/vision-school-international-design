type StudioHeaderProps = {
  active: "sections" | "pages" | "api";
};

const tabs = [
  { key: "sections", label: "Sections", href: "/" },
  { key: "pages", label: "Pages", href: "/pages" },
  { key: "api", label: "API", href: "/api" },
] as const;

export default function StudioHeader({ active }: StudioHeaderProps) {
  return (
    <header className="studio-header">
      <a className="studio-brand" href="/" aria-label="Return to the component catalog">
        <img className="review-logo" src="/images/icp-logo.webp" alt="ICP International" />
        <span className="studio-brand-text">
          <strong>Vision School International</strong>
          <em>Design Catalog</em>
        </span>
      </a>
      <nav className="studio-tabs" aria-label="Workspace switcher">
        {tabs.map((tab) => (
          <a
            key={tab.key}
            className={`studio-tab${active === tab.key ? " is-active" : ""}`}
            href={tab.href}
            aria-current={active === tab.key ? "page" : undefined}
          >
            {tab.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
