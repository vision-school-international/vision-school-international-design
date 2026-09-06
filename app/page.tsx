"use client";

import { useEffect, useState } from "react";
import { concepts, getConceptsForSection, type ConceptKey } from "./concepts/conceptRegistry";
import { journeyStages, sectionTypes, type ComponentSection } from "./concepts/componentCatalog";
import { SectionThumbnail } from "./concepts/SectionThumbnail";

const sectionFromKey = (key: string): ComponentSection | undefined =>
  sectionTypes.find((section) => section.key === key)?.key;

export default function Home() {
  const [activeSection, setActiveSection] = useState<ComponentSection>(() => {
    if (typeof window === "undefined") {
      return sectionTypes[0].key;
    }
    const hash = window.location.hash.replace("#section-", "");
    return sectionFromKey(hash) ?? sectionTypes[0].key;
  });
  const [activeConcept, setActiveConcept] = useState<ConceptKey>(concepts[0].key);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const selectedSection = sectionTypes.find((section) => section.key === activeSection);
  const availableConcepts = getConceptsForSection(activeSection);
  const selectedConcept = availableConcepts.find((concept) => concept.key === activeConcept) ?? availableConcepts[0];
  const selectedTreatment = selectedSection && selectedConcept ? selectedConcept.sections[selectedSection.key] : undefined;

  const activeStage = journeyStages.find((stage) => stage.sections.includes(activeSection));

  return (
    <main className="studio-shell">
      <header className="studio-header">
        <a className="studio-brand" href="/" aria-label="Return to the component catalog">
          <img className="review-logo" src="/images/icp-logo.webp" alt="ICP International" />
          <span className="studio-brand-text">
            <strong>Vision School International</strong>
            <em>Component Review &amp; Page Architecture</em>
          </span>
        </a>
        <nav className="studio-tabs" aria-label="Workspace switcher">
          <a className="studio-tab is-active" href="/" aria-current="page">Catalog</a>
          <a className="studio-tab" href="/pages">Pages</a>
        </nav>
      </header>

      <div className="studio-layout">
        <aside className="studio-rail" aria-label="Component stages">
          {journeyStages.map((stage) => (
            <div className="studio-stage-group" key={stage.number}>
              <p className="studio-stage-label">{stage.number}. {stage.name}</p>
              <ul className="studio-stage-list">
                {stage.sections.map((sectionKey) => {
                  const section = sectionTypes.find((entry) => entry.key === sectionKey);
                  if (!section) return null;
                  const count = getConceptsForSection(section.key).length;
                  const isActive = section.key === activeSection;

                  return (
                    <li key={section.key}>
                      <button
                        type="button"
                        className={`studio-rail-item${isActive ? " is-active" : ""}`}
                        style={{ "--component-color": section.color } as React.CSSProperties}
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => {
                          setActiveSection(section.key);
                          setActiveConcept(concepts[0].key);
                        }}
                      >
                        <span className="studio-rail-dot" aria-hidden="true" />
                        <span className="studio-rail-name">{section.name}</span>
                        {count > 0 && <span className="studio-rail-count">{count}</span>}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </aside>

        <section className="studio-stage" aria-label="Selected section review">
          {selectedSection && (
            <>
              <header className="studio-stage-header">
                <p className="review-kicker">
                  Stage {activeStage?.number} · {activeStage?.name}
                </p>
                <h2 className="studio-stage-title">{selectedSection.name}</h2>
                <p className="studio-stage-description">{selectedSection.description}</p>
              </header>

              {selectedConcept && selectedTreatment ? (
                <>
                  <div className="studio-concept-tabs" role="tablist" aria-label="Concept options">
                    {availableConcepts.map((concept, index) => (
                      <button
                        className={`studio-concept-tab${selectedConcept.key === concept.key ? " is-active" : ""}`}
                        key={concept.key}
                        type="button"
                        role="tab"
                        aria-selected={selectedConcept.key === concept.key}
                        style={{ "--concept-color": concept.color } as React.CSSProperties}
                        onClick={() => setActiveConcept(concept.key)}
                      >
                        <span>Concept {String(index + 1).padStart(2, "0")} · {concept.name}</span>
                        {concept.selectorLabel && <small>{concept.selectorLabel}</small>}
                      </button>
                    ))}
                  </div>

                  <article
                    className="studio-preview"
                    id={`concept-preview-${selectedSection.key}`}
                    role="tabpanel"
                    aria-label={`${selectedConcept.name} ${selectedSection.name} concept`}
                  >
                    <div
                      className="studio-preview-bar"
                      style={{ "--concept-color": selectedConcept.color } as React.CSSProperties}
                    >
                      <span>{selectedConcept.name}</span>
                      {selectedConcept.previewLabel && <small>{selectedConcept.previewLabel}</small>}
                    </div>
                    <div className="studio-preview-body">
                      {selectedTreatment({ section: selectedSection.key })}
                    </div>
                  </article>
                </>
              ) : (
                <p className="studio-empty">No design concepts registered for this section yet.</p>
              )}

              <footer className="studio-anatomy">
                <span className="studio-anatomy-label">Anatomy</span>
                <span className="studio-anatomy-items">{selectedSection.anatomy}</span>
                <span className="studio-anatomy-thumb" aria-hidden="true">
                  <SectionThumbnail section={selectedSection.key} color={selectedSection.color} />
                </span>
              </footer>
            </>
          )}
        </section>
      </div>
    </main>
  );
}