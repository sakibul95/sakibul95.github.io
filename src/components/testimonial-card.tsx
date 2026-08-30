"use client";

import { useId, useState } from "react";
import { LinkedInIcon } from "@/components/icons";
import type { Testimonial } from "@/components/testimonials";
import styles from "./testimonials.module.css";

const COLLAPSE_AFTER_CHARACTERS = 260;

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TestimonialCard({
  testimonial,
  duplicate = false,
}: {
  testimonial: Testimonial;
  duplicate?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const quoteId = useId();
  const canExpand = testimonial.quote.length > COLLAPSE_AFTER_CHARACTERS;

  return (
    <article className="group flex w-[min(84vw,24rem)] shrink-0 flex-col justify-between self-start rounded-2xl border border-border bg-surface p-5 shadow-lg transition-[border-color,transform,background-color] duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-2 sm:w-96 sm:p-6">
      <div>
        <div className="flex items-center justify-between gap-4">
          <span
            className="font-mono text-4xl leading-none text-accent/45"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0a66c2]/25 bg-[#0a66c2]/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#4b9be8]">
            <LinkedInIcon className="h-3 w-3" />
            LinkedIn
          </span>
        </div>

        <blockquote
          id={quoteId}
          className={`${styles.quote} ${canExpand && !expanded ? styles.clamped : ""} mt-3 text-pretty text-[15px] leading-relaxed text-foreground/85`}
        >
          {testimonial.quote}
        </blockquote>

        {canExpand ? (
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            aria-expanded={expanded}
            aria-controls={quoteId}
            aria-label={`${expanded ? "Collapse" : "Read full"} recommendation from ${testimonial.name}`}
            tabIndex={duplicate ? -1 : undefined}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/8 px-3 py-1.5 text-xs font-semibold text-accent transition-colors duration-200 hover:border-accent/50 hover:bg-accent/15"
          >
            {expanded ? "Show less" : "Read more"}
            <span
              aria-hidden="true"
              className={`text-sm leading-none transition-transform duration-200 ${expanded ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>
        ) : null}
      </div>

      <footer className="mt-6 flex items-center gap-3 border-t border-border pt-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 font-mono text-xs font-bold text-accent">
          {initials(testimonial.name)}
        </span>
        <div className="min-w-0">
          <cite className="block truncate text-sm font-semibold not-italic text-foreground">
            {testimonial.name}
          </cite>
          <p className="truncate text-xs text-faint">{testimonial.role}</p>
        </div>
      </footer>
    </article>
  );
}

