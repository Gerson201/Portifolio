import SectionHeader from "@/components/SectionHeader";
import ResumeCard from "@/components/ResumeCard";
import { getResumeEletrica } from "@/lib/resumes";
import ActivityGallery from "@/components/ActivityGallery";
import { getEletricaActivities } from "@/lib/activities";

export default function EletricaAtividadesPage() {
  const resume = getResumeEletrica();
  const activities = getEletricaActivities();

  return (
    <div className="container py-16">
      {resume && <ResumeCard title={resume.title} file={resume.file} />}
      <SectionHeader
        title="Atividades de Engenharia Elétrica"
        subtitle="Registro de atividades, eventos e iniciativas da trilha elétrica."
      />
      <ActivityGallery items={activities} />
    </div>
  );
}
