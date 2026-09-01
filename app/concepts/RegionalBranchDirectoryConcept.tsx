import { createElement } from "react";
import { RegionalBranchDirectory } from "../components/RegionalBranchDirectory";
import type { DesignConceptDefinition } from "./conceptRegistry";

export const regionalBranchDirectoryConcepts: readonly DesignConceptDefinition[] = [
  {
    key: "regional-branch-directory",
    name: "Regional Branch Directory",
    image: "/images/vision-school-media/north-america-mission-camp-crowd.webp",
    color: "#1769c2",
    selectorLabel: "Search and expandable regional list",
    previewLabel: "Illustrative directory · Mexico remains future scope",
    sections: {
      classes: function renderRegionalBranchDirectory() {
        return createElement(RegionalBranchDirectory);
      },
    },
  },
];
