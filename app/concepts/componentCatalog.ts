export const sectionTypes = [
  { key: "navigation", name: "Navigation", description: "Helps users understand where they are, move between key pages, and reach class information.", image: "/images/community-city.jpg", color: "#102c57" },
  { key: "hero", name: "Hero / introduction", description: "Introduces the program, explains its value quickly, and gives the user a clear first action.", image: "/images/mountain-sunrise.jpg", color: "#1769c2" },
  { key: "proof", name: "Proof / key facts", description: "Summarizes important facts so users can understand the program at a glance.", image: "/images/intercp-young-adults.webp", color: "#66afe6" },
  { key: "about", name: "About / value proposition", description: "Explains what Vision School is, who it is for, and why the user should continue.", image: "/images/community-table.jpg", color: "#1f2c40" },
  { key: "course", name: "Course / curriculum", description: "Shows what users will learn, how the program works, and what participation involves.", image: "/images/youth-gathering.jpg", color: "#102c57" },
  { key: "classes", name: "Class finder", description: "Helps users find a relevant class by location, format, or term and take the next step.", image: "/images/community-city.jpg", color: "#1769c2" },
  { key: "stories", name: "Stories / testimonials", description: "Shows participant experience and outcomes through a testimonial or story.", image: "/images/intercp-mission-camp.webp", color: "#53657e" },
  { key: "videos", name: "Video library", description: "Helps users browse and watch mission camp videos without leaving the page.", image: "https://i.ytimg.com/vi/zelhy09kxp8/hqdefault.jpg", color: "#102c57" },
  { key: "cta", name: "Calls to action", description: "Prompts the next action at decision points, such as finding a class or learning more.", image: "/images/community-table.jpg", color: "#1769c2" },
  { key: "footer", name: "Footer / utility navigation", description: "Provides final navigation, contact and credibility information, and routes to important pages.", image: "/images/mountain-sunrise.jpg", color: "#1f2c40" },
] as const;

export type ComponentSection = typeof sectionTypes[number]["key"];
export const sectionId = (section: ComponentSection) => `section-${section}`;
