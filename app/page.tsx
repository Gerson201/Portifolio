import Link from "next/link";
import { ArrowRight, Github, Linkedin, ChevronRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

const SKILLS = [
  { category: "Languages", items: ["Python", "TypeScript", "C++"] },
  { category: "ML / AI", items: ["PyTorch", "ONNX", "OpenCV", "LLMs", "MediaPipe"] },
  { category: "Backend", items: ["FastAPI", "NestJS", "Django", "Flask"] },
  { category: "Frontend", items: ["React 19", "Next.js", "Electron"] },
  { category: "Data / DB", items: ["PostgreSQL", "Firebase", "SQLite", "Prisma"] },
  { category: "DevOps", items: ["Docker", "GitHub Actions", "Turborepo"] },
];

export default function HomePage() {
  const featured = getFeaturedProjects()
    .filter((p) => p.area === "software")
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="container py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Software Engineer · ML Engineer · IoT Systems
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-fg md:text-5xl leading-tight">
            Gerson Santos
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted leading-relaxed">
            Engenheiro com foco em sistemas de IA aplicada, Visão Computacional e
            arquiteturas de software para ambientes críticos. Especializado em levar
            modelos de ML do experimento à produção — edge, cloud e desktop.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/software/projetos"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              Ver Projetos
              <ArrowRight className="h-4 w-4" />
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
              href="https://linkedin.com/in/gerson-santos-dev"
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

      {/* Skills */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="container py-12">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted">
            Stack Técnico
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map(({ category, items }) => (
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

      {/* Featured Projects */}
      {featured.length > 0 && (
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
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-6 md:hidden">
            <Link
              href="/software/projetos"
              className="inline-flex items-center gap-1 text-sm text-muted transition hover:text-accent"
            >
              Ver todos os projetos
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      {/* Tracks */}
      <section className="container pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/software"
            className="group rounded-xl border border-border bg-card p-6 transition hover:border-accent"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Trilha Principal
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-fg">
              Engenharia de Software
            </h3>
            <p className="mt-1 text-sm text-muted">
              IA, Visão Computacional, LLMs, SaaS e MLOps.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-muted transition group-hover:text-accent">
              Explorar trilha
              <ChevronRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link
            href="/eletrica"
            className="group rounded-xl border border-border bg-card p-6 transition hover:border-accent"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Trilha Complementar
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-fg">
              Engenharia Elétrica
            </h3>
            <p className="mt-1 text-sm text-muted">
              Proteção, qualidade de energia e sistemas embarcados.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-muted transition group-hover:text-accent">
              Explorar trilha
              <ChevronRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
