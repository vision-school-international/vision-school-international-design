const facts = [
  ["11", "weekly sessions"],
  ["3", "learning rhythms"],
  ["1", "next step"],
] as const;

export function TrustProof() {
  return (
    <section className="trust-proof component-preview" aria-label="Program proof points">
      <header>
        <p>Program proof</p>
        <h2>Clear facts before commitment.</h2>
      </header>
      <dl>
        {facts.map(([value, label]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <p>Sample facts for review · Confirm final program details before publishing</p>
    </section>
  );
}
