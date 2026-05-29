import { SectionLabel } from "@/components/ui/SectionLabel";
import { Brain, Heart, Globe } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Evidence-Based Care",
    desc: "Every clinical service is grounded in proven therapeutic methods, delivered by licensed and credentialed professionals.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Heart,
    title: "Whole-Person Wellness",
    desc: "We address the full spectrum of health  - mental, emotional, and behavioral  - with dignity and compassion at every step.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  {
    icon: Globe,
    title: "Accessible to All",
    desc: "Virtual care available across all 50 states  - no waitlists, no barriers, insurance-friendly pricing.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
] as const;

const stats = [
  { value: "All 50", label: "States Served" },
  { value: "500+", label: "Monthly Sessions" },
  { value: "2,400+", label: "Lives Impacted" },
  { value: "98%", label: "Would Recommend" },
] as const;

export function WellnessMission() {
  return (
    <section className="relative bg-dark text-cream py-24 md:py-32 z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute inset-0 gold-glow opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full bg-blue-500/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full bg-emerald-500/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent 0%, #CFA84E 30%, #E4C06A 50%, #CFA84E 70%, transparent 100%)" }} />

      <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
        <div className="reveal">
          <SectionLabel light>Our Mission</SectionLabel>
          <blockquote className="mt-8 font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.15] tracking-tight">
            "Making mental health care{" "}
            <em className="text-gold3 italic">accessible</em>,{" "}
            <em className="text-gold3 italic">dignified</em>,
            <br className="hidden md:block" /> and{" "}
            <em className="text-gold3 italic">effective</em>{" "}
             - for every person, in every community."
          </blockquote>
          <p className="mt-6 text-cream/55 text-sm max-w-2xl mx-auto leading-relaxed">
            At Mindova Holdings, we believe healing isn't a privilege  - it's a right. We connect individuals with licensed professionals while giving providers the infrastructure to deliver exceptional care.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
            <div
              key={title}
              className={`reveal rounded-2xl border ${border} ${bg} backdrop-blur-sm p-7 text-left`}
              data-reveal-delay={String(i * 100)}
            >
              <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className={`font-serif text-base mb-2 ${color}`}>{title}</h3>
              <p className="text-xs text-cream/55 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-10 md:gap-16 pt-10 border-t border-white/10 reveal">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <span className="font-serif text-3xl text-gold3">{value}</span>
              <p className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent 0%, #CFA84E 30%, #E4C06A 50%, #CFA84E 70%, transparent 100%)" }} />
    </section>
  );
}
