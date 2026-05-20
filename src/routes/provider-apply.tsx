import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle, UserCheck, Calendar, ClipboardList, Users } from "lucide-react";

export const Route = createFileRoute("/provider-apply")({
  component: ProviderApplyPage,
  head: () => ({
    meta: [
      { title: "Apply as a Provider       Mindova Holdings" },
      {
        name: "description",
        content:
          "Join Mindova's vetted network of licensed clinicians. Apply today and help shape modern, accessible behavioral health.",
      },
    ],
  }),
});

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

const LICENSE_TYPES = ["MD", "DO", "PhD", "PsyD", "LCSW", "LPC", "LMFT", "NP/PMHNP", "Other"];
const EXPERIENCE_LEVELS = ["< 1 year", "1–3 years", "3–7 years", "7–15 years", "15+ years"];
const SPECIALTIES = [
  "Mental Health Therapy",
  "Psychiatry & Medication Management",
  "Substance Use Counseling",
  "Trauma & PTSD",
  "Anxiety & Depression",
  "ADHD & Behavioral Health",
  "Eating Disorders",
  "Relationship & Family Counseling",
  "Wellness Coaching",
  "Other",
];
const AVAILABILITY_OPTIONS = [
  "Weekday Mornings",
  "Weekday Afternoons",
  "Weekday Evenings",
  "Weekends",
];

const BENEFITS = [
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Set your own hours, take on as many or as few clients as you choose.",
  },
  {
    icon: ClipboardList,
    title: "Administrative Support",
    description: "We handle billing, scheduling, and compliance so you focus on care.",
  },
  {
    icon: Users,
    title: "Vetted Community",
    description: "Join a curated network of licensed, high-caliber clinicians.",
  },
];

