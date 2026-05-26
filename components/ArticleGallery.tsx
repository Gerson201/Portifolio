"use client";

import { useState } from "react";
import { Article } from "@/lib/articles";

export default function ArticleGallery({ items }: { items: Article[] }) {
  const [open, setOpen] = useState<Article | null>(null);

  return (
    <div>
      <div
        className="grid gap-6 grid-cols-1"
        onContextMenu={(event) => event.preventDefault()}
      >
        {items.map((item) => (
          <button
            key={item.slug}
            onClick={() => setOpen(item)}
            className="card overflow-hidden text-left transition hover:-translate-y-1"
          >
            <div className="border-b border-border">
              <img
                src={item.cover}
                alt={item.title}
                className="h-56 w-full select-none object-cover object-top"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-fg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                Abrir para leitura completa.
              </p>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setOpen(null)}
        >
          <div
            className="card max-h-[90vh] w-full max-w-4xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <h4 className="font-display text-lg font-semibold text-fg">
                {open.title}
              </h4>
              <button
                onClick={() => setOpen(null)}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted hover:border-accent"
              >
                Fechar
              </button>
            </div>
            <div className="max-h-[calc(90vh-64px)] overflow-y-auto p-4">
              <div
                className="space-y-4"
                onContextMenu={(event) => event.preventDefault()}
              >
                {open.pages.map((page) => (
                  <img
                    key={page}
                    src={page}
                    alt={`${open.title} página`}
                    className="w-full select-none rounded-xl border border-border"
                    draggable={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
