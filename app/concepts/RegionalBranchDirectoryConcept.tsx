import { createElement } from "react";
import { SectionRenderer } from "@vision-school-international/website-components/react";
import type { DesignConceptDefinition } from "./conceptRegistry";
import { branchFinderSection } from "./sampleSections";

export const regionalBranchDirectoryConcepts: readonly DesignConceptDefinition[] = [
  {
    key: "branch-finder",
    name: "Branch Finder",
    image: "/images/vision-school-media/north-america-mission-camp-crowd.webp",
    color: "#66afe6",
    selectorLabel: "Featured branches, up to three",
    previewLabel: "Illustrative teaser · No search or filter, capped at 3 branches",
    sections: {
      classFinder: function renderBranchFinder() {
        return createElement(SectionRenderer, {
          section: branchFinderSection,
          pathPrefix: "branch-finder",
        });
      },
    },
  },
];
