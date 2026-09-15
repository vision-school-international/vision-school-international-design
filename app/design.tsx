import StudioHeader from "./components/StudioHeader";

type Swatch = { name: string; hex: string; onWhite: number; onPaper: number; role: string };

const verifiedTokens: Swatch[] = [
  { name: "Navy", hex: "#102c57", onWhite: 13.82, onPaper: 12.86, role: "--color-text-strong" },
  { name: "Cobalt", hex: "#1769c2", onWhite: 5.47, onPaper: 5.09, role: "--color-link, primary action" },
  { name: "Sky", hex: "#66afe6", onWhite: 2.38, onPaper: 2.21, role: "--color-accent, active dot" },
  { name: "Ink", hex: "#1f2c40", onWhite: 14.07, onPaper: 13.09, role: "--color-text, body copy" },
  { name: "Slate", hex: "#53657e", onWhite: 5.95, onPaper: 5.54, role: "--color-text-muted" },
  { name: "Paper", hex: "#f4f7fb", onWhite: 1.07, onPaper: 1.0, role: "--color-page, page background" },
  { name: "Line", hex: "#b9c9dc", onWhite: 1.69, onPaper: 1.57, role: "--color-border" },
];

const intercpReference: Swatch[] = [
  { name: "Navy-charcoal", hex: "#33343f", onWhite: 12.33, onPaper: 11.47, role: "wst-color-title / text-primary" },
  { name: "Gold accent", hex: "#f8bd26", onWhite: 1.71, onPaper: 1.59, role: "wst-color-fill-accent-2, brand fill" },
  { name: "Gray-blue text", hex: "#5f6176", onWhite: 6.07, onPaper: 5.65, role: "wst-color-text-secondary" },
  { name: "Light bg", hex: "#f7f7f7", onWhite: 1.07, onPaper: 1.0, role: "wst-color-fill-background-secondary" },
];

// Extracted from the actual logo asset's pixels (static.wixstatic.com full-res
// PNG), not the Wix site-chrome theme above — the swirl mark and site UI use
// two different palettes.
const intercpLogo: Swatch[] = [
  { name: "Indigo", hex: "#203070", onWhite: 12.22, onPaper: 11.38, role: "wordmark + swirl base" },
  { name: "Magenta", hex: "#d83050", onWhite: 4.71, onPaper: 4.39, role: "swirl arc, top" },
  { name: "Cyan", hex: "#28a0d0", onWhite: 2.99, onPaper: 2.79, role: "swirl arc, left" },
  { name: "Mid-blue", hex: "#3078b0", onWhite: 4.73, onPaper: 4.41, role: "swirl arc, gradient" },
  { name: "Yellow-green", hex: "#a8c038", onWhite: 2.05, onPaper: 1.91, role: "swirl arc, bottom" },
];

const contrastLabel = (ratio: number) =>
  ratio >= 4.5 ? "AA text" : ratio >= 3 ? "AA large" : "decorative only";

