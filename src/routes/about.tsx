import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldButton, GhostButton } from "@/components/ui/Fancy";
import { WellnessMission } from "@/components/sections/WellnessMission";
import { ProviderHighlights } from "@/components/sections/ProviderHighlights";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Shield, Users, Globe, Award, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Mindova Holdings" },
      { name: "description", content: "Mindova Holdings is a virtual behavioral health platform connecting individuals with licensed therapists, psychiatrists, coaches, and wellness professionals." },
    ],
  }),
});

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    desc: "Every interaction is rooted in empathy. We treat people, not just symptoms.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Shield,
    title: "Clinical Excellence",
    desc: "All clinical providers are licensed, vetted, and selected for their expertise and genuine care.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Globe,
    title: "Accessible Everywhere",
    desc: "Virtual care delivered across all 50 states  - no waitlists, no barriers.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "Healing is a movement. We invest in the communities we serve through nonprofit partnerships and free programs.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
] as const;

const offerings = [
  "Individual, couples & group therapy",
  "Psychiatric evaluations & medication management",
  "Psychological & behavioral assessments",
  "Wellness & life coaching",
  "Accountability & personal development coaching",
  "Intensive Outpatient Program (IOP)",
  "Virtual behavioral health  - all 50 states",
  "Provider infrastructure & operational support",
] as const;

const insurancePartners = [
  "Aetna", "Blue Cross Blue Shield", "Cigna",
  "United Healthcare", "Humana", "Anthem",
] as const;

const communityBadges = [
  { icon: Heart, label: "Ferguson Foundation", sublabel: "Community Partner" },
  { icon: Users, label: "50+ Nonprofit Partners", sublabel: "Community Organizations" },
  { icon: Shield, label: "HIPAA Certified", sublabel: "Enterprise Compliance" },
] as const;

function AboutPage() {
  useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>
        <PageHero
          eyebrow="About Mindova"
          title="Mental Wellness."
          emphasis="Real Support."
          subtitle="Mindova Holdings is a virtual behavioral health platform connecting individuals with licensed therapists, psychiatrists, coaches, and wellness professionals  - virtually, compassionately, and affordably."
        />

        {/* Who We Are */}
        <section className="py-24 md:py-32 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
                Healing is{" "}
                <em className="text-gold italic">a movement.</em>
              </h2>
              <p className="mt-6 text-muted text-sm leading-relaxed max-w-lg">
                Mindova Holdings was built on a simple belief: everyone deserves access to high-quality mental health and wellness care  - regardless of location, background, or circumstance.
              </p>
              <p className="mt-4 text-muted text-sm leading-relaxed max-w-lg">
                We bridge the gap between individuals seeking support and the licensed professionals who provide it  - creating a connected care ecosystem that prioritizes the whole person: mind, body, and spirit.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <GoldButton to="/get-matched">Get Support</GoldButton>
                <GhostButton to="/join-the-network">Join the Network</GhostButton>
              </div>
            </div>

            <div className="reveal" data-reveal-delay="120">
              <div className="bg-dark rounded-2xl p-8 text-cream relative overflow-hidden">
                <div className="absolute inset-0 gold-glow opacity-60 pointer-events-none" />
                <div className="relative">
                  <p className="text-[10px] tracking-[0.24em] uppercase text-gold2 mb-5">What We Offer</p>
                  <ul className="space-y-3">
                    {offerings.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-cream/80">
                        <CheckCircle2 className="w-4 h-4 text-gold2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 md:py-32 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14 reveal">
              <SectionLabel>Our Values</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
                What drives{" "}
                <em className="text-gold italic">everything we do</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc, color, bg }, i) => (
                <div
                  key={title}
                  className="reveal bg-[#F9F6F1] rounded-2xl p-7 border border-dark/[0.06]"
                  data-reveal-delay={String(i * 80)}
                >
                  <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <h3 className="font-serif text-lg text-dark mb-2">{title}</h3>
                  <p className="text-sm text-dark/60 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wellness Mission */}
        <WellnessMission />

        {/* Provider Highlights */}
        <ProviderHighlights />

        {/* Community Partners */}
        <section className="py-16 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <p className="text-center text-[10px] tracking-[0.3em] uppercase text-dark/35 mb-8">
              Trusted Insurance Partners &amp; Community Organizations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10">
              {insurancePartners.map((p) => (
                <span
                  key={p}
                  className="font-serif text-base text-dark/30 hover:text-gold transition-colors duration-300 cursor-default tracking-wide"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {communityBadges.map(({ icon: Icon, label, sublabel }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border border-dark/[0.08] bg-[#F9F6F1]"
                >
                  <Icon className="w-4 h-4 text-gold2 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-dark">{label}</p>
                    <p className="text-[10px] text-muted tracking-wide">{sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-cream relative z-10">
          <div className="max-w-2xl mx-auto px-5 md:px-8 text-center reveal">
            <Award className="w-10 h-10 text-gold2 mx-auto mb-5" />
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
              Ready to start your{" "}
              <em className="text-gold italic">healing journey?</em>
            </h2>
            <p className="mt-4 text-muted text-sm leading-relaxed max-w-lg mx-auto">
              Our care coordinators will match you with the right provider within 24–48 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <GoldButton to="/get-matched">Get Support</GoldButton>
              <GhostButton to="/join-the-network">Become a Provider</GhostButton>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
