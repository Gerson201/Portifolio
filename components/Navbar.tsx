"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "/software/projetos", label: "Projetos de Software" },
  { href: "/eletrica/projetos", label: "Projetos Elétricos" },
  { href: "/blog", label: "Artigos" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-base/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-display text-base font-semibold text-fg transition hover:text-accent"
        >
          Gerson Santos
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-1.5 text-sm transition ${
                  active
                    ? "bg-card text-fg font-medium"
                    : "text-muted hover:text-fg"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="inline-flex items-center justify-center rounded-lg border border-border p-1.5 text-muted transition hover:border-accent md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-border/50 bg-base md:hidden">
          <nav className="container flex flex-col gap-1 py-3">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-card hover:text-fg"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
