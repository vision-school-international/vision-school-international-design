import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import Pages from "../app/pages";
import PageView from "../app/pageView";
import { getPage } from "../app/pageRegistry";
import "../app/class-finder-carousel.css";
import "../app/new-component-sections.css";
import "../app/pages.css";
import "../app/regional-branch-directory.css";
import "../app/section-components.css";
import "../app/search-navigation.css";
import "../app/video-gallery.css";
import "../app/globals.css";

const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
const page = getPage(pathname.slice("/pages/".length));
const App = pathname === "/pages"
  ? Pages
  : page
    ? () => <PageView pageKey={page.key} />
    : Home;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
