import { Check, Dot } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";
import {
  audienceItems,
  manifestoParagraphs,
  services,
  transformation,
  valuePoints,
} from "@/lib/site-data";

function TwoColumnSection({
  id,
  label,
  title,
  body,
  closing,
}: {
  id?: string;
  label: string;
  title: string;
  body: string[];
  closing?: string;
}) {
  return (
    <section id={id} className="section-space">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1fr]">
        <Reveal>
          <div className="sticky top-28 space-y-5">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="section-title max-w-xl text-white">{title}</h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="glass-panel rounded-[2rem] p-8 md:p-10">
            <div className="space-y-5 text-base leading-8 text-white/72 md:text-lg">
              {body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {closing ? (
              <p className="mt-8 text-xl leading-8 font-medium tracking-[-0.03em] text-white">
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
    <TwoColumnSection
      label="Problema"
      title="El problema no es la falta de conocimiento. Es la falta de estructura."
      body={[
        "Las empresas hoy están llenas de conocimiento, experiencia y herramientas. Pero ese conocimiento rara vez se convierte en resultados reales.",
        "Se queda atrapado en procesos. Se pierde entre equipos. No escala con la velocidad que el negocio necesita.",
      ]}
      closing="El potencial existe. Pero no está estructurado."
    />
  );
}

export function OriginSection() {
  return (
    <TwoColumnSection
      label="Origen"
      title="Construido desde la experiencia real."
      body={[
        "Mathgram fue creado por cuatro amigos con más de 15 años de experiencia profesional en distintas industrias.",
        "Matemáticas. Empresa. Tecnología. Emprendimiento.",
        "Hemos construido empresas, optimizado procesos y escalado operaciones. Hemos visto lo que funciona. Y lo que no.",
      ]}
      closing="Y entendimos algo simple: el problema nunca es la falta de recursos. Es la falta de estructura."
    />
  );
}

export function VisionSection() {
  return (
    <TwoColumnSection
      id="vision"
      label="Visión"
      title="Las empresas no necesitan más herramientas. Necesitan mejores sistemas."
      body={[
        "Más software no soluciona el problema. Más contenido no garantiza aprendizaje. Más tecnología no asegura resultados.",
        "El verdadero valor está en conectar lo que ya existe. Entendemos cómo funcionan realmente las empresas, cómo fluye el conocimiento y dónde se pierde.",
      ]}
      closing="Y cómo convertirlo en impacto real."
    />
  );
}

export function ServicesSection() {
  return (
    <section id="servicios" className="section-space">
      <div className="container-shell">
        <Reveal>
          <SectionLabel>Servicios</SectionLabel>
        </Reveal>
        <Reveal delay={0.05} className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="section-title max-w-3xl text-white">
            Convertimos conocimiento en sistemas que funcionan.
          </h2>
          <p className="section-copy">
            No son soluciones separadas. Es una arquitectura conectada que
            organiza el conocimiento, lo activa con tecnología y lo convierte en
            capacidad instalada.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map(({ title, body, icon: Icon }, index) => (
            <Reveal key={title} delay={0.08 + index * 0.05}>
              <article className="glass-panel h-full rounded-[2rem] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-accent-soft)]">
                  <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/[0.66]">{body}</p>
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
          <SectionLabel>Transformación</SectionLabel>
        </Reveal>
        <Reveal delay={0.05} className="mt-6">
          <h2 className="section-title max-w-3xl text-white">
            Cuando el conocimiento se estructura, todo cambia.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-white/[0.08] bg-[rgba(255,255,255,0.025)] p-8">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/[0.42]">
                Antes
              </p>
              <div className="mt-6 space-y-4">
                {transformation.before.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-white/[0.64]">
                    <Dot className="mt-1 h-5 w-5 text-white/[0.34]" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-[2rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(142,227,255,0.12),rgba(142,227,255,0.04))] p-8">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Después
              </p>
              <div className="mt-6 space-y-4">
                {transformation.after.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-white">
                    <Check className="mt-1 h-5 w-5 text-[var(--color-accent)]" />
                    <span className="text-lg">{item}</span>
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
    <TwoColumnSection
      label="Posicionamiento"
      title="No somos lo que normalmente esperas."
      body={[
        "No somos solo una plataforma. No somos solo inteligencia artificial. No somos solo contenido. No somos otro software más.",
      ]}
      closing="Somos la combinación de SaaS, inteligencia artificial y contenido educativo diseñada para convertir el conocimiento en ventaja real."
    />
  );
}

export function FoundersSection() {
  return (
    <TwoColumnSection
      label="Fundadores"
      title="Experiencia que construye sistemas."
      body={[
        "Mathgram fue creado por cuatro profesionales con trayectorias distintas y una visión en común: hacer que las empresas funcionen mejor.",
        "No venimos de la teoría. Venimos de la ejecución. Hemos construido, optimizado y escalado operaciones reales.",
      ]}
      closing="Hoy, todo ese conocimiento se convierte en una sola cosa: Mathgram."
    />
  );
}

export function ValueSection() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-6 lg:grid-cols-[0.8fr_1fr]">
        <Reveal>
          <div className="space-y-5">
            <SectionLabel>Propuesta de valor</SectionLabel>
            <h2 className="section-title max-w-xl text-white">
              No agregamos complejidad. Creamos claridad.
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-4">
          {valuePoints.map((item, index) => (
            <Reveal key={item} delay={0.06 + index * 0.04}>
              <div className="glass-panel rounded-[1.5rem] px-6 py-5">
                <p className="text-lg text-white">{item}</p>
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
          <SectionLabel>Para quién es</SectionLabel>
        </Reveal>
        <Reveal delay={0.05} className="mt-6">
          <h2 className="section-title max-w-3xl text-white">
            Para empresas que quieren crecer de verdad.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {audienceItems.map((item, index) => (
            <Reveal key={item} delay={0.08 + index * 0.04}>
              <div className="rounded-[1.7rem] border border-white/[0.08] bg-white/[0.03] px-6 py-6">
                <p className="text-lg leading-8 text-white/[0.78]">{item}</p>
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
          <div className="rounded-[2.6rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-8 py-16 text-center shadow-[0_30px_120px_rgba(7,10,24,0.34)] md:px-16">
            <p className="mx-auto max-w-5xl text-[clamp(2rem,4.6vw,4.6rem)] leading-[1.04] font-semibold tracking-[-0.06em] text-white">
              Tu empresa ya tiene el potencial. Mathgram lo convierte en un
              sistema.
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
      <div className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1fr]">
        <Reveal>
          <div className="space-y-5">
            <SectionLabel>Manifiesto</SectionLabel>
            <h2 className="section-title max-w-xl text-white">
              No creamos soluciones aisladas. Construimos sistemas.
            </h2>
            <p className="section-copy">
              Una narrativa clara, operativa y empresarial sobre por qué existe
              Mathgram y qué cambia cuando el conocimiento deja de estar
              disperso.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="glass-panel rounded-[2rem] p-8 md:p-10">
            <div className="space-y-5 text-base leading-8 text-white/72 md:text-lg">
              {manifestoParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
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
          <div className="glass-panel rounded-[2.4rem] px-8 py-12 md:px-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <SectionLabel>Contacto</SectionLabel>
                <h2 className="mt-6 max-w-3xl text-[clamp(2.2rem,4vw,4.4rem)] leading-[1.02] font-semibold tracking-[-0.06em] text-white">
                  Es momento de estructurar lo que tu empresa ya sabe.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.68]">
                  Convierte conocimiento en sistemas reales con Mathgram.
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
