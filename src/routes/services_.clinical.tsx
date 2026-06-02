import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldButton } from "@/components/ui/Fancy";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2, Stethoscope, Brain, ClipboardList, Pill, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/services_/clinical")({
  component: ClinicalServicesPage,
  head: () => ({
    meta: [
      { title: "Clinical Mental Health Services | Mindova Holdings" },
      { name: "description", content: "Licensed therapy, psychiatric evaluations, medication management, and psychological assessments  - delivered virtually by board-certified clinical professionals." },
    ],
  }),
});

const services = [
  {
    icon: Brain,
    title: "Therapy",
    desc: "Individual, couples, and group therapy delivered by licensed clinicians. Evidence-based modalities including CBT, DBT, EMDR, and trauma-informed care.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: ClipboardList,
    title: "Assessments",
    desc: "Comprehensive psychological and behavioral assessments to inform accurate diagnosis, treatment planning, and clinical decision-making.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: Stethoscope,
    title: "Psychiatric Services",
    desc: "Thorough psychiatric evaluations and diagnoses conducted by licensed psychiatrists and psychiatric nurse practitioners.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Pill,
    title: "Medication Management",
    desc: "Ongoing medication review, monitoring, and adjustment by prescribing clinicians to support your treatment outcomes.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
] as const;

const providers = [
  { title: "LPC",         full: "Licensed Professional Counselor"             },
  { title: "LMFT",        full: "Licensed Marriage & Family Therapist"         },
  { title: "LCSW",        full: "Licensed Clinical Social Worker"              },
  { title: "Psychologist",full: "Doctoral-level Psychologist"                  },
  { title: "Psychiatrist", full: "Board-Certified Psychiatrist"                },
  { title: "PMHNP",       full: "Psychiatric Mental Health Nurse Practitioner" },
] as const;

const whoIsItFor = [
  "Individuals experiencing anxiety, depression, trauma, or mood disorders",
  "Those seeking a psychiatric evaluation or diagnosis",
  "Anyone needing medication management or ongoing medication review",
  "People who want structured, evidence-based mental health care",
  "Families navigating a loved one's mental health challenges",
  "Individuals ready to begin their healing journey with professional support",
] as const;

function ClinicalServicesPage() {
  useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>

        {/* Hero */}
        <section className="relative bg-dark text-cream overflow-hidden pt-40 pb-24 md:pt-48 md:pb-28">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute inset-0 gold-glow pointer-events-none" />
          <div className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-blue-500/[0.07] blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs tracking-[0.18em] uppercase mb-5">
              <Stethoscope className="w-3.5 h-3.5" />
              Clinical Mental Health
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight">
              Licensed Clinical{" "}
              <em className="text-gold3 italic">Mental Health</em>
              <br />Services
            </h1>
            <p className="mt-7 mx-auto max-w-2xl text-sm md:text-base text-cream/65 leading-relaxed">
              Guided by licensed professionals. Mindova connects you with board-certified therapists, psychiatrists, and clinical specialists  - delivered virtually, with compassion and clinical excellence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <GoldButton to="/get-matched">Get Support</GoldButton>
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

        {/* Services Offered */}
        <section className="py-24 md:py-32 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14 reveal">
              <SectionLabel>Services Offered</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
                Clinical care,{" "}
                <em className="text-gold italic">every step</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map(({ icon: Icon, title, desc, color, bg }, i) => (
                <div
                  key={title}
                  className="reveal bg-white rounded-2xl p-8 border border-dark/[0.07] shadow-[0_4px_24px_-8px_rgba(12,11,9,0.08)] overflow-hidden"
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

        {/* Licensed Clinical Providers */}
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
                Every clinician is credentialed, vetted, and selected for clinical excellence and genuine care.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {providers.map(({ title, full }, i) => (
                <div
                  key={title}
                  className="reveal bg-white/[0.05] border border-white/10 rounded-2xl p-5 text-center hover:bg-white/[0.09] hover:border-gold2/30 transition-all duration-300"
                  data-reveal-delay={String(i * 60)}
                >
                  <p className="font-serif text-xl text-gold3">{title}</p>
                  <p className="text-[11px] text-cream/50 mt-2 leading-snug">{full}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who is it for */}
        <section className="py-24 md:py-32 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <SectionLabel>Who It's For</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
                Real support{" "}
                <em className="text-gold italic">when you need it</em>
              </h2>
              <p className="mt-5 text-muted text-sm leading-relaxed max-w-lg">
                Whether you're navigating a crisis, managing a diagnosis, or simply ready to prioritize your mental health  - our clinical team is here for you.
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
