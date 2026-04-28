import { ArrowUp, ArrowUpRight } from "lucide-react";

import { brand, navItems } from "@/lib/site-data";

const services = [
  { label: "SaaS", href: "#servicios" },
  { label: "Inteligencia artificial", href: "#servicios" },
  { label: "Contenido educativo", href: "#servicios" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--rule)] bg-[var(--paper-soft)]">
      <div className="container-shell pt-20 pb-10">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          {/* Brand block */}
          <div className="md:col-span-5">
            <a href="#inicio" className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="font-display italic text-[2.4rem] leading-none tracking-[-0.04em] text-[var(--ink)]"
              >
                M
              </span>
              <span className="font-display text-[1.5rem] leading-none tracking-[-0.018em] text-[var(--ink)]">
                Mathgram
              </span>
            </a>
            <p className="mt-6 max-w-[34ch] text-[0.98rem] leading-7 text-[var(--ink-muted)]">
              Estructuramos lo que tu empresa ya sabe — SaaS, IA y contenido
              educativo en un solo sistema operable.
            </p>
          </div>

          {/* Sitio */}
          <div className="md:col-span-2">
            <p className="text-[0.82rem] font-medium text-[var(--ink)]">Sitio</p>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.95rem] text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="md:col-span-2">
            <p className="text-[0.82rem] font-medium text-[var(--ink)]">Servicios</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-[0.95rem] text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-3">
            <p className="text-[0.82rem] font-medium text-[var(--ink)]">Contacto</p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-5 block font-display text-[1.35rem] leading-tight tracking-[-0.014em] text-[var(--ink)] transition hover:text-[var(--ink-strong)]"
            >
              {brand.email}
            </a>
            <a
              href="#contacto"
              className="group mt-6 inline-flex h-11 items-center gap-3 rounded-full bg-[var(--ink)] pl-5 pr-1.5 text-[0.9rem] font-medium text-[var(--paper)] transition hover:bg-[var(--ink-strong)]"
            >
              <span>Agendar demo</span>
              <span
                aria-hidden
                className="grid h-8 w-8 place-items-center rounded-full bg-[var(--paper)] text-[var(--ink)] transition-transform duration-500 group-hover:rotate-45"
              >
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-[var(--rule)] pt-6 text-[0.82rem] text-[var(--ink-faint)] md:flex-row md:items-center md:justify-between">
          <p>© {year} {brand.name}. De conocimiento a sistemas.</p>
          <a
            href="#inicio"
            className="group inline-flex items-center gap-2 transition hover:text-[var(--ink)]"
          >
            Volver arriba
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
