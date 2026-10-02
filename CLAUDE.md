# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build`; a type error fails the build
- `npx tsc -b` — type-check only
- `npm run lint` — oxlint
- `npm run preview` — serve the production build

There is no test framework set up.

## Architecture

Single-page personal portfolio: React 19 + TypeScript (strict, incl. `noUnusedLocals`/`noUnusedParameters`) on Vite. No router, no state library, no CSS framework. TS config follows Vite's split layout: `tsconfig.app.json` (src) and `tsconfig.node.json` (`vite.config.ts`). Relative imports use explicit `.ts`/`.tsx` extensions.

### Data flow

- `src/data.ts` — **all page content** (roles, stats, skills, experience, journey, education, projects, awards, affiliations, training, nav, contact) as typed constant arrays with exported interfaces. Content edits belong here, not in JSX. Components import these constants directly; nothing is passed down as props except page-level state.
- `src/hooks.ts` — all custom hooks: `useReveal` (IntersectionObserver, fires once; generic over element type), `useTypewriter`, `useCountUp`, `useScrollSpy`, `useScrollProgress`, `useSidebarCollapsed`. Hooks are written as exported arrow functions (`export const useX = (…): T => { … };`), not `function` declarations. The motion hooks short-circuit on `prefers-reduced-motion`. `useScrollSpy` marks a section active once its top passes 40% of the viewport, and forces the last id when the page is scrolled to the bottom (on tall screens the last section can't reach that line); it re-evaluates on `scroll` and `resize`.
- `src/App.tsx` — composition only. It owns the page-level state (scroll progress, active section, typewriter role text, sidebar collapsed) and renders the layout and sections in order. New UI goes in `src/components/`, not here.

### Components (`src/components/`)

Named exports. Each exported component has its own file; a small private item component used by only one section (`Stat`, `SkillRow`, `JourneyNode`, `ProjectCard`) lives in that section's file.

- `sections/` — one file per page section, rendered in `NAV` order. Each `<section>`'s `id` must match an `id` in `NAV`; `useScrollSpy` uses those ids to highlight the active link in both the desktop sidebar and the mobile nav, so adding a section means adding a `NAV` entry too. Section numbers are hardcoded in each section's `SectionTag num` (and in `Connect`'s `.gn-tag`), so inserting a section means renumbering the later ones in both places. Current order: Hero (`profile`), Stack, Experience, Journey, Education, Work, Honors (awards), Affiliations, Training, Connect. Honors, Affiliations and Training were once one combined section and were deliberately split; they share the single-column `.gn-list` container.
- `layout/` — `Sidebar` (desktop), `MobileNav` (top bar + overlay menu, below 960px), `Footer`.
- `effects/` — `BootSequence` (intro overlay; locks `body` scroll until it finishes), `CustomCursor`, `Grain`.
- `common/` — `Reveal` (fade-in wrapper, polymorphic via `as`), `SectionTag` (section number + heading), `Lightbox` (full-size image viewer used by the Journey thumbnails), and the GitHub/LinkedIn SVG icons. `Lightbox` renders through a portal into `document.body` because `.gn-reveal` ancestors use `transform`, which would break `position: fixed`; any future overlay or modal needs the same treatment. Other icons come from `lucide-react`.

### Layout and the collapsible sidebar

The desktop sidebar is `position: fixed`; `.gn-main` is offset by `margin-left` to clear it. Both widths read the CSS variable `--sidebar-current`, which `.gn-root` sets to `--sidebar-w` (320px), or to `--sidebar-rail` (76px) when `App` adds `.is-collapsed`. The collapsed rail hides text through `.is-collapsed …` rules in `styles.css` and keeps the logo, toggle, nav numbers and social icons. `useSidebarCollapsed` persists the choice in `localStorage` (`gn-sidebar-collapsed`), with try/catch fallbacks. Below 960px the sidebar is hidden and `.gn-main` resets to full width, so the collapse state has no effect on mobile.

The hero photo frame (`.gn-frame`) is capped at 820px and right-aligned on desktop; the 960px media query overrides it to 360px, centered.

The Work section is a wrapping CSS grid (`.gn-project-grid`). It was previously a scroll-driven horizontal track and was deliberately changed; don't reintroduce horizontal scrolling.

### Styling

- `src/index.css` — reset only.
- `src/styles.css` — all component styles. Class names are prefixed `gn-`. Design tokens (colors, fonts, sidebar widths) are CSS custom properties at the top. The theme is dark-only. Responsive breakpoint: `@media (max-width: 960px)`. The custom cursor is enabled only under `@media (pointer: fine)`.
- Fonts load from Google Fonts and Fontshare in `index.html`.

### Assets

Images live in `public/assets/` and are referenced by absolute path strings (`/assets/foo.png`), mostly from `data.ts` (journey screenshots) plus the hero photo in `sections/Hero.tsx`. They are not imported as modules. Favicons are in `public/` and linked from `index.html`. The images came from the sibling repo `D:\Repositories\porfolio-ts` (`src/assets/images/`).
