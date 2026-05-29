import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldButton } from "@/components/ui/Fancy";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Video,
  ShieldCheck,
  Clock,
  Globe,
  CheckCircle2,
  Brain,
  Pill,
  Leaf,
  ArrowRight,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/virtual-wellness")({
  component: VirtualWellnessPage,
  head: () => ({
    meta: [
      { title: "Virtual Wellness | Mindova Holdings" },
      {
        name: "description",
        content:
          "Access therapy, medication management, psychiatric care, and wellness coaching — completely virtual, HIPAA-secure, and available in all 50 states.",
      },
    ],
  }),
});

const services = [
  {
    icon: Brain,
    title: "Virtual Therapy",
    desc: "Individual, couples, and group therapy delivered by licensed clinicians — from the comfort of your home.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Pill,
    title: "Medication Management",
    desc: "Ongoing psychiatric medication review and management by board-certified psychiatrists and PMHNPs.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: Leaf,
    title: "Wellness Coaching",
    desc: "Life coaching, accountability coaching, and personal development support — virtual, flexible, and effective.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Video,
    title: "Psychiatric Evaluations",
    desc: "Comprehensive psychiatric assessments and evaluations via secure video — no in-office visit required.",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
] as const;

const benefits = [
  { icon: Globe,      text: "Available in all 50 states"              },
  { icon: ShieldCheck, text: "HIPAA-secure video platform"            },
  { icon: Clock,       text: "Flexible scheduling — evenings & weekends" },
  { icon: Video,       text: "No commute, no waiting room"            },
] as const;

const whoIsItFor = [
  "Individuals with busy schedules who can't attend in-person sessions",
  "People in rural or underserved areas with limited local options",
  "Those seeking therapy, psychiatry, or coaching from home",
  "Anyone who prefers the privacy and comfort of virtual care",
  "Patients stepping down from higher levels of care",
  "People across all 50 states, regardless of location",
] as const;

const testimonials = [
  {
    quote: "Being able to see my therapist from home changed everything. No commute, no anxiety about the waiting room — just real support.",
    name: "M. Johnson",
    role: "Virtual Therapy Client",
    rating: 5,
  },
  {
    quote: "My psychiatrist manages my medication virtually and is always available. The platform is seamless and totally secure.",
    name: "D. Rivera",
    role: "Medication Management Client",
    rating: 5,
  },
  {
    quote: "I never thought virtual coaching could be this effective. My wellness coach keeps me accountable and I've seen real results.",
    name: "A. Patel",
    role: "Wellness Coaching Client",
    rating: 5,
  },
] as const;

function VirtualWellnessPage() {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>

        {/* ── Hero ── */}
        <section className="relative bg-dark text-cream overflow-hidden pt-40 pb-24 md:pt-48 md:pb-28">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute inset-0 gold-glow pointer-events-none" />
          <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-blue-500/[0.07] blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-violet-500/[0.06] blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs tracking-[0.18em] uppercase mb-5">
              <Video className="w-3.5 h-3.5" />
              Virtual Care
            </span>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Wellness,{" "}
              <em className="text-gold3 italic">Wherever You Are</em>
            </h1>

            <p className="mt-7 mx-auto max-w-2xl text-sm md:text-base text-cream/65 leading-relaxed">
              Access therapy, medication management, psychiatric care, and wellness coaching — completely virtual, compassionate, and available across all 50 states.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <GoldButton to="/get-matched">Get Matched</GoldButton>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 border border-white/25 text-white hover:border-gold2 hover:text-gold3 font-semibold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 uppercase tracking-wide"
              >
                Book a Session
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs text-cream/50 tracking-[0.12em] uppercase">
                  <Icon className="w-3.5 h-3.5 text-gold2/70 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Wave divider */}
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="vwWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#B89040" />
                <stop offset="50%"  stopColor="#E4C06A" />
                <stop offset="100%" stopColor="#B89040" />
              </linearGradient>
            </defs>
            <path d="M0,28 C360,56 720,0 1440,28 L1440,56 L0,56 Z" fill="url(#vwWave)" />
          </svg>
        </section>

        {/* Gold divider */}
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #B89040 0%, #E4C06A 40%, #CFA84E 70%, #B89040 100%)" }} />

        {/* ── Services ── */}
        <section className="py-24 md:py-32 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">

            <div className="text-center mb-14 reveal">
              <SectionLabel>Virtual Services</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
                Everything you need,{" "}
                <em className="text-gold italic">online</em>
              </h2>
              <p className="mt-4 text-sm text-muted max-w-lg mx-auto leading-relaxed">
                From clinical therapy to wellness coaching — all delivered through a HIPAA-secure platform with no travel required.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
                <div
                  key={title}
                  className="reveal bg-white rounded-2xl p-8 border border-dark/[0.07] shadow-[0_4px_24px_-8px_rgba(12,11,9,0.08)]"
                  data-reveal-delay={String(i * 80)}
                >
                  <div className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center mb-5`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <h3 className="font-serif text-xl text-dark mb-2">{title}</h3>
                  <p className="text-sm text-dark/65 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Who Is It For ── */}
        <section className="py-24 md:py-32 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            <div className="reveal">
              <SectionLabel>Who It's For</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
                Real care,{" "}
                <em className="text-gold italic">no barriers</em>
              </h2>
              <p className="mt-5 text-muted text-sm leading-relaxed max-w-lg">
                Virtual care removes the obstacles that keep people from getting support — distance, scheduling, stigma, and cost. If you have a device and an internet connection, you can access Mindova.
              </p>
              <div className="mt-8">
                <GoldButton to="/get-matched">Start Your Journey</GoldButton>
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

        {/* ── Testimonials ── */}
        <section className="py-24 md:py-32 bg-dark relative z-10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute inset-0 gold-glow opacity-50 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14 reveal">
              <SectionLabel light>Patient Stories</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 text-cream tracking-tight">
                Real people,{" "}
                <em className="text-gold3 italic">real results</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map(({ quote, name, role, rating }, i) => (
                <div
                  key={name}
                  className="reveal bg-white/[0.05] border border-white/10 rounded-2xl p-7 hover:border-gold2/25 transition-all duration-300"
                  data-reveal-delay={String(i * 100)}
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold2 text-gold2" />
                    ))}
                  </div>
                  <p className="text-sm text-cream/75 leading-relaxed mb-5">"{quote}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-serif text-sm text-cream">{name}</p>
                    <p className="text-xs text-cream/45 mt-0.5">{role}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Bottom CTA Banner ── */}
        <section className="py-14 bg-[#F9F6F1] border-b border-dark/[0.06] relative z-10">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <div className="reveal bg-white rounded-2xl p-6 md:p-8 border border-dark/[0.07] shadow-[0_4px_20px_-8px_rgba(12,11,9,0.06)] flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-gold2/15 border border-gold2/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-gold2" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold2 mb-1">HIPAA Secure</p>
                <h3 className="font-serif text-xl text-dark">Your privacy is our priority</h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  All virtual sessions are conducted on a fully HIPAA-compliant, encrypted platform. Your information is always protected.
                </p>
              </div>
              <Link
                to="/get-matched"
                className="inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Get Started <ArrowRight className="w-4 h-4" />
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
