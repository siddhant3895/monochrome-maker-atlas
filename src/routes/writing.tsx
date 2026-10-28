import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site";
import { notes } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/writing")({
  head: () => seo("Writing", "Technical notes in progress — drafts and upcoming pieces."),
  component: Writing,
});

function Writing() {
  return (
    <>
      <PageHeader n="—" label="Writing" title="Notes, in draft." intro="Nothing here is published yet. These are working titles." />
      <section className="container-page mt-14">
        <ul className="border-t border-hairline">
          {notes.map((n, i) => (
            <li key={n.title} className="grid gap-3 border-b border-hairline py-7 md:grid-cols-12 md:items-baseline">
              <span className="label-mono md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <div className="md:col-span-7">
                <h2 className="text-2xl tracking-tight">{n.title}</h2>
                <p className="mt-1 text-muted-foreground">{n.blurb}</p>
              </div>
              <span className="label-mono md:col-span-2">{n.topic}</span>
              <span className="label-mono md:col-span-2 md:text-right">{n.status}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
