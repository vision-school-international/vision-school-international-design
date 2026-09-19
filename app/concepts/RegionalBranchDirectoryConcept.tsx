import { createElement } from "react";
import type { DesignConceptDefinition } from "./conceptRegistry";
import { BranchDirectoryReview } from "../components/BranchDirectoryReview";

export const regionalBranchDirectoryConcepts: readonly DesignConceptDefinition[] = [
  {
    key: "branch-directory",
    name: "Branch Directory",
    image: "/images/vision-school-media/north-america-mission-camp-crowd.webp",
    color: "#1769c2",
    selectorLabel: "All branch and program entries",
    previewLabel: "Draft branch information · Not a published class list",
    sections: {
      branchDirectory: function renderBranchDirectory() {
        return createElement(BranchDirectoryReview);
      },
    },
  },
];
