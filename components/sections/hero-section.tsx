"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { heroCopy, stats } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section id="inicio" className="relative overflow-hidden bg-[var(--paper)]">
      <div className="container-shell pt-20 pb-18 md:pt-28 md:pb-24 lg:pt-34">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="eyebrow"
            >
              {heroCopy.eyebrow}
            </motion.p>

            <h1 className="display-hero mt-5 max-w-[12ch]">
              {heroCopy.titleLines.map((line, index) => (
                <motion.span
                  key={line}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.08 + index * 0.06 }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.28 }}
              className="lead mt-8 max-w-[56ch]"
            >
              {heroCopy.lead}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.36 }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
            >
              <a
                href={heroCopy.primaryCta.href}
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--ink)] px-7 text-[0.98rem] font-medium text-[var(--paper)] transition hover:bg-[var(--ink-strong)]"
              >
                {heroCopy.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href={heroCopy.secondaryCta.href}
                className="group inline-flex items-center gap-1 text-[0.98rem] font-medium text-[var(--accent)]"
              >
                {heroCopy.secondaryCta.label}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_right,rgba(0,102,204,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(0,102,204,0.08),transparent_36%)]" />
            <div className="relative overflow-hidden rounded-[28px] bg-[var(--surface-deep)] p-7 text-[var(--ink-on-dark)] md:p-8">
              <div className="grid-bg opacity-40" />
              <div className="relative">
                <p className="eyebrow-mono text-[var(--ink-on-dark-faint)]">
                  Sistema Mathgram
                </p>
                <div className="mt-6 rounded-[22px] border border-[var(--rule-on-dark)] bg-white/4 p-5">
                  <p className="text-sm font-medium text-[var(--ink-on-dark-muted)]">
                    Estructuramos conocimiento, aprendizaje y operaci&oacute;n en
                    una misma capa de producto.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {stats.slice(0, 3).map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[18px] border border-[var(--rule-on-dark)] bg-black/10 p-4"
                      >
                        <p className="text-[1.5rem] font-bold tracking-[-0.04em] text-[var(--ink-on-dark)]">
                          {item.value}
                        </p>
                        <p className="mt-2 text-[0.76rem] leading-5 text-[var(--ink-on-dark-faint)]">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-[20px] border border-[var(--rule-on-dark)] bg-white/4 p-5">
                    <p className="eyebrow-mono text-[var(--ink-on-dark-faint)]">
                      Capas
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-[var(--ink-on-dark-muted)]">
                      <li>SaaS conectado a operaci&oacute;n</li>
                      <li>IA con impacto utilizable</li>
                      <li>Contenido que ense&ntilde;a y alinea</li>
                    </ul>
                  </div>
                  <div className="rounded-[20px] border border-[var(--rule-on-dark)] bg-white/4 p-5">
                    <p className="eyebrow-mono text-[var(--ink-on-dark-faint)]">
                      Resultado
                    </p>
                    <p className="mt-4 text-[1.35rem] font-semibold leading-7 tracking-[-0.02em] text-[var(--ink-on-dark)]">
                      Claridad estructural para crecer sin perder coherencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
