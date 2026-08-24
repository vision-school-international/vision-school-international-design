"use client";

import { useState } from "react";

const faqs = [
  ["Who is Vision School for?", "Believers who want to understand mission and discern a faithful next step."],
  ["How long is the course?", "Use this answer for the approved course length, rhythm, and attendance expectations."],
  ["How do I register?", "Point users to the approved class finder, inquiry form, or registration system."],
] as const;

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-accordion component-preview">
      <header>
        <p>FAQ</p>
        <h2>Answer practical questions clearly.</h2>
      </header>
      <div>
        {faqs.map(([question, answer], index) => {
          const isOpen = index === openIndex;

          return (
            <article key={question}>
              <button type="button" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                <span>{question}</span>
                <b aria-hidden="true">{isOpen ? "-" : "+"}</b>
              </button>
              {isOpen && <p>{answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
