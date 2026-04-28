import { brand } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 border-t border-[var(--rule)] bg-[var(--paper-soft)]">
      <div className="container-shell pt-20 pb-8">
        <div className="grid gap-12 md:grid-cols-4 md:gap-10">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              Marca
            </p>
            <p className="mt-4 font-display text-[2rem] leading-none tracking-[-0.02em] text-[var(--ink)]">
              {brand.name}
            </p>
            <p className="mt-3 max-w-[20ch] text-[0.92rem] leading-6 text-[var(--ink-muted)]">
              Estructura para lo que tu empresa ya sabe.
            </p>
          </div>

          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              Posicionamiento
            </p>
            <p className="mt-4 font-display italic text-[1.4rem] leading-tight tracking-[-0.01em] text-[var(--ink)]">
              De conocimiento <br /> a sistemas.
            </p>
          </div>

          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              Sistema
            </p>
            <ul className="mt-4 space-y-2 text-[0.95rem] text-[var(--ink-muted)]">
              <li className="flex items-center gap-3">
                <span className="font-mono text-[0.72rem] text-[var(--ink-faint)]">01</span>
                SaaS
              </li>
              <li className="flex items-center gap-3">
                <span className="font-mono text-[0.72rem] text-[var(--ink-faint)]">02</span>
                Inteligencia artificial
              </li>
              <li className="flex items-center gap-3">
                <span className="font-mono text-[0.72rem] text-[var(--ink-faint)]">03</span>
                Contenido educativo
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              Contacto
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-4 inline-block font-display text-[1.4rem] leading-tight tracking-[-0.01em] text-[var(--ink)] transition hover:text-[var(--ink-strong)]"
            >
              {brand.email}
            </a>
            <p className="mt-3 text-[0.92rem] leading-6 text-[var(--ink-muted)]">
              Conversación de treinta minutos.<br />Sin propuesta enlatada.
            </p>
          </div>
        </div>

        {/* Massive wordmark */}
        <div
          aria-hidden
          className="mt-20 select-none overflow-hidden border-t border-[var(--rule)] pt-10"
        >
          <p className="font-display text-[clamp(5rem,18vw,17rem)] leading-[0.85] tracking-[-0.04em] text-[var(--ink)]">
            Mathgram<span className="italic text-[var(--accent-warm)]">.</span>
          </p>
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[var(--rule)] pt-6 text-[0.78rem] text-[var(--ink-faint)] md:flex-row md:items-center md:justify-between">
          <p className="font-mono uppercase tracking-[0.18em]">
            © {year} {brand.name}. Todos los derechos reservados.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Diseñado con criterio, no por inercia.
          </p>
        </div>
      </div>
    </footer>
  );
}
