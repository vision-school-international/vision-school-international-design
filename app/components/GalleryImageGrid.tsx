const images = [
  ["/images/intercp-young-adults.webp", "Young adults gathered for worship and prayer"],
  ["/images/youth-gathering.jpg", "Students gathered in a learning setting"],
  ["/images/community-table.jpg", "Students sharing a meal and conversation"],
  ["/images/intercp-mission-camp.webp", "Mission camp community gathering"],
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
      <small>Sample image set · Confirm final photo approvals before publishing</small>
    </section>
  );
}
