import { SectionLabel } from "@/components/ui/SectionLabel";
export function PageHero({ eyebrow, title, emphasis, subtitle }: { eyebrow: string; title: string; emphasis: string; subtitle: string }) {
  return (
    <section className="relative bg-dark text-cream overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="absolute inset-0 gold-glow" />
      <div className="relative max-w-5xl mx-auto px-5 md:px-8 pt-40 pb-24 md:pt-48 md:pb-28 text-center">
        <div className="flex justify-center"><SectionLabel light>{eyebrow}</SectionLabel></div>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight">
          {title} <em className="text-gold3 italic">{emphasis}</em>
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-sm md:text-base text-cream/65 leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}
