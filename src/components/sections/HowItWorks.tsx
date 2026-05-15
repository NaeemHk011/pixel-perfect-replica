import { ClipboardList, Users, CalendarCheck, HeartPulse } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Fill a Short Form",
    description: "Takes 2 minutes. Just your name, contact, and what you're looking for.",
  },
  {
    number: "02",
    icon: Users,
    title: "Pick Your Provider",
    description: "Browse our vetted specialists and choose who feels right for you.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Book Your Session",
    description: "Select a date and time that works for you — same-week availability.",
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Start Your Care",
    description: "Join your secure telehealth session and begin your care plan.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-cream2 relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <SectionLabel>The Process</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
            How It <em className="text-gold italic">Works</em>
          </h2>
          <p className="mt-4 text-muted text-sm max-w-md leading-relaxed">
            From your first click to your first session — we make it effortless.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* Connector line — desktop only */}
          <div
            className="absolute top-[64px] left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] hidden md:block pointer-events-none"
            style={{ borderTop: "1px dashed rgba(184,144,64,0.3)" }}
          />

          {steps.map(({ number, icon: Icon, title, description }, i) => (
            <div
              key={number}
              data-reveal-delay={String(i * 100)}
              className="reveal group relative bg-white rounded-2xl p-6 border border-black/8 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_16px_40px_-16px_rgba(184,144,64,0.15)]"
            >
              <span className="font-serif text-4xl italic text-gold/20 group-hover:text-gold/35 transition-colors duration-300 leading-none">
                {number}
              </span>
              <div className="mt-4 w-10 h-10 rounded-xl bg-cream2 border border-black/5 flex items-center justify-center">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-xl mt-5">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
