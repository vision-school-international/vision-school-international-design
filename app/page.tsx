import Link from "next/link";

const concepts = [
  {
    number: "01",
    name: "The Global Classroom",
    note: "Editorial · trusted · international",
    image: "/images/community-city.jpg",
    href: "/concepts/global-classroom",
    color: "#143d3a",
  },
  {
    number: "02",
    name: "Sent Together",
    note: "Warm · communal · story-led",
    image: "/images/community-table.jpg",
    href: "/concepts/sent-together",
    color: "#b54f2a",
  },
  {
    number: "03",
    name: "Every Nation",
    note: "Bold · youthful · action-first",
    image: "/images/youth-gathering.jpg",
    href: "/concepts/every-nation",
    color: "#29265c",
  },
  {
    number: "04",
    name: "The Way Forward",
    note: "Quiet · cinematic · premium",
    image: "/images/mountain-sunrise.jpg",
    href: "/concepts/way-forward",
    color: "#152c44",
  },
];

export default function Home() {
  return (
    <main className="selector-shell">
      <header className="selector-header">
        <Link className="selector-brand" href="/" aria-label="Vision School International home">
          <span className="brand-mark">VS</span>
          <span>Vision School International</span>
        </Link>
        <span className="selector-tag">Design study · August 2026</span>
      </header>

      <section className="selector-intro">
        <p className="eyebrow">Four directions. One global calling.</p>
        <h1>Choose how the story begins.</h1>
        <p className="selector-lede">
          Each concept follows the same clear path—understand the vision, explore the course,
          find a class, and take the next step—through a distinct visual personality.
        </p>
      </section>

      <section className="concept-grid" aria-label="Website design concepts">
        {concepts.map((concept) => (
          <Link
            className="concept-card"
            href={concept.href}
            key={concept.number}
            style={{ "--concept-color": concept.color } as React.CSSProperties}
          >
            <div className="concept-image" style={{ backgroundImage: `url(${concept.image})` }}>
              <span className="concept-number">{concept.number}</span>
              <span className="concept-open">Open concept <span aria-hidden="true">↗</span></span>
            </div>
            <div className="concept-copy">
              <h2>{concept.name}</h2>
              <p>{concept.note}</p>
            </div>
          </Link>
        ))}
      </section>

      <footer className="selector-footer">
        <p>Inspired by the clarity and confidence of Perspectives—designed as a distinct home for Vision School.</p>
        <p>Round 01 · For internal review</p>
      </footer>
    </main>
  );
}
