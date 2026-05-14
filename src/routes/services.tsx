import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/services";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Mindova Holdings" },
      { name: "description", content: "Therapy, psychiatry, diagnostics, wellness, community outreach, and insurance navigation." },
    ],
  }),
});

function ServicesPage() {
  useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>
        <PageHero
          eyebrow="What We Offer"
          title="Our"
          emphasis="Services"
          subtitle="Comprehensive behavioral health care — therapy, psychiatry, and wellness — delivered with clinical excellence and genuine care."
        />
        <section className="py-24 md:py-32 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.id} className="group bg-white border border-black/5 rounded-[20px] p-7 transition-all duration-500 hover:bg-dark hover:-translate-y-1 reveal">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-cream2 group-hover:bg-white/5 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-gold2" />
                    </div>
                    <span className="text-3xl font-serif text-dark/15 group-hover:text-gold2/40">{s.number}</span>
                  </div>
                  <h3 className="font-serif text-2xl group-hover:text-gold3 transition-colors">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted group-hover:text-cream/70 transition-colors">{s.fullDesc}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-muted group-hover:text-cream/80 transition-colors">
                        <Check className="w-4 h-4 text-gold2 mt-0.5 flex-shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm text-gold group-hover:text-gold3 transition-colors">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="py-24 md:py-28 bg-cream2 relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14 reveal">
              <div className="flex justify-center"><SectionLabel>The Process</SectionLabel></div>
              <h2 className="font-serif text-4xl md:text-5xl mt-5">How It <em className="text-gold italic">Works</em></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                ["01", "Book Online", "Choose your service and preferred provider."],
                ["02", "Complete Intake", "Fill out your secure intake form in minutes."],
                ["03", "Start Your Care", "Connect via telehealth and begin your plan."],
              ].map(([n, t, d]) => (
                <div key={n} className="bg-white rounded-[20px] p-7 border border-black/5 reveal">
                  <div className="w-12 h-12 rounded-full border-2 border-gold2 grid place-items-center font-serif text-gold">{n}</div>
                  <h3 className="font-serif text-xl mt-5">{t}</h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div className="reveal">
              <SectionLabel>Insurance & Pricing</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5">Transparent <em className="text-gold italic">from day one.</em></h2>
              <p className="mt-5 text-muted text-sm leading-relaxed max-w-md">
                We accept most major insurance plans and verify your benefits before your first appointment. Prefer cash pay? Our rates are clear, fair, and posted up front.
              </p>
              <p className="mt-4 text-muted text-sm">Accepted: Aetna · Blue Cross · Cigna · United · Humana · Anthem</p>
            </div>
            <div className="bg-dark text-cream rounded-[24px] p-8 reveal">
              <h3 className="font-serif text-2xl text-gold3">Cash-Pay Rates</h3>
              <div className="mt-6 divide-y divide-white/10 text-sm">
                {[
                  ["Consultation", "$150"],
                  ["Diagnostic Imaging", "$200"],
                  ["Specialist Care", "$320"],
                  ["Annual Monitoring", "$1,000"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-4">
                    <span className="text-cream/70">{k}</span>
                    <span className="font-serif text-lg text-gold2">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}
