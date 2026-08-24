"use client";

import { useState } from "react";

const videos = [
  {
    id: "zelhy09kxp8",
    title: "2026 샬롬 예루살렘 | Shalom Jerusalem",
    region: "Jerusalem",
    year: "2026",
  },
  {
    id: "A_vxSIJ3zn8",
    title: "2024 North America Young Generation Mission Camp",
    region: "North America",
    year: "2024",
  },
  {
    id: "KrXs0s7b2QQ",
    title: "2025 North America Young Generation Mission Camp",
    region: "North America",
    year: "2025",
  },
  {
    id: "BE_ZqgH2tKs",
    title: "North America All Generation Mission Camp 2025 Sketch Video",
    region: "North America",
    year: "2025",
  },
  {
    id: "ADyp6ZD7z1Y",
    title: "InterCP International 2023 Europe Mission Camp Sketch Video",
    region: "Europe",
    year: "2023",
  },
  {
    id: "iYgBFL475o4",
    title: "2026 ASEAN Mission Camp Sketch Video",
    region: "ASEAN",
    year: "2026",
  },
  {
    id: "ZP-2BUARsQw",
    title: "2025 ASEAN Mission Camp Sketch Video",
    region: "ASEAN",
    year: "2025",
  },
  {
    id: "j0VlqGoxP20",
    title: "InterCP International 2023 ASEAN Mission Camp Sketch Video",
    region: "ASEAN",
    year: "2023",
  },
  {
    id: "2fnCbtwCJms",
    title: "2024 ASEAN Mission Camp Sketch Video",
    region: "ASEAN",
    year: "2024",
  },
] as const;

const formatIndex = (index: number) => String(index + 1).padStart(2, "0");

export function VideoGallery() {
  const [activeVideoId, setActiveVideoId] = useState<(typeof videos)[number]["id"]>(videos[0].id);
  const activeVideo = videos.find((video) => video.id === activeVideoId) ?? videos[0];
  const playerId = "video-player";
  const titleId = "video-library-title";

  return (
    <section className="video-library component-preview" aria-labelledby={titleId}>
      <header className="video-library__header">
        <p>Video library</p>
        <h2 id={titleId}>Mission camp videos</h2>
      </header>

      <div className="video-library__layout">
        <div className="video-library__player-column">
          <div className="video-library__player" id={playerId}>
            <iframe
              key={activeVideo.id}
              src={`https://www.youtube.com/embed/${activeVideo.id}`}
              title={activeVideo.title}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="video-library__active" aria-live="polite">
            <span>{activeVideo.region} · {activeVideo.year}</span>
            <h3>{activeVideo.title}</h3>
          </div>
        </div>

        <ol className="video-library__playlist" aria-label="Choose a video">
          {videos.map((video, index) => {
            const isActive = video.id === activeVideo.id;

            return (
              <li key={video.id}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  aria-controls={playerId}
                  onClick={() => setActiveVideoId(video.id)}
                >
                  <span className="video-library__thumbnail">
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt=""
                      loading="lazy"
                    />
                    <i aria-hidden="true">▶</i>
                  </span>
                  <span className="video-library__item-copy">
                    <small>{formatIndex(index)} · {video.region} · {video.year}</small>
                    <strong>{video.title}</strong>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
