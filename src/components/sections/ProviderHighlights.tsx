import { Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Star, ArrowRight, Quote } from "lucide-react";

const featured = [
  {
    initials: "DR",
    name: "Dr. Rachel M.",
    credential: "Licensed Psychologist, Ph.D.",
    specialty: "Trauma, Anxiety & PTSD",
    avatarCls: "bg-blue-50 border-blue-200 text-blue-600",
    accentCls: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
    tagCls: "bg-blue-50 text-blue-600 border-blue-100",
    quote: "Everyone deserves a space where they feel safe, heard, and truly understood.",
    tags: ["Trauma-Informed", "CBT", "EMDR"],
  },
  {
    initials: "JW",
    name: "James W., LMFT",
    credential: "Licensed Marriage & Family Therapist",
    specialty: "Couples, Family & Relationship Therapy",
    avatarCls: "bg-violet-50 border-violet-200 text-violet-600",
    accentCls: "bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600",
    tagCls: "bg-violet-50 text-violet-600 border-violet-100",
    quote: "Healing happens in relationship  - with ourselves and with those we love.",
    tags: ["Couples Therapy", "Family Systems", "Attachment"],
  },
  {
    initials: "AK",
    name: "Aisha K., CLC",
    credential: "Certified Life & Wellness Coach",
    specialty: "Personal Growth & Wellness Coaching",
    avatarCls: "bg-emerald-50 border-emerald-200 text-emerald-600",
    accentCls: "bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500",
    tagCls: "bg-emerald-50 text-emerald-600 border-emerald-100",
    quote: "Transformation begins the moment you decide you are worth investing in.",
    tags: ["Life Coaching", "Wellness", "Accountability"],
  },
] as const;

export function ProviderHighlights() {
  return (
    <section className="py-24 md:py-32 bg-[#F9F6F1] relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14 reveal">
          <SectionLabel>Featured Providers</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
            Our clinical team is{" "}
            <em className="text-gold italic">here for you</em>
          </h2>
          <p className="mt-4 text-sm text-muted max-w-lg mx-auto leading-relaxed">
            Every provider is licensed, vetted, and selected for clinical excellence and genuine, compassionate care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map(({ initials, name, credential, specialty, avatarCls, accentCls, tagCls, quote, tags }, i) => (
            <div
              key={name}
              className="reveal bg-white rounded-[24px] border border-dark/[0.07] shadow-[0_4px_24px_-8px_rgba(12,11,9,0.08)] overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-16px_rgba(12,11,9,0.12)] transition-all duration-300"
              data-reveal-delay={String(i * 100)}
            >
              <div className={`h-1.5 w-full ${accentCls}`} />
              <div className="p-7">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center font-serif text-xl flex-shrink-0 ${avatarCls}`}>
                    {initials}
                  </div>
                  <div>
                    <p className="font-serif text-lg leading-tight text-dark">{name}</p>
                    <p className="text-xs text-muted mt-0.5">{credential}</p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-gold2 text-gold2" />
                  ))}
                </div>

                <p className="text-xs text-muted tracking-wide mb-4">{specialty}</p>

                <div className="relative bg-[#F9F6F1] rounded-xl p-4 mb-5">
                  <Quote className="w-4 h-4 text-gold2/60 mb-1.5" />
                  <p className="text-sm text-dark/70 italic leading-relaxed">"{quote}"</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tags.map((t) => (
                    <span key={t} className={`text-[11px] px-2.5 py-1 rounded-full border font-medium ${tagCls}`}>
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to="/booking"
                  className="flex items-center justify-center w-full gap-2 py-2.5 text-sm font-medium border border-dark/10 rounded-full hover:bg-dark hover:text-gold3 hover:border-transparent transition-all duration-200"
                >
                  Book a Session
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <Link
            to="/providers"
            className="inline-flex items-center gap-2 text-sm font-medium text-dark/55 hover:text-gold2 transition-colors duration-200"
          >
            View all providers
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
