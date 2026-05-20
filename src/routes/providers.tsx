import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldButton } from "@/components/ui/Fancy";
import { providers, type ProviderType } from "@/data/providers";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Route = createFileRoute("/providers")({
  component: ProvidersPage,
  head: () => ({
    meta: [
      { title: "Meet Our Providers   Mindova Holdings" },
      { name: "description", content: "Licensed therapists, psychiatrists, counselors, and wellness coaches." },
    ],
  }),
});

const FILTERS: Array<"All" | ProviderType> = ["All", "Therapists", "Psychiatrists", "Counselors", "Wellness"];

function ProvidersPage() {
  useScrollAnimation();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = filter === "All" ? providers : providers.filter((p) => p.type === filter);

  useEffect(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el) => {
        el.classList.add("is-visible");
      });
    });
  }, [list]);

  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>
        <PageHero
          eyebrow="Our Network"
          title="Meet Our"
          emphasis="Providers"
          subtitle="A curated collective of board-certified specialists   selected for clinical excellence and genuine care."
        />

        <section className="py-12 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap gap-2 justify-center">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === f
                    ? "bg-dark text-cream shadow-[0_4px_16px_-8px_rgba(12,11,9,0.4)]"
                    : "bg-white border border-black/5 hover:border-dark/20 text-dark"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        <section className="pb-24 md:pb-32 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((p, i) => {
              const avatarStyles: Record<string, string> = {
                Therapists:    "bg-blue-100 text-blue-600 border border-blue-200",
                Psychiatrists: "bg-violet-100 text-violet-600 border border-violet-200",
                Counselors:    "bg-rose-100 text-rose-600 border border-rose-200",
                Wellness:      "bg-emerald-100 text-emerald-600 border border-emerald-200",
              };
              const tagStyles: Record<string, string> = {
                Therapists:    "bg-blue-50 text-blue-600 border-blue-100",
                Psychiatrists: "bg-violet-50 text-violet-600 border-violet-100",
                Counselors:    "bg-rose-50 text-rose-600 border-rose-100",
                Wellness:      "bg-emerald-50 text-emerald-600 border-emerald-100",
              };
              const avatar = avatarStyles[p.type] ?? "bg-cream2 text-gold border-black/5";
              const tag    = tagStyles[p.type]    ?? "bg-cream2 text-dark/70 border-black/5";
              return (
                <article
                  key={p.id}
                  data-reveal-delay={String((i % 3) * 80)}
                  className="bg-white rounded-[20px] p-6 border border-black/5 hover:border-gold2/40 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-16px_rgba(12,11,9,0.12)] transition-all duration-300 reveal"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl grid place-items-center font-serif text-lg flex-shrink-0 ${avatar}`}>
                      {p.initials}
                    </div>
                    <div>
                      <p className="font-serif text-lg leading-tight">{p.name}</p>
                      <p className="text-xs text-muted mt-0.5">{p.credentials}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted leading-relaxed">{p.specialty}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.tags.map((t) => (
                      <span key={t} className={`text-[11px] tracking-wider px-2.5 py-1 rounded-full border font-medium ${tag}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 mt-4 text-gold2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="ml-1.5 text-xs text-muted">{p.rating}</span>
                  </div>
                  <a
                    href="/booking"
                    className="mt-5 inline-flex w-full justify-center items-center text-sm border border-dark/10 rounded-full py-2.5 font-medium hover:bg-dark hover:text-gold3 hover:border-transparent transition-all duration-200"
                  >
                    Book with {p.name.split(" ")[1] || p.name}
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* Discovery Call CTA */}
        <section className="py-20 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="relative overflow-hidden rounded-[28px] bg-dark text-cream p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute inset-0 bg-grid-dark opacity-30" />
              <div className="absolute inset-0 gold-glow pointer-events-none" />
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gold2/10 blur-3xl pointer-events-none" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gradient text-gold3 text-[10px] tracking-[0.22em] uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold3 animate-pulse" />
                  Same-Week Availability
                </span>
                <h2 className="font-serif text-3xl md:text-4xl">
                  Not sure where to start?
                </h2>
                <p className="mt-3 text-cream/65 text-sm max-w-lg leading-relaxed">
                  Book a free 15-minute discovery call. Our care coordinators will match you with the right provider and service.
                </p>
              </div>
              <div className="relative flex-shrink-0">
                <a
                  href="/booking"
                  className="inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-8 py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_12px_30px_-12px_rgba(207,168,78,0.65)] whitespace-nowrap"
                >
                  Schedule a Discovery Call →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="py-24 md:py-32 bg-dark text-cream relative z-10 overflow-hidden">
          <div className="absolute inset-0 gold-glow" />
          <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
            <SectionLabel light>Join the Network</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl mt-5">Are you a licensed <em className="text-gold3 italic">provider?</em></h2>
            <p className="mt-5 max-w-xl mx-auto text-cream/70 text-sm leading-relaxed">
              Mindova is building the next generation of behavioral health infrastructure. Join a vetted network of clinicians shaping modern, accessible care.
            </p>
            <div className="mt-8 inline-flex"><GoldButton to="/provider-apply">Apply as a Provider</GoldButton></div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-cream2 relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14 reveal">
              <div className="flex justify-center"><SectionLabel>Onboarding</SectionLabel></div>
              <h2 className="font-serif text-4xl md:text-5xl mt-5">Joining is <em className="text-gold italic">simple.</em></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { n: "01", title: "Resume Upload", color: "bg-blue-50 border-blue-100", badge: "bg-blue-500 text-white" },
                { n: "02", title: "License Verification", color: "bg-violet-50 border-violet-100", badge: "bg-violet-500 text-white" },
                { n: "03", title: "Availability Intake", color: "bg-emerald-50 border-emerald-100", badge: "bg-emerald-500 text-white" },
                { n: "04", title: "Community Impact", color: "bg-amber-50 border-amber-100", badge: "bg-amber-500 text-white" },
              ].map(({ n, title, color, badge }) => (
                <div key={n} className={`rounded-[20px] p-6 border reveal card-lift ${color}`}>
                  <div className={`w-10 h-10 rounded-full grid place-items-center font-serif text-base shadow-sm ${badge}`}>{n}</div>
                  <h3 className="font-serif text-lg mt-4">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
