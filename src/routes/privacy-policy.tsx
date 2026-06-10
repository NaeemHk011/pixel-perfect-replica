import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Mindova Holdings" },
      { name: "description", content: "Mindova Holdings privacy policy - how we collect, use, and protect your personal health information." },
    ],
  }),
});

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly to us, including name, contact information, health history, insurance details, and preferences shared through our intake and matching forms. We also collect usage data and technical information when you use our platform.",
  },
  {
    title: "How We Use Your Information",
    content: "Your information is used to match you with appropriate providers, facilitate care coordination, process insurance claims, send appointment reminders, and improve our services. We do not sell your personal information to third parties.",
  },
  {
    title: "HIPAA Compliance",
    content: "Mindova Holdings is fully HIPAA-compliant. All protected health information (PHI) is handled in accordance with the Health Insurance Portability and Accountability Act. Your health information is encrypted at rest and in transit.",
  },
  {
    title: "Data Security",
    content: "We use end-to-end encryption, secure servers, and industry-standard security protocols to protect your data. Access to your information is restricted to authorized personnel involved in your care.",
  },
  {
    title: "Sharing Your Information",
    content: "We share your information only with your treating providers, authorized care coordinators, and insurance companies as required for billing and care coordination. We do not share your data for marketing purposes without your explicit consent.",
  },
  {
    title: "Your Rights",
    content: "You have the right to access, correct, or request deletion of your personal information. You may also request a copy of your records or restrict certain uses of your information. Contact us at care@mindovaholdings.com to exercise these rights.",
  },
  {
    title: "Cookies & Tracking",
    content: "Our website uses cookies to improve your experience and analyze site traffic. You may disable cookies in your browser settings, though some features may not function properly as a result.",
  },
  {
    title: "Contact Us",
    content: "If you have questions about this Privacy Policy or our data practices, please contact our Privacy Officer at care@mindovaholdings.com or call 336-291-6603.",
  },
] as const;

function PrivacyPolicyPage() {
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
            Privacy{" "}
            <em className="text-gold3 italic">Policy</em>
          </h1>
          <p className="mt-5 text-cream/60 max-w-xl mx-auto text-sm leading-relaxed">
            Mindova Holdings is committed to protecting your privacy and the security of your personal health information.
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
          <div className="space-y-8">
            {sections.map(({ title, content }, i) => (
              <div
                key={title}
                className="reveal bg-white rounded-2xl p-7 border border-dark/[0.07] shadow-[0_2px_16px_-8px_rgba(12,11,9,0.06)]"
                data-reveal-delay={String(i * 60)}
              >
                <h2 className="font-serif text-xl text-dark mb-3">{title}</h2>
                <p className="text-sm text-dark/70 leading-relaxed">{content}</p>
              </div>
            ))}

            {/* HIPAA Notice */}
            <div className="reveal bg-dark rounded-2xl p-7 text-cream relative overflow-hidden">
              <div className="absolute inset-0 gold-glow opacity-40 pointer-events-none" />
              <div className="relative flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-lg text-cream mb-2">HIPAA Notice of Privacy Practices</h3>
                  <p className="text-sm text-cream/65 leading-relaxed">
                    As a covered entity under HIPAA, Mindova Holdings maintains a Notice of Privacy Practices describing how we may use and disclose your protected health information. A copy is available upon request by contacting care@mindovaholdings.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