function ProviderApplyPage() {
  useScrollAnimation();

  const [submitted, setSubmitted] = useState(false);
  const [availability, setAvailability] = useState<string[]>([]);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    licenseType: "",
    experience: "",
    primaryState: "",
    additionalStates: "",
    specialty: "",
    bio: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const toggleAvailability = (option: string) => {
    setAvailability((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onDark />

      {/* ── Hero ── */}
      <section className="relative bg-dark text-cream overflow-hidden pt-40 pb-28">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="absolute inset-0 gold-glow" />
        <div className="absolute -top-20 right-1/3 w-72 h-72 rounded-full bg-blue-500/[0.06] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-violet-500/[0.05] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <SectionLabel light>Join the Network</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-5 tracking-tight">
            Apply as a{" "}
            <em className="text-gold3 italic">Licensed Provider.</em>
          </h1>
          <p className="mt-5 text-cream/60 max-w-md mx-auto text-sm leading-relaxed">
            Join a vetted network of clinicians shaping modern, accessible behavioral health. Applications reviewed within 3 business days.
          </p>
        </div>

        {/* Gold wave transition */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="applyWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B89040" />
              <stop offset="50%" stopColor="#E4C06A" />
              <stop offset="100%" stopColor="#B89040" />
            </linearGradient>
          </defs>
          <path d="M0,28 C360,56 720,0 1440,28 L1440,56 L0,56 Z" fill="url(#applyWave)" />
        </svg>
      </section>

      {/* Gold divider strip */}
      <div
        className="h-2 w-full"
        style={{
          background:
            "linear-gradient(90deg, #B89040 0%, #E4C06A 40%, #CFA84E 70%, #B89040 100%)",
        }}
      />

      {/* ── Main Content ── */}
      <main className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-14">

          {/* ── Left: Info Sidebar ── */}
          <div className="reveal space-y-6">
            <div>
              <SectionLabel>Provider Network</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl mt-5 tracking-tight">
                Build your practice.{" "}
                <em className="text-gold italic">Change lives.</em>
              </h2>
            </div>

            {/* Benefit cards */}
            <div className="space-y-3">
              {BENEFITS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 bg-white border border-black/5 rounded-2xl hover:border-gold/20 hover:shadow-[0_8px_24px_-8px_rgba(184,144,64,0.12)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold2/10 border border-gold2/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gold2" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark">{title}</p>
                    <p className="text-xs text-muted mt-1 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dark CTA card */}
            <div className="relative overflow-hidden bg-dark text-cream rounded-[20px] p-6">
              <div className="absolute inset-0 gold-glow opacity-60 pointer-events-none" />
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold2/40 to-transparent" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gradient text-gold3 text-[10px] tracking-[0.22em] uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold3 animate-pulse" />
                  Now Accepting Applications
                </span>
                <h3 className="font-serif text-xl">Have questions about joining?</h3>
                <p className="text-cream/60 text-sm mt-2 leading-relaxed">
                  Our provider relations team is happy to answer any questions before you apply.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(207,168,78,0.5)]"
                >
                  Contact Our Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="reveal" data-reveal-delay="120">
            {submitted ? (
              <div className="min-h-[500px] flex flex-col items-center justify-center text-center py-20 bg-white rounded-[28px] border border-black/5 px-8 shadow-[0_4px_24px_-8px_rgba(12,11,9,0.06)]">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="font-serif text-3xl">Application Received</h3>
                <p className="mt-3 text-muted text-sm max-w-xs leading-relaxed">
                  Thank you for applying to join the Mindova provider network. Our team will review your application and follow up within 3 business days.
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
                  <h3 className="font-serif text-2xl md:text-3xl">Provider Application</h3>
                  <p className="text-muted text-sm mt-1.5">All fields marked * are required.</p>
                </div>

                {/* Two-column grid fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Full Name"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <FormField
                    label="License Number"
                    name="licenseNumber"
                    value={form.licenseNumber}
                    onChange={handleChange}
                    required
                  />

                  {/* License Type */}
                  <div>
                    <FormLabel required>License Type</FormLabel>
                    <select
                      name="licenseType"
                      value={form.licenseType}
                      onChange={handleChange}
                      required
                      className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 text-dark"
                    >
                      <option value="">Select license type...</option>
                      {LICENSE_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Years of Experience */}
                  <div>
                    <FormLabel>Years of Experience</FormLabel>
                    <select
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 text-dark"
                    >
                      <option value="">Select experience level...</option>
                      {EXPERIENCE_LEVELS.map((e) => (
                        <option key={e} value={e}>{e}</option>
                      ))}
                    </select>
                  </div>

                  {/* Primary State */}
                  <div>
                    <FormLabel required>Primary State of Licensure</FormLabel>
                    <select
                      name="primaryState"
                      value={form.primaryState}
                      onChange={handleChange}
                      required
                      className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 text-dark"
                    >
                      <option value="">Select a state...</option>
                      {US_STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Additional States */}
                  <FormField
                    label="Additional Licensed States"
                    name="additionalStates"
                    value={form.additionalStates}
                    onChange={handleChange}
                    placeholder="e.g. NY, CA, TX"
                  />
                </div>

                {/* Full-width fields */}
                <div className="mt-5 space-y-5">
                  {/* Primary Specialty */}
                  <div>
                    <FormLabel required>Primary Specialty</FormLabel>
                    <select
                      name="specialty"
                      value={form.specialty}
                      onChange={handleChange}
                      required
                      className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 text-dark"
                    >
                      <option value="">Select a specialty...</option>
                      {SPECIALTIES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Availability Checkboxes */}
                  <div>
                    <FormLabel>Availability</FormLabel>
                    <div className="mt-2 flex flex-wrap gap-3">
                      {AVAILABILITY_OPTIONS.map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={availability.includes(option)}
                            onChange={() => toggleAvailability(option)}
                            className="accent-gold2"
                          />
                          <span className="text-sm text-dark group-hover:text-gold transition-colors duration-150">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Bio Textarea */}
                  <div>
                    <FormLabel required>About Yourself / Bio</FormLabel>
                    <textarea
                      name="bio"
                      value={form.bio}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your background, approach to care, and why you want to join Mindova."
                      className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 resize-none placeholder:text-muted/50"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <FormLabel>Upload Resume / CV</FormLabel>
                    <div className="mt-1.5 w-full bg-cream2 border border-dashed border-gold2/40 rounded-xl px-4 py-6 text-center text-sm text-muted hover:border-gold2/70 hover:bg-cream transition-colors duration-200 cursor-pointer">
                      <p className="font-medium text-dark/60">Click to upload or drag and drop</p>
                      <p className="text-xs mt-1 text-muted/70">PDF, DOC, DOCX       max 5MB</p>
                      <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                    </div>
                  </div>

                  {/* Terms */}
                  <label className="flex items-start gap-3 text-xs text-muted cursor-pointer">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={form.terms}
                      onChange={handleChange}
                      required
                      className="mt-0.5 accent-gold2 flex-shrink-0"
                    />
                    I confirm that all information provided is accurate and I agree to Mindova Holdings'
                    privacy policy and provider terms of service.
                    <span className="text-gold ml-0.5">*</span>
                  </label>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_12px_30px_-12px_rgba(207,168,78,0.55)]"
                  >
                    <UserCheck className="w-4 h-4" /> Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ── Helpers ── */
function FormLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="text-xs tracking-[0.2em] uppercase text-muted">
      {children}
      {required && <span className="text-gold ml-0.5">*</span>}
    </label>
  );
}

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <FormLabel required={required}>{label}</FormLabel>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 placeholder:text-muted/50"
      />
    </div>
  );
}
