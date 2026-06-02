import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service | Mindova Holdings" },
      { name: "description", content: "Mindova Holdings Terms of Service — the terms and conditions governing your use of our platform and services." },
    ],
  }),
});

const sections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing or using Mindova Holdings' website, platform, or services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "Description of Services",
    content: "Mindova Holdings provides a behavioral health platform that connects individuals with licensed therapists, psychiatrists, psychiatric nurse practitioners, and certified wellness professionals. Clinical services are provided by licensed professionals, while coaching services are non-clinical in nature.",
  },
  {
    title: "Not a Substitute for Emergency Care",
    content: "Mindova's services are not intended for use in medical emergencies. If you are experiencing a psychiatric emergency or are at risk of harming yourself or others, please call 911 or go to your nearest emergency room. You may also call or text 988 to reach the Suicide & Crisis Lifeline.",
  },
  {
    title: "Coaching Services Disclaimer",
    content: "Coaching services provided through Mindova are non-clinical in nature and are not intended to diagnose, treat, cure, or prevent any condition or disease, and are not a substitute for licensed mental health care. For clinical mental health concerns, please consult with a licensed professional.",
  },
  {
    title: "User Responsibilities",
    content: "You agree to provide accurate and complete information when using our services, maintain the confidentiality of your account credentials, use our platform only for lawful purposes, and not to misrepresent your identity or qualifications.",
  },
  {
    title: "Provider Relationships",
    content: "Mindova acts as a platform connecting patients with independent licensed providers. The clinical relationship is between you and your provider. Mindova does not practice medicine or provide clinical advice directly.",
  },
  {
    title: "Payment & Billing",
    content: "Service fees vary by provider and session type. We accept most major insurance plans and self-pay. You are responsible for verifying your insurance coverage prior to scheduling. All billing disputes should be directed to care@mindovaholdings.com.",
  },
  {
    title: "Intellectual Property",
    content: "All content on this website, including text, graphics, logos, and software, is the property of Mindova Holdings and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.",
  },
  {
    title: "Limitation of Liability",
    content: "Mindova Holdings shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability to you shall not exceed the amount paid by you for services in the preceding three months.",
  },
  {
    title: "Changes to Terms",
    content: "We reserve the right to modify these Terms of Service at any time. Continued use of our services following notification of changes constitutes your acceptance of the updated terms.",
  },
  {
    title: "Contact",
    content: "Questions about these Terms of Service may be directed to: care@mindovaholdings.com or (888) 000-0000.",
  },
] as const;

function TermsPage() {
  useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Navbar onDark />

      {/* Hero */}
      <section className="relative bg-dark text-cream overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="absolute inset-0 gold-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 text-blue-300 text-xs tracking-[0.18em] uppercase mb-5">
            <FileText className="w-3.5 h-3.5" />
            Legal
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Terms of{" "}
            <em className="text-gold3 italic">Service</em>
          </h1>
          <p className="mt-5 text-cream/60 max-w-xl mx-auto text-sm leading-relaxed">
            Please read these terms carefully before using Mindova Holdings' platform and services.
          </p>
          <p className="mt-3 text-cream/40 text-xs tracking-wide">Last updated: June 2026</p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,20 C360,40 720,0 1440,20 L1440,40 L0,40 Z" fill="#F9F6F1" />
        </svg>
      </section>

      {/* Content */}
      <main className="py-16 md:py-24 bg-[#F9F6F1]">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="space-y-6">
            {sections.map(({ title, content }, i) => (
              <div
                key={title}
                className="reveal bg-white rounded-2xl p-7 border border-dark/[0.07] shadow-[0_2px_16px_-8px_rgba(12,11,9,0.06)]"
                data-reveal-delay={String(i * 50)}
              >
                <h2 className="font-serif text-xl text-dark mb-3">{i + 1}. {title}</h2>
                <p className="text-sm text-dark/70 leading-relaxed">{content}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center reveal">
            <p className="text-sm text-muted mb-4">Questions about our terms?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
