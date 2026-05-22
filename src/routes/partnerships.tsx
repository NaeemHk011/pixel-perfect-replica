import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Network, Handshake, Building2, ShieldCheck, Users, HeartHandshake, Stethoscope, LifeBuoy } from "lucide-react";

export const Route = createFileRoute("/partnerships")({
  component: PartnershipsPage,
  head: () => ({
    meta: [
      { title: "Partnerships   Mindova Holdings" },
      { name: "description", content: "Partner with Mindova: nonprofit collaboration, referral networks, and corporate wellness." },
    ],
  }),
});

function PartnershipsPage() {
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
        <PageHero
          eyebrow="Collaborate"
          title="Partner With"
          emphasis="Mindova"
          subtitle="Build with us. From nonprofits to enterprise wellness   we extend our clinical platform to the organizations that need it."
        />

        <section className="py-24 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              [Handshake, "Nonprofit Collaboration", "Free and subsidized programs delivered through your existing community channels."],
              [Network, "Referral Partnerships", "Send clients our way   we handle scheduling, intake, and clinical care end-to-end."],
              [Building2, "Corporate Wellness", "Employee behavioral health programs with transparent reporting and clinical depth."],
            ].map(([Icon, t, d]) => (
              <div key={t as string} className="bg-white rounded-[20px] p-7 border border-black/5 hover:bg-dark hover:text-cream group transition-colors reveal">
                <Icon className="w-7 h-7 text-gold2" />
                <h3 className="font-serif text-xl mt-5 group-hover:text-gold3 transition-colors">{t as string}</h3>
                <p className="mt-3 text-sm text-muted group-hover:text-cream/70 transition-colors leading-relaxed">{d as string}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-cream2 relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-12 reveal">
              <div className="flex justify-center"><SectionLabel>Why Partner</SectionLabel></div>
              <h2 className="font-serif text-4xl md:text-5xl mt-5">Built for <em className="text-gold italic">scale & trust.</em></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                [Users, "Wide Network", "Access to a national network of licensed clinicians."],
                [ShieldCheck, "HIPAA Secure", "Enterprise-grade compliance, encryption, and auditability."],
                [HeartHandshake, "Community Impact", "Programs designed to reach underserved populations."],
                [Stethoscope, "Provider Access", "Pre-vetted, board-certified specialists on demand."],
                [LifeBuoy, "Insurance Support", "Verification and claim handling done for you."],
                [Network, "Ongoing Support", "A dedicated partnerships team, end-to-end."],
              ].map(([Icon, t, d]) => (
                <div key={t as string} className="bg-white rounded-[20px] p-6 border border-black/5 reveal">
                  <Icon className="w-6 h-6 text-gold2" />
                  <h3 className="font-serif text-lg mt-4">{t as string}</h3>
                  <p className="text-sm text-muted mt-1.5">{d as string}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-cream relative z-10">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <div className="text-center mb-10 reveal">
              <div className="flex justify-center"><SectionLabel>Request a Meeting</SectionLabel></div>
              <h2 className="font-serif font-bold text-4xl md:text-5xl mt-5">Let's <em className="text-gold italic">talk.</em></h2>
              <p className="mt-3 text-sm text-muted max-w-sm mx-auto leading-relaxed">
                Fill out the form and our partnerships team will follow up within 2 business days.
              </p>
            </div>

            <div
              className="relative bg-white rounded-[28px] border border-black/5 shadow-[0_4px_24px_-8px_rgba(12,11,9,0.06)] overflow-hidden reveal"
              style={{ minHeight: "677px" }}
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
                src="https://link.webtechs.dev/widget/form/kBYaXiYcxo8iwCmUcrgP"
                style={{
                  width: "100%",
                  height: "677px",
                  border: "none",
                  borderRadius: "28px",
                  display: "block",
                  opacity: formLoaded ? 1 : 0,
                  transition: "opacity 0.4s ease",
                }}
                id="inline-kBYaXiYcxo8iwCmUcrgP"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Partnership form"
                data-height="677"
                data-layout-iframe-id="inline-kBYaXiYcxo8iwCmUcrgP"
                data-form-id="kBYaXiYcxo8iwCmUcrgP"
                title="Partnership form"
                onLoad={() => setFormLoaded(true)}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

