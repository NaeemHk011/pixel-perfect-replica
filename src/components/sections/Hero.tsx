import { GoldButton, GhostButton } from "@/components/ui/Fancy";

const pillars = [
  "Mental Wellness",
  "Behavioral Health",
  "Virtual Care",
  "Coaching",
  "Provider Infrastructure",
  "integrated support systems"
] as const;

const stats = [
  { value: "98%",   label: "Satisfaction Rate", accent: "bg-blue-400"   },
  { value: "24h",   label: "Response Time",      accent: "bg-emerald-400" },
  { value: "500+",  label: "Monthly Sessions",   accent: "bg-violet-400"  },
  { value: "4.9/5", label: "Patient Rating",     accent: "bg-gold3"       },
] as const;

export function Hero() {
  return (
    <section className="relative bg-dark text-cream overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute inset-0 gold-glow" />

      {/* Decorative color orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-blue-500/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-violet-500/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/2 w-56 h-56 rounded-full bg-emerald-500/[0.05] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-40 pb-24 md:pt-48 md:pb-32 text-center">

        {/* Live badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold2/30 bg-white/5 backdrop-blur-sm text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.24em] uppercase text-gold2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span>Accepting New Clients</span>
          <span className="hidden sm:inline">· All 50 States</span>
        </span>

        {/* Headline */}
        <h1 className="mt-8 font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight">
          Your Path to{" "}
          <em className="text-gold3 italic font-serif">Healing</em>
          <br />
          Starts Here.
        </h1>

        {/* Subheadline */}
        <p className="mt-7 mx-auto max-w-2xl text-sm md:text-base text-cream/65 leading-relaxed">
          Mindova connects individuals with licensed therapists, psychiatrists, coaches, and wellness professionals  - virtually, compassionately, and affordably.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <GoldButton to="/get-matched">Get Support</GoldButton>
          <GhostButton to="/get-matched" light>Start Your Wellness Journey</GhostButton>
        </div>

        {/* Stat cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map(({ value, label, accent }) => (
            <div
              key={label}
              className="relative bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-6 text-left hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold3/60 to-transparent" />
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${accent} opacity-50`} />
              <div className="font-serif text-3xl md:text-4xl text-cream">{value}</div>
              <div className="text-[11px] mt-2 tracking-[0.18em] uppercase text-cream/50">{label}</div>
            </div>
          ))}
        </div>

        {/* Messaging pillars */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {pillars.map((p) => (
            <span
              key={p}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs tracking-[0.16em] uppercase text-cream/50 hover:text-gold3 hover:border-gold2/30 transition-colors duration-200 cursor-default"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom golden glow fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(184,144,64,0.18) 60%, rgba(207,168,78,0.32) 100%)" }}
      />

      {/* Wave divider */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="goldWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#B89040" />
            <stop offset="40%"  stopColor="#E4C06A" />
            <stop offset="65%"  stopColor="#CFA84E" />
            <stop offset="100%" stopColor="#B89040" />
          </linearGradient>
        </defs>
        <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill="url(#goldWaveGrad)" />
      </svg>
    </section>
  );
}
