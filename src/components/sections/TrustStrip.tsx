import { ShieldCheck, CreditCard, DollarSign, Clock, Lock } from "lucide-react";

const items = [
  { label: "HIPAA Compliant", icon: ShieldCheck },
  { label: "Insurance Accepted", icon: CreditCard },
  { label: "Cash-Pay Available", icon: DollarSign },
  { label: "Same-Week Appointments", icon: Clock },
  { label: "Secure Telehealth", icon: Lock },
];

export function TrustStrip() {
  return (
    <div className="relative bg-dark2 border-b border-white/5 py-4 z-10 overflow-hidden">
      {/* Subtle gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold2/[0.04] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-x-8 gap-y-2">
        {items.map(({ label, icon: Icon }) => (
          <span key={label} className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-cream/60 hover:text-gold3 transition-colors duration-200 cursor-default">
            <Icon className="w-3.5 h-3.5 text-gold2 flex-shrink-0" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
