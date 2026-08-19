import Image from "next/image";
import { siteConfig } from "@/lib/site";
import portrait from "@/images/profile/portrait.jpeg";

/* Shared metric cards that float around the hero visual. They carry the
   engineering signal without inventing console output. */
function MetricCard({
  label,
  value,
  accent,
  className,
}: {
  label: string;
  value: string;
  accent?: boolean;
  className: string;
}) {
  return (
    <div
      className={`absolute hidden rounded-xl border border-border bg-surface-2 px-4 py-3 shadow-xl sm:block ${className}`}
    >
      <p className="font-mono text-[11px] uppercase tracking-widest text-faint">
        {label}
      </p>
      <p
        className={`mt-0.5 text-lg font-bold ${accent ? "text-accent" : "text-foreground"}`}
      >
        {value}
      </p>
    </div>
  );
}

function PortraitCard({ priority = true }: { priority?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
      <Image
        src={portrait}
        alt={`Portrait of ${siteConfig.name}`}
        priority={priority}
        sizes="(min-width: 640px) 448px, 100vw"
        className="aspect-[4/5] w-full object-cover object-top"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/5 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

const terminalLines = [
  { prompt: "$", text: "dotnet run --project Api", muted: false },
  { prompt: "▲", text: "Now listening on: https://localhost:5001", muted: true },
  { prompt: "✓", text: "Connected to SQL Server · Redis cache warm", muted: true },
  { prompt: "✓", text: "POST /api/billing/reconcile 200 — 41ms", muted: true },
  { prompt: "◎", text: "Ticketing System throughput +36%", muted: false, accent: true },
];

function TerminalCard({ lines = terminalLines }: { lines?: typeof terminalLines }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-2xl backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-3 font-mono text-xs text-faint">
          sakib@dev — ~/portfolio
        </span>
      </div>
      <div className="space-y-2.5 px-5 py-6 font-mono text-[13px] leading-relaxed sm:px-6 sm:text-sm">
        {lines.map((line, i) => (
          <p key={i} className="flex gap-2.5">
            <span className={line.accent ? "text-accent" : "shrink-0 text-faint"}>
              {line.prompt}
            </span>
            <span className={line.muted ? "text-faint" : "text-foreground/90"}>
              {line.text}
            </span>
          </p>
        ))}
        <p className="flex gap-2.5">
          <span className="text-accent">❯</span>
          <span
            className="inline-block h-4 w-2 animate-pulse bg-accent/80"
            aria-hidden="true"
          />
        </p>
      </div>
    </div>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="animate-fade-up relative mx-auto w-full max-w-md"
      style={{ animationDelay: "200ms" }}
    >
      {children}
    </div>
  );
}

/* ── Variant "portrait" ─────────────────────────────────────────────
   Large headshot as the hero visual, flanked by two floating metric
   cards. No invented console output. */
export function PortraitVisual() {
  return (
    <Shell>
      <PortraitCard />
      <MetricCard
        label="Experience"
        value="7.5+ yrs"
        accent
        className="-top-5 -right-3"
      />
      <MetricCard
        label="Legacy perf gain"
        value="+80%"
        className="-bottom-6 -left-3"
      />
    </Shell>
  );
}

/* ── Variant "overlap" ─────────────────────────────────────────────
   Headshot as the main visual with a condensed terminal card
   overlapping its lower edge. Keeps both the human and the
   engineering signal, at the cost of a busier, taller hero. */
export function OverlapVisual() {
  return (
    <div
      className="animate-fade-up relative mx-auto mb-16 w-full max-w-md sm:mb-20"
      style={{ animationDelay: "200ms" }}
    >
      <PortraitCard />
      <MetricCard
        label="Experience"
        value="7.5+ yrs"
        accent
        className="-top-5 -right-3"
      />
      <div className="absolute -bottom-14 left-0 w-[92%] sm:-bottom-16 sm:-left-6">
        <TerminalCard lines={terminalLines.slice(0, 3)} />
      </div>
    </div>
  );
}

/* ── Variants "avatar" and "none" ──────────────────────────────────
   The original terminal mock with two floating metric cards. */
export function TerminalVisual() {
  return (
    <div
      className="animate-fade-up relative mx-auto w-full max-w-lg"
      style={{ animationDelay: "200ms" }}
    >
      <TerminalCard />
      <MetricCard
        label="Experience"
        value="7.5+ yrs"
        accent
        className="-top-5 -right-3"
      />
      <MetricCard
        label="Legacy perf gain"
        value="+80%"
        className="-bottom-6 -left-3"
      />
    </div>
  );
}
