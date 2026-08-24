const roles = [
  ["School director", "Owns program direction and local coordination."],
  ["Course coordinator", "Supports student questions, schedule, and class logistics."],
  ["Mission instructor", "Teaches mission foundations and practical response."],
] as const;

export function TeamLeadership() {
  return (
    <section className="team-leadership component-preview">
      <header>
        <p>Leadership</p>
        <h2>Identify who carries responsibility.</h2>
      </header>
      <div>
        {roles.map(([role, responsibility]) => (
          <article key={role}>
            <span aria-hidden="true" />
            <h3>{role}</h3>
            <p>{responsibility}</p>
          </article>
        ))}
      </div>
      <small>Role placeholders · Add approved names and photos before publishing</small>
    </section>
  );
}
