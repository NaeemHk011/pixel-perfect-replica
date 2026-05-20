import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { faqs } from "@/data/faqs";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FAQSection() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="py-24 md:py-32 bg-cream relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12">
        {/* Left column */}
        <div className="reveal">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
            Your questions,{" "}
            <em className="text-gold italic">answered.</em>
          </h2>
          <p className="mt-5 text-muted text-sm max-w-sm leading-relaxed">
            Everything you need to know before your first appointment.
          </p>

          {/* Contact card */}
          <div className="mt-8 relative overflow-hidden bg-dark text-cream rounded-[20px] p-6">
            <div className="absolute inset-0 gold-glow opacity-60 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-gold2/20 border border-gold2/30 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-gold3" />
                </div>
                <p className="text-xs tracking-[0.22em] text-gold2 uppercase font-medium">Our Care Team</p>
              </div>
              <p className="text-sm text-cream/90">Available Mon–Fri, 8am–8pm EST.</p>
              <p className="text-sm text-cream/55 mt-1">Book online       replies within 24h.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 hover:border-blue-200 transition-colors">
              <p className="font-serif text-2xl text-blue-600">24h</p>
              <p className="text-[11px] tracking-wider uppercase text-blue-400 mt-1">Response Time</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 hover:border-emerald-200 transition-colors">
              <p className="font-serif text-2xl text-emerald-600">100%</p>
              <p className="text-[11px] tracking-wider uppercase text-emerald-400 mt-1">Confidential</p>
            </div>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3 reveal" data-reveal-delay="100">
          {faqs.map((f) => {
            const isOpen = open === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setOpen(isOpen ? null : f.id)}
                className={`w-full text-left rounded-[16px] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-cream2 border-gold/30 shadow-[inset_3px_0_0_0_#B89040]"
                    : "bg-white border-black/5 hover:border-black/12 hover:bg-cream/60"
                }`}
              >
                <div className="flex items-center justify-between p-5 gap-4">
                  <span className="font-serif text-lg pr-2 text-left">{f.question}</span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-gold/15 text-gold" : "bg-black/5 text-muted"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </div>
                <div
                  className="grid transition-all duration-300 px-5"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-muted leading-relaxed pb-5">{f.answer}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
