export type ConceptKey = "global" | "together" | "nations" | "forward";
export type RefinedConceptKey = "story" | "horizon";

export type DesignConcept =
  | { kind: "refined"; key: RefinedConceptKey; name: string; image: string; color: string }
  | { kind: "legacy"; key: ConceptKey; name: string; image: string; color: string };

export const concepts: DesignConcept[] = [
  { kind: "refined", key: "story", name: "The Living Story", image: "/images/community-city.jpg", color: "#173b59" },
  { kind: "refined", key: "horizon", name: "The Open Horizon", image: "/images/mountain-sunrise.jpg", color: "#3c7397" },
  { kind: "legacy", key: "global", name: "The Global Classroom", image: "/images/community-city.jpg", color: "#143d3a" },
  { kind: "legacy", key: "together", name: "Sent Together", image: "/images/community-table.jpg", color: "#b54f2a" },
  { kind: "legacy", key: "nations", name: "Every Nation", image: "/images/youth-gathering.jpg", color: "#29265c" },
  { kind: "legacy", key: "forward", name: "The Way Forward", image: "/images/mountain-sunrise.jpg", color: "#152c44" },
];

export const sectionTypes = [
  { key: "navigation", number: "01", name: "Navigation", description: "Brand, wayfinding, and the persistent path to Find a Class.", image: "/images/community-city.jpg", color: "#173b59" },
  { key: "hero", number: "02", name: "Hero", description: "The opening statement, supporting context, imagery, and first action.", image: "/images/mountain-sunrise.jpg", color: "#3c7397" },
  { key: "proof", number: "03", name: "Proof strip", description: "A compact rhythm of facts that makes the program easy to grasp.", image: "/images/intercp-young-adults.webp", color: "#143d3a" },
  { key: "about", number: "04", name: "About / value proposition", description: "The explanation of what Vision School is and why it matters.", image: "/images/community-table.jpg", color: "#b54f2a" },
  { key: "course", number: "05", name: "Course / curriculum", description: "The learning journey, weekly rhythm, and course themes.", image: "/images/youth-gathering.jpg", color: "#29265c" },
  { key: "classes", number: "06", name: "Class finder", description: "Locations, formats, terms, and the route into registration.", image: "/images/community-city.jpg", color: "#152c44" },
  { key: "stories", number: "07", name: "Stories / testimonial", description: "Participant voice, lived impact, and the human proof behind the invitation.", image: "/images/intercp-mission-camp.webp", color: "#2f709e" },
  { key: "cta", number: "08", name: "Calls to action", description: "The invitation to move from interest to a class, repeated at the right moments.", image: "/images/community-table.jpg", color: "#b54f2a" },
  { key: "footer", number: "09", name: "Footer", description: "The closing brand context, links, contact path, and credibility details.", image: "/images/mountain-sunrise.jpg", color: "#173b59" },
] as const;

export type ComponentSection = typeof sectionTypes[number]["key"];
export const sectionId = (section: ComponentSection) => `section-${section}`;

export const getConceptName = (key: ConceptKey | RefinedConceptKey) =>
  concepts.find((concept) => concept.key === key)?.name ?? key;
