import { createElement, type ReactNode } from "react";
import type { ConceptSectionMap, DesignConceptDefinition } from "./conceptRegistry";
import { type ComponentSection, sectionId } from "./componentCatalog";
import { ClassFinderCarousel, type ClassFinderDesign } from "../components/ClassFinderCarousel";
import { VideoGallery, type VideoGalleryLayout } from "../components/VideoGallery";

const conceptData = {
  nearby: {
    kicker: "God's heart · Every nation · Your next step",
    headline: <>Discover God&apos;s heart<br />for the world.<br /><em>Find your place.</em></>,
    subhead: "An 11-week training journey for believers who want to discover God’s heart for unreached peoples and align their lives with His purposes.",
    heroImages: ["/images/community-city.jpg", "/images/intercp-young-adults.webp"],
    heroAlt: ["A diverse community learning together", "A diverse group of young adults gathered for worship and prayer"],
    caption: "Worship. Teaching. Prayer. Community. A clearer vision for the world.",
    courseTitle: <>Eleven weeks.<br />One awakened vision.</>,
    storyTitle: <>God has a purpose for the world.<br /><em>He invites His people into it.</em></>,
    storyAlt: "A multiethnic congregation worshiping together at Mission Camp",
    classFinder: {
      layout: "focused",
      eyebrow: "Start near you",
      title: "Find a class close to home.",
      summary: "Prioritizes fast local recognition for students who want the nearest clear path.",
      metricLabel: "Path",
      actionLabel: "View class",
      items: [
        {
          audience: "YG & ANA",
          place: "Frederick, MD",
          format: "In person",
          term: "Fall 2026",
          rhythm: "Local cohort",
          note: "Closest-path emphasis for students looking for the most direct local option.",
        },
        {
          audience: "YG & ANA",
          place: "Gaithersburg, MD",
          format: "In person",
          term: "Fall 2026",
          rhythm: "Metro area",
          note: "A nearby branch option for students already oriented around Montgomery County.",
        },
        {
          audience: "YG & ANA",
          place: "Baltimore, MD",
          format: "In person",
          term: "Fall 2026",
          rhythm: "Regional class",
          note: "A regional option kept visible for students searching beyond the nearest branch.",
        },
      ],
    },
    videoLayout: "archive",
  },
  compare: {
    kicker: "Learn deeply · Live faithfully · Go together",
    headline: <>See the world<br />differently.<br /><em>Live on purpose.</em></>,
    subhead: "A weekly rhythm of worship, lectures, prayer, small groups, and fellowship that opens our eyes to what God is doing around the world.",
    heroImages: ["/images/community-table.jpg", "/images/youth-gathering.jpg"],
    heroAlt: ["Students sharing a meal and conversation", "A joyful gathering of young adults"],
    caption: "Discover God’s heart for the nations—and the faithful response He is shaping in you.",
    courseTitle: <>Worship. Learn. Pray.<br />See the world anew.</>,
    storyTitle: <>Align your thinking, plans, and dreams.<br /><em>Make room for God’s vision.</em></>,
    storyAlt: "A diverse group of young adults gathered for worship and prayer",
    classFinder: {
      layout: "comparison",
      eyebrow: "Compare the fit",
      title: "Choose by format, term, and place.",
      summary: "Supports users who need to compare similar class options before taking action.",
      metricLabel: "Context",
      actionLabel: "Compare class",
      items: [
        {
          audience: "YG & ANA",
          place: "Frederick, MD",
          format: "Branch class",
          term: "Fall 2026",
          rhythm: "Local fit",
          note: "Best for users weighing proximity against a smaller local learning environment.",
        },
        {
          audience: "YG & ANA",
          place: "Gaithersburg, MD",
          format: "Branch class",
          term: "Fall 2026",
          rhythm: "Metro fit",
          note: "Best for users comparing commute, branch familiarity, and community context.",
        },
        {
          audience: "YG & ANA",
          place: "Baltimore, MD",
          format: "Regional class",
          term: "Fall 2026",
          rhythm: "Regional fit",
          note: "Best for users who need a broader regional option before choosing a class.",
        },
      ],
    },
    videoLayout: "rail",
  },
} as const satisfies Record<string, {
  kicker: string;
  headline: ReactNode;
  subhead: string;
  heroImages: readonly string[];
  heroAlt: readonly string[];
  caption: string;
  courseTitle: ReactNode;
  storyTitle: ReactNode;
  storyAlt: string;
  classFinder: ClassFinderDesign;
  videoLayout: VideoGalleryLayout;
}>;

type ImmersiveConceptKey = keyof typeof conceptData;
type ImmersiveConceptConfig = Omit<DesignConceptDefinition, "key" | "sections"> & {
  supportedSections: readonly ComponentSection[];
};

function createImmersiveConcept(key: ImmersiveConceptKey, definition: ImmersiveConceptConfig): DesignConceptDefinition {
  const { supportedSections, ...conceptDefinition } = definition;

  return {
    ...conceptDefinition,
    key,
    sections: Object.fromEntries(
      supportedSections.map((section) => [
        section,
        function renderImmersiveConcept() {
          return createElement(ImmersiveConcept, { concept: key, section });
        },
      ]),
    ) as ConceptSectionMap,
  };
}

