const events = [
  ["Session start", "Fall term", "Weekly class begins"],
  ["Mission camp", "Seasonal event", "Training and worship gathering"],
  ["Orientation", "Before class", "Practical details for students"],
] as const;

export function EventsCalendar() {
  return (
    <section className="events-calendar component-preview">
      <header>
        <p>Events calendar</p>
        <h2>Show dates before users ask.</h2>
      </header>
      <ol>
        {events.map(([title, timing, detail]) => (
          <li key={title}>
            <span>{timing}</span>
            <h3>{title}</h3>
            <p>{detail}</p>
          </li>
        ))}
      </ol>
      <small>Sample schedule categories · Confirm final dates before publishing</small>
    </section>
  );
}
