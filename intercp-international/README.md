# InterCP International: designs

Exported from the design canvas: https://claude.ai/artifact/3Fw6nCoyyKZaxi26jtEkmp

Each section is its board's original canvas file (`.dc.html`), unchanged except for two paths: images point to `assets/` and the canvas runtime loads from `support.js` at the root of this folder (a copy of the canvas's own runtime). Serve the folder over http (for example `python3 -m http.server`) and open a file; the runtime renders it as the canvas does, interactive parts included (not yet checked in a browser outside the canvas). The runtime loads React DOM from cdn.jsdelivr.net, so it needs internet access.

## Layout

- `pages/<page>/NN-<section>.dc.html`: one file per section, in page order, top to bottom.
- `pages/global/`: the header and footer shared by every page.
- `assets/images/`: the images the sections use, named by their canvas asset id.
- `support.js`: the canvas runtime.
- `canvas.json`: the canvas layout as exported. Its `/_blob/<id>` links are the same ids as the file names in `assets/`.
