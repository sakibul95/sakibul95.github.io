import { assetPath, siteConfig } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";

const cvFileName =
  siteConfig.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-cv.pdf";

export function Contact() {
  const socials = [
    { label: "GitHub", href: siteConfig.socials.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: LinkedInIcon },
  ];

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-12 sm:py-24">
            <div
              className="glow-accent absolute -top-40 left-1/2 -z-10 h-[420px] w-[640px] -translate-x-1/2 rounded-full blur-3xl"
              aria-hidden="true"
            />
            <div className="bg-grid absolute inset-0 -z-20" aria-hidden="true" />

            <p className="font-mono text-[13px] font-medium uppercase tracking-widest text-accent">
              04 — Contact
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-accent to-accent-alt bg-clip-text text-transparent">
                fast
              </span>
              .
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m open to full-time roles, consulting and technical
              leadership opportunities. Tell me what you&apos;re building —
              I usually reply within a day.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-accent px-7 text-[15px] font-semibold text-on-accent transition-colors duration-200 hover:bg-accent-strong sm:w-auto"
              >
                <MailIcon className="h-[18px] w-[18px]" />
                {siteConfig.email}
              </a>
              <a
                href={assetPath("/cv.pdf")}
                download={cvFileName}
                className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-7 text-[15px] font-semibold text-accent transition-colors duration-200 hover:border-accent/70 hover:bg-accent hover:text-on-accent sm:w-auto"
              >
                <DownloadIcon className="h-[18px] w-[18px]" />
                Download CV
              </a>
            </div>

            <p className="mt-5 text-sm text-faint">
              Or call{" "}
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className="font-medium text-muted transition-colors hover:text-accent"
              >
                {siteConfig.phone}
              </a>
            </p>

            <div className="mt-8 flex items-center justify-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <p className="mt-8 text-sm text-faint">
              {siteConfig.location} · Open to new opportunities
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
