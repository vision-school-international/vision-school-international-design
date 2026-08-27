"use client";

import { useMemo, useState } from "react";

type DirectoryCountry = "United States" | "Canada";
type CountryFilter = "All" | DirectoryCountry;

export type BranchDirectoryItem = {
  id: string;
  branchName: string;
  place: string;
  country: DirectoryCountry;
  region: string;
  schedule: string;
};

const sampleBranches: readonly BranchDirectoryItem[] = [
  {
    id: "sample-us-northeast",
    branchName: "Sample Northeast branch",
    place: "City and state to be confirmed",
    country: "United States",
    region: "Northeast",
    schedule: "Class schedule pending",
  },
  {
    id: "sample-us-mid-atlantic",
    branchName: "Sample Mid-Atlantic branch",
    place: "City and state to be confirmed",
    country: "United States",
    region: "Mid-Atlantic",
    schedule: "Class schedule pending",
  },
  {
    id: "sample-ca-western",
    branchName: "Sample Western Canada branch",
    place: "City and province to be confirmed",
    country: "Canada",
    region: "Western Canada",
    schedule: "Class schedule pending",
  },
  {
    id: "sample-us-southeast",
    branchName: "Sample Southeast branch",
    place: "City and state to be confirmed",
    country: "United States",
    region: "Southeast",
    schedule: "Class schedule pending",
  },
  {
    id: "sample-us-midwest",
    branchName: "Sample Midwest branch",
    place: "City and state to be confirmed",
    country: "United States",
    region: "Midwest",
    schedule: "Class schedule pending",
  },
  {
    id: "sample-us-southwest",
    branchName: "Sample Southwest branch",
    place: "City and state to be confirmed",
    country: "United States",
    region: "Southwest",
    schedule: "Class schedule pending",
  },
  {
    id: "sample-us-west-coast",
    branchName: "Sample West Coast branch",
    place: "City and state to be confirmed",
    country: "United States",
    region: "West Coast",
    schedule: "Class schedule pending",
  },
  {
    id: "sample-ca-central",
    branchName: "Sample Central Canada branch",
    place: "City and province to be confirmed",
    country: "Canada",
    region: "Central Canada",
    schedule: "Class schedule pending",
  },
  {
    id: "sample-ca-eastern",
    branchName: "Sample Eastern Canada branch",
    place: "City and province to be confirmed",
    country: "Canada",
    region: "Eastern Canada",
    schedule: "Class schedule pending",
  },
];

const countryFilters: readonly CountryFilter[] = ["All", "United States", "Canada"];

function BranchCard({ branch }: { branch: BranchDirectoryItem }) {
  return (
    <article>
      <div>
        <span>{branch.country}</span>
        <small>Illustrative</small>
      </div>
      <h4>{branch.branchName}</h4>
      <p>{branch.place}</p>
      <footer>
        <span>{branch.schedule}</span>
        <strong>Registration link pending</strong>
      </footer>
    </article>
  );
}

export function RegionalBranchDirectory({
  branches = sampleBranches,
}: {
  branches?: readonly BranchDirectoryItem[];
}) {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState<CountryFilter>("All");
  const [isExpanded, setIsExpanded] = useState(false);

  const matchingBranches = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return branches.filter((branch) => {
      const matchesCountry = country === "All" || branch.country === country;
      const searchableText = [branch.branchName, branch.place, branch.country, branch.region]
        .join(" ")
        .toLowerCase();

      return matchesCountry && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [branches, country, query]);

  const isBrowsingDirectory = isExpanded || query.trim().length > 0 || country !== "All";
  const visibleBranches = isBrowsingDirectory ? matchingBranches : matchingBranches.slice(0, 3);
  const groupedBranches = visibleBranches.reduce<Map<string, BranchDirectoryItem[]>>((groups, branch) => {
    const group = groups.get(branch.region) ?? [];
    group.push(branch);
    groups.set(branch.region, group);
    return groups;
  }, new Map());

  return (
    <section className="regional-branch-directory component-preview" aria-label="Regional branch directory">
      <header className="regional-branch-directory__hero">
        <div className="regional-branch-directory__intro">
          <p>Class finder</p>
          <h2>Find Vision School near you.</h2>
          <span>
            Start with featured locations, then search or browse the full directory by country and region.
          </span>
          <small>
            Illustrative directory · Replace every sample branch, city, schedule, and registration status before publishing.
          </small>
        </div>

        <figure className="regional-branch-directory__media">
          <img
            src="/images/vision-school-media/north-america-mission-camp-crowd.webp"
            alt="A large multigenerational Mission Camp gathering holding international flags"
          />
          <figcaption>Official InterCP mission-camp footage · Publication approval pending</figcaption>
        </figure>
      </header>

      <div className="regional-branch-directory__browser">
        <div className="regional-branch-directory__toolbar">
          <label>
            <span>Search sample locations</span>
            <input
              type="search"
              value={query}
              placeholder="Branch, city, state, province, or region"
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <fieldset>
            <legend>Country</legend>
            <div>
              {countryFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={country === filter}
                  onClick={() => setCountry(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </fieldset>

          <button
            className="regional-branch-directory__expand"
            type="button"
            aria-expanded={isBrowsingDirectory}
            onClick={() => {
              if (isBrowsingDirectory) {
                setQuery("");
                setCountry("All");
                setIsExpanded(false);
                return;
              }

              setIsExpanded(true);
            }}
          >
            {isBrowsingDirectory ? "Show featured samples" : "Browse all sample locations"}
            <span aria-hidden="true">{isBrowsingDirectory ? "−" : "+"}</span>
          </button>
        </div>

        <div className="regional-branch-directory__results" aria-live="polite">
          <div className="regional-branch-directory__results-heading">
            <p>{isBrowsingDirectory ? "Directory results" : "Featured samples"}</p>
            <span>{visibleBranches.length} sample {visibleBranches.length === 1 ? "location" : "locations"} shown</span>
          </div>

          {visibleBranches.length > 0 && !isBrowsingDirectory ? (
            <div className="regional-branch-directory__featured">
              {visibleBranches.map((branch) => (
                <BranchCard key={branch.id} branch={branch} />
              ))}
            </div>
          ) : visibleBranches.length > 0 ? (
            <div className="regional-branch-directory__regions">
              {Array.from(groupedBranches.entries()).map(([region, regionBranches]) => (
                <section key={region} className="regional-branch-directory__region" aria-label={`${region} sample branches`}>
                  <header>
                    <h3>{region}</h3>
                    <span>{regionBranches.length} sample</span>
                  </header>
                  <div className="regional-branch-directory__cards">
                    {regionBranches.map((branch) => (
                      <BranchCard key={branch.id} branch={branch} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <p className="regional-branch-directory__empty">
              No sample locations match this search. Clear the search or choose another country.
            </p>
          )}

          <small className="regional-branch-directory__future">
            Mexico remains future scope and should stay hidden until approved branch data is available.
          </small>
        </div>
      </div>
    </section>
  );
}
