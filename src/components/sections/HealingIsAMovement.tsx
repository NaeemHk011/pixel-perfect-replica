import { Link } from "@tanstack/react-router";
import { Heart, Globe, Gift, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Donate 3–6 Hours",
    desc: "Donate 3–6 hours of in-kind service to support community wellness initiatives through the Ferguson Foundation.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  {
    icon: Globe,
    title: "Support The Mission",
    desc: "One time helps provide free mental health and wellness resources to individuals and families in need.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Gift,
    title: "6 Months Free Access",
    desc: "Receive 6 months of complimentary access to the Mindova platform as a Preferred Partner.",
    color: "text-gold3",
    bg: "bg-gold2/10",
    border: "border-gold2/25",
  },
] as const;

export function HealingIsAMovement() {
  return (
    <section className="relative bg-dark text-cream overflow-hidden py-24 md:py-32 z-10">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute inset-0 gold-glow opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full bg-rose-500/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full bg-blue-500/[0.05] blur-3xl pointer-events-none" />

      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent 0%, #CFA84E 30%, #E4C06A 50%, #CFA84E 70%, transparent 100%)" }} />

      <div className="relative max-w-5xl mx-auto px-5 md:px-8">

        {/* ── Brand Header ── */}
        <div className="text-center mb-12">
          {/* "HEALING IS A MOVEMENT" brand statement */}
          <div className="inline-flex flex-col items-center gap-1 mb-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gold2/40" />
              <span
                className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.12em] uppercase"
                style={{ background: "linear-gradient(90deg, #B89040, #E4C06A, #CFA84E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Healing Is A Movement
              </span>
              <div className="h-px w-12 bg-gold2/40" />
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gold2" />
              <span className="text-[10px] tracking-[0.28em] uppercase text-gold2/70 font-medium">with Mindova Holdings</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold2" />
            </div>
          </div>

          {/* Program title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-cream">
            Mindova Holdings{" "}
            <em className="text-gold3 italic">Preferred Partner</em>
            <br />Program
          </h2>
          <p className="mt-4 text-lg md:text-xl font-serif text-cream/70 italic">
            Partner With Purpose. Impact Your Community.
          </p>

          {/* Description */}
          <p className="mt-5 text-sm text-cream/55 leading-relaxed max-w-2xl mx-auto">
            As a preferred partner, you receive complimentary access to Mindova's platform while helping us bring healing, support, and resources to the communities we serve.
          </p>

          {/* Fee Waiver Detail */}
          <div className="mt-5 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold2/30 bg-gold2/10">
            <span className="text-xs tracking-[0.2em] uppercase text-gold2 font-semibold">
              After 3–6 Months: Monthly Management Fee Waived
            </span>
          </div>
        </div>

        {/* ── Three Benefit Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {benefits.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
            <div
              key={title}
              className={`rounded-2xl border ${border} ${bg} backdrop-blur-sm p-7 text-center reveal`}
              data-reveal-delay={String(i * 100)}
            >
              <div className={`w-12 h-12 rounded-2xl ${bg} border ${border} flex items-center justify-center mx-auto mb-4`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className={`font-serif text-lg mb-3 ${color}`}>{title}</h3>
              <p className="text-sm text-cream/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── CTA + Ferguson Foundation ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* CTA Button */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <Link
              to="/partnerships"
              className="inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-bold px-8 py-3.5 rounded-full text-sm tracking-[0.12em] uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_32px_-8px_rgba(207,168,78,0.6)] group"
            >
              Become a Preferred Partner
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <span className="text-xs text-cream/35 tracking-wide">No cost to apply · Review within 5 business days</span>
          </div>

          {/* Ferguson Foundation Badge */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.05]">
              <div className="w-8 h-8 rounded-full bg-gold2/20 border border-gold2/30 flex items-center justify-center flex-shrink-0">
                <Heart className="w-4 h-4 text-gold3" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold2/70 font-medium leading-none">In Partnership With</p>
                <p className="font-serif text-sm text-cream mt-0.5">Ferguson Foundation</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent 0%, #CFA84E 30%, #E4C06A 50%, #CFA84E 70%, transparent 100%)" }} />
    </section>
  );
}
