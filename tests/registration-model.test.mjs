import test from "node:test";
import assert from "node:assert/strict";
import { emptyFilters, emptyStudentDraft, filterRegistrations, findOfferings, groupPeople, money, registrationRows, reminderSelection, sampleOfferings, samplePeople, selectedOffering, summarizeRegistrations, validateStudentStep } from "../app/components/registration/registrationModel.ts";

test("fixtures have unique IDs, valid joins, and no real email destinations", () => {
  for (const data of [sampleOfferings, samplePeople, registrationRows]) assert.equal(new Set(data.map(item => item.id)).size, data.length);
  for (const row of registrationRows) {
    assert.ok(row.person && row.offering);
    assert.ok(row.person.email.endsWith("@example.com"));
    assert.equal(row.offering.currency, row.offering.country === "CA" ? "CAD" : "USD");
  }
});
test("a class is required, and stale cross-country selections are rejected", () => {
  assert.equal(validateStudentStep(0, emptyStudentDraft).length, 1);
  const valid = { ...emptyStudentDraft, offeringId: "demo-dcmd-fall" };
  assert.equal(validateStudentStep(0, valid).length, 0);
  assert.equal(selectedOffering({ ...valid, country: "CA" }), undefined);
  assert.equal(selectedOffering({ ...valid, term: "Spring 2027" }), undefined);
  assert.equal(selectedOffering({ ...valid, program: "Young adults" }), undefined);
});
test("offerings filter country, term, and program together", () => {
  const rows = findOfferings("CA", "Fall 2026", "Adults");
  assert.equal(rows.length, 1);
  assert.equal(rows[0].branch, "Calgary");
  assert.equal(findOfferings("CA", "Fall 2026", "Mission Camp").length, 0);
});
test("Frederick is DC/Maryland and DC/Virginia stays distinct", () => {
  assert.equal(sampleOfferings.find(row => row.id === "demo-dcmd-fall").city, "Frederick, MD");
  assert.notEqual(sampleOfferings.find(row => row.id === "demo-dcva-fall").branch, "DC/Maryland");
});
test("sample details reject whitespace and malformed addresses", () => {
  assert.equal(validateStudentStep(1, { ...emptyStudentDraft, name: "   ", email: "broken" }).length, 2);
  assert.equal(validateStudentStep(1, { ...emptyStudentDraft, name: " Alex ", email: " alex@example.com " }).length, 0);
});
test("payment and review acknowledgment are explicit choices", () => {
  assert.equal(validateStudentStep(2, emptyStudentDraft).length, 1);
  assert.equal(validateStudentStep(2, { ...emptyStudentDraft, payment: "installments" }).length, 0);
  assert.equal(validateStudentStep(3, emptyStudentDraft).length, 1);
  assert.equal(validateStudentStep(3, { ...emptyStudentDraft, acknowledged: true }).length, 0);
});
test("unfiltered totals distinguish people from registrations", () => {
  const total = summarizeRegistrations(registrationRows);
  assert.equal(total.registrations, 12);
  assert.equal(total.people, 10);
  assert.deepEqual(total.counts, { paid: 4, partial: 2, unpaid: 4, unknown: 2 });
  assert.equal(Object.values(total.counts).reduce((a, b) => a + b), 12);
});
test("outstanding balances remain separate and exclude unknown payments", () => {
  const { outstanding } = summarizeRegistrations(registrationRows);
  assert.deepEqual(outstanding, { USD: 780, CAD: 390 });
  const unknown = filterRegistrations({ ...emptyFilters, status: "unknown" });
  assert.deepEqual(summarizeRegistrations(unknown).outstanding, { USD: 0, CAD: 0 });
  assert.match(money(260, "CAD"), /^CAD /);
  assert.match(money(240, "USD"), /^USD /);
});
test("search trims whitespace, ignores case, and can find a branch city", () => {
  assert.equal(filterRegistrations({ ...emptyFilters, search: "  ALEX RIVERA  " }).length, 2);
  assert.equal(filterRegistrations({ ...emptyFilters, search: "Frederick" }).length, 2);
});
test("filters intersect rather than replacing each other", () => {
  const rows = filterRegistrations({ search: "Jordan", country: "US", term: "Fall 2026", program: "Young adults", branch: "DC/Virginia", status: "unpaid" });
  assert.deepEqual(rows.map(row => row.id), ["DEMO-102"]);
  assert.equal(filterRegistrations({ ...emptyFilters, country: "CA", branch: "DC/Maryland" }).length, 0);
});
test("grouped people show one person with multiple registrations", () => {
  const alex = groupPeople(registrationRows).find(row => row.person.id === "p1");
  assert.equal(alex.registrations.length, 2);
  assert.equal(groupPeople(filterRegistrations({ ...emptyFilters, term: "Spring 2027" })).length, 2);
});
test("reminder previews exclude paid, partial, unknown, and hidden registrations", () => {
  const allIds = registrationRows.map(row => row.id);
  const visible = filterRegistrations({ ...emptyFilters, country: "CA" });
  const result = reminderSelection(visible, allIds);
  assert.deepEqual(result.registrations.map(row => row.id), ["DEMO-104"]);
  assert.deepEqual(result.recipients.map(person => person.id), ["p4"]);
  assert.equal(reminderSelection([], allIds).registrations.length, 0);
});
test("one reminder recipient is counted once across several selected registrations", () => {
  const source = registrationRows.filter(row => row.personId === "p1").map(row => ({ ...row, status: "unpaid", paid: 0 }));
  const result = reminderSelection(source, source.map(row => row.id));
  assert.equal(result.registrations.length, 2);
  assert.equal(result.recipients.length, 1);
});
test("empty filters restore all rows and zero results have honest totals", () => {
  assert.equal(filterRegistrations(emptyFilters).length, registrationRows.length);
  assert.deepEqual(summarizeRegistrations([]), { registrations: 0, people: 0, counts: { paid: 0, partial: 0, unpaid: 0, unknown: 0 }, outstanding: { USD: 0, CAD: 0 } });
});
