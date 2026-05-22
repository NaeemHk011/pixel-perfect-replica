import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Bell, Clock, Users } from "lucide-react";

export const Route = createFileRoute("/waitlist")({
  component: WaitlistPage,
  head: () => ({
    meta: [
      { title: "Join the Waitlist | Mindova Holdings" },
      {
        name: "description",
        content:
          "No slots available right now? Join our waitlist and we'll notify you the moment a spot opens up.",
      },
    ],
  }),
});

const PERKS = [
  {
    icon: Bell,
    title: "First to Know",
    description: "You'll be notified instantly when a slot opens — before it's listed publicly.",
  },
  {
    icon: Clock,
    title: "Priority Access",
    description: "Waitlist members get priority booking over walk-in requests.",
  },
  {
    icon: Users,
    title: "Matched to the Right Provider",
    description: "We match you to a provider based on your needs, not just availability.",
  },
];

function WaitlistPage() {
  useScrollAnimation();
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.webtechs.dev/js/form_embed.js";
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
          <SectionLabel light>No Slots? No Problem.</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-5 tracking-tight">
            Join the{" "}
            <em className="text-gold3 italic">Waitlist.</em>
          </h1>
          <p className="mt-5 text-cream/60 max-w-md mx-auto text-sm leading-relaxed">
            All current slots are filled, but you don't have to wait in the dark. Sign up below and we'll reach out the moment something opens up.
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
            <linearGradient id="waitlistWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B89040" />
              <stop offset="50%" stopColor="#E4C06A" />
              <stop offset="100%" stopColor="#B89040" />
            </linearGradient>
          </defs>
          <path d="M0,28 C360,56 720,0 1440,28 L1440,56 L0,56 Z" fill="url(#waitlistWave)" />
        </svg>
      </section>

      {/* Gold divider strip */}
      <div
        className="h-2 w-full"
        style={{
          background: "linear-gradient(90deg, #B89040 0%, #E4C06A 40%, #CFA84E 70%, #B89040 100%)",
        }}
      />

      {/* ── Main Content ── */}
      <main className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-14 items-start">

          {/* ── Left: Info ── */}
          <div className="reveal space-y-6 lg:sticky lg:top-32">
            <div>
              <SectionLabel>Waitlist</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl mt-5 tracking-tight">
                Your spot is{" "}
                <em className="text-gold italic">reserved.</em>
              </h2>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fill out the form and we'll add you to our priority list. Average wait time is 3–5 business days.
              </p>
            </div>

            {/* Perk cards */}
            <div className="space-y-3">
              {PERKS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 bg-white border border-black/5 rounded-2xl hover:border-gold/20 hover:shadow-[0_8px_24px_-8px_rgba(184,144,64,0.12)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold2/10 border border-gold2/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gold2" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark">{title}</p>
                    <p className="text-xs text-muted mt-1 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA back to booking */}
            <div className="relative overflow-hidden bg-dark text-cream rounded-[20px] p-6">
              <div className="absolute inset-0 gold-glow opacity-60 pointer-events-none" />
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold2/40 to-transparent" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gradient text-gold3 text-[10px] tracking-[0.22em] uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold3 animate-pulse" />
                  Slots Open Regularly
                </span>
                <h3 className="font-serif text-xl">Want to try booking again?</h3>
                <p className="text-cream/60 text-sm mt-2 leading-relaxed">
                  New slots open frequently. Check our booking page to see if something just became available.
                </p>
                <Link
                  to="/booking"
                  className="mt-5 inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(207,168,78,0.5)]"
                >
                  Check Availability <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Right: GHL Waitlist Form ── */}
          <div className="reveal" data-reveal-delay="120">
            {/* Form Header */}
            <div className="mb-6 px-1 text-center">
              <SectionLabel>Waitlist Form</SectionLabel>
              <h2 className="font-serif font-bold text-3xl md:text-4xl mt-3 tracking-tight">
                Save Your{" "}
                <em className="text-gold italic">Spot.</em>
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed max-w-md mx-auto">
                We'll notify you as soon as a slot becomes available for you.
              </p>
            </div>

            <div
              className="relative bg-white rounded-[28px] border border-black/5 shadow-[0_4px_24px_-8px_rgba(12,11,9,0.06)] overflow-hidden"
              style={{ minHeight: "538px" }}
            >
              {/* Loader */}
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
                src="https://link.webtechs.dev/widget/form/lWpdy9EZ1zxyUeh8QZKa"
                style={{
                  width: "100%",
                  height: "538px",
                  border: "none",
                  borderRadius: "28px",
                  display: "block",
                  opacity: formLoaded ? 1 : 0,
                  transition: "opacity 0.4s ease",
                }}
                id="inline-lWpdy9EZ1zxyUeh8QZKa"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="WaitList Form"
                data-height="538"
                data-layout-iframe-id="inline-lWpdy9EZ1zxyUeh8QZKa"
                data-form-id="lWpdy9EZ1zxyUeh8QZKa"
                title="WaitList Form"
                onLoad={() => setFormLoaded(true)}
              />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
