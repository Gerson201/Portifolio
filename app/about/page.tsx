import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CertificateGallery from "@/components/CertificateGallery";
import { getCertificates } from "@/lib/certificates";

export const metadata: Metadata = {
  title: "Sobre | Gerson Santos",
  description:
    "Engenheiro de Software, ML Engineer e IoT. Formação em Engenharia de Software, Mestrado em Modelagem Computacional e Pós em Ciência de Dados.",
};

const EDUCATION = [
  {
    degree: "B.Eng. Engenharia de Software",
    status: "Em andamento",
    expected: "Conclusão: Julho/2027",
  },
  {
    degree: "M.Sc. Modelagem Computacional",
    status: "Em andamento",
    expected: "Conclusão: Dezembro/2026",
  },
  {
    degree: "Pós-graduação — Ciência de Dados",
    status: "Em andamento",
    expected: "Conclusão: Julho/2026",
  },
  {
    degree: "B.Eng. Engenharia Elétrica",
    status: "Concluído",
    expected: "",
  },
];

const SKILLS_GROUPS = [
  {
    title: "Machine Learning & IA",
    items: [
      "TensorFlow", "PyTorch", "ONNX Runtime", "Scikit-learn",
      "XGBoost", "LightGBM", "TA-Lib", "CNN", "LSTM", "Transformers",
      "Reinforcement Learning", "MediaPipe", "OpenCV", "SegFormer",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "FastAPI", "NestJS", "Django", "Express", "Flask", "Node.js",
      "REST", "WebSocket", "Pydantic", "JWT", "SQLAlchemy",
    ],
  },
  {
    title: "Frontend & Desktop",
    items: [
      "React", "Next.js", "Electron", "TypeScript",
      "Tailwind CSS", "MUI", "Vite", "Zustand",
    ],
  },
  {
    title: "Dados & Banco de Dados",
    items: [
      "PostgreSQL", "SQLite", "Firebase", "Prisma",
      "Alembic", "Pandas", "NumPy", "Google Analytics API",
    ],
  },
  {
    title: "DevOps & QA",
    items: [
      "Docker", "GitHub Actions", "Playwright", "Turborepo",
      "pnpm Workspaces", "pytest", "Jest",
    ],
  },
  {
    title: "Arquitetura",
    items: [
      "Clean Architecture", "Multi-Tenant SaaS",
      "Edge Computing", "Monorepo", "MCP (Model Context Protocol)",
    ],
  },
  {
    title: "Linguagens",
    items: ["Python", "TypeScript", "JavaScript", "C++", "Shell"],
  },
];

export default function AboutPage() {
  const certificates = getCertificates();

  return (
    <div className="container py-16 space-y-16">

      {/* Bio */}
      <section>
        <SectionHeader
          title="Sobre"
          subtitle="Engenheiro focado em IA aplicada, sistemas edge e arquiteturas de software para produção."
        />
        <div className="card p-8 max-w-3xl">
          <p className="text-sm text-muted leading-relaxed">
            Trabalho na interseção entre Engenharia de Software, Machine Learning e sistemas
            embarcados. Meu foco é levar modelos de ML do experimento à produção — seja em
            cloud, dispositivos edge (Raspberry Pi, Jetson Nano) ou aplicações desktop.
          </p>
          <p className="mt-4 text-sm text-muted leading-relaxed">
            Tenho experiência em sistemas de visão computacional em tempo real, automação de
            processos, plataformas SaaS multi-tenant e ferramentas para desenvolvimento
            assistido por IA (MCP servers). Priorizo arquitetura limpa, cobertura de testes
            e documentação técnica.
          </p>
        </div>
      </section>

      {/* Education */}
      <section>
        <SectionHeader
          title="Formação"
          subtitle="Engenharia de Software, Ciência de Dados e Modelagem Computacional."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {EDUCATION.map(({ degree, status, expected }) => (
            <div key={degree} className="card p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-sm font-semibold text-fg">{degree}</p>
                  {expected && (
                    <p className="mt-1 text-xs text-muted">{expected}</p>
                  )}
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    status === "Concluído"
                      ? "bg-accent/10 text-accent"
                      : "border border-border text-muted"
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <SectionHeader
          title="Tecnologias"
          subtitle="Stack técnico utilizado em projetos de produção e pesquisa."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS_GROUPS.map(({ title, items }) => (
            <div key={title} className="card p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-accent">
                {title}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      {certificates.length > 0 && (
        <section>
          <SectionHeader
            title="Certificados"
            subtitle="Certificações e cursos complementares. Reprodução não autorizada."
          />
          <CertificateGallery items={certificates} />
        </section>
      )}

    </div>
  );
}
