import { ButtonLink } from "@/components/site/button-link";
import { navItems } from "@/lib/site-data";

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.05] bg-[rgba(11,16,32,0.72)] backdrop-blur-xl">
      <div className="container-shell flex h-[4.75rem] items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-sm font-semibold tracking-[0.18em] text-white">
            MG
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">Mathgram</p>
            <p className="text-xs text-white/[0.44]">De conocimiento a sistemas</p>
          </div>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/[0.62] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ButtonLink href="#contacto" className="hidden sm:inline-flex">
          Agendar demo
        </ButtonLink>
      </div>
    </header>
  );
}
