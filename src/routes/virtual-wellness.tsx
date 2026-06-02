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
  Star,
  CalendarCheck,
  Laptop,
  HeartHandshake,
  Lock,
  Smartphone,
  AlertCircle,
} from "lucide-react";

export const Route = createFileRoute("/virtual-wellness")({
  component: VirtualWellnessPage,
  head: () => ({
    meta: [
      { title: "Virtual Wellness | Mindova Holdings" },
      {
        name: "description",
        content:
          "HIPAA-secure virtual sessions with licensed therapists, psychiatrists, and wellness coaches - from your home.",
      },
    ],
  }),
});

const howItWorksSteps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book",
    desc: "Select your service and schedule a session - same-week availability, no waitlists.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    number: "02",
    icon: Laptop,
    title: "Connect",
    desc: "Join your HIPAA-secure video session from any device - no downloads or special software needed.",
    color: "text-gold2",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Heal",
    desc: "Begin your care journey with a licensed professional guiding you every step of the way.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
] as const;

const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    desc: "Individual, couples, and group therapy delivered by licensed clinicians - from the comfort of your home.",
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
    icon: Video,
    title: "Psychiatric Evaluations",
    desc: "Comprehensive psychiatric assessments and evaluations via secure video - no in-office visit required.",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: Leaf,
    title: "Wellness Coaching",
    desc: "Life coaching, accountability coaching, and personal development support - virtual, flexible, and effective.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: HeartHandshake,
    title: "Crisis Support",
    desc: "Immediate virtual support for individuals in crisis - available, compassionate, and clinically backed.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
] as const;

const benefits = [
  { icon: Globe,       text: "Available in all 50 states"                 },
  { icon: ShieldCheck, text: "HIPAA-secure video platform"                },
  { icon: Clock,       text: "Flexible scheduling - evenings & weekends"  },
  { icon: Video,       text: "No commute, no waiting room"                },
] as const;

const testimonials = [
  {
    quote: "Being able to see my therapist from home changed everything. No commute, no anxiety about the waiting room - just real support.",
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
              Care From{" "}
              <em className="text-gold3 italic">Anywhere</em>
            </h1>

            <p className="mt-7 mx-auto max-w-2xl text-sm md:text-base text-cream/65 leading-relaxed">
              HIPAA-secure virtual sessions with licensed therapists, psychiatrists, and wellness coaches - from your home.
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

        {/* ── How Virtual Care Works ── */}
        <section className="py-20 md:py-28 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">

            <div className="text-center mb-14 reveal">
              <SectionLabel>How It Works</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 tracking-tight">
                How Virtual Care{" "}
                <em className="text-gold italic">Works</em>
              </h2>
              <p className="mt-3 text-sm text-muted max-w-lg mx-auto leading-relaxed">
                Getting started is simple - three steps between you and the support you deserve.
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Connector line - desktop only */}
              <div
                className="absolute top-[52px] left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] hidden md:block pointer-events-none"
                style={{ borderTop: "2px dashed rgba(207,168,78,0.35)" }}
              />

              {howItWorksSteps.map(({ number, icon: Icon, title, desc, color, bg, border }, i) => (
                <div
                  key={number}
                  className="reveal relative bg-white rounded-2xl p-7 border border-dark/[0.07] shadow-[0_4px_20px_-8px_rgba(12,11,9,0.08)] text-center"
                  data-reveal-delay={String(i * 100)}
                >
                  <div className={`mx-auto w-14 h-14 rounded-2xl ${bg} border ${border} flex items-center justify-center mb-5 relative`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-dark text-cream text-[10px] font-bold flex items-center justify-center">
                      {number.replace("0", "")}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-dark mb-2">{title}</h3>
                  <p className="text-sm text-dark/60 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Services Available Virtually ── */}
        <section className="py-24 md:py-32 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">

            <div className="text-center mb-14 reveal">
              <SectionLabel>Virtual Services</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
                Services available{" "}
                <em className="text-gold italic">virtually</em>
              </h2>
              <p className="mt-4 text-sm text-muted max-w-lg mx-auto leading-relaxed">
                From clinical therapy to wellness coaching - all delivered through a HIPAA-secure platform with no travel required.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
                <div
                  key={title}
                  className="reveal bg-[#F9F6F1] rounded-2xl p-8 border border-dark/[0.07] shadow-[0_4px_24px_-8px_rgba(12,11,9,0.08)]"
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

            {/* Coaching disclaimer */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 flex items-start gap-3 max-w-3xl mx-auto reveal">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Disclaimer:</strong> Coaching services provided through Mindova are non-clinical in nature and are not intended to diagnose, treat, or replace licensed mental health care. For clinical mental health concerns, please consult with a licensed professional.
              </p>
            </div>

          </div>
        </section>

        {/* ── Technology Section ── */}
        <section className="py-16 md:py-20 bg-cream relative z-10">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <div className="reveal bg-dark rounded-2xl p-8 md:p-10 text-cream relative overflow-hidden">
              <div className="absolute inset-0 gold-glow opacity-50 pointer-events-none" />
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-[10px] tracking-[0.24em] uppercase text-gold2 mb-3">Technology</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-cream">
                    No special software -{" "}
                    <em className="text-gold3 italic">any device with camera/mic</em>
                  </h3>
                  <p className="mt-4 text-sm text-cream/65 leading-relaxed">
                    Join your session from a laptop, tablet, or smartphone. No downloads, no installs - just click and connect in seconds.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: Laptop,      text: "Laptop or Desktop" },
                    { icon: Smartphone,  text: "Phone or Tablet"   },
                    { icon: Video,       text: "Any camera-enabled device" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 bg-white/[0.07] border border-white/10 rounded-xl px-4 py-3">
                      <Icon className="w-4 h-4 text-gold2 flex-shrink-0" />
                      <span className="text-sm text-cream/75">{text}</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-auto flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Privacy & Security ── */}
        <section className="py-16 bg-white relative z-10">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <div className="reveal bg-[#F9F6F1] rounded-2xl p-8 border border-dark/[0.07] shadow-[0_4px_20px_-8px_rgba(12,11,9,0.06)]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-7 h-7 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] tracking-[0.24em] uppercase text-emerald-600 mb-1">Privacy &amp; Security</p>
                  <h3 className="font-serif text-xl md:text-2xl text-dark">HIPAA-compliant, end-to-end encrypted</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Every session is conducted on a fully HIPAA-compliant, end-to-end encrypted platform. Your information, conversations, and health data are always protected and never shared.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-5">
                    {[
                      { icon: ShieldCheck, text: "HIPAA Compliant"       },
                      { icon: Lock,        text: "End-to-End Encrypted"  },
                      { icon: Globe,       text: "SOC 2 Certified Platform" },
                    ].map(({ icon: Icon, text }) => (
                      <span key={text} className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                        <Icon className="w-3.5 h-3.5" />{text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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

        {/* ── Bottom CTA ── */}
        <section className="py-14 bg-[#F9F6F1] relative z-10">
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center reveal">
            <h3 className="font-serif text-2xl md:text-3xl text-dark tracking-tight">
              Ready to start your{" "}
              <em className="text-gold italic">virtual care journey?</em>
            </h3>
            <p className="mt-3 text-sm text-muted max-w-md mx-auto leading-relaxed">
              Get matched with a licensed provider in 24–48 hours - completely virtual, HIPAA-secure.
            </p>
            <div className="mt-6">
              <GoldButton to="/get-matched">Get Matched</GoldButton>
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}
