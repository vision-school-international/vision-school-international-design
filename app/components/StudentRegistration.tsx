import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { countryName, emptyStudentDraft, findOfferings, money, selectedOffering, validateStudentStep, type Country, type StudentDraft, type Term } from "./registration/registrationModel";

const steps = ["Your class", "Your details", "Payment option", "Review"];

export function StudentRegistration({ initialDraft = emptyStudentDraft }: { initialDraft?: StudentDraft }) {
  const [draft, setDraft] = useState<StudentDraft>({ ...initialDraft });
  const [step, setStep] = useState(0);
  const [furthest, setFurthest] = useState(0);
  const [complete, setComplete] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const heading = useRef<HTMLHeadingElement>(null);
  const errorBox = useRef<HTMLDivElement>(null);
  const id = useId();
  const offering = selectedOffering(draft);
  const options = findOfferings(draft.country, draft.term, draft.program);

  useEffect(() => { if (step > 0 || complete) heading.current?.focus(); }, [step, complete]);
  useEffect(() => { if (errors.length) errorBox.current?.focus(); }, [errors]);

  function update(fields: Partial<StudentDraft>) {
    setDraft(previous => ({ ...previous, ...fields, acknowledged: false }));
    setErrors([]);
  }
  function changeClassContext(fields: Partial<StudentDraft>) {
    update({ ...fields, offeringId: "", payment: "" });
    setFurthest(0);
  }
  function goTo(next: number) { setStep(next); setErrors([]); }
  function continueFlow(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = step === 3
      ? steps.flatMap((_, index) => validateStudentStep(index, draft))
      : validateStudentStep(step, draft);
    if (found.length) { setErrors(found); return; }
    if (step === 3) setComplete(true);
    else { setStep(step + 1); setFurthest(Math.max(furthest, step + 1)); }
  }

  return (
    <section className="student-registration" aria-label="Student registration design prototype">
      <div className="sr-demo-note"><span className="sr-demo-dot" aria-hidden="true" /> Design prototype · Fictional data only · Nothing is submitted or charged</div>
      <header className="sr-brand-row"><strong>Vision School</strong><span>Student registration</span></header>
      {complete ? (
        <div className="sr-complete">
          <span className="sr-complete-mark" aria-hidden="true">✓</span>
          <p className="sr-eyebrow">Sample complete</p>
          <h2 ref={heading} tabIndex={-1}>You’ve finished the preview.</h2>
          <p>No place was reserved, no payment was taken, and no confirmation email was sent.</p>
          <div className="sr-complete-summary"><strong>{offering?.branch} · {offering?.program}</strong><span>{draft.term} · {countryName(draft.country)}</span><span>{draft.name.trim()} · {draft.email.trim()}</span></div>
          <div className="sr-actions"><button type="button" className="sr-primary" onClick={() => { setComplete(false); goTo(3); }}>Review sample again</button><button type="button" className="sr-secondary" onClick={() => { setDraft({ ...emptyStudentDraft }); setComplete(false); setFurthest(0); goTo(0); }}>Start a new sample</button></div>
        </div>
      ) : (
        <>
          <nav className="sr-step-nav" aria-label="Registration steps"><ol>{steps.map((label, index) => <li key={label}><button type="button" disabled={index > furthest} aria-current={step === index ? "step" : undefined} onClick={() => goTo(index)}><span className="sr-step-number">{index < step ? "✓" : index + 1}</span><span>{label}</span></button></li>)}</ol></nav>
          <div className="sr-layout">
            <form noValidate onSubmit={continueFlow} className="sr-form">
              <p className="sr-eyebrow">Step {step + 1} of {steps.length}</p>
              <h2 ref={heading} tabIndex={-1}>{["Choose your class.", "A little about you.", "Choose a payment option.", "Check your details."][step]}</h2>
              <p className="sr-intro">{["Explore the sample options below. These are not published classes.", "Use fictional details only. This proposed field list still needs team approval.", "These sample prices and plans are for design review, not approved fees.", "You can change any section before completing this sample."][step]}</p>
              {errors.length > 0 && <div className="sr-error" ref={errorBox} tabIndex={-1} role="alert"><strong>Please check the following:</strong><ul>{errors.map(error => <li key={error}>{error}</li>)}</ul></div>}

              {step === 0 && <>
                <div className="sr-field-grid">
                  <label><span>Country</span><select value={draft.country} onChange={event => changeClassContext({ country: event.target.value as Country })}><option value="US">United States · USD</option><option value="CA">Canada · CAD</option></select></label>
                  <label><span>Term</span><select value={draft.term} onChange={event => changeClassContext({ term: event.target.value as Term })}><option>Fall 2026</option><option>Spring 2027</option></select></label>
                </div>
                <label className="sr-field"><span>Program</span><select value={draft.program} onChange={event => changeClassContext({ program: event.target.value })}><option value="">All sample programs</option><option>Adults</option><option>Young adults</option><option>Mission Camp</option></select></label>
                <fieldset className="sr-class-choices"><legend>Choose a sample class <span>(required)</span></legend>{options.length ? options.map(option => <label key={option.id} className={`sr-class-choice${draft.offeringId === option.id ? " is-selected" : ""}`}><input type="radio" name={`${id}-offering`} value={option.id} checked={draft.offeringId === option.id} onChange={() => { update({ offeringId: option.id, payment: "" }); setFurthest(1); }} /><span><strong>{option.branch}</strong><span>{option.city}</span><small>{option.program} · {option.term}</small></span><span className="sr-sample-tag">Sample</span></label>) : <div className="sr-empty"><strong>No sample classes match.</strong><p>Try another program or term. This does not indicate real class availability.</p><button type="button" className="sr-text-button" onClick={() => changeClassContext({ program: "" })}>Show all programs</button></div>}</fieldset>
                <p className="sr-helper">{draft.country === "US" && "DC/Maryland includes Frederick. DC/Virginia is a separate branch. "}Dates, venues, and eligibility still need approval.</p>
              </>}

              {step === 1 && <>
                <button type="button" className="sr-sample-fill" onClick={() => update({ name: "Alex Rivera", email: "alex.rivera@example.com" })}>Use sample details <span aria-hidden="true">↗</span></button>
                <label className="sr-field"><span>Full name <small>(required)</small></span><input name="sample-name" autoComplete="off" maxLength={100} value={draft.name} onChange={event => update({ name: event.target.value })} placeholder="e.g. Alex Rivera" required /></label>
                <label className="sr-field"><span>Email address <small>(required)</small></span><input name="sample-email" type="email" autoComplete="off" maxLength={160} value={draft.email} onChange={event => update({ email: event.target.value })} placeholder="alex.rivera@example.com" required /><small className="sr-helper">No email is sent. Please don’t enter real personal information.</small></label>
                <div className="sr-pending"><strong>For team review</strong><p>Additional questions, consent, age/guardian requirements, and policies will come from the approved registration form. They are not assumed here.</p></div>
              </>}

              {step === 2 && offering && <>
                <fieldset className="sr-payment-choices"><legend>Sample payment option <span>(required)</span></legend>
                  <label aria-label="Pay in full (sample option)" className={`sr-payment-choice${draft.payment === "full" ? " is-selected" : ""}`}><input type="radio" name={`${id}-payment`} checked={draft.payment === "full"} onChange={() => update({ payment: "full" })} /><span><strong>Pay in full</strong><span>{money(offering.fee, offering.currency)}</span><small>Illustrative amount · No charge</small></span></label>
                  <label aria-label="Split into two payments (sample option)" className={`sr-payment-choice${draft.payment === "installments" ? " is-selected" : ""}`}><input type="radio" name={`${id}-payment`} checked={draft.payment === "installments"} onChange={() => update({ payment: "installments" })} /><span><strong>Split into two payments</strong><span>2 × {money(offering.fee / 2, offering.currency)}</span><small>Proposed option · Rules and dates to be agreed</small></span></label>
                </fieldset>
                <div className="sr-pending"><strong>No payment details needed</strong><p>There is no checkout or card collection in this prototype. Fees, plans, refunds, and the payment provider need approval before a live build.</p></div>
              </>}

              {step === 3 && offering && <>
                <div className="sr-review-block"><header><h3>Your class</h3><button type="button" className="sr-text-button" onClick={() => goTo(0)}>Change class</button></header><strong>{offering.branch}</strong><p>{offering.city} · {offering.program}</p><p>{offering.term} · {countryName(offering.country)}</p></div>
                <div className="sr-review-block"><header><h3>Your details</h3><button type="button" className="sr-text-button" onClick={() => goTo(1)}>Change details</button></header><p>{draft.name.trim()}</p><p>{draft.email.trim()}</p></div>
                <div className="sr-review-block"><header><h3>Sample payment</h3><button type="button" className="sr-text-button" onClick={() => goTo(2)}>Change payment</button></header><p>{draft.payment === "installments" ? `2 × ${money(offering.fee / 2, offering.currency)}` : money(offering.fee, offering.currency)}</p><p className="sr-helper">Illustrative total: {money(offering.fee, offering.currency)}. Nothing is charged.</p></div>
                <label className="sr-acknowledgment"><input type="checkbox" checked={draft.acknowledged} onChange={event => { setDraft(previous => ({ ...previous, acknowledged: event.target.checked })); setErrors([]); }} /><span>I understand this is a design prototype, not a real registration.</span></label>
              </>}

              <div className="sr-actions">{step > 0 && <button type="button" className="sr-secondary" onClick={() => goTo(step - 1)}>Back</button>}<button type="submit" className="sr-primary">{step === 3 ? "Complete sample registration" : "Continue"}<span aria-hidden="true">→</span></button></div>
              <p className="sr-privacy-note">Preview only. Details stay in memory and are cleared when you leave or reload this preview.</p>
            </form>

            <aside className="sr-summary" aria-label="Your sample registration summary">
              <p className="sr-eyebrow">Your selection</p><h3>{offering ? offering.branch : "Find your place."}</h3>
              <dl><div><dt>Country</dt><dd>{countryName(draft.country)}</dd></div><div><dt>Term</dt><dd>{draft.term}</dd></div><div><dt>Program</dt><dd>{offering?.program ?? "Not selected"}</dd></div><div><dt>Location</dt><dd>{offering?.city ?? "Not selected"}</dd></div></dl>
              <div className="sr-summary-total"><span>Illustrative fee</span><strong>{offering ? money(offering.fee, offering.currency) : "Choose a class"}</strong><small>{offering ? "Sample price · Not an approved fee" : "No actual class availability is shown"}</small></div>
              <p>Class dates, venues, program eligibility, and final fees will be confirmed by the team before registration goes live.</p>
            </aside>
          </div>
        </>
      )}
    </section>
  );
}
