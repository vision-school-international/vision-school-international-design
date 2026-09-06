"use client";

import { useState } from "react";
import { journeyStages, sectionTypes } from "./concepts/componentCatalog";
import { createPage, getPage, getPages, removePage, type RegisteredPage } from "./pageRegistry";

const slugify = (value: string) => value
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

export default function Pages() {
  const [pages, setPages] = useState<readonly RegisteredPage[]>(getPages);
  const [isCreating, setIsCreating] = useState(false);
  const [name, setName] = useState("");
  const [key, setKey] = useState("");
  const [routeEdited, setRouteEdited] = useState(false);
  const pageKey = key.trim();
  const canCreate = name.trim().length > 0
    && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(pageKey)
    && !getPage(pageKey);

  const create = () => {
    if (!canCreate) return;

    createPage({ key: pageKey, name: name.trim(), entries: [] });
    setPages(getPages());
    setName("");
    setKey("");
    setRouteEdited(false);
    setIsCreating(false);
  };

  const destroy = (targetKey: string) => {
    removePage(targetKey);
    setPages(getPages());
  };

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
          <a className="studio-tab" href="/">Sections</a>
          <a className="studio-tab is-active" href="/pages" aria-current="page">Pages</a>
        </nav>
      </header>

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
                  create();
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
                          <span className="composer-page-card-stage">Opens in Stage {stageOfFirst.number} · {stageOfFirst.name}</span>
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
                          onClick={() => destroy(page.key)}
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
                          const stage = journeyStages.find((candidate) => candidate.sections.includes(section.key));

                          return (
                            <li key={`${entry.section}-${entryIdx}`} className="composer-sequence-item">
                              <span className="composer-sequence-index">{String(entryIdx + 1).padStart(2, "0")}</span>
                              <span className="composer-sequence-dot" aria-hidden="true" style={{ background: section.color }} />
                              <span className="composer-sequence-name">{section.name}</span>
                              {stage && <span className="composer-sequence-stage">{stage.number}</span>}
                            </li>
                          );
                        })}
                      </ol>
                    ) : (
                      <p className="composer-page-card-empty">No sections added yet. Open the page to insert its first section.</p>
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