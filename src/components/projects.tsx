import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SourceNotice } from "@/components/source-notice";
import { projectVisuals } from "@/components/project-visuals";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Visual = projectVisuals[project.visual];

  return (
    <Reveal className="h-full" delay={index % 2 === 0 ? 0 : 80}>
      <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface transition-[border-color,transform] duration-300 hover:border-accent/40 hover:-translate-y-1">
        <div className="relative overflow-hidden rounded-t-2xl border-b border-border">
          <Visual
            id={project.slug}
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-veil to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute top-4 right-4 rounded-full border border-border bg-surface/80 px-3 py-1 font-mono text-[11px] text-foreground/80 backdrop-blur-sm">
            {project.year}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              {project.title}
            </h3>
            <span className="mt-1 shrink-0 font-mono text-xs text-faint">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-1.5 text-sm font-medium text-accent">{project.tagline}</p>
          <p className="mt-0.5 text-xs font-medium text-faint">
            Built at {project.company}
          </p>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-muted">
            {project.description}
          </p>

          <ul className="mt-4 space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2.5 text-sm leading-relaxed text-foreground/85"
              >
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                />
                {highlight}
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
            <SourceNotice projectTitle={project.title} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="01 — Selected Work"
          title="Systems I've built"
          description="Enterprise, telecom and government platforms I've designed, built and operated end to end. These are proprietary, client-owned systems — case-study details only, no public source."
          action={{
            label: "More on GitHub",
            href: siteConfig.socials.github,
          }}
        />

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
