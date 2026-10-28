import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { ProjectCard, SectionLabel, StatusTag } from "@/components/site";
import { artworks, now, projects, research, site } from "@/content/site";
import { images } from "@/content/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Student developer", site.tagline),
  component: Home,
});

function Home() {
  const [a, b, c, d] = projects;
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-14 md:pt-24">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="label-mono md:col-span-3">Portfolio · Draft v1</p>
          <h1 className="display text-[clamp(3.2rem,10vw,9.5rem)] md:col-span-9 animate-rise">
            {site.name} builds,<br />studies & draws.
          </h1>
        </div>
        <div className="mt-12 grid gap-8 border-t border-hairline pt-6 md:grid-cols-12">
          <p className="max-w-xl text-lg md:col-span-6 md:col-start-4">{site.tagline}</p>
          <div className="flex gap-3 md:col-span-3 md:justify-end">
            <Link to="/work" className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm text-primary-foreground transition-opacity hover:opacity-85">
              View work <ArrowRight size={14} />
            </Link>
            <a href={site.github} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-md border border-hairline px-4 text-sm transition-colors hover:bg-accent">
              GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <figure className="img-zoom mt-12 aspect-[16/9] border border-hairline bg-ink md:aspect-[21/9]">
          <img src={images.hero} alt="Long-exposure pendulum light trails (placeholder image)" width={1600} height={1008} className="h-full w-full object-cover" />
        </figure>
      </section>

      {/* Bio */}
      <section className="container-page mt-28">
        <SectionLabel n="01">About</SectionLabel>
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <p className="display text-3xl md:col-span-8 md:text-5xl" style={{ lineHeight: 1.08 }}>
            I learn by building — across web software, open-source collaboration, MATLAB simulation, reverse engineering, and ink illustration.
          </p>
          <div className="md:col-span-3 md:col-start-10">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm link-underline">More about me <ArrowUpRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="container-page mt-28">
        <div className="flex items-end justify-between">
          <SectionLabel n="02">Selected work</SectionLabel>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-16 md:grid-cols-12">
          <div className="md:col-span-7"><ProjectCard p={a} index={0} aspect="aspect-[4/3]" /></div>
          <div className="md:col-span-5 md:mt-32"><ProjectCard p={b} index={1} aspect="aspect-square" /></div>
          <div className="md:col-span-5"><ProjectCard p={c} index={2} aspect="aspect-[4/5]" /></div>
          <div className="md:col-span-6 md:col-start-7 md:mt-24"><ProjectCard p={d} index={3} /></div>
        </div>
        <Link to="/work" className="mt-16 flex items-center justify-between border-y border-hairline py-6 text-2xl tracking-tight transition-colors hover:bg-accent md:px-2">
          All projects <ArrowRight />
        </Link>
      </section>

      {/* Research */}
      <section className="mt-28 bg-ink text-paper">
        <div className="container-page grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-wider opacity-60">03 · Research</p>
            <h2 className="display mt-8 text-3xl md:text-5xl" style={{ lineHeight: 1.05 }}>{research.title}</h2>
            <p className="mt-6 max-w-md opacity-70">{research.kind}. {research.status}.</p>
            <Link to="/research" className="mt-8 inline-flex items-center gap-2 text-sm link-underline">Read about the study <ArrowUpRight size={14} /></Link>
          </div>
          <div className="img-zoom aspect-square md:col-span-6 md:col-start-7">
            <img src={images.oscillator} alt="Mechanical spring detail (placeholder image)" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Open source */}
      <section className="container-page mt-28">
        <SectionLabel n="04">Open source</SectionLabel>
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="img-zoom aspect-[4/3] border border-hairline md:col-span-7">
            <img src={images.map} alt="Dotted world map (placeholder image)" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="md:col-span-4 md:col-start-9 md:self-end">
            <StatusTag>Collaborative</StatusTag>
            <h3 className="mt-4 text-3xl tracking-tight">Contributing to WIDSP</h3>
            <p className="mt-4 text-muted-foreground">Frontend contributions to a team-built infectious-disease surveillance platform — filters, map UI and refinements. Shared work, credited as such.</p>
            <Link to="/work/$slug" params={{ slug: "widsp" }} className="mt-6 inline-flex items-center gap-2 text-sm link-underline">Case study <ArrowUpRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Visual art */}
      <section className="container-page mt-28">
        <div className="flex items-center justify-between">
          <SectionLabel n="05">Visual lab</SectionLabel>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {artworks.slice(0, 4).map((art, i) => (
            <Link key={art.id} to="/visual-lab" className={`img-zoom border border-hairline bg-card ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
              <img src={art.src} alt={art.alt} loading="lazy" className="h-full w-full object-cover" />
            </Link>
          ))}
        </div>
        <p className="mt-4 label-mono">Sample placeholders — original ink & manga-inspired work coming soon.</p>
      </section>

      {/* Now */}
      <section className="container-page mt-28">
        <SectionLabel n="06">Current focus</SectionLabel>
        <ol className="mt-10 divide-y divide-hairline border-b border-hairline">
          {now.focus.map((f, i) => (
            <li key={f} className="grid grid-cols-12 gap-4 py-5">
              <span className="col-span-2 label-mono md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <span className="col-span-10 text-lg md:col-span-11">{f}</span>
            </li>
          ))}
        </ol>
        <Link to="/now" className="mt-6 inline-flex items-center gap-2 text-sm link-underline">What I'm doing now <ArrowUpRight size={14} /></Link>
      </section>
    </>
  );
}
