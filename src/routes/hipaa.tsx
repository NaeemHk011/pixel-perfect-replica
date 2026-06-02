import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShieldCheck, Lock, Eye, FileText, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/hipaa")({
  component: HipaaPage,
  head: () => ({
    meta: [
      { title: "HIPAA Notice of Privacy Practices | Mindova Holdings" },
      { name: "description", content: "Mindova Holdings HIPAA Notice of Privacy Practices - your rights regarding protected health information." },
    ],
  }),
});

const rights = [
  {
    icon: Eye,
    title: "Right to Access Your Records",
    desc: "You have the right to inspect and obtain a copy of your protected health information (PHI) that we maintain. Requests can be submitted in writing to care@mindovaholdings.com.",
  },
  {
    icon: FileText,
    title: "Right to Request Corrections",
    desc: "If you believe your health information is incorrect or incomplete, you have the right to request an amendment. We will respond to your request within 60 days.",
  },
  {
    icon: Lock,
    title: "Right to Restrict Disclosures",
    desc: "You may request that we restrict how we use or disclose your PHI for treatment, payment, or healthcare operations. We are not required to agree, but will comply when required by law.",
  },
  {
    icon: ShieldCheck,
    title: "Right to Confidential Communications",
    desc: "You have the right to request that we communicate with you about your health information in a specific way or at a specific location (e.g., home phone only, or via encrypted email).",
  },
] as const;

const sections = [
  {
    title: "How We Use Your Health Information",
    content: "Mindova Holdings uses your protected health information (PHI) for three primary purposes: (1) Treatment - to provide, coordinate, and manage your healthcare and related services; (2) Payment - to obtain payment for services rendered, including billing your insurance company; (3) Healthcare Operations - to conduct quality improvement activities, train staff, and manage our practice.",
  },
  {
    title: "Disclosures We May Make Without Your Authorization",
    content: "In certain circumstances, we may disclose your PHI without your written authorization, including: as required by law, for public health activities, to report abuse or neglect, for health oversight activities, in judicial or administrative proceedings, for law enforcement purposes, and to avert a serious threat to health or safety.",
  },
  {
    title: "Uses Requiring Your Written Authorization",
    content: "Most other uses and disclosures of your PHI - including for marketing purposes, the sale of your PHI, or uses not described in this notice - require your written authorization. You may revoke any authorization at any time by notifying us in writing.",
  },
  {
    title: "How We Protect Your Information",
    content: "We implement administrative, physical, and technical safeguards to protect your PHI. All electronic PHI is encrypted in transit and at rest. Access to your records is restricted to authorized personnel directly involved in your care. Our telehealth platform is fully HIPAA-compliant and end-to-end encrypted.",
  },
  {
    title: "Breach Notification",
    content: "In the event of a breach of your unsecured PHI, we will notify you as required by the HITECH Act - typically within 60 days of discovering the breach. Notification will be provided via the contact information you have on file.",
  },
  {
    title: "Changes to This Notice",
    content: "We reserve the right to change the terms of this notice at any time. We will post the revised notice on our website and make it available upon request. The new notice will apply to all PHI we maintain at that time.",
  },
] as const;

function HipaaPage() {
  useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Navbar onDark />

      {/* Hero */}
      <section className="relative bg-dark text-cream overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="absolute inset-0 gold-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 text-xs tracking-[0.18em] uppercase mb-5">
            <ShieldCheck className="w-3.5 h-3.5" />
            HIPAA Compliant
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
            HIPAA Notice of{" "}
            <em className="text-gold3 italic">Privacy Practices</em>
          </h1>
          <p className="mt-5 text-cream/60 max-w-xl mx-auto text-sm leading-relaxed">
            This notice describes how your medical information may be used and disclosed, and how you can access this information. Please review it carefully.
          </p>
          <p className="mt-3 text-cream/40 text-xs tracking-wide">Effective Date: June 2026 · Last Updated: June 2026</p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,20 C360,40 720,0 1440,20 L1440,40 L0,40 Z" fill="#F9F6F1" />
        </svg>
      </section>

      <main className="bg-[#F9F6F1]">

        {/* HIPAA badge bar */}
        <div className="bg-emerald-600 py-3">
          <div className="max-w-4xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-6 text-white text-xs tracking-[0.15em] uppercase">
            <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5" /> HIPAA Compliant</span>
            <span className="hidden sm:block text-white/30">·</span>
            <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> End-to-End Encrypted</span>
            <span className="hidden sm:block text-white/30">·</span>
            <span className="flex items-center gap-2"><Eye className="w-3.5 h-3.5" /> Your Rights Protected</span>
          </div>
        </div>

        {/* Your Rights */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-dark mb-8 text-center">
              Your Rights Regarding Your{" "}
              <em className="text-gold italic">Health Information</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {rights.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="reveal bg-white rounded-2xl p-6 border border-dark/[0.07] shadow-[0_2px_16px_-8px_rgba(12,11,9,0.06)]"
                  data-reveal-delay={String(i * 60)}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-serif text-base text-dark mb-2">{title}</h3>
                  <p className="text-xs text-dark/65 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main sections */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-5">
            {sections.map(({ title, content }, i) => (
              <div
                key={title}
                className="reveal bg-white rounded-2xl p-7 border border-dark/[0.07] shadow-[0_2px_16px_-8px_rgba(12,11,9,0.06)]"
                data-reveal-delay={String(i * 50)}
              >
                <h2 className="font-serif text-lg text-dark mb-3">{i + 1}. {title}</h2>
                <p className="text-sm text-dark/70 leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / Complaints */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <div className="reveal bg-dark rounded-2xl p-8 text-cream relative overflow-hidden">
              <div className="absolute inset-0 gold-glow opacity-40 pointer-events-none" />
              <div className="relative">
                <h2 className="font-serif text-xl md:text-2xl text-cream mb-2">
                  Questions or Complaints?
                </h2>
                <p className="text-sm text-cream/65 leading-relaxed mb-6">
                  If you believe your privacy rights have been violated, you may file a complaint with our Privacy Officer or with the U.S. Department of Health and Human Services. You will not be penalized for filing a complaint.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:care@mindovaholdings.com"
                    className="flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Mail className="w-4 h-4" />
                    care@mindovaholdings.com
                  </a>
                  <a
                    href="tel:+18880000000"
                    className="flex items-center gap-2 border border-white/25 text-white hover:border-gold2 hover:text-gold3 font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4" />
                    (888) 000-0000
                  </a>
                </div>
                <p className="mt-5 text-xs text-cream/40 leading-relaxed">
                  To file a complaint with HHS: <span className="text-cream/60">www.hhs.gov/ocr/privacy/hipaa/complaints</span>
                </p>
              </div>
            </div>

            <div className="mt-8 text-center reveal">
              <Link
                to="/privacy-policy"
                className="text-sm text-gold2 hover:text-gold3 transition-colors duration-200 underline underline-offset-2"
              >
                View our full Privacy Policy →
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
