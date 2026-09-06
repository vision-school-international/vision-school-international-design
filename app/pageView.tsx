import { Fragment, useState } from "react";
import { resolvePageSection, getConceptsForSection } from "./concepts/conceptRegistry";
import { sectionId, sectionTypes, type ComponentSection } from "./concepts/componentCatalog";
import { addEntry, getPage, isEditablePage, removeEntry } from "./pageRegistry";

type PageViewProps = {
  pageKey: string;
};

const sectionName = (key: ComponentSection) => sectionTypes.find((type) => type.key === key)?.name ?? key;

export default function PageView({ pageKey }: PageViewProps) {
  const editable = isEditablePage(pageKey);
  const [mutated, setMutated] = useState(false);
  const current = mutated ? getPage(pageKey) : getPage(pageKey);
  const [isAdding, setIsAdding] = useState(false);
  const [section, setSection] = useState<ComponentSection>(sectionTypes[0].key);
  const [conceptKey, setConceptKey] = useState("");
  const sectionConcepts = getConceptsForSection(section);
  const concept = sectionConcepts.find((candidate) => candidate.key === conceptKey) ?? sectionConcepts[0];

  if (!current) return null;

  const add = () => {
    if (!concept) return;
    addEntry(pageKey, { section, conceptKey: concept.key });
    setMutated((value) => !value);
    setIsAdding(false);
  };

  const remove = (index: number) => {
    removeEntry(pageKey, index);
    setMutated((value) => !value);
  };

  return (
    <main id="component-menu" className="studio-shell">
      <header className="studio-header">
        <a className="studio-brand" href="/" aria-label="Return to the component catalog">
          <img className="review-logo" src="/images/icp-logo.webp" alt="ICP International" />
          <span className="studio-brand-text">
            <strong>Vision School International</strong>
            <em>Component Review &amp; Page Architecture</em>
          </span>
        </a>
        <nav className="studio-tabs" aria-label="Workspace switcher">
          <a className="studio-tab" href="/">Sections</a>
          <a className="studio-tab is-active" href="/pages" aria-current="page">Pages</a>
        </nav>
      </header>

      <header className="page-view-header">
        <a className="page-view-back" href="/pages" aria-label="Return to Pages Workspace">
          ← Pages Workspace
        </a>
        <div className="page-view-meta">
          <h1>{current.name}</h1>
          <span>/{current.key}</span>
        </div>
        <a className="page-view-catalog-link" href="/" aria-label="View Section Catalog">
          Section Catalog <span aria-hidden="true">↗</span>
        </a>
      </header>

      {current.entries.length === 0 && (
        <section className="page-view-empty">
          <h2>Empty Page Journey</h2>
          <p>No website sections added to this page yet. Use the action below to insert your first section.</p>
        </section>
      )}

      {current.entries.map((entry, index) => {
        const resolved = resolvePageSection(entry);

        return (
          <Fragment key={`${entry.section}-${index}`}>
            <div id={sectionId(entry.section)} className="page-entry">
              <div
                className="page-entry-bar"
                style={{ "--entry-accent": resolved?.concept.color ?? "#53657e" } as React.CSSProperties}
              >
                <span className="page-entry-bar-dot" aria-hidden="true" />
                <strong>{resolved ? resolved.concept.name : "Unresolved Concept"}</strong>
                <span className="page-entry-bar-section">{sectionName(entry.section)}</span>
                {editable ? (
                  <button
                    type="button"
                    aria-label={`Remove ${resolved ? resolved.concept.name : "unresolved concept"} from ${sectionName(entry.section)}`}
                    onClick={() => remove(index)}
                  >
                    ✕
                  </button>
                ) : null}
              </div>
              {resolved?.render({ section: entry.section })}
            </div>
          </Fragment>
        );
      })}

      {editable ? (
        isAdding && concept ? (
          <div className="page-entry-picker">
            <h2>Add Section to Sequence</h2>
            <div className="page-entry-picker-form">
              <label>
                <span>Section Type</span>
                <select value={section} onChange={(event) => { setSection(event.target.value as ComponentSection); setConceptKey(""); }}>
                  {sectionTypes.map((type) => <option key={type.key} value={type.key}>{type.name}</option>)}
                </select>
              </label>
              <label>
                <span>Design Concept</span>
                <select value={concept.key} onChange={(event) => setConceptKey(event.target.value)}>
                  {sectionConcepts.map((candidate) => <option key={candidate.key} value={candidate.key}>{candidate.name}</option>)}
                </select>
              </label>
              <div className="page-entry-picker-actions">
                <button type="button" onClick={add}>Insert Section</button>
                <button type="button" onClick={() => setIsAdding(false)}>Cancel</button>
              </div>
            </div>
          </div>
        ) : (
          <button type="button" className="page-entry-add" onClick={() => setIsAdding(true)}>+ Add Section to Sequence</button>
        )
      ) : null}
    </main>
  );
}