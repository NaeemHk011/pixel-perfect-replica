import { services } from "@/data/services";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-24 md:py-32 bg-cream relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {heading && (
          <div className="flex flex-col items-center text-center mb-16 reveal">
            <SectionLabel>What We Offer</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
              Specialized Care for <em className="text-gold not-italic font-serif italic">Modern Living</em>
            </h2>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="group relative bg-white border border-black/5 rounded-[20px] p-7 transition-all duration-500 hover:bg-dark hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(12,11,9,0.5)] cursor-pointer reveal"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-cream2 group-hover:bg-white/5 flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-gold2" />
                  </div>
                  <span className="text-3xl font-serif text-dark/15 group-hover:text-gold2/40 transition-colors">{s.number}</span>
                </div>
                <h3 className="font-serif text-2xl text-dark group-hover:text-gold3 transition-colors">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted group-hover:text-cream/70 transition-colors">{s.shortDesc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
