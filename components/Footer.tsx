import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-base">
      <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-fg">Gerson Santos</p>
          <p className="mt-0.5 text-xs text-muted">
            Software Engineer · ML Engineer · IoT Systems
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-muted">
          <Link href="/software/projetos" className="transition hover:text-accent">
            Projetos
          </Link>
          <Link href="/about" className="transition hover:text-accent">
            Sobre
          </Link>
          <Link href="/contact" className="transition hover:text-accent">
            Contato
          </Link>
          <a
            href="https://github.com/Gerson201"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
