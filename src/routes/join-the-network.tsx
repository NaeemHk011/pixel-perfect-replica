import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldButton } from "@/components/ui/Fancy";
import { WhatMindovaProvides } from "@/components/sections/WhatMindovaProvides";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Star,
  Brain,
  Leaf,
  AlertCircle,
} from "lucide-react";

export const Route = createFileRoute("/join-the-network")({
  component: JoinTheNetworkPage,
  head: () => ({
    meta: [
      { title: "Join the Network | Mindova Holdings" },
      { name: "description", content: "Build your virtual practice with Mindova. Infrastructure, operational support, and client growth systems for licensed providers and wellness coaches." },
    ],
  }),
});

const clinicalProviders = [
  "LPCs (Licensed Professional Counselors)",
  "LMFTs (Licensed Marriage & Family Therapists)",
  "LCSWs (Licensed Clinical Social Workers)",
  "Psychologists",
  "Psychiatrists",
  "PMHNPs",
];

const wellnessProviders = [
  "Life Coaches",
  "Wellness Coaches",
  "Accountability Coaches",
  "Mentors",
  "Peer Support Specialists",
];

const testimonials = [
  {
    quote: "Joining Mindova was the best decision I made for my practice. They handle the admin, I focus on my clients. My panel filled within 3 weeks.",
    name: "Dr. Sarah M.",
    credential: "Licensed Psychologist",
    rating: 5,
  },
  {
    quote: "As a PMHNP, I was drowning in credentialing and billing. Mindova took all of that off my plate. Now I see 30% more patients.",
    name: "James R.",
    credential: "PMHNP-BC",
    rating: 5,
  },
  {
    quote: "I was skeptical as a wellness coach  - but Mindova's platform connected me with clients who were the perfect fit. Highly recommend.",
    name: "Aisha K.",
    credential: "Certified Wellness Coach",
    rating: 5,
  },
];

