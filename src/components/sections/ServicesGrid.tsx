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
    bg: "bg-blue-50/70",
    border: "border-blue-100",
    iconBg: "bg-blue-100 group-hover:bg-blue-900/30",
    iconColor: "text-blue-500 group-hover:text-blue-300",
    numColor: "text-blue-200 group-hover:text-gold2/30",
    topBar: "from-blue-300/40 via-blue-500/60 to-blue-300/40",
    glowClass: "svc-glow-blue",
  },
  {
    bg: "bg-violet-50/70",
    border: "border-violet-100",
    iconBg: "bg-violet-100 group-hover:bg-violet-900/30",
    iconColor: "text-violet-500 group-hover:text-violet-300",
    numColor: "text-violet-200 group-hover:text-gold2/30",
    topBar: "from-violet-300/40 via-violet-500/60 to-violet-300/40",
    glowClass: "svc-glow-violet",
  },
  {
    bg: "bg-rose-50/70",
    border: "border-rose-100",
    iconBg: "bg-rose-100 group-hover:bg-rose-900/30",
    iconColor: "text-rose-500 group-hover:text-rose-300",
    numColor: "text-rose-200 group-hover:text-gold2/30",
    topBar: "from-rose-300/40 via-rose-500/60 to-rose-300/40",
    glowClass: "svc-glow-rose",
  },
  {
    bg: "bg-emerald-50/70",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100 group-hover:bg-emerald-900/30",
    iconColor: "text-emerald-600 group-hover:text-emerald-300",
    numColor: "text-emerald-200 group-hover:text-gold2/30",
    topBar: "from-emerald-300/40 via-emerald-500/60 to-emerald-300/40",
    glowClass: "svc-glow-emerald",
  },
  {
    bg: "bg-orange-50/70",
    border: "border-orange-100",
    iconBg: "bg-orange-100 group-hover:bg-orange-900/30",
    iconColor: "text-orange-500 group-hover:text-orange-300",
    numColor: "text-orange-200 group-hover:text-gold2/30",
    topBar: "from-orange-300/40 via-orange-500/60 to-orange-300/40",
    glowClass: "svc-glow-orange",
  },
  {
    bg: "bg-amber-50/70",
    border: "border-amber-100",
    iconBg: "bg-amber-100 group-hover:bg-amber-900/30",
    iconColor: "text-amber-600 group-hover:text-amber-300",
    numColor: "text-amber-200 group-hover:text-gold2/30",
    topBar: "from-amber-300/40 via-amber-500/60 to-amber-300/40",
    glowClass: "svc-glow-amber",
  },
];

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-24 md:py-32 bg-cream relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {heading && (
          <div className="flex flex-col items-center text-center mb-16 reveal">
            <SectionLabel>What We Offer</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
              Specialized Care for{" "}
              <em className="text-gold not-italic font-serif italic">Modern Living</em>
            </h2>
            <p className="mt-4 text-muted text-sm max-w-md">
              Evidence-based care across therapy, psychiatry, and wellness   all under one roof.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            const t = themes[i % themes.length];
            return (
              <div
                key={s.id}
                data-reveal-delay={String(i * 75)}
                className={`group relative rounded-[20px] p-7 border transition-all duration-500 hover:bg-dark hover:border-white/5 hover:-translate-y-1.5 cursor-pointer reveal overflow-hidden ${t.bg} ${t.border} ${t.glowClass}`}
              >
                {/* Colored top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${t.topBar} transition-opacity duration-500 group-hover:opacity-0`}
                />
                {/* Gold shimmer on hover */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold3/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start justify-between mb-7">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${t.iconBg}`}
                  >
                    <Icon className={`w-5 h-5 transition-colors duration-500 ${t.iconColor}`} />
                  </div>
                  <span
                    className={`text-3xl font-serif leading-none transition-colors duration-500 ${t.numColor}`}
                  >
                    {s.number}
                  </span>
                </div>

                <h3 className="font-serif text-[1.35rem] text-dark group-hover:text-gold3 transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted group-hover:text-cream/70 transition-colors duration-500">
                  {s.shortDesc}
                </p>

                {/* Learn More link */}
                {s.link && (
                  <Link
                    to={s.link as any}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-gold group-hover:text-gold3 transition-colors duration-500"
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
