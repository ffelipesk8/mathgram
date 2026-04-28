type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-white/[0.68]">
      {children}
    </span>
  );
}
