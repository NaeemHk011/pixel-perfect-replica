import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatMindovaProvides } from "@/components/sections/WhatMindovaProvides";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ArrowRight,
  Calendar,
  ClipboardList,
  Users,
  Brain,
  Leaf,
} from "lucide-react";

export const Route = createFileRoute("/provider-apply")({
  component: ProviderApplyPage,
  head: () => ({
    meta: [
      { title: "Apply as a Provider | Mindova Holdings" },
      {
        name: "description",
        content:
          "Join Mindova's network as a licensed clinical professional or wellness coach. Two pathways  - one purpose.",
      },
    ],
  }),
});

type Tab = "clinical" | "wellness";

const BENEFITS = [
  { icon: Calendar,      title: "Flexible Schedule",     desc: "Set your own hours and take on as many or as few clients as you choose."           },
  { icon: ClipboardList, title: "Administrative Support", desc: "We handle billing, scheduling, and compliance so you focus on care."                },
  { icon: Users,         title: "Vetted Community",       desc: "Join a curated network of licensed, high-caliber clinicians and wellness pros."      },
];

// ── Clinical Form ─────────────────────────────────────────────────────────────
function ClinicalForm() {
  return (
    <div className="w-full" style={{ minHeight: "1352px" }}>
      <iframe
        src="https://link.webtechs.dev/widget/form/iNyDerMjT7eYXuZbW1kd"
        style={{ width: "100%", height: "1352px", border: "none", borderRadius: "8px" }}
        id="inline-iNyDerMjT7eYXuZbW1kd"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Clinical Provider Application form"
        data-height="1352"
        data-layout-iframe-id="inline-iNyDerMjT7eYXuZbW1kd"
        data-form-id="iNyDerMjT7eYXuZbW1kd"
        title="Clinical Provider Application form"
      />
    </div>
  );
}

// ── Wellness Form ─────────────────────────────────────────────────────────────
function WellnessForm() {
  return (
    <div className="w-full" style={{ minHeight: "1061px" }}>
      <iframe
        src="https://link.webtechs.dev/widget/form/MfcwPYX0TmfOluT7LSR2"
        style={{ width: "100%", height: "1061px", border: "none", borderRadius: "8px" }}
        id="inline-MfcwPYX0TmfOluT7LSR2"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Wellness Provider Application form"
        data-height="1061"
        data-layout-iframe-id="inline-MfcwPYX0TmfOluT7LSR2"
        data-form-id="MfcwPYX0TmfOluT7LSR2"
        title="Wellness Provider Application form"
      />
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
function ProviderApplyPage() {
  useScrollAnimation();
  const [activeTab, setActiveTab] = useState<Tab>("clinical");

  useEffect(() => {
    if (document.querySelector('script[src="https://link.webtechs.dev/js/form_embed.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://link.webtechs.dev/js/form_embed.js";
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onDark />

      {/* ── Hero ── */}
      <section className="relative bg-dark text-cream overflow-hidden pt-40 pb-28">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="absolute inset-0 gold-glow" />
        <div className="absolute -top-20 right-1/3 w-72 h-72 rounded-full bg-blue-500/[0.06] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-emerald-500/[0.05] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <SectionLabel light>Join the Network</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-5 tracking-tight">
            Apply as a{" "}
            <em className="text-gold3 italic">Provider.</em>
          </h1>
          <p className="mt-5 text-cream/60 max-w-lg mx-auto text-sm leading-relaxed">
            Two pathways  - one purpose. Whether you're a licensed clinician or a certified wellness professional, there's a place for you in the Mindova network.
          </p>
        </div>

        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="applyWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B89040" />
              <stop offset="50%" stopColor="#E4C06A" />
              <stop offset="100%" stopColor="#B89040" />
            </linearGradient>
          </defs>
          <path d="M0,28 C360,56 720,0 1440,28 L1440,56 L0,56 Z" fill="url(#applyWave)" />
        </svg>
      </section>

      {/* Gold divider */}
      <div className="h-2 w-full" style={{ background: "linear-gradient(90deg, #B89040 0%, #E4C06A 40%, #CFA84E 70%, #B89040 100%)" }} />

      {/* ── Main Content ── */}
      <main className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-14 items-start">

          {/* ── Left Sidebar ── */}
          <div className="reveal space-y-6 lg:sticky lg:top-32">
            <div>
              <SectionLabel>Provider Network</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl mt-5 tracking-tight">
                Build your practice.{" "}
                <em className="text-gold italic">Change lives.</em>
              </h2>
            </div>

            <div className="space-y-3">
              {BENEFITS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-4 bg-white border border-black/5 rounded-2xl hover:border-gold/20 hover:shadow-[0_8px_24px_-8px_rgba(184,144,64,0.12)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gold2/10 border border-gold2/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gold2" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark">{title}</p>
                    <p className="text-xs text-muted mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dark CTA card */}
            <div className="relative overflow-hidden bg-dark text-cream rounded-[20px] p-6">
              <div className="absolute inset-0 gold-glow opacity-60 pointer-events-none" />
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold2/40 to-transparent" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gradient text-gold3 text-[10px] tracking-[0.22em] uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold3 animate-pulse" />
                  Now Accepting Applications
                </span>
                <h3 className="font-serif text-xl">Have questions before applying?</h3>
                <p className="text-cream/60 text-sm mt-2 leading-relaxed">Our provider relations team is happy to answer any questions before you apply.</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(207,168,78,0.5)]">
                  Contact Our Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Right: Tabbed Form ── */}
          <div className="reveal" data-reveal-delay="120">

            {/* Tab header */}
            <div className="mb-6 text-center">
              <SectionLabel>Provider Application</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl mt-3 tracking-tight">
                Start Your{" "}
                <em className="text-gold italic">Application.</em>
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed max-w-md mx-auto">
                Choose your track below and fill out the form. Our team reviews all applications within 3 business days.
              </p>
            </div>

            {/* Tab switcher */}
            <div className="flex rounded-2xl bg-dark p-1.5 mb-6 gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTab("clinical")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === "clinical"
                    ? "bg-gold2 text-dark shadow-[0_4px_12px_-4px_rgba(207,168,78,0.5)]"
                    : "text-cream/60 hover:text-cream"
                }`}
              >
                <Brain className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">Licensed Clinical Professional</span>
                <span className="sm:hidden">Clinical</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("wellness")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === "wellness"
                    ? "bg-gold2 text-dark shadow-[0_4px_12px_-4px_rgba(207,168,78,0.5)]"
                    : "text-cream/60 hover:text-cream"
                }`}
              >
                <Leaf className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">Wellness & Coaching Professional</span>
                <span className="sm:hidden">Wellness</span>
              </button>
            </div>

            {/* Form card */}
            <div className="bg-white rounded-[28px] border border-black/5 shadow-[0_4px_24px_-8px_rgba(12,11,9,0.06)] overflow-hidden">
              {/* Track badge */}
              <div className={`px-8 py-4 border-b border-dark/[0.06] flex items-center gap-2.5 ${activeTab === "clinical" ? "bg-blue-50/50" : "bg-emerald-50/50"}`}>
                {activeTab === "clinical" ? (
                  <>
                    <Brain className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-600">Licensed Clinical Professional Track</span>
                  </>
                ) : (
                  <>
                    <Leaf className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-emerald-600">Wellness & Coaching Professional Track</span>
                  </>
                )}
              </div>

              {activeTab === "clinical" ? <ClinicalForm /> : <WellnessForm />}
            </div>

          </div>
        </div>
      </main>

      <WhatMindovaProvides light />

      <Footer />
    </div>
  );
}
