import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel, StatusTag } from "@/components/site";
import { research } from "@/content/site";
import { images } from "@/content/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/research")({
  head: () =>
    seo(
      "Research",
      "A MATLAB computational investigation into mechanical resonance inspired by Tesla's oscillator.",
    ),
  component: Research,
});

function Research() {
  return (
    <>
      <section className="container-page pt-16 md:pt-24">
        <SectionLabel n="—">Research</SectionLabel>
        <div className="mt-10 flex flex-wrap gap-3">
          <StatusTag>{research.status}</StatusTag>
          <span className="label-mono self-center">{research.kind}</span>
        </div>
        <h1
          className="display mt-8 max-w-6xl text-4xl md:text-7xl animate-rise"
          style={{ lineHeight: 1.02 }}
        >
          {research.title}
        </h1>
      </section>
      <section className="container-page mt-14">
        <figure className="img-zoom aspect-[21/9] border border-hairline bg-paper">
          <img
            src={images.resonanceCurve}
            alt="Resonance curve from the study: amplitude in metres against driving frequency in radians per second, peaking at 20 rad/s"
            className="h-full w-full object-contain"
          />
        </figure>
        <figcaption className="mt-3 label-mono">
          Figure from the study — resonance curve at 10 Ns/m damping.
        </figcaption>

      </section>
      <section className="container-page mt-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionLabel n="01">Abstract</SectionLabel>
          <p className="mt-6 text-xl leading-relaxed">{research.abstract}</p>
          <div className="mt-14">
            <SectionLabel n="02">Findings</SectionLabel>
            <p className="mt-6 text-muted-foreground">
              {research.findings} The full analysis and figures are in the published paper.
            </p>

          </div>
        </div>
        <aside className="space-y-8 md:col-span-4 md:col-start-9">
          <div>
            <p className="label-mono">Methods</p>
            <ul className="mt-3 space-y-1">
              {research.methods.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-mono">Paper</p>
            <a
              href={research.paperUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 link-underline"
            >
              Read paper <ArrowUpRight size={13} />
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              {research.published} · {research.license}
            </p>
            <p className="text-sm text-muted-foreground">
              <a
                href={`https://doi.org/${research.doi}`}
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                doi:{research.doi}
              </a>
            </p>

          </div>
          <Link
            to="/work/$slug"
            params={{ slug: "tesla-oscillator" }}
            className="inline-flex items-center gap-1 link-underline"
          >
            Project case study <ArrowUpRight size={13} />
          </Link>
        </aside>
      </section>
      <section className="container-page mt-20 pb-24">
        <SectionLabel n="03">Figures</SectionLabel>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {research.figures.map((f) => (
            <figure key={f.src}>
              <div className="img-zoom aspect-[4/3] border border-hairline bg-paper">
                <img
                  src={f.src}
                  alt={f.caption}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 label-mono">{f.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>

  );
}
