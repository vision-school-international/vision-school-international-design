"use client";

import { useEffect, useState } from "react";
import { ConceptPage, type ConceptKey } from "./concepts/ConceptPage";
import { RefinedConcept, type RefinedConceptKey } from "./RefinedConcept";

type Selection =
  | { kind: "refined"; key: RefinedConceptKey }
  | { kind: "legacy"; key: ConceptKey };

const concepts = [
  {
    kind: "refined" as const,
    key: "story" as RefinedConceptKey,
    number: "01",
    name: "The Living Story",
    note: "Closest to Perspectives · editorial · trusted",
    description: "A focused, story-led homepage with deep navy, crisp blue accents, strong photography, and generous white space.",
    image: "/images/community-city.jpg",
    color: "#173b59",
  },
  {
    kind: "refined" as const,
    key: "horizon" as RefinedConceptKey,
    number: "02",
    name: "The Open Horizon",
    note: "Lighter · contemporary · quietly energetic",
    description: "A bright international direction with panoramic imagery, clear course structure, cool blue tints, and restrained detail.",
    image: "/images/mountain-sunrise.jpg",
    color: "#3c7397",
  },
  {
    kind: "legacy" as const,
    key: "global" as ConceptKey,
    number: "03",
    name: "The Global Classroom",
    note: "Editorial · trusted · international",
    description: "A clear, editorial home for a global discipleship movement.",
    image: "/images/community-city.jpg",
    color: "#143d3a",
  },
  {
    kind: "legacy" as const,
    key: "together" as ConceptKey,
    number: "04",
    name: "Sent Together",
    note: "Warm · communal · story-led",
    description: "A warm, human-centered direction built around belonging and shared calling.",
    image: "/images/community-table.jpg",
    color: "#b54f2a",
  },
  {
    kind: "legacy" as const,
    key: "nations" as ConceptKey,
    number: "05",
    name: "Every Nation",
    note: "Bold · youthful · action-first",
    description: "A bold, energetic direction for students ready to move from conviction to action.",
    image: "/images/youth-gathering.jpg",
    color: "#29265c",
  },
  {
    kind: "legacy" as const,
    key: "forward" as ConceptKey,
    number: "06",
    name: "The Way Forward",
    note: "Quiet · cinematic · premium",
    description: "A cinematic, premium direction that makes the journey feel consequential.",
    image: "/images/mountain-sunrise.jpg",
    color: "#152c44",
  },
];

const refinedKeys = new Set<RefinedConceptKey>(["story", "horizon"]);
const legacyKeys = new Set<ConceptKey>(["global", "together", "nations", "forward"]);

export default function Home() {
  const [selected, setSelected] = useState<Selection | null>(null);

  useEffect(() => {
    const selectFromHash = () => {
      const concept = window.location.hash.replace("#", "");
      if (refinedKeys.has(concept as RefinedConceptKey)) {
        setSelected({ kind: "refined", key: concept as RefinedConceptKey });
      } else if (legacyKeys.has(concept as ConceptKey)) {
        setSelected({ kind: "legacy", key: concept as ConceptKey });
      }
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
    window.history.replaceState(null, "", `#${selected.key}`);
    requestAnimationFrame(() => {
      document.getElementById(`concept-${selected.key}`)?.scrollIntoView({ behavior: "smooth" });
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
        <span className="review-round">Design review · Six directions</span>
      </header>

      <section className="review-intro">
        <p className="review-kicker">Six directions · One shared calling</p>
        <h1>One clear story.<br />Six ways to tell it.</h1>
        <p>
          Compare the two refined Round 02 directions alongside the original four visual concepts.
          Every option follows the same journey: understand the vision, explore the course, and find a class.
        </p>
      </section>

      <section className="review-grid" aria-label="Vision School website concepts">
        {concepts.map((concept) => (
          <button
            className="review-card"
            key={concept.key}
            type="button"
            onClick={() => {
              if (concept.kind === "refined") {
                setSelected({ kind: "refined", key: concept.key as RefinedConceptKey });
              } else {
                setSelected({ kind: "legacy", key: concept.key as ConceptKey });
              }
            }}
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

      {selected?.kind === "refined" ? (
        <RefinedConcept
          concept={selected.key}
          onBack={showMenu}
          onSwitch={(key) => setSelected({ kind: "refined", key })}
        />
      ) : selected?.kind === "legacy" ? (
        <ConceptPage
          concept={selected.key}
          embedded
          onSelect={(key) => key ? setSelected({ kind: "legacy", key }) : showMenu()}
        />
      ) : null}
    </main>
  );
}
