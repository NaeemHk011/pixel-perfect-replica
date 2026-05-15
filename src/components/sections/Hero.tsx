import { GoldButton, GhostButton } from "@/components/ui/Fancy";

export function Hero() {
  const stats = [
    { value: "98%", label: "Satisfaction Rate", accent: "bg-blue-400" },
    { value: "12 min", label: "Avg. Wait Time", accent: "bg-emerald-400" },
    { value: "500+", label: "Monthly Sessions", accent: "bg-violet-400" },
    { value: "4.9/5", label: "Patient Rating", accent: "bg-gold3" },
  ] as const;

  return (
    <section className="relative bg-dark text-cream overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute inset-0 gold-glow" />

      {/* Decorative color orbs   GPU-composited, no layout impact */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-blue-500/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-violet-500/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/2 w-56 h-56 rounded-full bg-emerald-500/[0.05] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-40 pb-24 md:pt-48 md:pb-32 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold2/30 bg-white/5 backdrop-blur-sm text-xs tracking-[0.24em] uppercase text-gold2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Telehealth · First Therapists
        </span>

        <h1 className="mt-8 font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight">
          Modern Care,
          <br />
          <em className="text-gold3 italic font-serif">Handled with Heart.</em>
        </h1>

        <p className="mt-7 mx-auto max-w-xl text-sm md:text-base text-cream/65 leading-relaxed">
          A behavioral health ecosystem built for people   combining clinical excellence with genuine human connection.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <GoldButton to="/booking">Book Appointment</GoldButton>
          <GhostButton to="/services" light>View Services</GhostButton>
        </div>

        {/* Stat cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map(({ value, label, accent }) => (
            <div
              key={label}
              className="relative bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-6 text-left hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
            >
              {/* Top shimmer line */}
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold3/60 to-transparent" />
              {/* Bottom color accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${accent} opacity-50`} />
              <div className="font-serif text-3xl md:text-4xl text-cream">{value}</div>
              <div className="text-[11px] mt-2 tracking-[0.18em] uppercase text-cream/50">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill="#F9F6F1" />
      </svg>
    </section>
  );
}
