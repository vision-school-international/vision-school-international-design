import { createElement } from "react";
import { SectionRenderer } from "@vision-school-international/website-components/react";
import type { DesignConceptDefinition } from "./conceptRegistry";
import {
  classDecisionPathSection,
  coursePathwaySection,
  decisionCtaSection,
  experienceGallerySection,
  missionAboutSection,
  missionVideoLibrarySection,
  ongoingResourcesSection,
  orientationBreadcrumbsSection,
  partnerCredibilitySection,
  practicalFaqSection,
  purposeHeroSection,
  registrationInquirySection,
  scheduleCalendarSection,
  studentStorySection,
  supportParticipationSection,
  trustProofSection,
  urgentAnnouncementSection,
  visitorRetentionSignupSection,
} from "./sampleSections";

export const componentConcepts: readonly DesignConceptDefinition[] = [
  {
    key: "purpose-hero",
    name: "Purpose Hero",
    image: "/images/community-city.jpg",
    color: "#1769c2",
    sections: {
      hero: function renderPurposeHero() {
        return createElement(SectionRenderer, {
          section: purposeHeroSection,
          pathPrefix: "purpose-hero",
        });
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
        return createElement(SectionRenderer, {
          section: trustProofSection,
          pathPrefix: "trust-proof",
        });
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
        return createElement(SectionRenderer, {
          section: missionAboutSection,
          pathPrefix: "mission-about",
        });
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
        return createElement(SectionRenderer, {
          section: coursePathwaySection,
          pathPrefix: "course-pathway",
        });
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
        return createElement(SectionRenderer, {
          section: classDecisionPathSection,
          pathPrefix: "class-decision-path",
        });
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
        return createElement(SectionRenderer, {
          section: studentStorySection,
          pathPrefix: "student-story",
        });
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
        return createElement(SectionRenderer, {
          section: missionVideoLibrarySection,
          pathPrefix: "mission-video-library",
        });
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
        return createElement(SectionRenderer, {
          section: decisionCtaSection,
          pathPrefix: "decision-cta",
        });
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
        return createElement(SectionRenderer, {
          section: urgentAnnouncementSection,
          pathPrefix: "urgent-announcement",
        });
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
        return createElement(SectionRenderer, {
          section: orientationBreadcrumbsSection,
          pathPrefix: "orientation-breadcrumbs",
        });
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
        return createElement(SectionRenderer, {
          section: scheduleCalendarSection,
          pathPrefix: "schedule-calendar",
        });
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
        return createElement(SectionRenderer, {
          section: practicalFaqSection,
          pathPrefix: "practical-faq",
        });
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
        return createElement(SectionRenderer, {
          section: registrationInquirySection,
          pathPrefix: "registration-inquiry",
        });
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
        return createElement(SectionRenderer, {
          section: visitorRetentionSignupSection,
          pathPrefix: "visitor-retention-signup",
        });
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
        return createElement(SectionRenderer, {
          section: partnerCredibilitySection,
          pathPrefix: "partner-credibility",
        });
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
        return createElement(SectionRenderer, {
          section: ongoingResourcesSection,
          pathPrefix: "ongoing-resources",
        });
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
        return createElement(SectionRenderer, {
          section: experienceGallerySection,
          pathPrefix: "experience-gallery",
        });
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
        return createElement(SectionRenderer, {
          section: supportParticipationSection,
          pathPrefix: "support-participation",
        });
      },
    },
  },
];
