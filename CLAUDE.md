# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build`; a type error fails the build
- `npx tsc -b` — type-check only
- `npm run lint` — oxlint
- `npm run preview` — serve the production build
- `npm run resume:pdf` — builds, then renders `/resume` through headless Edge/Chrome into `public/assets/Graven_Niel_Corias_CV.pdf` (set `CHROME_PATH` if neither is in a default location). Rerun after any change to the resume data or styles; the download button serves that committed file.

There is no test framework set up.

## Architecture

Personal portfolio: one long scrolling page plus a printable `/resume` page. React 19 + TypeScript (strict, incl. `noUnusedLocals`/`noUnusedParameters`) on Vite. No router, no state library, no CSS framework. TS config follows Vite's split layout: `tsconfig.app.json` (src) and `tsconfig.node.json` (`vite.config.ts`). Relative imports use explicit `.ts`/`.tsx` extensions.

### Data flow

- `src/main.tsx` — picks the page: `Resume` when the path is `/resume` (trailing slash ignored), `App` otherwise. This is the only "routing"; there is no router library.
- `src/data.ts` — **all page content** (roles, stats, skills, experience, journey, education, projects, awards, affiliations, training, nav, contact, and the `RESUME_*` constants) as typed constant arrays with exported interfaces. Content edits belong here, not in JSX. Components import these constants directly; nothing is passed down as props except page-level state.
- `src/hooks.ts` — all custom hooks: `useReveal` (IntersectionObserver, fires once; generic over element type), `useTypewriter`, `useCountUp`, `useScrollSpy`, `useScrollProgress`, `useScrolledPast`, `useSidebarCollapsed`. Hooks are written as exported arrow functions (`export const useX = (…): T => { … };`), not `function` declarations. The motion hooks short-circuit on `prefers-reduced-motion`. `useScrollSpy` marks a section active once its top passes 40% of the viewport, and forces the last id when the page is scrolled to the bottom (on tall screens the last section can't reach that line); it re-evaluates on `scroll` and `resize`. `useScrolledPast(viewports = 0.8)` is true once `scrollY` exceeds that many viewport heights.
- `src/App.tsx` — composition only. It owns the page-level state (scroll progress, active section, typewriter role text, sidebar collapsed) and renders the layout and sections in order. New UI goes in `src/components/`, not here.
- `src/Resume.tsx` — the `/resume` page root, also composition only (sets `document.title`, renders `BackToTop`, the toolbar and the sheet). It imports `styles.css` itself because `App` is never loaded on that path.

### The `/resume` page

The hero's "View resume" CTA is a plain `<a href="/resume">`, so moving between the two pages is a full page load (the boot sequence replays when coming back via the toolbar's back link). `public/_redirects` rewrites every path to `index.html` on Netlify so a direct load of `/resume` works; the Vite dev and preview servers already fall back to `index.html`.

The page is a sticky toolbar (back link, Print → `window.print()`, Download PDF → the committed PDF with a `download` attribute) over a light US Letter "paper" sheet. Its content is the `RESUME_*` constants (`RESUME_PROFILE`, `RESUME_SKILLS`, `RESUME_EXPERIENCE`, `RESUME_WORK`, `RESUME_EDUCATION`, `RESUME_CERTIFICATIONS`, `RESUME_LEADERSHIP`) in `data.ts`. They're kept separate from the portfolio data because they mirror the Word CV (`D:\Niel Personal\Resume\CV WORD\Graven_Niel_Corias_CV.docx`) word for word. Contact details come from `CONTACT` (including `website`).

