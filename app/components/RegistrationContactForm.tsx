"use client";

import { useState } from "react";

export function RegistrationContactForm() {
  const [status, setStatus] = useState("Review-only form. No message is sent.");

  return (
    <section className="registration-contact-form component-preview">
      <div>
        <p>Registration inquiry</p>
        <h2>Convert interest into a clear request.</h2>
        <span>Use this component for enrollment questions, class interest, or contact follow-up.</span>
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          Name
          <input type="text" name="name" placeholder="Student name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="student@example.com" />
        </label>
        <label>
          Interest
          <select name="interest" defaultValue="class">
            <option value="class">Find a class</option>
            <option value="camp">Mission camp</option>
            <option value="contact">Talk to a coordinator</option>
          </select>
        </label>
        <button type="button" onClick={() => setStatus("Sample inquiry state shown for review.")}>Submit inquiry</button>
        <p aria-live="polite">{status}</p>
      </form>
    </section>
  );
}
