import Image from "next/image";
import { expertise, stats } from "@/lib/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";
import { PinIcon } from "@/components/icons";
import portrait from "@/images/profile/portrait.jpeg";

/* Set to true to bring the portrait back into this section as a side
   image. Leave false while the hero shows your photo (HERO_VARIANT
   "portrait" or "overlap"), so the same headshot doesn't appear twice
   on one page. Flip to true if you settle on hero variant "avatar" or
   "none" — otherwise your photo never appears large anywhere. */
const ABOUT_SHOW_PORTRAIT = false;

function Bio() {
  return (
    <div className="space-y-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
      <p>
        I&apos;m {siteConfig.name}, a {siteConfig.role.toLowerCase()} who cares
        about the last 10% as much as the first 90%. Over 7.5+ years I&apos;ve
        built for teams that can&apos;t afford downtime — telecom billing, ISP
        network monitoring, ERP and government platforms processing real money
        and real infrastructure.
      </p>
      <p>
        My work sits at the intersection of reliability and architecture. I
        sweat the details users never see: query plans, cache invalidation,
        multitenant boundaries, and codebases that stay maintainable years
        after handover.
      </p>
      <p className="text-foreground/90">
        Right now I&apos;m most interested in distributed system design,
        performance optimization at scale, and leading teams that ship
        enterprise software without compromising on quality.
      </p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="03 — About"
          title="Engineering is the craft. Reliability is the habit."
        />

        {ABOUT_SHOW_PORTRAIT ? (
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-surface">
                <Image
                  src={portrait}
                  alt={`Portrait of ${siteConfig.name}`}
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <p className="absolute bottom-4 left-5 flex items-center gap-2 text-sm font-semibold text-foreground/90">
                  <PinIcon className="h-4 w-4 text-accent" />
                  {siteConfig.location}
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Bio />
            </Reveal>
          </div>
        ) : (
          <Reveal>
            {/* Capped at max-w-3xl — full container width would push lines
                past a comfortable reading measure. */}
            <div className="max-w-3xl">
              <Bio />
            </div>
          </Reveal>
        )}

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {expertise.map((area, i) => (
            <Reveal key={area.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/40">
                <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
                  {area.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-snug text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface px-6 py-8 text-center transition-colors duration-300 hover:bg-surface-2"
              >
                <dd className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-sm text-faint">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
