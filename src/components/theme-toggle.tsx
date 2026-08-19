"use client";

import { useEffect, useLayoutEffect } from "react";
import { cn } from "@/lib/utils";
import { THEME_STORAGE_KEY, themeColors, type Theme } from "@/lib/theme";
import { MoonIcon, SunIcon } from "@/components/icons";

/* `useLayoutEffect` warns when React renders it on the server, and this page is
   prerendered at build time. `useEffect` is likewise never reached during SSR,
   so switching on the environment keeps the build log clean while still running
   before paint in the browser, which is the whole point here. */
const useBeforePaint = typeof window === "undefined" ? useEffect : useLayoutEffect;

/* The theme in effect right now — an explicit pin if there is one, otherwise
   the dark default. Read from the DOM rather than from React state because the
   inline <head> script, not React, is the source of truth. */
function activeTheme(): Theme {
  const pinned = document.documentElement.dataset.theme;
  if (pinned === "light" || pinned === "dark") return pinned;
  return "dark";
}

function readStored(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

/* Repoint the `theme-color` tag so the mobile address bar tracks the page. The
   tag is emitted with the dark default baked in, which is correct until someone
   pins light — a static tag cannot express a choice made at runtime. */
function syncBrowserChrome(theme: Theme) {
  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((tag) => {
      tag.content = themeColors[theme];
    });
}

export function ThemeToggle({ className }: { className?: string }) {
  useBeforePaint(() => {
    const stored = readStored();
    if (!stored) return;
    /* Re-applied because React's dev-only Strict Mode remount strips the
       attributes it doesn't own from <html>, including the one the inline
       script set. A no-op in production. */
    document.documentElement.setAttribute("data-theme", stored);
    syncBrowserChrome(stored);
  }, []);

  function toggle() {
    const next: Theme = activeTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* Private browsing or blocked storage: the theme still switches for
         this page view, it just won't be remembered. */
    }
    syncBrowserChrome(next);
  }

  /* Both states are always rendered and CSS hides the inapplicable one, so the
     server never has to guess which is correct. The accessible name stays
     constant for the same reason — a name that flipped with the theme would be
     wrong in the HTML for as long as it took React to hydrate. */
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent",
        className,
      )}
    >
      <span className="theme-when-dark">
        <SunIcon className="h-[18px] w-[18px]" />
      </span>
      <span className="theme-when-light">
        <MoonIcon className="h-[18px] w-[18px]" />
      </span>
    </button>
  );
}
