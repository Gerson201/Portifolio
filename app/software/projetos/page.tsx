import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectGrid from "@/components/ProjectGrid";
import { getProjectsByArea } from "@/lib/content";
import ResumeCard from "@/components/ResumeCard";
import { getResumeSoftware } from "@/lib/resumes";

export const metadata: Metadata = {
  title: "Projetos de Software | Gerson Santos",
  description:
    "Projetos de software de Gerson Santos — IA aplicada, visão computacional, SaaS multi-tenant, servidores MCP e automação de processos. Código e demonstrações disponíveis.",
};

export default function SoftwareProjectsPage() {
  const projects = getProjectsByArea("software");
  const resume = getResumeSoftware();

  return (
    <div className="container py-16">
      {resume && <ResumeCard title={resume.title} file={resume.file} />}
      <SectionHeader
        title="Projetos de Engenharia de Software"
        subtitle="9 projetos cobrindo IA aplicada, visão computacional, SaaS multi-tenant e automação de processos."
      />
      <ProjectGrid items={projects} />
    </div>
  );
}
