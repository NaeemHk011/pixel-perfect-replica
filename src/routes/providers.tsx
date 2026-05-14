import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
      { title: "Meet Our Providers — Mindova Holdings" },
      { name: "description", content: "Licensed therapists, psychiatrists, counselors, and wellness coaches." },
    ],
  }),
});

const FILTERS: Array<"All" | ProviderType> = ["All", "Therapists", "Psychiatrists", "Counselors", "Wellness"];

function ProvidersPage() {
  useScrollAnimation();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = filter === "All" ? providers : providers.filter((p) => p.type === filter);

  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>
        <PageHero
          eyebrow="Our Network"
          title="Meet Our"
          emphasis="Providers"
          subtitle="A curated collective of board-certified specialists — selected for clinical excellence and genuine care."
        />

        <section className="py-12 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap gap-2 justify-center">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  filter === f ? "bg-dark text-cream" : "bg-white border border-black/5 hover:border-dark/20 text-dark"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        <section className="pb-24 md:pb-32 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((p) => (
              <article key={p.id} className="bg-white rounded-[20px] p-6 border border-black/5 hover:border-gold2/60 transition-all hover:-translate-y-1 reveal">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-cream2 grid place-items-center font-serif text-gold text-lg">{p.initials}</div>
                  <div>
                    <p className="font-serif text-lg">{p.name}</p>
                    <p className="text-xs text-muted">{p.credentials}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted">{p.specialty}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] tracking-wider px-2.5 py-1 rounded-full bg-cream2 text-dark/70">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-4 text-gold2 text-xs">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  <span className="ml-1 text-muted">{p.rating}</span>
                </div>
                <a href="/booking" className="mt-5 inline-flex w-full justify-center items-center text-sm border border-dark/10 rounded-full py-2.5 hover:bg-dark hover:text-gold3 transition-colors">
                  Book with {p.name.split(" ")[1] || p.name}
                </a>
              </article>
            ))}
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
            <div className="mt-8 inline-flex"><GoldButton to="/partnerships">Apply to Join</GoldButton></div>
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
                ["01", "Resume Upload"],
                ["02", "License Verification"],
                ["03", "Availability Intake"],
                ["04", "Community Impact"],
              ].map(([n, t]) => (
                <div key={n} className="bg-white rounded-[20px] p-6 border border-black/5 reveal">
                  <span className="font-serif text-gold2 text-lg">{n}</span>
                  <h3 className="font-serif text-lg mt-3">{t}</h3>
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
