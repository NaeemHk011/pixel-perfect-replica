import { createFileRoute } from "@tanstack/react-router";
import { ServiceCategoryPage } from "@/components/sections/ServiceCategoryTemplate";
import { serviceCategories } from "@/data/services";

export const Route = createFileRoute("/services_/healthcare-consulting")({
  component: HealthcareConsultingPage,
  head: () => ({
    meta: [
      { title: "Healthcare Consulting     Mindova Holdings" },
      { name: "description", content: "Practice growth strategy, billing optimization, HIPAA compliance advisory, and workflow design for healthcare organizations." },
    ],
  }),
});

const category = serviceCategories.find((c) => c.id === "healthcare-consulting")!;

function HealthcareConsultingPage() {
  return (
    <ServiceCategoryPage
      category={category}
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
      whoIsItFor={[
        "Behavioral health practice owners looking to grow, optimize, or scale",
        "Startups building digital health or telehealth platforms",
        "Community health organizations needing compliance and billing guidance",
        "Practices struggling with claim denials, billing inefficiencies, or revenue cycle gaps",
        "Healthcare leaders redesigning workflows to reduce burnout and improve capacity",
      ]}
      process={[
        {
          step: "01",
          title: "Discovery Workshop",
          description: "A structured working session to map your current state, goals, pain points, and organizational priorities.",
        },
        {
          step: "02",
          title: "Diagnostic Report",
          description: "Receive a detailed findings report with prioritized, actionable recommendations tailored to your organization.",
        },
        {
          step: "03",
          title: "Strategy Development",
          description: "Collaborate with our consulting team on a phased action plan with clear deliverables, owners, and timelines.",
        },
        {
          step: "04",
          title: "Implementation Support",
          description: "Work alongside our consultants through execution with regular check-ins, progress reviews, and course corrections.",
        },
      ]}
      faqs={[
        {
          question: "How long does a typical consulting engagement last?",
          answer: "Engagements range from a one-time strategy session (half-day or full-day) to ongoing retainer relationships spanning 6–12 months. We'll scope based on your specific needs and urgency.",
        },
        {
          question: "What types of organizations do you work with?",
          answer: "We work with solo practices, group practices, community health centers, telehealth startups, and mid-size behavioral health systems at various stages of growth.",
        },
        {
          question: "Can you help us start a new practice from scratch?",
          answer: "Yes. We offer end-to-end launch support including credentialing, compliance setup, EHR selection, billing system configuration, and marketing strategy.",
        },
        {
          question: "What does a compliance audit cover?",
          answer: "Our compliance audit covers HIPAA risk assessment, EHR and data security review, staff training gap analysis, policy documentation review, and a prioritized remediation roadmap.",
        },
        {
          question: "How do you approach billing optimization?",
          answer: "We start with a coding and denial audit to identify revenue leakage, then address payor contract terms, claims workflows, and     where needed     recommend or support RCM system transitions.",
        },
      ]}
    />
  );
}