function JoinTheNetworkPage() {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>

        {/* ── Hero ── */}
        <section className="relative bg-dark text-cream overflow-hidden pt-40 pb-24 md:pt-48 md:pb-28">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute inset-0 gold-glow pointer-events-none" />
          <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-blue-500/[0.07] blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-emerald-500/[0.06] blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold2/30 bg-white/5 backdrop-blur-sm text-xs tracking-[0.22em] uppercase text-gold2 mb-6">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Now Hiring Providers
            </span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Build Your Virtual{" "}
              <em className="text-gold3 italic">Practice</em>
              <br />With Mindova
            </h1>

            <p className="mt-7 mx-auto max-w-2xl text-sm md:text-base text-cream/65 leading-relaxed">
              Mindova provides infrastructure, operational support, and client growth systems so providers can focus on delivering care and impact.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/provider-apply"
                className="inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-semibold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-12px_rgba(207,168,78,0.55)] uppercase tracking-wide"
              >
                Apply Now
              </Link>
              <button
                onClick={() => document.getElementById("pathways")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 border border-white/25 text-white hover:border-gold2 hover:text-gold3 font-semibold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 uppercase tracking-wide"
              >
                Join the Network
              </button>
            </div>

            {/* Trust bar */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-xs text-cream/50 tracking-[0.14em] uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                HIPAA Compliant
              </div>
              <div className="w-px h-4 bg-white/10 hidden sm:block" />
              <span className="text-xs text-cream/50 tracking-[0.14em] uppercase">All 50 States</span>
              <div className="w-px h-4 bg-white/10 hidden sm:block" />
              <span className="text-xs text-cream/50 tracking-[0.14em] uppercase">Licensed & Wellness Providers Welcome</span>
            </div>
          </div>

          {/* Wave divider */}
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="jtnWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#B89040" />
                <stop offset="50%"  stopColor="#E4C06A" />
                <stop offset="100%" stopColor="#B89040" />
              </linearGradient>
            </defs>
            <path d="M0,28 C360,56 720,0 1440,28 L1440,56 L0,56 Z" fill="url(#jtnWave)" />
          </svg>
        </section>

        {/* Gold divider */}
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #B89040 0%, #E4C06A 40%, #CFA84E 70%, #B89040 100%)" }} />

        {/* ── Two Pathway Cards ── */}
        <section id="pathways" className="py-20 md:py-28 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">

            <div className="text-center mb-14 reveal">
              <SectionLabel>Choose Your Path</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 tracking-tight">
                Two pathways to{" "}
                <em className="text-gold italic">join Mindova</em>
              </h2>
              <p className="mt-3 text-sm text-muted max-w-lg mx-auto leading-relaxed">
                Whether you're a licensed clinician or a certified wellness professional, there's a place for you in the Mindova network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Card 1  - Clinical */}
              <div className="reveal bg-white rounded-[28px] border border-dark/[0.07] shadow-[0_4px_24px_-8px_rgba(12,11,9,0.08)] overflow-hidden">
                {/* Top accent */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-dark">Licensed Clinical Provider</h3>
                      <span className="text-[11px] tracking-[0.15em] uppercase text-blue-500 font-medium">Clinical Track</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-8">
                    {clinicalProviders.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-dark/75">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-dark/[0.06]">
                    <div className="flex items-center gap-2 mb-5">
                      <ShieldCheck className="w-4 h-4 text-blue-500" />
                      <span className="text-xs text-dark/55 tracking-wide">Licensed Clinical Professionals</span>
                    </div>
                    <Link
                      to="/provider-apply"
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm rounded-xl tracking-wide uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(59,130,246,0.4)]"
                    >
                      Apply as Clinical Provider
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2  - Wellness */}
              <div className="reveal bg-white rounded-[28px] border border-dark/[0.07] shadow-[0_4px_24px_-8px_rgba(12,11,9,0.08)] overflow-hidden" data-reveal-delay="100">
                {/* Top accent */}
                <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500" />
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-dark">Wellness & Coaching Professional</h3>
                      <span className="text-[11px] tracking-[0.15em] uppercase text-emerald-600 font-medium">Wellness Track</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-8">
                    {wellnessProviders.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-dark/75">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-dark/[0.06]">
                    <div className="flex items-center gap-2 mb-5">
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                      <span className="text-xs text-dark/55 tracking-wide">Non-Clinical Wellness Professionals</span>
                    </div>
                    <Link
                      to="/provider-apply"
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl tracking-wide uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(16,185,129,0.4)]"
                    >
                      Apply as Wellness Professional
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── What Mindova Provides ── */}
        <WhatMindovaProvides />

        {/* ── Provider Testimonials ── */}
        <section className="py-24 md:py-32 bg-cream relative z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8">

            <div className="text-center mb-14 reveal">
              <SectionLabel>Provider Stories</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 tracking-tight">
                Trusted by{" "}
                <em className="text-gold italic">providers nationwide</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map(({ quote, name, credential, rating }, i) => (
                <div
                  key={name}
                  className="reveal bg-white rounded-2xl p-7 border border-dark/[0.07] shadow-[0_4px_20px_-8px_rgba(12,11,9,0.07)]"
                  data-reveal-delay={String(i * 100)}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold2 text-gold2" />
                    ))}
                  </div>
                  <p className="text-sm text-dark/70 leading-relaxed mb-5">"{quote}"</p>
                  <div className="border-t border-dark/[0.06] pt-4">
                    <p className="font-serif text-base text-dark">{name}</p>
                    <p className="text-xs text-muted mt-0.5">{credential}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 bg-dark relative z-10">
          <div className="absolute inset-0 gold-glow opacity-60 pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center reveal">
            <SectionLabel light>Ready to Join?</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-cream tracking-tight">
              Your practice.{" "}
              <em className="text-gold3 italic">Elevated.</em>
            </h2>
            <p className="mt-5 text-cream/55 text-sm max-w-lg mx-auto leading-relaxed">
              Join a growing network of licensed clinicians and wellness professionals making a real difference  - with the operational support to back it up.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <GoldButton to="/provider-apply">Apply Now</GoldButton>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
