export type RefinedConceptKey = "story" | "horizon";

const conceptData = {
  story: {
    number: "01",
    name: "The Living Story",
    kicker: "God's heart · Every nation · Your next step",
    headline: <>Discover God&apos;s heart.<br /><em>Find your place</em> in His story.</>,
    subhead: "Vision School is an invitation to see God’s global purpose clearly—and live with faithful purpose wherever He sends you.",
    heroImages: ["/images/community-city.jpg", "/images/community-table.jpg", "/images/youth-gathering.jpg"],
    heroAlt: ["A diverse community learning together", "Students sharing a meal and conversation", "A joyful gathering of young adults"],
    caption: "A global course. A local community. A lifetime of purpose.",
    courseTitle: <>Four perspectives.<br />One unfolding story.</>,
    storyTitle: <>Information can fill a page.<br /><em>Vision changes a life.</em></>,
    switchTo: "horizon" as RefinedConceptKey,
  },
  horizon: {
    number: "02",
    name: "The Open Horizon",
    kicker: "Learn deeply · Live faithfully · Go together",
    headline: <>See the world differently.<br /><em>Live on purpose.</em></>,
    subhead: "A course and community helping ordinary believers understand the nations, discern their role, and take a meaningful next step.",
    heroImages: ["/images/mountain-sunrise.jpg", "/images/youth-gathering.jpg", "/images/community-city.jpg"],
    heroAlt: ["A wide mountain horizon at sunrise", "Young adults celebrating together", "Friends gathered in a city"],
    caption: "The story is global. Your next step can begin right where you are.",
    courseTitle: <>A clear path from<br />learning to living.</>,
    storyTitle: <>The world becomes more than a map.<br /><em>It becomes your neighbor.</em></>,
    switchTo: "story" as RefinedConceptKey,
  },
} as const;

const foundations = [
  ["01", "A course", "A guided journey through the biblical, historical, cultural, and strategic dimensions of God’s global purpose."],
  ["02", "A community", "A place to learn alongside believers, missionaries, teachers, and local leaders who are asking the same questions."],
  ["03", "A movement", "A growing network of ordinary people choosing informed, prayerful, faithful participation among the nations."],
];

const courseSections = [
  ["01", "Biblical", "See the thread of God’s purpose for all peoples throughout Scripture."],
  ["02", "Historical", "Discover how the global church has carried the gospel across generations."],
  ["03", "Cultural", "Learn to cross cultures with humility, curiosity, and genuine love."],
  ["04", "Strategic", "Discern practical ways to pray, welcome, send, support, and go."],
];

const classes = [
  ["New York City", "In person", "Fall 2026"],
  ["Toronto", "In person", "Fall 2026"],
  ["Online", "North America", "Fall 2026"],
];

