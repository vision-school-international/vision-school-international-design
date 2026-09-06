"use client";

import { useState } from "react";
import { resolvePageSection } from "./concepts/conceptRegistry";
import { sectionTypes } from "./concepts/componentCatalog";
import { SectionThumbnail } from "./concepts/SectionThumbnail";
import { createPage, getPage, getPages, type RegisteredPage } from "./pageRegistry";

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

  return (
    <main className="pages-workspace">
      <header className="studio-header">
        <a className="studio-brand" href="/" aria-label="Return to the component catalog">
          <img className="review-logo" src="/images/icp-logo.webp" alt="ICP International" />
          <span className="studio-brand-text">
            <strong>Vision School International</strong>
            <em>Component Review &amp; Page Architecture</em>
          </span>
        </a>
        <nav className="studio-tabs" aria-label="Workspace switcher">
          <a className="studio-tab" href="/">Catalog</a>
          <a className="studio-tab is-active" href="/pages" aria-current="page">Pages</a>
        </nav>
      </header>

      <section className="pages-intro">
        <p>Composition</p>
        <h1>Composed Pages</h1>
        <p className="pages-intro-summary">
          Assemble complete page journeys from registered section concepts to review pacing, visual hierarchy, and story flow.
        </p>
      </section>

      <section className={`pages-create-index${isCreating ? " is-flipped" : ""}`} aria-label="Assemble new page">
        <div className="pages-create-card">
          <button className="component-index-card pages-card-button pages-create-card__front" type="button" style={{ "--component-color": "#1769c2" } as React.CSSProperties} onClick={() => setIsCreating(true)}>
            <div className="component-index-image">
              <span>+</span>
              <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
                <rect x="25" y="20" width="190" height="100" rx="3" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeDasharray="4 4" fill="rgba(255,255,255,0.06)" />
                <circle cx="120" cy="65" r="18" fill="rgba(255,255,255,0.15)" stroke="#fff" strokeWidth="1.5" />
                <line x1="120" y1="56" x2="120" y2="74" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <line x1="111" y1="65" x2="129" y2="65" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <rect x="90" y="94" width="60" height="5" rx="1" fill="rgba(255,255,255,0.6)" />
              </svg>
              <b>Assemble page <span aria-hidden="true">↘</span></b>
            </div>
            <div className="component-index-copy">
              <p>Page Builder</p>
              <h2>Assemble page</h2>
              <span>Create a new composed page route.</span>
            </div>
          </button>

          <form
            className="pages-create-card__back"
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
            <div>
              <button type="button" onClick={() => setIsCreating(false)}>Cancel</button>
              <button type="submit" disabled={!canCreate}>Create Page</button>
            </div>
          </form>
        </div>
      </section>

      {pages.length === 0 ? (
        <div className="pages-empty-state">
          <p>No composed pages registered yet. Use <strong>Assemble page</strong> above to build a custom page sequence.</p>
        </div>
      ) : (
        <nav className="component-index" aria-label="Registered pages">
          {pages.map((page, index) => {
            const firstEntry = page.entries[0];
            const firstSection = firstEntry && resolvePageSection(firstEntry);

            return (
              <a
                className="component-index-card"
                key={page.key}
                href={`/pages/${page.key}`}
                aria-label={`View ${page.name}`}
                style={{ "--component-color": firstSection?.concept.color ?? "var(--review-ink)" } as React.CSSProperties}
              >
                <div
                  className="component-index-image"
                  style={{ backgroundColor: firstSection?.concept.color ?? "var(--review-ink)" }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {firstEntry ? (
                    <SectionThumbnail section={firstEntry.section} color={firstSection?.concept.color} />
                  ) : (
                    <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
                      <rect x="25" y="20" width="190" height="100" rx="3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="3 3" fill="rgba(255,255,255,0.06)" />
                      <rect x="80" y="55" width="80" height="8" rx="1" fill="rgba(255,255,255,0.7)" />
                      <rect x="90" y="70" width="60" height="5" rx="1" fill="rgba(255,255,255,0.3)" />
                    </svg>
                  )}
                  <b>View page <span aria-hidden="true">↘</span></b>
                </div>
                <div className="component-index-copy">
                  <p>Composed Page</p>
                  <h2>{page.name}</h2>
                  <span>{page.entries.length} {page.entries.length === 1 ? "registered section" : "registered sections"}</span>
                  {page.entries.length > 0 && (
                    <ul className="component-index-points" aria-label={`${page.name} sections`}>
                      {page.entries.map((entry, entryIdx) => {
                        const section = sectionTypes.find((candidate) => candidate.key === entry.section);
                        return section ? <li key={`${entry.section}-${entryIdx}`}>{section.name}</li> : null;
                      })}
                    </ul>
                  )}
                </div>
              </a>
            );
          })}
        </nav>
      )}
    </main>
  );
}
