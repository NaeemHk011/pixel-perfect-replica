import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldButton } from "@/components/ui/Fancy";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2, Brain, ClipboardList, Stethoscope, Pill, ShieldCheck, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/services_/mental-health")({
  component: MentalHealthPage,
  head: () => ({
    meta: [
      { title: "Clinical Mental Health Services | Mindova Holdings" },
      { name: "description", content: "Evidence-based therapy, psychological assessments, psychiatric services, and medication management  - delivered by licensed clinical professionals." },
    ],
  }),
});

const services = [
  {
    icon: Brain,
    title: "Therapy",
    desc: "Individual, couples, and group therapy delivered by licensed clinicians using evidence-based approaches.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: ClipboardList,
    title: "Assessments",
    desc: "Psychological and behavioral assessments to understand your needs and guide a personalized treatment plan.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Stethoscope,
    title: "Psychiatric Services",
    desc: "Diagnosis and psychiatric evaluations conducted by board-certified psychiatrists and PMHNPs.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Pill,
    title: "Medication Management",
    desc: "Ongoing medication review and management to ensure your treatment plan stays effective and safe.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
] as const;

const providers = [
  { title: "LPC",           desc: "Licensed Professional Counselor"          },
  { title: "LMFT",          desc: "Licensed Marriage and Family Therapist"    },
  { title: "LCSW",          desc: "Licensed Clinical Social Worker"           },
  { title: "Psychologist",  desc: "Doctoral-level assessment & therapy"       },
  { title: "Psychiatrist",  desc: "Psychiatric evaluation & medication"       },
  { title: "PMHNP",         desc: "Psychiatric Mental Health Nurse Practitioner" },
] as const;

const whoIsItFor = [
  "Individuals experiencing anxiety, depression, trauma, or mood disorders",
  "Those seeking a psychiatric evaluation or medication management",
  "Anyone wanting high-quality clinical care without long waitlists",
  "Families navigating a loved one's mental health challenges",
  "People who prefer virtual care from a licensed professional",
  "Individuals stepping down from a higher level of care",
] as const;

function MentalHealthPage() {
  useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>

        {/* Hero */}
        <section className="relative bg-dark text-cream overflow-hidden pt-48 pb-32 md:pt-60 md:pb-36">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute inset-0 gold-glow pointer-events-none" />
          <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-blue-500/[0.08] blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-violet-500/[0.07] blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs tracking-[0.18em] uppercase mb-5">
              <Brain className="w-3.5 h-3.5" />
              Clinical Mental Health
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Mental Health{" "}
              <em className="text-gold3 italic">Services</em>
            </h1>
            <p className="mt-7 mx-auto max-w-2xl text-sm md:text-base text-cream/65 leading-relaxed">
              Compassionate, evidence-based clinical care  - from therapy and assessments to psychiatric services and medication management, delivered by licensed professionals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <GoldButton to="/get-matched">Get Matched</GoldButton>
            </div>
          </div>
        </section>

        {/* HIPAA / Licensed badge bar */}
        <div className="bg-dark border-t border-white/[0.06] py-3 relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-xs text-cream/55 tracking-[0.15em] uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              HIPAA Secure
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <span className="text-xs text-cream/55 tracking-[0.15em] uppercase">Licensed Clinical Professionals</span>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <span className="text-xs text-cream/55 tracking-[0.15em] uppercase">All 50 States</span>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-amber-50 border-y border-amber-200 py-4 relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Disclaimer:</strong> Coaching services provided through Mindova are non-clinical in nature and are not intended to diagnose, treat, or replace licensed mental health care. For clinical mental health concerns, please consult with a licensed professional.
            </p>
          </div>
        </div>

        {/* Services Offered */}
        <section className="py-24 md:py-32 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14 reveal">
              <SectionLabel>Services Offered</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
                Clinical care,{" "}
                <em className="text-gold italic">wherever you are</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map(({ icon: Icon, title, desc, color, bg }, i) => (
                <div
                  key={title}
                  className="reveal bg-white rounded-2xl p-8 border border-dark/[0.07] shadow-[0_4px_24px_-8px_rgba(12,11,9,0.08)]"
                  data-reveal-delay={String(i * 80)}
                >
                  <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <h3 className="font-serif text-xl text-dark mb-2">{title}</h3>
                  <p className="text-sm text-dark/65 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Licensed Clinical Professionals */}
        <section className="py-24 md:py-32 bg-dark relative z-10">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute inset-0 gold-glow opacity-60 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14 reveal">
              <SectionLabel light>Our Providers</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 text-cream tracking-tight">
                Licensed Clinical{" "}
                <em className="text-gold3 italic">Professionals</em>
              </h2>
              <p className="mt-4 text-cream/55 text-sm max-w-md mx-auto">
                Every provider is independently licensed, credentialed, and selected for clinical excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {providers.map(({ title, desc }, i) => (
                <div
                  key={title}
                  className="reveal bg-white/[0.05] border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.09] hover:border-gold2/30 transition-all duration-300"
                  data-reveal-delay={String(i * 70)}
                >
                  <p className="font-serif text-lg text-gold3">{title}</p>
                  <p className="text-[11px] text-cream/50 mt-2 leading-snug">{desc}</p>
                </div>
              ))}
            </div>

            {/* Licensed badge */}
            <div className="mt-10 flex justify-center reveal">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 text-xs tracking-[0.18em] uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                Licensed Clinical Professionals
              </span>
            </div>
          </div>
        </section>

        {/* Who is it for */}
        <section className="py-24 md:py-32 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <SectionLabel>Who It's For</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
                Real support  -{" "}
                <em className="text-gold italic">real results</em>
              </h2>
              <p className="mt-5 text-muted text-sm leading-relaxed max-w-lg">
                Whether you're navigating a diagnosis, seeking medication support, or simply ready to invest in your mental health  - our licensed clinicians are here.
              </p>
              <div className="mt-8">
                <GoldButton to="/get-matched">Get Matched with a Provider</GoldButton>
              </div>
            </div>
            <ul className="space-y-4 reveal" data-reveal-delay="120">
              {whoIsItFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-dark/75">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}
