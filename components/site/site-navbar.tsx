"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import { brand, navItems } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("inicio");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navBgClass = scrolled
    ? "bg-[rgb(244_240_230_/_0.82)] backdrop-blur-xl"
    : "bg-[var(--paper)]";

  return (
    <header className="sticky top-0 z-50">
      {/* Edition masthead strip */}
      <motion.div
        initial={false}
        animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.45, ease }}
        className="overflow-hidden bg-[var(--paper)]"
      >
        <div className="border-b border-[var(--rule)]">
          <div className="container-shell flex h-9 items-center justify-between gap-6 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
            <span className="flex items-center gap-3">
              <span aria-hidden className="block h-1 w-1 rounded-full bg-[var(--accent-warm)]" />
              <span>MMXXVI &middot; Ed. I</span>
              <span className="hidden text-[var(--ink-whisper)] sm:inline">/</span>
              <span className="hidden sm:inline">{brand.tagline}</span>
            </span>
            <span className="hidden items-center gap-3 md:flex">
              <span>Estudio de sistemas</span>
              <span className="text-[var(--ink-whisper)]">/</span>
              <span>Bogot&aacute; &rarr; &infin;</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="hidden md:inline">Disponibles para Q3</span>
              <span aria-hidden className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent-warm)] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-warm)]" />
              </span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main navbar */}
      <div
        className={
          "relative border-b border-[var(--rule)] transition-[background-color,backdrop-filter] duration-300 " +
          navBgClass
        }
      >
        <div className="container-shell flex h-[4.6rem] items-center justify-between gap-8 md:h-[5.2rem]">
          {/* Logo lockup */}
          <a href="#inicio" className="group flex items-end gap-2.5">
            <span
              aria-hidden
              className="font-display italic text-[clamp(2.2rem,3.4vw,2.8rem)] leading-[0.85] tracking-[-0.04em] text-[var(--ink)]"
            >
              M
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[clamp(1.15rem,1.6vw,1.35rem)] tracking-[-0.018em] text-[var(--ink)]">
                Mathgram
              </span>
              <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
                Est. MMXXVI
              </span>
            </span>
            <span
              aria-hidden
              className="ml-1 mb-1 hidden h-1 w-1 rounded-full bg-[var(--accent-warm)] transition-transform duration-500 group-hover:scale-150 sm:block"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item, i) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative flex items-center gap-2 px-3 py-2 text-[0.88rem]"
                >
                  <span
                    className={
                      "font-mono text-[0.62rem] tracking-[0.18em] transition " +
                      (isActive
                        ? "text-[var(--accent-warm)]"
                        : "text-[var(--ink-whisper)] group-hover:text-[var(--ink-faint)]")
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={
                      "relative transition " +
                      (isActive
                        ? "text-[var(--ink)]"
                        : "text-[var(--ink-muted)] group-hover:text-[var(--ink)]")
                    }
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={
                        "absolute -bottom-1 left-0 h-px bg-[var(--ink)] transition-all duration-500 ease-out " +
                        (isActive ? "w-full" : "w-0 group-hover:w-full")
                      }
                    />
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <NavCta />
            <button
              type="button"
              aria-label={open ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center border border-[var(--rule-strong)] text-[var(--ink)] transition hover:border-[var(--ink)] md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={reduce ? false : { rotate: -90, opacity: 0 }}
                    animate={reduce ? undefined : { rotate: 0, opacity: 1 }}
                    exit={reduce ? undefined : { rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25, ease }}
                  >
                    <X className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="m"
                    initial={reduce ? false : { rotate: 90, opacity: 0 }}
                    animate={reduce ? undefined : { rotate: 0, opacity: 1 }}
                    exit={reduce ? undefined : { rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25, ease }}
                  >
                    <Menu className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="fixed inset-x-0 top-[calc(2.25rem+4.6rem)] z-40 h-[calc(100dvh-2.25rem-4.6rem)] overflow-y-auto bg-[var(--paper)] md:hidden"
          >
            <div className="container-shell flex h-full flex-col justify-between py-10">
              <nav className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease, delay: i * 0.05 }}
                    className="group flex items-baseline justify-between border-b border-[var(--rule)] py-5"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-[0.7rem] tracking-[0.2em] text-[var(--ink-faint)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[2.4rem] leading-none tracking-[-0.02em] text-[var(--ink)]">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-[var(--ink-faint)] transition group-hover:text-[var(--ink)]" />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-10 space-y-6">
                <NavCta full />
                <div className="flex items-center justify-between font-mono text-[0.66rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                  <span>{brand.email}</span>
                  <span className="flex items-center gap-2">
                    Disponibles
                    <span className="block h-1.5 w-1.5 rounded-full bg-[var(--accent-warm)]" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function NavCta({ full = false }: { full?: boolean }) {
  const base =
    "group relative inline-flex h-11 items-center gap-3 overflow-hidden rounded-full bg-[var(--ink)] pl-5 pr-1.5 text-[0.88rem] font-medium text-[var(--paper)] transition hover:bg-[var(--ink-strong)]";
  const layout = full ? "w-full justify-between" : "hidden sm:inline-flex";

  return (
    <a href="#contacto" className={base + " " + layout}>
      <span className="flex items-center gap-2">
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.22em] opacity-55">
          01
        </span>
        <span>Agendar demo</span>
      </span>
      <span
        aria-hidden
        className="grid h-8 w-8 place-items-center rounded-full bg-[var(--paper)] text-[var(--ink)] transition-transform duration-500 ease-out group-hover:rotate-45"
      >
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
      </span>
    </a>
  );
}
