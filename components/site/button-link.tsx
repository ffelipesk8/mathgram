import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-[0.01em]",
        variant === "primary"
          ? "bg-[linear-gradient(135deg,#f7fbff_0%,#8ee3ff_130%)] text-slate-950 shadow-[0_20px_80px_rgba(142,227,255,0.32)] hover:-translate-y-0.5"
          : "border border-white/[0.12] bg-white/[0.04] text-white hover:border-white/[0.24] hover:bg-white/[0.08]",
        className,
      )}
    >
      {children}
    </a>
  );
}
