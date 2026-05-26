"use client";

import { Certificate } from "@/lib/certificates";

export default function CertificateGallery({
  items,
}: {
  items: Certificate[];
}) {
  return (
    <div
      className="grid gap-6 grid-cols-1"
      onContextMenu={(event) => event.preventDefault()}
    >
      {items.map((item) => (
        <div
          key={item.image}
          className="relative overflow-hidden rounded-2xl border border-border bg-card"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-auto w-full select-none object-cover"
            draggable={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-black/10" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/70">
              Certificado protegido
            </span>
          </div>
          <div className="border-t border-border px-4 py-3 text-sm text-muted">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}
