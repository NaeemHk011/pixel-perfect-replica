import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  const [sent, setSent] = useState(false);

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
              <h2 className="font-serif text-4xl md:text-5xl mt-5">Let's <em className="text-gold italic">talk.</em></h2>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-white border border-black/5 rounded-[24px] p-8 grid grid-cols-1 md:grid-cols-2 gap-5 reveal"
            >
              <Field label="Organization Name" required />
              <Field label="Contact Name" required />
              <Field label="Email" type="email" required />
              <Field label="Phone" type="tel" />
              <div className="md:col-span-2">
                <Label>Partnership Type</Label>
                <select className="mt-1 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2">
                  <option>Nonprofit Collaboration</option>
                  <option>Referral Partnership</option>
                  <option>Corporate Wellness</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <Label>Message</Label>
                <textarea rows={4} className="mt-1 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2" />
              </div>
              <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-muted">We typically respond within 2 business days.</p>
                <button type="submit" className="bg-gold2 hover:bg-gold3 text-dark font-medium px-7 py-3 rounded-full text-sm transition-colors">
                  {sent ? "Sent ✓" : "Submit Request"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs tracking-[0.2em] uppercase text-muted">{children}</label>;
}
function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}{required && <span className="text-gold ml-1">*</span>}</Label>
      <input type={type} required={required} className="mt-1 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2" />
    </div>
  );
}
