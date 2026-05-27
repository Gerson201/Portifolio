import SectionHeader from "@/components/SectionHeader";
import ProjectGrid from "@/components/ProjectGrid";
import { getProjectsByArea, getRecentPostsByArea } from "@/lib/content";
import PostList from "@/components/PostList";

export default function EletricaPage() {
  const projects = getProjectsByArea("eletrica");
  const posts = getRecentPostsByArea("eletrica", 6);

  return (
    <div className="container py-16">
      <SectionHeader
        title="Engenharia Elétrica"
        subtitle="Ferramentas para proteção, confiabilidade e monitoramento de ativos elétricos."
      />
      <SectionHeader
        title="Projetos"
        subtitle="Acesse a lista completa de projetos da trilha elétrica."
      />
      <ProjectGrid items={projects} />
      <a
        href="/eletrica/projetos"
        className="mt-6 inline-flex items-center rounded-full border border-border px-5 py-2 text-xs font-semibold text-fg transition hover:border-accent"
      >
        Ver todos os projetos de Engenharia Elétrica
      </a>

      <section className="mt-16">
        <SectionHeader
          title="Casos (sanitizados)"
          subtitle="Projetos de cliente com dados sanitizados e governança de privacidade."
        />
        <div className="card p-6 text-sm text-muted">
          Todos os projetos listados seguem política de privacidade dos clientes e não expõem dados sensíveis.
          Detalhes adicionais e documentação completa estão disponíveis para discussão mediante contato direto.
        </div>
      </section>

      <div className="mt-16">
        <SectionHeader
          title="Posts Recentes"
          subtitle="Notas técnicas e padrões aplicados em engenharia elétrica."
        />
        <PostList items={posts} />
      </div>
    </div>
  );
}


