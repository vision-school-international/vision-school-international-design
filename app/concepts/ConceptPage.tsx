export type ConceptKey = "global" | "together" | "nations" | "forward";

const conceptData = {
  global: {
    number: "01",
    label: "The Global Classroom",
    headline: "See the story. Find your place in it.",
    subhead: "A clear, editorial home for a global discipleship movement.",
    image: "/images/community-city.jpg",
    imageAlt: "A diverse group of young adults in conversation outdoors",
    next: "/concepts/sent-together",
    nextKey: "together" as ConceptKey,
    nextAnchor: "concept-together",
    anchor: "concept-global",
  },
  together: {
    number: "02",
    label: "Sent Together",
    headline: "Formed in community. Sent to the nations.",
    subhead: "A warm, human-centered direction built around belonging and shared calling.",
    image: "/images/community-table.jpg",
    imageAlt: "Young adults sharing a conversation around a table",
    next: "/concepts/every-nation",
    nextKey: "nations" as ConceptKey,
    nextAnchor: "concept-nations",
    anchor: "concept-together",
  },
  nations: {
    number: "03",
    label: "Every Nation",
    headline: "Your generation. Every nation.",
    subhead: "A bold, energetic direction for students ready to move from conviction to action.",
    image: "/images/youth-gathering.jpg",
    imageAlt: "A lively gathering of young adults standing together",
    next: "/concepts/way-forward",
    nextKey: "forward" as ConceptKey,
    nextAnchor: "concept-forward",
    anchor: "concept-nations",
  },
  forward: {
    number: "04",
    label: "The Way Forward",
    headline: "The world is waiting. Take the next step.",
    subhead: "A cinematic, premium direction that makes the journey feel consequential.",
    image: "/images/mountain-sunrise.jpg",
    imageAlt: "A mountain peak emerging above clouds at sunrise",
    next: "/concepts/global-classroom",
    nextKey: "global" as ConceptKey,
    nextAnchor: "concept-global",
    anchor: "concept-forward",
  },
} as const;

const pillars = [
  {
    index: "01",
    title: "A course",
    body: "A guided learning experience rooted in Scripture, history, culture, and mission strategy.",
  },
  {
    index: "02",
    title: "A community",
    body: "Students, teachers, missionaries, and local branches learning and discerning together.",
  },
  {
    index: "03",
    title: "A movement",
    body: "A growing global network equipping people to participate in God’s work among the nations.",
  },
];

const courseSteps = [
  ["01", "See the whole story", "Trace God’s global purpose from Genesis to today."],
  ["02", "Understand the world", "Learn to cross cultures with humility, wisdom, and care."],
  ["03", "Find your role", "Turn learning into a faithful next step—locally or globally."],
];

const sampleClasses = [
  ["New York, NY", "In person", "Fall 2026"],
  ["Toronto, ON", "In person", "Fall 2026"],
  ["North America", "Online", "Fall 2026"],
];