export function RefinedConcept({
  concept,
  onBack,
  onSwitch,
}: {
  concept: RefinedConceptKey;
  onBack: () => void;
  onSwitch: (concept: RefinedConceptKey) => void;
}) {
  const data = conceptData[concept];
  const id = (section: string) => `${concept}-${section}`;

  return (
    <section className={`refined-site refined-${concept}`} id={`concept-${concept}`}>
      <div className="concept-review-bar">
        <button type="button" onClick={onBack}>← Both concepts</button>
        <span>{data.number} / 02 · {data.name}</span>
        <button type="button" onClick={() => onSwitch(data.switchTo)}>View the other option →</button>
      </div>

      <header className="refined-nav">
        <button className="refined-brand" type="button" onClick={onBack} aria-label="Return to design choices">
          <span className="refined-brand-symbol"><i />V</span>
          <span>Vision School <small>International</small></span>
        </button>
        <nav aria-label={`${data.name} primary navigation`}>
          <a href={`#${id("about")}`}>About</a>
          <a href={`#${id("course")}`}>The Course</a>
          <a href={`#${id("stories")}`}>Stories</a>
          <a className="refined-nav-cta" href={`#${id("classes")}`}>Find a Class</a>
        </nav>
      </header>

      <section className="refined-hero">
        <div className="refined-hero-copy">
          <p className="refined-kicker">{data.kicker}</p>
          <h1>{data.headline}</h1>
          <p className="refined-lede">{data.subhead}</p>
          <div className="refined-actions">
            <a className="refined-button" href={`#${id("classes")}`}>Find a Class <span aria-hidden="true">↗</span></a>
            <a className="refined-text-link" href={`#${id("about")}`}>What is Vision School?</a>
          </div>
        </div>
        <div className="refined-hero-images" aria-label="Vision School community photographs">
          {data.heroImages.map((image, index) => (
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
      </section>

      <div className="refined-proof" aria-label="Vision School summary">
        <span>One course</span><i />
        <span>Four perspectives</span><i />
        <span>Global community</span>
      </div>

      <section className="refined-about" id={id("about")}>
        <div className="section-title-row">
          <p className="refined-kicker">What is Vision School?</p>
          <h2>More than information.<br /><em>An invitation.</em></h2>
        </div>
        <p className="refined-section-lede">
          Vision School helps believers encounter the whole story of God’s work among the nations,
          understand the world with greater wisdom, and discover a faithful response.
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
      </section>

      <section className="refined-story-split">
        <div className="story-photo" role="img" aria-label="Vision School students learning together" />
        <div className="story-copy">
          <p className="refined-kicker">Why take the course?</p>
          <h2>{data.storyTitle}</h2>
          <p>
            Move beyond disconnected facts. Meet people, stories, and ideas that reshape how you pray,
            welcome, give, serve, and go—at home and across cultures.
          </p>
          <a className="refined-text-link" href={`#${id("course")}`}>Explore the course <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="refined-mid-cta">
        <p className="refined-kicker">Ready to begin?</p>
        <h2>Find a Vision School class near you.</h2>
        <a className="refined-button" href={`#${id("classes")}`}>Find a Class <span aria-hidden="true">↗</span></a>
      </section>

      <section className="refined-course" id={id("course")}>
        <div className="course-intro">
          <p className="refined-kicker">Inside Vision School</p>
          <h2>{data.courseTitle}</h2>
          <div className="course-stat-row">
            <p><strong>1</strong><span>integrated course</span></p>
            <p><strong>4</strong><span>perspectives</span></p>
            <p><strong>15</strong><span>guided sessions</span></p>
          </div>
        </div>
        <div className="course-card-grid">
          {courseSections.map(([number, title, body]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <a href={`#${id("classes")}`} aria-label={`Learn more about the ${title} perspective`}>Learn more <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="refined-classes" id={id("classes")}>
        <div className="classes-heading">
          <p className="refined-kicker">Your next step</p>
          <h2>Find your class.</h2>
          <p>Illustrative listings for concept review. Approved locations, dates, and Church Center registration links will replace these examples.</p>
        </div>
        <div className="refined-class-grid">
          {classes.map(([place, format, term], index) => (
            <article key={place}>
              <span>Sample 0{index + 1}</span>
              <h3>{place}</h3>
              <dl><div><dt>Format</dt><dd>{format}</dd></div><div><dt>Term</dt><dd>{term}</dd></div></dl>
              <a href={`#${id("classes")}`}>View class <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <a className="all-classes-link" href={`#${id("classes")}`}>View all class locations <span aria-hidden="true">→</span></a>
      </section>

      <section className="refined-testimonial" id={id("stories")}>
        <div className="testimonial-photo" role="img" aria-label="A Vision School participant in conversation" />
        <blockquote>
          <span>“</span>
          <p>Vision School gave me more than answers. It gave me a clearer picture of God’s heart—and a faithful next step.</p>
          <footer>Sample story · Replace with an approved participant testimonial</footer>
        </blockquote>
      </section>

      <section className="refined-final-cta">
        <p className="refined-kicker">The invitation is open</p>
        <h2>Your place in the story<br />can start here.</h2>
        <a className="refined-button" href={`#${id("classes")}`}>Find a Vision School Class <span aria-hidden="true">↗</span></a>
      </section>

      <footer className="refined-footer">
        <div className="refined-brand">
          <span className="refined-brand-symbol"><i />V</span>
          <span>Vision School <small>International</small></span>
        </div>
        <p>A global learning community equipping believers to understand and participate in God’s purpose among the nations.</p>
        <nav aria-label="Footer navigation"><a href={`#${id("about")}`}>About</a><a href={`#${id("course")}`}>Course</a><a href={`#${id("classes")}`}>Classes</a><a href={`#${id("stories")}`}>Stories</a></nav>
        <small>Concept mockup · All claims, data, and media subject to ministry approval</small>
      </footer>
    </section>
  );
}
