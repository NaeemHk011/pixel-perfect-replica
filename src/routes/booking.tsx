import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/services";
import { providers } from "@/data/providers";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShieldCheck, Wallet, CalendarCheck, Check } from "lucide-react";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book Your Appointment   Mindova Holdings" },
      { name: "description", content: "Book a telehealth appointment with a licensed Mindova provider." },
    ],
  }),
});

function BookingPage() {
  useScrollAnimation();
  const [step, setStep] = useState(1);
  const [service, setService] = useState<string | null>(null);
  const [provider, setProvider] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center reveal">
            <div className="flex justify-center"><SectionLabel>Booking</SectionLabel></div>
            <h1 className="font-serif text-5xl md:text-6xl mt-5 tracking-tight">Book Your <em className="text-gold italic">Appointment</em></h1>
            <p className="mt-4 text-muted text-sm max-w-md mx-auto">Three steps. Five minutes. Care that starts this week.</p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3 md:gap-6 flex-wrap">
            {["Choose Service", "Select Provider", "Your Details"].map((label, i) => {
              const n = i + 1;
              const active = step === n;
              const done = step > n;
              return (
                <div key={label} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full grid place-items-center text-sm font-medium border transition-all ${
                    active ? "bg-gold2 text-dark border-gold2" :
                    done ? "bg-dark text-gold3 border-dark" :
                    "bg-white text-muted border-black/10"
                  }`}>{done ? <Check className="w-4 h-4" /> : n}</div>
                  <span className={`text-sm ${active ? "text-dark font-medium" : "text-muted"}`}>{label}</span>
                  {n < 3 && <div className="hidden md:block w-12 h-px bg-black/10" />}
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((s) => {
                  const Icon = s.icon;
                  const selected = service === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => { setService(s.id); setStep(2); }}
                      className={`text-left bg-white rounded-[20px] p-6 border-2 transition-all hover:-translate-y-1 ${selected ? "border-gold2" : "border-transparent"}`}
                    >
                      <Icon className="w-6 h-6 text-gold2" />
                      <h3 className="font-serif text-xl mt-4">{s.title}</h3>
                      <p className="text-sm text-muted mt-2 leading-relaxed">{s.shortDesc}</p>
                    </button>
                  );
                })}
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {providers.map((p) => {
                    const selected = provider === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => { setProvider(p.id); setStep(3); }}
                        className={`text-left bg-white rounded-[20px] p-6 border-2 transition-all hover:-translate-y-1 ${selected ? "border-gold2" : "border-transparent"}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-cream2 grid place-items-center font-serif text-gold">{p.initials}</div>
                          <div>
                            <p className="font-serif text-lg">{p.name}</p>
                            <p className="text-xs text-muted">{p.credentials}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted mt-3">{p.specialty}</p>
                        <p className="text-xs mt-3 inline-flex items-center gap-1.5 text-emerald-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Available this week</p>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-6 text-center">
                  <button onClick={() => setStep(1)} className="text-sm text-muted underline">← Back</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-white rounded-[24px] p-8 border border-black/5 grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <Field label="Full Name" required />
                <Field label="Email" type="email" required />
                <Field label="Phone" type="tel" />
                <Field label="Date of Birth" type="date" />
                <Field label="Insurance Provider" />
                <Field label="Insurance ID" />
                <Field label="Specialty" defaultValue={services.find(s => s.id === service)?.title || ""} />
                <Field label="Preferred Date" type="date" required />
                <div className="md:col-span-2">
                  <Label>Your concern / message</Label>
                  <textarea rows={4} className="mt-1 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2" />
                </div>
                <label className="md:col-span-2 flex items-start gap-3 text-xs text-muted">
                  <input type="checkbox" required className="mt-1 accent-gold2" />
                  By submitting, you agree to our terms and privacy policy.
                </label>
                <div className="md:col-span-2 flex justify-between items-center">
                  <button type="button" onClick={() => setStep(2)} className="text-sm text-muted underline">← Back</button>
                  <button type="submit" className="bg-gold2 hover:bg-gold3 text-dark font-medium px-8 py-3.5 rounded-full text-sm transition-colors shadow-[0_12px_30px_-12px_rgba(207,168,78,0.6)]">
                    {submitted ? "Submitted ✓   We'll be in touch" : "Book Appointment"}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            {[
              [ShieldCheck, "HIPAA Secure"],
              [Wallet, "No Hidden Fees"],
              [CalendarCheck, "Same-Week Availability"],
            ].map(([Icon, t]) => (
              <div key={t as string} className="flex items-center gap-3 justify-center bg-white border border-black/5 rounded-full py-3 px-5">
                <Icon className="w-4 h-4 text-gold2" />
                <span className="text-muted">{t as string}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs tracking-[0.2em] uppercase text-muted">{children}</label>;
}
function Field({ label, type = "text", required, defaultValue }: { label: string; type?: string; required?: boolean; defaultValue?: string }) {
  return (
    <div>
      <Label>{label}{required && <span className="text-gold ml-1">*</span>}</Label>
      <input type={type} required={required} defaultValue={defaultValue} className="mt-1 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2" />
    </div>
  );
}
