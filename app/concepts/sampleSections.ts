// Sample content for concepts that render shared components from
// @vision-school-international/website-components instead of a hardcoded
// app/components/*.tsx file. Each constant is built from the exact copy the
// hardcoded component previously used verbatim -- no invented content -- and
// typed against that package's own Section type so a shape mismatch fails
// `npx tsc --noEmit` immediately.

import type { SharedSection } from "@vision-school-international/website-components";

// The package's public surface only exports the discriminated SharedSection
// union (its individual *Section types are internal to each component
// folder and aren't part of the public entry points). Narrow by blockType.
type SectionOf<T extends SharedSection["blockType"]> = Extract<SharedSection, { blockType: T }>;
type DonationSupportCtaSection = SectionOf<"donationSupportCta">;
type EventsCalendarSection = SectionOf<"eventsCalendar">;
type FaqAccordionSection = SectionOf<"faqAccordion">;
type GalleryImageGridSection = SectionOf<"galleryImageGrid">;
type NewsletterSignupSection = SectionOf<"newsletterSignup">;
type RegistrationContactFormSection = SectionOf<"registrationContactForm">;
type ResourcesBlogListingSection = SectionOf<"resourcesBlogListing">;
type VideoLibrarySection = SectionOf<"videoLibrary">;
type AnnouncementBarSection = SectionOf<"announcementBar">;
type BreadcrumbTrailSection = SectionOf<"breadcrumbTrail">;
type ClassFinderSection = SectionOf<"classFinder">;
type CoursePathwaySection = SectionOf<"coursePathway">;
type DecisionCtaSection = SectionOf<"decisionCta">;
type MissionAboutSection = SectionOf<"missionAbout">;
type PartnerLogoStripSection = SectionOf<"partnerLogoStrip">;
type PurposeHeroSection = SectionOf<"purposeHero">;
type StudentStorySection = SectionOf<"studentStory">;
type TrustProofSection = SectionOf<"trustProof">;
type BranchFinderSection = SectionOf<"branchFinder">;

export const supportParticipationSection: DonationSupportCtaSection = {
  blockType: "donationSupportCta",
  title: "Support Vision School",
  heading: "Give supporters a clear path to participate.",
  disclaimer: "Use only if financial support is part of the approved page scope.",
  ctaLabel: "Support the work",
  ctaHref: "#section-donation",
};

export const ongoingResourcesSection: ResourcesBlogListingSection = {
  blockType: "resourcesBlogListing",
  title: "Resources",
  heading: "Give visitors more to read next.",
  linkLabel: "Read more",
  items: [
    { category: "Teaching", name: "Mission foundations for new students", href: "#section-resources" },
    { category: "Story", name: "How students respond after the course", href: "#section-resources" },
    { category: "Guide", name: "Questions to ask before choosing a class", href: "#section-resources" },
  ],
};

export const scheduleCalendarSection: EventsCalendarSection = {
  blockType: "eventsCalendar",
  title: "Events calendar",
  heading: "Show dates before users ask.",
  note: "Sample schedule categories · Confirm final dates before publishing",
  events: [
    { timing: "Fall term", name: "Session start", detail: "Weekly class begins" },
    { timing: "Seasonal event", name: "Mission camp", detail: "Training and worship gathering" },
    { timing: "Before class", name: "Orientation", detail: "Practical details for students" },
  ],
};

export const visitorRetentionSignupSection: NewsletterSignupSection = {
  blockType: "newsletterSignup",
  title: "Stay connected",
  heading: "Keep interested visitors in reach.",
  emailLabel: "Email address",
  emailPlaceholder: "email@example.com",
  buttonLabel: "Sign up",
  caption: "Review-only signup. No subscription is created.",
};

export const registrationInquirySection: RegistrationContactFormSection = {
  blockType: "registrationContactForm",
  title: "Registration inquiry",
  heading: "Convert interest into a clear request.",
  description: "Use this component for enrollment questions, class interest, or contact follow-up.",
  nameLabel: "Name",
  namePlaceholder: "Student name",
  emailLabel: "Email",
  emailPlaceholder: "student@example.com",
  interestLabel: "Interest",
  interestOptions: [
    { label: "Find a class", value: "class" },
    { label: "Mission camp", value: "camp" },
    { label: "Talk to a coordinator", value: "contact" },
  ],
  submitLabel: "Submit inquiry",
};

export const practicalFaqSection: FaqAccordionSection = {
  blockType: "faqAccordion",
  title: "FAQ",
  heading: "Answer practical questions clearly.",
  items: [
    {
      question: "Who is Vision School for?",
      answer: "Believers who want to understand mission and discern a faithful next step.",
    },
    {
      question: "How long is the course?",
      answer: "Use this answer for the approved course length, rhythm, and attendance expectations.",
    },
    {
      question: "How do I register?",
      answer: "Point users to the approved class finder, inquiry form, or registration system.",
    },
  ],
};

