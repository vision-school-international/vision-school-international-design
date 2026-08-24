const points = [
  ["Purpose", "Understand God's heart for all nations."],
  ["Formation", "Connect learning with prayer, worship, and community."],
  ["Response", "Discern a faithful next step locally or globally."],
] as const;

export function MissionAbout() {
  return (
    <section className="mission-about component-preview">
      <div className="mission-about__heading">
        <p>About Vision School</p>
        <h2>Designed to move users from interest to understanding.</h2>
      </div>
      <p className="mission-about__lede">
        Vision School introduces the biblical, historical, cultural, and practical
        foundations of mission in a guided community setting.
      </p>
      <div className="mission-about__grid">
        {points.map(([title, body]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
