import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Mail, Phone, Clock, Globe, ArrowRight, Send, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us       Mindova Holdings" },
      { name: "description", content: "Get in touch with the Mindova Holdings care team. Schedule a discovery call or send us a message." },
    ],
  }),
});

const subjects = [
  "General Inquiry",
  "Therapy & Counseling",
  "Medication Management",
  "Peptide & Wellness Optimization",
  "Provider Partnerships",
  "Healthcare Consulting",
  "Insurance Questions",
  "Other",
];

const contactInfo = [
  { icon: Mail,  label: "Email",    value: "care@mindovaholdings.com", href: "mailto:care@mindovaholdings.com" },
  { icon: Phone, label: "Phone",    value: "(888) 000-0000",           href: "tel:+18880000000"                },
  { icon: Clock, label: "Hours",    value: "Mon–Fri, 8am–8pm EST",     href: null                             },
  { icon: Globe, label: "Coverage", value: "All 50 States       Virtual",  href: null                             },
];

function ContactPage() {
  useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onDark />

      {/* Hero */}
      <section className="relative bg-dark text-cream overflow-hidden pt-40 pb-28">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="absolute inset-0 gold-glow" />
        <div className="absolute -top-20 right-1/4 w-72 h-72 rounded-full bg-blue-500/[0.06] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-violet-500/[0.05] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <SectionLabel light>Get In Touch</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-5 tracking-tight">
            We'd love to{" "}
            <em className="text-gold3 italic">hear from you.</em>
          </h1>
          <p className="mt-5 text-cream/60 max-w-md mx-auto text-sm leading-relaxed">
            Whether you have a question, want to explore a partnership, or are ready to start your care journey       we're here.
          </p>

          <div className="mt-8">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_12px_30px_-12px_rgba(207,168,78,0.65)]"
            >
              Schedule a Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Wave transition */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="contactWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#B89040" />
              <stop offset="50%"  stopColor="#E4C06A" />
              <stop offset="100%" stopColor="#B89040" />
            </linearGradient>
          </defs>
          <path d="M0,28 C360,56 720,0 1440,28 L1440,56 L0,56 Z" fill="url(#contactWave)" />
        </svg>
      </section>

      {/* Gold divider strip */}
      <div
        className="h-2 w-full"
        style={{ background: "linear-gradient(90deg, #B89040 0%, #E4C06A 40%, #CFA84E 70%, #B89040 100%)" }}
      />

      {/* Main content */}
      <main className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-14">

          {/* ── Left: Info ── */}
          <div className="reveal space-y-6">
            <div>
              <SectionLabel>Contact Information</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl mt-5 tracking-tight">
                Reach out       we respond{" "}
                <em className="text-gold italic">within 24 hours.</em>
              </h2>
              <p className="mt-4 text-muted text-sm leading-relaxed max-w-sm">
                Our care team is ready to answer your questions and guide you toward the right service.
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-black/5 hover:border-gold/20 hover:shadow-[0_8px_24px_-8px_rgba(184,144,64,0.12)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold2/10 border border-gold2/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-gold2" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-dark hover:text-gold transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-dark">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Discovery Call CTA card */}
            <div className="relative overflow-hidden bg-dark text-cream rounded-[20px] p-6">
              <div className="absolute inset-0 gold-glow opacity-60 pointer-events-none" />
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold2/40 to-transparent" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gradient text-gold3 text-[10px] tracking-[0.22em] uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold3 animate-pulse" />
                  Accepting New Patients
                </span>
                <h3 className="font-serif text-xl">Ready to start your care journey?</h3>
                <p className="text-cream/60 text-sm mt-2 leading-relaxed">
                  Book a free 15-minute discovery call with our care coordinators. No commitment, just clarity.
                </p>
                <Link
                  to="/booking"
                  className="mt-5 inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(207,168,78,0.5)]"
                >
                  Schedule a Discovery Call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="reveal" data-reveal-delay="120">
            {submitted ? (
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center py-20 bg-white rounded-[28px] border border-black/5 px-8 shadow-[0_4px_24px_-8px_rgba(12,11,9,0.06)]">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="font-serif text-3xl">Message Sent!</h3>
                <p className="mt-3 text-muted text-sm max-w-xs leading-relaxed">
                  Thanks for reaching out. A member of our care team will get back to you within 24 hours.
                </p>
                <Link
                  to="/booking"
                  className="mt-8 inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-7 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_12px_30px_-12px_rgba(207,168,78,0.55)]"
                >
                  Schedule a Discovery Call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-[28px] p-8 md:p-10 border border-black/5 shadow-[0_4px_24px_-8px_rgba(12,11,9,0.06)]"
              >
                <div className="mb-7">
                  <h3 className="font-serif text-2xl md:text-3xl">Send us a message</h3>
                  <p className="text-muted text-sm mt-1.5">Fill in the form and we'll be in touch shortly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                  <FormField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                  <FormField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                  <div>
                    <FormLabel>Subject</FormLabel>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 text-dark"
                    >
                      <option value="">Select a topic...</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <FormLabel>Message <span className="text-gold ml-0.5">*</span></FormLabel>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 resize-none placeholder:text-muted/50"
                  />
                </div>

                <label className="mt-5 flex items-start gap-3 text-xs text-muted">
                  <input type="checkbox" required className="mt-0.5 accent-gold2 flex-shrink-0" />
                  By submitting, you agree to our privacy policy and terms of service. We'll never share your data.
                </label>

                <button
                  type="submit"
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_12px_30px_-12px_rgba(207,168,78,0.55)]"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

function FormLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs tracking-[0.2em] uppercase text-muted">{children}</label>
  );
}

function FormField({
  label, name, type = "text", value, onChange, required,
}: {
  label: string; name: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <FormLabel>
        {label}
        {required && <span className="text-gold ml-0.5">*</span>}
      </FormLabel>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2"
      />
    </div>
  );
}
