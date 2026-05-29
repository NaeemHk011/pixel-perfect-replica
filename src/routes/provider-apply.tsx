import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, FormEvent } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatMindovaProvides } from "@/components/sections/WhatMindovaProvides";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ArrowRight,
  Calendar,
  ClipboardList,
  Users,
  CheckCircle2,
  Loader2,
  Brain,
  Leaf,
  Upload,
  ShieldCheck,
} from "lucide-react";

// Configure in .env.local
const GHL_CLINICAL_WEBHOOK = (import.meta.env.VITE_GHL_PROVIDER_CLINICAL_WEBHOOK ?? "") as string;
const GHL_WELLNESS_WEBHOOK = (import.meta.env.VITE_GHL_PROVIDER_WELLNESS_WEBHOOK ?? "") as string;

export const Route = createFileRoute("/provider-apply")({
  component: ProviderApplyPage,
  head: () => ({
    meta: [
      { title: "Apply as a Provider | Mindova Holdings" },
      {
        name: "description",
        content:
          "Join Mindova's network as a licensed clinical professional or wellness coach. Two pathways  - one purpose.",
      },
    ],
  }),
});

type Status = "idle" | "submitting" | "success" | "error";
type Tab = "clinical" | "wellness";

const BENEFITS = [
  { icon: Calendar,      title: "Flexible Schedule",     desc: "Set your own hours and take on as many or as few clients as you choose."           },
  { icon: ClipboardList, title: "Administrative Support", desc: "We handle billing, scheduling, and compliance so you focus on care."                },
  { icon: Users,         title: "Vetted Community",       desc: "Join a curated network of licensed, high-caliber clinicians and wellness pros."      },
];

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

