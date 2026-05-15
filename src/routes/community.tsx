import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldButton } from "@/components/ui/Fancy";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/community")({
  component: CommunityPage,
  head: () => ({
    meta: [
      { title: "Community   Mindova Holdings" },
      { name: "description", content: "Healing Is a Movement. Free programs, nonprofit partnerships, and community-rooted behavioral health." },
    ],
  }),
});

function CommunityPage() {
  useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>
        <PageHero
          eyebrow="The Movement"
          title="Healing Is"
          emphasis="a Movement"
          subtitle="Behavioral health rooted in community   free programs, nonprofit partnerships, and care that reaches the people who need it most."
        />
        <section className="py-24 md:py-32 bg-cream relative z-10">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center reveal">
            <Quote className="w-7 h-7 text-gold2 mx-auto" />
            <p className="mt-6 font-serif text-3xl md:text-4xl italic text-dark leading-snug">
              "Healthcare isn't just a service   it's infrastructure for the communities we serve."
            </p>
          </div>
        </section>

        <section className="py-24 bg-cream2 relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14 reveal">
              <div className="flex justify-center"><SectionLabel>Programs</SectionLabel></div>
              <h2 className="font-serif text-4xl md:text-5xl mt-5">Community <em className="text-gold italic">Programs</em></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                ["Free Support Programs", "Subsidized mental health sessions for qualifying individuals and families."],
                ["Nonprofit Partnerships", "Collaborating with mission-driven organizations to expand access to care."],
                ["Referral Network", "Community referrals and coordinated handoffs across our partner network."],
              ].map(([t, d]) => (
                <div key={t} className="bg-white rounded-[20px] p-7 border border-black/5 reveal">
                  <h3 className="font-serif text-xl text-dark">{t}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-dark text-cream relative z-10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-dark2 rounded-[20px] p-10 border border-white/5 reveal">
              <Quote className="w-7 h-7 text-gold2" />
              <p className="mt-6 font-serif italic text-2xl md:text-3xl text-cream/90 leading-snug">
                "We believe care should be a foundation, not a privilege. The movement begins where access ends."
              </p>
            </div>
            <div className="reveal">
              <SectionLabel light>The Initiative</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5">A new model for <em className="text-gold3 italic">access.</em></h2>
              <p className="mt-5 text-cream/65 text-sm leading-relaxed max-w-md">
                Healing Is a Movement is our long-term commitment to making behavioral health accessible, dignified, and rooted in community.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["15+", "Partners"],
              ["500+", "People Helped"],
              ["8", "Cities"],
              ["3", "Years Active"],
            ].map(([v, l]) => (
              <div key={l} className="bg-white border border-black/5 rounded-[20px] p-7 reveal">
                <p className="font-serif text-5xl text-dark">{v}</p>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted mt-3">{l}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 md:py-28 bg-dark text-cream relative z-10">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl">Is your organization seeking <em className="text-gold3 italic">behavioral health support?</em></h2>
            <div className="mt-8 inline-flex"><GoldButton to="/partnerships">Request a Partnership Meeting</GoldButton></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
