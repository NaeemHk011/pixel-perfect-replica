export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-xs tracking-[0.28em] uppercase font-medium ${light ? "text-gold3" : "text-gold"}`}>
      <span className={`h-px w-10 ${light ? "bg-gold3/50" : "bg-gold/50"}`} />
      <span>{children}</span>
    </div>
  );
}
