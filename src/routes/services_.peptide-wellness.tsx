import { createFileRoute } from "@tanstack/react-router";
import { ServiceCategoryPage } from "@/components/sections/ServiceCategoryTemplate";
import { serviceCategories } from "@/data/services";

export const Route = createFileRoute("/services_/peptide-wellness")({
  component: PeptideWellnessPage,
  head: () => ({
    meta: [
      { title: "Peptide & Wellness Optimization     Mindova Holdings" },
      { name: "description", content: "Clinically supervised peptide protocols, hormone optimization, and longevity strategies to optimize performance and vitality." },
    ],
  }),
});

const category = serviceCategories.find((c) => c.id === "peptide-wellness")!;

function PeptideWellnessPage() {
  return (
    <ServiceCategoryPage
      category={category}
      heroImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80"
      whoIsItFor={[
        "Health-conscious individuals looking to optimize performance and recovery",
        "Those experiencing hormonal imbalances, fatigue, or metabolic challenges",
        "High-performers seeking cognitive and physical edge through evidence-based protocols",
        "Anyone interested in longevity, anti-aging, and healthspan extension",
        "Individuals who've tried conventional approaches and want a more precision-based strategy",
      ]}
      process={[
        {
          step: "01",
          title: "Initial Consultation",
          description: "Meet with a physician to discuss your health history, goals, and current symptoms in a detailed intake session.",
        },
        {
          step: "02",
          title: "Baseline Labs & Assessment",
          description: "Complete a comprehensive bloodwork and biomarker panel to establish your baseline and identify optimization targets.",
        },
        {
          step: "03",
          title: "Custom Protocol Design",
          description: "Receive a physician-designed protocol tailored to your results, goals, and lifestyle     including dosing, timing, and monitoring schedule.",
        },
        {
          step: "04",
          title: "Ongoing Optimization",
          description: "Regular follow-up appointments and lab reviews to monitor progress, adjust protocols, and track improvements over time.",
        },
      ]}
      faqs={[
        {
          question: "Are peptide therapies safe and clinically supported?",
          answer: "Yes. We only offer peptide protocols with established safety profiles and clear clinical rationale, administered under physician supervision with ongoing lab monitoring.",
        },
        {
          question: "How quickly can I expect results?",
          answer: "Results vary by protocol and individual. Many clients notice initial improvements within 4–8 weeks, with more significant changes at 3–6 months of consistent use.",
        },
        {
          question: "Do I need labs before starting a protocol?",
          answer: "Yes. Baseline bloodwork is required to ensure appropriate protocol design, establish reference points, and monitor your response over time.",
        },
        {
          question: "Is hormone optimization the same as anabolic steroids?",
          answer: "No. Hormone optimization restores levels to an optimal physiological range using bioidentical hormones under close clinical supervision. It's fundamentally different from performance-enhancing drug use.",
        },
        {
          question: "Does insurance cover peptide or wellness protocols?",
          answer: "Most peptide and longevity services are not covered by insurance. We offer transparent cash-pay pricing and will provide itemized receipts for HSA/FSA reimbursement where applicable.",
        },
      ]}
    />
  );
}