- The sheet's colors are scoped tokens (`--paper-*`) on `.gn-resume-sheet`: the one light surface in an otherwise dark-only theme. `--paper-accent` is a darker `--accent` chosen for contrast on white.
- Sheet sizes are `em` off a 9.5pt base, so the phone breakpoint changes one `font-size` and everything scales.
- `@page` (letter, the Word CV's margins) and the `@media print` block at the end of `styles.css` hide the toolbar and `BackToTop` and strip the sheet's on-screen padding and shadow. The page breaks come from `break-after: avoid` on headings and entry heads, and `break-inside: avoid` on bullets.
- The resume's responsive rules are `@media screen and (max-width: 720px)` / `460px`. Keep the `screen`: the print viewport is about 685px wide and would otherwise match the phone layout.
- Keep the sheet's letter-spacing modest. Wide tracking makes PDF text extraction (ATS parsers) read headings as spaced-out letters, and tight tracking merges words (`.gn-resume-name` adds `word-spacing` for that reason).

`scripts/resume-pdf.js` generates the PDF. It calls Vite's JS `build()` and `preview()` APIs, then runs a local Chromium browser with `--headless --print-to-pdf` against `/resume`, using a throwaway profile directory. It must spawn the browser asynchronously because the preview server runs on the same event loop.

### Components (`src/components/`)

Named exports. Each exported component has its own file; a small private item component used by only one file (`Stat`, `SkillRow`, `JourneyNode`, `ProjectCard`; `Block`, `Entry`, `Bullets` in `ResumeSheet`) lives in that file.

- `sections/` — one file per page section, rendered in `NAV` order. Each `<section>`'s `id` must match an `id` in `NAV`; `useScrollSpy` uses those ids to highlight the active link in both the desktop sidebar and the mobile nav, so adding a section means adding a `NAV` entry too. Section numbers are hardcoded in each section's `SectionTag num` (and in `Connect`'s `.gn-tag`), so inserting a section means renumbering the later ones in both places. Current order: Hero (`profile`), Stack, Experience, Journey, Education, Work, Honors (awards), Affiliations, Training, Connect. Honors, Affiliations and Training were once one combined section and were deliberately split; they share the single-column `.gn-list` container.
- `layout/` — `Sidebar` (desktop), `MobileNav` (top bar + overlay menu, below 960px), `Footer`.
- `effects/` — `BootSequence` (intro overlay; locks `body` scroll until it finishes), `CustomCursor`, `Grain`. None of these render on `/resume`.
- `common/` — `Reveal` (fade-in wrapper, polymorphic via `as`), `SectionTag` (section number + heading), `Lightbox` (full-size image viewer used by the Journey thumbnails), `BackToTop`, and the GitHub/LinkedIn SVG icons. `Lightbox` renders through a portal into `document.body` because `.gn-reveal` ancestors use `transform`, which would break `position: fixed`; any future overlay or modal needs the same treatment. Other icons come from `lucide-react`.
- `resume/` — `ResumeToolbar` and `ResumeSheet`, used only by `src/Resume.tsx`.

`BackToTop` is a fixed lower-right button that fades in once `useScrolledPast()` is true. It's used on both pages and rendered first in each page's tree, so keyboard focus falls back to the top of the tab order when it hides. It sits at `z-index: 50`, above `.gn-main` and below the mobile menu (55), lightbox (200) and cursor (250). Its size and offset are the `--totop-size` / `--totop-inset` tokens. `.gn-footer` reserves right padding from those tokens so the copyright stays clear of the button, and the footer stacks its two lines below 960px.

### List rows

Experience (`.gn-ledger-row`), Education (`.gn-edu-row`), Honors (`.gn-award-row`), Affiliations and Training (`.gn-mini-card`) are bordered rows. They share one hover rule in `styles.css` that slides a row right by animating `padding-left`. Work is excluded on purpose: its cards (`.gn-pcard`) already lift on hover.

Row markers: Experience, Education, Affiliations and Training show a zero-padded number (`String(i + 1).padStart(2, "0")`) in `.gn-ledger-num`, in a `2.6rem` grid column; `.gn-mini-card` baseline-aligns it with the title. Honors uses gold bullet dots (`.gn-award-dot`) instead.

Gotcha: `Reveal` puts `.gn-reveal` on the same element, and `.gn-reveal` animates through `transition`. Any class that sets its own `transition` on a revealed element replaces that, and the element pops in instead of fading. The shared row rule therefore repeats the opacity/transform transitions; do the same for any new revealed element with its own transition.

### Layout and the collapsible sidebar

The desktop sidebar is `position: fixed`; `.gn-main` is offset by `margin-left` to clear it. Both widths read the CSS variable `--sidebar-current`, which `.gn-root` sets to `--sidebar-w` (320px), or to `--sidebar-rail` (76px) when `App` adds `.is-collapsed`. The collapsed rail hides text through `.is-collapsed …` rules in `styles.css` and keeps the logo, toggle, nav numbers and social icons. `useSidebarCollapsed` persists the choice in `localStorage` (`gn-sidebar-collapsed`), with try/catch fallbacks. Below 960px the sidebar is hidden and `.gn-main` resets to full width, so the collapse state has no effect on mobile.

The hero photo frame (`.gn-frame`) is capped at 820px and right-aligned on desktop; the 960px media query overrides it to 360px, centered.

The Work section is a wrapping CSS grid (`.gn-project-grid`). It was previously a scroll-driven horizontal track and was deliberately changed; don't reintroduce horizontal scrolling.

### Styling

- `src/index.css` — reset only.
- `src/styles.css` — all component styles. Class names are prefixed `gn-`. Design tokens (colors, fonts, sidebar widths, back-to-top size/inset) are CSS custom properties at the top. The theme is dark-only, apart from the resume's paper sheet. Responsive breakpoint: `@media (max-width: 960px)` (the resume page adds its own, see above). The custom cursor is enabled only under `@media (pointer: fine)`.
- Buttons: `.gn-btn` + `.gn-btn-primary` / `.gn-btn-ghost`, with `.gn-btn-sm` for the compact toolbar size. They work on `<button>` as well as `<a>` (`.gn-btn` sets `font-family: inherit` and the ghost variant a transparent background).
- Fonts load from Google Fonts and Fontshare in `index.html`.

### Assets

Images live in `public/assets/` and are referenced by absolute path strings (`/assets/foo.png`), mostly from `data.ts` (journey screenshots) plus the hero photo in `sections/Hero.tsx`. They are not imported as modules. The images came from the sibling repo `D:\Repositories\porfolio-ts` (`src/assets/images/`). `public/assets/Graven_Niel_Corias_CV.pdf` is generated by `npm run resume:pdf`; don't edit it by hand. Favicons are in `public/` and linked from `index.html`. `public/_redirects` holds the Netlify SPA rewrite.
