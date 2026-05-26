import SectionHeader from "@/components/SectionHeader";
import ProjectGrid from "@/components/ProjectGrid";
import { getProjectsByArea } from "@/lib/content";
import ResumeCard from "@/components/ResumeCard";
import { getResumeSoftware } from "@/lib/resumes";
import DiagramGallery from "@/components/DiagramGallery";
import { getPlantumlDiagrams } from "@/lib/plantuml";

export default function SoftwareProjectsPage() {
  const projects = getProjectsByArea("software");
  const resume = getResumeSoftware();
  const diagrams = getPlantumlDiagrams();

  return (
    <div className="container py-16">
      {resume && <ResumeCard title={resume.title} file={resume.file} />}
      <div className="mb-8 text-sm text-muted">
        <p>Engenharia de software: Conclusão Julho/2027</p>
        <p>Mestrado em Modelagem: Conclusão Dezembro/2026</p>
        <p>Pós- Ciência de Dados Julho/2026</p>
      </div>
      {diagrams.length > 0 && (
        <div className="mb-12">
          <SectionHeader
            title="Diagramas de Projetos (PlantUML)"
            subtitle="Visualização com zoom para leitura clara."
          />
          <DiagramGallery items={diagrams} />
        </div>
      )}
      <SectionHeader
        title="Projetos de Engenharia de Software"
        subtitle="Cards com detalhes de cada projeto da trilha de software."
      />
      <ProjectGrid items={projects} />
    </div>
  );
}
