import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageProps } from "@/components/sections/ServicePageTemplate";

export const Route = createFileRoute("/services_/medication-management")({
  component: MedicationPage,
  head: () => ({
    meta: [
      { title: "Medication Management    Mindova Holdings" },
      { name: "description", content: "Board-certified psychiatrists and PMHNPs providing evaluation, diagnosis, and ongoing medication support." },
    ],
  }),
});

const medicationData: ServicePageProps = {
  eyebrow: "PSYCHIATRIC CARE",
  title: "Medication",
  titleEmphasis: "Management",
  subtitle:
    "Board-certified psychiatrists and PMHNPs providing evaluation, diagnosis, and ongoing medication support.",
  heroIcon: "💊",
  whatIsIt:
    "Our medication management service connects you with board-certified psychiatrists and Psychiatric-Mental Health Nurse Practitioners (PMHNPs) who specialize in evaluating, diagnosing, and managing psychiatric conditions. From initial evaluation to ongoing medication adjustments    we provide consistent, evidence-based psychiatric care via telehealth.",
  whoIsItFor: [
    "Individuals seeking psychiatric evaluation for the first time",
    "Those already on medication who need ongoing management",
    "People with ADHD, depression, anxiety, bipolar, or PTSD",
    "Patients transitioning from in-person to telehealth psychiatry",
    "Those whose therapist has recommended a medication evaluation",
  ],
  whatToExpect: [
    {
      step: "01",
      title: "Initial Evaluation",
      description: "60-minute comprehensive psychiatric evaluation with your provider.",
    },
    {
      step: "02",
      title: "Diagnosis & Plan",
      description: "Your provider reviews history, symptoms, and creates a treatment plan.",
    },
    {
      step: "03",
      title: "Prescription",
      description: "If appropriate, prescriptions are sent electronically to your pharmacy.",
    },
    {
      step: "04",
      title: "Follow-Up Care",
      description: "Regular 30-minute follow-up sessions to monitor and adjust as needed.",
    },
  ],
  includes: [
    "Initial 60-minute psychiatric evaluation",
    "Diagnosis and personalized treatment plan",
    "Electronic prescription management",
    "30-minute follow-up sessions",
    "Medication monitoring and adjustments",
    "Coordination with your therapist if applicable",
    "Patient portal access to all records",
    "Insurance billing support",
  ],
  pricing: {
    label: "Initial Evaluation",
    amount: "$250",
    note: "Follow-up sessions from $150. Most insurance plans accepted.",
  },
  faqs: [
    {
      question: "Can a telehealth provider prescribe medication?",
      answer:
        "Yes. Our licensed PMHNPs and psychiatrists are authorized to prescribe psychiatric medications via telehealth in most states.",
    },
    {
      question: "What conditions do you treat?",
      answer:
        "We treat depression, anxiety, ADHD, bipolar disorder, PTSD, OCD, and other behavioral health conditions requiring medication management.",
    },
    {
      question: "How often are follow-up appointments?",
      answer:
        "Typically monthly for the first few months, then every 2–3 months once stable. Your provider determines the right frequency for your needs.",
    },
    {
      question: "Do I need a therapist referral?",
      answer:
        "No referral is needed. You can book a psychiatric evaluation directly. However, we often recommend combining medication with therapy for best outcomes.",
    },
  ],
};

function MedicationPage() {
  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>
        <ServicePageTemplate {...medicationData} />
      </main>
      <Footer />
    </div>
  );
}
