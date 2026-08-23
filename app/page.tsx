"use client";

import { useEffect } from "react";
import { ConceptPage } from "./concepts/ConceptPage";
import { concepts, sectionId, sectionTypes, type ComponentSection, type DesignConcept } from "./concepts/componentCatalog";
import { RefinedConcept } from "./RefinedConcept";

function ConceptPreview({ concept, section }: { concept: DesignConcept; section: ComponentSection }) {
  if (concept.kind === "refined") {
    return <RefinedConcept concept={concept.key} section={section} />;
  }

  return <ConceptPage concept={concept.key} section={section} />;
}

export default function Home() {
  useEffect(() => {
    const focusHash = () => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) {
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
        requestAnimationFrame(() => target.scrollIntoView({ behavior }));
      }
    };

    focusHash();
    window.addEventListener("hashchange", focusHash);
    return () => window.removeEventListener("hashchange", focusHash);
  }, []);

  return (
    <main className="review-shell">
      <header className="review-header" id="component-menu">
        <a className="review-brand" href="#component-menu" aria-label="Return to the section index">
          <span className="review-mark">VS</span>
          <span>Vision School International</span>
        </a>
        <span className="review-round">Design review · 9 sections · 6 concepts</span>
      </header>

      <section className="review-intro">
        <p className="review-kicker">9 section types · 6 design concepts</p>
        <h1>Design concepts by section.</h1>
        <p>Six design concepts are shown for each of the nine section types.</p>
      </section>

      <nav className="component-index" aria-label="Section type index">
        {sectionTypes.map((section) => (
          <a className="component-index-card" key={section.key} href={`#${sectionId(section.key)}`} style={{ "--component-color": section.color } as React.CSSProperties}>
            <div className="component-index-image" style={{ backgroundImage: `url(${section.image})` }}>
              <span>{section.number}</span>
              <b>View concepts <span aria-hidden="true">↘</span></b>
            </div>
            <div className="component-index-copy">
              <p>Component</p>
              <h2>{section.name}</h2>
              <span>{section.description}</span>
            </div>
          </a>
        ))}
      </nav>

      <div className="review-principles" aria-label="Review principles">
        <span>9 section types</span>
        <span>6 concepts each</span>
        <span>Full-width previews</span>
        <span>Design review</span>
      </div>

      <div className="component-gallery">
        {sectionTypes.map((section) => (
          <section className="component-gallery-section" id={sectionId(section.key)} key={section.key}>
            <header className="component-gallery-heading">
              <p className="review-kicker">{section.number} / 09 · Component</p>
              <h2>{section.name}</h2>
              <p>{section.description}</p>
            </header>
            <div className="component-gallery-variants">
              {concepts.map((concept) => (
                <article className="component-variant" key={`${section.key}-${concept.key}`}>
                  <div className="component-variant-label" style={{ "--variant-color": concept.color } as React.CSSProperties}>
                    <span>{concept.name}</span>
                    <span>{concept.kind === "refined" ? "Refined treatment" : "Original treatment"}</span>
                  </div>
                  <ConceptPreview concept={concept} section={section.key} />
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
