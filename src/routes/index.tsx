import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldButton, GhostButton } from "@/components/ui/Fancy";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { providers } from "@/data/providers";
import { testimonials } from "@/data/testimonials";
import { Star, Quote, Infinity as InfinityIcon, ArrowRight, TrendingUp, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>
        <Hero />
        <TrustStrip />
        <IntroSection />
        <InsuranceStrip />
        <ServicesGrid />
        <HowItWorks />
        <ProvidersSnippet />
        <CommunitySection />
        <TestimonialSection />
        <FAQSection />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ─── Stat Box ──────────────────────────────────────────────── */
type StatVariant = "blue" | "dark" | "gold" | "emerald";
function StatBox({ value, label, variant }: { value: string; label: string; variant: StatVariant }) {
  const cfg: Record<StatVariant, { wrap: string; val: string; lbl: string }> = {
    blue:    { wrap: "bg-blue-500 border border-blue-400/30 shadow-[0_16px_40px_-16px_rgba(59,130,246,0.45)]",      val: "text-white", lbl: "text-white/65" },
    dark:    { wrap: "bg-dark border border-white/5 shadow-[0_16px_40px_-16px_rgba(12,11,9,0.35)]",                  val: "text-cream", lbl: "text-cream/55" },
    gold:    { wrap: "bg-gold2 border border-gold3/30 shadow-[0_16px_40px_-16px_rgba(207,168,78,0.55)]",             val: "text-dark",  lbl: "text-dark/65"  },
    emerald: { wrap: "bg-emerald-500 border border-emerald-400/30 shadow-[0_16px_40px_-16px_rgba(16,185,129,0.45)]", val: "text-white", lbl: "text-white/65" },
  };
  const { wrap, val, lbl } = cfg[variant];
  return (
    <div className={`${wrap} rounded-2xl p-6 min-h-[148px] flex flex-col justify-between`}>
      <span className={`font-serif text-4xl md:text-5xl ${val}`}>{value}</span>
      <span className={`text-[11px] tracking-[0.2em] uppercase ${lbl}`}>{label}</span>
    </div>
  );
}

/* ─── Intro Section ─────────────────────────────────────────── */
function IntroSection() {
  return (
    <section className="py-24 md:py-32 bg-cream relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <SectionLabel>About Us</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
            At Mindova, we believe{" "}
            <em className="text-gold italic">healing is a movement.</em>
          </h2>
          <p className="mt-6 text-muted text-sm leading-relaxed max-w-lg">
            We listen first. Every care plan is co-created with the patient       combining clinical excellence with genuine human connection.
          </p>
          <p className="mt-4 text-muted text-sm leading-relaxed max-w-lg">
            By treating people, not symptoms, we deliver care that's accessible, dignified, and built around your life       not the other way around.
          </p>
          <div className="mt-8">
            <GoldButton to="/booking">Book a Consultation</GoldButton>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 reveal" data-reveal-delay="120">
          <StatBox value="98%" label="Satisfaction Rate" variant="blue" />
          <StatBox value="24h" label="Response Access" variant="dark" />
          <StatBox value="500+" label="Monthly Sessions" variant="gold" />
          <StatBox value="4.9★" label="Patient Rating" variant="emerald" />
        </div>
      </div>
    </section>
  );
}

/* ─── Insurance Strip ────────────────────────────────────────── */
function InsuranceStrip() {
  const partners = [
    "Aetna", "Blue Cross Blue Shield", "Cigna", "United Healthcare",
    "Humana", "Anthem", "Magellan Health", "Beacon Health Options",
  ];

  return (
    <div className="relative bg-dark3 border-y border-white/5 py-8 z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold2/[0.06] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p className="text-center text-[10px] tracking-[0.3em] uppercase text-gold2/60 mb-6">
          Insurance Accepted
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {partners.map((p) => (
            <span
              key={p}
              className="font-serif text-base md:text-lg text-cream/30 hover:text-gold3 transition-colors duration-300 cursor-default tracking-wide"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Providers Snippet ──────────────────────────────────────── */
const avatarColors = [
  "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "bg-rose-500/20 text-rose-300 border-rose-500/30",
  "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
];

function ProvidersSnippet() {
  const featured = providers[0];
  const others = providers.slice(1, 4);
  const specialties = ["LPC", "LCSW", "LMFT", "PMHNP", "Psychiatrist"];

  return (
    <section className="py-24 md:py-32 bg-dark relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute inset-0 gold-glow opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-violet-500/[0.05] blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1.05fr_1.2fr] gap-14 items-start">
        <div className="reveal">
          <SectionLabel light>Our Network</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight text-cream">
            A curated collective of{" "}
            <em className="text-gold3 italic">board-certified specialists</em>
          </h2>
          <p className="mt-6 text-cream/60 text-sm leading-relaxed max-w-md">
            Every clinician on Mindova is vetted, licensed, and selected for clinical excellence       and genuine care.
          </p>
          <div className="flex flex-wrap gap-2 mt-7">
            {specialties.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs tracking-wider text-cream/70 hover:bg-white/10 hover:text-gold3 hover:border-gold2/30 transition-colors duration-200 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <GhostButton to="/providers" light>Join the Provider Network</GhostButton>
          </div>
        </div>

        <div className="space-y-4 reveal" data-reveal-delay="120">
          {/* Featured provider */}
          <div className="bg-dark text-cream rounded-[20px] p-6 flex items-center gap-5 relative overflow-hidden">
            <div className="absolute inset-0 gold-glow opacity-50 pointer-events-none" />
            <div className="relative w-14 h-14 rounded-xl bg-gold2/20 border border-gold2/40 grid place-items-center font-serif text-xl text-gold3 flex-shrink-0">
              {featured.initials}
            </div>
            <div className="relative flex-1 min-w-0">
              <div className="flex items-center justify-between gap-3">
                <p className="font-serif text-lg truncate">{featured.name}</p>
                <span className="flex-shrink-0 text-[10px] tracking-[0.2em] text-gold3 uppercase badge-gradient px-2.5 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <p className="text-xs text-cream/60 mt-1">
                {featured.credentials} · {featured.specialty}
              </p>
            </div>
          </div>

          {/* Mini provider cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {others.map((p, i) => (
              <div
                key={p.id}
                data-reveal-delay={String(120 + (i + 1) * 60)}
                className="bg-white/[0.06] rounded-[16px] p-4 border border-white/8 hover:border-gold2/30 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(207,168,78,0.15)] transition-all duration-300 reveal"
              >
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center font-serif text-base mb-3 ${avatarColors[i % avatarColors.length]}`}>
                  {p.initials}
                </div>
                <p className="font-serif text-sm leading-tight text-cream">{p.name}</p>
                <p className="text-[11px] text-cream/45 mt-0.5">{p.credentials}</p>
                <div className="flex items-center gap-0.5 mt-2 text-gold2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-current" />
                  ))}
                  <span className="ml-1 text-[11px] text-cream/45">{p.rating}</span>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/providers"
            className="flex items-center gap-2 text-sm font-medium text-gold hover:text-gold3 transition-colors"
          >
            View all providers
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Community Section ──────────────────────────────────────── */
function CommunitySection() {
  const items = [
    "Free and subsidized mental health programs",
    "Group and online crisis support",
    "Community-based care coordinators",
    "Nonprofit & corporate partnerships",
    "Trauma-aware & inclusive care",
  ];

  const impactStats = [
    { icon: Users,       value: "15+",   label: "Nonprofit Partners",    bg: "bg-blue-500/[0.08]",    border: "border-blue-500/15",    val: "text-blue-400"    },
    { icon: Heart,       value: "2,400+", label: "Lives Impacted",       bg: "bg-rose-500/[0.08]",    border: "border-rose-500/15",    val: "text-rose-400"    },
    { icon: TrendingUp,  value: "40%",   label: "Cost Reduction",        bg: "bg-emerald-500/[0.08]", border: "border-emerald-500/15", val: "text-emerald-400" },
  ];

  return (
    <section className="py-24 md:py-32 bg-dark text-cream relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-violet-600/[0.07] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-500/[0.06] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="reveal">
            <SectionLabel light>The Movement</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
              Healing Is <em className="text-gold3 italic">a Movement</em>
            </h2>
            <p className="mt-6 text-cream/60 text-sm leading-relaxed max-w-md">
              Beyond sessions, Mindova invests in the communities it serves      through nonprofit partnerships, free programs, and initiatives designed to reach those who need it most.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-cream/75">
              {items.map((l) => (
                <li key={l} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold3 mt-2 flex-shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <GoldButton to="/partnerships">Explore Partnerships</GoldButton>
            </div>
          </div>

          <div className="flex flex-col gap-4 reveal" data-reveal-delay="120">
            {/* Quote card */}
            <div className="bg-dark2 border border-white/5 rounded-[20px] p-7 relative overflow-hidden">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold3/40 to-transparent" />
              <Quote className="w-7 h-7 text-gold2" />
              <p className="mt-4 font-serif text-xl md:text-2xl italic text-cream/90 leading-snug">
                "Healthcare isn't just a service      it's infrastructure for the communities we serve."
              </p>
            </div>

            {/* Impact stat cards */}
            <div className="grid grid-cols-3 gap-4">
              {impactStats.map(({ icon: Icon, value, label, bg, border, val }) => (
                <div
                  key={label}
                  className={`rounded-[18px] p-5 border ${bg} ${border} flex flex-col justify-between min-h-[120px] relative overflow-hidden`}
                >
                  <Icon className={`w-5 h-5 ${val} opacity-70`} />
                  <div>
                    <span className={`font-serif text-2xl ${val}`}>{value}</span>
                    <p className="text-[10px] tracking-[0.16em] uppercase text-cream/40 mt-0.5 leading-tight">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gold impact card */}
            <div className="bg-gold2 text-dark rounded-[20px] p-6 flex items-center justify-between">
              <div>
                <p className="font-serif text-2xl">Community First</p>
                <p className="text-xs text-dark/60 tracking-[0.18em] uppercase mt-1">Our Core Commitment</p>
              </div>
              <InfinityIcon className="w-12 h-12 opacity-80 flex-shrink-0" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonial Section ────────────────────────────────────── */
function TestimonialSection() {
  return (
    <section className="py-24 md:py-32 bg-dark relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute inset-0 gold-glow pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold2/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-blue-500/[0.05] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <SectionLabel light>Patient Stories</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mt-5 text-cream tracking-tight">
            Real stories,{" "}
            <em className="text-gold3 italic">real results.</em>
          </h2>
          <p className="mt-4 text-cream/50 text-sm max-w-sm mx-auto leading-relaxed">
            Across every service line, thousands of people have trusted Mindova Holdings with their health, wellness, and growth.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              data-reveal-delay={String(i * 80)}
              className="reveal group relative bg-white/[0.04] border border-white/8 rounded-[20px] p-7 hover:bg-white/[0.07] hover:border-gold2/25 transition-all duration-400 overflow-hidden"
            >
              {/* Top shimmer */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold3/25 to-transparent" />

              {/* Service badge */}
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold2/70 mb-4">{t.service}</p>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold2 text-gold2" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-cream/75 text-sm leading-relaxed">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/8">
                <div className="w-9 h-9 rounded-full bg-gold2/20 border border-gold2/30 flex items-center justify-center text-xs font-serif text-gold3 flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-cream">{t.name}</p>
                  <p className="text-xs text-cream/45">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-14 pt-10 border-t border-white/8 flex flex-wrap items-center justify-center gap-10 md:gap-16 text-center reveal">
          {[
            { value: "4.9 / 5", label: "Average Rating" },
            { value: "1,200+", label: "Patients This Year" },
            { value: "98%",     label: "Would Recommend" },
            { value: "50",      label: "States Served" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-serif text-3xl md:text-4xl text-gold3">{value}</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-cream/45 mt-1.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
