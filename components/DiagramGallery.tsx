"use client";

import { useMemo, useState } from "react";
import { PlantumlDiagram } from "@/lib/plantuml";
import { X, ZoomIn, ZoomOut } from "lucide-react";

export default function DiagramGallery({
  items,
}: {
  items: PlantumlDiagram[];
}) {
  const [open, setOpen] = useState<PlantumlDiagram | null>(null);
  const [scale, setScale] = useState(1);

  const imageSrc = useMemo(() => open?.image ?? "", [open]);

  const close = () => {
    setOpen(null);
    setScale(1);
  };

  return (
    <div>
      <div className="grid gap-6 grid-cols-1">
        {items.map((item) => (
          <button
            key={item.folder}
            onClick={() => setOpen(item)}
            className="card overflow-hidden text-left transition hover:-translate-y-1"
          >
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-fg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                Visualizar diagrama do projeto
              </p>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="card flex h-[85vh] w-full max-w-6xl overflow-hidden">
            <div className="relative flex-1 bg-black">
              {imageSrc ? (
                <div className="h-full w-full overflow-auto">
                  <img
                    src={imageSrc}
                    alt={open.title}
                    className="select-none"
                    draggable={false}
                    style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
                  />
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-white/70">
                  Diagrama não renderizado. Salve uma versão SVG/PNG do PlantUML
                  na mesma pasta para visualização.
                </div>
              )}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-2">
                <button
                  onClick={() => setScale((prev) => Math.max(0.5, prev - 0.1))}
                  className="text-white/80 hover:text-white"
                  aria-label="Diminuir zoom"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <span className="text-xs text-white/70">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  onClick={() => setScale((prev) => Math.min(2.5, prev + 0.1))}
                  className="text-white/80 hover:text-white"
                  aria-label="Aumentar zoom"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="w-[320px] border-l border-border bg-base p-4 sm:w-[360px]">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-display text-lg font-semibold text-fg">
                    {open.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted">
                    PlantUML do projeto
                  </p>
                </div>
                <button
                  onClick={close}
                  className="rounded-full border border-border p-2 text-muted hover:border-accent"
                  aria-label="Fechar"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 text-sm text-muted">
                {open.image ? (
                  "Use o zoom para visualizar detalhes do diagrama."
                ) : (
                  <>
                    Para visualizar, exporte o `.puml` para `.svg` ou `.png` na
                    mesma pasta.
                  </>
                )}
              </div>
              <a
                href={open.source}
                className="mt-6 inline-flex items-center rounded-full border border-border px-4 py-2 text-xs font-semibold text-fg transition hover:border-accent"
                download
              >
                Baixar arquivo PlantUML
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
