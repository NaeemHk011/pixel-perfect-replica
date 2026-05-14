import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FAQSection() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);
  return (
    <section className="py-24 md:py-32 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12">
        <div className="reveal">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">
            Your questions, <em className="text-gold italic">answered.</em>
          </h2>
          <p className="mt-5 text-muted text-sm max-w-sm">Everything you need to know before you book. Don't see what you're looking for?</p>

          <div className="mt-8 bg-dark text-cream rounded-[20px] p-6">
            <p className="text-xs tracking-[0.24em] text-gold2 uppercase">Our Care Team</p>
            <p className="mt-3 text-sm">Available Mon–Fri, 8am–8pm EST.</p>
            <p className="text-sm text-cream/60">Book online — replies within 24h.</p>
          </div>
        </div>

        <div className="space-y-3 reveal">
          {faqs.map((f) => {
            const isOpen = open === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setOpen(isOpen ? null : f.id)}
                className={`w-full text-left rounded-[16px] border transition-all overflow-hidden ${
                  isOpen ? "bg-cream2 border-black/10" : "bg-white border-black/5 hover:border-black/15"
                }`}
              >
                <div className="flex items-center justify-between p-5">
                  <span className="font-serif text-lg pr-4">{f.question}</span>
                  {isOpen ? <Minus className="w-5 h-5 text-gold flex-shrink-0" /> : <Plus className="w-5 h-5 text-muted flex-shrink-0" />}
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
