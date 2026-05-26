"use client";

import { useMemo, useState } from "react";
import { Activity } from "@/lib/activities";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ActivityGallery({ items }: { items: Activity[] }) {
  const [open, setOpen] = useState<Activity | null>(null);
  const [index, setIndex] = useState(0);

  const currentMedia = useMemo(() => {
    if (!open) return null;
    return open.media[index] || open.media[0];
  }, [open, index]);

  const openModal = (activity: Activity) => {
    setOpen(activity);
    setIndex(0);
  };

  const next = () => {
    if (!open) return;
    setIndex((prev) => (prev + 1) % open.media.length);
  };

  const prev = () => {
    if (!open) return;
    setIndex((prev) => (prev - 1 + open.media.length) % open.media.length);
  };

  return (
    <div>
      <div
        className="grid gap-6 grid-cols-1"
        onContextMenu={(event) => event.preventDefault()}
      >
        {items.map((item) => (
          <button
            key={item.slug}
            onClick={() => openModal(item)}
            className="card overflow-hidden text-left transition hover:-translate-y-1"
          >
            <div className="border-b border-border">
              <img
                src={item.cover}
                alt={item.title}
                className="h-56 w-full select-none object-cover object-center"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-fg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                Abrir galeria de imagens.
              </p>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div
            className="card flex h-[85vh] w-full max-w-5xl overflow-hidden"
            onContextMenu={(event) => event.preventDefault()}
          >
            <div className="relative flex-1 bg-black">
              {currentMedia?.type === "image" ? (
                <img
                  src={currentMedia.src}
                  alt={open.title}
                  className="h-full w-full select-none object-contain"
                  draggable={false}
                />
              ) : (
                <video
                  src={currentMedia?.src}
                  className="h-full w-full"
                  controls
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-black/5" />
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 text-white hover:bg-black/60"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 text-white hover:bg-black/60"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="w-[320px] border-l border-border bg-base p-4 sm:w-[360px]">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-display text-lg font-semibold text-fg">
                    {open.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted">
                    {index + 1} / {open.media.length}
                  </p>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  className="rounded-full border border-border p-2 text-muted hover:border-accent"
                  aria-label="Fechar"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 text-sm text-muted whitespace-pre-line">
                {open.description || "Descrição da atividade em breve."}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
