const resources = [
  ["Teaching", "Mission foundations for new students"],
  ["Story", "How students respond after the course"],
  ["Guide", "Questions to ask before choosing a class"],
] as const;

export function ResourcesBlogListing() {
  return (
    <section className="resources-blog-listing component-preview">
      <header>
        <p>Resources</p>
        <h2>Give visitors more to read next.</h2>
      </header>
      <div>
        {resources.map(([type, title]) => (
          <article key={title}>
            <span>{type}</span>
            <h3>{title}</h3>
            <a href="#section-resources">Read more <span aria-hidden="true">↗</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}
