import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageProps } from "@/components/sections/ServicePageTemplate";

export const Route = createFileRoute("/services_/iop")({
  component: IOPPage,
  head: () => ({
    meta: [
      { title: "Intensive Outpatient Program (IOP) — Mindova Holdings" },
      { name: "description", content: "Structured, high-support behavioral health care for those who need more than weekly therapy." },
    ],
  }),
});

const iopData: ServicePageProps = {
  eyebrow: "INTENSIVE OUTPATIENT PROGRAM",
  title: "Intensive",
  titleEmphasis: "Outpatient Program",
  subtitle:
    "Structured, high-support behavioral health care for those who need more than weekly therapy — without inpatient admission.",
  heroIcon: "🏥",
  whatIsIt:
    "Our Intensive Outpatient Program (IOP) is a structured treatment program designed for individuals who need a higher level of care than standard weekly therapy but do not require 24-hour inpatient treatment. IOP typically involves multiple sessions per week, combining group therapy, individual therapy, and psychiatric support — all delivered via telehealth.",
  whoIsItFor: [
    "Individuals stepping down from inpatient or residential care",
    "Those in crisis who need structured daily support",
    "People with severe depression, anxiety, or trauma",
    "Those whose weekly therapy is no longer sufficient",
    "Individuals with substance use and co-occurring mental health conditions",
  ],
  whatToExpect: [
    {
      step: "01",
      title: "Clinical Assessment",
      description: "A thorough evaluation to confirm IOP is the right level of care for you.",
    },
    {
      step: "02",
      title: "Personalized Treatment Plan",
      description: "Your care team creates an individualized plan with clear goals and milestones.",
    },
    {
      step: "03",
      title: "Structured Sessions",
      description: "Attend 3–5 sessions per week including group and individual therapy via telehealth.",
    },
    {
      step: "04",
      title: "Step-Down & Aftercare",
      description: "As you progress, care is stepped down to standard therapy with a clear aftercare plan.",
    },
  ],
  includes: [
    "Clinical assessment and intake evaluation",
    "3–5 sessions per week (group + individual)",
    "Psychiatric medication management if needed",
    "Personalized treatment plan with measurable goals",
    "Family involvement sessions where appropriate",
    "Crisis support between sessions",
    "Coordination with outside providers",
    "Insurance pre-authorization support",
  ],
  pricing: {
    label: "Insurance Covered",
    amount: "Most Plans",
    note: "IOP is typically covered by insurance. We handle pre-authorization. Cash-pay options available.",
  },
  faqs: [
    {
      question: "How many days per week is IOP?",
      answer:
        "Standard IOP is 3 days per week, 3 hours per day. Intensive tracks may be 5 days per week. Your clinical team determines the right schedule.",
    },
    {
      question: "Is telehealth IOP as effective as in-person?",
      answer:
        "Research shows telehealth IOP has comparable outcomes to in-person. It also removes barriers like transportation and time off work.",
    },
    {
      question: "How long does IOP last?",
      answer:
        "Typically 6–8 weeks, though this varies based on clinical progress. Your care team reassesses regularly.",
    },
    {
      question: "Does insurance cover IOP?",
      answer:
        "Most major insurance plans cover IOP. We handle pre-authorization and benefits verification before you begin. Cash-pay rates are also available.",
    },
  ],
};

function IOPPage() {
  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>
        <ServicePageTemplate {...iopData} />
      </main>
      <Footer />
    </div>
  );
}
