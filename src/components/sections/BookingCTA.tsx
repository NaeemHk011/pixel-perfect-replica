import { GoldButton } from "@/components/ui/Fancy";

export function BookingCTA() {
  return (
    <section className="py-20 md:py-28 bg-cream relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-dark text-cream p-10 md:p-16">
          <div className="absolute inset-0 gold-glow pointer-events-none" />
          <div className="absolute -right-10 -bottom-20 font-serif text-[28rem] leading-none text-white/[0.03] select-none pointer-events-none">M</div>
          <div className="relative grid grid-cols-1 md:grid-cols-[1.4fr_auto] gap-8 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
                Begin your journey to <em className="text-gold3 italic">better health</em>
              </h2>
              <p className="mt-4 text-cream/70 max-w-xl text-sm leading-relaxed">
                Whether you're seeking therapy, psychiatric care, or exploring your options — we're here to support you from the first conversation onward. No pressure. Just care.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <GoldButton to="/booking">Book Appointment</GoldButton>
              <p className="text-xs text-cream/50 tracking-wider">Insurance Accepted · Cash-Pay Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
