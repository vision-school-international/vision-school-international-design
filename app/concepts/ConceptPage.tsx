import { createElement, type ReactNode } from "react";
import type { ConceptSectionMap, DesignConceptDefinition } from "./conceptRegistry";
import { type ComponentSection, sectionId } from "./componentCatalog";
import { ClassFinderCarousel, type ClassFinderDesign } from "../components/ClassFinderCarousel";
import { VideoGallery, type VideoGalleryLayout } from "../components/VideoGallery";

type MockupConceptData = {
  headline: string;
  subhead: string;
  image: string;
  imageAlt: string;
  classFinder: ClassFinderDesign;
  videoLayout?: VideoGalleryLayout;
};

const conceptData = {
  commit: {
    headline: "See the story. Find your place in it.",
    subhead: "A clear path that turns class interest into a confident next step.",
    image: "/images/community-city.jpg",
    imageAlt: "A diverse group of young adults in conversation outdoors",
    classFinder: {
      layout: "decision",
      eyebrow: "Ready when you are",
      title: "Find your class.",
      summary: "Keeps the selected class, key details, and next action in one focused decision path.",
      metricLabel: "Decision",
      actionLabel: "Take next step",
      items: [
        {
          audience: "YG & ANA",
          place: "Frederick, MD",
          format: "In person",
          term: "Fall 2026",
          rhythm: "Primary next step",
          note: "Decision-path emphasis for students ready to move from interest to a class action.",
        },
        {
          audience: "YG & ANA",
          place: "Gaithersburg, MD",
          format: "In person",
          term: "Fall 2026",
          rhythm: "Alternate branch",
          note: "A secondary path when the primary option is not the right location fit.",
        },
        {
          audience: "YG & ANA",
          place: "Baltimore, MD",
          format: "In person",
          term: "Fall 2026",
          rhythm: "Regional backup",
          note: "A final visible option so the user does not hit a dead end before registration.",
        },
      ],
    },
    videoLayout: "region",
  },
} as const satisfies Record<string, MockupConceptData>;

type MockupDataKey = keyof typeof conceptData;
type MockupConceptConfig = Omit<DesignConceptDefinition, "key" | "sections"> & {
  dataKey: MockupDataKey;
  section: ComponentSection;
};

function createMockupConcept(key: string, definition: MockupConceptConfig): DesignConceptDefinition {
  const { dataKey, section, ...conceptDefinition } = definition;

  return {
    ...conceptDefinition,
    key,
    sections: {
      [section]: function renderMockupConcept() {
        return createElement(ConceptPage, { dataKey, section });
      },
    } as ConceptSectionMap,
  };
}

export const mockupConcepts: readonly DesignConceptDefinition[] = [
  createMockupConcept("decision-class-finder", { name: "Decision Class Finder", image: "/images/community-city.jpg", color: "#66afe6", dataKey: "commit", section: "classes" }),
];

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

type MockupSectionRenderer = (props: {
  dataKey: MockupDataKey;
  data: typeof conceptData[MockupDataKey];
}) => ReactNode;

const sectionRenderers = {
  navigation: () => (
      <header className="mock-nav">
        <a className="mock-logo" href="#component-menu" aria-label="Show all Vision School component types">
          <span className="mock-logo-mark">V</span>
          <span>Vision School <small>International</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href={`#${sectionId("about")}`}>About</a>
          <a href={`#${sectionId("course")}`}>The Course</a>
          <a href={`#${sectionId("classes")}`}>Locations</a>
          <a className="nav-cta" href={`#${sectionId("classes")}`}>Find a class</a>
        </nav>
      </header>
  ),

  hero: ({ data }) => (
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
  ),

  proof: () => (
      <section className="proof-strip" aria-label="Program summary">
        <p>One course</p><span aria-hidden="true">•</span>
        <p>Global branches</p><span aria-hidden="true">•</span>
        <p>A lifetime of mission</p>
      </section>
  ),

  about: () => (
      <section className="about-section">
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
  ),

  course: () => (
      <section className="course-section">
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
  ),

  classes: ({ data }) => <ClassFinderCarousel design={data.classFinder} />,

  stories: () => (
      <section className="story-section">
        <div className="story-index">“</div>
        <blockquote>
          Vision School didn’t simply give me more information. It gave me a clearer picture of God’s heart—and a faithful next step.
        </blockquote>
        <p>Sample student story · Replace with an approved testimonial</p>
      </section>
  ),

  videos: ({ data }) => data.videoLayout ? <VideoGallery layout={data.videoLayout} /> : null,

  cta: () => (
      <section className="final-cta">
        <p className="mock-kicker">Ready when you are</p>
        <h2>Your place in the story<br />starts here.</h2>
        <a className="primary-action" href={`#${sectionId("classes")}`}>Find a Vision School class <span aria-hidden="true">↗</span></a>
      </section>
  ),

  footer: () => (
      <footer className="mock-footer">
        <div className="mock-logo footer-logo">
          <span className="mock-logo-mark">V</span>
          <span>Vision School <small>International</small></span>
        </div>
        <p>A global discipleship movement equipping believers to understand and participate in God’s purpose among the nations.</p>
        <div className="footer-links"><a href={`#${sectionId("about")}`}>About</a><a href={`#${sectionId("course")}`}>Course</a><a href={`#${sectionId("classes")}`}>Classes</a><a href={`#${sectionId("classes")}`}>Contact</a></div>
        <p className="footer-note">Concept mockup · Content subject to ministry approval</p>
      </footer>
  ),
} satisfies Record<ComponentSection, MockupSectionRenderer>;

export function ConceptPage({
  dataKey,
  section,
}: {
  dataKey: MockupDataKey;
  section: ComponentSection;
}) {
  const data = conceptData[dataKey];
  const renderSection = sectionRenderers[section];

  const content = renderSection({ dataKey, data });
  return <section className={`site-mock site-${dataKey} component-preview`}>{content}</section>;
}
