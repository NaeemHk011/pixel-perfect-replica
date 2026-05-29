import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  Megaphone,
  UserPlus,
  CreditCard,
  Calendar,
  ClipboardList,
  Monitor,
  Stethoscope,
  Pill,
  Heart,
  TrendingUp,
} from "lucide-react";

const blocks = [
  {
    icon: Megaphone,
    title: "Marketing Support",
    desc: "Done-for-you marketing systems to grow your patient panel without spending on ads.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: UserPlus,
    title: "Client Referrals",
    desc: "Steady stream of matched, pre-qualified clients referred directly to your practice.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: CreditCard,
    title: "Billing & Credentialing",
    desc: "Full insurance credentialing, claims processing, and billing management handled for you.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Calendar,
    title: "Scheduling Systems",
    desc: "Automated scheduling, reminders, and calendar management integrated into your workflow.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: ClipboardList,
    title: "Administrative Support",
    desc: "Intake coordination, documentation support, and operational back-office assistance.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Monitor,
    title: "Virtual Platform Access",
    desc: "HIPAA-compliant telehealth platform, client portal, and digital tools at no extra cost.",
    color: "text-sky-500",
    bg: "bg-sky-50",
  },
  {
    icon: Stethoscope,
    title: "Medical Director Oversight",
    desc: "Access to Medical Director support for clinical guidance, supervision, and compliance.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Pill,
    title: "Medication Collaboration",
    desc: "Coordinated medication management workflows between prescribers and therapists.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Heart,
    title: "Care Coordination",
    desc: "Dedicated care coordinators ensuring smooth provider-client transitions and continuity.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    desc: "Expand your impact with access to training, leadership roles, and clinical partnerships.",
    color: "text-gold2",
    bg: "bg-amber-50",
  },
] as const;

export function WhatMindovaProvides({ light = false }: { light?: boolean }) {
  return (
    <section className={`py-24 md:py-32 relative z-10 ${light ? "bg-cream" : "bg-dark"}`}>
      {!light && (
        <>
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute inset-0 gold-glow opacity-50 pointer-events-none" />
        </>
      )}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <SectionLabel light={!light}>What Mindova Provides</SectionLabel>
          <h2
            className={`font-serif text-4xl md:text-5xl mt-5 tracking-tight ${
              light ? "text-dark" : "text-cream"
            }`}
          >
            Everything you need to{" "}
            <em className={light ? "text-gold italic" : "text-gold3 italic"}>focus on care</em>
          </h2>
          <p className={`mt-4 text-sm max-w-xl mx-auto leading-relaxed ${light ? "text-muted" : "text-cream/55"}`}>
            We handle the infrastructure so you can do what you do best  - deliver exceptional care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {blocks.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <div
              key={title}
              className={`reveal rounded-2xl p-6 transition-all duration-300 ${
                light
                  ? "bg-white border border-dark/[0.07] shadow-[0_4px_20px_-8px_rgba(12,11,9,0.08)] hover:shadow-[0_8px_28px_-8px_rgba(12,11,9,0.12)] hover:-translate-y-0.5"
                  : "bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] hover:border-gold2/25"
              }`}
              data-reveal-delay={String((i % 5) * 70)}
            >
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3
                className={`font-serif text-base mb-1.5 ${
                  light ? "text-dark" : "text-gold3"
                }`}
              >
                {title}
              </h3>
              <p className={`text-xs leading-relaxed ${light ? "text-dark/60" : "text-cream/50"}`}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