export const experienceGallerySection: GalleryImageGridSection = {
  blockType: "galleryImageGrid",
  title: "Gallery",
  heading: "Show the training experience visually.",
  note: "Official InterCP video stills · Confirm publication and participant approvals before publishing",
  images: [
    {
      image: {
        url: "/images/vision-school-media/north-america-mission-camp-crowd.webp",
        alt: "A large multigenerational Mission Camp gathering holding international flags",
        width: 1600,
        height: 900,
      },
    },
    {
      image: {
        url: "/images/vision-school-media/north-america-mission-camp-nations.webp",
        alt: "Mission Camp participants standing together with country signs and flags",
        width: 1600,
        height: 900,
      },
    },
    {
      image: {
        url: "/images/vision-school-media/young-generation-mission-camp-community.webp",
        alt: "Young adults gathered in community during North America Mission Camp",
        width: 1600,
        height: 900,
      },
    },
    {
      image: {
        url: "/images/vision-school-media/north-america-mission-camp-worship.webp",
        alt: "Participants worshiping together during North America Mission Camp",
        width: 1600,
        height: 900,
      },
    },
  ],
};

export const missionVideoLibrarySection: VideoLibrarySection = {
  blockType: "videoLibrary",
  kicker: "Video library",
  heading: "Mission camp videos",
  videos: [
    { youtubeId: "zelhy09kxp8", title: "2026 샬롬 예루살렘 | Shalom Jerusalem", region: "Jerusalem", year: "2026" },
    { youtubeId: "A_vxSIJ3zn8", title: "2024 North America Young Generation Mission Camp", region: "North America", year: "2024" },
    { youtubeId: "KrXs0s7b2QQ", title: "2025 North America Young Generation Mission Camp", region: "North America", year: "2025" },
    { youtubeId: "BE_ZqgH2tKs", title: "North America All Generation Mission Camp 2025 Sketch Video", region: "North America", year: "2025" },
    { youtubeId: "ADyp6ZD7z1Y", title: "InterCP International 2023 Europe Mission Camp Sketch Video", region: "Europe", year: "2023" },
    { youtubeId: "iYgBFL475o4", title: "2026 ASEAN Mission Camp Sketch Video", region: "ASEAN", year: "2026" },
    { youtubeId: "ZP-2BUARsQw", title: "2025 ASEAN Mission Camp Sketch Video", region: "ASEAN", year: "2025" },
    { youtubeId: "j0VlqGoxP20", title: "InterCP International 2023 ASEAN Mission Camp Sketch Video", region: "ASEAN", year: "2023" },
    { youtubeId: "2fnCbtwCJms", title: "2024 ASEAN Mission Camp Sketch Video", region: "ASEAN", year: "2024" },
  ],
};

export const urgentAnnouncementSection: AnnouncementBarSection = {
  blockType: "announcementBar",
  title: "Registration update",
  heading: "Fall class interest is open for review.",
  body: "Use this area for deadlines, camps, or urgent schedule changes.",
  ctaLabel: "Start inquiry",
  ctaHref: "#section-registration",
};

export const orientationBreadcrumbsSection: BreadcrumbTrailSection = {
  blockType: "breadcrumbTrail",
  items: [
    { label: "Home", href: "#section-navigation" },
    { label: "Courses", href: "#section-navigation" },
    { label: "Vision School", href: "#section-navigation" },
    { label: "Class details" },
  ],
};

export const classDecisionPathSection: ClassFinderSection = {
  blockType: "classFinder",
  title: "Choose a class",
  heading: "Find your class.",
  body: "Keeps location, schedule, and registration action in one focused path.",
  metricLabel: "Fit",
  ctaLabel: "View class",
  ctaHref: "#section-classes",
  items: [
    {
      audience: "YG & ANA",
      place: "Frederick, MD",
      format: "In person",
      term: "Fall 2026",
      rhythm: "Local cohort",
      note: "Closest visible option for users looking for a direct local path.",
    },
    {
      audience: "YG & ANA",
      place: "Gaithersburg, MD",
      format: "In person",
      term: "Fall 2026",
      rhythm: "Metro area",
      note: "Secondary option for users comparing nearby branch context.",
    },
    {
      audience: "YG & ANA",
      place: "Baltimore, MD",
      format: "In person",
      term: "Fall 2026",
      rhythm: "Regional class",
      note: "Regional option for users searching beyond the nearest branch.",
    },
  ],
};

export const coursePathwaySection: CoursePathwaySection = {
  blockType: "coursePathway",
  title: "Course content",
  heading: "Show what users will learn.",
  photo: {
    url: "/images/youth-gathering.jpg",
    alt: "Young adults gathered in a learning setting",
    width: 2000,
    height: 1164,
  },
  modules: [
    { label: "01", title: "Biblical vision", body: "See God's purpose for every people." },
    { label: "02", title: "Mission history", body: "Learn how the church has responded across generations." },
    { label: "03", title: "World context", body: "Understand unreached peoples and current mission needs." },
    { label: "04", title: "Personal response", body: "Connect learning to a practical next step." },
  ],
};

