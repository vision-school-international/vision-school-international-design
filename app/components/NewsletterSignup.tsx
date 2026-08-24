"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [message, setMessage] = useState("Review-only signup. No subscription is created.");

  return (
    <section className="newsletter-signup component-preview">
      <div>
        <p>Stay connected</p>
        <h2>Keep interested visitors in reach.</h2>
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          Email address
          <input type="email" placeholder="email@example.com" />
        </label>
        <button type="button" onClick={() => setMessage("Sample signup state shown for review.")}>Sign up</button>
      </form>
      <span aria-live="polite">{message}</span>
    </section>
  );
}
