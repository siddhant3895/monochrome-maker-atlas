import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { ProjectCard, SectionLabel, StatusTag } from "@/components/site";
import { projects, site } from "@/content/site";
import { posts } from "@/content/blog";
import { ArticleEntry } from "@/components/blog";
import { images } from "@/content/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Student developer", site.tagline),
  component: Home,
});

function Home() {
  const projectLayouts = [
    "md:col-span-7",
    "md:col-span-5 md:mt-32",
    "md:col-span-5",
    "md:col-span-6 md:col-start-7 md:mt-24",
  ];
  const projectAspects = ["aspect-[4/3]", "aspect-square", "aspect-[4/5]", "aspect-[4/3]"];
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-14 md:pt-24">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="label-mono md:col-span-3">{"\n"}</p>
          <h1 className="display text-[clamp(3.2rem,10vw,9.5rem)] md:col-span-9 animate-rise">
            Building Code That Matters.
          </h1>
        </div>
        <div className="mt-12 grid gap-8 border-t border-hairline pt-6 md:grid-cols-12">
          <p className="max-w-xl text-lg md:col-span-6 md:col-start-4">{site.tagline}</p>
          <div className="flex gap-3 md:col-span-3 md:justify-end">
            <Link
              to="/work"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm text-primary-foreground transition-opacity hover:opacity-85"
            >
              View work
              <ArrowRight size={14} />
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-hairline px-4 text-sm transition-colors hover:bg-accent"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <section
          aria-label="GitHub profile"
          className="mt-12 border border-hairline bg-ink text-paper"
        >
          <div className="flex items-center justify-between border-b border-paper/15 px-5 py-3 md:px-8">
            <p className="font-mono text-[0.68rem] uppercase tracking-wider text-paper/60">
              github.com/siddhant3895
            </p>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-paper/60 transition-colors hover:text-paper"
            >
              View profile <ArrowUpRight size={12} />
            </a>
          </div>
          <div className="grid gap-8 px-5 py-8 md:grid-cols-12 md:px-8 md:py-10">
            <div className="flex items-start gap-5 md:col-span-7">
              <img
                src="https://avatars.githubusercontent.com/u/229514112?v=4"
                alt="GitHub avatar of siddhant3895"
                width={96}
                height={96}
                className="h-20 w-20 shrink-0 rounded-full border border-paper/25 grayscale md:h-24 md:w-24"
              />
              <div className="min-w-0">
                <p className="text-2xl tracking-tight md:text-3xl">siddhant3895</p>
                <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-wider text-paper/60">
                  @hallofcodes
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/75">
                  Student Developer &amp; Researcher | Specialize in Python &amp; MATLAB |
                  Building open-source data analytics &amp; security projects
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-3 gap-px self-end border border-paper/15 bg-paper/15 md:col-span-4 md:col-start-9">
              {[
                ["Repositories", "12"],
                ["Followers", "283"],
                ["Following", "237"],
              ].map(([label, value]) => (
                <div key={label} className="bg-ink px-4 py-4">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-wider text-paper/50">
                    {label}
                  </dt>
                  <dd className="mt-1 text-2xl tracking-tight">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </section>

      {/* Bio */}
      <section className="container-page mt-28">
        <SectionLabel n="01">About</SectionLabel>
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <p className="display text-3xl md:col-span-8 md:text-5xl" style={{ lineHeight: 1.08 }}>
            {
              "I lean towards making impact and making code that matters.\nThat's why i look forward working open scource."
            }
          </p>
          <div className="md:col-span-3 md:col-start-10">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm link-underline">
              More about myself
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="container-page mt-28">
        <div className="flex items-end justify-between">
          <SectionLabel n="02">Selected work</SectionLabel>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-16 md:grid-cols-12">
          {projects.slice(0, 4).map((p, i) => (
            <div key={p.slug} className={projectLayouts[i]}>
              <ProjectCard p={p} index={i} aspect={projectAspects[i] ?? "aspect-[4/3]"} />
            </div>
          ))}
        </div>
        <Link
          to="/work"
          className="mt-16 flex items-center justify-between border-y border-hairline py-6 text-2xl tracking-tight transition-colors hover:bg-accent md:px-2"
        >
          All projects <ArrowRight />
        </Link>
      </section>

      {/* Open source */}
      <section className="container-page mt-28">
        <SectionLabel n="03">Open source</SectionLabel>
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="img-zoom aspect-[4/3] border border-hairline md:col-span-7">
            <img
              src={images.wispHome}
              alt="The live WISP overview page: catalogue counts, latest official outbreak reports and navigation to the map"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:col-span-4 md:col-start-9 md:self-end">
            <StatusTag>Collaborative</StatusTag>
            <h3 className="mt-4 text-3xl tracking-tight">WIDSP</h3>
            <p className="mt-4 text-muted-foreground">
              {
                "Frontend contributions to a team-built infectious-disease surveillance platform —  which filters, map UI and refinements. Shared work, credited as such."
              }
            </p>
            <Link
              to="/work/$slug"
              params={{ slug: "widsp" }}
              className="mt-6 inline-flex items-center gap-2 text-sm link-underline"
            >
              {" look"}
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="container-page mt-28">
        <div className="flex items-center justify-between">
          <SectionLabel n="04">Blog</SectionLabel>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm link-underline">
            All articles <ArrowUpRight size={14} />
          </Link>
        </div>
        <ul className="mt-10 border-t border-hairline">
          {posts.map((post, i) => (
            <ArticleEntry key={post.slug} post={post} index={i} />
          ))}
        </ul>
      </section>
    </>
  );
}
