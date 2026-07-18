# Visual capture workflow

`npm run capture:visuals` launches the local Vite application and Microsoft Edge in headless mode, then captures deterministic public visuals from the real interface.

Generated files:

- `public/images/portfolio-desktop.jpg` — English desktop hero.
- `public/images/portfolio-current-teaching.jpg` — current teaching section.
- `public/images/portfolio-mobile.jpg` — Spanish mobile hero.
- `public/images/christopher-portfolio-social-preview.png` — 1280 × 640 social card.
- `public/images/portfolio-tour.svg` — accessible three-scene tour with embedded captures and reduced-motion behavior.

The workflow uses only public portfolio content. It creates an isolated temporary browser profile and removes it on completion. Override the browser path with `EDGE_PATH` when Microsoft Edge is installed elsewhere.
