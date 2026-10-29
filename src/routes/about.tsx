import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SectionLabel } from "@/components/site";
import { images } from "@/content/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About",
      "Student developer learning independently across software, open source, engineering, reverse engineering and illustration.",
    ),
  component: About,
});

const interests = [
  ["Software", "Building web interfaces and small tools to understand how systems fit together."],
  [
    "Open source",
    "Reading and contributing to shared codebases, and crediting collaborative work clearly.",
  ],
  ["Engineering", "Computational modelling — currently mechanical resonance in MATLAB."],
  ["Reverse engineering", "Taking things apart to learn how they work."],
  ["Illustration", "Detailed ink, creature design and manga-inspired drawing."],
];

function About() {
  return (
    <>
      <PageHeader
        n="—"
        label="About"
        title="Curious, precise, self-taught in progress."
        intro="I'm a student developer who learns mostly independently — by building, reading source code, and drawing."
      />
      <section className="container-page mt-16 grid gap-12 md:grid-cols-12">
        <div className="img-zoom aspect-[4/5] border border-hairline md:col-span-5">
          <img
            src={images.ink2}
            alt="Sample ink illustration (placeholder, not original artwork)"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <SectionLabel n="01">Interests</SectionLabel>
          <dl className="mt-6 divide-y divide-hairline">
            {interests.map(([k, v]) => (
              <div key={k} className="grid gap-2 py-5 md:grid-cols-3">
                <dt className="font-medium">{k}</dt>
                <dd className="text-muted-foreground md:col-span-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
