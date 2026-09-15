import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import Pages from "../app/pages";
import PageView from "../app/pageView";
import Design from "../app/design";
import "../app/design.css";
import "../app/pages.css";
import "../app/globals.css";

const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
const pageKey = pathname.slice("/pages/".length);
const App = pathname === "/pages"
  ? Pages
  : pathname === "/design"
    ? Design
    : pageKey
      ? () => <PageView pageKey={pageKey} />
      : Home;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);