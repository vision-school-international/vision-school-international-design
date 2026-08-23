"use client";

import { useEffect, useState } from "react";
import { ConceptPage } from "./concepts/ConceptPage";
import { concepts, getConceptsForSection, sectionId, sectionTypes, type ComponentSection, type DesignConcept } from "./concepts/componentCatalog";
import { RefinedConcept } from "./RefinedConcept";

const formatOrdinal = (value: number) => String(value + 1).padStart(2, "0");

const sectionFromHash = (hash: string): ComponentSection | undefined =>
  sectionTypes.find((section) => sectionId(section.key) === hash.slice(1))?.key;

function ConceptPreview({ concept, section }: { concept: DesignConcept; section: ComponentSection }) {
  if (concept.kind === "refined") {
    return <RefinedConcept concept={concept.key} section={section} />;
  }

  return <ConceptPage concept={concept.key} section={section} />;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<ComponentSection>(() => {
    if (typeof window === "undefined") {
      return sectionTypes[0].key;
    }

    return sectionFromHash(window.location.hash) ?? sectionTypes[0].key;
  });
  const [activeConcept, setActiveConcept] = useState<DesignConcept["key"]>(concepts[0].key);

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
  const selectedSectionIndex = sectionTypes.findIndex((section) => section.key === activeSection);
  const availableConcepts = getConceptsForSection(activeSection);
  const selectedConcept = availableConcepts.find((concept) => concept.key === activeConcept) ?? availableConcepts[0];

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
            </div>
          </a>
        ))}
      </nav>

      <div className="component-gallery">
        {selectedSection && (
          <section className="component-gallery-section" id={sectionId(selectedSection.key)} key={selectedSection.key}>
            <header className="component-gallery-heading">
              <p className="review-kicker">{formatOrdinal(selectedSectionIndex)} / {formatOrdinal(sectionTypes.length - 1)} · Component</p>
              <h2>{selectedSection.name}</h2>
              <p>{selectedSection.description}</p>
            </header>
            <div className="concept-selector" role="tablist" aria-label="Concept treatments">
              {availableConcepts.map((concept) => (
                <button
                  className="concept-selector-button"
                  key={concept.key}
                  type="button"
                  role="tab"
                  aria-selected={selectedConcept.key === concept.key}
                  aria-controls={`concept-preview-${selectedSection.key}`}
                  style={{ "--variant-color": concept.color } as React.CSSProperties}
                  onClick={() => setActiveConcept(concept.key)}
                >
                  <span>{concept.name}</span>
                  <small>{concept.kind === "refined" ? "Refined" : "Original"}</small>
                </button>
              ))}
            </div>
            <article className="component-variant" id={`concept-preview-${selectedSection.key}`} role="tabpanel" aria-label={`${selectedConcept.name} ${selectedSection.name} concept`}>
              <div className="component-variant-label" style={{ "--variant-color": selectedConcept.color } as React.CSSProperties}>
                <span>{selectedConcept.name}</span>
                <span>{selectedConcept.kind === "refined" ? "Refined treatment" : "Original treatment"}</span>
              </div>
              <ConceptPreview concept={selectedConcept} section={selectedSection.key} />
            </article>
          </section>
        )}
      </div>
    </main>
  );
}
