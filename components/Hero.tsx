import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="container py-20">
      <div className="card p-10 md:p-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent">AI-Grade Engineering</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-fg md:text-5xl">
            Portfólio empresarial em IA, Engenharia de Software e Engenharia Elétrica
          </h1>
          <p className="mt-4 text-base text-muted">
            Estratégia “Demonstração Pública + Núcleo Privado” para projetos críticos, com governança de dados e foco
            em desempenho operacional.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/software"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent-2"
            >
              Trilha de Engenharia de Software
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/eletrica"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition hover:border-accent"
            >
              Trilha Elétrica
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


