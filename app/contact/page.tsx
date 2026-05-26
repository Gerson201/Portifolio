import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { Github, Linkedin, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato | Gerson Santos",
};

const LINKS = [
  {
    icon: Github,
    label: "GitHub",
    description: "Código público, projetos open source e atividade de desenvolvimento.",
    href: "https://github.com/Gerson201",
    display: "github.com/Gerson201",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    description: "Perfil profissional, trajetória e recomendações.",
    href: "https://linkedin.com/in/gerson-santos-14a94b24b",
    display: "linkedin.com/in/gerson-santos-14a94b24b",
  },
  {
    icon: FileText,
    label: "Projetos para Recrutadores",
    description: "Documento com projetos curados, stack técnico e notas de acesso.",
    href: "/RECRUITER.md",
    display: "Ver RECRUITER.md",
  },
];

export default function ContactPage() {
  return (
    <div className="container py-16">
      <SectionHeader
        title="Contato"
        subtitle="Disponível para conversas sobre projetos de IA, Engenharia de Software e oportunidades técnicas."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {LINKS.map(({ icon: Icon, label, description, href, display }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="card group block p-6 transition hover:border-accent"
          >
            <Icon className="h-5 w-5 text-accent" />
            <p className="mt-3 font-display text-sm font-semibold text-fg">{label}</p>
            <p className="mt-1 text-xs text-muted">{description}</p>
            <p className="mt-3 text-xs text-accent group-hover:underline">{display}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
