import { getConceptName, sectionId, type ComponentSection, type RefinedConceptKey } from "./concepts/componentCatalog";

const conceptData = {
  story: {
    kicker: "God's heart · Every nation · Your next step",
    headline: <>Discover God&apos;s heart<br />for the world.<br /><em>Find your place.</em></>,
    subhead: "An 11-week training journey for believers who want to discover God’s heart for unreached peoples and align their lives with His purposes.",
    heroImages: ["/images/community-city.jpg", "/images/intercp-young-adults.webp"],
    heroAlt: ["A diverse community learning together", "A diverse group of young adults gathered for worship and prayer"],
    caption: "Worship. Teaching. Prayer. Community. A clearer vision for the world.",
    courseTitle: <>Eleven weeks.<br />One awakened vision.</>,
    storyTitle: <>God has a purpose for the world.<br /><em>He invites His people into it.</em></>,
    storyAlt: "A multiethnic congregation worshiping together at Mission Camp",
  },
  horizon: {
    kicker: "Learn deeply · Live faithfully · Go together",
    headline: <>See the world<br />differently.<br /><em>Live on purpose.</em></>,
    subhead: "A weekly rhythm of worship, lectures, prayer, small groups, and fellowship that opens our eyes to what God is doing around the world.",
    heroImages: ["/images/community-table.jpg", "/images/youth-gathering.jpg"],
    heroAlt: ["Students sharing a meal and conversation", "A joyful gathering of young adults"],
    caption: "Discover God’s heart for the nations—and the faithful response He is shaping in you.",
    courseTitle: <>Worship. Learn. Pray.<br />See the world anew.</>,
    storyTitle: <>Align your thinking, plans, and dreams.<br /><em>Make room for God’s vision.</em></>,
    storyAlt: "A diverse group of young adults gathered for worship and prayer",
  },
} as const;

const foundations = [
  ["01", "Worship & prayer", "Gather each week to worship, pray, and grow in awareness of God’s heart for unreached peoples."],
  ["02", "Mission teaching", "Learn from missionaries and ministry leaders about global mission, history, prayer, and the 10/40 Window."],
  ["03", "Small-group community", "Process the journey through conversation, fellowship, and practical reflection with other believers."],
];

const courseSections = [
  ["01", "The nations", "Explore today’s global mission landscape, unreached peoples, and the 10/40 Window."],
  ["02", "Mission history", "See how God has worked through His people across generations and around the world."],
  ["03", "Prayer & formation", "Grow through worship, spiritual formation, and intercessory prayer for the nations."],
  ["04", "A faithful response", "Consider how your priorities, plans, and daily life can align with God’s purposes."],
];

const classes = [
  ["United States", "Vision School", "Fall 2026"],
  ["Canada", "Vision School", "Fall 2026"],
  ["Weekly program", "11 weeks", "September–November"],
];

