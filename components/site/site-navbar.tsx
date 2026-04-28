"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { brand, navItems } from "@/lib/site-data";

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[backdrop-filter,background-color,border-color] duration-300 ${
        scrolled
          ? "border-b border-[var(--rule)] bg-[color-mix(in_oklab,var(--paper)_82%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-shell flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#inicio" className="group flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center border border-[var(--rule-strong)] font-display text-[1.05rem] italic leading-none text-[var(--ink)]"
          >
            M
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-[1.15rem] tracking-[-0.01em] text-[var(--ink)]">
              {brand.name}
            </span>
            <span className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              {brand.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.88rem] text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="#contacto" className="hidden sm:inline-flex">
            Agendar demo
          </ButtonLink>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center border border-[var(--rule-strong)] text-[var(--ink)] md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-[var(--rule)] bg-[var(--paper-soft)]`}
      >
        <div className="container-shell flex flex-col gap-1 py-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-[var(--rule)] py-3 font-display text-[1.4rem] tracking-[-0.01em] text-[var(--ink)]"
            >
              <span>{item.label}</span>
              <span className="font-mono text-[0.7rem] tracking-[0.2em] text-[var(--ink-faint)]">
                {String(navItems.indexOf(item) + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
          <ButtonLink href="#contacto" className="mt-5 w-full">
            Agendar demo
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
