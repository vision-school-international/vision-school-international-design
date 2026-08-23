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
        <a className="review-brand" href="#component-menu" aria-label="Show all Vision School component types">
          <span className="review-mark">VS</span>
          <span>Vision School International</span>
        </a>
        <span className="review-round">Component review · Nine section types</span>
      </header>

      <section className="review-intro">
        <p className="review-kicker">Nine section types · Six visual directions</p>
        <h1>One shared system.<br />Many ways to shape it.</h1>
        <p>
          Review each part of the Vision School experience independently. Choose the strongest
          treatment for every section while keeping the complete page journey clear and connected.
        </p>
      </section>

      <nav className="component-index" aria-label="Section type index">
        {sectionTypes.map((section) => (
          <a className="component-index-card" key={section.key} href={`#${sectionId(section.key)}`} style={{ "--component-color": section.color } as React.CSSProperties}>
            <div className="component-index-image" style={{ backgroundImage: `url(${section.image})` }}>
              <span>{section.number}</span>
              <b>View treatments <span aria-hidden="true">↘</span></b>
            </div>
            <div className="component-index-copy">
              <p>Section type</p>
              <h2>{section.name}</h2>
              <span>{section.description}</span>
            </div>
          </a>
        ))}
      </nav>

      <div className="review-principles" aria-label="Review principles">
        <span>Compare by section</span>
        <span>Six visual directions</span>
        <span>One continuous page</span>
        <span>Find a Class × 3</span>
      </div>

      <div className="component-gallery">
        {sectionTypes.map((section) => (
          <section className="component-gallery-section" id={sectionId(section.key)} key={section.key}>
            <header className="component-gallery-heading">
              <p className="review-kicker">{section.number} / 09 · Section type</p>
              <h2>{section.name}</h2>
              <p>{section.description}</p>
            </header>
            <div className="component-gallery-variants">
              {concepts.map((concept) => (
                <article className="component-variant" key={`${section.key}-${concept.key}`}>
                  <div className="component-variant-label" style={{ "--variant-color": concept.color } as React.CSSProperties}>
                    <span>{concept.name}</span>
                    <span>{concept.kind === "refined" ? "Refined direction" : "Original direction"}</span>
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
