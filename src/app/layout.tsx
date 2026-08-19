import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { assetPath, basePath, origin, siteConfig } from "@/lib/site";
import { themeColors, themeInitScript } from "@/lib/theme";
import { techStack } from "@/lib/portfolio";
import { experience } from "@/lib/experience";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  /* Origin only, NOT siteConfig.url — Next already prefixes file-convention
     images (opengraph-image.png, icon.svg, apple-icon.png) with basePath, so a
     sub-path here would be applied twice. Relative `alternates.canonical` is
     resolved against this and is NOT basePath-prefixed, hence the explicit
     basePath below. */
  metadataBase: new URL(origin),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "backend engineer",
    "software engineer",
    siteConfig.role,
    "C#",
    ".NET Core",
    "ASP.NET Core",
    "SQL Server",
    "enterprise software",
    "ERP",
    "portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: `${basePath}/` },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  /* Declared explicitly rather than left to the file conventions: when
     `basePath` is set, Next omits the favicon.ico tag entirely (a bare
     /favicon.ico is only auto-discoverable at a domain root), which leaves
     Safari and older browsers with no icon at all on a project site. Listing
     them keeps output identical whether or not basePath is set. */
  icons: {
    icon: [
      { url: assetPath("/icon.svg"), type: "image/svg+xml", sizes: "any" },
      {
        url: assetPath("/favicon.ico"),
        type: "image/x-icon",
        sizes: "16x16 32x32 48x48 64x64",
      },
    ],
    apple: {
      url: assetPath("/apple-icon.png"),
      type: "image/png",
      sizes: "180x180",
    },
  },
};

export const viewport: Viewport = {
  /* Both match the dark default rather than the visitor's OS, so the browser
     chrome agrees with the page on a first paint. theme-toggle.tsx rewrites the
     `theme-color` tag when light is pinned, and the `color-scheme` declarations
     in globals.css take over from this hint once the stylesheet lands. */
  themeColor: themeColors.dark,
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  image: `${siteConfig.url}/opengraph-image.png`,
  address: { "@type": "PostalAddress", addressLocality: siteConfig.location },
  knowsAbout: [...techStack],
  sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
  worksFor: experience.map((job) => ({
    "@type": "Organization",
    name: job.company,
    address: { "@type": "PostalAddress", addressLocality: job.location },
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.tagline,
  author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [personJsonLd, websiteJsonLd],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${geistMono.variable} h-full`}
      /* The inline script below writes `data-theme` onto this element before
         React sees it, which is a mismatch by definition. */
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#top"
          className="sr-only z-[60] rounded-md bg-accent px-4 py-2 text-sm font-semibold text-on-accent focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <noscript>
          <style>{`.reveal-hidden { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
