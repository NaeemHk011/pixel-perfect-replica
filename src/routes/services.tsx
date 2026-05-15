import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/services";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Check } from "lucide-react";

const svcThemes = [
  { bg: "bg-blue-50/70", border: "border-blue-100", iconBg: "bg-blue-100 group-hover:bg-blue-900/30", iconColor: "text-blue-500 group-hover:text-blue-300", numColor: "text-blue-200 group-hover:text-gold2/30", topBar: "from-blue-300/40 via-blue-500/60 to-blue-300/40", glow: "svc-glow-blue" },
  { bg: "bg-violet-50/70", border: "border-violet-100", iconBg: "bg-violet-100 group-hover:bg-violet-900/30", iconColor: "text-violet-500 group-hover:text-violet-300", numColor: "text-violet-200 group-hover:text-gold2/30", topBar: "from-violet-300/40 via-violet-500/60 to-violet-300/40", glow: "svc-glow-violet" },
  { bg: "bg-rose-50/70", border: "border-rose-100", iconBg: "bg-rose-100 group-hover:bg-rose-900/30", iconColor: "text-rose-500 group-hover:text-rose-300", numColor: "text-rose-200 group-hover:text-gold2/30", topBar: "from-rose-300/40 via-rose-500/60 to-rose-300/40", glow: "svc-glow-rose" },
  { bg: "bg-emerald-50/70", border: "border-emerald-100", iconBg: "bg-emerald-100 group-hover:bg-emerald-900/30", iconColor: "text-emerald-600 group-hover:text-emerald-300", numColor: "text-emerald-200 group-hover:text-gold2/30", topBar: "from-emerald-300/40 via-emerald-500/60 to-emerald-300/40", glow: "svc-glow-emerald" },
  { bg: "bg-orange-50/70", border: "border-orange-100", iconBg: "bg-orange-100 group-hover:bg-orange-900/30", iconColor: "text-orange-500 group-hover:text-orange-300", numColor: "text-orange-200 group-hover:text-gold2/30", topBar: "from-orange-300/40 via-orange-500/60 to-orange-300/40", glow: "svc-glow-orange" },
  { bg: "bg-amber-50/70", border: "border-amber-100", iconBg: "bg-amber-100 group-hover:bg-amber-900/30", iconColor: "text-amber-600 group-hover:text-amber-300", numColor: "text-amber-200 group-hover:text-gold2/30", topBar: "from-amber-300/40 via-amber-500/60 to-amber-300/40", glow: "svc-glow-amber" },
];

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services   Mindova Holdings" },
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
          subtitle="Comprehensive behavioral health care   therapy, psychiatry, and wellness   delivered with clinical excellence and genuine care."
        />
        <section className="py-24 md:py-32 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              const t = svcThemes[i % svcThemes.length];
              return (
                <article
                  key={s.id}
                  data-reveal-delay={String(i * 70)}
                  className={`group relative rounded-[20px] p-7 border transition-all duration-500 hover:bg-dark hover:border-white/5 hover:-translate-y-1.5 reveal overflow-hidden ${t.bg} ${t.border} ${t.glow}`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${t.topBar} transition-opacity duration-500 group-hover:opacity-0`} />
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold3/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${t.iconBg}`}>
                      <Icon className={`w-5 h-5 transition-colors duration-500 ${t.iconColor}`} />
                    </div>
                    <span className={`text-3xl font-serif transition-colors duration-500 ${t.numColor}`}>{s.number}</span>
                  </div>
                  <h3 className="font-serif text-2xl group-hover:text-gold3 transition-colors duration-500">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted group-hover:text-cream/70 transition-colors duration-500">{s.fullDesc}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-muted group-hover:text-cream/80 transition-colors duration-500">
                        <Check className="w-4 h-4 text-gold2 group-hover:text-gold3 mt-0.5 flex-shrink-0 transition-colors duration-500" /> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm text-transparent group-hover:text-gold3 transition-colors duration-500">
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
                { n: "01", title: "Book Online", desc: "Choose your service and preferred provider.", color: "bg-blue-50 border-blue-100", numBg: "bg-blue-500 text-white" },
                { n: "02", title: "Complete Intake", desc: "Fill out your secure intake form in minutes.", color: "bg-violet-50 border-violet-100", numBg: "bg-violet-500 text-white" },
                { n: "03", title: "Start Your Care", desc: "Connect via telehealth and begin your plan.", color: "bg-emerald-50 border-emerald-100", numBg: "bg-emerald-500 text-white" },
              ].map(({ n, title, desc, color, numBg }) => (
                <div key={n} className={`rounded-[20px] p-7 border reveal card-lift ${color}`}>
                  <div className={`w-12 h-12 rounded-full grid place-items-center font-serif text-lg ${numBg} shadow-sm`}>{n}</div>
                  <h3 className="font-serif text-xl mt-5">{title}</h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{desc}</p>
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
