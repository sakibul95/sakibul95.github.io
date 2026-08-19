# Portfolio

A production-ready, single-page portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**. Designed to be fast, accessible, and visually sharp — aimed at both technical clients and hiring managers.

## Highlights

- **Static by default** — every route is prerendered as static HTML (`next build` output is 100% `○ Static`). No server round-trips on page load.
- **Optimized images** — `next/image` with responsive `srcset`, AVIF/WebP output, lazy loading, and blur-up placeholders. Zero layout shift.
- **Self-hosted fonts** — Inter + Geist Mono served from your own domain via `next/font`. No external font requests.
- **Minimal JavaScript** — Server Components for all content. Two small client components only: the navbar (scroll state + mobile menu) and an `IntersectionObserver` scroll-reveal. No animation or state-management libraries.
- **SEO & sharing ready** — metadata, Open Graph, Twitter cards, generated OG image, JSON-LD structured data (`Person` + `WebSite`), `robots.txt`, and `sitemap.xml`.
- **Accessible** — skip link, semantic landmarks, visible focus rings, `prefers-reduced-motion` support, 44px+ touch targets, keyboard-friendly nav.
- **Mobile-first** — responsive from 375px to 1440px+.
- **Experience timeline** — five work entries (global remote + Bangladesh-based mix) with location/remote badges.
- **CV download** — a one-click "Download CV" button in the hero, navbar, experience, and contact sections, backed by a real PDF in `public/cv.pdf`.

## Tech Stack

| Layer      | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)            |
| Language   | TypeScript                                    |
| Styling    | Tailwind CSS v4                               |
| Fonts      | Inter (sans), Geist Mono (mono) via next/font |
| Deployment | Vercel (recommended) or any Node.js host      |

## Getting Started

Requirements: **Node.js 20.9+**, npm.

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The site works out of the box with sensible placeholder content. To make it yours, edit:

- `src/lib/site.ts` — your name, role, email, location, socials (also configurable via env vars)
- `src/lib/portfolio.ts` — bio stats, expertise areas, tech stack
- `src/lib/experience.ts` — work experience (company, role, location, period, achievements, tech)
- `src/lib/projects.ts` — project cards (title, description, technologies, links)
- `src/images/profile/avatar.png` — hero avatar (512x512, displayed as a circle)
- `src/images/profile/portrait.png` — About portrait (800x1000, 4:5 crop)
- `src/app/opengraph-image.tsx` — the social share image
- `public/cv.pdf` — the downloadable CV. It is a generated placeholder; replace it with your real CV (keep the filename `cv.pdf` so all download links keep working).

## Configuration

Copy `.env.example` to `.env.local` and adjust values. All variables are optional; defaults are in `src/lib/site.ts`.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com   # canonical URL, sitemap, OG
NEXT_PUBLIC_NAME=Sakibul Islam
NEXT_PUBLIC_ROLE=Full-Stack Engineer
NEXT_PUBLIC_EMAIL=hello@alexrivera.dev
NEXT_PUBLIC_LOCATION=Dhaka, Bangladesh
NEXT_PUBLIC_AVAILABLE=true
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-github
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-linkedin
NEXT_PUBLIC_TWITTER_URL=https://x.com/your-handle
```

> `NEXT_PUBLIC_*` variables are inlined at build time. Set `NEXT_PUBLIC_SITE_URL` on your hosting provider so canonical URLs, sitemap, and Open Graph point at your real domain.

## Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the development server                 |
| `npm run build`     | Create an optimized production build         |
| `npm start`         | Serve the production build locally           |
| `npm run lint`      | Run ESLint                                   |
| `npm run typecheck` | Run the TypeScript compiler                  |

## Performance Notes

- All routes are statically prerendered; the home page ships no server-rendered data fetching.
- Hero visuals are pure CSS (no hero image payload). Project thumbnails are small generated PNGs (~55–77 KB each) that `next/image` re-encodes to AVIF/WebP per device size.
- Animations use only `opacity` and `transform` (GPU-composited), last 300–700ms, and are disabled under `prefers-reduced-motion`.

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub/GitLab.
2. Import it at [vercel.com/new](https://vercel.com/new) — framework is detected automatically.
3. Add `NEXT_PUBLIC_SITE_URL` (and other `NEXT_PUBLIC_*` vars) under **Project → Settings → Environment Variables**.
4. Deploy. Each push to `main` triggers a new deployment.

### Any Node.js host (Docker / VPS / Railway / Fly.io)

```bash
npm ci
npm run build
npm start   # serves on PORT (default 3000)
```

Example `Dockerfile`:

```dockerfile
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

For self-hosted deployments enable standalone output:

```ts
// next.config.ts
const nextConfig = { output: "standalone" };
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout: fonts, metadata, JSON-LD, nav/footer
│   ├── page.tsx              # Home page (hero, work, experience, about, contact)
│   ├── globals.css           # Tailwind v4 theme tokens + custom utilities
│   ├── opengraph-image.tsx   # Generated 1200x630 OG image
│   ├── robots.ts             # robots.txt
│   ├── sitemap.ts            # sitemap.xml
│   └── not-found.tsx         # 404 page
├── components/
│   ├── navbar.tsx            # Fixed nav + mobile menu (client)
│   ├── hero.tsx              # Value proposition + CSS terminal card
│   ├── projects.tsx          # Featured work grid (next/image)
│   ├── experience.tsx        # Work timeline with location/remote badges
│   ├── about.tsx             # Bio, expertise, stats
│   ├── contact.tsx           # CTA + email + socials
│   ├── footer.tsx
│   ├── section-heading.tsx
│   ├── reveal.tsx            # IntersectionObserver scroll reveal (client)
│   └── icons.tsx             # Inline SVG icon set
├── images/
│   ├── projects/          # Project thumbnail PNGs
│   └── profile/           # avatar.png (hero) + portrait.png (about)
└── lib/
    ├── site.ts               # Site-wide config (env-driven)
    ├── portfolio.ts          # Expertise, stats, tech stack
    ├── experience.ts         # Work experience data
    └── projects.ts           # Project data
public/
└── cv.pdf                    # Downloadable CV (replace with the real one)
```

## License

MIT — use it as a starting point for your own portfolio.
