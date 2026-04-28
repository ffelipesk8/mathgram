import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const base =
    "group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[0.92rem] font-medium tracking-[-0.005em] transition";

  const styles =
    variant === "primary"
      ? "bg-[var(--ink)] text-[var(--paper)] hover:-translate-y-0.5 hover:bg-[var(--ink-strong)]"
      : "border border-[var(--rule-strong)] text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--paper-soft)]";

  return (
    <a href={href} className={cn(base, styles, className)}>
      {children}
    </a>
  );
}
