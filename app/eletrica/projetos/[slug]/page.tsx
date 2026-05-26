import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import Prose from "@/components/Prose";
import Badge from "@/components/Badge";

export async function generateStaticParams() {
  return getAllProjects()
    .filter((project) => project.area === "eletrica")
    .map((project) => ({ slug: project.slug }));
}

export default async function EletricaProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);
  if (!project || project.frontmatter.area !== "eletrica") return notFound();

  const { frontmatter, content } = project;

  return (
    <div className="container py-16">
      <div className="card p-8">
        {frontmatter.image && (
          <div className="mb-6 overflow-hidden rounded-2xl border border-border">
            <img
              src={frontmatter.image}
              alt={frontmatter.title}
              className="h-64 w-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          <Badge label={frontmatter.area.toUpperCase()} variant="area" />
          <Badge label={frontmatter.statusLabel} variant="status" />
          {frontmatter.stack.map((item) => (
            <Badge key={item} label={item} />
          ))}
        </div>
        <h1 className="mt-6 font-display text-3xl font-semibold text-fg">
          {frontmatter.title}
        </h1>
        <p className="mt-2 text-sm text-muted">{frontmatter.summary}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {frontmatter.repo && (
            <a
              href={frontmatter.repo}
              className="inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-semibold text-slate-950 transition hover:bg-accent-2"
            >
              Repositório
            </a>
          )}
          {frontmatter.demo && (
            <a
              href={frontmatter.demo}
              className="inline-flex items-center rounded-full border border-border px-5 py-2 text-xs font-semibold text-fg transition hover:border-accent"
            >
              Demonstração
            </a>
          )}
        </div>

        {frontmatter.status === "private-core" && (
          <div className="mt-6 rounded-xl border border-border bg-base/70 p-4 text-sm text-muted">
            Núcleo privado disponível sob NDA / colaboração. Estrutura “Demonstração Pública + Núcleo Privado”.
          </div>
        )}

        <div className="mt-8">
          <Prose>{content}</Prose>
        </div>
      </div>
    </div>
  );
}
