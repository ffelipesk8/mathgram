import { brand, navItems } from "@/lib/site-data";

const services = [
  { label: "Software y plataformas", href: "#soluciones" },
  { label: "SaaS y LMS", href: "#soluciones" },
  { label: "IA aplicada", href: "#soluciones" },
  { label: "Contenido educativo", href: "#educacion" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface)]">
      <div className="container-shell py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-[1.1rem] font-bold tracking-[-0.022em] text-[var(--ink)]">
              {brand.name}
            </p>
            <p className="mt-3 max-w-[36ch] text-[0.9rem] leading-6 text-[var(--ink-muted)]">
              Tecnologia de alta calidad para conocimiento, educacion y crecimiento. SaaS, IA y contenido educativo en un solo sistema.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-[0.78rem] font-semibold text-[var(--ink)]">Sitio</p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.86rem] text-[var(--ink-muted)] transition hover:text-[var(--ink)] hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[0.78rem] font-semibold text-[var(--ink)]">Servicios</p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-[0.86rem] text-[var(--ink-muted)] transition hover:text-[var(--ink)] hover:underline"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.78rem] font-semibold text-[var(--ink)]">Contacto</p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-4 block text-[0.95rem] font-medium text-[var(--ink)] transition hover:text-[var(--accent)]"
            >
              {brand.email}
            </a>
            <a
              href="#contacto"
              className="mt-5 inline-flex h-10 items-center rounded-full bg-[var(--ink)] px-5 text-[0.85rem] font-medium text-[var(--paper)] transition hover:bg-[var(--ink-strong)]"
            >
              Agendar demo
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--rule)] pt-6 text-[0.78rem] text-[var(--ink-subtle)] md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} {brand.name}. {brand.tagline}.</p>
          <a href="#inicio" className="transition hover:text-[var(--ink)]">
            Volver arriba &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
