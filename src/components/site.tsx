import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Home, LockKeyhole, Menu, X } from "lucide-react";
import { nav, site, type Project } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/90 backdrop-blur-sm">
      <div className="container-page flex h-14 items-center justify-between">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          onClick={() => setOpen(false)}
        >
          <Home size={13} aria-hidden />
          Home
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-6 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden -mr-2 p-2"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="md:hidden border-t border-hairline bg-background"
        >
          <ul className="container-page py-4">
            {nav.map((n, i) => (
              <li key={n.to} className="border-b border-hairline last:border-0">
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-3 text-2xl tracking-tight"
                >
                  <span className="label-mono">{String(i + 1).padStart(2, "0")}</span>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-hairline">
      <div className="container-page grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="display text-4xl md:text-6xl">
            Let's build something useful.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm link-underline"
          >
            Get in touch <ArrowUpRight size={14} />
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm md:col-span-4 md:col-start-9">
          {nav.map((n) => (
            <li key={n.to}>
              <Link to={n.to} className="text-muted-foreground hover:text-foreground">
                {n.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
      <div className="container-page flex justify-between border-t border-hairline py-5 label-mono">
        <span>{"\n"}</span>
        <span>{"\n"}</span>
      </div>
    </footer>
  );
}

export function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 border-t border-hairline pt-4 label-mono">
      <span className="text-foreground">{n}</span>
      <span>{children}</span>
    </div>
  );
}

export function PageHeader({
  n,
  label,
  title,
  intro,
}: {
  n: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="container-page pt-16 md:pt-24">
      <SectionLabel n={n}>{label}</SectionLabel>
      <h1 className="display mt-10 max-w-5xl text-5xl md:text-8xl animate-rise">{title}</h1>
      {intro && <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
    </section>
  );
}

export function StatusTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wider">
      <span className="h-1.5 w-1.5 rounded-full bg-foreground" aria-hidden />
      {children}
    </span>
  );
}

export function ProjectCard({
  p,
  index,
  aspect = "aspect-[4/3]",
  priority,
}: {
  p: Project;
  index: number;
  aspect?: string;
  priority?: boolean;
}) {
  return (
    <Link to="/work/$slug" params={{ slug: p.slug }} className="group block">
      <div className={`img-zoom ${aspect} border border-hairline bg-muted`}>
        {p.image ? (
          <img
            src={p.image}
            alt={p.imageAlt}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground">
            {p.visibility === "Private" && <LockKeyhole size={24} aria-hidden />}
            <span className="label-mono">
              {p.visibility === "Private"
                ? "Private project · Ongoing"
                : "Project image to be added"}
            </span>
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1 basis-40">
          <p className="label-mono">
            {String(index + 1).padStart(2, "0")}
            {p.year ? ` · ${p.year}` : ""}
          </p>
          <h3 className="mt-1 break-words text-xl tracking-tight">{p.title}</h3>
          <p className="mt-1 max-w-md text-sm text-muted-foreground">{p.summary}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <StatusTag>{p.status}</StatusTag>
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}
