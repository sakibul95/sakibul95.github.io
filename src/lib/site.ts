/* Sub-path prefix for GitHub Pages project sites. Must match `basePath` in
   next.config.ts — both read the same env var so they can't drift. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/* Public origin, no trailing slash and no sub-path — the sub-path comes from
   basePath below, so there's a single source of truth for it.

   Must stay path-free: it's used as `metadataBase` in layout.tsx, and Next
   independently prefixes file-convention images (opengraph-image, icons) with
   basePath. Putting the sub-path in both yields /repo/repo/opengraph-image.png. */
export const origin = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production"
    ? "https://sakibul95.github.io"
    : "http://localhost:3000")
).replace(/\/+$/, "");

/* Prefixes a path in `public/` with basePath. Next rewrites `next/image` and
   `next/link` automatically, but NOT plain `href`/`src` strings — so anything
   hand-written like "/cv.pdf" has to go through this or it 404s on a project
   site. */
export function assetPath(path: string): string {
  return `${basePath}${path}`;
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_NAME ?? "Sakibul Islam",
  role: process.env.NEXT_PUBLIC_ROLE ?? "Senior Software Engineer",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "sakibul95bubt@gmail.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+8801966113178",
  location: process.env.NEXT_PUBLIC_LOCATION ?? "Dhaka, Bangladesh",
  available: (process.env.NEXT_PUBLIC_AVAILABLE ?? "true") !== "false",
  tagline:
    "I design, build and optimize enterprise-grade back-end systems — billing, ERP, CRM and real-time monitoring platforms — that businesses depend on every day.",
  url: `${origin}${basePath}`,
  socials: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/sakibul95",
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://linkedin.com/in/sakibul95",
  },
} as const;
