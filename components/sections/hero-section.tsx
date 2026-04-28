"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { ButtonLink } from "@/components/site/button-link";
import { heroCopy } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduce = useReducedMotion();

  const titleAnim = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 36 },
    animate: reduce ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.85, ease, delay: 0.1 + i * 0.08 },
  });

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[var(--paper)]"
    >
      <div aria-hidden className="paper-grid" />

      <div className="container-shell relative pt-20 pb-24 md:pt-28 md:pb-32">
        {/* Title */}
        <h1 className="max-w-[24ch] font-display text-[clamp(3rem,8.6vw,8.8rem)] font-normal leading-[0.95] tracking-[-0.025em] text-[var(--ink)]">
          {heroCopy.titleLines.map((line, i) => (
            <motion.span
              key={line}
              {...titleAnim(i)}
              className={`block ${i === heroCopy.titleItalicIndex ? "italic-serif text-[var(--ink-strong)]" : ""}`}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Lead + CTAs */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
            className="lead max-w-[52ch] text-[var(--ink-muted)]"
          >
            {heroCopy.lead}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 lg:justify-end"
          >
            <ButtonLink href={heroCopy.primaryCta.href}>
              {heroCopy.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={heroCopy.secondaryCta.href} variant="ghost">
              {heroCopy.secondaryCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </motion.div>
        </div>

        {/* Three pillars diagram */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.75 }}
          className="mt-24 md:mt-32"
        >
          <SystemDiagram />
        </motion.div>
      </div>
    </section>
  );
}

function SystemDiagram() {
  const cells = [
    { glyph: "Σ", title: "SaaS", sub: "Sistema operativo del conocimiento." },
    { glyph: "∂", title: "Inteligencia artificial", sub: "Capacidad instalada, no demos." },
    { glyph: "φ", title: "Contenido educativo", sub: "Aprendizaje sobre tu operacion." },
  ];

  return (
    <div className="relative grid gap-px overflow-hidden border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-3">
      {cells.map((cell, i) => (
        <div
          key={cell.title}
          className="group relative flex flex-col justify-between bg-[var(--paper-soft)] p-8 md:min-h-[20rem] md:p-10"
        >
          <span className="font-mono text-[0.72rem] tracking-[0.2em] text-[var(--ink-faint)]">
            {String(i + 1).padStart(2, "0")}
          </span>

          <span
            aria-hidden
            className="my-12 font-display italic text-[clamp(6rem,14vw,10rem)] leading-[0.85] tracking-[-0.04em] text-[var(--ink)] transition-transform duration-700 group-hover:-translate-y-1"
          >
            {cell.glyph}
          </span>

          <div>
            <p className="font-display text-[1.4rem] leading-tight tracking-[-0.014em] text-[var(--ink)]">
              {cell.title}
            </p>
            <p className="mt-2 text-[0.95rem] leading-6 text-[var(--ink-muted)]">{cell.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
