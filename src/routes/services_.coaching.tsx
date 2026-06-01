import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldButton } from "@/components/ui/Fancy";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2, Target, Leaf, Users, Star, TrendingUp, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/services_/coaching")({
  component: CoachingServicesPage,
  head: () => ({
    meta: [
      { title: "Wellness & Coaching Services | Mindova Holdings" },
      { name: "description", content: "Life coaching, wellness coaching, accountability coaching, and personal development  - delivered by certified non-clinical wellness professionals." },
    ],
  }),
});

const services = [
  {
    icon: Target,
    title: "Life Coaching",
    desc: "Goal-setting, life direction, and clarity coaching to help you define what you want and create a path to get there.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Leaf,
    title: "Wellness Coaching",
    desc: "Holistic health and lifestyle support focusing on physical, emotional, and spiritual wellbeing for total life balance.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: TrendingUp,
    title: "Accountability Coaching",
    desc: "Structured progress tracking and goal accountability  - stay on course with a dedicated coach by your side.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Star,
    title: "Mentorship",
    desc: "Guidance from experienced professionals who have navigated similar paths  - practical wisdom for meaningful growth.",
    color: "text-gold2",
    bg: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Personal Development",
    desc: "Growth-focused personal transformation covering mindset, habits, relationships, and purpose-driven living.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
] as const;

const providers = [
  { title: "Life Coaches",                   desc: "ICF-certified and trained life coaches"             },
  { title: "Wellness Coaches",               desc: "Holistic health & lifestyle specialists"            },
  { title: "Accountability Coaches",         desc: "Structured goal & progress coaches"                 },
  { title: "Mentors",                        desc: "Experienced professional guides"                    },
  { title: "Peer Support Specialists",       desc: "Certified lived-experience supporters"              },
] as const;

const whoIsItFor = [
  "Individuals seeking personal growth without a clinical diagnosis",
  "Anyone feeling stuck and wanting clarity and direction",
  "Those navigating a life transition, career change, or major decision",
  "People wanting structured accountability to reach their goals",
  "Anyone seeking holistic wellness and lifestyle support",
  "Individuals looking for a trusted mentor or guide",
] as const;

function CoachingServicesPage() {
  useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>

        {/* Hero */}
        <section className="relative bg-dark text-cream overflow-hidden pt-48 pb-32 md:pt-60 md:pb-36">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute inset-0 gold-glow pointer-events-none" />
          <div className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-emerald-500/[0.07] blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs tracking-[0.18em] uppercase mb-5">
              <Leaf className="w-3.5 h-3.5" />
              Wellness & Coaching
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight">
              Wellness &amp;{" "}
              <em className="text-gold3 italic">Coaching</em>
              <br />Services
            </h1>
            <p className="mt-7 mx-auto max-w-2xl text-sm md:text-base text-cream/65 leading-relaxed">
              Grow beyond your challenges. Our non-clinical wellness professionals provide life coaching, accountability, mentorship, and personal development support  - virtually, compassionately, and affordably.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <GoldButton to="/get-matched">Get Matched</GoldButton>
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
                Grow beyond{" "}
                <em className="text-gold italic">your challenges</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Non-Clinical Wellness Professionals */}
        <section className="py-24 md:py-32 bg-dark relative z-10">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute inset-0 gold-glow opacity-60 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14 reveal">
              <SectionLabel light>Our Providers</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 text-cream tracking-tight">
                Non-Clinical Wellness{" "}
                <em className="text-gold3 italic">Professionals</em>
              </h2>
              <p className="mt-4 text-cream/55 text-sm max-w-md mx-auto">
                Trained, certified, and selected for their expertise in holistic wellness and personal growth.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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

            {/* Non-clinical badge */}
            <div className="mt-10 flex justify-center reveal">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs tracking-[0.18em] uppercase">
                <AlertCircle className="w-3.5 h-3.5" />
                Non-Clinical Wellness Professionals
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
                Total wellness  -{" "}
                <em className="text-gold italic">mind, body, spirit</em>
              </h2>
              <p className="mt-5 text-muted text-sm leading-relaxed max-w-lg">
                You don't need a diagnosis to grow. Our wellness coaches and mentors meet you where you are and guide you toward the life you want.
              </p>
              <div className="mt-8">
                <GoldButton to="/get-matched">Get Matched with a Coach</GoldButton>
              </div>
            </div>
            <ul className="space-y-4 reveal" data-reveal-delay="120">
              {whoIsItFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-dark/75">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
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
