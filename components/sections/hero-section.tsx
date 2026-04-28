"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { ButtonLink } from "@/components/site/button-link";
import { brand, heroCopy } from "@/lib/site-data";

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
      className="relative overflow-hidden bg-[var(--paper)] pt-10"
    >
      <div aria-hidden className="paper-grid" />

      <div className="container-shell relative pt-12 pb-24 md:pt-20 md:pb-32">
        {/* Editorial masthead */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-wrap items-center justify-between gap-3 border-y border-[var(--rule)] py-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]"
        >
          <span className="flex items-center gap-3">
            <span className="block h-1.5 w-1.5 rounded-full bg-[var(--accent-warm)]" />
            {brand.name}
          </span>
          <span>{brand.tagline}</span>
        </motion.div>

        {/* Title */}
        <h1 className="mt-12 max-w-[24ch] font-display text-[clamp(3rem,8.6vw,8.8rem)] font-normal leading-[0.95] tracking-[-0.025em] text-[var(--ink)] md:mt-20">
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

        {/* Editorial diagram below hero */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.75 }}
          className="mt-20 md:mt-28"
        >
          <SystemDiagram />
        </motion.div>

        {/* Meta */}
        <div className="mt-20 grid gap-px border-t border-[var(--rule)] md:grid-cols-3">
          {heroCopy.metaItems.map((item, idx) => (
            <div
              key={item.label}
              className={`flex items-baseline gap-5 py-6 ${
                idx > 0 ? "md:border-l md:border-[var(--rule)] md:pl-8" : ""
              }`}
            >
              <span className="font-mono text-[0.78rem] tracking-[0.2em] text-[var(--ink-faint)]">
                {item.num}
              </span>
              <span className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-none tracking-[-0.012em] text-[var(--ink)]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemDiagram() {
  return (
    <div className="relative">
      {/* Top label */}
      <div className="mb-6 flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
        <span>Diagrama operativo · 01</span>
        <span className="hidden sm:inline">f(x) = sistema(producto, ia, aprendizaje)</span>
      </div>

      <div className="relative grid gap-px overflow-hidden border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-3">
        {[
          {
            glyph: "Σ",
            title: "Estructura",
            sub: "Sumamos lo disperso.",
            note: "01 · SaaS",
          },
          {
            glyph: "∂",
            title: "Inteligencia",
            sub: "Derivamos lo repetible.",
            note: "02 · IA aplicada",
          },
          {
            glyph: "φ",
            title: "Aprendizaje",
            sub: "Compone lo durable.",
            note: "03 · Contenido",
          },
        ].map((cell) => (
          <div
            key={cell.title}
            className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden bg-[var(--paper-soft)] p-7 md:aspect-auto md:min-h-[22rem] md:p-9"
          >
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              {cell.note}
            </span>

            <div className="my-auto flex flex-col items-start">
              <span
                aria-hidden
                className="font-display italic text-[clamp(7rem,16vw,12rem)] leading-[0.85] tracking-[-0.04em] text-[var(--ink)] transition-transform duration-700 group-hover:-translate-y-1"
              >
                {cell.glyph}
              </span>
            </div>

            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="font-display text-[1.5rem] leading-tight tracking-[-0.012em] text-[var(--ink)]">
                  {cell.title}
                </p>
                <p className="mt-1 text-[0.92rem] text-[var(--ink-muted)]">{cell.sub}</p>
              </div>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
