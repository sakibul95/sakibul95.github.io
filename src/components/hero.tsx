import Image from "next/image";
import Link from "next/link";
import { assetPath, siteConfig } from "@/lib/site";
import { ArrowRightIcon, DownloadIcon, PinIcon } from "@/components/icons";
import {
  OverlapVisual,
  PortraitVisual,
  TerminalVisual,
} from "@/components/hero-visuals";
import avatar from "@/images/profile/avatar.jpeg";

const cvFileName =
  siteConfig.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-cv.pdf";

type HeroVariant = "portrait" | "overlap" | "avatar" | "none";

/* ─── PICK YOUR HERO VISUAL ──────────────────────────────────────────
   Change the value below and reload to preview each layout. Once you've
   picked one, delete this switch and the variants you don't want.

     "portrait"  Large headshot + two floating metric cards.
                 Terminal mock removed.            ← recommended
     "overlap"   Large headshot with a condensed terminal card
                 overlapping its lower edge. Busier, taller.
     "avatar"    Small circular avatar beside the availability badge,
                 terminal mock as the hero visual. Original layout.
     "none"      No photo in the hero at all; terminal mock only.

   NOTE: with "avatar" or "none" your photo no longer appears large
   anywhere, because the About section's portrait was removed. If you
   settle on one of those two, set ABOUT_SHOW_PORTRAIT back to true in
   src/components/about.tsx.
   ─────────────────────────────────────────────────────────────────── */
const HERO_VARIANT: HeroVariant = "portrait";

function HeroVisual() {
  if (HERO_VARIANT === "portrait") return <PortraitVisual />;
  if (HERO_VARIANT === "overlap") return <OverlapVisual />;
  return <TerminalVisual />;
}

export function Hero() {
  const showAvatarChip = HERO_VARIANT === "avatar";

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="glow-accent absolute -top-32 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-[120%] rounded-full blur-2xl"
        aria-hidden="true"
      />
      <div
        className="glow-blue absolute top-24 -right-48 -z-10 h-[520px] w-[520px] rounded-full blur-2xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div
            className="animate-fade-up flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0ms" }}
          >
            {showAvatarChip ? (
              <Image
                src={avatar}
                alt={`Portrait of ${siteConfig.name}`}
                priority
                sizes="80px"
                className="h-16 w-16 rounded-full border-2 border-accent/50 object-cover shadow-lg shadow-accent/20 ring-4 ring-accent/5 sm:h-20 sm:w-20"
              />
            ) : null}
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-dot absolute inline-flex h-full w-full rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {siteConfig.available
                ? "Available for new projects"
                : "Currently booked"}
            </span>
          </div>

          <h1
            className="animate-fade-up mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "90ms" }}
          >
            I engineer{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
              reliable, scalable
            </span>{" "}
            back-end systems.
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted"
            style={{ animationDelay: "180ms" }}
          >
            I&apos;m {siteConfig.name}, a {siteConfig.role} with 7.5+ years
            shipping production software — from BTRC-compliant billing
            platforms to real-time network and energy monitoring systems that
            hold up under load.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "270ms" }}
          >
            <Link
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-[15px] font-semibold text-background transition-colors duration-200 hover:bg-accent-strong"
            >
              View my work
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center rounded-full border border-border bg-surface px-6 text-[15px] font-semibold text-foreground transition-colors duration-200 hover:border-accent/50 hover:text-accent"
            >
              Contact me
            </Link>
            <a
              href={assetPath("/cv.pdf")}
              download={cvFileName}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface px-6 text-[15px] font-semibold text-foreground transition-colors duration-200 hover:border-accent/50 hover:text-accent"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <p
            className="animate-fade-up mt-9 flex items-center gap-2 text-sm text-faint"
            style={{ animationDelay: "360ms" }}
          >
            <PinIcon className="h-4 w-4 text-accent" />
            {siteConfig.location} · Enterprise, telecom & government software
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
