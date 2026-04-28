import { ArrowUpRight } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { Reveal } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";
import {
  audienceCopy,
  audienceItems,
  finalCtaCopy,
  manifestoCopy,
  methodCopy,
  methodSteps,
  services,
  servicesCopy,
  teamCopy,
  visionCopy,
} from "@/lib/site-data";

/* ───────────────────────────  TESIS / MANIFIESTO  ─────────────────────────── */

export function ManifestoSection() {
  return (
    <section id="tesis" className="relative section-space border-t border-[var(--rule)] bg-[var(--paper-soft)]">
      <div className="container-shell grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <SectionLabel>{manifestoCopy.chapter}</SectionLabel>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="display-lg max-w-[16ch]">
            {manifestoCopy.title.map((line, i) => (
              <span key={line} className={`block ${i === 2 ? "italic-serif" : ""}`}>
                {line}
              </span>
            ))}
          </h2>

          <div className="mt-12 grid gap-7 md:max-w-[58ch]">
            {manifestoCopy.paragraphs.map((p, i) => (
              <div key={p} className="flex gap-6">
                <span className="font-mono text-[0.72rem] tracking-[0.2em] text-[var(--ink-faint)]">
                  0{i + 1}
                </span>
                <p className="body-prose">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-[var(--rule)] pt-10">
            <p className="display-md italic-serif max-w-[20ch]">
              “{manifestoCopy.pullquote}”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────  SERVICIOS  ─────────────────────────── */

export function ServicesSection() {
  return (
    <section id="servicios" className="relative section-space border-t border-[var(--rule)]">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[32ch]">
              <SectionLabel number={servicesCopy.number}>{servicesCopy.chapter}</SectionLabel>
              <h2 className="display-lg mt-8">
                {servicesCopy.title.map((line, i) => (
                  <span key={line} className={`block ${i === 1 ? "italic-serif" : ""}`}>
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <p className="lead max-w-[40ch]">{servicesCopy.lead}</p>
          </div>
        </Reveal>

        <div className="mt-20 border-t border-[var(--rule)]">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="group grid gap-6 border-b border-[var(--rule)] py-10 md:grid-cols-[auto_1fr_2fr_auto] md:items-center md:gap-12 md:py-14">
                <span className="font-mono text-[0.78rem] tracking-[0.2em] text-[var(--ink-faint)]">
                  {s.index}
                </span>
                <span
                  aria-hidden
                  className="font-display italic text-[clamp(3.5rem,7vw,5.5rem)] leading-none tracking-[-0.03em] text-[var(--ink)]"
                >
                  {s.glyph}
                </span>
                <div>
                  <h3 className="font-display text-[clamp(1.7rem,3vw,2.6rem)] leading-tight tracking-[-0.018em] text-[var(--ink)]">
                    {s.title}
                  </h3>
                  <p className="body-prose mt-3 max-w-[52ch]">{s.body}</p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 text-[var(--ink-faint)] transition group-hover:text-[var(--ink)] md:block" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  MÉTODO / CÓMO FUNCIONA  ─────────────────────────── */

export function MethodSection() {
  return (
    <section id="metodo" className="relative section-space border-t border-[var(--rule)] bg-[var(--paper-soft)]">
      <div aria-hidden className="paper-grid paper-grid--dense opacity-30" />
      <div className="container-shell relative">
        <Reveal>
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[34ch]">
              <SectionLabel number={methodCopy.number}>{methodCopy.chapter}</SectionLabel>
              <h2 className="display-lg mt-8">
                {methodCopy.title.map((line, i) => (
                  <span key={line} className={`block ${i === 1 ? "italic-serif" : ""}`}>
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <p className="lead max-w-[40ch]">{methodCopy.lead}</p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="group relative h-full bg-[var(--paper)] p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.78rem] tracking-[0.2em] text-[var(--ink-faint)]">
                    {step.index}
                  </span>
                  <span className="block h-1.5 w-1.5 rounded-full bg-[var(--accent-warm)]" />
                </div>
                <h3 className="mt-12 font-display text-[clamp(1.8rem,2.8vw,2.4rem)] leading-tight tracking-[-0.014em] text-[var(--ink)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-[var(--ink-muted)]">{step.body}</p>
                <span
                  aria-hidden
                  className="mt-10 block h-px w-10 bg-[var(--ink)] transition-all duration-500 group-hover:w-20"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  VISIÓN  ─────────────────────────── */

export function VisionSection() {
  return (
    <section id="vision" className="relative section-space border-t border-[var(--rule)]">
      <div className="container-narrow text-center">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel number={visionCopy.number}>{visionCopy.chapter}</SectionLabel>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-12 font-display text-[clamp(2.4rem,5.4vw,5.4rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[var(--ink)]">
            {visionCopy.title.map((line, i) => (
              <span
                key={line}
                className={`block ${i === 2 || i === 3 ? "italic-serif text-[var(--ink-strong)]" : ""}`}
              >
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-14 flex max-w-[58ch] flex-col gap-6 text-left">
            {visionCopy.paragraphs.map((p, i) => (
              <div key={p} className="flex gap-6">
                <span className="font-mono text-[0.72rem] tracking-[0.2em] text-[var(--ink-faint)]">
                  0{i + 1}
                </span>
                <p className="body-prose">{p}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mx-auto mt-16 max-w-[40ch] border-t border-[var(--rule)] pt-10">
            <p className="display-md italic-serif">“{visionCopy.pullquote}”</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────  PARA QUIÉN  ─────────────────────────── */

export function AudienceSection() {
  return (
    <section className="relative section-space border-t border-[var(--rule)] bg-[var(--paper-soft)]">
      <div className="container-shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <SectionLabel number={audienceCopy.number}>{audienceCopy.chapter}</SectionLabel>
            <h2 className="display-lg mt-8">
              {audienceCopy.title.map((line, i) => (
                <span key={line} className={`block ${i === 1 ? "italic-serif" : ""}`}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="lead mt-8 max-w-[40ch]">{audienceCopy.lead}</p>
          </div>
        </Reveal>

        <div className="border-t border-[var(--rule)]">
          {audienceItems.map((item, i) => (
            <Reveal key={item} delay={i * 0.05}>
              <div className="group flex items-baseline justify-between gap-8 border-b border-[var(--rule)] py-8 md:py-10">
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="font-mono text-[0.78rem] tracking-[0.2em] text-[var(--ink-faint)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-[clamp(1.4rem,2.4vw,2rem)] leading-tight tracking-[-0.012em] text-[var(--ink)]">
                    {item}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="hidden h-px w-8 self-center bg-[var(--ink)] transition-all duration-500 group-hover:w-16 md:block"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  EQUIPO  ─────────────────────────── */

export function TeamSection() {
  return (
    <section className="relative section-space border-t border-[var(--rule)]">
      <div className="container-shell">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <SectionLabel number={teamCopy.number}>{teamCopy.chapter}</SectionLabel>
              <h2 className="display-lg mt-8">
                {teamCopy.title.map((line, i) => (
                  <span key={line} className={`block ${i === 1 ? "italic-serif" : ""}`}>
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <p className="lead max-w-[48ch]">{teamCopy.body}</p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-2">
          {teamCopy.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.05}>
              <div className="h-full bg-[var(--paper)] p-8 md:p-12">
                <span className="font-mono text-[0.72rem] tracking-[0.2em] text-[var(--ink-faint)]">
                  {String(i + 1).padStart(2, "0")} / 04
                </span>
                <h3 className="mt-8 font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-tight tracking-[-0.014em] text-[var(--ink)]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-[0.96rem] leading-7 text-[var(--ink-muted)]">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  CTA FINAL  ─────────────────────────── */

export function FinalCtaSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-[var(--rule)] bg-[var(--paper-deep)] section-space"
    >
      <div aria-hidden className="paper-grid opacity-40" />

      <div className="container-shell relative">
        <Reveal>
          <SectionLabel number={finalCtaCopy.number}>{finalCtaCopy.chapter}</SectionLabel>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="display-xl mt-10 max-w-[18ch]">
            {finalCtaCopy.title.map((line, i) => (
              <span key={line} className={`block ${i === 2 ? "italic-serif" : ""}`}>
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <p className="lead max-w-[52ch]">{finalCtaCopy.body}</p>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <ButtonLink href={finalCtaCopy.primary.href}>
                {finalCtaCopy.primary.label}
              </ButtonLink>
              <ButtonLink href={finalCtaCopy.secondary.href} variant="ghost">
                {finalCtaCopy.secondary.label}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
