const items = [
  "HIPAA Compliant",
  "Insurance Accepted",
  "Cash-Pay Available",
  "Same-Week Appointments",
  "Secure Telehealth Access",
];
export function TrustStrip() {
  return (
    <div className="bg-dark text-cream/70 text-xs tracking-[0.18em] uppercase py-4 relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-x-8 gap-y-2">
        {items.map((i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold2" /> {i}
          </span>
        ))}
      </div>
    </div>
  );
}
