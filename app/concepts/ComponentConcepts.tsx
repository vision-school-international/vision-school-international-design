import { createElement } from "react";
import type { DesignConceptDefinition } from "./conceptRegistry";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { BreadcrumbTrail } from "../components/BreadcrumbTrail";
import { ClassFinderCarousel, type ClassFinderDesign } from "../components/ClassFinderCarousel";
import { CoursePathway } from "../components/CoursePathway";
import { DecisionCta } from "../components/DecisionCta";
import { DonationSupportCta } from "../components/DonationSupportCta";
import { EventsCalendar } from "../components/EventsCalendar";
import { FaqAccordion } from "../components/FaqAccordion";
import { GalleryImageGrid } from "../components/GalleryImageGrid";
import { MissionAbout } from "../components/MissionAbout";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { PartnerLogoStrip } from "../components/PartnerLogoStrip";
import { PurposeHero } from "../components/PurposeHero";
import { RegistrationContactForm } from "../components/RegistrationContactForm";
import { ResourcesBlogListing } from "../components/ResourcesBlogListing";
import { StudentStory } from "../components/StudentStory";
import { TeamLeadership } from "../components/TeamLeadership";
import { TrustProof } from "../components/TrustProof";
import { UtilityFooter } from "../components/UtilityFooter";
import { VideoGallery } from "../components/VideoGallery";

const classFinderDesign = {
  eyebrow: "Choose a class",
  title: "Find your class.",
  summary: "Keeps location, schedule, and registration action in one focused path.",
  metricLabel: "Fit",
  actionLabel: "View class",
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
} as const satisfies ClassFinderDesign;

export const componentConcepts: readonly DesignConceptDefinition[] = [
  {
    key: "purpose-hero",
    name: "Purpose Hero",
    image: "/images/community-city.jpg",
    color: "#1769c2",
    sections: {
      hero: function renderPurposeHero() {
        return createElement(PurposeHero);
      },
    },
  },
  {
    key: "trust-proof",
    name: "Trust Proof",
    image: "/images/intercp-young-adults.webp",
    color: "#66afe6",
    sections: {
      proof: function renderTrustProof() {
        return createElement(TrustProof);
      },
    },
  },
  {
    key: "mission-about",
    name: "Mission About",
    image: "/images/community-table.jpg",
    color: "#1f2c40",
    sections: {
      about: function renderMissionAbout() {
        return createElement(MissionAbout);
      },
    },
  },
  {
    key: "course-pathway",
    name: "Course Pathway",
    image: "/images/youth-gathering.jpg",
    color: "#102c57",
    sections: {
      course: function renderCoursePathway() {
        return createElement(CoursePathway);
      },
    },
  },
  {
    key: "class-decision-path",
    name: "Class Decision Path",
    image: "/images/community-city.jpg",
    color: "#1769c2",
    sections: {
      classes: function renderClassDecisionPath() {
        return createElement(ClassFinderCarousel, { design: classFinderDesign });
      },
    },
  },
  {
    key: "student-story",
    name: "Student Story",
    image: "/images/intercp-mission-camp.webp",
    color: "#53657e",
    sections: {
      stories: function renderStudentStory() {
        return createElement(StudentStory);
      },
    },
  },
  {
    key: "mission-video-library",
    name: "Mission Video Library",
    image: "https://i.ytimg.com/vi/zelhy09kxp8/hqdefault.jpg",
    color: "#102c57",
    sections: {
      videos: function renderMissionVideoLibrary() {
        return createElement(VideoGallery);
      },
    },
  },
  {
    key: "decision-cta",
    name: "Decision CTA",
    image: "/images/community-table.jpg",
    color: "#1769c2",
    sections: {
      cta: function renderDecisionCta() {
        return createElement(DecisionCta);
      },
    },
  },
  {
    key: "utility-footer",
    name: "Utility Footer",
    image: "/images/mountain-sunrise.jpg",
    color: "#1f2c40",
    sections: {
      footer: function renderUtilityFooter() {
        return createElement(UtilityFooter);
      },
    },
  },
  {
    key: "urgent-announcement",
    name: "Urgent Announcement",
    image: "/images/community-city.jpg",
    color: "#1769c2",
    sections: {
      announcement: function renderUrgentAnnouncement() {
        return createElement(AnnouncementBar);
      },
    },
  },
  {
    key: "orientation-breadcrumbs",
    name: "Orientation Breadcrumbs",
    image: "/images/mountain-sunrise.jpg",
    color: "#53657e",
    sections: {
      breadcrumbs: function renderOrientationBreadcrumbs() {
        return createElement(BreadcrumbTrail);
      },
    },
  },
  {
    key: "schedule-calendar",
    name: "Schedule Calendar",
    image: "/images/intercp-mission-camp.webp",
    color: "#102c57",
    sections: {
      events: function renderScheduleCalendar() {
        return createElement(EventsCalendar);
      },
    },
  },
  {
    key: "practical-faq",
    name: "Practical FAQ",
    image: "/images/community-table.jpg",
    color: "#1f2c40",
    sections: {
      faq: function renderPracticalFaq() {
        return createElement(FaqAccordion);
      },
    },
  },
  {
    key: "registration-inquiry",
    name: "Registration Inquiry",
    image: "/images/community-city.jpg",
    color: "#1769c2",
    sections: {
      registration: function renderRegistrationInquiry() {
        return createElement(RegistrationContactForm);
      },
    },
  },
  {
    key: "visitor-retention-signup",
    name: "Visitor Retention Signup",
    image: "/images/youth-gathering.jpg",
    color: "#102c57",
    sections: {
      newsletter: function renderVisitorRetentionSignup() {
        return createElement(NewsletterSignup);
      },
    },
  },
  {
    key: "partner-credibility",
    name: "Partner Credibility",
    image: "/images/community-table.jpg",
    color: "#53657e",
    sections: {
      partners: function renderPartnerCredibility() {
        return createElement(PartnerLogoStrip);
      },
    },
  },
  {
    key: "leadership-trust",
    name: "Leadership Trust",
    image: "/images/intercp-young-adults.webp",
    color: "#1f2c40",
    sections: {
      team: function renderLeadershipTrust() {
        return createElement(TeamLeadership);
      },
    },
  },
  {
    key: "ongoing-resources",
    name: "Ongoing Resources",
    image: "/images/mountain-sunrise.jpg",
    color: "#1769c2",
    sections: {
      resources: function renderOngoingResources() {
        return createElement(ResourcesBlogListing);
      },
    },
  },
  {
    key: "experience-gallery",
    name: "Experience Gallery",
    image: "/images/intercp-mission-camp.webp",
    color: "#102c57",
    sections: {
      gallery: function renderExperienceGallery() {
        return createElement(GalleryImageGrid);
      },
    },
  },
  {
    key: "support-participation",
    name: "Support Participation",
    image: "/images/community-table.jpg",
    color: "#66afe6",
    sections: {
      donation: function renderSupportParticipation() {
        return createElement(DonationSupportCta);
      },
    },
  },
];
