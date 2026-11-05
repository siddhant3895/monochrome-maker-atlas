import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site";
import { site } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact", "Find Siddhant on GitHub."),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        n="—"
        label="Contact"
        title="Say hello."
        intro="This is where you will find me most of the time."
      />
      <section className="container-page mt-14 border-t border-hairline">
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between border-b border-hairline py-8"
        >
          <div>
            <p className="label-mono">GitHub</p>
            <p className="display mt-2 text-4xl md:text-6xl">@{site.githubHandle}</p>
          </div>
          <ArrowUpRight
            size={36}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
        <div className="flex items-center justify-between border-b border-hairline py-8">
          <div>
            <p className="label-mono">Email</p>
            {site.email ? (
              <a href={`mailto:${site.email}`} className="display mt-2 block text-4xl md:text-6xl">
                {site.email}
              </a>
            ) : (
              <p className="mt-2 text-2xl text-muted-foreground">Email address to be added.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
