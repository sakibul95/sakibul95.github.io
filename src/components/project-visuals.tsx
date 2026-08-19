import { cn } from "@/lib/utils";

type VisualProps = { id: string; className?: string };

/* These thumbnails are drawn, not photographed, so they have to be repainted
   for each theme like any other surface. Two mechanisms carry that:

     · opaque surfaces and the accent use the `.viz-*` classes from
       globals.css, because `var()` is not valid inside an SVG presentation
       attribute — only inside a CSS declaration.
     · translucent ink (every former `rgba(255,255,255,α)`) uses
       `currentColor` with a fill/stroke-opacity attribute, so it inverts with
       `text-foreground` on the root <svg> and needs no CSS of its own.

   A CSS class always beats a presentation attribute, so where an element needs
   a conditional accent the class is toggled and the attribute stays as the
   fallback for the non-accent case. */
function Frame({
  id,
  className,
  children,
}: VisualProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 640 400"
      className={cn("text-foreground", className)}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="640" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" className="viz-stop-from" />
          <stop offset="100%" className="viz-stop-to" />
        </linearGradient>
        <radialGradient id={`glow-${id}`} cx="80%" cy="10%" r="70%">
          <stop offset="0%" className="viz-stop-accent" stopOpacity="0.16" />
          <stop offset="100%" className="viz-stop-accent" stopOpacity="0" />
        </radialGradient>
        <pattern id={`dots-${id}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" fillOpacity="0.07" />
        </pattern>
      </defs>
      <rect width="640" height="400" fill={`url(#bg-${id})`} />
      <rect width="640" height="400" fill={`url(#dots-${id})`} />
      <rect width="640" height="400" fill={`url(#glow-${id})`} />
      {children}
    </svg>
  );
}

export function BillingVisual({ id, className }: VisualProps) {
  return (
    <Frame id={id} className={className}>
      <defs>
        <linearGradient id={`doc-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" className="viz-stop-panel" />
          <stop offset="100%" className="viz-stop-from" />
        </linearGradient>
      </defs>
      <g transform="translate(190,60)">
        <rect width="200" height="260" rx="14" fill={`url(#doc-${id})`} stroke="currentColor" strokeOpacity="0.1" />
        <rect x="24" y="34" width="120" height="10" rx="5" className="viz-accent-fill" opacity="0.85" />
        <rect x="24" y="58" width="152" height="6" rx="3" fill="currentColor" fillOpacity="0.14" />
        <rect x="24" y="74" width="152" height="6" rx="3" fill="currentColor" fillOpacity="0.14" />
        <rect x="24" y="90" width="100" height="6" rx="3" fill="currentColor" fillOpacity="0.14" />
        <line x1="24" y1="118" x2="176" y2="118" stroke="currentColor" strokeOpacity="0.1" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(24, ${140 + i * 24})`}>
            <rect width="110" height="6" rx="3" fill="currentColor" fillOpacity="0.1" />
            <rect x="120" width="32" height="6" rx="3" fill="currentColor" fillOpacity="0.18" />
          </g>
        ))}
        <circle cx="100" cy="240" r="16" fill="none" className="viz-accent-stroke" strokeWidth="2.5" />
        <path d="M92 240l6 6 12-13" fill="none" className="viz-accent-stroke" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(420,190)" opacity="0.9">
        {[26, 44, 34, 58, 42].map((h, i) => (
          <rect
            key={i}
            x={i * 18}
            y={70 - h}
            width="10"
            height={h}
            rx="2"
            className={i === 4 ? "viz-accent-fill" : undefined}
            fill="currentColor"
            fillOpacity={i === 4 ? 1 : 0.16}
          />
        ))}
      </g>
    </Frame>
  );
}

export function EnergyVisual({ id, className }: VisualProps) {
  return (
    <Frame id={id} className={className}>
      <g transform="translate(150,70)" opacity="0.95">
        <circle cx="60" cy="30" r="22" fill="none" className="viz-accent-stroke" strokeWidth="2" opacity="0.7" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x1 = 60 + Math.cos(angle) * 30;
          const y1 = 30 + Math.sin(angle) * 30;
          const x2 = 60 + Math.cos(angle) * 40;
          const y2 = 30 + Math.sin(angle) * 40;
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="viz-accent-stroke" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          );
        })}
        <g transform="translate(0,90)">
          {[0, 1, 2].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={col * 32}
                y={row * 22}
                width="26"
                height="16"
                rx="2"
                className="viz-panel viz-accent-stroke"
                strokeOpacity="0.4"
              />
            )),
          )}
        </g>
      </g>
      <g transform="translate(70,260)" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2" fill="none">
        <line x1="0" y1="60" x2="60" y2="0" />
        <line x1="60" y1="0" x2="120" y2="60" />
        <line x1="30" y1="30" x2="90" y2="30" />
        <circle cx="60" cy="0" r="4" className="viz-accent-fill" stroke="none" />
      </g>
      <path
        d="M370 300 C 420 260, 440 320, 480 270 S 540 240, 570 280"
        fill="none"
        className="viz-accent-stroke"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <g className="viz-accent-fill" opacity="0.8">
        <circle cx="480" cy="270" r="3.5" />
        <circle cx="570" cy="280" r="3.5" />
      </g>
    </Frame>
  );
}

export function NetworkVisual({ id, className }: VisualProps) {
  const nodes = [
    [120, 260],
    [190, 190],
    [260, 250],
    [330, 160],
    [400, 220],
    [470, 150],
    [510, 240],
  ];
  return (
    <Frame id={id} className={className}>
      <g transform="translate(300,70)">
        <line x1="0" y1="0" x2="0" y2="70" stroke="currentColor" strokeOpacity="0.2" strokeWidth="3" />
        <path d="M0 0l-14 22h28z" className="viz-accent-fill" />
        {[18, 30, 42].map((r, i) => (
          <path
            key={i}
            d={`M ${-r} 10 A ${r} ${r} 0 0 1 ${r} 10`}
            fill="none"
            className="viz-accent-stroke"
            strokeWidth="2"
            opacity={0.55 - i * 0.15}
          />
        ))}
      </g>
      <g stroke="currentColor" strokeOpacity="0.16" strokeWidth="1.5">
        {nodes.map(([x, y], i) =>
          i < nodes.length - 1 ? (
            <line key={i} x1={x} y1={y} x2={nodes[i + 1][0]} y2={nodes[i + 1][1]} />
          ) : null,
        )}
        <line x1="300" y1="140" x2="330" y2="160" />
      </g>
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 2 === 0 ? 6 : 5} className="viz-base viz-accent-stroke" strokeWidth="2" />
      ))}
    </Frame>
  );
}

export function CommerceVisual({ id, className }: VisualProps) {
  return (
    <Frame id={id} className={className}>
      <g transform="translate(90,60)">
        <rect width="140" height="270" rx="22" className="viz-panel" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2" />
        <rect x="16" y="24" width="108" height="180" rx="8" className="viz-deep" />
        <circle cx="70" cy="234" r="14" fill="none" className="viz-accent-stroke" strokeWidth="2" />
        <rect x="34" y="50" width="80" height="10" rx="5" className="viz-accent-fill" opacity="0.8" />
        <rect x="34" y="72" width="80" height="46" rx="6" fill="currentColor" fillOpacity="0.08" />
        <rect x="34" y="128" width="52" height="8" rx="4" fill="currentColor" fillOpacity="0.14" />
        <rect x="34" y="146" width="80" height="8" rx="4" fill="currentColor" fillOpacity="0.1" />
      </g>
      <g transform="translate(330,150) rotate(-8)">
        <rect width="170" height="106" rx="14" className="viz-panel viz-accent-stroke" strokeOpacity="0.5" strokeWidth="2" />
        <rect y="26" width="170" height="18" className="viz-accent-fill" opacity="0.75" />
        <rect x="16" y="70" width="70" height="9" rx="4" fill="currentColor" fillOpacity="0.2" />
        <circle cx="146" cy="76" r="12" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
      </g>
      <g className="viz-accent-stroke" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.6">
        <line x1="230" y1="150" x2="330" y2="190" />
        <line x1="230" y1="200" x2="330" y2="220" />
      </g>
    </Frame>
  );
}

export function ErpVisual({ id, className }: VisualProps) {
  return (
    <Frame id={id} className={className}>
      <g transform="translate(90,90)">
        {[0, 1, 2].map((row) => (
          <g key={row} transform={`translate(0, ${row * 66})`}>
            {[0, 1, 2, 3].map((col) => {
              const highlighted = row === 1 && col === 2;
              return (
                <rect
                  key={col}
                  x={col * 46}
                  width="38"
                  height="50"
                  rx="4"
                  className={cn("viz-panel", highlighted && "viz-accent-stroke")}
                  stroke="currentColor"
                  strokeOpacity={highlighted ? 1 : 0.14}
                  strokeWidth={highlighted ? 2 : 1.5}
                />
              );
            })}
          </g>
        ))}
      </g>
      <g transform="translate(400,80)">
        <rect width="160" height="220" rx="12" className="viz-base" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2" />
        <rect x="18" y="22" width="90" height="9" rx="4" className="viz-accent-fill" opacity="0.85" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(18, ${50 + i * 28})`}>
            <circle cx="5" cy="5" r="5" fill="none" className="viz-accent-stroke" strokeWidth="1.5" opacity="0.8" />
            <path d="M2 5l2 2 4-4" className="viz-accent-stroke" strokeWidth="1.5" fill="none" opacity="0.8" />
            <rect x="20" width="104" height="7" rx="3.5" fill="currentColor" fillOpacity="0.12" />
          </g>
        ))}
      </g>
    </Frame>
  );
}

export const projectVisuals = {
  billing: BillingVisual,
  energy: EnergyVisual,
  network: NetworkVisual,
  commerce: CommerceVisual,
  erp: ErpVisual,
} as const;

export type ProjectVisualKey = keyof typeof projectVisuals;
