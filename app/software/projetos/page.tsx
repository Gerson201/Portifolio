import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectGrid from "@/components/ProjectGrid";
import { getProjectsByArea } from "@/lib/content";
import ResumeCard from "@/components/ResumeCard";
import { getResumeSoftware } from "@/lib/resumes";
import DiagramGallery from "@/components/DiagramGallery";
import { getPlantumlDiagrams } from "@/lib/plantuml";

export const metadata: Metadata = {
  title: "Projetos de Software | Gerson Santos",
  description:
    "Projetos de software de Gerson Santos — IA aplicada, visão computacional, SaaS multi-tenant, servidores MCP e automação de processos. Código e demonstrações disponíveis.",
};

export default function SoftwareProjectsPage() {
  const projects = getProjectsByArea("software");
  const resume = getResumeSoftware();
  const diagrams = getPlantumlDiagrams();

  return (
    <div className="container py-16">
      {resume && <ResumeCard title={resume.title} file={resume.file} />}
      {diagrams.length > 0 && (
        <div className="mb-12">
          <SectionHeader
            title="Diagramas de Arquitetura"
            subtitle="Diagramas PlantUML dos principais projetos — clique para ampliar."
          />
          <DiagramGallery items={diagrams} />
        </div>
      )}
      <SectionHeader
        title="Projetos de Engenharia de Software"
        subtitle="9 projetos cobrindo IA aplicada, visão computacional, SaaS multi-tenant e automação de processos."
      />
      <ProjectGrid items={projects} />
    </div>
  );
}
