import { Project } from "@/lib/types";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2">
      {items.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
      {!items.length && (
        <div className="text-sm text-muted">Nenhum projeto encontrado.</div>
      )}
    </div>
  );
}
