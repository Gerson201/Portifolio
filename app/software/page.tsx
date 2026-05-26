import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectGrid from "@/components/ProjectGrid";
import { getProjectsByArea, getRecentPostsByArea } from "@/lib/content";
import PostList from "@/components/PostList";
import ResumeCard from "@/components/ResumeCard";
import { getResumeSoftware } from "@/lib/resumes";

export const metadata: Metadata = {
  title: "Engenharia de Software | Gerson Santos",
  description:
    "Projetos de IA, Visão Computacional, LLMs, SaaS e MLOps. Sistemas de produção com Clean Architecture e cobertura de testes.",
};

export default function SoftwarePage() {
  const projects = getProjectsByArea("software");
  const posts = getRecentPostsByArea("software", 6);
  const resume = getResumeSoftware();

  return (
    <div className="container py-16 space-y-16">

      {/* Header */}
      <div>
        {resume && <ResumeCard title={resume.title} file={resume.file} />}
        <SectionHeader
          title="Engenharia de Software"
          subtitle="Sistemas de IA aplicada, Visão Computacional, LLMs e SaaS para ambientes de produção."
        />
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted">
          <span>B.Eng. Engenharia de Software — conclusão Julho/2027</span>
          <span>M.Sc. Modelagem Computacional — conclusão Dezembro/2026</span>
          <span>Pós-grad. Ciência de Dados — conclusão Julho/2026</span>
        </div>
      </div>

      {/* Projects */}
      <section>
        <SectionHeader
          title="Projetos"
          subtitle="Sistemas de produção, protótipos validados e ferramentas open source."
        />
        <ProjectGrid items={projects} />
        <a
          href="/software/projetos"
          className="mt-6 inline-flex items-center rounded-lg border border-border px-4 py-2 text-xs font-semibold text-fg transition hover:border-accent"
        >
          Ver todos os projetos
        </a>
      </section>

      {/* Posts */}
      {posts.length > 0 && (
        <section>
          <SectionHeader
            title="Artigos Técnicos"
            subtitle="Decisões de arquitetura, aprendizados de produção e notas de engenharia."
          />
          <PostList items={posts} />
        </section>
      )}

    </div>
  );
}