const FOCUS_AREAS = [
  "Mental Wellness",
  "Physical Wellness",
  "Mindset & Confidence",
  "Relationships",
  "Career & Purpose",
  "Nutrition & Lifestyle",
  "Stress Management",
  "Spiritual Growth",
];

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-dark/[0.1] bg-[#FAFAF9] text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-gold2 focus:ring-2 focus:ring-gold2/15 transition-all duration-150";

// ── Clinical Form ─────────────────────────────────────────────────────────────
function ClinicalForm() {
  const [status, setStatus]         = useState<Status>("idle");
  const [fullName, setFullName]     = useState("");
  const [email, setEmail]           = useState("");
  const [phone, setPhone]           = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [licenseNum, setLicenseNum] = useState("");
  const [states, setStates]         = useState<string[]>([]);
  const [specialty, setSpecialty]   = useState("");
  const [experience, setExperience] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [bio, setBio]               = useState("");

  function toggleState(s: string) {
    setStates((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  }

  async function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload  = () => resolve(reader.result as string);
      reader.onerror = reject;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    let resumeData: string | null = null;
    if (resumeFile) {
      try { resumeData = await fileToBase64(resumeFile); } catch { /* skip */ }
    }

    const payload = {
      form_type: "Provider Application (Clinical)",
      full_name: fullName,
      email,
      phone,
      license_type: licenseType,
      license_number: licenseNum,
      states_licensed: states.join(", "),
      specialty_focus_area: specialty,
      years_of_experience: experience,
      resume_filename: resumeFile?.name ?? "",
      resume_data: resumeData,
      brief_bio: bio,
      tags: ["provider-application", "clinical"],
    };

    try {
      if (!GHL_CLINICAL_WEBHOOK) {
        console.info("[ProviderApply:Clinical] Webhook not set. Payload:", payload);
        await new Promise((r) => setTimeout(r, 800));
        setStatus("success");
        return;
      }
      const res = await fetch(GHL_CLINICAL_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch (err) {
      console.error("[ProviderApply:Clinical]", err);
      setStatus("error");
    }
  }

  if (status === "success") return <SuccessCard track="clinical" />;

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      <div className="px-5 sm:px-8 pt-6 pb-6 border-b border-dark/[0.06]">
        <Divider label="Personal Information" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Label text="Full Name" required />
            <input required type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Dr. Jane Smith" className={inputCls} />
          </div>
          <div>
            <Label text="Email Address" required />
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" className={inputCls} />
          </div>
          <div>
            <Label text="Phone Number" required />
            <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 000-0000" className={inputCls} />
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-8 py-6 border-b border-dark/[0.06]">
        <Divider label="License & Credentials" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label text="License Type" required />
            <select required value={licenseType} onChange={(e) => setLicenseType(e.target.value)} className={inputCls}>
              <option value="">Select type…</option>
              {["LPC","LMFT","LCSW","Psychologist","Psychiatrist","PMHNP","Other"].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <Label text="License Number" required />
            <input required type="text" value={licenseNum} onChange={(e) => setLicenseNum(e.target.value)} placeholder="e.g. TX-LPC-12345" className={inputCls} />
          </div>
          <div>
            <Label text="Years of Experience" required />
            <select required value={experience} onChange={(e) => setExperience(e.target.value)} className={inputCls}>
              <option value="">Select range…</option>
              {["0–2 years","3–5 years","6–10 years","10+ years"].map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <div>
            <Label text="Specialty / Focus Area" required />
            <input required type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="e.g. Anxiety, Trauma, ADHD" className={inputCls} />
          </div>
        </div>

        {/* States Licensed In */}
        <div className="mt-4">
          <Label text="States Licensed In" required />
          <p className="text-[11px] text-dark/40 mb-2">Select all states where you hold an active license</p>
          <div className="border border-dark/[0.1] rounded-xl bg-[#FAFAF9] p-3 max-h-44 overflow-y-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-0.5">
              {US_STATES.map((s) => {
                const checked = states.includes(s);
                return (
                  <label key={s} className={`flex items-center gap-2 py-1.5 px-2.5 rounded-lg cursor-pointer transition-colors ${checked ? "bg-amber-50" : "hover:bg-gray-50"}`}>
                    <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 transition-all ${checked ? "bg-gold2 border-gold2" : "border-dark/25 bg-white"}`}>
                      {checked && (
                        <svg viewBox="0 0 10 8" className="w-2 h-2 fill-none stroke-dark stroke-[2.5]">
                          <path d="M1 4l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggleState(s)} />
                    <span className="text-xs text-dark/75">{s}</span>
                  </label>
                );
              })}
            </div>
          </div>
          {states.length > 0 && (
            <p className="text-[11px] text-gold2 mt-1.5 font-medium">{states.length} state{states.length > 1 ? "s" : ""} selected</p>
          )}
        </div>
      </div>

      <div className="px-5 sm:px-8 py-6">
        <Divider label="Application Materials" />
        <div className="space-y-4">
          {/* Resume Upload */}
          <div>
            <Label text="Resume / CV" />
            <label className={`flex items-center gap-3 cursor-pointer ${inputCls} justify-between`}>
              <span className={resumeFile ? "text-dark" : "text-dark/30"}>
                {resumeFile ? resumeFile.name : "Upload PDF or DOC…"}
              </span>
              <Upload className="w-4 h-4 text-dark/40 flex-shrink-0" />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="sr-only"
                onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
              />
            </label>
            <p className="text-[11px] text-dark/40 mt-1">PDF or DOC/DOCX  - max 10 MB</p>
          </div>

          {/* Brief Bio */}
          <div>
            <Label text="Brief Bio" required />
            <textarea
              required
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              placeholder="Tell us about your background, clinical approach, and what motivates you…"
              className={`${inputCls} resize-none`}
            />
          </div>
        </div>

        <SubmitFooter status={status} label="Submit Clinical Application" />
      </div>
    </form>
  );
}

// ── Wellness Form ─────────────────────────────────────────────────────────────
function WellnessForm() {
  const [status, setStatus]             = useState<Status>("idle");
  const [fullName, setFullName]         = useState("");
  const [email, setEmail]               = useState("");
  const [phone, setPhone]               = useState("");
  const [coachingSpecialty, setCoachingSpecialty] = useState("");
  const [certifications, setCertifications] = useState("");
  const [focusAreas, setFocusAreas]     = useState<string[]>([]);
  const [experience, setExperience]     = useState("");
  const [bio, setBio]                   = useState("");

  function toggleFocus(s: string) {
    setFocusAreas((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const payload = {
      form_type: "Provider Application (Coaching)",
      full_name: fullName,
      email,
      phone,
      coaching_specialty: coachingSpecialty,
      certifications,
      focus_areas: focusAreas.join(", "),
      years_of_experience: experience,
      brief_bio: bio,
      tags: ["provider-application", "wellness-coaching"],
    };

    try {
      if (!GHL_WELLNESS_WEBHOOK) {
        console.info("[ProviderApply:Wellness] Webhook not set. Payload:", payload);
        await new Promise((r) => setTimeout(r, 800));
        setStatus("success");
        return;
      }
      const res = await fetch(GHL_WELLNESS_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch (err) {
      console.error("[ProviderApply:Wellness]", err);
      setStatus("error");
    }
  }

  if (status === "success") return <SuccessCard track="wellness" />;

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      <div className="px-5 sm:px-8 pt-6 pb-6 border-b border-dark/[0.06]">
        <Divider label="Personal Information" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Label text="Full Name" required />
            <input required type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Jane Smith" className={inputCls} />
          </div>
          <div>
            <Label text="Email Address" required />
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" className={inputCls} />
          </div>
          <div>
            <Label text="Phone Number" required />
            <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 000-0000" className={inputCls} />
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-8 py-6 border-b border-dark/[0.06]">
        <Divider label="Coaching Background" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label text="Coaching Specialty" required />
            <select required value={coachingSpecialty} onChange={(e) => setCoachingSpecialty(e.target.value)} className={inputCls}>
              <option value="">Select specialty…</option>
              {["Life Coaching","Wellness Coaching","Accountability","Mentorship","Personal Development","Other"].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <Label text="Years of Experience" required />
            <select required value={experience} onChange={(e) => setExperience(e.target.value)} className={inputCls}>
              <option value="">Select range…</option>
              {["0–2 years","3–5 years","6–10 years","10+ years"].map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <Label text="Certifications" />
            <input type="text" value={certifications} onChange={(e) => setCertifications(e.target.value)} placeholder="e.g. ICF-ACC, ACE, NASM, etc." className={inputCls} />
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mt-4">
          <Label text="Focus Areas" />
          <p className="text-[11px] text-dark/40 mb-3">Select all that apply</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {FOCUS_AREAS.map((s) => {
              const checked = focusAreas.includes(s);
              return (
                <label key={s} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-150 ${checked ? "border-gold2 bg-amber-50/60" : "border-dark/[0.1] bg-[#FAFAF9] hover:border-gold2/40"}`}>
                  <span className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all ${checked ? "bg-gold2 border-gold2" : "border-dark/25 bg-white"}`}>
                    {checked && (
                      <svg viewBox="0 0 10 8" className="w-2.5 h-2.5 fill-none stroke-dark stroke-[2.5]">
                        <path d="M1 4l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggleFocus(s)} />
                  <span className="text-sm text-dark/80">{s}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-8 py-6">
        <Divider label="About You" />
        <div>
          <Label text="Brief Bio" required />
          <textarea
            required
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            placeholder="Tell us about your coaching philosophy, background, and what drives you to help others grow…"
            className={`${inputCls} resize-none`}
          />
        </div>
        <SubmitFooter status={status} label="Submit Wellness Application" />
      </div>
    </form>
  );
}

// ── Shared sub-components ─────────────────────────────────────────────────────
function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label className="block text-xs font-medium text-dark/70 mb-1.5">
      {text} {required && <span className="text-rose-400">*</span>}
    </label>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px flex-1 bg-dark/[0.07]" />
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-dark/35">{label}</span>
      <div className="h-px flex-1 bg-dark/[0.07]" />
    </div>
  );
}

function SubmitFooter({ status, label }: { status: Status; label: string }) {
  return (
    <div className="mt-6">
      {status === "error" && (
        <p className="text-sm text-rose-500 text-center mb-4">Something went wrong. Please try again or contact us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 bg-gold2 hover:bg-gold3 text-dark font-semibold text-sm rounded-2xl tracking-wide uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(207,168,78,0.45)] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <><Loader2 className="w-4 h-4 animate-spin" />Submitting…</>
        ) : label}
      </button>
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-dark/40">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
        Applications reviewed within 3 business days
      </div>
    </div>
  );
}

function SuccessCard({ track }: { track: "clinical" | "wellness" }) {
  return (
    <div className="px-5 sm:px-8 py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
      </div>
      <h3 className="font-serif text-2xl text-dark mb-3">Application Received!</h3>
      <p className="text-sm text-dark/60 leading-relaxed max-w-sm mx-auto">
        Thank you for applying as a{" "}
        <strong className="text-dark/80">{track === "clinical" ? "Licensed Clinical Professional" : "Wellness & Coaching Professional"}</strong>.
        Our provider relations team will review your application and reach out within{" "}
        <strong className="text-dark/80">3 business days</strong>.
      </p>
      <div className="mt-6 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2 text-xs text-emerald-700">
        <ShieldCheck className="w-3.5 h-3.5" />
        Your information is secure and confidential
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
function ProviderApplyPage() {
  useScrollAnimation();
  const [activeTab, setActiveTab] = useState<Tab>("clinical");

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onDark />

      {/* ── Hero ── */}
      <section className="relative bg-dark text-cream overflow-hidden pt-40 pb-28">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="absolute inset-0 gold-glow" />
        <div className="absolute -top-20 right-1/3 w-72 h-72 rounded-full bg-blue-500/[0.06] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-emerald-500/[0.05] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <SectionLabel light>Join the Network</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-5 tracking-tight">
            Apply as a{" "}
            <em className="text-gold3 italic">Provider.</em>
          </h1>
          <p className="mt-5 text-cream/60 max-w-lg mx-auto text-sm leading-relaxed">
            Two pathways  - one purpose. Whether you're a licensed clinician or a certified wellness professional, there's a place for you in the Mindova network.
          </p>
        </div>

        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden="true">
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

      {/* Gold divider */}
      <div className="h-2 w-full" style={{ background: "linear-gradient(90deg, #B89040 0%, #E4C06A 40%, #CFA84E 70%, #B89040 100%)" }} />

      {/* ── Main Content ── */}
      <main className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-14 items-start">

          {/* ── Left Sidebar ── */}
          <div className="reveal space-y-6 lg:sticky lg:top-32">
            <div>
              <SectionLabel>Provider Network</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl mt-5 tracking-tight">
                Build your practice.{" "}
                <em className="text-gold italic">Change lives.</em>
              </h2>
            </div>

            <div className="space-y-3">
              {BENEFITS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-4 bg-white border border-black/5 rounded-2xl hover:border-gold/20 hover:shadow-[0_8px_24px_-8px_rgba(184,144,64,0.12)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gold2/10 border border-gold2/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gold2" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark">{title}</p>
                    <p className="text-xs text-muted mt-1 leading-relaxed">{desc}</p>
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
                <h3 className="font-serif text-xl">Have questions before applying?</h3>
                <p className="text-cream/60 text-sm mt-2 leading-relaxed">Our provider relations team is happy to answer any questions before you apply.</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(207,168,78,0.5)]">
                  Contact Our Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Right: Tabbed Form ── */}
          <div className="reveal" data-reveal-delay="120">

            {/* Tab header */}
            <div className="mb-6 text-center">
              <SectionLabel>Provider Application</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl mt-3 tracking-tight">
                Start Your{" "}
                <em className="text-gold italic">Application.</em>
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed max-w-md mx-auto">
                Choose your track below and fill out the form. Our team reviews all applications within 3 business days.
              </p>
            </div>

            {/* Tab switcher */}
            <div className="flex rounded-2xl bg-dark p-1.5 mb-6 gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTab("clinical")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === "clinical"
                    ? "bg-gold2 text-dark shadow-[0_4px_12px_-4px_rgba(207,168,78,0.5)]"
                    : "text-cream/60 hover:text-cream"
                }`}
              >
                <Brain className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">Licensed Clinical Professional</span>
                <span className="sm:hidden">Clinical</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("wellness")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === "wellness"
                    ? "bg-gold2 text-dark shadow-[0_4px_12px_-4px_rgba(207,168,78,0.5)]"
                    : "text-cream/60 hover:text-cream"
                }`}
              >
                <Leaf className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">Wellness & Coaching Professional</span>
                <span className="sm:hidden">Wellness</span>
              </button>
            </div>

            {/* Form card */}
            <div className="bg-white rounded-[28px] border border-black/5 shadow-[0_4px_24px_-8px_rgba(12,11,9,0.06)] overflow-hidden">
              {/* Track badge */}
              <div className={`px-8 py-4 border-b border-dark/[0.06] flex items-center gap-2.5 ${activeTab === "clinical" ? "bg-blue-50/50" : "bg-emerald-50/50"}`}>
                {activeTab === "clinical" ? (
                  <>
                    <Brain className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-600">Licensed Clinical Professional Track</span>
                  </>
                ) : (
                  <>
                    <Leaf className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-emerald-600">Wellness & Coaching Professional Track</span>
                  </>
                )}
              </div>

              {activeTab === "clinical" ? <ClinicalForm /> : <WellnessForm />}
            </div>

          </div>
        </div>
      </main>

      <WhatMindovaProvides light />

      <Footer />
    </div>
  );
}
