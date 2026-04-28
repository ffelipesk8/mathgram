import { ArrowUpRight, Check, Dot, Layers3, Sparkles, Workflow } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";
import {
  audienceItems,
  manifestoParagraphs,
  services,
  transformation,
  valuePoints,
} from "@/lib/site-data";

function NarrativeSection({
  id,
  label,
  title,
  eyebrow,
  body,
  closing,
}: {
  id?: string;
  label: string;
  title: string;
  eyebrow?: string;
  body: string[];
  closing?: string;
}) {
  return (
    <section id={id} className="section-space">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal>
          <div className="space-y-5 lg:sticky lg:top-28">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="section-title max-w-xl text-white">{title}</h2>
            {eyebrow ? <p className="section-copy">{eyebrow}</p> : null}
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="glass-panel rounded-[2rem] p-8 md:p-10">
            <div className="space-y-5 text-[1.02rem] leading-8 text-white/[0.7] md:text-[1.08rem]">
              {body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {closing ? (
              <p className="mt-8 display-kicker text-[1.5rem] leading-8 text-white md:text-[1.7rem]">
                {closing}
              </p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <NarrativeSection
      label="Problema"
      title="El conocimiento existe. Lo que falta es una estructura que lo vuelva utilizable."
      eyebrow="La mayor parte de las empresas ya tiene experiencia, talento y herramientas suficientes para mejorar."
      body={[
        "Lo que no tiene es una arquitectura clara para convertir ese conocimiento en decisiones, procesos y aprendizaje repetible.",
        "Por eso el valor se diluye: queda atrapado en personas, se fragmenta entre equipos y no escala con la velocidad que exige el negocio.",
      ]}
      closing="El problema no es la falta de recursos. Es la falta de sistema."
    />
  );
}

export function OriginSection() {
  return (
    <NarrativeSection
      label="Origen"
      title="Construido desde experiencia operativa, no desde teor\u00eda."
      eyebrow="Mathgram nace de cuatro trayectorias distintas con una misma obsesi\u00f3n: hacer que las empresas funcionen mejor."
      body={[
        "Matem\u00e1ticas, empresa, tecnolog\u00eda y emprendimiento. M\u00e1s de 15 a\u00f1os entendiendo qu\u00e9 hace que una operaci\u00f3n avance y qu\u00e9 hace que se estanque.",
        "Hemos construido, optimizado y escalado sistemas reales. Vimos de cerca c\u00f3mo el conocimiento se pierde, se repite o nunca termina de convertirse en capacidad instalada.",
      ]}
      closing="Mathgram aparece cuando entendimos que el diferencial no est\u00e1 en sumar piezas, sino en hacerlas trabajar juntas."
    />
  );
}

export function VisionSection() {
  return (
    <NarrativeSection
      id="vision"
      label="Visi\u00f3n"
      title="Las empresas no necesitan m\u00e1s herramientas. Necesitan mejores sistemas."
      eyebrow="M\u00e1s software no garantiza adopci\u00f3n. M\u00e1s contenido no garantiza aprendizaje. M\u00e1s tecnolog\u00eda no garantiza impacto."
      body={[
        "El valor real aparece cuando existe una l\u00f3gica compartida entre lo que la empresa sabe, lo que hace y la forma en que escala.",
        "Entendemos c\u00f3mo fluye el conocimiento dentro de una organizaci\u00f3n, d\u00f3nde se rompe y c\u00f3mo convertirlo en una ventaja concreta.",
      ]}
      closing="Nuestro trabajo es volver ese conocimiento operable."
    />
  );
}

export function ServicesSection() {
  return (
    <section id="servicios" className="section-space">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-5">
              <SectionLabel>Servicios</SectionLabel>
              <h2 className="section-title max-w-3xl text-white">
                Tres capacidades, un mismo sistema.
              </h2>
            </div>
            <p className="section-copy">
              No pensamos en producto, IA y aprendizaje como frentes aislados.
              Los dise&ntilde;amos para reforzarse entre s&iacute;.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map(({ title, body, icon: Icon }, index) => (
            <Reveal key={title} delay={0.08 + index * 0.05}>
              <article className="glass-panel h-full rounded-[2rem] p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/[0.28]" />
                </div>
                <h3 className="mt-8 display-kicker text-[1.9rem] leading-9 text-white">
                  {title}
                </h3>
                <p className="mt-5 text-[1.02rem] leading-8 text-white/[0.68]">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TransformationSection() {
  return (
    <section id="como-funciona" className="section-space">
      <div className="container-shell">
        <Reveal>
          <SectionLabel>Transformaci&oacute;n</SectionLabel>
        </Reveal>
        <Reveal delay={0.05} className="mt-6">
          <h2 className="section-title max-w-3xl text-white">
            Cuando el conocimiento se estructura, la operaci&oacute;n cambia de nivel.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/[0.38]">
                Antes
              </p>
              <div className="mt-8 space-y-4">
                {transformation.before.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-black/10 px-4 py-4">
                    <Dot className="mt-1 h-5 w-5 text-white/[0.32]" />
                    <span className="text-lg text-white/[0.68]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[2rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(158,197,255,0.12),rgba(158,197,255,0.03))] p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Despu&eacute;s
              </p>
              <div className="mt-8 space-y-4">
                {transformation.after.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-black/10 px-4 py-4">
                    <Check className="mt-1 h-5 w-5 text-[var(--color-accent)]" />
                    <span className="text-lg text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function PositioningSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <Reveal>
          <div className="rounded-[2.2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 md:p-12">
            <SectionLabel>Posicionamiento</SectionLabel>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="section-title max-w-3xl text-white">
                  No somos una categor&iacute;a m&aacute;s. Somos una capa de coherencia.
                </h2>
              </div>
              <div className="space-y-4 text-lg leading-8 text-white/[0.68]">
                <p>No somos solo una plataforma.</p>
                <p>No somos solo inteligencia artificial.</p>
                <p>No somos solo contenido.</p>
                <p>No somos otro software m&aacute;s.</p>
                <p className="pt-4 display-kicker text-[1.45rem] leading-8 text-white">
                  Somos la combinaci&oacute;n de SaaS, IA y contenido educativo dise&ntilde;ada para convertir conocimiento en ventaja real.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FoundersSection() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
        <Reveal>
          <div className="space-y-5">
            <SectionLabel>Fundadores</SectionLabel>
            <h2 className="section-title max-w-xl text-white">
              Experiencia que entiende sistemas, no solo ideas.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="glass-panel rounded-[2rem] p-8 md:p-10">
            <p className="text-[1.08rem] leading-8 text-white/[0.7]">
              Mathgram fue creado por cuatro profesionales con trayectorias distintas y una visi&oacute;n en com&uacute;n: ayudar a que las empresas funcionen mejor.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                ["Ejecuci\u00f3n real", "Venimos de construir, optimizar y escalar operaciones concretas."],
                ["Visi\u00f3n sist\u00e9mica", "Entendemos la relaci\u00f3n entre aprendizaje, tecnolog\u00eda y operaci\u00f3n."],
                ["Pensamiento estructural", "Traducimos complejidad en marcos claros y accionables."],
                ["Dise\u00f1o con criterio", "No agregamos piezas: conectamos lo que ya existe."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.03] p-5">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/[0.62]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ValueSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-5">
              <SectionLabel>Propuesta de valor</SectionLabel>
              <h2 className="section-title max-w-3xl text-white">
                No agregamos complejidad. Creamos una estructura que se puede sostener.
              </h2>
            </div>
            <p className="section-copy">
              El objetivo no es impresionar con tecnolog&iacute;a. Es reducir fricci&oacute;n, alinear decisiones y volver el conocimiento accionable.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {valuePoints.map((item, index) => (
            <Reveal key={item} delay={0.06 + index * 0.04}>
              <div className="flex min-h-32 items-end rounded-[1.7rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6">
                <p className="display-kicker text-[1.45rem] leading-8 text-white">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <Reveal>
          <SectionLabel>Para qui&eacute;n es</SectionLabel>
        </Reveal>
        <Reveal delay={0.05} className="mt-6">
          <h2 className="section-title max-w-3xl text-white">
            Para empresas que ya crecieron lo suficiente como para sentir el costo del desorden.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {audienceItems.map((item, index) => (
            <Reveal key={item} delay={0.08 + index * 0.04}>
              <div className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.03] p-6">
                <div className="flex items-center gap-3">
                  {index % 2 === 0 ? (
                    <Layers3 className="h-5 w-5 text-[var(--color-accent)]" />
                  ) : (
                    <Workflow className="h-5 w-5 text-[var(--color-accent-warm)]" />
                  )}
                  <p className="text-lg leading-8 text-white/[0.78]">{item}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatementSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <Reveal>
          <div className="rounded-[2.8rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-8 py-18 text-center md:px-16">
            <p className="mx-auto max-w-5xl display-kicker text-[clamp(2.3rem,4.8vw,5rem)] leading-[1] text-white">
              Tu empresa ya tiene el potencial.
              <span className="block text-[#c9c5bc]">
                Mathgram lo convierte en un sistema.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ManifestoSection() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <div className="space-y-5">
            <SectionLabel>Manifiesto</SectionLabel>
            <h2 className="section-title max-w-xl text-white">
              No creamos soluciones aisladas. Dise&ntilde;amos sistemas con criterio.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="glass-panel rounded-[2rem] p-8 md:p-10">
            <div className="space-y-5 text-[1.02rem] leading-8 text-white/[0.7] md:text-[1.08rem]">
              {manifestoParagraphs.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "display-kicker text-[1.55rem] leading-8 text-white" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section id="contacto" className="section-space">
      <div className="container-shell">
        <Reveal>
          <div className="glass-panel rounded-[2.5rem] px-8 py-12 md:px-12 md:py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <SectionLabel>Contacto</SectionLabel>
                <h2 className="mt-6 max-w-3xl display-kicker text-[clamp(2.4rem,4.4vw,4.8rem)] leading-[0.98] text-white">
                  Es momento de estructurar lo que tu empresa ya sabe.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.68]">
                  Convierte conocimiento en sistemas reales, claros y escalables con Mathgram.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href="mailto:hola@mathgram.com?subject=Agendar%20demo%20Mathgram"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 hover:-translate-y-0.5"
                >
                  Agendar demo
                </a>
                <a
                  href="mailto:hola@mathgram.com?subject=Hablar%20con%20el%20equipo%20Mathgram"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-5 py-3 text-sm font-medium text-white hover:border-white/[0.24] hover:bg-white/[0.08]"
                >
                  Hablar con el equipo
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
