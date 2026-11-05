# Vision School International: designs

Static export of the design canvas: https://claude.ai/artifact/LK4GJQrpnydthwKQxMnHQS

Each board is a standalone HTML file. Open it in a browser; images and fonts load from `assets/` by relative path.

## Layout

- `pages/<page>/NN-<section>.html`: desktop board (1440px), in page order, top to bottom.
- `pages/<page>/NN-<section>.mobile.html`: the mobile board (390px) for the same section.
- `pages/<page>/notes.md`: the notes from that canvas page (sources, decisions, open questions).
- `pages/home/`: the homepage, plus the nav dropdowns and the mobile menu.
- `pages/brand/`: the brand palette.
- `components/<component>/`: one folder per site component in vision-school-international-website-components. Each holds copies of the page boards it renders (`<page>-NN-<section>.html` + `.mobile.html`), the original S00–S68 board it was designed from (`source-Sxx-….html`) where one exists, and a README listing the pages that use it. `components/README.md` is the index; `components/notes.md` keeps the canvas notes for the S-boards.
- `assets/images/`, `assets/fonts/`: the files the boards use, named by their canvas asset id.
- `canvas.json`: the canvas layout as exported (board positions, page list, notes). Its `/_blob/<id>` links are the canvas asset ids, the same ids as the file names in `assets/`.

## Fonts

The boards use Aktiv Grotesk and Denton / Denton Condensed. These are commercial fonts. Check their licences before using the files outside this private repository.
