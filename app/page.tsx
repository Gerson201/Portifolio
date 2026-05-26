import Link from "next/link";
import { ArrowRight, Github, Linkedin, ChevronRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

const SOFTWARE_SKILLS = [
  { category: "Linguagens", items: ["Python", "TypeScript", "C++", "JavaScript"] },
  { category: "IA & ML", items: ["TensorFlow", "OpenCV", "XGBoost", "MediaPipe", "ONNX"] },
  { category: "Backend", items: ["FastAPI", "NestJS", "Django", "Express"] },
  { category: "Frontend", items: ["React", "Next.js", "Electron", "Angular"] },
  { category: "Dados & BD", items: ["PostgreSQL", "SQLite", "SQLAlchemy", "Prisma"] },
  { category: "DevOps", items: ["Docker", "GitHub Actions", "Playwright", "AWS"] },
];

const ELETRICA_SKILLS = [
  { category: "Proteção", items: ["Coordenação de Proteção", "Relés", "SPDA", "Aterramento"] },
  { category: "Qualidade de Energia", items: ["Harmônicas", "Flicker", "Power Factor", "IEEE 519"] },
  { category: "Embarcados", items: ["ESP32", "LoRa", "MQTT", "Firmware C++"] },
  { category: "Simulação", items: ["PSCAD", "AutoCAD", "MATLAB", "PowerWorld"] },
];

export default function HomePage() {
  const featuredSoftware = getFeaturedProjects()
    .filter((p) => p.area === "software")
    .slice(0, 3);
  const featuredEletrica = getFeaturedProjects()
    .filter((p) => p.area === "eletrica")
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="container py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Software Engineer · Electrical Engineer · ML Systems
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-fg md:text-5xl leading-tight">
            Gerson Santos
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted leading-relaxed">
            Engenheiro com dupla formação em Software e Elétrica, especializado em
            sistemas de IA aplicada, Visão Computacional e proteção de sistemas elétricos.
            Levo modelos de ML do experimento à produção e projetos elétricos do estudo à implementação.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/software/projetos"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              Projetos de Software
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/eletrica/projetos"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-accent"
            >
              Projetos Elétricos
            </Link>
            <a
              href="https://github.com/Gerson201"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/gerson-santos-14a94b24b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-accent"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Skills — Software */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="container py-12">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted">
            Stack de Software
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SOFTWARE_SKILLS.map(({ category, items }) => (
              <div key={category}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">
                  {category}
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
        </div>
      </section>

      {/* Featured — Software */}
      {featuredSoftware.length > 0 && (
        <section className="container py-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Projetos em Destaque
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-fg">
                Engenharia de Software
              </h2>
            </div>
            <Link
              href="/software/projetos"
              className="hidden items-center gap-1 text-sm text-muted transition hover:text-accent md:inline-flex"
            >
              Ver todos
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredSoftware.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Skills — Elétrica */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="container py-12">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted">
            Stack de Engenharia Elétrica
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ELETRICA_SKILLS.map(({ category, items }) => (
              <div key={category}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">
                  {category}
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
        </div>
      </section>

      {/* Featured — Elétrica */}
      {featuredEletrica.length > 0 && (
        <section className="container py-16 pb-20">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Projetos em Destaque
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-fg">
                Engenharia Elétrica
              </h2>
            </div>
            <Link
              href="/eletrica/projetos"
              className="hidden items-center gap-1 text-sm text-muted transition hover:text-accent md:inline-flex"
            >
              Ver todos
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredEletrica.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
