// Fictional, browser-memory-only review data. Not a class inventory or fee schedule.
export type Country = "US" | "CA";
export type Term = "Fall 2026" | "Spring 2027";
export type Program = "Adults" | "Young adults" | "Mission Camp";
export type PaymentStatus = "paid" | "partial" | "unpaid" | "unknown";
export type PaymentChoice = "full" | "installments" | "";

export interface Offering {
  id: string;
  branch: string;
  city: string;
  country: Country;
  program: Program;
  term: Term;
  fee: number;
  currency: "USD" | "CAD";
}

export const sampleOfferings: readonly Offering[] = [
  { id: "demo-dcmd-fall", branch: "DC/Maryland", city: "Frederick, MD", country: "US", program: "Adults", term: "Fall 2026", fee: 240, currency: "USD" },
  { id: "demo-dcva-fall", branch: "DC/Virginia", city: "Northern Virginia", country: "US", program: "Young adults", term: "Fall 2026", fee: 240, currency: "USD" },
  { id: "demo-seattle-fall", branch: "Seattle", city: "Seattle, WA", country: "US", program: "Adults", term: "Fall 2026", fee: 240, currency: "USD" },
  { id: "demo-calgary-fall", branch: "Calgary", city: "Calgary, AB", country: "CA", program: "Adults", term: "Fall 2026", fee: 260, currency: "CAD" },
  { id: "demo-vancouver-fall", branch: "Vancouver", city: "Vancouver, BC", country: "CA", program: "Young adults", term: "Fall 2026", fee: 260, currency: "CAD" },
  { id: "demo-dcmd-spring", branch: "DC/Maryland", city: "Frederick, MD", country: "US", program: "Adults", term: "Spring 2027", fee: 240, currency: "USD" },
  { id: "demo-us-camp", branch: "Sample camp", city: "Venue to be confirmed", country: "US", program: "Mission Camp", term: "Spring 2027", fee: 180, currency: "USD" },
  { id: "demo-calgary-spring", branch: "Calgary", city: "Calgary, AB", country: "CA", program: "Adults", term: "Spring 2027", fee: 260, currency: "CAD" },
];

export interface Person { id: string; name: string; email: string }
export interface Registration { id: string; personId: string; offeringId: string; status: PaymentStatus; paid: number | null }

export const samplePeople: readonly Person[] = [
  { id: "p1", name: "Alex Rivera", email: "alex.rivera@example.com" },
  { id: "p2", name: "Jordan Lee", email: "jordan.lee@example.com" },
  { id: "p3", name: "Morgan Davis", email: "morgan.davis@example.com" },
  { id: "p4", name: "Sam Chen", email: "sam.chen@example.com" },
  { id: "p5", name: "Taylor Brooks", email: "taylor.brooks@example.com" },
  { id: "p6", name: "Jamie Park", email: "jamie.park@example.com" },
  { id: "p7", name: "Casey Williams", email: "casey.williams@example.com" },
  { id: "p8", name: "Robin Martin", email: "robin.martin@example.com" },
  { id: "p9", name: "Avery Kim", email: "avery.kim@example.com" },
  { id: "p10", name: "Cameron Silva", email: "cameron.silva@example.com" },
];

export const sampleRegistrations: readonly Registration[] = [
  { id: "DEMO-101", personId: "p1", offeringId: "demo-dcmd-fall", status: "paid", paid: 240 },
  { id: "DEMO-102", personId: "p2", offeringId: "demo-dcva-fall", status: "unpaid", paid: 0 },
  { id: "DEMO-103", personId: "p3", offeringId: "demo-calgary-fall", status: "partial", paid: 130 },
  { id: "DEMO-104", personId: "p4", offeringId: "demo-vancouver-fall", status: "unpaid", paid: 0 },
  { id: "DEMO-105", personId: "p5", offeringId: "demo-seattle-fall", status: "unknown", paid: null },
  { id: "DEMO-106", personId: "p6", offeringId: "demo-dcmd-fall", status: "partial", paid: 120 },
  { id: "DEMO-107", personId: "p7", offeringId: "demo-seattle-fall", status: "paid", paid: 240 },
  { id: "DEMO-108", personId: "p8", offeringId: "demo-calgary-fall", status: "paid", paid: 260 },
  { id: "DEMO-109", personId: "p9", offeringId: "demo-dcva-fall", status: "unpaid", paid: 0 },
  { id: "DEMO-110", personId: "p10", offeringId: "demo-vancouver-fall", status: "unknown", paid: null },
  { id: "DEMO-111", personId: "p1", offeringId: "demo-us-camp", status: "unpaid", paid: 0 },
  { id: "DEMO-112", personId: "p3", offeringId: "demo-calgary-spring", status: "paid", paid: 260 },
];

