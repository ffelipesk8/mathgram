type SectionLabelProps = {
  number?: string;
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[var(--ink-muted)]">
      <span aria-hidden className="block h-px w-6 bg-[var(--ink-muted)]" />
      <span>{children}</span>
    </span>
  );
}
