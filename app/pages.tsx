"use client";

import { useEffect, useState } from "react";
import { getConceptsForSection, resolvePageSection } from "./concepts/conceptRegistry";
import { journeyStages, sectionTypes, type ComponentSection } from "./concepts/componentCatalog";
import { addEntry, createPage, getPages, removeEntry, removePage, type RegisteredPage } from "./pageRegistry";
import StudioHeader from "./components/StudioHeader";

const slugify = (value: string) => value
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

export default function Pages() {
  const [pages, setPages] = useState<readonly RegisteredPage[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [name, setName] = useState("");
  const [key, setKey] = useState("");
  const [routeEdited, setRouteEdited] = useState(false);
  const [addingToPageKey, setAddingToPageKey] = useState<string>();
  const [section, setSection] = useState<ComponentSection>(sectionTypes[0].key);
  const [conceptKey, setConceptKey] = useState("");
  const [existingKeys, setExistingKeys] = useState<ReadonlySet<string>>(new Set());
  const sectionConcepts = getConceptsForSection(section);
  const concept = sectionConcepts.find((candidate) => candidate.key === conceptKey) ?? sectionConcepts[0];
  const pageKey = key.trim();
  const canCreate = name.trim().length > 0
    && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(pageKey)
    && !existingKeys.has(pageKey);

  const refresh = async () => {
    const next = await getPages();
    setPages(next);
    setExistingKeys(new Set(next.map((page) => page.key)));
  };

  useEffect(() => {
    void (async () => {
      const next = await getPages();
      setPages(next);
      setExistingKeys(new Set(next.map((page) => page.key)));
    })();
  }, []);

  const create = async () => {
    if (!canCreate) return;

    await createPage({ key: pageKey, name: name.trim(), entries: [] });
    await refresh();
    setName("");
    setKey("");
    setRouteEdited(false);
    setIsCreating(false);
  };

  const destroy = async (targetKey: string) => {
    await removePage(targetKey);
    await refresh();
  };

  const drop = async (targetKey: string, index: number) => {
    await removeEntry(targetKey, index);
    await refresh();
  };

  const openAdd = (targetKey: string) => {
    setAddingToPageKey(targetKey);
    setSection(sectionTypes[0].key);
    setConceptKey("");
  };

  const insert = async (targetKey: string) => {
    if (!concept) return;
    await addEntry(targetKey, { section, conceptKey: concept.key });
    await refresh();
    setAddingToPageKey(undefined);
  };

  return (
    <main className="studio-shell">
      <StudioHeader active="pages" />

      <div className="composer-layout">
        <aside className="composer-rail" aria-label="Composed pages">
          <p className="studio-stage-label">Composed Pages</p>
          <ul className="studio-stage-list">
            {pages.map((page) => (
              <li key={page.key}>
                <a
                  className="studio-rail-item"
                  href={`/pages/${page.key}`}
                  aria-label={`Open ${page.name}`}
                >
                  <span className="studio-rail-dot" aria-hidden="true" style={{ background: "#66afe6" }} />
                  <span className="studio-rail-name">{page.name}</span>
                  <span className="studio-rail-count">{page.entries.length}</span>
                </a>
              </li>
            ))}
            {pages.length === 0 && (
              <li className="composer-rail-empty">No pages yet. Assemble one to begin.</li>
            )}
          </ul>
        </aside>

        <section className="composer-stage">
          <header className="composer-stage-header">
            <p className="review-kicker">Page Composer · {pages.length} {pages.length === 1 ? "Page" : "Pages"}</p>
            <h2 className="studio-stage-title">Assemble a page journey</h2>
            <p className="studio-stage-description">
              Chain registered section concepts into a full page sequence. Build the page in the order a visitor reads it, then review pacing and flow in the page view.
            </p>
          </header>

          <div className="composer-create">
            {isCreating ? (
              <form
                className="composer-create-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  void create();
                }}
              >
                <label>
                  <span>Page Title</span>
                  <input
                    value={name}
                    required
                    placeholder="e.g. Fall 2026 Overview"
                    onChange={(event) => {
                      const nextName = event.target.value;
                      setName(nextName);
                      if (!routeEdited) setKey(slugify(nextName));
                    }}
                  />
                </label>
                <label>
                  <span>URL Route Slug</span>
                  <input value={key} required onChange={(event) => { setRouteEdited(true); setKey(event.target.value); }} placeholder="e.g. fall-2026" />
                </label>
                <div className="composer-create-actions">
                  <button type="button" onClick={() => setIsCreating(false)}>Cancel</button>
                  <button type="submit" disabled={!canCreate}>Create Page</button>
                </div>
              </form>
            ) : (
              <button type="button" className="composer-create-trigger" onClick={() => setIsCreating(true)}>
                + Assemble New Page
              </button>
            )}
          </div>

          {pages.length === 0 ? (
            <div className="pages-empty-state">
              <h2>Empty Workspace</h2>
              <p>No composed pages registered yet. Use <strong>Assemble New Page</strong> above to build a custom page sequence.</p>
            </div>
          ) : (
            <div className="composer-pages">
              {pages.map((page) => {
                const stageOfFirst = page.entries[0]
                  ? journeyStages.find((stage) => stage.sections.includes(page.entries[0].section))
                  : undefined;

                return (
                  <article className="composer-page-card" key={page.key}>
                    <header className="composer-page-card-header">
                      <div className="composer-page-card-meta">
                        <h3>{page.name}</h3>
                        <span className="composer-page-card-route">/{page.key}</span>
                        {stageOfFirst && (
                          <span className="composer-page-card-stage">Opens in {stageOfFirst.name}</span>
                        )}
                      </div>
                      <div className="composer-page-card-actions">
                        <a className="composer-page-card-open" href={`/pages/${page.key}`} aria-label={`Open ${page.name} in page view`}>
                          Open Page →
                        </a>
                        <button
                          type="button"
                          className="composer-page-card-delete"
                          aria-label={`Delete ${page.name}`}
                          onClick={() => void destroy(page.key)}
                        >
                          ✕
                        </button>
                      </div>
                    </header>

                    {page.entries.length > 0 ? (
                      <ol className="composer-page-card-sequence">
                        {page.entries.map((entry, entryIdx) => {
                          const section = sectionTypes.find((candidate) => candidate.key === entry.section);
                          if (!section) return null;
                          const resolved = resolvePageSection(entry);

                          return (
                            <li key={`${entry.section}-${entryIdx}`} className="composer-sequence-item">
                              <span className="composer-sequence-index">{String(entryIdx + 1).padStart(2, "0")}</span>
                              <span className="composer-sequence-dot" aria-hidden="true" style={{ background: section.color }} />
                              <span className="composer-sequence-name">{section.name}</span>
                              {resolved && <span className="composer-sequence-concept">{resolved.concept.name}</span>}
                              <button
                                type="button"
                                className="composer-sequence-remove"
                                aria-label={`Remove ${section.name} from ${page.name}`}
                                onClick={() => void drop(page.key, entryIdx)}
                              >
                                ✕
                              </button>
                            </li>
                          );
                        })}
                      </ol>
                    ) : (
                      <p className="composer-page-card-empty">No sections in sequence yet.</p>
                    )}

                    {addingToPageKey === page.key && concept ? (
                      <div className="composer-add-form">
                        <label>
                          <span>Section</span>
                          <select value={section} onChange={(event) => { setSection(event.target.value as ComponentSection); setConceptKey(""); }}>
                            {sectionTypes.map((type) => <option key={type.key} value={type.key}>{type.name}</option>)}
                          </select>
                        </label>
                        <label>
                          <span>Concept</span>
                          <select value={concept.key} onChange={(event) => setConceptKey(event.target.value)}>
                            {sectionConcepts.map((candidate) => <option key={candidate.key} value={candidate.key}>{candidate.name}</option>)}
                          </select>
                        </label>
                        <div className="composer-add-actions">
                          <button type="button" onClick={() => setAddingToPageKey(undefined)}>Cancel</button>
                          <button type="button" onClick={() => void insert(page.key)}>Add Section</button>
                        </div>
                      </div>
                    ) : (
                      <button type="button" className="composer-add-trigger" onClick={() => openAdd(page.key)}>
                        + Add Section
                      </button>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}