import { ArrowRight, Sparkle } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { Reveal } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";
import { pillars } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="noise-overlay" />
      <div className="container-shell relative section-space grid gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="relative z-10">
          <Reveal>
            <SectionLabel>Mathgram</SectionLabel>
          </Reveal>
          <Reveal delay={0.05} className="mt-6">
            <h1 className="max-w-4xl text-[clamp(3rem,7vw,6.4rem)] leading-[0.94] font-semibold tracking-[-0.06em] text-white">
              Tu empresa no necesita m&aacute;s herramientas.
              <span className="block text-white/52">
                Necesita entender c&oacute;mo encajan las que ya tiene.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <p className="max-w-2xl text-lg leading-8 text-white/[0.68] md:text-xl">
              Mathgram combina Software as a Service, inteligencia artificial y
              creaci&oacute;n de contenido educativo para transformar el
              conocimiento en sistemas que realmente funcionan.
            </p>
          </Reveal>
          <Reveal delay={0.14} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#contacto">Agendar demo</ButtonLink>
            <ButtonLink href="#como-funciona" variant="secondary">
              <span>Ver c&oacute;mo funciona</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.18} className="mt-12 grid gap-5 sm:grid-cols-3">
            {pillars.map(({ title, body, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-5">
                <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                <p className="mt-4 text-sm font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/[0.58]">{body}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.12} className="relative min-h-[520px]">
          <div className="hero-orbit left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2" />
          <div className="hero-orbit left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2" />
          <div className="hero-orbit left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2" />

          <div className="absolute left-[12%] top-[12%] h-[6.5rem] w-[6.5rem] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02))] shadow-[0_20px_80px_rgba(11,16,37,0.42)] backdrop-blur-md" />
          <div className="absolute right-[12%] top-[20%] h-32 w-20 rounded-[2.25rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(142,227,255,0.28),rgba(142,227,255,0.05))]" />
          <div className="absolute left-[21%] top-[42%] h-[4.5rem] w-40 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md" />
          <div className="absolute right-[18%] top-[50%] h-28 w-28 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(248,201,139,0.2),rgba(248,201,139,0.04))]" />
          <div className="absolute bottom-[12%] left-[28%] h-20 w-48 rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]" />

          <div className="glass-panel absolute inset-x-[10%] top-1/2 rounded-[2rem] border border-white/10 p-6 shadow-[0_25px_140px_rgba(7,10,24,0.6)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/[0.42]">
              <span>Sistema estructurado</span>
              <Sparkle className="h-4 w-4 text-[var(--color-accent-warm)]" />
            </div>
            <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Conocimiento
                </p>
                <div className="mt-4 space-y-3">
                  <div className="h-2 rounded-full bg-white/[0.08]" />
                  <div className="h-2 w-4/5 rounded-full bg-white/14" />
                  <div className="h-2 w-2/3 rounded-full bg-white/[0.08]" />
                </div>
              </div>
              <div className="h-px w-10 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />
              <div className="rounded-[1.6rem] border border-[var(--color-border-strong)] bg-[var(--color-accent-soft)] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Sistema
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="h-11 rounded-2xl bg-white/[0.09]" />
                  <div className="h-11 rounded-2xl bg-white/[0.14]" />
                  <div className="h-11 rounded-2xl bg-white/[0.12]" />
                  <div className="h-11 rounded-2xl bg-[rgba(142,227,255,0.18)]" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
