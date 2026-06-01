import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { serviceCategories } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services     Mindova Holdings" },
      {
        name: "description",
        content:
          "Mental Health, Peptide Optimization, Virtual Behavioral Health, Coaching, Provider Partnerships, and Healthcare Consulting.",
      },
    ],
  }),
});

const categoryImages: Record<string, string> = {
  "mental-health":
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
  "peptide-wellness":
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
  "virtual-behavioral-health":
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  "coaching-development":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  "provider-partnerships":
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
  "healthcare-consulting":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
};

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
          subtitle="Six specialized service lines     designed to meet you where you are and take you where you want to go."
        />

        {/* Sticky category anchor nav */}
        <div className="sticky top-24 z-40 bg-white/85 backdrop-blur-md border-b border-black/5 shadow-sm">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <nav className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
              {serviceCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${cat.theme.iconBg} ${cat.theme.labelColor} hover:opacity-80`}
                  >
                    <Icon className="w-3 h-3" />
                    {cat.title}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Alternating image / text sections */}
        {serviceCategories.map((cat, idx) => {
          const Icon = cat.icon;
          const isEven = idx % 2 === 0;
          const image = categoryImages[cat.id];

          return (
            <section
              key={cat.id}
              id={cat.id}
              className={`py-20 md:py-28 relative z-10 ${cat.theme.sectionBg}`}
            >
              {/* Colored top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${cat.theme.accentVia} to-transparent`}
              />

              <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Text block */}
                <div
                  className={`reveal ${isEven ? "" : "md:order-2"}`}
                  data-reveal-delay="0"
                >
                  {/* Category badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-[0.15em] uppercase ${cat.theme.iconBg} ${cat.theme.labelColor}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat.number}     {cat.title}
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-5 tracking-tight">
                    {cat.title}
                  </h2>
                  <p className="mt-4 text-muted text-sm leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Sub-service list */}
                  <ul className="mt-7 space-y-3">
                    {cat.services.map((svc) => (
                      <li key={svc.title} className="flex items-start gap-3">
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${cat.theme.checkColor.replace("text-", "bg-")}`}
                        />
                        <div>
                          <span className="text-sm font-medium text-dark">
                            {svc.title}
                          </span>
                          <span className="text-sm text-muted">
                            {" "}
                                {svc.description}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={cat.link as any}
                    className={`mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${cat.theme.iconBg} ${cat.theme.labelColor} hover:opacity-80`}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Image block */}
                <div
                  className={`reveal ${isEven ? "" : "md:order-1"}`}
                  data-reveal-delay="120"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={image}
                      alt={cat.title}
                      className="w-full h-80 md:h-[500px] object-cover"
                      loading="lazy"
                    />
                    {/* Color overlay tint */}
                    <div
                      className={`absolute inset-0 ${cat.theme.iconBg} opacity-10`}
                    />
                    {/* Bottom label badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${cat.theme.iconBg} ${cat.theme.labelColor} shadow-sm`}
                      >
                        <Icon className="w-3 h-3" />
                        {cat.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Discovery CTA */}
        <section className="py-20 md:py-24 bg-cream relative z-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold2/40 to-transparent" />
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center reveal">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold2">
              Get Started
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">
              Not sure which service{" "}
              <em className="text-gold italic">fits you?</em>
            </h2>
            <p className="mt-4 text-muted text-sm leading-relaxed max-w-md mx-auto">
              Book a free 15-minute discovery call and we'll help you find the right fit across our six service lines.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-8 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-12px_rgba(207,168,78,0.55)]"
              >
                Book a Discovery Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/partnerships"
                className="inline-flex items-center gap-2 border border-dark/20 text-dark hover:border-dark/40 px-8 py-3 rounded-full text-sm transition-all duration-200"
              >
                Provider Partnerships
              </Link>
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}
