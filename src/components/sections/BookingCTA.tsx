import { Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Clock, Star, CheckCircle2 } from "lucide-react";

const perks = [
  { icon: CheckCircle2, label: "No waitlists" },
  { icon: Shield,       label: "Insurance accepted" },
  { icon: Clock,        label: "Same-week availability" },
];

const stats = [
  { value: "1,200+", label: "Patients This Year" },
  { value: "4.9/5",  label: "Average Rating"     },
  { value: "98%",    label: "Would Recommend"     },
];

export function BookingCTA() {
  return (
    <section className="py-20 md:py-28 bg-dark relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-dark text-cream p-10 md:p-16">
          {/* Background layers */}
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
          <div className="absolute inset-0 gold-glow pointer-events-none" />

          {/* Decorative orbs */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gold2/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-1/4 w-40 h-40 rounded-full bg-blue-500/[0.08] blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -left-8 w-32 h-32 rounded-full bg-violet-500/[0.06] blur-3xl pointer-events-none" />

          {/* Watermark */}
          <div className="absolute -right-8 -bottom-16 font-serif text-[22rem] leading-none text-white/[0.025] select-none pointer-events-none">M</div>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_auto] gap-12 items-center">

            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gradient text-gold3 text-[11px] tracking-[0.22em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold3 animate-pulse" />
                Accepting New Patients
              </span>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
                Start your{" "}
                <em className="text-gold3 italic">wellness journey</em>
              </h2>
              <p className="mt-4 text-cream/65 max-w-xl text-sm leading-relaxed">
                Real support when you need it most. Whether you're seeking therapy, psychiatric care, coaching, or wellness guidance  - our care coordinators will match you with the right provider within 24–48 hours.
              </p>

              {/* Perks */}
              <div className="flex flex-wrap gap-4 mt-6">
                {perks.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-xs text-cream/60">
                    <div className="w-6 h-6 rounded-full bg-gold2/15 border border-gold2/20 flex items-center justify-center">
                      <Icon className="w-3 h-3 text-gold3" />
                    </div>
                    {label}
                  </div>
                ))}
              </div>

              {/* Social proof stats */}
              <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-white/8">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-serif text-2xl text-gold3">{value}</p>
                    <p className="text-[11px] tracking-[0.16em] uppercase text-cream/45 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right  - two CTA buttons */}
            <div className="flex flex-col items-start lg:items-end gap-4">
              <Link
                to="/get-matched"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_12px_30px_-12px_rgba(207,168,78,0.6)]"
              >
                Get Support <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/get-matched"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 border border-cream/20 text-cream hover:bg-white/5 font-medium px-8 py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Get Matched <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-cream/40 tracking-wider text-center lg:text-right">Insurance Accepted · Self-Pay Available</p>

              {/* Star row */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold2 text-gold2" />
                ))}
                <span className="text-xs text-cream/50 ml-1">4.9 / 5 · 300+ reviews</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
