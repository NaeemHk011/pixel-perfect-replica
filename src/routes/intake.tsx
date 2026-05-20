import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { providers } from "@/data/providers";
import { ArrowRight, CheckCircle, ClipboardCheck } from "lucide-react";

export const Route = createFileRoute("/intake")({
  component: IntakePage,
  head: () => ({
    meta: [
      { title: "Patient Intake Form       Mindova Holdings" },
      {
        name: "description",
        content:
          "Complete your patient intake form before your first Mindova appointment. Secure, HIPAA-compliant, and takes about 5 minutes.",
      },
    ],
  }),
});

/* ── Constants ── */
const INSURANCE_PROVIDERS = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "United Healthcare",
  "Humana",
  "Anthem",
  "Magellan Health",
  "Beacon Health Options",
  "Self-Pay / Uninsured",
  "Other",
];

const CONCERN_OPTIONS = [
  "Anxiety",
  "Depression",
  "ADHD/Focus",
  "Trauma/PTSD",
  "Grief & Loss",
  "Relationship Issues",
  "Substance Use",
  "Eating Concerns",
  "Medication Management",
  "Wellness & Lifestyle",
  "Other",
];

const PREFERRED_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const PRIOR_THERAPY_OPTIONS = [
  "First time",
  "Less than 1 year ago",
  "1–3 years ago",
  "More than 3 years ago",
];

const HOW_HEARD_OPTIONS = [
  "Google Search",
  "Social Media",
  "Friend/Family Referral",
  "Healthcare Provider Referral",
  "Insurance Directory",
  "Other",
];

