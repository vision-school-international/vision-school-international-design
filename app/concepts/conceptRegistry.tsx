import type { ReactNode } from "react";
import { componentConcepts } from "./ComponentConcepts";
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
  ...componentConcepts,
];

export type ConceptKey = string;

export const getConceptsForSection = (section: ComponentSection) =>
  concepts.filter((concept) => Boolean(concept.sections[section]));
