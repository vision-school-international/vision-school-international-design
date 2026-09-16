import { reviewCatalog } from "@vision-school-international/website-components/review";
// Only sections listed here get their own review card. `branchFinder` remains
// an alternate concept inside classFinder; the full branch directory has its
// own section because it solves a different discovery problem.
const localSectionMeta = {
    purposeHero: { image: "/images/mountain-sunrise.jpg", stage: "01" },
    announcementBar: { image: "", stage: "01" },
    breadcrumbTrail: { image: "", stage: "01" },
    missionAbout: { image: "/images/community-table.jpg", stage: "02" },
    trustProof: { image: "/images/intercp-young-adults.webp", stage: "02" },
    studentStory: { image: "/images/intercp-mission-camp.webp", stage: "02" },
    videoLibrary: { image: "/images/vision-school-media/north-america-mission-camp-worship.webp", stage: "02" },
    galleryImageGrid: { image: "/images/vision-school-media/north-america-mission-camp-worship.webp", stage: "02" },
    coursePathway: { image: "/images/youth-gathering.jpg", stage: "03" },
    classFinder: { image: "/images/vision-school-media/north-america-mission-camp-crowd.webp", stage: "03" },
    branchDirectory: { image: "/images/vision-school-media/north-america-mission-camp-crowd.webp", stage: "03" },
    eventsCalendar: { image: "/images/vision-school-media/north-america-mission-camp-nations.webp", stage: "03" },
    faqAccordion: { image: "", stage: "03" },
    decisionCta: { image: "/images/vision-school-media/young-generation-mission-camp-community.webp", stage: "04" },
    registrationContactForm: { image: "", stage: "04" },
    newsletterSignup: { image: "", stage: "04" },
    donationSupportCta: { image: "", stage: "04" },
    partnerLogoStrip: { image: "", stage: "05" },
    resourcesBlogListing: { image: "", stage: "05" },
};
export const sectionTypes = reviewCatalog
    .map((entry) => {
    const meta = localSectionMeta[entry.blockType];
    if (!meta)
        return undefined;
    return {
        key: entry.blockType,
        name: entry.name,
        description: entry.description,
        anatomy: entry.anatomy,
        color: entry.color,
        image: meta.image,
        stage: meta.stage,
    };
})
    .filter((entry) => entry !== undefined);
export const sectionId = (section) => `section-${section}`;
const stageNames = {
    "00": "Globals",
    "01": "Orientation & Hook",
    "02": "Narrative & Trust",
    "03": "Curriculum & Discovery",
    "04": "Conversion & Retention",
    "05": "Governance & Support",
};
const sectionsByStage = sectionTypes.reduce((acc, section) => {
    (acc[section.stage] ??= []).push(section.key);
    return acc;
}, { "00": [] });
export const journeyStages = Object.keys(stageNames)
    .sort()
    .map((number) => ({
    number,
    name: stageNames[number],
    sections: sectionsByStage[number] ?? [],
}));
