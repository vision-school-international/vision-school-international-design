"use client";

import { useState } from "react";

export type ClassFinderLayout = "focused" | "comparison" | "decision";

export type ClassFinderItem = {
  audience: string;
  place: string;
  format: string;
  term: string;
  rhythm: string;
  note: string;
};

export type ClassFinderDesign = {
  layout: ClassFinderLayout;
  eyebrow: string;
  title: string;
  summary: string;
  metricLabel: string;
  actionLabel: string;
  items: readonly ClassFinderItem[];
};

const wrapIndex = (value: number, length: number) => (value + length) % length;

export function ClassFinderCarousel({
  design,
}: {
  design: ClassFinderDesign;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { items } = design;
  const activeClass = items[activeIndex] ?? items[0];

  if (!activeClass) {
    return null;
  }

  const goToIndex = (index: number) => setActiveIndex(wrapIndex(index, items.length));
  const previousClass = () => goToIndex(activeIndex - 1);
  const nextClass = () => goToIndex(activeIndex + 1);

  return (
    <section className={`class-finder class-finder--${design.layout}`} aria-label={design.title}>
      <div className="class-finder__intro">
        <p>{design.eyebrow}</p>
        <h2>{design.title}</h2>
        <span>{design.summary}</span>
      </div>

      <div className="class-finder__viewport" aria-live="polite">
        <article className="class-finder__active">
          <span>{activeClass.audience}</span>
          <h3>{activeClass.place}</h3>
          <dl>
            <div><dt>Format</dt><dd>{activeClass.format}</dd></div>
            <div><dt>Term</dt><dd>{activeClass.term}</dd></div>
            <div><dt>{design.metricLabel}</dt><dd>{activeClass.rhythm}</dd></div>
          </dl>
          <p>{activeClass.note}</p>
          <a href="#section-classes">{design.actionLabel} <span aria-hidden="true">↗</span></a>
        </article>

        <ol className="class-finder__rail" aria-label="Class options">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <li key={item.place}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => goToIndex(index)}
                >
                  <span>{item.audience}</span>
                  <strong>{item.place}</strong>
                  <small>{item.format} · {item.term}</small>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="class-finder__controls" aria-label="Class carousel controls">
        <button type="button" onClick={previousClass}>Previous class</button>
        <div className="class-finder__dots" aria-label="Carousel position">
          {items.map((item, index) => (
            <button
              key={item.place}
              type="button"
              aria-label={`Show ${item.place}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
        <button type="button" onClick={nextClass}>Next class</button>
      </div>
    </section>
  );
}
