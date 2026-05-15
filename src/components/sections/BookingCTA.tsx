import { GoldButton } from "@/components/ui/Fancy";
import { Calendar, Shield, Clock } from "lucide-react";

const perks = [
  { icon: Calendar, label: "Same-week availability" },
  { icon: Shield, label: "Insurance accepted" },
  { icon: Clock, label: "No waitlists" },
];

export function BookingCTA() {
  return (
    <section className="py-20 md:py-28 bg-cream relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-dark text-cream p-10 md:p-16">
          {/* Background layers */}
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
          <div className="absolute inset-0 gold-glow pointer-events-none" />

          {/* Decorative orbs */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gold2/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-1/4 w-40 h-40 rounded-full bg-blue-500/[0.08] blur-3xl pointer-events-none" />

          {/* Watermark letter */}
          <div className="absolute -right-8 -bottom-16 font-serif text-[22rem] leading-none text-white/[0.025] select-none pointer-events-none">
            M
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-[1.4fr_auto] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gradient text-gold3 text-[11px] tracking-[0.22em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold3 animate-pulse" />
                Accepting New Patients
              </span>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
                Begin your journey to{" "}
                <em className="text-gold3 italic">better health</em>
              </h2>
              <p className="mt-4 text-cream/65 max-w-xl text-sm leading-relaxed">
                Whether you're seeking therapy, psychiatric care, or exploring your options   we're here to support you from the first conversation onward. No pressure. Just care.
              </p>

              {/* Perks row */}
              <div className="flex flex-wrap gap-4 mt-7">
                {perks.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-xs text-cream/60">
                    <div className="w-6 h-6 rounded-full bg-gold2/15 border border-gold2/20 flex items-center justify-center">
                      <Icon className="w-3 h-3 text-gold3" />
                    </div>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <GoldButton to="/booking">Book Appointment</GoldButton>
              <p className="text-xs text-cream/40 tracking-wider">Insurance Accepted · Cash-Pay Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