export const countryName = (country: Country) => country === "US" ? "United States" : "Canada";
export const money = (amount: number, currency: "USD" | "CAD") =>
  `${currency} ${new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount)}`;
export const paymentLabel: Record<PaymentStatus, string> = { paid: "Paid", partial: "Partially paid", unpaid: "Unpaid", unknown: "Unknown" };

export function findOfferings(country: Country, term: Term, program: string) {
  return sampleOfferings.filter(o => o.country === country && o.term === term && (!program || o.program === program));
}

export interface StudentDraft {
  country: Country;
  term: Term;
  program: string;
  offeringId: string;
  name: string;
  email: string;
  payment: PaymentChoice;
  acknowledged: boolean;
}
export const emptyStudentDraft: StudentDraft = { country: "US", term: "Fall 2026", program: "", offeringId: "", name: "", email: "", payment: "", acknowledged: false };

export function selectedOffering(draft: StudentDraft) {
  return findOfferings(draft.country, draft.term, draft.program).find(o => o.id === draft.offeringId);
}

export function validateStudentStep(step: number, draft: StudentDraft): string[] {
  if (step === 0) return selectedOffering(draft) ? [] : ["Choose a sample class to continue."];
  if (step === 1) {
    const errors = [];
    if (!draft.name.trim()) errors.push("Enter a sample full name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email.trim())) errors.push("Enter a sample email address in the format name@example.com.");
    return errors;
  }
  if (step === 2) return draft.payment === "full" || draft.payment === "installments" ? [] : ["Choose a sample payment option."];
  return draft.acknowledged ? [] : ["Confirm that you understand this is only a design prototype."];
}

export interface RegistrationRow extends Registration { person: Person; offering: Offering }
export const registrationRows: readonly RegistrationRow[] = sampleRegistrations.map(record => ({
  ...record,
  person: samplePeople.find(person => person.id === record.personId)!,
  offering: sampleOfferings.find(offering => offering.id === record.offeringId)!,
}));

export interface RegistrationFilters { search: string; country: string; term: string; program: string; branch: string; status: string }
export const emptyFilters: RegistrationFilters = { search: "", country: "", term: "", program: "", branch: "", status: "" };
const normalize = (text: string) => text.trim().toLocaleLowerCase();

export function filterRegistrations(filters: RegistrationFilters, rows: readonly RegistrationRow[] = registrationRows) {
  const query = normalize(filters.search);
  return rows.filter(row =>
    (!query || normalize(`${row.person.name} ${row.person.email} ${row.id} ${row.offering.branch} ${row.offering.city}`).includes(query)) &&
    (!filters.country || row.offering.country === filters.country) &&
    (!filters.term || row.offering.term === filters.term) &&
    (!filters.program || row.offering.program === filters.program) &&
    (!filters.branch || row.offering.branch === filters.branch) &&
    (!filters.status || row.status === filters.status),
  );
}

export function groupPeople(rows: readonly RegistrationRow[]) {
  return samplePeople.flatMap(person => {
    const registrations = rows.filter(row => row.personId === person.id);
    return registrations.length ? [{ person, registrations }] : [];
  });
}

export function summarizeRegistrations(rows: readonly RegistrationRow[]) {
  const counts: Record<PaymentStatus, number> = { paid: 0, partial: 0, unpaid: 0, unknown: 0 };
  const outstanding = { USD: 0, CAD: 0 };
  for (const row of rows) {
    counts[row.status] += 1;
    if (row.status !== "unknown" && row.paid !== null) outstanding[row.offering.currency] += Math.max(0, row.offering.fee - row.paid);
  }
  return { registrations: rows.length, people: new Set(rows.map(row => row.personId)).size, counts, outstanding };
}

export function reminderSelection(rows: readonly RegistrationRow[], selectedIds: readonly string[]) {
  // Re-derive from the visible rows: stale selections may never target hidden records.
  const registrations = rows.filter(row => row.status === "unpaid" && selectedIds.includes(row.id));
  const recipients = samplePeople.filter(person => registrations.some(row => row.personId === person.id));
  return { registrations, recipients };
}
