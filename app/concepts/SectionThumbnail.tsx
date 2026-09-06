import type { ComponentSection } from "./componentCatalog";

interface SectionThumbnailProps {
  section: ComponentSection;
  color?: string;
}

export function SectionThumbnail({ section, color = "currentColor" }: SectionThumbnailProps) {
  const accent = color;
  const strokeColor = "rgba(255, 255, 255, 0.45)";
  const fillColor = "rgba(255, 255, 255, 0.12)";
  const solidFill = "rgba(255, 255, 255, 0.9)";
  const mutedFill = "rgba(255, 255, 255, 0.25)";

  switch (section) {
    case "hero":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Left Column: Heading, Subhead, CTA */}
          <rect x="32" y="34" width="28" height="4" rx="1" fill={accent} />
          <rect x="32" y="44" width="84" height="14" rx="1" fill={solidFill} />
          <rect x="32" y="62" width="70" height="8" rx="1" fill={solidFill} />
          <rect x="32" y="75" width="76" height="4" rx="1" fill={mutedFill} />
          <rect x="32" y="82" width="56" height="4" rx="1" fill={mutedFill} />
          <rect x="32" y="94" width="38" height="14" rx="7" fill={accent} />
          <rect x="76" y="99" width="30" height="4" rx="1" fill={mutedFill} />
          {/* Right Column: Hero Media Window */}
          <rect x="126" y="34" width="82" height="74" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.06)" />
          <circle cx="167" cy="71" r="14" fill="rgba(255,255,255,0.15)" stroke={strokeColor} strokeWidth="1" />
          <polygon points="164,65 174,71 164,77" fill="#fff" />
        </svg>
      );

    case "proof":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="24" width="200" height="92" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Top Intro */}
          <rect x="88" y="34" width="64" height="6" rx="1" fill={solidFill} />
          <line x1="20" y1="48" x2="220" y2="48" stroke={strokeColor} strokeWidth="1" />
          {/* 3 Metric Columns */}
          {/* Col 1 */}
          <rect x="34" y="60" width="24" height="14" rx="1" fill={accent} />
          <rect x="34" y="80" width="40" height="4" rx="1" fill={solidFill} />
          <rect x="34" y="88" width="30" height="3" rx="1" fill={mutedFill} />
          {/* Divider */}
          <line x1="88" y1="56" x2="88" y2="104" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 2" />
          {/* Col 2 */}
          <rect x="100" y="60" width="30" height="14" rx="1" fill={accent} />
          <rect x="100" y="80" width="42" height="4" rx="1" fill={solidFill} />
          <rect x="100" y="88" width="34" height="3" rx="1" fill={mutedFill} />
          {/* Divider */}
          <line x1="154" y1="56" x2="154" y2="104" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 2" />
          {/* Col 3 */}
          <rect x="166" y="60" width="28" height="14" rx="1" fill={accent} />
          <rect x="166" y="80" width="38" height="4" rx="1" fill={solidFill} />
          <rect x="166" y="88" width="28" height="3" rx="1" fill={mutedFill} />
        </svg>
      );

    case "about":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Left: Image Container */}
          <rect x="32" y="32" width="76" height="76" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <line x1="32" y1="92" x2="108" y2="92" stroke={strokeColor} strokeWidth="1" />
          <rect x="40" y="97" width="36" height="4" rx="1" fill={mutedFill} />
          {/* Right: Narrative Editorial */}
          <rect x="120" y="34" width="26" height="4" rx="1" fill={accent} />
          <rect x="120" y="44" width="84" height="10" rx="1" fill={solidFill} />
          <rect x="120" y="60" width="88" height="4" rx="1" fill={mutedFill} />
          <rect x="120" y="68" width="80" height="4" rx="1" fill={mutedFill} />
          {/* Highlight Quote Box */}
          <rect x="120" y="78" width="88" height="30" rx="2" fill="rgba(255,255,255,0.06)" stroke={accent} strokeWidth="1" />
          <rect x="128" y="86" width="72" height="4" rx="1" fill={solidFill} />
          <rect x="128" y="94" width="50" height="4" rx="1" fill={mutedFill} />
        </svg>
      );

    case "course":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Header */}
          <rect x="32" y="30" width="60" height="6" rx="1" fill={solidFill} />
          {/* Timeline Connector Line */}
          <line x1="32" y1="52" x2="208" y2="52" stroke={accent} strokeWidth="2" />
          {/* 3 Step Cards */}
          {/* Step 1 */}
          <circle cx="56" cy="52" r="6" fill={accent} stroke="#fff" strokeWidth="1" />
          <rect x="34" y="64" width="44" height="44" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="40" y="70" width="16" height="4" rx="1" fill={accent} />
          <rect x="40" y="78" width="32" height="5" rx="1" fill={solidFill} />
          <rect x="40" y="88" width="24" height="3" rx="1" fill={mutedFill} />
          {/* Step 2 */}
          <circle cx="120" cy="52" r="6" fill={accent} stroke="#fff" strokeWidth="1" />
          <rect x="98" y="64" width="44" height="44" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="104" y="70" width="16" height="4" rx="1" fill={accent} />
          <rect x="104" y="78" width="32" height="5" rx="1" fill={solidFill} />
          <rect x="104" y="88" width="24" height="3" rx="1" fill={mutedFill} />
          {/* Step 3 */}
          <circle cx="184" cy="52" r="6" fill={accent} stroke="#fff" strokeWidth="1" />
          <rect x="162" y="64" width="44" height="44" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="168" y="70" width="16" height="4" rx="1" fill={accent} />
          <rect x="168" y="78" width="32" height="5" rx="1" fill={solidFill} />
          <rect x="168" y="88" width="24" height="3" rx="1" fill={mutedFill} />
        </svg>
      );

    case "classes":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Filter Bar */}
          <rect x="32" y="30" width="176" height="20" rx="4" fill="rgba(255,255,255,0.08)" stroke={strokeColor} strokeWidth="1" />
          <circle cx="44" cy="40" r="4" stroke={solidFill} strokeWidth="1" />
          <rect x="54" y="38" width="40" height="4" rx="1" fill={mutedFill} />
          <rect x="156" y="34" width="44" height="12" rx="3" fill={accent} />
          {/* 2 Class Listing Cards */}
          {/* Card 1 */}
          <rect x="32" y="58" width="84" height="50" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.06)" />
          <rect x="40" y="66" width="30" height="6" rx="2" fill={accent} />
          <rect x="40" y="76" width="56" height="5" rx="1" fill={solidFill} />
          <rect x="40" y="85" width="46" height="4" rx="1" fill={mutedFill} />
          <rect x="40" y="94" width="24" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
          {/* Card 2 */}
          <rect x="124" y="58" width="84" height="50" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.06)" />
          <rect x="132" y="66" width="30" height="6" rx="2" fill={accent} />
          <rect x="132" y="76" width="56" height="5" rx="1" fill={solidFill} />
          <rect x="132" y="85" width="46" height="4" rx="1" fill={mutedFill} />
          <rect x="132" y="94" width="24" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
        </svg>
      );

    case "stories":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Quote Mark Glyph */}
          <text x="34" y="54" fill={accent} fontSize="32" fontFamily="Georgia, serif" fontWeight="bold">“</text>
          {/* Story Text Lines */}
          <rect x="56" y="38" width="150" height="6" rx="1" fill={solidFill} />
          <rect x="36" y="50" width="170" height="6" rx="1" fill={solidFill} />
          <rect x="36" y="62" width="130" height="6" rx="1" fill={solidFill} />
          {/* Author Strip */}
          <circle cx="48" cy="92" r="12" fill={accent} stroke="#fff" strokeWidth="1" />
          <rect x="68" y="86" width="52" height="6" rx="1" fill={solidFill} />
          <rect x="68" y="96" width="38" height="4" rx="1" fill={mutedFill} />
        </svg>
      );

    case "videos":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Main Player Container */}
          <rect x="32" y="28" width="176" height="60" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.06)" />
          {/* Play Button */}
          <circle cx="120" cy="58" r="14" fill={accent} stroke="#fff" strokeWidth="1" />
          <polygon points="117,52 127,58 117,64" fill="#fff" />
          {/* Video Playlist Strips */}
          <rect x="32" y="94" width="54" height="18" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="93" y="94" width="54" height="18" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="154" y="94" width="54" height="18" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
        </svg>
      );

    case "cta":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Accent Border Top */}
          <rect x="20" y="20" width="200" height="4" fill={accent} />
          {/* Centered Message */}
          <rect x="100" y="38" width="40" height="4" rx="1" fill={accent} />
          <rect x="55" y="48" width="130" height="12" rx="1" fill={solidFill} />
          <rect x="70" y="66" width="100" height="5" rx="1" fill={mutedFill} />
          {/* Centered Action Button */}
          <rect x="85" y="84" width="70" height="20" rx="10" fill={accent} />
          <rect x="100" y="92" width="40" height="4" rx="1" fill="#fff" />
        </svg>
      );

    case "announcement":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Background Ghost Page */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Floating High-Contrast Banner Bar */}
          <rect x="30" y="48" width="180" height="34" rx="4" fill={accent} stroke="#fff" strokeWidth="1" />
          {/* Badge */}
          <rect x="40" y="56" width="28" height="18" rx="2" fill="#fff" />
          <rect x="44" y="63" width="20" height="4" rx="1" fill={accent} />
          {/* Announcement Copy */}
          <rect x="76" y="62" width="104" height="6" rx="1" fill="#fff" />
          <polygon points="192,65 198,65 195,61 200,65 195,69 198,65" fill="#fff" />
        </svg>
      );

    case "breadcrumbs":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Breadcrumb Path Bar */}
          <rect x="32" y="38" width="176" height="26" rx="4" fill="rgba(255,255,255,0.08)" stroke={strokeColor} strokeWidth="1" />
          {/* Crumb 1 */}
          <rect x="42" y="48" width="24" height="6" rx="1" fill={mutedFill} />
          <text x="72" y="54" fill={mutedFill} fontSize="10" fontFamily="sans-serif">›</text>
          {/* Crumb 2 */}
          <rect x="82" y="48" width="30" height="6" rx="1" fill={mutedFill} />
          <text x="118" y="54" fill={mutedFill} fontSize="10" fontFamily="sans-serif">›</text>
          {/* Crumb 3 (Active) */}
          <rect x="128" y="46" width="46" height="10" rx="2" fill={accent} />
          <rect x="134" y="49" width="34" height="4" rx="1" fill="#fff" />
          {/* Page Title Below */}
          <rect x="32" y="80" width="90" height="12" rx="1" fill={solidFill} />
          <rect x="32" y="98" width="60" height="4" rx="1" fill={mutedFill} />
        </svg>
      );

    case "events":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Event Card 1 */}
          <rect x="32" y="32" width="176" height="34" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="40" y="38" width="22" height="22" rx="2" fill={accent} />
          <rect x="44" y="43" width="14" height="3" rx="1" fill="#fff" />
          <rect x="44" y="49" width="14" height="6" rx="1" fill="#fff" />
          <rect x="70" y="40" width="70" height="6" rx="1" fill={solidFill} />
          <rect x="70" y="50" width="50" height="4" rx="1" fill={mutedFill} />
          <rect x="166" y="41" width="34" height="16" rx="8" fill="rgba(255,255,255,0.15)" />
          {/* Event Card 2 */}
          <rect x="32" y="74" width="176" height="34" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="40" y="80" width="22" height="22" rx="2" fill={accent} />
          <rect x="44" y="85" width="14" height="3" rx="1" fill="#fff" />
          <rect x="44" y="91" width="14" height="6" rx="1" fill="#fff" />
          <rect x="70" y="82" width="70" height="6" rx="1" fill={solidFill} />
          <rect x="70" y="92" width="50" height="4" rx="1" fill={mutedFill} />
          <rect x="166" y="83" width="34" height="16" rx="8" fill="rgba(255,255,255,0.15)" />
        </svg>
      );

    case "faq":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Accordion Row 1 (Expanded) */}
          <rect x="32" y="30" width="176" height="36" rx="2" stroke={accent} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="42" y="38" width="90" height="6" rx="1" fill={solidFill} />
          <text x="194" y="43" fill={accent} fontSize="14" fontWeight="bold">−</text>
          <rect x="42" y="50" width="140" height="4" rx="1" fill={mutedFill} />
          <rect x="42" y="57" width="100" height="4" rx="1" fill={mutedFill} />
          {/* Accordion Row 2 */}
          <rect x="32" y="72" width="176" height="18" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.04)" />
          <rect x="42" y="78" width="110" height="6" rx="1" fill={solidFill} />
          <text x="194" y="85" fill={solidFill} fontSize="12">+</text>
          {/* Accordion Row 3 */}
          <rect x="32" y="96" width="176" height="18" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.04)" />
          <rect x="42" y="102" width="96" height="6" rx="1" fill={solidFill} />
          <text x="194" y="109" fill={solidFill} fontSize="12">+</text>
        </svg>
      );

    case "registration":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="16" width="200" height="108" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          <rect x="32" y="26" width="50" height="6" rx="1" fill={solidFill} />
          {/* 2 Form Input Columns */}
          <rect x="32" y="38" width="82" height="18" rx="3" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.06)" />
          <rect x="38" y="45" width="30" height="4" rx="1" fill={mutedFill} />
          <rect x="122" y="38" width="86" height="18" rx="3" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.06)" />
          <rect x="128" y="45" width="30" height="4" rx="1" fill={mutedFill} />
          {/* Full Width Input */}
          <rect x="32" y="62" width="176" height="18" rx="3" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.06)" />
          <rect x="38" y="69" width="45" height="4" rx="1" fill={mutedFill} />
          {/* Submit Action */}
          <rect x="32" y="88" width="64" height="22" rx="4" fill={accent} />
          <rect x="44" y="97" width="40" height="4" rx="1" fill="#fff" />
        </svg>
      );

    case "newsletter":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="24" width="200" height="92" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          <rect x="34" y="38" width="80" height="8" rx="1" fill={solidFill} />
          <rect x="34" y="50" width="110" height="4" rx="1" fill={mutedFill} />
          {/* Inline Email Input + Button */}
          <rect x="34" y="66" width="110" height="28" rx="3" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.06)" />
          <rect x="44" y="78" width="50" height="4" rx="1" fill={mutedFill} />
          <rect x="148" y="66" width="58" height="28" rx="3" fill={accent} />
          <rect x="160" y="78" width="34" height="4" rx="1" fill="#fff" />
        </svg>
      );

    case "partners":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="24" width="200" height="92" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          <rect x="80" y="36" width="80" height="5" rx="1" fill={solidFill} />
          {/* 4 Partner Logo Badges */}
          <rect x="34" y="54" width="36" height="36" rx="4" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <circle cx="52" cy="72" r="8" stroke={accent} strokeWidth="1.5" />
          <rect x="78" y="54" width="36" height="36" rx="4" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="88" y="64" width="16" height="16" stroke={accent} strokeWidth="1.5" />
          <rect x="122" y="54" width="36" height="36" rx="4" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <polygon points="140,62 148,78 132,78" stroke={accent} strokeWidth="1.5" fill="none" />
          <rect x="166" y="54" width="36" height="36" rx="4" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <circle cx="184" cy="72" r="9" stroke={accent} strokeWidth="1" strokeDasharray="3 2" />
        </svg>
      );

    case "resources":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* 3 Resource Cards */}
          {/* Card 1 */}
          <rect x="32" y="32" width="50" height="74" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="38" y="38" width="20" height="6" rx="1" fill={accent} />
          <rect x="38" y="50" width="38" height="5" rx="1" fill={solidFill} />
          <rect x="38" y="58" width="30" height="3" rx="1" fill={mutedFill} />
          <rect x="38" y="88" width="16" height="10" rx="1" fill="rgba(255,255,255,0.2)" />
          {/* Card 2 */}
          <rect x="95" y="32" width="50" height="74" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="101" y="38" width="20" height="6" rx="1" fill={accent} />
          <rect x="101" y="50" width="38" height="5" rx="1" fill={solidFill} />
          <rect x="101" y="58" width="30" height="3" rx="1" fill={mutedFill} />
          <rect x="101" y="88" width="16" height="10" rx="1" fill="rgba(255,255,255,0.2)" />
          {/* Card 3 */}
          <rect x="158" y="32" width="50" height="74" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="164" y="38" width="20" height="6" rx="1" fill={accent} />
          <rect x="164" y="50" width="38" height="5" rx="1" fill={solidFill} />
          <rect x="164" y="58" width="30" height="3" rx="1" fill={mutedFill} />
          <rect x="164" y="88" width="16" height="10" rx="1" fill="rgba(255,255,255,0.2)" />
        </svg>
      );

    case "gallery":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Asymmetric 4-Photo Masonry Grid */}
          <rect x="32" y="30" width="94" height="80" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.12)" />
          <circle cx="46" cy="44" r="5" fill={accent} />
          <rect x="134" y="30" width="74" height="36" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="134" y="74" width="34" height="36" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="174" y="74" width="34" height="36" rx="2" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
        </svg>
      );

    case "donation":
      return (
        <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-schematic-svg" aria-hidden="true">
          {/* Frame */}
          <rect x="20" y="20" width="200" height="100" rx="2" stroke={strokeColor} strokeWidth="1.5" fill={fillColor} />
          {/* Title */}
          <rect x="70" y="32" width="100" height="6" rx="1" fill={solidFill} />
          {/* 3 Giving Tier Amount Pills */}
          <rect x="40" y="48" width="46" height="20" rx="10" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="52" y="56" width="22" height="4" rx="1" fill={solidFill} />
          <rect x="97" y="48" width="46" height="20" rx="10" fill={accent} stroke="#fff" strokeWidth="1" />
          <rect x="109" y="56" width="22" height="4" rx="1" fill="#fff" />
          <rect x="154" y="48" width="46" height="20" rx="10" stroke={strokeColor} strokeWidth="1" fill="rgba(255,255,255,0.08)" />
          <rect x="166" y="56" width="22" height="4" rx="1" fill={solidFill} />
          {/* Custom Input + Button */}
          <rect x="40" y="78" width="160" height="24" rx="12" fill={accent} />
          <rect x="85" y="88" width="70" height="4" rx="1" fill="#fff" />
        </svg>
      );

    default:
      return null;
  }
}
