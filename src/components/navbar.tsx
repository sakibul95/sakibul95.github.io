"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { assetPath, siteConfig } from "@/lib/site";
import { CloseIcon, DownloadIcon, MenuIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const cvFileName =
  siteConfig.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-cv.pdf";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-md text-[15px] font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface-2 font-mono text-sm font-bold text-accent transition-colors group-hover:border-accent/60">
            {"</>"}
          </span>
          <span className="whitespace-nowrap">{siteConfig.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle className="ml-2" />
          <a
            href="#contact"
            className="ml-2 inline-flex h-9 items-center rounded-full border border-accent/40 bg-accent/10 px-4 text-sm font-semibold text-accent transition-colors duration-200 hover:border-accent/70 hover:bg-accent hover:text-on-accent"
          >
            Get in touch
          </a>
          <a
            href={assetPath("/cv.pdf")}
            download={cvFileName}
            className="ml-2 inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent/50 hover:text-accent"
          >
            <DownloadIcon className="h-4 w-4" />
            CV
          </a>
        </div>

        <div className="flex items-center gap-1.5 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-surface-2"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-b border-border bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out md:hidden",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-11 items-center justify-center rounded-full border border-accent/40 bg-accent/10 px-4 text-sm font-semibold text-accent"
          >
            Get in touch
          </a>
          <a
            href={assetPath("/cv.pdf")}
            download={cvFileName}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-surface px-4 text-sm font-semibold text-foreground"
          >
            <DownloadIcon className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
