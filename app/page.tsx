"use client";

import { useEffect, useState } from "react";
import { RefinedConcept, type RefinedConceptKey } from "./RefinedConcept";

const concepts = [
  {
    key: "story" as RefinedConceptKey,
    number: "01",
    name: "The Living Story",
    note: "Closest to Perspectives · editorial · trusted",
    description: "An expansive, story-led homepage with geometric photography, deep evergreen, amber, and generous white space.",
    image: "/images/community-city.jpg",
    color: "#173f3b",
  },
  {
    key: "horizon" as RefinedConceptKey,
    number: "02",
    name: "The Open Horizon",
    note: "Lighter · contemporary · quietly energetic",
    description: "A bright international direction with outlined type, panoramic imagery, clear course structure, and restrained color.",
    image: "/images/mountain-sunrise.jpg",
    color: "#315b73",
  },
];

export default function Home() {
  const [selected, setSelected] = useState<RefinedConceptKey | null>(null);

  useEffect(() => {
    const selectFromHash = () => {
      const concept = window.location.hash.replace("#", "");
      if (concept === "story" || concept === "horizon") setSelected(concept);
    };
    window.addEventListener("hashchange", selectFromHash);
    const initialSelection = window.setTimeout(selectFromHash, 0);
    return () => {
      window.clearTimeout(initialSelection);
      window.removeEventListener("hashchange", selectFromHash);
    };
  }, []);

  useEffect(() => {
    if (!selected) return;
    window.history.replaceState(null, "", `#${selected}`);
    requestAnimationFrame(() => {
      document.getElementById(`concept-${selected}`)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [selected]);

  const showMenu = () => {
    setSelected(null);
    window.history.replaceState(null, "", window.location.pathname);
    requestAnimationFrame(() => {
      document.getElementById("concept-menu")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <main className="review-shell">
      <header className="review-header" id="concept-menu">
        <button className="review-brand" type="button" onClick={showMenu} aria-label="Show both Vision School design concepts">
          <span className="review-mark">VS</span>
          <span>Vision School International</span>
        </button>
        <span className="review-round">Design review · Round 02</span>
      </header>

      <section className="review-intro">
        <p className="review-kicker">Two refined directions</p>
        <h1>One clear story.<br />Two ways to tell it.</h1>
        <p>
          Both options follow the feedback from the August 20 review: brighter, more spacious,
          more like Perspectives, welcoming across generations, and focused on finding a class.
        </p>
      </section>

      <section className="review-grid" aria-label="Refined Vision School website concepts">
        {concepts.map((concept) => (
          <button
            className="review-card"
            key={concept.key}
            type="button"
            onClick={() => setSelected(concept.key)}
            style={{ "--review-color": concept.color } as React.CSSProperties}
          >
            <div className="review-card-image" style={{ backgroundImage: `url(${concept.image})` }}>
              <span>{concept.number}</span>
              <b>View full concept <span aria-hidden="true">↘</span></b>
            </div>
            <div className="review-card-copy">
              <p>{concept.note}</p>
              <h2>{concept.name}</h2>
              <span>{concept.description}</span>
            </div>
          </button>
        ))}
      </section>

      <div className="review-principles" aria-label="Shared design principles">
        <span>Long-scroll storytelling</span>
        <span>Light and credible</span>
        <span>Find a Class × 3</span>
        <span>All-age audience</span>
      </div>

      {selected ? <RefinedConcept concept={selected} onBack={showMenu} onSwitch={setSelected} /> : null}
    </main>
  );
}
