import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ClipboardList, Search, CalendarCheck, ArrowRight, ShieldCheck, Users, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/get-matched")({
  component: GetMatchedPage,
  head: () => ({
    meta: [
      { title: "Get Matched | Mindova Holdings" },
      { name: "description", content: "Find your perfect provider  - tell us what you're looking for and we'll match you with the right licensed therapist, psychiatrist, or wellness coach within 24–48 hours." },
    ],
  }),
});

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Share Your Needs",
    desc: "Fill out a short intake form. Tell us about your goals, preferences, and what kind of support you're looking for.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    number: "02",
    icon: Search,
    title: "We Match You",
    desc: "Our care coordinators review your preferences and find the best-fit licensed therapist, psychiatrist, or wellness coach.",
    color: "text-gold2",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Start Your Journey",
    desc: "Book your first session and begin your path to healing  - supported, guided, and connected every step of the way.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
] as const;

function GetMatchedPage() {
  useScrollAnimation();
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.webtechs.dev/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>

        {/* ── Hero ── */}
        <section className="relative bg-dark text-cream overflow-hidden pt-40 pb-24 md:pt-48 md:pb-28">
          <div className="absolute inset-0 bg-grid-dark opacity-50" />
          <div className="absolute inset-0 gold-glow" />
          <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-blue-500/[0.06] blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-violet-500/[0.06] blur-3xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold2/30 bg-white/5 backdrop-blur-sm text-xs tracking-[0.22em] uppercase text-gold2 mb-6">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Concierge Matching
            </span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Find Your{" "}
              <em className="text-gold3 italic">Perfect</em>
              <br />Provider
            </h1>

            <p className="mt-6 mx-auto max-w-2xl text-sm md:text-base text-cream/65 leading-relaxed">
              Tell us what you're looking for  - we'll match you with the right licensed therapist, psychiatrist, or wellness coach within 24–48 hours.
            </p>

            {/* HIPAA badge */}
            <div className="mt-7 inline-flex items-center gap-2 bg-white/[0.07] border border-white/10 rounded-full px-5 py-2 text-xs text-cream/65 tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="tracking-[0.14em] uppercase">HIPAA Secure · Your information is encrypted</span>
            </div>
          </div>

          {/* Wave divider */}
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="gmWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#B89040" />
                <stop offset="50%"  stopColor="#E4C06A" />
                <stop offset="100%" stopColor="#B89040" />
              </linearGradient>
            </defs>
            <path d="M0,28 C360,56 720,0 1440,28 L1440,56 L0,56 Z" fill="url(#gmWave)" />
          </svg>
        </section>

        {/* Gold divider */}
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #B89040 0%, #E4C06A 40%, #CFA84E 70%, #B89040 100%)" }} />

        {/* ── 3-Step Concierge Flow ── */}
        <section className="py-20 md:py-28 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">

            <div className="text-center mb-14 reveal">
              <SectionLabel>How It Works</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 tracking-tight">
                Matched in{" "}
                <em className="text-gold italic">3 simple steps</em>
              </h2>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Connector line  - desktop only */}
              <div
                className="absolute top-[52px] left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] hidden md:block pointer-events-none"
                style={{ borderTop: "2px dashed rgba(207,168,78,0.35)" }}
              />

              {steps.map(({ number, icon: Icon, title, desc, color, bg, border }, i) => (
                <div
                  key={number}
                  className="reveal relative bg-white rounded-2xl p-7 border border-dark/[0.07] shadow-[0_4px_20px_-8px_rgba(12,11,9,0.08)] text-center"
                  data-reveal-delay={String(i * 100)}
                >
                  <div className={`mx-auto w-14 h-14 rounded-2xl ${bg} border ${border} flex items-center justify-center mb-5 relative`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-dark text-cream text-[10px] font-bold flex items-center justify-center">
                      {number.replace("0", "")}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-dark mb-2">{title}</h3>
                  <p className="text-sm text-dark/60 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Team Messaging Banner ── */}
        <section className="py-10 bg-[#F9F6F1] border-b border-dark/[0.06] relative z-10">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <div className="reveal bg-white rounded-2xl p-6 md:p-8 border border-dark/[0.07] shadow-[0_4px_20px_-8px_rgba(12,11,9,0.06)] flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-gold2/15 border border-gold2/25 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-gold2" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold2 mb-1">Concierge Matching</p>
                <h3 className="font-serif text-xl text-dark">Our clinical team is here for you</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  A dedicated care coordinator will personally review your intake and match you with the best-fit provider within 24–48 hours  - real human care, not automated systems.
                </p>
                <div className="mt-3 flex flex-wrap gap-4">
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                    <ShieldCheck className="w-3.5 h-3.5" />HIPAA Secure
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-dark/50">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />Responds in 24–48 hours
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-dark/50">
                    <Users className="w-3.5 h-3.5 text-emerald-500" />Real care coordinators
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Intake / Matching Form ── */}
        <section className="py-16 md:py-20 bg-[#F9F6F1] relative z-10">
          <div className="max-w-3xl mx-auto px-5 md:px-8">

            <div className="text-center mb-10 reveal">
              <SectionLabel>Get Matched</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 tracking-tight">
                Find Your{" "}
                <em className="text-gold italic">Perfect Match</em>
              </h2>
              <p className="mt-3 text-sm text-muted leading-relaxed max-w-lg mx-auto">
                Fill out the form below and our care coordinators will review your preferences and connect you with the best-fit provider within 24–48 hours.
              </p>
            </div>

            <div
              className="relative bg-white rounded-[28px] border border-black/5 shadow-[0_4px_24px_-8px_rgba(12,11,9,0.06)] overflow-hidden reveal"
              data-reveal-delay="100"
              style={{ minHeight: "913px" }}
            >
              {!formLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white rounded-[28px] z-10">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-4 border-gold2/20" />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gold2 animate-spin" />
                  </div>
                  <p className="text-sm text-muted tracking-wide">Loading form…</p>
                </div>
              )}
              <iframe
                src="https://link.webtechs.dev/widget/form/yTBSXykkdjpcbw7RkgDq"
                style={{
                  width: "100%",
                  height: "913px",
                  border: "none",
                  borderRadius: "28px",
                  display: "block",
                  opacity: formLoaded ? 1 : 0,
                  transition: "opacity 0.4s ease",
                }}
                id="inline-yTBSXykkdjpcbw7RkgDq"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Get Matched Form"
                data-height="913"
                data-layout-iframe-id="inline-yTBSXykkdjpcbw7RkgDq"
                data-form-id="yTBSXykkdjpcbw7RkgDq"
                title="Get Matched Form"
                onLoad={() => setFormLoaded(true)}
              />
            </div>

          </div>
        </section>

        {/* ── Bottom CTA  - Already know what you need? ── */}
        <section className="py-14 bg-dark relative z-10">
          <div className="absolute inset-0 gold-glow opacity-60 pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center reveal">
            <p className="text-cream/60 text-sm mb-3">Already know what you need?</p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 text-gold3 hover:text-gold2 font-serif text-xl md:text-2xl transition-colors duration-200 group"
            >
              Book Directly
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <p className="mt-3 text-cream/35 text-xs tracking-wider">Skip the matching process and schedule your session now.</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
