import { createFileRoute } from "@tanstack/react-router";
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
import { Star, Quote, Infinity as InfinityIcon, ArrowRight } from "lucide-react";

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
    blue: {
      wrap: "bg-blue-500 border border-blue-400/30",
      val: "text-white",
      lbl: "text-white/65",
    },
    dark: {
      wrap: "bg-dark border border-white/5",
      val: "text-cream",
      lbl: "text-cream/55",
    },
    gold: {
      wrap: "bg-gold2 border border-gold3/30",
      val: "text-dark",
      lbl: "text-dark/65",
    },
    emerald: {
      wrap: "bg-emerald-500 border border-emerald-400/30",
      val: "text-white",
      lbl: "text-white/65",
    },
  };
  const { wrap, val, lbl } = cfg[variant];
  return (
    <div className={`${wrap} rounded-2xl p-6 min-h-[148px] flex flex-col justify-between shadow-sm`}>
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
            We listen first. Every care plan is co-created with the patient   combining clinical excellence with genuine human connection.
          </p>
          <p className="mt-4 text-muted text-sm leading-relaxed max-w-lg">
            By treating people, not symptoms, we deliver care that's accessible, dignified, and built around your life   not the other way around.
          </p>
          <div className="mt-8">
            <GoldButton to="/booking">Book Appointment</GoldButton>
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

/* ─── Providers Snippet ──────────────────────────────────────── */
const avatarColors = [
  "bg-blue-100 text-blue-600 border-blue-200",
  "bg-violet-100 text-violet-600 border-violet-200",
  "bg-rose-100 text-rose-600 border-rose-200",
  "bg-emerald-100 text-emerald-600 border-emerald-200",
];

function ProvidersSnippet() {
  const featured = providers[0];
  const others = providers.slice(1, 4);
  const specialties = ["LPC", "LCSW", "LMFT", "PMHNP", "Psychiatrist"];

  return (
    <section className="py-24 md:py-32 bg-section-warm relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1.05fr_1.2fr] gap-14 items-start">
        <div className="reveal">
          <SectionLabel>Our Network</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
            A curated collective of{" "}
            <em className="text-gold italic">board-certified specialists</em>
          </h2>
          <p className="mt-6 text-muted text-sm leading-relaxed max-w-md">
            Every clinician on Mindova is vetted, licensed, and selected for clinical excellence   and genuine care.
          </p>
          <div className="flex flex-wrap gap-2 mt-7">
            {specialties.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 rounded-full bg-white border border-black/8 text-xs tracking-wider text-dark hover:bg-dark hover:text-gold3 transition-colors duration-200 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <GhostButton to="/providers">Join as a Provider</GhostButton>
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
                className="bg-white rounded-[16px] p-4 border border-black/5 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(12,11,9,0.12)] transition-all duration-300 reveal"
              >
                <div
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center font-serif text-base mb-3 ${avatarColors[i % avatarColors.length]}`}
                >
                  {p.initials}
                </div>
                <p className="font-serif text-sm leading-tight">{p.name}</p>
                <p className="text-[11px] text-muted mt-0.5">{p.credentials}</p>
                <div className="flex items-center gap-0.5 mt-2 text-gold2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-current" />
                  ))}
                  <span className="ml-1 text-[11px] text-muted">{p.rating}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/providers"
            className="flex items-center gap-2 text-sm font-medium text-gold hover:text-gold3 transition-colors"
          >
            View all providers
            <ArrowRight className="w-4 h-4" />
          </a>
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

  return (
    <section className="py-24 md:py-32 bg-dark text-cream relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      {/* Color orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-violet-600/[0.07] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-500/[0.06] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="reveal">
          <SectionLabel light>The Movement</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
            Healing Is <em className="text-gold3 italic">a Movement</em>
          </h2>
          <p className="mt-6 text-cream/60 text-sm leading-relaxed max-w-md">
            Beyond sessions, Mindova invests in the communities it serves   through nonprofit partnerships, free programs, and initiatives designed to reach those who need it most.
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

        <div className="grid grid-cols-2 gap-4 reveal" data-reveal-delay="120">
          {/* Quote card */}
          <div className="col-span-2 bg-dark2 border border-white/5 rounded-[20px] p-7 relative overflow-hidden">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold3/40 to-transparent" />
            <Quote className="w-7 h-7 text-gold2" />
            <p className="mt-4 font-serif text-xl md:text-2xl italic text-cream/90 leading-snug">
              "Healthcare isn't just a service   it's infrastructure for the communities we serve."
            </p>
          </div>

          {/* Stat card */}
          <div className="bg-dark2 border border-white/5 rounded-[20px] p-6 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] to-transparent pointer-events-none" />
            <span className="font-serif text-6xl text-cream relative">
              15<span className="text-gold3">+</span>
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-cream/50">Nonprofit Partners</span>
          </div>

          {/* Gold impact card */}
          <div className="bg-gold2 text-dark rounded-[20px] p-6 flex flex-col justify-between min-h-[180px]">
            <InfinityIcon className="w-12 h-12 opacity-90" strokeWidth={1.5} />
            <span className="text-[11px] tracking-[0.2em] uppercase text-dark/70">Community Impact</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonial Section ────────────────────────────────────── */
function TestimonialSection() {
  const t = testimonials[0];
  return (
    <section className="py-24 md:py-32 bg-cream2 relative z-10">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="reveal">
          <div className="flex flex-col items-center text-center mb-10">
            <SectionLabel>Patient Stories</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 tracking-tight">
              Real care, <em className="text-gold italic">real results.</em>
            </h2>
          </div>

          <div className="bg-white rounded-[24px] p-8 md:p-10 border border-black/5 shadow-[0_8px_40px_-16px_rgba(12,11,9,0.1)] grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
            {/* Avatar */}
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-[20px] bg-dark grid place-items-center text-cream flex-shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 gold-glow opacity-70" />
              <span className="relative font-serif text-3xl text-gold3">{t.initials}</span>
            </div>

            <div>
              <Quote className="w-6 h-6 text-gold opacity-60" />
              <p className="mt-3 font-serif italic text-2xl md:text-3xl leading-snug text-dark">
                {t.quote}
              </p>
              <div className="mt-5 flex items-center gap-1 text-gold2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm font-medium">
                {t.name}{" "}
                <span className="text-muted">  {t.role}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
