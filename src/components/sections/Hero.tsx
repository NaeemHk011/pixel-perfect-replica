import { GoldButton, GhostButton } from "@/components/ui/Fancy";

export function Hero() {
  const stats = [
    ["98%", "Satisfaction Rate"],
    ["12 min", "Avg. Wait Time"],
    ["500+", "Appointments Monthly"],
    ["4.9/5", "Patient Rating"],
  ] as const;

  return (
    <section className="relative bg-dark text-cream overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute inset-0 gold-glow" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-40 pb-24 md:pt-48 md:pb-32 text-center">
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
          A behavioral health ecosystem built for people — combining clinical excellence with genuine human connection.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <GoldButton to="/booking">Book Appointment</GoldButton>
          <GhostButton to="/services" light>View Services</GhostButton>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map(([n, l]) => (
            <div key={l} className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-6 text-left hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold3/60 to-transparent" />
              <div className="font-serif text-3xl md:text-4xl text-cream">{n}</div>
              <div className="text-[11px] mt-2 tracking-[0.18em] uppercase text-cream/50">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill="#F9F6F1" />
      </svg>
    </section>
  );
}
