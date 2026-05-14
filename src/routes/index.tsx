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
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { providers } from "@/data/providers";
import { testimonials } from "@/data/testimonials";
import { Star, Quote, Infinity as InfinityIcon } from "lucide-react";

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

function IntroSection() {
  return (
    <section className="py-24 md:py-32 bg-cream relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <SectionLabel>About Us</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
            At Mindova, we believe <em className="text-gold italic">healing is a movement.</em>
          </h2>
          <p className="mt-6 text-muted text-sm leading-relaxed max-w-lg">
            We listen first. Every care plan is co-created with the patient — combining clinical excellence with genuine human connection.
          </p>
          <p className="mt-4 text-muted text-sm leading-relaxed max-w-lg">
            By treating people, not symptoms, we deliver care that's accessible, dignified, and built around your life — not the other way around.
          </p>
          <div className="mt-8">
            <GoldButton to="/booking">Book Appointment</GoldButton>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 reveal">
          <StatBox value="98%" label="Satisfaction Rate" variant="light" />
          <StatBox value="24h" label="Response Access" variant="dark" />
          <StatBox value="500+" label="Appointments Monthly" variant="gold" />
          <StatBox value="4.9★" label="Patient Rating" variant="light" />
        </div>
      </div>
    </section>
  );
}

function StatBox({ value, label, variant }: { value: string; label: string; variant: "light" | "dark" | "gold" }) {
  const styles =
    variant === "dark"
      ? "bg-dark text-cream"
      : variant === "gold"
      ? "bg-gold2 text-dark"
      : "bg-white text-dark border border-black/5";
  return (
    <div className={`${styles} rounded-2xl p-6 min-h-[140px] flex flex-col justify-between`}>
      <span className="font-serif text-4xl md:text-5xl">{value}</span>
      <span className={`text-[11px] tracking-[0.2em] uppercase ${variant === "dark" ? "text-cream/60" : variant === "gold" ? "text-dark/70" : "text-muted"}`}>
        {label}
      </span>
    </div>
  );
}

function ProvidersSnippet() {
  const featured = providers[0];
  const others = providers.slice(1, 3);
  const specialties = ["LPC", "LCSW", "LMFT", "PMHNP", "Psychiatrist"];
  return (
    <section className="py-24 md:py-32 bg-cream2 relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1.05fr_1.2fr] gap-14 items-start">
        <div className="reveal">
          <SectionLabel>Our Network</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
            A curated collective of <em className="text-gold italic">board-certified specialists</em>
          </h2>
          <p className="mt-6 text-muted text-sm leading-relaxed max-w-md">
            Every clinician on Mindova is vetted, licensed, and selected for their clinical excellence — and their care.
          </p>
          <div className="flex flex-wrap gap-2 mt-7">
            {specialties.map((s) => (
              <span key={s} className="px-4 py-1.5 rounded-full bg-white border border-black/5 text-xs tracking-wider text-dark hover:bg-dark hover:text-gold3 transition-colors cursor-default">{s}</span>
            ))}
          </div>
          <div className="mt-8">
            <GhostButton to="/providers">Join as a Provider</GhostButton>
          </div>
        </div>

        <div className="grid gap-4 reveal">
          <FeaturedProviderCard p={featured} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {others.map((p) => <ProviderMiniCard key={p.id} p={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProviderCard({ p }: { p: (typeof providers)[number] }) {
  return (
    <div className="bg-dark text-cream rounded-[20px] p-6 flex items-center gap-5">
      <div className="w-14 h-14 rounded-xl bg-gold2/20 border border-gold2/40 grid place-items-center font-serif text-xl text-gold3">{p.initials}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="font-serif text-lg">{p.name}</p>
          <span className="text-[10px] tracking-[0.2em] text-gold3 uppercase">Featured</span>
        </div>
        <p className="text-xs text-cream/60 mt-1">{p.credentials} · {p.specialty}</p>
      </div>
    </div>
  );
}

function ProviderMiniCard({ p }: { p: (typeof providers)[number] }) {
  return (
    <div className="bg-white rounded-[20px] p-5 border border-black/5 hover:-translate-y-1 transition-transform">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-lg bg-cream2 grid place-items-center font-serif text-gold">{p.initials}</div>
        <div>
          <p className="font-serif text-base">{p.name}</p>
          <p className="text-[11px] text-muted">{p.credentials}</p>
        </div>
      </div>
      <p className="text-xs text-muted mt-3">{p.specialty}</p>
      <div className="flex items-center gap-1 mt-3 text-gold2 text-xs">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
        <span className="ml-1 text-muted">{p.rating}</span>
      </div>
    </div>
  );
}

function CommunitySection() {
  return (
    <section className="py-24 md:py-32 bg-dark text-cream relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="reveal">
          <SectionLabel light>The Movement</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
            Healing Is <em className="text-gold3 italic">a Movement</em>
          </h2>
          <p className="mt-6 text-cream/60 text-sm leading-relaxed max-w-md">
            Beyond sessions and appointments, Mindova invests in the communities it serves — through nonprofit partnerships, free programs, and initiatives designed to reach those who need it most.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-cream/75">
            {["Free and subsidized mental health programs", "Group and online crisis support", "Community-based care coordinators", "Nonprofit & corporate partnerships", "Trauma-aware & inclusive care"].map((l) => (
              <li key={l} className="flex items-start gap-3"><span className="w-1 h-1 rounded-full bg-gold3 mt-2" />{l}</li>
            ))}
          </ul>
          <div className="mt-8"><GoldButton to="/partnerships">Explore Partnerships</GoldButton></div>
        </div>

        <div className="grid grid-cols-2 gap-4 reveal">
          <div className="col-span-2 bg-dark2 border border-white/5 rounded-[20px] p-7">
            <Quote className="w-7 h-7 text-gold2" />
            <p className="mt-4 font-serif text-xl md:text-2xl italic text-cream/90 leading-snug">
              "Healthcare isn't just a service — it's infrastructure for the communities we serve."
            </p>
          </div>
          <div className="bg-dark2 border border-white/5 rounded-[20px] p-6 flex flex-col justify-between min-h-[180px]">
            <span className="font-serif text-6xl text-cream">15<span className="text-gold3">+</span></span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-cream/50">Nonprofit Partners</span>
          </div>
          <div className="bg-gold2 text-dark rounded-[20px] p-6 flex flex-col justify-between min-h-[180px]">
            <InfinityIcon className="w-12 h-12" strokeWidth={1.5} />
            <span className="text-[11px] tracking-[0.2em] uppercase text-dark/70">Community Impact</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const t = testimonials[0];
  return (
    <section className="py-24 md:py-32 bg-cream2 relative z-10">
      <div className="max-w-5xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center reveal">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-[20px] bg-dark grid place-items-center text-cream">
          <span className="font-serif text-3xl text-gold3">{t.initials}</span>
        </div>
        <div>
          <Quote className="w-6 h-6 text-gold" />
          <p className="mt-4 font-serif italic text-2xl md:text-3xl leading-snug text-dark">
            {t.quote}
          </p>
          <div className="mt-5 flex items-center gap-1 text-gold2">
            {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
          </div>
          <p className="mt-3 text-sm font-medium">{t.name} <span className="text-muted">— {t.role}</span></p>
        </div>
      </div>
    </section>
  );
}
