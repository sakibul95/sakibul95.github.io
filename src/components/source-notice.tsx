"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { CloseIcon, GitHubIcon, MailIcon } from "@/components/icons";

export function SourceNotice({ projectTitle }: { projectTitle: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent"
      >
        <GitHubIcon className="h-4 w-4" />
        Source
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="source-notice-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-5"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-sm rounded-2xl border border-border bg-surface p-6 shadow-2xl shadow-black/50">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              <CloseIcon className="h-4 w-4" />
            </button>

            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
              <GitHubIcon className="h-5 w-5" />
            </span>

            <h3 id="source-notice-title" className="mt-4 text-lg font-bold tracking-tight text-foreground">
              Private repository
            </h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
              <span className="font-medium text-foreground/90">{projectTitle}</span> is
              proprietary, client-owned software and its source isn&apos;t public. Please
              communicate with {siteConfig.name} for further information.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-5 text-[15px] font-semibold text-background transition-colors duration-200 hover:bg-accent-strong"
            >
              <MailIcon className="h-4 w-4" />
              {siteConfig.email}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
