import { useState } from "react";
import { Check, Plus, Minus, AlertCircle } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldButton, GhostButton } from "@/components/ui/Fancy";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  titleEmphasis: string;
  subtitle: string;
  heroIcon: string;
  whatIsIt: string;
  whoIsItFor: string[];
  whatToExpect: {
    step: string;
    title: string;
    description: string;
  }[];
  includes: string[];
  pricing: {
    label: string;
    amount: string;
    note: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export function ServicePageTemplate({
  eyebrow,
  title,
  titleEmphasis,
  subtitle,
  heroIcon,
  whatIsIt,
  whoIsItFor,
  whatToExpect,
  includes,
  pricing,
  faqs,
}: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  useScrollAnimation();

  return (
    <>
      {/* A. Hero Banner */}
      <section className="relative bg-dark text-cream overflow-hidden pt-44 pb-32 md:pt-56 md:pb-40">
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="absolute inset-0 gold-glow pointer-events-none" />
        <div className="absolute -top-16 right-1/4 w-72 h-72 rounded-full bg-gold2/[0.08] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full bg-blue-500/[0.06] blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <div className="reveal">
            <span className="text-[11px] tracking-[0.3em] text-gold uppercase font-medium">
              {eyebrow}
            </span>
            <div className="text-5xl mt-6 leading-none select-none">{heroIcon}</div>
            <h1 className="font-serif text-5xl md:text-7xl mt-5 tracking-tight leading-[1.08]">
              {title} <em className="text-gold italic">{titleEmphasis}</em>
            </h1>
            <p className="mt-6 text-cream/65 text-base max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <GoldButton to="/booking">Book Appointment</GoldButton>
              <GhostButton to="/services" light>View All Services</GhostButton>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <div className="bg-amber-50 border-y border-amber-200 py-4 relative z-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong>Disclaimer:</strong> Coaching services provided through Mindova are non-clinical in nature and are not intended to diagnose, treat, or replace licensed mental health care. For clinical mental health concerns, please consult with a licensed professional.
          </p>
        </div>
      </div>

      {/* B. What Is It */}
      <section className="py-24 md:py-32 bg-cream relative z-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="reveal">
            <SectionLabel>Overview</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
              What Is Medication <em className="text-gold italic">{titleEmphasis}?</em>
            </h2>
            <p className="mt-6 text-muted text-sm leading-relaxed">{whatIsIt}</p>
          </div>

          <div className="reveal" data-reveal-delay="120">
            <div className="bg-dark text-cream rounded-[20px] p-8 border border-gold/20 relative overflow-hidden">
              <div className="absolute inset-0 gold-glow opacity-50 pointer-events-none" />
              <div className="relative">
                <h3 className="font-serif text-xl text-gold3 mb-6">Who Is This For?</h3>
                <ul className="space-y-3">
                  {whoIsItFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-cream/80">
                      <span className="w-2 h-2 rounded-full bg-gold3 mt-[5px] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. What To Expect */}
      <section className="py-24 md:py-32 bg-white relative z-10">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="text-center mb-16 reveal">
            <div className="flex justify-center">
              <SectionLabel>The Process</SectionLabel>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
              What to <em className="text-gold italic">Expect</em>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gold/15 hidden md:block" />

            <div className="space-y-8">
              {whatToExpect.map(({ step, title: stepTitle, description }, i) => (
                <div
                  key={step}
                  data-reveal-delay={String(i * 100)}
                  className="reveal flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold2 text-dark flex items-center justify-center font-serif text-sm font-semibold z-10 relative shadow-[0_4px_12px_-4px_rgba(207,168,78,0.5)]">
                    {step}
                  </div>
                  <div className="pt-1.5 pb-2">
                    <h3 className="font-serif text-xl">{stepTitle}</h3>
                    <p className="mt-1.5 text-sm text-muted leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* D. What's Included */}
      <section className="py-24 md:py-32 bg-cream2 relative z-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14 reveal">
            <div className="flex justify-center">
              <SectionLabel>Included</SectionLabel>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
              Everything <em className="text-gold italic">Covered</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto reveal" data-reveal-delay="80">
            {includes.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-gold2/15 border border-gold2/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-gold2" />
                </div>
                <span className="text-dark/80 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E. Pricing Card */}
      <section className="py-24 md:py-32 bg-white relative z-10">
        <div className="max-w-md mx-auto px-5 md:px-8 text-center">
          <div className="reveal bg-dark text-cream rounded-3xl p-10 border border-gold/25 relative overflow-hidden">
            <div className="absolute inset-0 gold-glow opacity-60 pointer-events-none" />
            <div className="relative">
              <span className="text-[11px] tracking-[0.28em] text-gold2 uppercase">{pricing.label}</span>
              <div className="font-serif text-6xl text-gold3 mt-3 leading-none">{pricing.amount}</div>
              <p className="mt-3 text-sm text-cream/60 leading-relaxed">{pricing.note}</p>
              <p className="mt-3 text-xs text-cream/40 tracking-wider">Insurance Accepted · Cash-Pay Available</p>
              <div className="mt-8 flex justify-center">
                <GoldButton to="/booking">Book Appointment</GoldButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F. Mini FAQ */}
      <section className="py-24 md:py-32 bg-cream relative z-10">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14 reveal">
            <div className="flex justify-center">
              <SectionLabel>FAQ</SectionLabel>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
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

      {/* G. CTA Banner */}
      <section className="py-20 md:py-28 bg-cream2 relative z-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="reveal relative overflow-hidden rounded-[28px] bg-dark text-cream p-10 md:p-16">
            <div className="absolute inset-0 bg-grid-dark opacity-30" />
            <div className="absolute inset-0 gold-glow pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gold2/10 blur-3xl pointer-events-none" />
            <div className="absolute -right-8 -bottom-16 font-serif text-[22rem] leading-none text-white/[0.025] select-none pointer-events-none">
              M
            </div>

            <div className="relative text-center max-w-xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
                Ready to <em className="text-gold3 italic">begin?</em>
              </h2>
              <p className="mt-4 text-cream/65 text-sm leading-relaxed">
                Take the first step toward better care today. Same-week availability, insurance accepted.
              </p>
              <div className="mt-8 flex justify-center">
                <GoldButton to="/booking">Book Appointment</GoldButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
