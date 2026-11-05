# Components

Design boards grouped by the site component that renders them. Folder names are the component folders in `vision-school-international-website-components/src/components/`.

In each folder:

- `<page>-NN-<section>.html` and `.mobile.html`: copies of the page boards from `pages/` that this component renders (real site content).
- `source-Sxx-<description>.html`: the original component board (S00–S68) the component was designed from.

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
| [hero](hero/) | `hero` | - | home |
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
| [loop-cards](loop-cards/) | `loopCards` | - | vision-school-youth |
| [loop-faq](loop-faq/) | `loopFaq` | - | vision-school-youth |
| [loop-features](loop-features/) | `loopFeatures` | `S22` | vision-school-youth |
| [loop-hero](loop-hero/) | `loopHero` | `S20` | vision-school-youth |
| [loop-intro](loop-intro/) | `loopIntro` | - | vision-school-youth |
| [loop-programs](loop-programs/) | `loopPrograms` | - | vision-school-youth |
| [loop-register](loop-register/) | `loopRegister` | - | vision-school-youth |
| [loop-stats](loop-stats/) | `loopStats` | `S21` | vision-school-youth |
| [loop-testimonial](loop-testimonial/) | `loopTestimonial` | `S23` | vision-school-youth |
| [map-feature](map-feature/) | `mapFeature` | `S59` | branches, vision-school |
| [media-hero](media-hero/) | `mediaHero` | `S00` | newsroom, serve-with-us, spiritual-support-team |
| [media-text](media-text/) | `mediaText` | `S03`, `S13` | give, history, newsroom |
| [mission-story](mission-story/) | `missionStory` | `S06` | mission, vision-school |
| [navbar](navbar/) | `navbar` | - | every page |
| [news](news/) | `news` | - | home, newsroom |
| [news-cards](news-cards/) | `newsCards` | `S14` | history |
| [numbered-list](numbered-list/) | `numberedList` | `S46` | none yet |
| [partner-cards](partner-cards/) | `partnerCards` | `S47` | partner-overview, vision-school |
| [post-article](post-article/) | - | - | article |
| [post-cards](post-cards/) | `postCards` | `S67` | churches |
| [post-latest](post-latest/) | - | - | article |
| [posts-feature](posts-feature/) | `postsFeature` | `S39` | churches |
| [product-features](product-features/) | `productFeatures` | `S30` | field-operation, mission-impact-team, student-missionary, young-tent-maker |
| [product-panel](product-panel/) | `productPanel` | - | home, vision-camp, vision-school |
| [products-intro](products-intro/) | `productsIntro` | - | home, mission, serve-with-us, vision-school |
| [quote](quote/) | `quote` | `S07`, `S43` | mission, vision-camp, vision-school |
| [quote-with-heading](quote-with-heading/) | `quoteWithHeading` | `S41` | churches |
| [reasons-list](reasons-list/) | `reasonsList` | `S60` | spiritual-support-team |
| [resource-tiles](resource-tiles/) | `resourceTiles` | `S34` | none yet |
| [section-header](section-header/) | `sectionHeader` | - | home, newsroom, serve-with-us, vision-school |
| [site-footer](site-footer/) | `siteFooter` | - | every page |
| [stat-cards](stat-cards/) | `statCards` | `S40` | churches |
| [statement](statement/) | `statement` | `S65` | churches |
| [stats](stats/) | `stats` | - | home, vision-school |
| [stats-bento](stats-bento/) | `statsBento` | `S17` | branches, partner-overview, vision-camp |
| [stories](stories/) | `stories` | - | branches, history, home, mission, newsroom, vision-school |
| [story-grid](story-grid/) | `storyGrid` | `S36` | stories |
| [testimonial-grid](testimonial-grid/) | `testimonialGrid` | `S56` | give |
| [testimonial-slider](testimonial-slider/) | `testimonialSlider` | `S25`, `S31` | field-operation, mission-impact-team, student-missionary, vision-school, young-tent-maker |
| [thank-you](thank-you/) | `thankYou` | `S64` | newsroom |
| [timeline](timeline/) | `timeline` | `S11` | history |
| [video-feature](video-feature/) | `videoFeature` | `S32` | field-operation, mission-impact-team, student-missionary, young-tent-maker |
| [video-grid](video-grid/) | `videoGrid` | `S63` | newsroom |
| [video-header](video-header/) | `videoHeader` | `S28` | field-operation, mission-impact-team, student-missionary, vision-school, young-tent-maker |

## Unresolved

- Youth boards 06–09 (loop-cards, loop-register, loop-programs, loop-faq): their canvas names carry S27, S29, S30 and S33, but their styles do not match those boards. Which board they were built from is not proven.
- [`pages/article/04-about-intercp-international`](../pages/article/04-about-intercp-international.html) has no component folder. There is no CMS article page to match its text against, no component source names the board, and its inline styles match no component clearly (intro-text, reasons-list and video-header all overlap 0.40–0.42).
- [post-article](post-article/) and [post-latest](post-latest/) have no CMS block: neither folder in website-components has a `payload.ts`. Their boards are placed by their stylesheets, which name the "News Article" boards 01–03 and 06.
- [loop-hero](loop-hero/): `source-S20-youth-hero.html` is placed by the board-map name `P-vision-school-youth-01-S20-bl-hero` plus the CMS text match (7/8 strings); no component source names S20.
