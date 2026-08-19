import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="font-mono text-[13px] font-medium uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted">
        The link may be broken, or the page may have moved. Either way, there&apos;s
        plenty more to see on the homepage.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center rounded-full bg-accent px-7 text-[15px] font-semibold text-on-accent transition-colors hover:bg-accent-strong"
      >
        Back to homepage
      </Link>
    </section>
  );
}
