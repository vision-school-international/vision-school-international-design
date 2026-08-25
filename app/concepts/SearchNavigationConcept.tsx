import { createElement } from "react";
import type { DesignConceptDefinition } from "./conceptRegistry";
import { SearchNavigation } from "../components/SearchNavigation";

export const searchNavigationConcepts: readonly DesignConceptDefinition[] = [
  {
    key: "search-navigation",
    name: "Search Navigation",
    image: "/images/community-city.jpg",
    color: "#102c57",
    sections: {
      navigation: function renderSearchNavigation() {
        return createElement(SearchNavigation);
      },
    },
  },
];
