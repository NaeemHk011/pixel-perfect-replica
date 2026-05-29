import { useState, FormEvent } from "react";
import { ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";

// Set VITE_GHL_INTAKE_WEBHOOK in .env.local to your GHL webhook URL
const GHL_WEBHOOK = (import.meta.env.VITE_GHL_INTAKE_WEBHOOK ?? "") as string;

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado",
  "Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho",
  "Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana",
  "Maine","Maryland","Massachusetts","Michigan","Minnesota",
  "Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York",
  "North Carolina","North Dakota","Ohio","Oklahoma","Oregon",
  "Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington",
  "West Virginia","Wisconsin","Wyoming","District of Columbia",
];

const SERVICE_OPTIONS = [
  "Therapy",
  "Wellness Coaching",
  "Medication Management",
  "Anxiety / Stress Support",
  "Relationship Support",
  "Personal Development",
  "Accountability Coaching",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-dark/[0.1] bg-[#FAFAF9] text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-gold2 focus:ring-2 focus:ring-gold2/15 transition-all duration-150";

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px flex-1 bg-dark/[0.07]" />
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-dark/35">{label}</span>
      <div className="h-px flex-1 bg-dark/[0.07]" />
    </div>
  );
}

export function IntakeForm() {
  const [status, setStatus] = useState<Status>("idle");

  // Personal Info
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [stateVal, setStateVal] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredComm, setPreferredComm] = useState("");

  // Service Interest
  const [services, setServices] = useState<string[]>([]);
  const [otherService, setOtherService] = useState("");

  // Provider Preferences
  const [providerGender, setProviderGender] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [language, setLanguage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  function toggleService(s: string) {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const serviceInterests = [
      ...services.filter((s) => s !== "Other"),
      ...(services.includes("Other") && otherService ? [`Other: ${otherService}`] : []),
    ].join(", ");

    const payload = {
      full_name: fullName,
      email,
      phone,
      custom_fields: {
        age,
        state_of_residence: stateVal,
        preferred_communication: preferredComm,
        service_interests: serviceInterests,
        preferred_provider_gender: providerGender,
        session_type: sessionType,
        language_preference: language,
        payment_method: paymentMethod,
      },
      tags: ["intake-form", "website"],
    };

    try {
      if (!GHL_WEBHOOK) {
        // Dev/demo: log payload and simulate success
        console.info("[IntakeForm] VITE_GHL_INTAKE_WEBHOOK not set. Payload:", payload);
        await new Promise((r) => setTimeout(r, 800));
        setStatus("success");
        return;
      }
      const res = await fetch(GHL_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch (err) {
      console.error("[IntakeForm] Submission error:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-[28px] border border-black/5 shadow-[0_4px_24px_-8px_rgba(12,11,9,0.06)] p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="font-serif text-2xl text-dark mb-3">We've received your information!</h3>
        <p className="text-sm text-dark/60 leading-relaxed max-w-sm mx-auto">
          Mindova's care coordinators will review your preferences and connect you with the best-fit provider within{" "}
          <strong className="text-dark/80">24–48 hours</strong>.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2 text-xs text-emerald-700">
          <ShieldCheck className="w-3.5 h-3.5" />
          Your information is HIPAA-secure and encrypted
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[28px] border border-black/5 shadow-[0_4px_24px_-8px_rgba(12,11,9,0.06)] overflow-hidden"
    >
      {/* ── Personal Information ── */}
      <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-6 border-b border-dark/[0.06]">
        <SectionDivider label="Personal Information" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-dark/70 mb-1.5">
              Full Name <span className="text-rose-400">*</span>
            </label>
            <input
              required
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Jane Smith"
              className={inputCls}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-dark/70 mb-1.5">
              Age <span className="text-rose-400">*</span>
            </label>
            <input
              required
              type="number"
              min="13"
              max="120"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 32"
              className={inputCls}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-dark/70 mb-1.5">
              State of Residence <span className="text-rose-400">*</span>
            </label>
            <select
              required
              value={stateVal}
              onChange={(e) => setStateVal(e.target.value)}
              className={inputCls}
            >
              <option value="">Select a state…</option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-dark/70 mb-1.5">
              Email Address <span className="text-rose-400">*</span>
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className={inputCls}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-dark/70 mb-1.5">
              Phone Number <span className="text-rose-400">*</span>
            </label>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 000-0000"
              className={inputCls}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-dark/70 mb-1.5">
              Preferred Communication Method <span className="text-rose-400">*</span>
            </label>
            <select
              required
              value={preferredComm}
              onChange={(e) => setPreferredComm(e.target.value)}
              className={inputCls}
            >
              <option value="">Select preference…</option>
              <option value="Call">Call</option>
              <option value="Text">Text</option>
              <option value="Email">Email</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── Service Interest ── */}
      <div className="px-5 sm:px-8 py-6 border-b border-dark/[0.06]">
        <SectionDivider label="Service Interest" />
        <p className="text-xs text-dark/45 -mt-2 mb-4">Select all that apply</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SERVICE_OPTIONS.map((s) => {
            const checked = services.includes(s);
            return (
              <label
                key={s}
                className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-150 ${
                  checked
                    ? "border-gold2 bg-amber-50/60"
                    : "border-dark/[0.1] bg-[#FAFAF9] hover:border-gold2/40"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border transition-all ${
                    checked ? "bg-gold2 border-gold2" : "border-dark/25 bg-white"
                  }`}
                >
                  {checked && (
                    <svg viewBox="0 0 10 8" className="w-2.5 h-2.5 fill-none stroke-dark stroke-[2.5]">
                      <path d="M1 4l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggleService(s)}
                />
                <span className="text-sm text-dark/80">{s}</span>
              </label>
            );
          })}
        </div>

        {services.includes("Other") && (
          <div className="mt-4">
            <input
              type="text"
              value={otherService}
              onChange={(e) => setOtherService(e.target.value)}
              placeholder="Please describe what you're looking for…"
              className={inputCls}
            />
          </div>
        )}
      </div>

      {/* ── Provider Preferences ── */}
      <div className="px-5 sm:px-8 py-6">
        <SectionDivider label="Provider Preferences" />

        <div className="space-y-6">
          {/* Provider Gender */}
          <div>
            <label className="block text-xs font-medium text-dark/70 mb-3">
              Preferred Provider Gender
            </label>
            <div className="flex flex-wrap gap-3">
              {["Male", "Female", "No Preference"].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border cursor-pointer transition-all duration-150 text-sm ${
                    providerGender === opt
                      ? "border-gold2 bg-amber-50 text-dark"
                      : "border-dark/15 text-dark/65 hover:border-gold2/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="providerGender"
                    value={opt}
                    checked={providerGender === opt}
                    onChange={() => setProviderGender(opt)}
                    className="sr-only"
                  />
                  <span
                    className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      providerGender === opt ? "border-gold2" : "border-dark/30"
                    }`}
                  >
                    {providerGender === opt && (
                      <span className="w-2 h-2 rounded-full bg-gold2 block" />
                    )}
                  </span>
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Session Type */}
          <div>
            <label className="block text-xs font-medium text-dark/70 mb-3">
              Session Type
            </label>
            <div className="flex flex-wrap gap-3">
              {["Virtual Only", "In-Person", "No Preference"].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border cursor-pointer transition-all duration-150 text-sm ${
                    sessionType === opt
                      ? "border-gold2 bg-amber-50 text-dark"
                      : "border-dark/15 text-dark/65 hover:border-gold2/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="sessionType"
                    value={opt}
                    checked={sessionType === opt}
                    onChange={() => setSessionType(opt)}
                    className="sr-only"
                  />
                  <span
                    className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      sessionType === opt ? "border-gold2" : "border-dark/30"
                    }`}
                  >
                    {sessionType === opt && (
                      <span className="w-2 h-2 rounded-full bg-gold2 block" />
                    )}
                  </span>
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Language Preference */}
          <div>
            <label className="block text-xs font-medium text-dark/70 mb-1.5">
              Language Preference
            </label>
            <input
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="e.g. English, Spanish, French…"
              className={inputCls}
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-xs font-medium text-dark/70 mb-3">
              Payment Method
            </label>
            <div className="flex flex-wrap gap-3">
              {["Insurance", "Self-Pay", "Both"].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border cursor-pointer transition-all duration-150 text-sm ${
                    paymentMethod === opt
                      ? "border-gold2 bg-amber-50 text-dark"
                      : "border-dark/15 text-dark/65 hover:border-gold2/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={opt}
                    checked={paymentMethod === opt}
                    onChange={() => setPaymentMethod(opt)}
                    className="sr-only"
                  />
                  <span
                    className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      paymentMethod === opt ? "border-gold2" : "border-dark/30"
                    }`}
                  >
                    {paymentMethod === opt && (
                      <span className="w-2 h-2 rounded-full bg-gold2 block" />
                    )}
                  </span>
                  {opt}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Coordinator note */}
        <div className="mt-7 flex items-start gap-3 bg-amber-50/50 border border-amber-200/60 rounded-2xl px-5 py-4">
          <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-dark/65 leading-relaxed">
            <strong className="text-dark/80">Mindova's care coordinators</strong> will review your preferences and connect you with the best-fit provider within{" "}
            <strong className="text-dark/80">24–48 hours</strong>. All information is HIPAA-secure and encrypted.
          </p>
        </div>

        {/* Error message */}
        {status === "error" && (
          <p className="mt-4 text-sm text-rose-500 text-center">
            Something went wrong. Please try again or contact us directly.
          </p>
        )}

        {/* Submit */}
        <div className="mt-5">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 bg-gold2 hover:bg-gold3 text-dark font-semibold text-sm rounded-2xl tracking-wide uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(207,168,78,0.45)] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting…
              </>
            ) : (
              "Submit & Find My Provider"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
