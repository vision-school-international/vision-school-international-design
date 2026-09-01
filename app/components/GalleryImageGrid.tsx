const images = [
  ["/images/vision-school-media/north-america-mission-camp-crowd.webp", "A large multigenerational Mission Camp gathering holding international flags"],
  ["/images/vision-school-media/north-america-mission-camp-nations.webp", "Mission Camp participants standing together with country signs and flags"],
  ["/images/vision-school-media/young-generation-mission-camp-community.webp", "Young adults gathered in community during North America Mission Camp"],
  ["/images/vision-school-media/north-america-mission-camp-worship.webp", "Participants worshiping together during North America Mission Camp"],
] as const;

export function GalleryImageGrid() {
  return (
    <section className="gallery-image-grid component-preview">
      <header>
        <p>Gallery</p>
        <h2>Show the training experience visually.</h2>
      </header>
      <div>
        {images.map(([src, alt]) => (
          <figure key={src}>
            <img src={src} alt={alt} />
          </figure>
        ))}
      </div>
      <small>Official InterCP video stills · Confirm publication and participant approvals before publishing</small>
    </section>
  );
}
