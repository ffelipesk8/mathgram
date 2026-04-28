import { ArrowRight, ChartNoAxesCombined, Network, Sparkles } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { Reveal } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";

function HeroArchitecture() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="absolute inset-x-10 top-14 h-px bg-gradient-to-r from-transparent via-white/[0.14] to-transparent" />
      <div className="absolute inset-x-20 bottom-16 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />

      <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(158,197,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(215,179,127,0.1),transparent_22%)]" />
        <div className="relative">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/[0.42]">
                Mathgram System Map
              </p>
              <p className="mt-3 display-kicker text-2xl text-white md:text-[2rem]">
                De conocimiento
                <span className="block text-white/[0.48]">a estructura operativa.</span>
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-accent-soft)]">
              <Sparkles className="h-5 w-5 text-[var(--color-accent)]" />
            </div>
          </div>

          <div className="mt-10 grid gap-4">
            <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[1.7rem] border border-white/[0.08] bg-black/10 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.06]">
                    <Network className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/[0.42]">
                      Input
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Conocimiento disperso
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="h-2 rounded-full bg-white/[0.08]" />
                  <div className="h-2 w-5/6 rounded-full bg-white/[0.16]" />
                  <div className="h-2 w-2/3 rounded-full bg-white/[0.08]" />
                </div>
              </div>
              <div className="rounded-[1.7rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/[0.42]">
                  Outcome
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/[0.08] p-4">
                    <p className="text-sm text-white/[0.7]">Procesos</p>
                  </div>
                  <div className="rounded-2xl bg-[var(--color-accent-soft)] p-4">
                    <p className="text-sm text-white">Aprendizaje</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.06] p-4">
                    <p className="text-sm text-white/[0.7]">Sistemas</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.12] p-4">
                    <p className="text-sm text-white">Escala</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[0.88fr_1.12fr]">
              <div className="rounded-[1.7rem] border border-white/[0.08] bg-white/[0.03] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/[0.42]">
                  Layer
                </p>
                <div className="mt-5 space-y-3">
                  {["SaaS", "IA aplicada", "Contenido educativo"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
                    >
                      <span className="text-sm text-white/[0.76]">{item}</span>
                      <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.7rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(158,197,255,0.12),rgba(158,197,255,0.03))] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/14">
                    <ChartNoAxesCombined className="h-4 w-4 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/[0.42]">
                      Result
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Claridad que sí se puede operar
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-black/10 p-4">
                    <p className="text-2xl font-semibold text-white">01</p>
                    <p className="mt-2 text-sm text-white/[0.62]">Diagnóstico</p>
                  </div>
                  <div className="rounded-2xl bg-black/10 p-4">
                    <p className="text-2xl font-semibold text-white">02</p>
                    <p className="mt-2 text-sm text-white/[0.62]">Conexión</p>
                  </div>
                  <div className="rounded-2xl bg-black/10 p-4">
                    <p className="text-2xl font-semibold text-white">03</p>
                    <p className="mt-2 text-sm text-white/[0.62]">Escala</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8">
      <div className="mesh-lines" />
      <div className="noise-overlay" />
      <div className="container-shell relative section-space">
        <Reveal className="mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-3">
            <div className="flex items-center gap-3">
              <SectionLabel>Mathgram</SectionLabel>
              <p className="text-sm text-white/[0.56]">
                SaaS, inteligencia artificial y contenido educativo para empresas que necesitan estructura.
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/[0.36]">
              De conocimiento a sistemas
            </p>
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <Reveal>
              <h1 className="display-kicker max-w-5xl text-[clamp(3.4rem,7.2vw,7rem)] leading-[0.9] font-semibold text-white">
                Tu empresa no necesita m&aacute;s herramientas.
                <span className="mt-2 block text-[#c6c2b8]">
                  Necesita una l&oacute;gica com&uacute;n para lo que ya sabe.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.05} className="mt-8">
              <p className="max-w-2xl text-[1.15rem] leading-9 text-white/[0.68] md:text-[1.28rem]">
                Mathgram convierte conocimiento disperso en sistemas claros,
                adoptables y escalables. Combinamos producto, IA aplicada y
                contenido educativo para que la operaci&oacute;n deje de depender
                de la intuici&oacute;n.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#contacto">Agendar demo</ButtonLink>
              <ButtonLink href="#como-funciona" variant="secondary">
                <span>Ver c&oacute;mo funciona</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
            </Reveal>
            <Reveal delay={0.14} className="mt-14 grid gap-4 md:grid-cols-3">
              {[
                ["Arquitectura", "Estructuramos el conocimiento para que se pueda operar."],
                ["Alineaci\u00f3n", "Conectamos herramientas, procesos y personas bajo una misma l\u00f3gica."],
                ["Escala", "Dise\u00f1amos sistemas que sostienen crecimiento real."],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-[1.6rem] border border-white/[0.08] bg-white/[0.025] p-5"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-white/[0.38]">
                    {title}
                  </p>
                  <p className="mt-4 text-base leading-7 text-white/[0.72]">{copy}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <HeroArchitecture />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