export const decisionCtaSection: DecisionCtaSection = {
  blockType: "decisionCta",
  title: "Ready to begin?",
  heading: "Find the class that fits your next step.",
  ctaLabel: "Find a Vision School class",
  ctaHref: "#section-classes",
};

export const missionAboutSection: MissionAboutSection = {
  blockType: "missionAbout",
  title: "About Vision School",
  heading: "Designed to move users from interest to understanding.",
  lede: "Vision School introduces the biblical, historical, cultural, and practical foundations of mission in a guided community setting.",
  points: [
    { title: "Purpose", body: "Understand God's heart for all nations." },
    { title: "Formation", body: "Connect learning with prayer, worship, and community." },
    { title: "Response", body: "Discern a faithful next step locally or globally." },
  ],
};

export const partnerCredibilitySection: PartnerLogoStripSection = {
  blockType: "partnerLogoStrip",
  title: "Partners",
  heading: "Show cooperation with visible credibility.",
  note: "Sample partner labels · Replace with approved organizations",
  partners: [
    { name: "Local church" },
    { name: "Campus ministry" },
    { name: "Mission partner" },
    { name: "Prayer network" },
  ],
};

export const purposeHeroSection: PurposeHeroSection = {
  blockType: "purposeHero",
  title: "Vision School International",
  heading: "Discover God's heart for the world.",
  body: "An 11-week course helping believers understand God's global purpose and take a clear next step.",
  primaryCtaLabel: "Find a class",
  primaryCtaHref: "#section-classes",
  secondaryCtaLabel: "What is Vision School?",
  secondaryCtaHref: "#section-about",
  photo: {
    url: "/images/community-city.jpg",
    alt: "A diverse community learning together outdoors",
    width: 2000,
    height: 1125,
  },
};

// The current markup has no real testimonial name yet -- only a caption
// stating "Sample story · Replace with an approved testimonial." Per this
// package's own migration guidance (match intent, not just dev-review
// scaffolding), that caption becomes a real `attribution` field instead of
// being carried into the schema verbatim. No approved name exists yet, so
// the placeholder text below states that plainly, consistent with this
// gallery's existing illustrative-content convention.
export const studentStorySection: StudentStorySection = {
  blockType: "studentStory",
  title: "Student story",
  quote: "Vision School helped me see God's heart for the nations and consider a faithful next step.",
  attribution: "Sample story · Name pending ministry approval",
  photo: {
    url: "/images/intercp-mission-camp.webp",
    alt: "Vision School community gathering",
    width: 1601,
    height: 774,
  },
};

export const trustProofSection: TrustProofSection = {
  blockType: "trustProof",
  title: "Program proof",
  heading: "Clear facts before commitment.",
  facts: [
    { label: "weekly sessions", value: "11" },
    { label: "learning rhythms", value: "3" },
    { label: "next step", value: "1" },
  ],
  note: "Sample facts for review · Confirm final program details before publishing",
};

// branch-finder is capped at 3 branches (Payload maxRows: 3) and has no
// search/filter/expand -- it's a small featured-branches teaser, not a
// replacement for RegionalBranchDirectory.tsx's full searchable directory.
// Both are registered as separate concepts for the "classes" section.
export const branchFinderSection: BranchFinderSection = {
  blockType: "branchFinder",
  kicker: "Class finder",
  heading: "Find Vision School near you.",
  intro: "Start with featured locations, then search or browse the full directory by country and region.",
  featuredLabel: "Featured samples",
  viewAllLabel: "Browse all sample locations",
  emptyMessage: "No sample locations match this search. Clear the search or choose another country.",
  unavailableLinkLabel: "Registration link pending",
  destinationAriaLabelTemplate: "View {branch} details",
  branches: [
    {
      name: "Sample Northeast branch",
      city: "City to be confirmed",
      administrativeArea: "State to be confirmed",
      region: "Northeast",
      country: "us",
      schedule: "Class schedule pending",
      destinationType: "website",
      destinationLabel: "Registration link pending",
      destinationUrl: "https://example.com/pending",
    },
    {
      name: "Sample Mid-Atlantic branch",
      city: "City to be confirmed",
      administrativeArea: "State to be confirmed",
      region: "Mid-Atlantic",
      country: "us",
      schedule: "Class schedule pending",
      destinationType: "website",
      destinationLabel: "Registration link pending",
      destinationUrl: "https://example.com/pending",
    },
    {
      name: "Sample Western Canada branch",
      city: "City to be confirmed",
      administrativeArea: "Province to be confirmed",
      region: "Western Canada",
      country: "ca",
      schedule: "Class schedule pending",
      destinationType: "website",
      destinationLabel: "Registration link pending",
      destinationUrl: "https://example.com/pending",
    },
  ],
};
