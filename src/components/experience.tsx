import { experience } from "@/lib/experience";
import { assetPath, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { DownloadIcon, PinIcon } from "@/components/icons";

const cvFileName = siteConfig.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-cv.pdf";

const typeStyles = {
  Remote: "border-accent-alt/30 bg-accent-alt/10 text-accent-alt",
  "On-site": "border-border bg-surface-2 text-muted",
  Hybrid: "border-border bg-surface-2 text-muted",
} as const;

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="02 — Experience"
          title="Where I've worked"
          description="7.5+ years across telecom, ISP and government software in Dhaka, Bangladesh — from BTRC-regulated billing platforms to nationwide network monitoring and ERP systems."
        />

        <ol className="relative">
          {experience.map((job, index) => (
            <li
              key={job.company}
              className="relative border-l border-border pb-14 pl-8 last:pb-0 sm:pl-12"
            >
              <Reveal delay={index * 60}>
                <span
                  aria-hidden="true"
                  className="absolute -left-[20px] mt-2 h-2.5 w-2.5 rounded-full border border-accent bg-accent shadow-[0_0_12px_var(--site-accent-glow)]"
                />

                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {job.role}
                    </h3>
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider",
                        typeStyles[job.type],
                      )}
                    >
                      {job.type}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-faint">
                    {job.period.start} — {job.period.end}
                  </p>
                </div>

                <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-muted">
                  <span className="text-foreground">{job.company}</span>
                  <span
                    aria-hidden="true"
                    className="text-faint"
                  >
                    /
                  </span>
                  {job.isBangladesh ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                      <PinIcon className="h-3 w-3" />
                      {job.location}
                    </span>
                  ) : (
                    <span className="text-xs">{job.location}</span>
                  )}
                </p>

                <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted">
                  {job.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {job.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex max-w-2xl gap-2.5 text-sm leading-relaxed text-foreground/85"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-xs text-faint"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={120}>
          <a
            href={assetPath("/cv.pdf")}
            download={cvFileName}
            className="mt-12 inline-flex h-11 items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 text-sm font-semibold text-accent transition-colors duration-200 hover:border-accent/70 hover:bg-accent hover:text-on-accent"
          >
            <DownloadIcon className="h-4 w-4" />
            Download CV (PDF)
          </a>
        </Reveal>
      </div>
    </section>
  );
}
