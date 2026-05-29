import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book a Consultation | Mindova Holdings" },
      { name: "description", content: "Book a telehealth appointment with a licensed Mindova provider." },
    ],
  }),
});

function BookingPage() {
  useScrollAnimation();
  const [calLoaded, setCalLoaded] = useState(false);
  const minDelayDone = useRef(false);
  const iframeLoaded = useRef(false);

  const tryHideLoader = () => {
    if (minDelayDone.current && iframeLoaded.current) setCalLoaded(true);
  };

  useEffect(() => {
    const t = setTimeout(() => { minDelayDone.current = true; tryHideLoader(); }, 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.webtechs.dev/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-dark text-cream overflow-hidden pt-40 pb-28">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="absolute inset-0 gold-glow" />
        <div className="absolute -top-20 right-1/3 w-72 h-72 rounded-full bg-blue-500/[0.06] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-violet-500/[0.05] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <SectionLabel light>Schedule a Session</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-5 tracking-tight">
            Book a{" "}
            <em className="text-gold3 italic">Consultation.</em>
          </h1>
          <p className="mt-5 text-cream/60 max-w-md mx-auto text-sm leading-relaxed">
            Choose a time that works for you. A licensed Mindova provider will meet you where you are.
          </p>
        </div>

        {/* Gold wave transition */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="bookingWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B89040" />
              <stop offset="50%" stopColor="#E4C06A" />
              <stop offset="100%" stopColor="#B89040" />
            </linearGradient>
          </defs>
          <path d="M0,28 C360,56 720,0 1440,28 L1440,56 L0,56 Z" fill="url(#bookingWave)" />
        </svg>
      </section>

      {/* Gold divider strip */}
      <div
        className="h-2 w-full"
        style={{
          background: "linear-gradient(90deg, #B89040 0%, #E4C06A 40%, #CFA84E 70%, #B89040 100%)",
        }}
      />

      {/* ── Calendar ── */}
      <main className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-5 md:px-8">

          {/* Patient Intake Banner */}
          <div className="mb-8 reveal">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white border border-gold2/30 rounded-2xl px-6 py-4 shadow-[0_4px_20px_-8px_rgba(184,144,64,0.15)]">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold2/10 border border-gold2/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-base">📋</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-dark">Already have an appointment?</p>
                  <p className="text-xs text-muted mt-0.5 leading-relaxed">
                    Please complete your Patient Intake Form before your first session  - it only takes 5 minutes.
                  </p>
                </div>
              </div>
              <Link
                to="/intake"
                className="flex-shrink-0 inline-flex items-center gap-1.5 bg-gold2 hover:bg-gold3 text-dark font-medium px-5 py-2.5 rounded-full text-xs transition-all duration-200 hover:-translate-y-0.5 shadow-[0_6px_18px_-8px_rgba(207,168,78,0.55)] whitespace-nowrap"
              >
                Fill Intake Form →
              </Link>
            </div>
          </div>

          {/* Section title */}
          <div className="text-center mb-10 reveal">
            <SectionLabel>Appointment Booking</SectionLabel>
            <h2 className="font-serif font-bold text-3xl md:text-4xl mt-3 tracking-tight">
              Pick Your{" "}
              <em className="text-gold italic">Date & Time.</em>
            </h2>
            <p className="mt-2 text-sm text-muted leading-relaxed max-w-md mx-auto">
              Select an available slot below and we'll confirm your consultation within 24 hours.
            </p>
          </div>

          {/* Calendar embed */}
          <div
            className="relative reveal"
            data-reveal-delay="120"
            style={{ minHeight: "600px" }}
          >
            {/* Loader */}
            {!calLoaded && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white z-10"
                style={{ borderRadius: "28px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 4px 24px -8px rgba(12,11,9,0.06)" }}
              >
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 rounded-full border-4 border-gold2/20" />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gold2 animate-spin" />
                </div>
                <p className="text-sm text-muted tracking-wide">Loading calendar…</p>
              </div>
            )}

            <iframe
              src="https://link.webtechs.dev/widget/booking/QJYvx2gGjWYeShaOWt0j"
              style={{
                width: "100%",
                border: "none",
                display: "block",
                minHeight: "600px",
                borderRadius: "28px",
                boxShadow: "0 4px 24px -8px rgba(12,11,9,0.06)",
                opacity: calLoaded ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
              id="QJYvx2gGjWYeShaOWt0j_1779466187336"
              title="Book a Consultation"
              onLoad={() => { iframeLoaded.current = true; tryHideLoader(); }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
