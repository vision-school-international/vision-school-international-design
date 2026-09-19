import { useState } from "react";
import { SectionRenderer } from "@vision-school-international/website-components/react";
import { branchDirectorySection } from "../concepts/sampleSections";

type Directory = typeof branchDirectorySection;

const koreanCopy: Omit<Directory, "blockType" | "branches"> = {
  kicker: "지역 안내",
  heading: "가까운 비전스쿨을 찾아보세요.",
  intro: "미국과 캐나다의 지부와 프로그램을 살펴보세요.",
  searchLabel: "지부 검색",
  searchPlaceholder: "도시, 주, 지역 또는 지부 이름",
  allCountriesLabel: "전체 지역",
  unitedStatesLabel: "미국",
  canadaLabel: "캐나다",
  clearLabel: "필터 초기화",
  resultCountSingular: "개 지부/프로그램",
  resultCountPlural: "개 지부/프로그램",
  emptyMessage: "승인된 지부 정보를 준비하고 있습니다.",
  noResultsMessage: "검색 조건에 맞는 지부가 없습니다. 다른 이름을 검색하거나 필터를 초기화해 주세요.",
  registerLabel: "수강 신청",
  websiteLabel: "지부 웹사이트",
  contactLabel: "지부 문의",
  programsLabel: "수업 대상",
  allProgramsLabel: "전체 대상",
  adultsLabel: "성인",
  youthLabel: "청소년",
  kidsLabel: "어린이",
  audiencesLabel: "프로그램",
  allNationsAdultsLabel: "모든 민족 성인",
  youngAdultsLabel: "청년",
  youngGenerationLabel: "젊은 세대",
  allGenerationsLabel: "모든 세대",
  campusLabel: "캠퍼스",
  programPendingLabel: "수업 대상 확인 중",
  audiencePendingLabel: "프로그램 확인 중",
  detailsLabel: "지부 자세히 보기",
  detailsPendingLabel: "승인된 수업 정보와 문의처를 준비하고 있습니다.",
  classDetailsLabel: "수업 안내",
  statusLabels: {
    open: "모집 중", comingSoon: "개강 예정", full: "정원 마감",
    closed: "모집 마감", cancelled: "취소됨", noCurrentClass: "현재 진행 중인 수업 없음",
  },
};

// These examples demonstrate behavior, not actual branch offerings.
const examples: NonNullable<Directory["branches"]> = [
  {
    id: "example-adults-youth", name: "Example branch A", city: "", administrativeArea: "", country: "us",
    programs: ["adults", "youth"], audiences: ["YG"], previewOnly: true,
    summary: "Fictional example with adult and youth classes. YG is a separate program label, not an age rule.",
    classSummary: "Example class details appear here once approved. No real schedule or registration is shown.",
    image: { url: "/images/branch-image-placeholder.svg", alt: "Neutral placeholder for an approved branch photograph" },
  },
  {
    id: "example-kids", name: "Example branch B", city: "", administrativeArea: "", country: "ca",
    programs: ["kids"], previewOnly: true,
    summary: "Fictional example with children’s classes. Not an actual location or enrollment offer.",
  },
  {
    id: "example-unconfirmed", name: "Example branch C", city: "", administrativeArea: "", country: "us",
    audiences: ["YA", "ANA"], previewOnly: true,
    summary: "Fictional example with an unconfirmed class type. Audience labels do not set the Adults / Youth / Kids filter.",
  },
];

export function BranchDirectoryReview() {
  const [language, setLanguage] = useState<"en" | "ko">("en");
  const [showExamples, setShowExamples] = useState(false);
  const korean = language === "ko";
  const section: Directory = {
    ...branchDirectorySection,
    ...(korean ? koreanCopy : {}),
    branches: showExamples ? examples.map((entry, index) => korean ? {
      ...entry,
      name: `가상 예시 지부 ${String.fromCharCode(65 + index)}`,
      summary: "기능 검토용 가상 정보입니다. 실제 지부의 수업이나 모집 안내가 아닙니다.",
      classSummary: entry.classSummary ? "승인된 일정과 신청 링크가 준비되면 이곳에 표시됩니다." : undefined,
      image: entry.image ? { ...entry.image, alt: "승인된 지부 사진을 위한 임시 이미지" } : undefined,
    } : entry) : branchDirectorySection.branches,
  };

  return (
    <div className="branch-directory-review" lang={language}>
      <div className="branch-directory-review__controls">
        <label>
          <span>Preview language / 언어</span>
          <select value={language} onChange={(event) => setLanguage(event.target.value as "en" | "ko")}>
            <option value="en">English</option><option value="ko">한국어 — 검토용 초안</option>
          </select>
        </label>
        <label>
          <span>{korean ? "검토할 정보" : "Review data"}</span>
          <select value={showExamples ? "examples" : "roster"} onChange={(event) => setShowExamples(event.target.value === "examples")}>
            <option value="roster">{korean ? "제공된 지부 이름" : "Supplied branch names"}</option>
            <option value="examples">{korean ? "가상 기능 예시" : "Fictional feature examples"}</option>
          </select>
        </label>
      </div>
      <p className="branch-directory-review__notice" role="status">
        {showExamples
          ? (korean ? "가상 정보만 표시됩니다. 실제 지부에 수업 대상을 임의로 지정하지 않고 필터와 상세 화면을 검토합니다."
            : "Fictional examples only. Try the class-type filters and branch details without assigning unconfirmed offerings to real branches.")
          : (korean ? "초안: DC/MD와 Frederick은 같은 지부이며 DC/VA는 별도 지부입니다. 수업 대상, 일정, 연락처, 사진 및 신청 링크는 확인 중입니다."
            : "Draft: DC/MD and Frederick are one branch; DC/VA is separate. Class types, schedules, contacts, photographs, and registration links still need confirmation.")}
      </p>
      <SectionRenderer key={`${language}-${showExamples}`} section={section} pathPrefix="branch-directory-review" />
    </div>
  );
}
