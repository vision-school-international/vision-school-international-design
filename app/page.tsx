"use client";

import { useEffect, useState } from "react";
import { ConceptPage, type ConceptKey } from "./concepts/ConceptPage";

const concepts = [
  {
    number: "01",
    name: "The Global Classroom",
    note: "Editorial · trusted · international",
    image: "/images/community-city.jpg",
    href: "#concept-global",
    key: "global" as ConceptKey,
    color: "#143d3a",
  },
  {
    number: "02",
    name: "Sent Together",
    note: "Warm · communal · story-led",
    image: "/images/community-table.jpg",
    href: "#concept-together",
    key: "together" as ConceptKey,
    color: "#b54f2a",
  },
  {
    number: "03",
    name: "Every Nation",
    note: "Bold · youthful · action-first",
    image: "/images/youth-gathering.jpg",
    href: "#concept-nations",
    key: "nations" as ConceptKey,
    color: "#29265c",
  },
  {
    number: "04",
    name: "The Way Forward",
    note: "Quiet · cinematic · premium",
    image: "/images/mountain-sunrise.jpg",
    href: "#concept-forward",
    key: "forward" as ConceptKey,
    color: "#152c44",
  },
];

export default function Home() {
  const [selectedConcept, setSelectedConcept] = useState<ConceptKey | null>(null);

  useEffect(() => {
    if (!selectedConcept) return;
    const concept = concepts.find((item) => item.key === selectedConcept);
    requestAnimationFrame(() => {
      document.getElementById(concept?.href.slice(1) ?? "")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [selectedConcept]);

  const showConceptMenu = () => {
    setSelectedConcept(null);
    requestAnimationFrame(() => {
      document.getElementById("concept-menu")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <main className="selector-shell">
      <header className="selector-header" id="concept-menu">
        <button className="selector-brand" type="button" onClick={showConceptMenu} aria-label="Show all Vision School International concepts">
          <span className="brand-mark">VS</span>
          <span>Vision School International</span>
        </button>
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
          <button
            type="button"
            className="concept-card"
            key={concept.number}
            onClick={() => setSelectedConcept(concept.key)}
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
          </button>
        ))}
      </section>

      <footer className="selector-footer">
        <p>Inspired by the clarity and confidence of Perspectives—designed as a distinct home for Vision School.</p>
        <p>Round 01 · For internal review</p>
      </footer>

      <div className="embedded-concepts">
        {selectedConcept ? (
          <ConceptPage
            concept={selectedConcept}
            embedded
            onSelect={(concept) => concept ? setSelectedConcept(concept) : showConceptMenu()}
          />
        ) : null}
      </div>
    </main>
  );
}
