import type { ReactNode } from "react";
import { componentConcepts } from "./ComponentConcepts";
import { regionalBranchDirectoryConcepts } from "./RegionalBranchDirectoryConcept";
import { searchNavigationConcepts } from "./SearchNavigationConcept";
import type { ComponentSection } from "./componentCatalog";

export type ConceptRender = (props: { section: ComponentSection }) => ReactNode;
export type ConceptSectionMap = Partial<Record<ComponentSection, ConceptRender>>;

export type DesignConcept = {
  key: string;
  name: string;
  image: string;
  color: string;
  selectorLabel?: string;
  previewLabel?: string;
  sections: ConceptSectionMap;
};

export type DesignConceptDefinition = DesignConcept;

export const concepts: readonly DesignConcept[] = [
  ...searchNavigationConcepts,
  ...regionalBranchDirectoryConcepts,
  ...componentConcepts,
];

export type ConceptKey = string;

export const getConceptsForSection = (section: ComponentSection) =>
  concepts.filter((concept) => Boolean(concept.sections[section]));

export type PageSectionEntry = {
  section: ComponentSection;
  conceptKey: ConceptKey;
};

export const resolvePageSection = ({ section, conceptKey }: PageSectionEntry) => {
  const concept = concepts.find((candidate) => candidate.key === conceptKey);
  const render = concept?.sections[section];

  return concept && render ? { concept, render } : undefined;
};
