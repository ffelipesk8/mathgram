type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-accent)]">
      {children}
    </span>
  );
}
