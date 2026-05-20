import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Theme = {
  bg: string;
  border: string;
  iconBg: string;
  iconColor: string;
  numColor: string;
  topBar: string;
  glowClass: string;
};

const themes: Theme[] = [
  {
    bg: "bg-white/[0.04]",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/15 group-hover:bg-blue-500/28",
    iconColor: "text-blue-400 group-hover:text-blue-300",
    numColor: "text-blue-500/22 group-hover:text-blue-400/38",
    topBar: "from-blue-500/20 via-blue-400/60 to-blue-500/20",
    glowClass: "svc-glow-blue",
  },
  {
    bg: "bg-white/[0.04]",
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/15 group-hover:bg-violet-500/28",
    iconColor: "text-violet-400 group-hover:text-violet-300",
    numColor: "text-violet-500/22 group-hover:text-violet-400/38",
    topBar: "from-violet-400/20 via-violet-500/60 to-violet-400/20",
    glowClass: "svc-glow-violet",
  },
  {
    bg: "bg-white/[0.04]",
    border: "border-rose-500/20",
    iconBg: "bg-rose-500/15 group-hover:bg-rose-500/28",
    iconColor: "text-rose-400 group-hover:text-rose-300",
    numColor: "text-rose-500/22 group-hover:text-rose-400/38",
    topBar: "from-rose-400/20 via-rose-500/60 to-rose-400/20",
    glowClass: "svc-glow-rose",
  },
  {
    bg: "bg-white/[0.04]",
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/15 group-hover:bg-emerald-500/28",
    iconColor: "text-emerald-400 group-hover:text-emerald-300",
    numColor: "text-emerald-500/22 group-hover:text-emerald-400/38",
    topBar: "from-emerald-400/20 via-emerald-500/60 to-emerald-400/20",
    glowClass: "svc-glow-emerald",
  },
  {
    bg: "bg-white/[0.04]",
    border: "border-orange-500/20",
    iconBg: "bg-orange-500/15 group-hover:bg-orange-500/28",
    iconColor: "text-orange-400 group-hover:text-orange-300",
    numColor: "text-orange-500/22 group-hover:text-orange-400/38",
    topBar: "from-orange-400/20 via-orange-500/60 to-orange-400/20",
    glowClass: "svc-glow-orange",
  },
  {
    bg: "bg-white/[0.04]",
    border: "border-amber-500/20",
    iconBg: "bg-amber-500/15 group-hover:bg-amber-500/28",
    iconColor: "text-amber-400 group-hover:text-amber-300",
    numColor: "text-amber-500/22 group-hover:text-amber-400/38",
    topBar: "from-amber-400/20 via-amber-500/60 to-amber-400/20",
    glowClass: "svc-glow-amber",
  },
];

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-24 md:py-32 bg-dark relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute inset-0 gold-glow pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-80 h-80 rounded-full bg-blue-500/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-80 h-80 rounded-full bg-violet-500/[0.05] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {heading && (
          <div className="flex flex-col items-center text-center mb-16 reveal">
            <SectionLabel light>What We Offer</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight text-cream">
              Specialized Care for{" "}
              <em className="text-gold3 not-italic font-serif italic">Modern Living</em>
            </h2>
            <p className="mt-4 text-cream/55 text-sm max-w-md">
              Evidence-based care across therapy, psychiatry, and wellness       all under one roof.
            </p>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            const t = themes[i % themes.length];
            return (
              <div
                key={s.id}
                data-reveal-delay={String(i * 75)}
                className={`w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] group relative rounded-[20px] p-7 border transition-all duration-500 hover:bg-white/[0.08] hover:border-gold2/30 hover:-translate-y-1.5 cursor-pointer reveal overflow-hidden ${t.bg} ${t.border} ${t.glowClass}`}
              >
                {/* Colored top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${t.topBar} transition-opacity duration-500 group-hover:opacity-0`}
                />
                {/* Gold shimmer on hover */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold3/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start justify-between mb-7">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${t.iconBg}`}>
                    <Icon className={`w-5 h-5 transition-colors duration-500 ${t.iconColor}`} />
                  </div>
                  <span className={`text-3xl font-serif leading-none transition-colors duration-500 ${t.numColor}`}>
                    {s.number}
                  </span>
                </div>

                <h3 className="font-serif text-[1.35rem] text-cream group-hover:text-gold3 transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/55 group-hover:text-cream/80 transition-colors duration-500">
                  {s.shortDesc}
                </p>

                {s.link && (
                  <Link
                    to={s.link as any}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-gold2 group-hover:text-gold3 transition-colors duration-500"
                  >
                    <span>Learn More</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