/* ── Component ── */
function IntakePage() {
  useScrollAnimation();

  const [submitted, setSubmitted] = useState(false);
  const [concerns, setConcerns] = useState<string[]>([]);
  const [preferredDays, setPreferredDays] = useState<string[]>([]);

  const [form, setForm] = useState({
    // Section 1
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    preferredContact: "",
    // Section 2
    insuranceProvider: "",
    memberId: "",
    groupNumber: "",
    policyHolderName: "",
    // Section 3
    preferredProvider: "",
    appointmentType: "",
    // Section 4
    currentMedications: "",
    priorTherapy: "",
    emergencyName: "",
    emergencyPhone: "",
    howHeard: "",
    // Section 5
    additionalNotes: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

  const toggleConcern = (item: string) => {
    setConcerns((prev) =>
      prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
    );
  };

  const toggleDay = (day: string) => {
    setPreferredDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
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
          <SectionLabel light>New Patient</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-5 tracking-tight">
            Start Your Care{" "}
            <em className="text-gold3 italic">Journey.</em>
          </h1>
          <p className="mt-5 text-cream/60 max-w-md mx-auto text-sm leading-relaxed">
            Complete this intake form before your first appointment. Takes about 5 minutes.
          </p>

          {/* HIPAA badge */}
          <div className="mt-7 inline-flex items-center gap-2 bg-white/[0.07] border border-white/12 rounded-full px-5 py-2.5 text-xs text-cream/75 tracking-wide">
            <span>🔒</span>
            <span className="tracking-[0.15em] uppercase font-medium">
              HIPAA Secure       Your information is encrypted and protected
            </span>
          </div>
        </div>

        {/* Gold wave transition */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="intakeWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B89040" />
              <stop offset="50%" stopColor="#E4C06A" />
              <stop offset="100%" stopColor="#B89040" />
            </linearGradient>
          </defs>
          <path d="M0,28 C360,56 720,0 1440,28 L1440,56 L0,56 Z" fill="url(#intakeWave)" />
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

      {/* ── Form Section ── */}
      <main className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-24 bg-white rounded-[28px] border border-black/5 px-8 shadow-[0_4px_24px_-8px_rgba(12,11,9,0.06)]">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="font-serif text-3xl">Intake Form Submitted</h3>
              <p className="mt-3 text-muted text-sm max-w-sm leading-relaxed">
                Your intake form has been received. We'll review your information and reach out within 24 hours to confirm your first appointment.
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
              className="bg-white rounded-[28px] p-8 md:p-10 border border-black/5 shadow-[0_4px_24px_-8px_rgba(12,11,9,0.06)] reveal"
            >
              {/* Form header */}
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl">Patient Intake Form</h2>
                <p className="text-muted text-sm mt-1.5">
                  All fields marked * are required. Your data is encrypted and HIPAA-compliant.
                </p>
              </div>

              {/* ── Section 1: Personal Information ── */}
              <SectionHeading>Personal Information</SectionHeading>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <FormField
                  label="Full Name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  value={form.dob}
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
                  required
                />
              </div>

              <div className="mt-5">
                <FormLabel>Address</FormLabel>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Street, City, State, ZIP"
                  className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 placeholder:text-muted/50"
                />
              </div>

              <div className="mt-5">
                <FormLabel>Preferred Contact Method</FormLabel>
                <select
                  name="preferredContact"
                  value={form.preferredContact}
                  onChange={handleChange}
                  className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 text-dark"
                >
                  <option value="">Select preference...</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Text">Text</option>
                </select>
              </div>

              <Divider />

              {/* ── Section 2: Insurance & Billing ── */}
              <SectionHeading>Insurance &amp; Billing</SectionHeading>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div>
                  <FormLabel>Insurance Provider</FormLabel>
                  <select
                    name="insuranceProvider"
                    value={form.insuranceProvider}
                    onChange={handleChange}
                    className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 text-dark"
                  >
                    <option value="">Select provider...</option>
                    {INSURANCE_PROVIDERS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <FormField
                  label="Insurance Member ID"
                  name="memberId"
                  value={form.memberId}
                  onChange={handleChange}
                />
                <FormField
                  label="Group Number"
                  name="groupNumber"
                  value={form.groupNumber}
                  onChange={handleChange}
                />
                <FormField
                  label="Policy Holder Name (if different)"
                  name="policyHolderName"
                  value={form.policyHolderName}
                  onChange={handleChange}
                  placeholder="Leave blank if same as above"
                />
              </div>

              <Divider />

              {/* ── Section 3: Care Preferences ── */}
              <SectionHeading>Care Preferences</SectionHeading>

              <div className="mt-5 space-y-5">
                {/* Primary Concern */}
                <div>
                  <FormLabel required>Primary Concern</FormLabel>
                  <p className="text-[11px] text-muted/70 mt-1 mb-2">Select all that apply.</p>
                  <div className="flex flex-wrap gap-2.5">
                    {CONCERN_OPTIONS.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => toggleConcern(c)}
                        className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                          concerns.includes(c)
                            ? "bg-gold2 border-gold2 text-dark shadow-[0_4px_14px_-6px_rgba(207,168,78,0.55)]"
                            : "bg-cream2 border-black/8 text-dark/70 hover:border-gold2/50 hover:text-dark"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred Provider */}
                <div>
                  <FormLabel>Preferred Provider</FormLabel>
                  <select
                    name="preferredProvider"
                    value={form.preferredProvider}
                    onChange={handleChange}
                    className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 text-dark"
                  >
                    <option value="">No preference</option>
                    {providers.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}       {p.credentials}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Appointment Type */}
                <div>
                  <FormLabel required>Appointment Type</FormLabel>
                  <div className="mt-2 flex flex-wrap gap-4">
                    {[
                      { value: "Virtual Telehealth", label: "Virtual Telehealth" },
                      { value: "In-Person", label: "In-Person (if available)" },
                    ].map(({ value, label }) => (
                      <label
                        key={value}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="appointmentType"
                          value={value}
                          checked={form.appointmentType === value}
                          onChange={handleChange}
                          required
                          className="accent-gold2"
                        />
                        <span className="text-sm text-dark group-hover:text-gold transition-colors duration-150">
                          {label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferred Days */}
                <div>
                  <FormLabel>Preferred Days</FormLabel>
                  <div className="mt-2 flex flex-wrap gap-2.5">
                    {PREFERRED_DAYS.map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleDay(day)}
                        className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                          preferredDays.includes(day)
                            ? "bg-gold2 border-gold2 text-dark shadow-[0_4px_14px_-6px_rgba(207,168,78,0.55)]"
                            : "bg-cream2 border-black/8 text-dark/70 hover:border-gold2/50 hover:text-dark"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Divider />

              {/* ── Section 4: Health Background ── */}
              <SectionHeading>Health Background</SectionHeading>

              <div className="mt-5 space-y-5">
                <div>
                  <FormLabel>Current Medications</FormLabel>
                  <textarea
                    name="currentMedications"
                    value={form.currentMedications}
                    onChange={handleChange}
                    rows={3}
                    placeholder="List any current prescriptions or supplements, or write 'None'"
                    className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 resize-none placeholder:text-muted/50"
                  />
                </div>

                <div>
                  <FormLabel>Prior Therapy Experience</FormLabel>
                  <select
                    name="priorTherapy"
                    value={form.priorTherapy}
                    onChange={handleChange}
                    className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 text-dark"
                  >
                    <option value="">Select...</option>
                    {PRIOR_THERAPY_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Emergency Contact Name"
                    name="emergencyName"
                    value={form.emergencyName}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Emergency Contact Phone"
                    name="emergencyPhone"
                    type="tel"
                    value={form.emergencyPhone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <FormLabel>How did you hear about us?</FormLabel>
                  <select
                    name="howHeard"
                    value={form.howHeard}
                    onChange={handleChange}
                    className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 text-dark"
                  >
                    <option value="">Select...</option>
                    {HOW_HEARD_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Divider />

              {/* ── Section 5: Additional Notes ── */}
              <SectionHeading>Additional Notes</SectionHeading>

              <div className="mt-5 space-y-5">
                <div>
                  <FormLabel>Is there anything else you'd like us to know?</FormLabel>
                  <textarea
                    name="additionalNotes"
                    value={form.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share any additional context, preferences, or concerns..."
                    className="mt-1.5 w-full bg-cream2 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold2 resize-none placeholder:text-muted/50"
                  />
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
                  <span>
                    I confirm the above information is accurate. I understand this form does not
                    constitute a diagnosis or treatment relationship.{" "}
                    <span className="text-gold">*</span>
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_12px_30px_-12px_rgba(207,168,78,0.55)]"
                >
                  <ClipboardCheck className="w-4 h-4" /> Submit Intake Form
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ── Shared sub-components ── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase font-medium text-gold">
      <span className="h-px w-10 bg-gold/50" />
      <span>{children}</span>
    </div>
  );
}

function Divider() {
  return <hr className="border-black/8 my-8" />;
}

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
