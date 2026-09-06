import { Fragment, useEffect, useState } from "react";
import { resolvePageSection, getConceptsForSection } from "./concepts/conceptRegistry";
import { sectionId, sectionTypes, type ComponentSection } from "./concepts/componentCatalog";
import { addEntry, getPage, removeEntry, type RegisteredPage } from "./pageRegistry";

type PageViewProps = {
  pageKey: string;
};

const sectionName = (key: ComponentSection) => sectionTypes.find((type) => type.key === key)?.name ?? key;

export default function PageView({ pageKey }: PageViewProps) {
  const [page, setPage] = useState<RegisteredPage>();
  const [isAdding, setIsAdding] = useState(false);
  const [section, setSection] = useState<ComponentSection>(sectionTypes[0].key);
  const [conceptKey, setConceptKey] = useState("");
  const sectionConcepts = getConceptsForSection(section);
  const concept = sectionConcepts.find((candidate) => candidate.key === conceptKey) ?? sectionConcepts[0];

  useEffect(() => {
    let cancelled = false;
    void getPage(pageKey).then((next) => {
      if (!cancelled) setPage(next);
    });
    return () => {
      cancelled = true;
    };
  }, [pageKey]);

  if (!page) return null;

  const add = async () => {
    if (!concept) return;
    await addEntry(pageKey, { section, conceptKey: concept.key });
    setPage(await getPage(pageKey));
    setIsAdding(false);
  };

  const remove = async (index: number) => {
    await removeEntry(pageKey, index);
    setPage(await getPage(pageKey));
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
          <h1>{page.name}</h1>
          <span>/{page.key}</span>
        </div>
        <a className="page-view-catalog-link" href="/" aria-label="View Section Catalog">
          Section Catalog <span aria-hidden="true">↗</span>
        </a>
      </header>

      {page.entries.length === 0 && (
        <section className="page-view-empty">
          <h2>Empty Page Journey</h2>
          <p>No website sections added to this page yet. Use the action below to insert your first section.</p>
        </section>
      )}

      {page.entries.map((entry, index) => {
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
                <button
                  type="button"
                  aria-label={`Remove ${resolved ? resolved.concept.name : "unresolved concept"} from ${sectionName(entry.section)}`}
                  onClick={() => void remove(index)}
                >
                  ✕
                </button>
              </div>
              {resolved?.render({ section: entry.section })}
            </div>
          </Fragment>
        );
      })}

      {isAdding && concept ? (
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
              <button type="button" onClick={() => void add()}>Insert Section</button>
              <button type="button" onClick={() => setIsAdding(false)}>Cancel</button>
            </div>
          </div>
        </div>
      ) : (
        <button type="button" className="page-entry-add" onClick={() => setIsAdding(true)}>+ Add Section to Sequence</button>
      )}
    </main>
  );
}