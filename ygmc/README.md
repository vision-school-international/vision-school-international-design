# YGMC (Young Generation Mission Camp): designs

Static export of the design canvas: https://claude.ai/artifact/5KY4yWUxnCGChJK34dFrrm

Each section is a standalone HTML file (1440px wide). Open it in a browser; images load from `assets/` by relative path, and fonts load from Google Fonts.

- `pages/<page>/NN-<section>.html`: one file per section, in page order, top to bottom.
- `pages/global/`: the header and footer shared by every page.
- `assets/images/`: the images the sections use, named by their canvas asset id.
- `canvas.json`: the canvas layout as exported. Its `/_blob/<id>` links are the same ids as the file names in `assets/`.

The FAQ section is exported with every question closed; open/close only works on the canvas. The canvas's "Page /" boards are full pages assembled from these same sections, so they are not exported separately.
