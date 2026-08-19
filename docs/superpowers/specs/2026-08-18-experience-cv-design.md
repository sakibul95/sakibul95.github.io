# Experience Section + CV Download — Design

**Date:** 2026-08-18
**Status:** Approved
**Scope:** Portfolio site (`src/`)

## Goal

Add a Work Experience section to the portfolio and give visitors a one-click
way to download the owner's CV as a PDF.

## Positioning

The owner lives in Bangladesh. Experience is presented as a **global + local
mix**: all roles shown normally, but Bangladesh-based roles carry a highlighted
location badge and remote roles carry a "Remote" badge, so the
local-and-global story reads at a glance.

## Data layer

New `src/lib/experience.ts` — typed array (same pattern as `projects.ts`):

```ts
{
  company: string;
  role: string;
  location: string;            // e.g. "Dhaka, Bangladesh"
  type: "On-site" | "Remote" | "Hybrid";
  isBangladesh: boolean;       // drives the highlighted local badge
  period: { start: string; end: string | "Present" };
  summary: string;
  achievements: string[];      // 3–4 bullets each
  tech: string[];
}
```

Five placeholder entries (edit-friendly, aligned with the existing full-stack
persona and the "9+ years" stat, ~2016 → Present):

1. Lumina Health — Senior Full-Stack Engineer — Remote (global) — 2022 → Present
2. PayCore Bangladesh — Full-Stack Engineer — Dhaka, on-site (fintech) — 2020 → 2022
3. FreshCart Technologies — Frontend Engineer — Dhaka, on-site (e-commerce) — 2018 → 2020
4. BrightByte Solutions — Software Engineer — Dhaka, on-site (software house) — 2017 → 2018
5. Freelance (Upwork) — Frontend Developer — Remote (global) — 2016 → 2017

## Component

New `src/components/experience.tsx` — **Server Component**, zero client JS.

- Section `id="experience"`, `border-t`, same padding rhythm as siblings.
- Eyebrow `02 — Experience` (existing sections renumbered: About → 03, Contact → 04).
- Vertical timeline: left rail with a glowing dot + connector line per entry.
- Each entry: role, company, date range, location + type badges, summary,
  3–4 achievement bullets, tech chips.
- Each entry wrapped in the existing `Reveal` component (scroll animation,
  reduced-motion respected, noscript/print fallback already global).
- Navbar gains an "Experience" link between Work and About.

## CV download

- Static file `public/cv.pdf` (real PDF, generated offline by a pure-stdlib
  Python script — no new npm deps). Served by Next.js static assets.
- Download buttons use `download="<name>-CV.pdf"` on a plain `<a>`:
  - **Navbar** (desktop + mobile): "Download CV" button with `DownloadIcon`.
  - **Hero** CTA row: "Download CV" secondary button.
  - **Contact** section: secondary button next to the email CTA.
- README documents how to replace `public/cv.pdf` with the real CV.

## Persona tweaks

- `site.ts` default location: "San Francisco, CA" → "Dhaka, Bangladesh"
  (env-overridable via `NEXT_PUBLIC_LOCATION`).
- Person JSON-LD gains `worksFor` derived from `experience.ts` (SEO, cheap).

## Out of scope

- Real CV content (placeholders only; owner replaces them).
- No new npm dependencies, no state management, no animation libraries.
