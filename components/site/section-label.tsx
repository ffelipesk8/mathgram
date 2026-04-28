type SectionLabelProps = {
  number?: string;
  children: React.ReactNode;
};

export function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[var(--ink-faint)]">
      <span aria-hidden className="block h-1.5 w-1.5 rounded-full bg-[var(--accent-warm)]" />
      {number ? <span className="text-[var(--ink-muted)]">{number}</span> : null}
      <span>{children}</span>
    </span>
  );
}