function SwatchGrid({ swatches }: { swatches: Swatch[] }) {
  return (
    <div className="design-swatch-grid">
      {swatches.map((s) => (
        <div className="design-swatch" key={s.hex}>
          <div className="design-swatch-color" style={{ background: s.hex }} />
          <div className="design-swatch-meta">
            <strong>{s.name}</strong>
            <code>{s.hex}</code>
            <span className="design-role">{s.role}</span>
            <span className={`design-contrast design-contrast-${contrastLabel(s.onWhite).replace(/\s+/g, "-")}`}>
              {s.onWhite.toFixed(2)}:1 on white — {contrastLabel(s.onWhite)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Design() {
  return (
    <main className="studio-shell">
      <StudioHeader active="design" />
      <div className="studio-layout">
        <aside className="studio-rail" aria-label="Design system sections">
          <p className="studio-stage-label">Design System</p>
          <ul className="studio-stage-list">
            <li><a className="studio-rail-item" href="#colors-verified"><span className="studio-rail-name">Colors — verified</span></a></li>
            <li><a className="studio-rail-item" href="#colors-reference"><span className="studio-rail-name">Colors — intercp.net site theme</span></a></li>
            <li><a className="studio-rail-item" href="#colors-logo"><span className="studio-rail-name">Colors — intercp.net logo</span></a></li>
            <li><a className="studio-rail-item" href="#typography"><span className="studio-rail-name">Typography</span></a></li>
            <li><a className="studio-rail-item" href="#radius"><span className="studio-rail-name">Border radius</span></a></li>
          </ul>
        </aside>
        <section className="studio-stage">
          <header className="studio-stage-header">
            <p className="review-kicker">Design System</p>
            <h1 className="studio-stage-title">Color &amp; type reference</h1>
          </header>

          <section id="colors-verified" className="design-section">
            <h2 className="studio-stage-label">Colors — verified tokens (this system)</h2>
            <SwatchGrid swatches={verifiedTokens} />
          </section>

          <section id="colors-reference" className="design-section">
            <h2 className="studio-stage-label">Colors — intercp.net site theme (external reference only, not adopted)</h2>
            <SwatchGrid swatches={intercpReference} />
          </section>

          <section id="colors-logo" className="design-section">
            <h2 className="studio-stage-label">Colors — intercp.net logo mark (external reference only, not adopted)</h2>
            <SwatchGrid swatches={intercpLogo} />
          </section>

          <section id="typography" className="design-section">
            <h2 className="studio-stage-label">Typography</h2>
            <div className="design-type-specimen" style={{ fontFamily: "Arial, sans-serif" }}>
              <span className="design-type-label">Sans — var(--font-geist-sans)</span>
              <p style={{ fontSize: 28, fontWeight: 650 }}>Heading sample Aa</p>
              <p style={{ fontSize: 14 }}>Body sample — the quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className="design-type-specimen" style={{ fontFamily: "'SFMono-Regular', Consolas, monospace" }}>
              <span className="design-type-label">Mono — var(--font-geist-mono)</span>
              <p style={{ fontSize: 14 }}>0123456789 · kicker / code sample</p>
            </div>
            <div className="design-type-specimen" style={{ fontFamily: "helvetica-w01-roman, Helvetica, sans-serif" }}>
              <span className="design-type-label">intercp.net heading — helvetica-w01-roman</span>
              <p style={{ fontSize: 28 }}>Heading sample Aa</p>
            </div>
            <div className="design-type-specimen" style={{ fontFamily: "'avenir-lt-w01_35-light1475496', sans-serif" }}>
              <span className="design-type-label">intercp.net body — avenir-lt-w01_35-light</span>
              <p style={{ fontSize: 15 }}>Body sample — the quick brown fox jumps over the lazy dog.</p>
            </div>
          </section>

          <section id="radius" className="design-section">
            <h2 className="studio-stage-label">Border radius hierarchy</h2>
            <div className="design-radius-row">
              <div className="design-radius-sample">
                <div className="design-radius-shape" style={{ width: 64, height: 64, borderRadius: 0 }} />
                <strong>0</strong>
                <span className="design-role">structural cards, surfaces</span>
              </div>
              <div className="design-radius-sample">
                <div className="design-radius-shape" style={{ width: 64, height: 64, borderRadius: 6 }} />
                <strong>6px</strong>
                <span className="design-role">inputs, selects</span>
              </div>
              <div className="design-radius-sample">
                <div className="design-radius-shape" style={{ width: 100, height: 40, borderRadius: 999 }} />
                <strong>999px</strong>
                <span className="design-role">primary CTA pill</span>
              </div>
              <div className="design-radius-sample">
                <div className="design-radius-shape" style={{ width: 48, height: 48, borderRadius: "50%" }} />
                <strong>50%</strong>
                <span className="design-role">dismiss / status dot</span>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
