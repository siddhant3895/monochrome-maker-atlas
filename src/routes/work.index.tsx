import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageHeader, ProjectCard } from "@/components/site";
import { projects, type Category } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/work/")({
  head: () =>
    seo("Work", "Projects across open source, research, security, AI experiments and web."),
  component: Work,
});

const cats: ("All" | Category)[] = [
  "All",
  "Open source",
  "Research",
  "Web",
  "Security",
  "AI",
  "Games",
];

function Work() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (cat === "All" || p.categories.includes(cat)) &&
        (!s || [p.title, p.summary, p.status, ...p.stack].join(" ").toLowerCase().includes(s)),
    );
  }, [q, cat]);

  return (
    <>
      <PageHeader
        n="—"
        label="Work"
        title="Projects & experiments."
        intro="Status labels are honest: collaborative, concept, experiment or in progress."
      />
      <section className="container-page mt-14">
        <div className="flex flex-col gap-4 border-y border-hairline py-4 md:flex-row md:items-center md:justify-between">
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-3 py-1 text-sm transition-colors ${cat === c ? "border-foreground bg-foreground text-background" : "border-hairline hover:border-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="relative block md:w-72">
            <span className="sr-only">Search projects</span>
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects"
              className="h-9 w-full rounded-md border border-hairline bg-card pl-9 pr-3 text-sm outline-none focus:border-foreground"
            />
          </label>
        </div>
        <p className="mt-4 label-mono" aria-live="polite">
          {list.length} {list.length === 1 ? "project" : "projects"}
        </p>
        {list.length === 0 ? (
          <div className="mt-10 border border-dashed border-hairline p-16 text-center text-muted-foreground">
            No projects match.{" "}
            <button
              className="underline"
              onClick={() => {
                setQ("");
                setCat("All");
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {list.map((p) => (
              <ProjectCard key={p.slug} p={p} index={projects.indexOf(p)} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