export function RefinedConcept({
  concept,
  section,
}: {
  concept: RefinedConceptKey;
  section: ComponentSection;
}) {
  const data = conceptData[concept];

  return (
    <section className={`refined-site refined-${concept} component-preview`}>
      {section === "navigation" && <header className="refined-nav">
        <a className="refined-brand" href="#component-menu" aria-label="Show all Vision School component types">
          <span className="refined-brand-symbol"><i />V</span>
          <span>Vision School <small>International</small></span>
        </a>
        <nav aria-label={`${getConceptName(concept)} primary navigation`}>
          <a href={`#${sectionId("about")}`}>About</a>
          <a href={`#${sectionId("course")}`}>The Course</a>
          <a href={`#${sectionId("stories")}`}>Stories</a>
          <a className="refined-nav-cta" href={`#${sectionId("classes")}`}>Find a Class</a>
        </nav>
      </header>}

      {section === "hero" && <section className="refined-hero">
        <div className="refined-hero-copy">
          <p className="refined-kicker">{data.kicker}</p>
          <h1>{data.headline}</h1>
          <p className="refined-lede">{data.subhead}</p>
          <div className="refined-actions">
            <a className="refined-button" href={`#${sectionId("classes")}`}>Find a Class <span aria-hidden="true">↗</span></a>
            <a className="refined-text-link" href={`#${sectionId("about")}`}>What is Vision School?</a>
          </div>
        </div>
        <div className="refined-hero-images" aria-label="Vision School community photographs">
          {data.heroImages.slice(0, 2).map((image, index) => (
            <figure key={image} className={`hero-image hero-image-${index + 1}`}>
              <div
                className="hero-photo"
                style={{ backgroundImage: `url(${image})` }}
                role="img"
                aria-label={data.heroAlt[index]}
              />
            </figure>
          ))}
          <p>{data.caption}</p>
        </div>
      </section>}

      {section === "proof" && <div className="refined-proof" aria-label="Vision School summary">
        <span>Eleven weeks</span><i />
        <span>Worship + teaching</span><i />
        <span>Prayer + community</span>
      </div>}

      {section === "about" && <section className="refined-about">
        <div className="section-title-row">
          <p className="refined-kicker">What is Vision School?</p>
          <h2>More than information.<br /><em>An invitation.</em></h2>
        </div>
        <p className="refined-section-lede">
          Vision School is for anyone who wants to discover God’s heart and vision for the world.
          The program combines worship, lectures, prayer, small groups, and fellowship in one shared journey.
        </p>
        <div className="foundation-grid">
          {foundations.map(([number, title, body]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>}

      {section === "stories" && <section className="refined-story-split">
        <div className="story-photo" role="img" aria-label={data.storyAlt} />
        <div className="story-copy">
          <p className="refined-kicker">Why take the course?</p>
          <h2>{data.storyTitle}</h2>
          <p>
            Learn what God is doing among the nations, encounter His heart for unreached peoples,
            and consider how your thinking, plans, and dreams can align with His purposes.
          </p>
          <a className="refined-text-link" href={`#${sectionId("course")}`}>Explore the course <span aria-hidden="true">→</span></a>
        </div>
      </section>}

      {section === "cta" && <section className="refined-mid-cta">
        <p className="refined-kicker">Ready to begin?</p>
        <h2>Find a Vision School class near you.</h2>
        <a className="refined-button" href={`#${sectionId("classes")}`}>Find a Class <span aria-hidden="true">↗</span></a>
      </section>}

      {section === "course" && <section className="refined-course">
        <div className="course-intro">
          <p className="refined-kicker">Inside Vision School</p>
          <h2>{data.courseTitle}</h2>
          <div className="course-stat-row">
            <p><strong>11</strong><span>weekly sessions</span></p>
            <p><strong>1×</strong><span>each week</span></p>
            <p><strong>All</strong><span>believers welcome</span></p>
          </div>
        </div>
        <div className="course-card-grid">
          {courseSections.map(([number, title, body]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <a href={`#${sectionId("classes")}`} aria-label={`Learn more about the ${title} perspective`}>Learn more <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>}

      {section === "classes" && <section className="refined-classes">
        <div className="classes-heading">
          <p className="refined-kicker">Your next step</p>
          <h2>Find your class.</h2>
          <p>Sample preview copy based on current INTERCP International program details. Final locations, dates, and registration links will be confirmed before launch.</p>
        </div>
        <div className="refined-class-grid">
          {classes.map(([place, format, term], index) => (
            <article key={place}>
              <span>Sample 0{index + 1}</span>
              <h3>{place}</h3>
              <dl><div><dt>Format</dt><dd>{format}</dd></div><div><dt>Term</dt><dd>{term}</dd></div></dl>
              <a href={`#${sectionId("classes")}`}>View class <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <a className="all-classes-link" href={`#${sectionId("classes")}`}>View all class locations <span aria-hidden="true">→</span></a>
      </section>}

      {section === "stories" && <section className="refined-testimonial">
        <div className="testimonial-photo" role="img" aria-label="A Vision School participant in conversation" />
        <blockquote>
          <span>“</span>
          <p>Vision School changed how I saw myself, Christian life, and the times we are living in.</p>
          <footer>Participant story adapted from INTERCP International · Final approval required</footer>
        </blockquote>
      </section>}

      {section === "cta" && <section className="refined-final-cta">
        <p className="refined-kicker">The invitation is open</p>
        <h2>Your place in the story<br />can start here.</h2>
        <a className="refined-button" href={`#${sectionId("classes")}`}>Find a Vision School Class <span aria-hidden="true">↗</span></a>
      </section>}

      {section === "footer" && <footer className="refined-footer">
        <div className="refined-brand">
          <span className="refined-brand-symbol"><i />V</span>
          <span>Vision School <small>International</small></span>
        </div>
        <p>An 11-week training journey helping believers discover God’s heart for unreached peoples and respond with faith.</p>
        <nav aria-label="Footer navigation"><a href={`#${sectionId("about")}`}>About</a><a href={`#${sectionId("course")}`}>Course</a><a href={`#${sectionId("classes")}`}>Classes</a><a href={`#${sectionId("stories")}`}>Stories</a></nav>
        <small>Concept mockup · All claims, data, and media subject to ministry approval</small>
      </footer>}
    </section>
  );
}
