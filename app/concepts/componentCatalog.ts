export type ConceptKey = "global" | "together" | "nations" | "forward";
export type RefinedConceptKey = "story" | "horizon";

export type DesignConcept =
  | { kind: "refined"; key: RefinedConceptKey; name: string; image: string; color: string }
  | { kind: "legacy"; key: ConceptKey; name: string; image: string; color: string };

export const concepts: DesignConcept[] = [
  { kind: "refined", key: "story", name: "Editorial", image: "/images/community-city.jpg", color: "#173b59" },
  { kind: "refined", key: "horizon", name: "Contemporary", image: "/images/mountain-sunrise.jpg", color: "#3c7397" },
  { kind: "legacy", key: "global", name: "International", image: "/images/community-city.jpg", color: "#143d3a" },
  { kind: "legacy", key: "together", name: "Community", image: "/images/community-table.jpg", color: "#b54f2a" },
  { kind: "legacy", key: "nations", name: "Bold", image: "/images/youth-gathering.jpg", color: "#29265c" },
  { kind: "legacy", key: "forward", name: "Cinematic", image: "/images/mountain-sunrise.jpg", color: "#152c44" },
];

export const sectionTypes = [
  { key: "navigation", name: "Navigation", description: "Helps users understand where they are, move between key pages, and reach class information.", image: "/images/community-city.jpg", color: "#173b59" },
  { key: "hero", name: "Hero / introduction", description: "Introduces the program, explains its value quickly, and gives the user a clear first action.", image: "/images/mountain-sunrise.jpg", color: "#3c7397" },
  { key: "proof", name: "Proof / key facts", description: "Summarizes important facts so users can understand the program at a glance.", image: "/images/intercp-young-adults.webp", color: "#143d3a" },
  { key: "about", name: "About / value proposition", description: "Explains what Vision School is, who it is for, and why the user should continue.", image: "/images/community-table.jpg", color: "#b54f2a" },
  { key: "course", name: "Course / curriculum", description: "Shows what users will learn, how the program works, and what participation involves.", image: "/images/youth-gathering.jpg", color: "#29265c" },
  { key: "classes", name: "Class finder", description: "Helps users find a relevant class by location, format, or term and take the next step.", image: "/images/community-city.jpg", color: "#152c44" },
  { key: "stories", name: "Stories / testimonials", description: "Shows participant experience and outcomes through a testimonial or story.", image: "/images/intercp-mission-camp.webp", color: "#2f709e" },
  { key: "cta", name: "Calls to action", description: "Prompts the next action at decision points, such as finding a class or learning more.", image: "/images/community-table.jpg", color: "#b54f2a" },
  { key: "footer", name: "Footer / utility navigation", description: "Provides final navigation, contact and credibility information, and routes to important pages.", image: "/images/mountain-sunrise.jpg", color: "#173b59" },
] as const;

export type ComponentSection = typeof sectionTypes[number]["key"];
export const sectionId = (section: ComponentSection) => `section-${section}`;

export const getConceptName = (key: ConceptKey | RefinedConceptKey) =>
  concepts.find((concept) => concept.key === key)?.name ?? key;
