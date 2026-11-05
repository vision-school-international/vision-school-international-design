# navbar

Site component `navbar` (CMS block `navbar`), defined in `vision-school-international-website-components/src/components/navbar/`.

From its stylesheet:

> Site navigation from the design board ("01 Header / Nav"): 72px bar, logo left, links centred, language menu right. The overlay style is transparent with a dark gradient and pulls the next section (the hero) up underneath itself; the solid style is a dark bar.

## Files

- `home-01-header-nav.html`: copy of [`pages/home/01-header-nav.html`](../../pages/home/01-header-nav.html) and `home-01-header-nav.mobile.html` (copy of [`pages/home/01-header-nav.mobile.html`](../../pages/home/01-header-nav.mobile.html)).
- `home-14-nav-dropdown-about.html`: copy of [`pages/home/14-nav-dropdown-about.html`](../../pages/home/14-nav-dropdown-about.html) (no mobile board in `pages/`).
- `home-15-nav-dropdown-programs.html`: copy of [`pages/home/15-nav-dropdown-programs.html`](../../pages/home/15-nav-dropdown-programs.html) (no mobile board in `pages/`).
- `home-16-nav-dropdown-partner-together.html`: copy of [`pages/home/16-nav-dropdown-partner-together.html`](../../pages/home/16-nav-dropdown-partner-together.html) (no mobile board in `pages/`).
- `home-17-nav-dropdown-get-involved.html`: copy of [`pages/home/17-nav-dropdown-get-involved.html`](../../pages/home/17-nav-dropdown-get-involved.html) (no mobile board in `pages/`).
- `home-18-mobile-menu-programs-open.mobile.html`: copy of [`pages/home/18-mobile-menu-programs-open.mobile.html`](../../pages/home/18-mobile-menu-programs-open.mobile.html) (mobile only).

## Used on

Every page. The CMS keeps it once, in the `sections` collection (document `navbar`), not inside a page.

- [Home · 01 · Header / Nav](../../pages/home/01-header-nav.html): CMS shared section. Evidence: CMS shared `navbar` document; "partner together"; "get involved"; "newsroom" (7/30 of its strings).
- [Home · 14 · Nav dropdown about](../../pages/home/14-nav-dropdown-about.html): CMS shared section. Evidence: CMS shared `navbar` document; "partner together"; "get involved"; "branches" (12/30 of its strings).
- [Home · 15 · Nav dropdown programs](../../pages/home/15-nav-dropdown-programs.html): CMS shared section. Evidence: CMS shared `navbar` document; "mission impact team"; "vision school youth"; "student missionary" (15/30 of its strings).
- [Home · 16 · Nav dropdown partner together](../../pages/home/16-nav-dropdown-partner-together.html): CMS shared section. Evidence: CMS shared `navbar` document; "partner overview"; "partner together"; "get involved" (10/30 of its strings).
- [Home · 17 · Nav dropdown get involved](../../pages/home/17-nav-dropdown-get-involved.html): CMS shared section. Evidence: CMS shared `navbar` document; "spiritual support team"; "partner together"; "serve with us" (11/30 of its strings).
- [Home · 18 · Mobile menu programs open](../../pages/home/18-mobile-menu-programs-open.mobile.html) (mobile only, copied as `home-18-mobile-menu-programs-open.mobile.html`): CMS shared section. Evidence: CMS shared `navbar` document; 17/30 of its strings incl. "english", "menu".
