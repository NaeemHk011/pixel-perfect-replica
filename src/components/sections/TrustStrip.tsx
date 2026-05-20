import { ShieldCheck, Lock, Clock, Globe, BadgeCheck, Award } from "lucide-react";

const items = [
  { label: "HIPAA Compliant", icon: ShieldCheck, color: "text-emerald-400" },
  { label: "Board-Certified Providers", icon: BadgeCheck, color: "text-blue-400" },
  { label: "256-bit Encrypted Sessions", icon: Lock, color: "text-gold3" },
  { label: "All 50 States", icon: Globe, color: "text-violet-400" },
  { label: "Joint Commission Standards", icon: Award, color: "text-rose-400" },
  { label: "Same-Week Availability", icon: Clock, color: "text-orange-400" },
];

export function TrustStrip() {
  return (
    <div className="relative bg-dark2 border-b border-white/5 z-10 overflow-hidden">
      {/* Gold shimmer line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold2/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-wrap justify-center gap-x-8 gap-y-3">
        {items.map(({ label, icon: Icon, color }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-cream/55 hover:text-cream/90 transition-colors duration-200 cursor-default"
          >
            <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${color}`} />
            {label}
          </span>
        ))}
      </div>

      {/* Gold shimmer line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold2/10 to-transparent" />
    </div>
  );
}
