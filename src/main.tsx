import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import "../app/concept-mockups.css";
import "../app/class-finder-carousel.css";
import "../app/search-navigation.css";
import "../app/video-gallery.css";
import "../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
