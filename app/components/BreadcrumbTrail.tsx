const crumbs = ["Home", "Courses", "Vision School", "Class details"] as const;

export function BreadcrumbTrail() {
  return (
    <nav className="breadcrumb-trail component-preview" aria-label="Breadcrumb">
      <ol>
        {crumbs.map((crumb, index) => (
          <li key={crumb}>
            {index < crumbs.length - 1 ? <a href="#section-navigation">{crumb}</a> : <span aria-current="page">{crumb}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
