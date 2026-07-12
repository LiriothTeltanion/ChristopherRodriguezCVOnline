# Christopher Rodríguez — Portfolio & Online CV

Bilingual (English/Spanish) professional portfolio for **Christopher Rodríguez** (Jack Christopher Rodríguez Belandria), an English educator, ESL specialist, curriculum designer and published author. Built as a fully static single-page application with React, TypeScript and Vite.

## Current professional status

Christopher holds three simultaneous, active roles, each modeled explicitly in the data layer:

1. **Online English Teacher at IMMERSION** — remote, since March 2026.
2. **English Teacher, Continuing Education Division at UNET** — San Cristóbal, Venezuela, ongoing.
3. **Founder & English Instructor at Survival English** — his independent venture, since 2017.

All three are marked `current: true` with a manually controlled `displayOrder` (see [`src/data/currentRoles.ts`](src/data/currentRoles.ts)) so Survival English's earlier start date (2017) never causes it to sort above IMMERSION's — order is deliberate, not date-derived.

## Features

- **Portfolio in one page**: hero, about, currently-teaching (3 active roles), professional ecosystem diagram, experience timeline (current vs. previous), international experience, Survival English deep-dive, services, teaching philosophy, stats, contact.
- **Bilingual (EN/ES)**: every user-facing string has an English and Spanish version. Language is auto-detected from the browser on first visit, persisted in `localStorage`, and switches instantly with no page reload. Screen readers are notified of language changes via an `aria-live` region.
- **Light/dark theme**: respects `prefers-color-scheme` on first visit, remembered in `localStorage`.
- **Content integrity system**: every claim carries a `verification` / `sourceStatus` tag (`userConfirmed`, `cvReported`, `institutionWebsite`, `verificationRecommended`). The `SHOW_UNVERIFIED_METRICS` flag in [`src/data/metrics.ts`](src/data/metrics.ts) keeps any future unverified statistic out of the headline stat counters without deleting the underlying data.
- **IMMERSION safety guardrails**: the school's public institutional description is rendered in a clearly labeled, collapsible "About IMMERSION" block with a mandatory attribution note directly beneath it (not hidden in a tooltip), making clear it describes the school's general offering, not Christopher's personal duties.
- **Accessible by default**: skip link, semantic landmarks, keyboard-operable expand/collapse (`aria-expanded`/`aria-controls`), visible focus rings, `aria-current` on nav, decorative icons marked `aria-hidden`, external links use `target="_blank" rel="noopener noreferrer"` with accessible labels, and full `prefers-reduced-motion` support (the active-status pulse animation and all Framer Motion entrance animations are disabled).
- **No backend, no database, no router**: fully static; navigation is anchor-based with `IntersectionObserver` highlighting the active section.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) (build tool and dev server)
- [Tailwind CSS 4](https://tailwindcss.com/) + a small custom design-system layer in [`src/styles/globals.css`](src/styles/globals.css) (CSS variables for theming)
- [Framer Motion](https://motion.dev/) for entrance animations (disabled automatically under reduced motion via `MotionConfig reducedMotion="user"`)
- [Lucide React](https://lucide.dev/) for icons
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for linting/formatting

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Available scripts

| Command           | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                                        |
| `npm run build`   | Type-check (`tsc -b`) and build the production bundle to `dist/` |
| `npm run preview` | Preview the production build locally                             |
| `npm run lint`    | Run ESLint over the whole project                                |
| `npm run format`  | Format the codebase with Prettier                                |

## Project structure

```
src/
  components/     UI components (Hero, AboutSection, CurrentTeachingSection,
                  CurrentRoleCard, ProfessionalEcosystem, ExperienceTimeline,
                  ExperienceDetails, InternationalExperience,
                  SurvivalEnglishSection, ServicesSection, TeachingPhilosophy,
                  StatsSection, ContactSection, Header, Footer, ...)
  context/        AppContext (language + theme, shared via React context)
  data/           Content & types: profile, currentRoles, experience,
                  services, institutions, metrics, publications, seo,
                  translations, types
  hooks/          useLanguage, useTheme, useReducedMotion
  styles/         globals.css (design tokens, pulse animation, print styles)
public/
  icons/          Favicon
  images/         Open Graph cover (SVG placeholder, see below)
  site.webmanifest, robots.txt
```

## How to update the content

All editable content lives under `src/data/`, with **no JSX changes required** for text edits:

- **Identity / contact**: [`src/data/profile.ts`](src/data/profile.ts) — display name, full name, titles, keywords, WhatsApp/email links, social links (YouTube).
- **Current roles** (IMMERSION, UNET, Survival English): [`src/data/currentRoles.ts`](src/data/currentRoles.ts).
- **Previous experience**: [`src/data/experience.ts`](src/data/experience.ts).
- **IMMERSION institutional context & attribution note, external links (IMMERSION website, Survival English YouTube channel)**: [`src/data/institutions.ts`](src/data/institutions.ts).
- **Services**: [`src/data/services.ts`](src/data/services.ts).
- **Stats / metrics**: [`src/data/metrics.ts`](src/data/metrics.ts) — toggle `SHOW_UNVERIFIED_METRICS` once a `verificationRecommended` figure is confirmed.
- **Publications**: [`src/data/publications.ts`](src/data/publications.ts).
- **SEO / meta**: [`src/data/seo.ts`](src/data/seo.ts).
- **All other UI chrome copy** (nav, buttons, section titles/subtitles, footer): [`src/data/translations.ts`](src/data/translations.ts).

## Replacing placeholder assets

- `public/icons/favicon.svg`, `public/images/og-cover.svg` — simple vector placeholders. Replace with a real photo/logo when available.
- `index.html` and `src/data/seo.ts` reference `https://christopher-rodriguez.example/` as a **placeholder domain** (the `.example` TLD is IANA-reserved and intentionally does not resolve). Replace every occurrence with the real production domain before deploying, including the JSON-LD `@id` values, `canonical`, `og:url` and `og:image` tags.
- Survival English's official link is its YouTube channel ([@Inglesdesupervivencia](https://www.youtube.com/@Inglesdesupervivencia/featured)), set in `institutionLinks["survival-english"]` in `src/data/institutions.ts` — used by the Survival English card's expanded view, the dedicated Survival English section's primary CTA, the footer icon, and the Person JSON-LD `sameAs`. Add further real social profiles the same way once provided.

## Facts still requiring confirmation

These are flagged with `verificationRecommended` in the data and are displayed with cautious wording rather than as confirmed fact:

- **UNET — "~20% growth in student participation"**: shown only inside the role's detailed description, not as a homepage stat.
- **Survival English — "500+ professionals trained"**: shown as a headline stat (it is CV-reported) with a visible verification note; update the value directly in `src/data/metrics.ts` once records are confirmed.

## Accessibility

- Skip-to-content link, visible on keyboard focus.
- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`) and a logical heading hierarchy (single `h1` in the hero, `h2` per section).
- All interactive controls are real `<button>`/`<a>` elements, fully keyboard-operable, with visible focus rings.
- `aria-current`, `aria-expanded`, `aria-controls` used where state needs to be conveyed to assistive tech.
- The active-status indicator pairs a pulsing dot with visible text (`Currently Active` / `Actualmente Activo`) — color and animation are never the only signal.
- Respects `prefers-reduced-motion` (Framer Motion via `MotionConfig reducedMotion="user"`, plus a CSS-level fallback for the status pulse).

## Deployment (GitHub Pages)

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and deploys automatically on every push to `main` (installs with `npm ci`, runs `lint` and `build`, then uploads `dist/` as a Pages artifact and deploys it), using the official `actions/configure-pages`, `actions/upload-pages-artifact` and `actions/deploy-pages` actions with minimal permissions.

### `base` path (read this before your first deploy)

`vite.config.ts` currently sets `base: "/"`, which is correct only if:

- the repo is named `<your-username>.github.io` (a user/org page, served at the domain root), **or**
- you attach a custom domain (via a `CNAME` file) to the Pages site.

If instead you create a normal project repo (e.g. `christopher-portfolio`), GitHub serves it at `https://<username>.github.io/christopher-portfolio/`, and you must change `vite.config.ts` to `base: "/christopher-portfolio/"` (exact repo name, case-sensitive) before building — otherwise assets will 404.

### One-time setup

```bash
# 1. Create the repository on GitHub first (web UI, or `gh repo create` if you have the CLI).

# 2. From this project folder:
git init
git add .
git commit -m "Initial commit: Christopher Rodríguez portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**. The workflow runs automatically on the push (or re-run it manually from the **Actions** tab) and the site goes live at the URL shown there.

You can also do steps 2 onward from **GitHub Desktop**: "Add local repository" → point it at this folder → "Publish repository".

### Other static hosts

For Netlify, Vercel, or any other static host: `npm run build` outputs to `dist/` — upload that folder directly (`base: "/"` is correct for those since they serve from the domain root).

Whichever host you use, update the placeholder domain references noted above (`christopher-rodriguez.example`) to the real production URL first.

## License

This repository contains Christopher Rodríguez's personal portfolio content and is not licensed for reuse of its personal/professional content (name, CV, biography, photos). The code structure itself may be used as a learning reference.
