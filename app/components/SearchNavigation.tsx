"use client";

import { useMemo, useState } from "react";

const navItems = [
  { label: "About", description: "What Vision School is and who it is for.", href: "#section-about" },
  { label: "Missions", description: "Course themes, mission teaching, and formation.", href: "#section-course" },
  { label: "Branches", description: "Find class options by location and term.", href: "#section-classes" },
  { label: "Events", description: "Mission camp videos and related gatherings.", href: "#section-videos" },
] as const;

export function SearchNavigation() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!normalizedQuery) {
      return navItems;
    }

    return navItems.filter((item) =>
      `${item.label} ${item.description}`.toLowerCase().includes(normalizedQuery),
    );
  }, [normalizedQuery]);

  return (
    <header className="search-nav component-preview">
      <a className="search-nav__brand" href="#component-menu" aria-label="Show all Vision School component types">
        <span className="search-nav__logo">V</span>
        <span>Vision School <small>International</small></span>
      </a>

      <div className="search-nav__search" role="search">
        <label htmlFor="site-search">Search site content</label>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search classes, missions, events..."
        />
      </div>

      <nav className="search-nav__links" aria-label="Searchable navigation">
        {results.map((item) => (
          <a key={item.href} href={item.href}>
            <span>{item.label}</span>
            <small>{item.description}</small>
          </a>
        ))}
        {results.length === 0 && <p>No matching site sections.</p>}
      </nav>

      <a className="search-nav__cta" href="#section-classes">Register <span aria-hidden="true">↗</span></a>
    </header>
  );
}
