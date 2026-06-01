import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { ServiceCategory } from "@/data/services";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface Faq {
  question: string;
  answer: string;
}

export interface ServiceCategoryPageProps {
  category: ServiceCategory;
  heroImage: string;
  whoIsItFor: string[];
  process: ProcessStep[];
  faqs: Faq[];
}

export function ServiceCategoryPage({
  category,
  heroImage,
  whoIsItFor,
  process,
  faqs,
}: ServiceCategoryPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { icon: Icon, title, description, theme, services: subServices, number } = category;
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>
        {/* Hero */}
        <section className="relative bg-dark text-cream overflow-hidden pt-48 pb-12 md:pt-64 md:pb-20">
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
          <div className="absolute inset-0 gold-glow pointer-events-none" />
          <div className="absolute -top-16 right-1/4 w-72 h-72 rounded-full bg-gold2/[0.08] blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 items-center">
              {/* Text */}
              <div className="reveal py-12 md:py-20">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-[0.15em] uppercase mb-5 ${theme.iconBg} ${theme.labelColor}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {number}     {title}
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.06]">
                  {title}
                </h1>
                <p className="mt-5 text-cream/65 text-sm leading-relaxed max-w-lg">
                  {description}
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-6 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Book a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 border border-white/20 text-cream hover:border-white/40 px-6 py-3 rounded-full text-sm transition-all duration-200"
                  >
                    All Services
                  </Link>
                </div>
              </div>

              {/* Hero image */}
              <div className="reveal" data-reveal-delay="150">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-[400px] md:h-[650px] object-cover rounded-2xl shadow-2xl border border-white/10"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sub-service cards */}
        <section className="py-20 md:py-28 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14 reveal">
              <SectionLabel>What's Included</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5">
                Our <em className="text-gold italic">{title}</em> Programs
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subServices.map((svc, i) => (
                <article
                  key={svc.title}
                  data-reveal-delay={String(i * 90)}
                  className="reveal group rounded-[20px] p-7 bg-white border border-black/5 hover:border-dark/10 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className={`w-8 h-8 rounded-lg ${theme.iconBg} flex items-center justify-center mb-4`}
                  >
                    <span className={`font-serif text-sm font-bold ${theme.labelColor}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl">{svc.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{svc.description}</p>
                  <ul className="mt-4 space-y-2">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted">
                        <Check
                          className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${theme.checkColor}`}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Who is it for */}
        <section className="py-20 md:py-24 bg-dark text-cream relative z-10">
          <div className="absolute inset-0 gold-glow opacity-40 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <SectionLabel light>Who Is This For?</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5">
                Is this right <em className="text-gold3 italic">for you?</em>
              </h2>
              <p className="mt-5 text-cream/65 text-sm leading-relaxed">
                Our {title} programs are designed for anyone ready to take a proactive, evidence-based approach to their wellbeing and growth.
              </p>
            </div>
            <div className="reveal grid gap-3" data-reveal-delay="100">
              {whoIsItFor.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/8"
                >
                  <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-gold3" />
                  <span className="text-sm text-cream/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28 bg-cream2 relative z-10">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14 reveal">
              <div className="flex justify-center">
                <SectionLabel>The Process</SectionLabel>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mt-5">
                What to <em className="text-gold italic">Expect</em>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gold/15 hidden md:block" />
              <div className="space-y-8">
                {process.map(({ step, title: stepTitle, description: stepDesc }, i) => (
                  <div
                    key={step}
                    data-reveal-delay={String(i * 100)}
                    className="reveal flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold2 text-dark flex items-center justify-center font-serif text-sm font-semibold z-10 relative shadow-[0_4px_12px_-4px_rgba(207,168,78,0.5)]">
                      {step}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="font-serif text-xl">{stepTitle}</h3>
                      <p className="mt-1.5 text-sm text-muted leading-relaxed">{stepDesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-cream relative z-10">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14 reveal">
              <div className="flex justify-center">
                <SectionLabel>FAQ</SectionLabel>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mt-5">
                Common <em className="text-gold italic">Questions</em>
              </h2>
            </div>
            <div className="space-y-3 reveal" data-reveal-delay="80">
              {faqs.map(({ question, answer }, i) => {
                const isOpen = openFaq === i;
                return (
                  <button
                    key={question}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className={`w-full text-left rounded-[16px] border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-cream2 border-gold/25 shadow-[inset_3px_0_0_0_#B89040]"
                        : "bg-white border-black/5 hover:border-black/12 hover:bg-cream/50"
                    }`}
                  >
                    <div className="flex items-center justify-between p-5 gap-4">
                      <span className="font-serif text-lg pr-2 text-left">{question}</span>
                      <span
                        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                          isOpen ? "bg-gold/15 text-gold" : "bg-black/5 text-muted"
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </div>
                    <div
                      className="grid transition-all duration-300 px-5"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-muted leading-relaxed pb-5">{answer}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}
