const partners = ["Local church", "Campus ministry", "Mission partner", "Prayer network"] as const;

export function PartnerLogoStrip() {
  return (
    <section className="partner-logo-strip component-preview" aria-label="Partner organizations">
      <header>
        <p>Partners</p>
        <h2>Show cooperation with visible credibility.</h2>
      </header>
      <ul>
        {partners.map((partner) => (
          <li key={partner}>{partner}</li>
        ))}
      </ul>
      <small>Sample partner labels · Replace with approved organizations</small>
    </section>
  );
}
