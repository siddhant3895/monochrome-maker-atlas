import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { PageHeader } from "@/components/site";
import { artworks } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/visual-lab")({
  head: () => seo("Visual Lab", "Ink, creature illustration and manga-inspired studies. Currently showing sample placeholders."),
  component: VisualLab,
});

function VisualLab() {
  const [open, setOpen] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => {
    setOpen((o) => { if (o !== null) setTimeout(() => triggers.current[o]?.focus()); return null; });
  }, []);
  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + artworks.length) % artworks.length)), []);

  useEffect(() => {
    if (open === null) return;
    closeBtn.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, close, step]);

  const art = open !== null ? artworks[open] : null;
  return (
    <>
      <PageHeader n="—" label="Visual Lab" title="Ink, creatures & panels." intro="Detailed ink illustration and manga-inspired work. The images below are labelled sample placeholders until original pieces are uploaded." />
      <section className="container-page mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {artworks.map((a, i) => (
          <button
            key={a.id}
            ref={(el) => { triggers.current[i] = el; }}
            onClick={() => setOpen(i)}
            className="group mb-4 block w-full break-inside-avoid text-left"
            aria-label={`Open ${a.title}`}
          >
            <div className="img-zoom border border-hairline bg-card">
              <img src={a.src} alt={a.alt} loading="lazy" className="w-full" />
            </div>
            <div className="mt-2 flex justify-between label-mono"><span className="text-foreground">{a.title}</span><span>{a.medium}</span></div>
          </button>
        ))}
      </section>
      {art && (
        <div role="dialog" aria-modal="true" aria-label={art.title} className="fixed inset-0 z-50 flex flex-col bg-ink/95 text-paper" onClick={close}>
          <div className="container-page flex h-14 items-center justify-between font-mono text-xs uppercase tracking-wider" onClick={(e) => e.stopPropagation()}>
            <span>{String(open! + 1).padStart(2, "0")} / {String(artworks.length).padStart(2, "0")} · {art.title}</span>
            <button ref={closeBtn} onClick={close} aria-label="Close" className="p-2"><X size={20} /></button>
          </div>
          <div className="flex flex-1 items-center justify-center gap-4 px-4 pb-8" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => step(-1)} aria-label="Previous image" className="p-2 opacity-70 hover:opacity-100"><ArrowLeft /></button>
            <img src={art.src} alt={art.alt} className="max-h-[80vh] max-w-[80vw] object-contain" />
            <button onClick={() => step(1)} aria-label="Next image" className="p-2 opacity-70 hover:opacity-100"><ArrowRight /></button>
          </div>
        </div>
      )}
    </>
  );
}