export const immersiveConcepts: readonly DesignConceptDefinition[] = [
  createImmersiveConcept("nearby", { name: "Focused Class Finder", image: "/images/community-city.jpg", color: "#102c57", supportedSections: ["classes"] }),
  createImmersiveConcept("compare", { name: "Comparison Class Finder", image: "/images/mountain-sunrise.jpg", color: "#1769c2", supportedSections: ["classes"] }),
];

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

type ImmersiveSectionRenderer = (props: {
  concept: ImmersiveConceptKey;
  data: typeof conceptData[ImmersiveConceptKey];
}) => ReactNode;

const sectionRenderers = {
  navigation: () => (
    <header className="feature-nav">
      <a className="feature-brand" href="#component-menu" aria-label="Show all Vision School component types">
        <span className="feature-brand-symbol"><i />V</span>
        <span>Vision School <small>International</small></span>
      </a>
      <nav aria-label="Primary navigation">
        <a href={`#${sectionId("about")}`}>About</a>
        <a href={`#${sectionId("course")}`}>The Course</a>
        <a href={`#${sectionId("stories")}`}>Stories</a>
        <a className="feature-nav-cta" href={`#${sectionId("classes")}`}>Find a Class</a>
      </nav>
    </header>
  ),

  hero: ({ data }) => (
    <section className="feature-hero">
      <div className="feature-hero-copy">
        <p className="feature-kicker">{data.kicker}</p>
        <h1>{data.headline}</h1>
        <p className="feature-lede">{data.subhead}</p>
        <div className="feature-actions">
          <a className="feature-button" href={`#${sectionId("classes")}`}>Find a Class <span aria-hidden="true">↗</span></a>
          <a className="feature-text-link" href={`#${sectionId("about")}`}>What is Vision School?</a>
        </div>
      </div>
      <div className="feature-hero-images" aria-label="Vision School community photographs">
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
    </section>
  ),

  proof: () => (
    <div className="feature-proof" aria-label="Vision School summary">
      <span>Eleven weeks</span><i />
      <span>Worship + teaching</span><i />
      <span>Prayer + community</span>
    </div>
  ),

  about: () => (
    <section className="feature-about">
      <div className="section-title-row">
        <p className="feature-kicker">What is Vision School?</p>
        <h2>More than information.<br /><em>An invitation.</em></h2>
      </div>
      <p className="feature-section-lede">
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
    </section>
  ),

  course: ({ data }) => (
    <section className="feature-course">
      <div className="course-intro">
        <p className="feature-kicker">Inside Vision School</p>
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
    </section>
  ),

  classes: ({ data }) => <ClassFinderCarousel design={data.classFinder} />,

  stories: ({ data }) => (
    <>
      <section className="feature-story-split">
        <div className="story-photo" role="img" aria-label={data.storyAlt} />
        <div className="story-copy">
          <p className="feature-kicker">Why take the course?</p>
          <h2>{data.storyTitle}</h2>
          <p>
            Learn what God is doing among the nations, encounter His heart for unreached peoples,
            and consider how your thinking, plans, and dreams can align with His purposes.
          </p>
          <a className="feature-text-link" href={`#${sectionId("course")}`}>Explore the course <span aria-hidden="true">→</span></a>
        </div>
      </section>
      <section className="feature-testimonial">
        <div className="testimonial-photo" role="img" aria-label="A Vision School participant in conversation" />
        <blockquote>
          <span>“</span>
          <p>Vision School changed how I saw myself, Christian life, and the times we are living in.</p>
          <footer>Participant story adapted from INTERCP International · Final approval required</footer>
        </blockquote>
      </section>
    </>
  ),

  videos: ({ data }) => <VideoGallery layout={data.videoLayout} />,

  cta: () => (
    <>
      <section className="feature-mid-cta">
        <p className="feature-kicker">Ready to begin?</p>
        <h2>Find a Vision School class near you.</h2>
        <a className="feature-button" href={`#${sectionId("classes")}`}>Find a Class <span aria-hidden="true">↗</span></a>
      </section>
      <section className="feature-final-cta">
        <p className="feature-kicker">The invitation is open</p>
        <h2>Your place in the story<br />can start here.</h2>
        <a className="feature-button" href={`#${sectionId("classes")}`}>Find a Vision School Class <span aria-hidden="true">↗</span></a>
      </section>
    </>
  ),

  footer: () => (
    <footer className="feature-footer">
      <div className="feature-brand">
        <span className="feature-brand-symbol"><i />V</span>
        <span>Vision School <small>International</small></span>
      </div>
      <p>An 11-week training journey helping believers discover God’s heart for unreached peoples and respond with faith.</p>
      <nav aria-label="Footer navigation"><a href={`#${sectionId("about")}`}>About</a><a href={`#${sectionId("course")}`}>Course</a><a href={`#${sectionId("classes")}`}>Classes</a><a href={`#${sectionId("stories")}`}>Stories</a></nav>
      <small>Concept mockup · All claims, data, and media subject to ministry approval</small>
    </footer>
  ),
} satisfies Record<ComponentSection, ImmersiveSectionRenderer>;

export function ImmersiveConcept({
  concept,
  section,
}: {
  concept: ImmersiveConceptKey;
  section: ComponentSection;
}) {
  const data = conceptData[concept];
  const renderSection = sectionRenderers[section];

  return (
    <section className={`feature-site feature-${concept} component-preview`}>
      {renderSection({ concept, data })}
    </section>
  );
}
