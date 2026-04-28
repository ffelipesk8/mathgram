import { ArrowUpRight, Check } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import {
  dashboardFeed,
  dashboardStats,
  differentiators,
  diffIntro,
  educationCopy,
  educationProblems,
  finalCtaCopy,
  manifestoCopy,
  methodCopy,
  methodSteps,
  services,
  servicesIntro,
  stats,
  teamCopy,
  visionCopy,
} from "@/lib/site-data";

export function ManifestoSection() {
  return (
    <section className="section-space bg-[var(--paper)]">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow">Nuestra propuesta</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-xl mt-4 max-w-[18ch]">
            {manifestoCopy.title.join(" ")}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="grid gap-4 md:col-span-4">
            {stats.map((item, index) => (
              <Reveal key={item.label} delay={0.08 + index * 0.04}>
                <div className="rounded-[22px] bg-[var(--surface)] p-7">
                  <p className="text-[2rem] font-bold leading-none tracking-[-0.04em] text-[var(--ink)]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-[0.92rem] leading-6 text-[var(--ink-muted)]">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-8 md:pl-8">
            {manifestoCopy.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.1 + index * 0.05}>
                <p className="body-prose mt-5 first:mt-0 max-w-[60ch]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="soluciones" className="section-space bg-[var(--surface)]">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow">Soluciones</p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-4 grid gap-6 md:grid-cols-12 md:items-end">
            <h2 className="display-xl md:col-span-7">
              {servicesIntro.title.join(" ")}
            </h2>
            <p className="lead md:col-span-5 md:max-w-[38ch]">
              {servicesIntro.lead}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.08 + index * 0.03}>
              <article className="group h-full rounded-[24px] bg-[var(--paper)] p-8 transition hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                  <ArrowUpRight className="h-4 w-4 text-[var(--ink-subtle)] transition group-hover:text-[var(--ink)]" />
                </div>
                <h3 className="mt-8 text-[1.4rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--ink)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-7 text-[var(--ink-muted)]">
                  {service.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="educacion" className="section-space bg-[var(--surface-deep)]">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow text-[var(--accent-on-dark)]">Educaci&oacute;n</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-xl mt-4 max-w-[15ch] text-[var(--ink-on-dark)]">
              {educationCopy.title.join(" ")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-[56ch] text-[1.05rem] leading-8 text-[var(--ink-on-dark-muted)]">
              {educationCopy.body}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-10">
              <p className="eyebrow-mono text-[var(--ink-on-dark-faint)]">
                Problemas que resolvemos
              </p>
              <ul className="mt-5 space-y-3">
                {educationProblems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.98rem] leading-7 text-[var(--ink-on-dark-muted)]"
                  >
                    <span className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent-on-dark)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-[28px] border border-[var(--rule-on-dark)] bg-[#101826] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
            <div className="flex items-center gap-2 border-b border-[var(--rule-on-dark)] px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <p className="ml-3 text-[0.78rem] text-[var(--ink-on-dark-faint)]">
                Mathgram LMS
              </p>
            </div>

            <div className="p-5 md:p-6">
              <div className="grid gap-3 md:grid-cols-3">
                {dashboardStats.map((item, index) => (
                  <div
                    key={item.label}
                    className="rounded-[18px] border border-[var(--rule-on-dark)] bg-white/4 p-4"
                  >
                    <p className="text-[1.6rem] font-bold tracking-[-0.04em] text-[var(--ink-on-dark)]">
                      {item.value}
                    </p>
                    <p className="mt-2 text-[0.78rem] text-[var(--ink-on-dark-faint)]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-[18px] border border-[var(--rule-on-dark)] bg-white/4 p-5">
                <p className="text-[0.8rem] text-[var(--ink-on-dark-faint)]">
                  Progreso semanal
                </p>
                <div className="mt-4 flex h-18 items-end gap-2">
                  {[40, 52, 46, 60, 68, 54, 74].map((height, index) => (
                    <div
                      key={height + index}
                      className={`flex-1 rounded-t-[6px] ${
                        index === 6 ? "bg-[#2997ff]" : index > 3 ? "bg-[#4b7fcc]" : "bg-[#244063]"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {dashboardFeed.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-[18px] border border-[var(--rule-on-dark)] bg-white/4 px-4 py-3"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-[#1f3550] text-[0.78rem] font-semibold text-[var(--ink-on-dark)]">
                      {item.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[0.92rem] font-medium text-[var(--ink-on-dark)]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[0.76rem] text-[var(--ink-on-dark-faint)]">
                        {item.meta}
                      </p>
                    </div>
                    <span className="rounded-full bg-[rgba(41,151,255,0.14)] px-3 py-1 text-[0.72rem] font-medium text-[#7fc0ff]">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function MethodSection() {
  return (
    <section id="metodo" className="section-space bg-[var(--paper)]">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow">M&eacute;todo</p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-4 grid gap-6 md:grid-cols-12 md:items-end">
            <h2 className="display-xl md:col-span-7">
              {methodCopy.title.join(" ")}
            </h2>
            <p className="lead md:col-span-5 md:max-w-[40ch]">{methodCopy.lead}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {methodSteps.map((step) => (
              <div
                key={step.index}
                className="rounded-[22px] bg-[var(--surface)] p-8 md:p-9"
              >
                <p className="text-[1.9rem] font-bold leading-none tracking-[-0.04em] text-[var(--ink)]">
                  {step.index}
                </p>
                <h3 className="mt-10 text-[1.35rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--ink)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-7 text-[var(--ink-muted)]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function VisionSection() {
  return (
    <section id="vision" className="section-space bg-[var(--paper)]">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-[var(--surface-deep)] px-8 py-20 text-[var(--ink-on-dark)] md:px-16 md:py-28 lg:px-24 lg:py-32">
            <div className="grid-bg opacity-40" />
            <div className="relative">
              <p className="eyebrow text-[var(--accent-on-dark)]">Visi&oacute;n</p>
              <h2 className="mt-5 max-w-[18ch] text-[clamp(2.4rem,5.4vw,5rem)] font-bold leading-[1.05] tracking-[-0.038em] text-[var(--ink-on-dark)]">
                {visionCopy.title.join(" ")}
              </h2>

              <div className="mt-12 grid gap-8 md:grid-cols-12">
                <div className="md:col-span-7 md:col-start-6">
                  {visionCopy.paragraphs.map((p) => (
                    <p
                      key={p}
                      className="mt-4 max-w-[58ch] text-[1.05rem] leading-[1.65] text-[var(--ink-on-dark-muted)] first:mt-0"
                    >
                      {p}
                    </p>
                  ))}
                  <p className="mt-10 max-w-[28ch] text-[clamp(1.4rem,2vw,1.8rem)] font-semibold leading-[1.2] tracking-[-0.022em] text-[var(--ink-on-dark)]">
                    {visionCopy.pullquote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function DifferentiationSection() {
  return (
    <section className="section-space bg-[var(--surface)]">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow">Diferenciadores</p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-4 grid gap-6 md:grid-cols-12 md:items-end">
            <h2 className="display-xl md:col-span-7">
              {diffIntro.title.join(" ")}
            </h2>
            <p className="lead md:col-span-5 md:max-w-[40ch]">{diffIntro.lead}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={0.08 + index * 0.04}>
              <div className="h-full rounded-[22px] bg-[var(--paper)] p-8">
                <div className="grid h-10 w-10 place-items-center rounded-[12px] bg-[rgba(0,102,204,0.08)]">
                  <Check className="h-4 w-4 text-[var(--accent)]" />
                </div>
                <h3 className="mt-7 text-[1.15rem] font-semibold leading-6 tracking-[-0.015em] text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[0.94rem] leading-7 text-[var(--ink-muted)]">
                  {item.body}
                </p>
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
    <section className="section-space bg-[var(--paper)]">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow">Para qui&eacute;n es</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-xl mt-4 max-w-[16ch]">
            Para organizaciones que quieren crecer sin operar desde el desorden.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {[
            "Empresas que invierten en tecnolog\u00eda sin retorno claro",
            "Equipos que necesitan escalar conocimiento entre personas y procesos",
            "Organizaciones educativas y corporativas que quieren modernizar su experiencia",
            "Compa\u00f1\u00edas que ya crecieron y necesitan una estructura m\u00e1s seria",
          ].map((item, index) => (
            <Reveal key={item} delay={0.08 + index * 0.04}>
              <div className="rounded-[22px] bg-[var(--surface)] p-8 md:p-9">
                <span className="text-[1.5rem] font-bold leading-none tracking-[-0.04em] text-[var(--ink)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-8 text-[1.08rem] leading-8 text-[var(--ink)]">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="section-space bg-[var(--paper)]">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow">Nosotros</p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-4 grid gap-6 md:grid-cols-12 md:items-end">
            <h2 className="display-xl md:col-span-7">
              {teamCopy.title.join(" ")}
            </h2>
            <p className="lead md:col-span-5 md:max-w-[40ch]">{teamCopy.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section id="contacto" className="section-space bg-[var(--surface-deep)]">
      <div className="container-shell">
        <Reveal>
          <div className="rounded-[28px] border border-[var(--rule-on-dark)] bg-[var(--surface-deep)] px-8 py-20 md:px-16 md:py-24">
            <p className="eyebrow text-[var(--accent-on-dark)]">Hablemos</p>
            <h2 className="mt-5 max-w-[17ch] text-[clamp(2.5rem,5vw,4.8rem)] font-bold leading-[1.04] tracking-[-0.04em] text-[var(--ink-on-dark)]">
              {finalCtaCopy.title.join(" ")}
            </h2>
            <p className="mt-8 max-w-[58ch] text-[1.08rem] leading-8 text-[var(--ink-on-dark-muted)]">
              {finalCtaCopy.body}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={finalCtaCopy.primary.href}
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--paper)] px-7 text-[0.98rem] font-medium text-[var(--ink)] transition hover:bg-white"
              >
                {finalCtaCopy.primary.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={finalCtaCopy.secondary.href}
                className="group inline-flex items-center gap-1 text-[0.98rem] font-medium text-[var(--accent-on-dark)]"
              >
                {finalCtaCopy.secondary.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
