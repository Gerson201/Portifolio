"use client";

type ResumeCardProps = {
  title: string;
  file: string;
};

export default function ResumeCard({ title, file }: ResumeCardProps) {
  return (
    <div className="card mb-8 p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted">
            Documento oficial
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold text-fg">
            {title}
          </h3>
        </div>
        <a
          href={file}
          download
          className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-xs font-semibold text-fg transition hover:border-accent"
        >
          Baixar currículo
        </a>
      </div>
    </div>
  );
}
