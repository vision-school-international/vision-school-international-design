# Components

The canvas Component Library: one folder per site component, holding that component's library board. Page boards live once, in `pages/`; folders link to them. Folder names are the component folders in `vision-school-international-website-components/src/components/`.

In each folder:

- `source-Sxx-<description>.html`: the component's board from the canvas Component Library (S00–S68).
- `README.md`: the component, and links to the page boards in `pages/` that use it.

Boards were matched to components by finding the CMS page section whose text is on the board; the CMS stores each section with its component's `blockType`. Each folder's README lists its files, the pages that use it and the evidence.

[`notes.md`](notes.md) holds the canvas notes for the original component boards, grouped as on the canvas (by the reference site's pages); its S-board names map to the `source-Sxx-…` files.

| Folder | CMS block | Source boards | Pages |
|---|---|---|---|
| [app-family](app-family/) | `appFamily` | `S51` | partner-overview |
| [app-hero](app-hero/) | `appHero` | `S15` | vision-camp |
| [audience-cards](audience-cards/) | `audienceCards` | `S24` | vision-school |
| [audience-grid](audience-grid/) | `audienceGrid` | `S29` | field-operation, mission-impact-team, student-missionary, young-tent-maker |
| [benefit-cards](benefit-cards/) | `benefitCards` | `S57` | give |
| [big-stat](big-stat/) | `bigStat` | `S04` | none yet |
| [blog-header](blog-header/) | `blogHeader` | `S66` | churches |
| [centered-hero](centered-hero/) | `centeredHero` | `S49` | partner-overview |
| [contact-list](contact-list/) | `contactList` | `S61` | branches |
| [cta-banner](cta-banner/) | `ctaBanner` | `S09` | article, branches, give, mission, newsroom, partner-overview, spiritual-support-team, stories, vision-camp, vision-school |
| [cta-card](cta-card/) | `ctaCard` | `S12` | give, history |
| [donate-form](donate-form/) | `donateForm` | `S55` | give |
| [event-hero](event-hero/) | `eventHero` | `S62` | newsroom |
| [faq](faq/) | `faq` | `S33`, `S42` | churches, field-operation, give, mission-impact-team, student-missionary, vision-school, young-tent-maker |
| [feature-accordion](feature-accordion/) | `featureAccordion` | `S18` | vision-camp, vision-school |
| [feature-split](feature-split/) | `featureSplit` | `S02` | mission, vision-school |
| [giving-stats](giving-stats/) | `givingStats` | `S54` | give |
| [guide-cards](guide-cards/) | `guideCards` | `S37` | churches |
| [guide-rows](guide-rows/) | `guideRows` | `S38` | churches |
| [history-story](history-story/) | `historyStory` | `S10` | history |
| [icon-cards](icon-cards/) | `iconCards` | `S27` | field-operation, mission-impact-team, student-missionary, young-tent-maker |
| [icon-list](icon-list/) | `iconList` | `S19` | churches, give, vision-camp |
| [image-banner](image-banner/) | `imageBanner` | `S48` | branches, partner-overview |
| [image-collage](image-collage/) | `imageCollage` | `S52` | partner-overview |
| [image-hero](image-hero/) | `imageHero` | `S05` | branches, churches, field-operation, give, history, mission, mission-impact-team, partner-overview, stories, student-missionary, vision-camp, vision-school, young-tent-maker |
| [image-row](image-row/) | `imageRow` | `S16` | vision-camp, vision-school |
| [image-scatter](image-scatter/) | `imageScatter` | `S44` | partner-overview |
| [impact-bento](impact-bento/) | `impactBento` | `S08` | mission |
| [intro-text](intro-text/) | `introText` | `S50` | give |
| [invitation](invitation/) | `invitation` | `S01` | serve-with-us |
| [latest-news](latest-news/) | `latestNews` | `S68` | newsroom |
| [link-cards](link-cards/) | `linkCards` | `S53` | partner-overview |
| [logo-banner](logo-banner/) | `logoBanner` | `S58` | give |
| [logo-grid](logo-grid/) | `logoGrid` | `S45` | partner-overview |
| [logo-marquee](logo-marquee/) | `logoMarquee` | `S35` | none yet |
| [logo-strip](logo-strip/) | `logoStrip` | `S26` | none yet |
| [loop-features](loop-features/) | `loopFeatures` | `S22` | vision-school-youth |
| [loop-hero](loop-hero/) | `loopHero` | `S20` | vision-school-youth |
| [loop-stats](loop-stats/) | `loopStats` | `S21` | vision-school-youth |
| [loop-testimonial](loop-testimonial/) | `loopTestimonial` | `S23` | vision-school-youth |
| [map-feature](map-feature/) | `mapFeature` | `S59` | branches, vision-school |
| [media-hero](media-hero/) | `mediaHero` | `S00` | newsroom, serve-with-us, spiritual-support-team |
| [media-text](media-text/) | `mediaText` | `S03`, `S13` | give, history, newsroom |
| [mission-story](mission-story/) | `missionStory` | `S06` | mission, vision-school |
| [news-cards](news-cards/) | `newsCards` | `S14` | history |
| [numbered-list](numbered-list/) | `numberedList` | `S46` | none yet |
| [partner-cards](partner-cards/) | `partnerCards` | `S47` | partner-overview, vision-school |
| [post-cards](post-cards/) | `postCards` | `S67` | churches |
| [posts-feature](posts-feature/) | `postsFeature` | `S39` | churches |
| [product-features](product-features/) | `productFeatures` | `S30` | field-operation, mission-impact-team, student-missionary, young-tent-maker |
| [quote](quote/) | `quote` | `S07`, `S43` | mission, vision-camp, vision-school |
| [quote-with-heading](quote-with-heading/) | `quoteWithHeading` | `S41` | churches |
| [reasons-list](reasons-list/) | `reasonsList` | `S60` | spiritual-support-team |
| [resource-tiles](resource-tiles/) | `resourceTiles` | `S34` | none yet |
| [stat-cards](stat-cards/) | `statCards` | `S40` | churches |
| [statement](statement/) | `statement` | `S65` | churches |
| [stats-bento](stats-bento/) | `statsBento` | `S17` | branches, partner-overview, vision-camp |
| [story-grid](story-grid/) | `storyGrid` | `S36` | stories |
| [testimonial-grid](testimonial-grid/) | `testimonialGrid` | `S56` | give |
| [testimonial-slider](testimonial-slider/) | `testimonialSlider` | `S25`, `S31` | field-operation, mission-impact-team, student-missionary, vision-school, young-tent-maker |
| [thank-you](thank-you/) | `thankYou` | `S64` | newsroom |
| [timeline](timeline/) | `timeline` | `S11` | history |
| [video-feature](video-feature/) | `videoFeature` | `S32` | field-operation, mission-impact-team, student-missionary, young-tent-maker |
| [video-grid](video-grid/) | `videoGrid` | `S63` | newsroom |
| [video-header](video-header/) | `videoHeader` | `S28` | field-operation, mission-impact-team, student-missionary, vision-school, young-tent-maker |

## Components drawn only on page boards

These components have no Component Library board; their design is the page board itself.

### hero

Site component `hero` (CMS block `hero`), defined in `vision-school-international-website-components/src/components/hero/`.

- [Home · 02 · Hero](../pages/home/02-hero.html): CMS page `home`, section 1 (`hero`). Evidence: CTA "Our Mission" matches; the CMS headline and body differ from the board. The hero stylesheet names this board ("02 Hero") as its design.

### loop-cards

Site component `loop-cards` (CMS block `loopCards`), defined in `vision-school-international-website-components/src/components/loop-cards/`.

- [Vision School Youth · 06 · What is YVS](../pages/vision-school-youth/06-what-is-yvs.html): CMS page `vision-school-youth`, section 3 (`loopCards`). Evidence: "through yvs, the students will understand the father's heart for all n"; "yvs is a 9-week missions training program consisting of worship, lectu" (14/14 section strings on the board).

Origin unproven: the canvas board is named `P-vision-school-youth-06-S27-what`, which shares only the number S27 with [`icon-cards/source-S27-what-is-program-cards.html`](icon-cards/source-S27-what-is-program-cards.html). Its styles do not resemble that board (rank 34 of 69 by style overlap), so this is a naming link only, not a proven source.

### loop-faq

Site component `loop-faq` (CMS block `loopFaq`), defined in `vision-school-international-website-components/src/components/loop-faq/`.

- [Vision School Youth · 09 · FAQ](../pages/vision-school-youth/09-faq.html): CMS page `vision-school-youth`, section 9 (`loopFaq`). Evidence: heading "Questions about YVS?" and all 9 questions in CMS order, plus the open first answer; the only loopFaq on the page.

Origin unproven: the canvas board is named `P-vision-school-youth-09-S33-faq`, which shares only the number S33 with [`faq/source-S33-faq-short-term-programs.html`](faq/source-S33-faq-short-term-programs.html). Its styles do not resemble that board (rank 3 of 69 by style overlap), so this is a naming link only, not a proven source.

### loop-intro

Site component `loop-intro` (CMS block `loopIntro`), defined in `vision-school-international-website-components/src/components/loop-intro/`.

- [Vision School Youth · 02 · Intro](../pages/vision-school-youth/02-intro.html): CMS page `vision-school-youth`, section 2 (`loopIntro`). Evidence: "equip them to be missionaries in the unreached areas of the world"; "educate students about the current global mission condition" (6/7 section strings on the board).

### loop-programs

Site component `loop-programs` (CMS block `loopPrograms`), defined in `vision-school-international-website-components/src/components/loop-programs/`.

- [Vision School Youth · 08 · Programs](../pages/vision-school-youth/08-programs.html): CMS page `vision-school-youth`, section 7 (`loopPrograms`). Evidence: "every winter, there is a 3 to 5-day outreach program called ma:rch, du"; "ubtj is a global youth mission prayer movement; members worship, pray," (8/11 section strings on the board).

Origin unproven: the canvas board is named `P-vision-school-youth-08-S30-programs`, which shares only the number S30 with [`product-features/source-S30-program-highlights.html`](product-features/source-S30-program-highlights.html). Its styles do not resemble that board (rank 41 of 69 by style overlap), so this is a naming link only, not a proven source.

### loop-register

Site component `loop-register` (CMS block `loopRegister`), defined in `vision-school-international-website-components/src/components/loop-register/`.

- [Vision School Youth · 07 · Who can join](../pages/vision-school-youth/07-who-can-join.html): CMS page `vision-school-youth`, section 5 (`loopRegister`). Evidence: "youth vision school (canada) registration link"; "register now for spring 2026 vision school!" (8/8 section strings on the board).

Origin unproven: the canvas board is named `P-vision-school-youth-07-S29-join`, which shares only the number S29 with [`audience-grid/source-S29-who-can-go-grid.html`](audience-grid/source-S29-who-can-go-grid.html). Its styles do not resemble that board (rank 13 of 69 by style overlap), so this is a naming link only, not a proven source.

### navbar

Site component `navbar` (CMS block `navbar`), defined in `vision-school-international-website-components/src/components/navbar/`.

Every page. The CMS keeps it once, in the `sections` collection (document `navbar`), not inside a page.

- [Home · 01 · Header / Nav](../pages/home/01-header-nav.html): CMS shared section. Evidence: CMS shared `navbar` document; "partner together"; "get involved"; "newsroom" (7/30 of its strings).
- [Home · 14 · Nav dropdown about](../pages/home/14-nav-dropdown-about.html): CMS shared section. Evidence: CMS shared `navbar` document; "partner together"; "get involved"; "branches" (12/30 of its strings).
- [Home · 15 · Nav dropdown programs](../pages/home/15-nav-dropdown-programs.html): CMS shared section. Evidence: CMS shared `navbar` document; "mission impact team"; "vision school youth"; "student missionary" (15/30 of its strings).
- [Home · 16 · Nav dropdown partner together](../pages/home/16-nav-dropdown-partner-together.html): CMS shared section. Evidence: CMS shared `navbar` document; "partner overview"; "partner together"; "get involved" (10/30 of its strings).
- [Home · 17 · Nav dropdown get involved](../pages/home/17-nav-dropdown-get-involved.html): CMS shared section. Evidence: CMS shared `navbar` document; "spiritual support team"; "partner together"; "serve with us" (11/30 of its strings).
- [Home · 18 · Mobile menu programs open](../pages/home/18-mobile-menu-programs-open.mobile.html) (mobile only, copied as `home-18-mobile-menu-programs-open.mobile.html`): CMS shared section. Evidence: CMS shared `navbar` document; 17/30 of its strings incl. "english", "menu".

### news

Site component `news` (CMS block `news`), defined in `vision-school-international-website-components/src/components/news/`.

- [Newsroom · 06 · In the News](../pages/newsroom/06-in-the-news.html): CMS page `newsroom`, section 6 (`news`). Evidence: "4,665 pastors from 64 countries, 121 peoples and 28 language groups bu"; "[news a] daegu court rules: "sangju btj nations center a covid-contami" (5/5 section strings on the board).
- [Home · 12 · News grid](../pages/home/12-news-grid.html): CMS page `home`, section 10 (`news`). Evidence: "rev. oh se-hoon: "intercp is a parachurch... it has nothing but the go"; "court delivers final acquittal of intercp on covid disinfection violat" (5/5 section strings on the board).

### post-article

Site component `post-article` (no CMS block: the folder has no payload.ts), defined in `vision-school-international-website-components/src/components/post-article/`.

- [Article · 01 · Post header](../pages/article/01-post-header.html): News Article page, which has no CMS page (posts are rendered by this component). Evidence: the post-article stylesheet names this board: "from the design board (\"News Article\" page, boards 01–03)".
- [Article · 02 · Lead photo](../pages/article/02-lead-photo.html): News Article page, which has no CMS page (posts are rendered by this component). Evidence: the post-article stylesheet names this board: "from the design board (\"News Article\" page, boards 01–03)".
- [Article · 03 · Post body](../pages/article/03-post-body.html): News Article page, which has no CMS page (posts are rendered by this component). Evidence: the post-article stylesheet names this board: "from the design board (\"News Article\" page, boards 01–03)".

### post-latest

Site component `post-latest` (no CMS block: the folder has no payload.ts), defined in `vision-school-international-website-components/src/components/post-latest/`.

- [Article · 06 · Latest News](../pages/article/06-latest-news.html): News Article page, which has no CMS page (posts are rendered by this component). Evidence: the post-latest stylesheet names this board: "from the design board (\"News Article\" page, board 06)".

### product-panel

Site component `product-panel` (CMS block `productPanel`), defined in `vision-school-international-website-components/src/components/product-panel/`.

- [Vision Camp · 03 · Program Intro](../pages/vision-camp/03-program-intro.html): CMS page `vision-camp`, section 3 (`productPanel`). Evidence: "discover a concrete vision for mission among the unreached peoples"; "hear vivid testimonies and lectures from missionaries" (6/10 section strings on the board).
- [Vision School · 02 · Program Intro](../pages/vision-school/02-program-intro.html): CMS page `vision-school`, section 2 (`productPanel`). Evidence: "vision school is a mission education program that biblically focuses o"; "through vision school, the kingdom of god will come upon you, and you " (6/10 section strings on the board).
- [Home · 06 · Program: Vision School](../pages/home/06-program-vision-school.html): CMS page `home`, section 5 (`productPanel`). Evidence: "discover god's vision"; "explore vision school" (3/11 section strings on the board).
- [Home · 07 · Program: Vision Camp](../pages/home/07-program-vision-camp.html): CMS page `home`, section 6 (`productPanel`). Evidence: "explore vision camp"; "vision camp" (2/10 section strings on the board).
- [Home · 08 · Program: Field Operation](../pages/home/08-program-field-operation.html): CMS page `home`, section 7 (`productPanel`). Evidence: "explore field operation"; "field operation" (2/10 section strings on the board).
- [Home · 09 · Program: Vision School Youth](../pages/home/09-program-vision-school-youth.html): CMS page `home`, section 8 (`productPanel`). Evidence: "explore vision school youth"; "vision school youth" (2/10 section strings on the board).

### products-intro

Site component `products-intro` (CMS block `productsIntro`), defined in `vision-school-international-website-components/src/components/products-intro/`.

- [Mission · 07 · Programs Intro](../pages/mission/07-programs-intro.html): CMS page `mission`, section 7 (`productsIntro`). Evidence: "train. go. plant seeds."; "mission impact team" (6/6 section strings on the board).
- [Serve With Us · 04 · Mission Programs](../pages/serve-with-us/04-mission-programs.html): CMS page `serve-with-us`, section 4 (`productsIntro`). Evidence: "train. go. plant seeds."; "mission impact team" (6/6 section strings on the board).
- [Vision School · 17 · Programs](../pages/vision-school/17-programs.html): CMS page `vision-school`, section 17 (`productsIntro`). Evidence: "in-depth training that will equip you to go carry out the great commis"; "mission impact team" (6/7 section strings on the board).
- [Home · 05 · Programs Intro](../pages/home/05-programs-intro.html): CMS page `home`, section 4 (`productsIntro`). Evidence: "mission impact team"; "student missionary" (5/7 section strings on the board).

### section-header

Site component `section-header` (CMS block `sectionHeader`), defined in `vision-school-international-website-components/src/components/section-header/`.

- [Home · 03 · Get Involved](../pages/home/03-get-involved.html): CMS page `home`, section 2 (`sectionHeader`). Evidence: title "Get Involved" matches; the CMS heading and body differ from the board. The section-header stylesheet names this board ("03 Get Involved") as its design.
- [Newsroom · 05 · In the News header](../pages/newsroom/05-in-the-news-header.html): CMS page `newsroom`, section 5 (`sectionHeader`). Evidence: "from pastors' conferences to mission camps, discover how churches arou"; "when the mission makes headlines" (4/5 section strings on the board).
- [Serve With Us · 02 · Get Involved](../pages/serve-with-us/02-get-involved.html): CMS page `serve-with-us`, section 2 (`sectionHeader`). Evidence: "we invite you to vision school to discover god's vision and calling fo"; "discover where the lord may be calling you" (4/5 section strings on the board).
- [Vision School · 03 · Get Involved](../pages/vision-school/03-get-involved.html): CMS page `vision-school`, section 3 (`sectionHeader`). Evidence: "in the name of the lord, we invite you to vision school."; "everyone can do something" (4/5 section strings on the board).
- [Home · 11 · News header](../pages/home/11-news-header.html): CMS page `home`, section 9 (`sectionHeader`). Evidence: "from pastors' conferences to mission camps, discover how churches arou"; "when the mission makes headlines" (4/5 section strings on the board).

### site-footer

Site component `site-footer` (CMS block `siteFooter`), defined in `vision-school-international-website-components/src/components/site-footer/`.

Every page. The CMS keeps it once, in the `sections` collection (document `site-footer`), not inside a page.

- [Home · 13 · Footer](../pages/home/13-footer.html): CMS shared section. Evidence: CMS shared `siteFooter` document; ""and this gospel of the kingdom will be preached in the whol"; "© intercp international / vision school"; "language: english (us)" (32/36 of its strings).

### stats

Site component `stats` (CMS block `stats`), defined in `vision-school-international-website-components/src/components/stats/`.

- [Vision School · 06 · Stats](../pages/vision-school/06-stats.html): CMS page `vision-school`, section 6 (`stats`). Evidence: "people groups served in the 10/40 window"; "missionary trainees overseas each year" (6/10 section strings on the board).
- [Home · 04 · Stats](../pages/home/04-stats.html): CMS page `home`, section 3 (`stats`). Evidence: "missionary trainees overseas each year"; "missionaries sent as of 2026" (5/11 section strings on the board).

### stories

Site component `stories` (CMS block `stories`), defined in `vision-school-international-website-components/src/components/stories/`.

- [Home · 10 · Stories](../pages/home/10-stories.html): not in the CMS page. Evidence: not in the CMS home page; its text matches 6 of 6 strings of the stories section on branches, history and mission, and the stories stylesheet names this board ("10 Stories") as its design.
- [Branches · 04 · Stories](../pages/branches/04-stories.html): CMS page `branches`, section 4 (`stories`). Evidence: ""you go in faith, and you really see how god works, the things that he"; ""vision school really changed my entire paradigm of how i saw myself, " (6/6 section strings on the board).
- [History · 06 · Stories](../pages/history/06-stories.html): CMS page `history`, section 6 (`stories`). Evidence: ""you go in faith, and you really see how god works, the things that he"; ""vision school really changed my entire paradigm of how i saw myself, " (6/6 section strings on the board).
- [Mission · 06 · Stories](../pages/mission/06-stories.html): CMS page `mission`, section 6 (`stories`). Evidence: ""you go in faith, and you really see how god works, the things that he"; ""vision school really changed my entire paradigm of how i saw myself, " (6/6 section strings on the board).
- [Newsroom · 04 · Stories from the Field](../pages/newsroom/04-stories-from-the-field.html): CMS page `newsroom`, section 4 (`stories`). Evidence: "17th pastors' mission conference"; "serving the nations in 2023" (6/9 section strings on the board).
- [Vision School · 15 · Stories from the Field](../pages/vision-school/15-stories-from-the-field.html): CMS page `vision-school`, section 15 (`stories`). Evidence: "17th pastors' mission conference"; "serving the nations in 2023" (6/9 section strings on the board).

## Unresolved

- Youth boards 06–09 (loop-cards, loop-register, loop-programs, loop-faq): their canvas names carry S27, S29, S30 and S33, but their styles do not match those boards. Which board they were built from is not proven.
- [`pages/article/04-about-intercp-international`](../pages/article/04-about-intercp-international.html) has no component folder. There is no CMS article page to match its text against, no component source names the board, and its inline styles match no component clearly (intro-text, reasons-list and video-header all overlap 0.40–0.42).
- `post-article` and `post-latest` have no CMS block: neither folder in website-components has a `payload.ts`. Their boards are placed by their stylesheets, which name the "News Article" boards 01–03 and 06.
- [loop-hero](loop-hero/): `source-S20-youth-hero.html` is placed by the board-map name `P-vision-school-youth-01-S20-bl-hero` plus the CMS text match (7/8 strings); no component source names S20.
