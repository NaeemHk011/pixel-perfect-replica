import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Route = createFileRoute("/intake")({
  component: IntakePage,
  head: () => ({
    meta: [
      { title: "Patient Intake Form | Mindova Holdings" },
      {
        name: "description",
        content:
          "Complete your patient intake form before your first Mindova appointment. Secure, HIPAA-compliant, and takes about 5 minutes.",
      },
    ],
  }),
});

function IntakePage() {
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
    <div className="min-h-screen bg-cream">
      <Navbar onDark />

      {/* ── Hero ── */}
      <section className="relative bg-dark text-cream overflow-hidden pt-40 pb-28">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="absolute inset-0 gold-glow" />
        <div className="absolute -top-20 right-1/3 w-72 h-72 rounded-full bg-blue-500/[0.06] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-violet-500/[0.05] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <SectionLabel light>New Patient</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-5 tracking-tight">
            Start Your Care{" "}
            <em className="text-gold3 italic">Journey.</em>
          </h1>
          <p className="mt-5 text-cream/60 max-w-md mx-auto text-sm leading-relaxed">
            Complete this intake form before your first appointment. Takes about 5 minutes.
          </p>

          {/* HIPAA badge */}
          <div className="mt-7 inline-flex items-center gap-2 bg-white/[0.07] border border-white/12 rounded-full px-5 py-2.5 text-xs text-cream/75 tracking-wide">
            <span>🔒</span>
            <span className="tracking-[0.15em] uppercase font-medium">
              HIPAA Secure · Your information is encrypted and protected
            </span>
          </div>
        </div>

        {/* Gold wave transition */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="intakeWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B89040" />
              <stop offset="50%" stopColor="#E4C06A" />
              <stop offset="100%" stopColor="#B89040" />
            </linearGradient>
          </defs>
          <path d="M0,28 C360,56 720,0 1440,28 L1440,56 L0,56 Z" fill="url(#intakeWave)" />
        </svg>
      </section>

      {/* Gold divider strip */}
      <div
        className="h-2 w-full"
        style={{
          background: "linear-gradient(90deg, #B89040 0%, #E4C06A 40%, #CFA84E 70%, #B89040 100%)",
        }}
      />

      {/* ── Form Section ── */}
      <main className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-5 md:px-8">

          <div className="text-center mb-8 reveal">
            <SectionLabel>Intake Form</SectionLabel>
            <h2 className="font-serif font-bold text-3xl md:text-4xl mt-3 tracking-tight">
              Patient Intake{" "}
              <em className="text-gold italic">Form.</em>
            </h2>
            <p className="mt-2 text-sm text-muted leading-relaxed max-w-md mx-auto">
              All information is encrypted and HIPAA-compliant. Please fill this out before your first appointment.
            </p>
          </div>

          <div
            className="relative bg-white rounded-[28px] border border-black/5 shadow-[0_4px_24px_-8px_rgba(12,11,9,0.06)] overflow-hidden reveal"
            data-reveal-delay="120"
            style={{ minHeight: "2405px" }}
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
              src="https://link.webtechs.dev/widget/form/uXUpsYy6M7ZqEMUGYWJl"
              style={{
                width: "100%",
                height: "2405px",
                border: "none",
                borderRadius: "28px",
                display: "block",
                opacity: formLoaded ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
              id="inline-uXUpsYy6M7ZqEMUGYWJl"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Patient Intake Form"
              data-height="2405"
              data-layout-iframe-id="inline-uXUpsYy6M7ZqEMUGYWJl"
              data-form-id="uXUpsYy6M7ZqEMUGYWJl"
              title="Patient Intake Form"
              onLoad={() => setFormLoaded(true)}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
