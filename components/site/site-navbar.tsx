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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navBgClass = scrolled
    ? "bg-[rgb(255_255_255_/_0.78)] backdrop-blur-2xl"
    : "bg-[var(--paper)]";

  return (
    <header className="sticky top-0 z-50">
      <div
        className={
          "relative border-b border-[var(--rule)] transition-[background-color,backdrop-filter] duration-300 " +
          navBgClass
        }
      >
        <div className="container-shell flex h-12 items-center justify-between gap-8 md:h-14">
          {/* Wordmark */}
          <a
            href="#inicio"
            className="text-[1.05rem] font-bold tracking-[-0.022em] text-[var(--ink)] transition hover:text-[var(--ink-strong)]"
          >
            {brand.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={
                    "text-[0.84rem] font-medium tracking-[-0.005em] transition " +
                    (isActive
                      ? "text-[var(--ink)]"
                      : "text-[var(--ink-muted)] hover:text-[var(--ink)]")
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="hidden h-9 items-center gap-1.5 rounded-full bg-[var(--ink)] px-4 text-[0.84rem] font-medium text-[var(--paper)] transition hover:bg-[var(--ink-strong)] sm:inline-flex"
            >
              Agendar demo
            </a>
            <button
              type="button"
              aria-label={open ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full text-[var(--ink)] transition hover:bg-[var(--surface)] md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={reduce ? false : { rotate: -90, opacity: 0 }}
                    animate={reduce ? undefined : { rotate: 0, opacity: 1 }}
                    exit={reduce ? undefined : { rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2, ease }}
                  >
                    <X className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="m"
                    initial={reduce ? false : { rotate: 90, opacity: 0 }}
                    animate={reduce ? undefined : { rotate: 0, opacity: 1 }}
                    exit={reduce ? undefined : { rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2, ease }}
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
            transition={{ duration: 0.2, ease }}
            className="fixed inset-x-0 top-12 z-40 h-[calc(100dvh-3rem)] overflow-y-auto bg-[var(--paper)] md:hidden"
          >
            <div className="container-shell flex h-full flex-col justify-between py-8">
              <nav className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease, delay: i * 0.04 }}
                    className="group flex items-center justify-between border-b border-[var(--rule)] py-5"
                  >
                    <span className="text-[1.8rem] font-semibold tracking-[-0.024em] text-[var(--ink)]">
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-[var(--ink-subtle)] transition group-hover:text-[var(--ink)]" />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 space-y-4">
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="flex h-12 w-full items-center justify-between rounded-full bg-[var(--ink)] px-6 text-[0.95rem] font-medium text-[var(--paper)]"
                >
                  Agendar demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="text-[0.9rem] text-[var(--ink-muted)]">{brand.email}</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
