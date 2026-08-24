"use client";

import { useEffect, useState } from "react";
import { concepts, getConceptsForSection, type ConceptKey } from "./concepts/conceptRegistry";
import { sectionId, sectionTypes, type ComponentSection } from "./concepts/componentCatalog";

const formatOrdinal = (value: number) => String(value + 1).padStart(2, "0");

const sectionFromHash = (hash: string): ComponentSection | undefined =>
  sectionTypes.find((section) => sectionId(section.key) === hash.slice(1))?.key;

export default function Home() {
  const [activeSection, setActiveSection] = useState<ComponentSection>(() => {
    if (typeof window === "undefined") {
      return sectionTypes[0].key;
    }

    return sectionFromHash(window.location.hash) ?? sectionTypes[0].key;
  });
  const [activeConcept, setActiveConcept] = useState<ConceptKey>(concepts[0].key);

  useEffect(() => {
    const focusHash = () => {
      const section = sectionFromHash(window.location.hash);

      if (section) {
        setActiveSection(section);
        return;
      }

      const target = document.getElementById(window.location.hash.slice(1));
      if (!target) {
        return;
      }

      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      requestAnimationFrame(() => target.scrollIntoView({ behavior }));
    };

    focusHash();
    window.addEventListener("hashchange", focusHash);
    return () => window.removeEventListener("hashchange", focusHash);
  }, []);

  useEffect(() => {
    if (window.location.hash !== `#${sectionId(activeSection)}`) {
      return;
    }

    const target = document.getElementById(sectionId(activeSection));
    if (!target) {
      return;
    }

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    requestAnimationFrame(() => target.scrollIntoView({ behavior }));
  }, [activeSection]);

  const selectedSection = sectionTypes.find((section) => section.key === activeSection);
  const availableConcepts = getConceptsForSection(activeSection);
  const selectedConcept = availableConcepts.find((concept) => concept.key === activeConcept) ?? availableConcepts[0];
  const selectedTreatment = selectedSection && selectedConcept ? selectedConcept.sections[selectedSection.key] : undefined;

  return (
    <main className="review-shell">
      <header className="review-header" id="component-menu">
        <a className="review-brand" href="#component-menu" aria-label="Return to the section index">
          <img className="review-logo" src="/images/icp-logo.webp" alt="ICP International" />
          <span>Designs</span>
        </a>
      </header>

      <section className="review-intro">
        <h1>Design concepts</h1>
        <p>
          Design is the discipline of shaping how people understand, trust, feel, and act. Review these concepts by the user psychology they support: clarity, confidence, relevance, momentum, and the next faithful step.
        </p>
      </section>

      <nav className="component-index" aria-label="Section type index">
        {sectionTypes.map((section, sectionIndex) => (
          <a
            className="component-index-card"
            key={section.key}
            href={`#${sectionId(section.key)}`}
            aria-current={activeSection === section.key ? "true" : undefined}
            aria-label={`View ${section.name} concepts`}
            style={{ "--component-color": section.color } as React.CSSProperties}
          >
            <div className="component-index-image" style={{ backgroundImage: `url(${section.image})` }}>
              <span>{formatOrdinal(sectionIndex)}</span>
              <b>View concepts <span aria-hidden="true">↘</span></b>
            </div>
            <div className="component-index-copy">
              <p>Component</p>
              <h2>{section.name}</h2>
              <span>{section.description}</span>
              <ul className="component-index-points" aria-label={`${section.name} review points`}>
                {section.reviewPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </nav>

      <div className="component-gallery">
        {selectedSection && (
          <section className="component-gallery-section" id={sectionId(selectedSection.key)} key={selectedSection.key}>
            <header className="component-gallery-heading">
              <p className="review-kicker">Component</p>
              <h2>{selectedSection.name}</h2>
              <p>{selectedSection.description}</p>
            </header>
            {selectedConcept && selectedTreatment ? (
              <>
                <div className="concept-selector" role="tablist" aria-label="Concept options">
                  {availableConcepts.map((concept) => (
                    <button
                      className="concept-selector-button"
                      key={concept.key}
                      type="button"
                      role="tab"
                      aria-selected={selectedConcept.key === concept.key}
                      aria-controls={`concept-preview-${selectedSection.key}`}
                      style={{ "--concept-color": concept.color } as React.CSSProperties}
                      onClick={() => setActiveConcept(concept.key)}
                    >
                      <span>{concept.name}</span>
                      {concept.selectorLabel && <small>{concept.selectorLabel}</small>}
                    </button>
                  ))}
                </div>
                <article className="component-concept" id={`concept-preview-${selectedSection.key}`} role="tabpanel" aria-label={`${selectedConcept.name} ${selectedSection.name} concept`}>
                  <div className="component-concept-label" style={{ "--concept-color": selectedConcept.color } as React.CSSProperties}>
                    <span>{selectedConcept.name}</span>
                    {selectedConcept.previewLabel && <span>{selectedConcept.previewLabel}</span>}
                  </div>
                  {selectedTreatment({ section: selectedSection.key })}
                </article>
              </>
            ) : (
              <p className="component-empty">No concepts are registered for this component yet.</p>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
