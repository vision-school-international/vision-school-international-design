const links = [
  ["About", "#section-about"],
  ["Course", "#section-course"],
  ["Classes", "#section-classes"],
  ["Stories", "#section-stories"],
] as const;

export function UtilityFooter() {
  return (
    <footer className="utility-footer component-preview">
      <div className="utility-footer__brand">
        <span>V</span>
        <strong>Vision School <small>International</small></strong>
      </div>
      <p>
        An 11-week training journey helping believers understand God&apos;s heart for
        the nations and respond with faith.
      </p>
      <nav aria-label="Footer navigation">
        {links.map(([label, href]) => (
          <a key={label} href={href}>{label}</a>
        ))}
      </nav>
      <small>Concept mockup · All claims, data, and media subject to ministry approval</small>
    </footer>
  );
}
