import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectGrid from "@/components/ProjectGrid";
import { getProjectsByArea } from "@/lib/content";
import ResumeCard from "@/components/ResumeCard";
import { getResumeEletrica } from "@/lib/resumes";

export const metadata: Metadata = {
  title: "Projetos Elétricos | Gerson Santos",
  description:
    "Projetos elétricos de Gerson Santos — subestações MT/BT, SPDA NBR 5419, coordenação de proteção, sistemas fotovoltaicos e monitoramento IoT. CREA/MG registrado.",
};

export default function EletricaProjectsPage() {
  const projects = getProjectsByArea("eletrica");
  const resume = getResumeEletrica();

  return (
    <div className="container py-16">
      {resume && <ResumeCard title={resume.title} file={resume.file} />}
      <SectionHeader
        title="Projetos de Engenharia Elétrica"
        subtitle="Cards com detalhes de cada projeto da trilha elétrica."
      />
      <ProjectGrid items={projects} />
    </div>
  );
}
