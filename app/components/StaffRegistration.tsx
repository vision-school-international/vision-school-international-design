import { useEffect, useId, useRef, useState } from "react";
import { countryName, emptyFilters, filterRegistrations, groupPeople, money, paymentLabel, registrationRows, reminderSelection, summarizeRegistrations, type PaymentStatus, type RegistrationFilters, type RegistrationRow } from "./registration/registrationModel";

type Modal = { kind: "registration"; row: RegistrationRow } | { kind: "person"; personId: string } | { kind: "reminder" } | null;
const statuses: PaymentStatus[] = ["paid", "partial", "unpaid", "unknown"];
const branchOptions = [...new Set(registrationRows.map(row => row.offering.branch))].sort();

export function StaffRegistration() {
  const [view, setView] = useState<"registrations" | "people">("registrations");
  const [filters, setFilters] = useState<RegistrationFilters>({ ...emptyFilters });
  const [selected, setSelected] = useState<string[]>([]);
  const [modal, setModal] = useState<Modal>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const id = useId();
  const rows = filterRegistrations(filters);
  const people = groupPeople(rows);
  const totals = summarizeRegistrations(rows);
  const reminder = reminderSelection(rows, selected);
  const unpaid = rows.filter(row => row.status === "unpaid");
  const filterCount = Object.values(filters).filter(Boolean).length;
  const personRows = modal?.kind === "person" ? registrationRows.filter(row => row.personId === modal.personId) : [];
  const detailPerson = modal?.kind === "person" ? personRows[0]?.person : undefined;

  useEffect(() => {
    const node = dialog.current;
    if (modal && node && !node.open) node.showModal();
    if (!modal && node?.open) node.close();
  }, [modal]);

  function filter(field: keyof RegistrationFilters, value: string) {
    setFilters(previous => ({ ...previous, [field]: value }));
    setSelected([]);
  }
  function clearFilters() { setFilters({ ...emptyFilters }); setSelected([]); }
  function toggle(id: string) { setSelected(previous => previous.includes(id) ? previous.filter(item => item !== id) : [...previous, id]); }

  return (
    <section className="staff-registration" aria-label="Staff registration design prototype">
      <div className="rr-demo-note"><span aria-hidden="true">●</span> Design prototype · Fictional people and payments · No live messages or data</div>
      <header className="rr-header"><div><p className="rr-eyebrow">Vision School · Staff workspace</p><h2>Registration overview</h2><p>Find a person. Follow their registrations. See what needs attention.</p></div><span className="rr-access-note">Staff view · Access rules to be approved</span></header>
      <nav className="rr-view-nav" aria-label="Registration workspace views"><button type="button" aria-pressed={view === "registrations"} onClick={() => { setView("registrations"); setSelected([]); }}>Registrations <span>{totals.registrations}</span></button><button type="button" aria-pressed={view === "people"} onClick={() => { setView("people"); setSelected([]); }}>People <span>{totals.people}</span></button></nav>

      <div className="rr-body">
        <form className="rr-filters" aria-label="Filter sample registrations" onSubmit={event => event.preventDefault()}>
          <label className="rr-search"><span>Search</span><input type="search" value={filters.search} onChange={event => filter("search", event.target.value)} placeholder="Name, email, branch, or registration ID" /></label>
          <label><span>Term</span><select value={filters.term} onChange={event => filter("term", event.target.value)}><option value="">All terms</option><option>Fall 2026</option><option>Spring 2027</option></select></label>
          <label><span>Country</span><select value={filters.country} onChange={event => filter("country", event.target.value)}><option value="">All countries</option><option value="US">United States</option><option value="CA">Canada</option></select></label>
          <label><span>Program</span><select value={filters.program} onChange={event => filter("program", event.target.value)}><option value="">All programs</option><option>Adults</option><option>Young adults</option><option>Mission Camp</option></select></label>
          <label><span>Branch</span><select value={filters.branch} onChange={event => filter("branch", event.target.value)}><option value="">All branches</option>{branchOptions.map(branch => <option key={branch}>{branch}</option>)}</select></label>
          <label><span>Payment status</span><select value={filters.status} onChange={event => filter("status", event.target.value)}><option value="">All statuses</option>{statuses.map(status => <option value={status} key={status}>{paymentLabel[status]}</option>)}</select></label>
          <button type="button" className="rr-clear" onClick={clearFilters} disabled={!filterCount}>Clear filters{filterCount ? ` (${filterCount})` : ""}</button>
        </form>

        <div className="rr-metrics" aria-label="Filtered registration summary">
          <div><span>Registrations</span><strong>{totals.registrations}</strong><small>{filterCount ? "Matching current filters" : "All sample registrations"}</small></div>
          <div><span>People</span><strong>{totals.people}</strong><small>Unique people in these registrations</small></div>
          <div><span>Unpaid</span><strong>{totals.counts.unpaid}</strong><small>Unknown status is not counted as unpaid</small></div>
        </div>

        <div className="rr-reporting">
          <div className="rr-payment-chart"><h3>Payment status</h3><p>Of {totals.registrations} filtered registrations</p><div className="rr-chart-track" aria-hidden="true">{statuses.map(status => <span key={status} className={`rr-chart-${status}`} style={{ flex: totals.counts[status] }} />)}</div><ul>{statuses.map(status => <li key={status}><span className={`rr-status-dot rr-chart-${status}`} aria-hidden="true" /><span>{paymentLabel[status]}</span><strong>{totals.counts[status]}</strong></li>)}</ul></div>
          <div className="rr-balances"><h3>Known outstanding balance</h3><div><span>United States</span><strong>{money(totals.outstanding.USD, "USD")}</strong></div><div><span>Canada</span><strong>{money(totals.outstanding.CAD, "CAD")}</strong></div><p>Illustrative fees minus recorded payments in this view. Unknown payments are excluded. Currencies are never combined.</p></div>
        </div>

        <div className="rr-list-heading"><div><h3>{view === "registrations" ? "Registrations" : "People"}</h3><p aria-live="polite">{view === "registrations" ? `${rows.length} matching registrations` : `${people.length} unique people from ${rows.length} matching registrations`}</p></div>{view === "registrations" && <div className="rr-bulk-actions"><button type="button" className="rr-secondary" disabled={!unpaid.length} onClick={() => setSelected(unpaid.map(row => row.id))}>Select unpaid in this view</button><button type="button" className="rr-primary" disabled={!reminder.registrations.length} onClick={() => setModal({ kind: "reminder" })}>Preview reminder{reminder.registrations.length ? ` (${reminder.registrations.length})` : ""}</button></div>}</div>
        {reminder.registrations.length > 0 && view === "registrations" && <p className="rr-selection-note" role="status">{reminder.registrations.length} unpaid registrations selected for {reminder.recipients.length} people. <button type="button" onClick={() => setSelected([])}>Clear selection</button></p>}

        {!rows.length ? <div className="rr-empty"><h3>No matching registrations.</h3><p>Try a different filter or clear them to see all fictional records.</p><button type="button" className="rr-primary" onClick={clearFilters}>Clear all filters</button></div> : view === "registrations" ? (
          <div className="rr-table-wrap" role="region" aria-label="Matching registrations, scroll horizontally on small screens">
            <table className="rr-table"><caption>Fictional registrations · Only unpaid records can be selected for reminder previews.</caption><thead><tr><th scope="col"><span className="rr-sr-only">Select unpaid registration</span></th><th scope="col">Person</th><th scope="col">Class / program</th><th scope="col">Term</th><th scope="col">Payment</th><th scope="col">Balance</th><th scope="col"><span className="rr-sr-only">Details</span></th></tr></thead><tbody>{rows.map(row => <tr key={row.id}>
              <td>{row.status === "unpaid" ? <input type="checkbox" aria-label={`Select ${row.person.name}, ${row.id}`} checked={selected.includes(row.id)} onChange={() => toggle(row.id)} /> : <span className="rr-no-selection" title="Only unpaid registrations can be selected">—</span>}</td>
              <td><button type="button" className="rr-person-link" onClick={() => setModal({ kind: "person", personId: row.personId })}>{row.person.name}</button><small>{row.person.email}</small></td>
              <td><strong>{row.offering.branch}</strong><small>{row.offering.program} · {row.offering.currency}</small></td><td>{row.offering.term}<small>{row.id}</small></td>
              <td><span className={`rr-status rr-status-${row.status}`}>{paymentLabel[row.status]}</span></td>
              <td className="rr-money">{row.paid === null || row.status === "unknown" ? "Not confirmed" : money(Math.max(0, row.offering.fee - row.paid), row.offering.currency)}</td>
              <td><button type="button" className="rr-detail-button" aria-label={`View registration ${row.id}`} onClick={() => setModal({ kind: "registration", row })}>View <span aria-hidden="true">↗</span></button></td>
            </tr>)}</tbody></table>
          </div>
        ) : (
          <div className="rr-table-wrap" role="region" aria-label="Matching people, scroll horizontally on small screens"><table className="rr-table"><caption>One row per fictional person. Counts refer only to registrations matching the current filters.</caption><thead><tr><th scope="col">Person</th><th scope="col">Matching registrations</th><th scope="col">Programs</th><th scope="col">Branches</th><th scope="col"><span className="rr-sr-only">Person details</span></th></tr></thead><tbody>{people.map(({ person, registrations }) => <tr key={person.id}><td><button type="button" className="rr-person-link" onClick={() => setModal({ kind: "person", personId: person.id })}>{person.name}</button><small>{person.email}</small></td><td>{registrations.length}</td><td>{[...new Set(registrations.map(row => row.offering.program))].join(", ")}</td><td>{[...new Set(registrations.map(row => row.offering.branch))].join(", ")}</td><td><button type="button" className="rr-detail-button" onClick={() => setModal({ kind: "person", personId: person.id })} aria-label={`View person ${person.name}`}>View <span aria-hidden="true">↗</span></button></td></tr>)}</tbody></table></div>
        )}

        <footer className="rr-footer"><strong>For team review</strong><p>Staff visibility, payment rules, and reminder approval still need decisions. Registration-to-graduation reporting is later scope; it is not inferred from payment status.</p></footer>
      </div>

      <dialog ref={dialog} className="rr-dialog" aria-labelledby={`${id}-dialog-heading`} onClose={() => setModal(null)} onCancel={() => setModal(null)}>
        <div className="rr-dialog-header"><p className="rr-eyebrow">Fictional data · Preview only</p><button type="button" aria-label="Close details" onClick={() => setModal(null)}>×</button></div>
        {modal?.kind === "registration" && <>
          <h3 id={`${id}-dialog-heading`}>{modal.row.id}</h3><p className="rr-dialog-lead">{modal.row.person.name}</p>
          <dl className="rr-detail-grid"><div><dt>Program</dt><dd>{modal.row.offering.program}</dd></div><div><dt>Branch</dt><dd>{modal.row.offering.branch}</dd></div><div><dt>Country</dt><dd>{countryName(modal.row.offering.country)}</dd></div><div><dt>Term</dt><dd>{modal.row.offering.term}</dd></div><div><dt>Payment status</dt><dd>{paymentLabel[modal.row.status]}</dd></div><div><dt>Illustrative fee</dt><dd>{money(modal.row.offering.fee, modal.row.offering.currency)}</dd></div><div><dt>Recorded sample payment</dt><dd>{modal.row.paid === null ? "Unknown — needs confirmation" : money(modal.row.paid, modal.row.offering.currency)}</dd></div></dl>
          <p className="rr-dialog-note">This view does not edit financial records, issue refunds, or contact a student.</p>
        </>}
        {modal?.kind === "person" && detailPerson && <>
          <h3 id={`${id}-dialog-heading`}>{detailPerson.name}</h3><p className="rr-dialog-lead">{detailPerson.email}</p><p>All {personRows.length} sample registrations for this person, including those outside the current filters.</p>
          <ul className="rr-person-registrations">{personRows.map(row => <li key={row.id}><div><strong>{row.offering.program} · {row.offering.branch}</strong><span>{row.offering.term} · {row.id}</span></div><span className={`rr-status rr-status-${row.status}`}>{paymentLabel[row.status]}</span></li>)}</ul>
          <p className="rr-dialog-note">One person, separate registrations. Real cross-program visibility requires staff access approval.</p>
        </>}
        {modal?.kind === "reminder" && <>
          <h3 id={`${id}-dialog-heading`}>Payment reminder preview</h3><p className="rr-dialog-lead">{reminder.registrations.length} unpaid registrations · {reminder.recipients.length} unique recipients</p>
          <p>Only selected, unpaid registrations in the current filtered view are included. This preview cannot send a message.</p>
          <h4>Fictional recipients</h4><ul className="rr-recipient-list">{reminder.recipients.map(person => <li key={person.id}><strong>{person.name}</strong><span>{person.email}</span><small>{reminder.registrations.filter(row => row.personId === person.id).map(row => row.id).join(", ")}</small></li>)}</ul>
          <div className="rr-message"><p className="rr-eyebrow">Draft message · Not approved</p><strong>Your Vision School registration</strong><p>Hello [first name],</p><p>Our sample record shows an unpaid registration. Please check your registration details and contact your branch if you need help or believe this is incorrect.</p><p>Thank you,<br />Vision School</p></div>
          <p className="rr-dialog-note">A live reminder needs approved wording, access rules, accurate payment records, and a verified payment destination. No live link is included here.</p>
        </>}
        <div className="rr-dialog-footer"><button type="button" className="rr-primary" onClick={() => setModal(null)}>Close preview</button></div>
      </dialog>
    </section>
  );
}