export function ConceptPage({
  concept,
  embedded = false,
  onSelect,
}: {
  concept: ConceptKey;
  embedded?: boolean;
  onSelect?: (concept: ConceptKey | null) => void;
}) {
  const data = conceptData[concept];
  const sectionId = (name: string) => embedded ? `${data.anchor}-${name}` : name;
  const allConceptsHref = embedded ? "#concept-menu" : "/";
  const nextConceptHref = embedded ? `#${data.nextAnchor}` : data.next;

  const content = (
    <>
      <div className="mock-banner">
        {embedded && onSelect ? (
          <button type="button" onClick={() => onSelect(null)}>← All four concepts</button>
        ) : (
          <a href={allConceptsHref}>← All four concepts</a>
        )}
        <span>{data.number} / 04 · {data.label}</span>
        {embedded && onSelect ? (
          <button type="button" onClick={() => onSelect(data.nextKey)}>Next direction →</button>
        ) : (
          <a href={nextConceptHref}>Next direction →</a>
        )}
      </div>

      <header className="mock-nav">
        {embedded && onSelect ? (
          <button className="mock-logo" type="button" onClick={() => onSelect(null)} aria-label="Show all Vision School International concepts">
            <span className="mock-logo-mark">V</span>
            <span>Vision School <small>International</small></span>
          </button>
        ) : (
          <a className="mock-logo" href={allConceptsHref} aria-label="Vision School International mockup home">
            <span className="mock-logo-mark">V</span>
            <span>Vision School <small>International</small></span>
          </a>
        )}
        <nav aria-label="Primary navigation">
          <a href={`#${sectionId("about")}`}>About</a>
          <a href={`#${sectionId("course")}`}>The Course</a>
          <a href={`#${sectionId("classes")}`}>Locations</a>
          <a className="nav-cta" href={`#${sectionId("classes")}`}>Find a class</a>
        </nav>
      </header>

      <section className="mock-hero">
        <div className="hero-copy">
          <p className="mock-kicker">One vision · Every people · Your next step</p>
          <h1>{data.headline}</h1>
          <p className="hero-subhead">{data.subhead}</p>
          <div className="hero-actions">
            <a className="primary-action" href={`#${sectionId("classes")}`}>Find a class <span aria-hidden="true">↗</span></a>
            <a className="secondary-action" href={`#${sectionId("about")}`}>What is Vision School?</a>
          </div>
        </div>
        <div className="hero-visual" style={{ backgroundImage: `url(${data.image})` }} role="img" aria-label={data.imageAlt}>
          <span className="visual-caption">Equipping a generation for God’s global purpose.</span>
        </div>
        <div className="hero-aside" aria-label="Vision School overview">
          <span>Learn</span><i aria-hidden="true" />
          <span>Discern</span><i aria-hidden="true" />
          <span>Go</span>
        </div>
      </section>

      <section className="proof-strip" aria-label="Program summary">
        <p>One course</p><span aria-hidden="true">•</span>
        <p>Global branches</p><span aria-hidden="true">•</span>
        <p>A lifetime of mission</p>
      </section>

      <section className="about-section" id={sectionId("about")}>
        <div className="section-heading">
          <p className="mock-kicker">What is Vision School?</p>
          <h2>More than information.<br />An invitation.</h2>
        </div>
        <p className="section-intro">
          Vision School helps ordinary believers understand God’s heart for the nations and discover
          how their lives can participate in His global purpose.
        </p>
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article className="pillar" key={pillar.index}>
              <span>{pillar.index}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="course-section" id={sectionId("course")}>
        <div className="course-photo" style={{ backgroundImage: "url(/images/youth-gathering.jpg)" }} role="img" aria-label="Young adults gathered together in a classroom community" />
        <div className="course-copy">
          <p className="mock-kicker">Inside the course</p>
          <h2>Learn the story.<br />Live with purpose.</h2>
          <div className="course-steps">
            {courseSteps.map(([number, title, body]) => (
              <div className="course-step" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </div>
            ))}
          </div>
          <a className="text-link" href={`#${sectionId("classes")}`}>Explore the course <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="classes-section" id={sectionId("classes")}>
        <div className="classes-header">
          <div>
            <p className="mock-kicker">Start near you</p>
            <h2>Find your class.</h2>
          </div>
          <p>Illustrative class data for design review. Final locations and registration links will come from the Vision School team.</p>
        </div>
        <div className="class-grid">
          {sampleClasses.map(([place, format, term], index) => (
            <article className="class-card" key={place}>
              <span className="sample-label">Sample 0{index + 1}</span>
              <h3>{place}</h3>
              <div><span>{format}</span><span>{term}</span></div>
              <a href={`#${sectionId("classes")}`} aria-label={`View sample class in ${place}`}>View class <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <a className="all-classes" href={`#${sectionId("classes")}`}>View all class locations <span aria-hidden="true">→</span></a>
      </section>

      <section className="story-section">
        <div className="story-index">“</div>
        <blockquote>
          Vision School didn’t simply give me more information. It gave me a clearer picture of God’s heart—and a faithful next step.
        </blockquote>
        <p>Sample student story · Replace with an approved testimonial</p>
      </section>

      <section className="final-cta">
        <p className="mock-kicker">Ready when you are</p>
        <h2>Your place in the story<br />starts here.</h2>
        <a className="primary-action" href={`#${sectionId("classes")}`}>Find a Vision School class <span aria-hidden="true">↗</span></a>
      </section>

      <footer className="mock-footer">
        <div className="mock-logo footer-logo">
          <span className="mock-logo-mark">V</span>
          <span>Vision School <small>International</small></span>
        </div>
        <p>A global discipleship movement equipping believers to understand and participate in God’s purpose among the nations.</p>
        <div className="footer-links"><a href={`#${sectionId("about")}`}>About</a><a href={`#${sectionId("course")}`}>Course</a><a href={`#${sectionId("classes")}`}>Classes</a><a href={`#${sectionId("classes")}`}>Contact</a></div>
        <p className="footer-note">Concept mockup · Content subject to ministry approval</p>
      </footer>
    </>
  );

  if (embedded) {
    return (
      <section className={`site-mock site-${concept} embedded-concept`} id={data.anchor}>
        {content}
      </section>
    );
  }

  return <main className={`site-mock site-${concept}`}>{content}</main>;
}
