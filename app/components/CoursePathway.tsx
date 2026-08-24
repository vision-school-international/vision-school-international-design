const modules = [
  ["01", "Biblical vision", "See God's purpose for every people."],
  ["02", "Mission history", "Learn how the church has responded across generations."],
  ["03", "World context", "Understand unreached peoples and current mission needs."],
  ["04", "Personal response", "Connect learning to a practical next step."],
] as const;

export function CoursePathway() {
  return (
    <section className="course-pathway component-preview">
      <div className="course-pathway__photo" role="img" aria-label="Young adults gathered in a learning setting" />
      <div className="course-pathway__content">
        <p>Course content</p>
        <h2>Show what users will learn.</h2>
        <ol>
          {modules.map(([number, title, body]) => (
            <li key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
