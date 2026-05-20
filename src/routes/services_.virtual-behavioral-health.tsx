import { createFileRoute } from "@tanstack/react-router";
import { ServiceCategoryPage } from "@/components/sections/ServiceCategoryTemplate";
import { serviceCategories } from "@/data/services";

export const Route = createFileRoute("/services_/virtual-behavioral-health")({
  component: VirtualBehavioralHealthPage,
  head: () => ({
    meta: [
      { title: "Virtual Behavioral Health     Mindova Holdings" },
      { name: "description", content: "Same-day telehealth, HIPAA-secure video, async messaging, and 24/7 crisis support     delivered from wherever you are." },
    ],
  }),
});

const category = serviceCategories.find((c) => c.id === "virtual-behavioral-health")!;

function VirtualBehavioralHealthPage() {
  return (
    <ServiceCategoryPage
      category={category}
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
      whoIsItFor={[
        "Individuals in rural or underserved areas without local behavioral health providers",
        "Busy professionals who need flexible scheduling that fits around work and family",
        "Those with mobility, transportation, or accessibility challenges",
        "Anyone who prefers the comfort and privacy of receiving care from home",
        "People needing urgent support who can't wait weeks for an in-person appointment",
      ]}
      process={[
        {
          step: "01",
          title: "Choose Your Service",
          description: "Select from same-day therapy, psychiatry, crisis support, or asynchronous messaging based on your immediate needs.",
        },
        {
          step: "02",
          title: "Get Matched",
          description: "We match you with a licensed provider based on your location, insurance, specialty needs, and availability.",
        },
        {
          step: "03",
          title: "Book Same-Day",
          description: "Most clients connect with a provider within 24 hours. Evening and weekend slots are available for urgent needs.",
        },
        {
          step: "04",
          title: "Join Your Session",
          description: "Connect via our HIPAA-encrypted video platform on any device     no downloads required for most sessions.",
        },
      ]}
      faqs={[
        {
          question: "What technology do I need for telehealth sessions?",
          answer: "Any smartphone, tablet, or computer with a camera and stable internet connection will work. No special software downloads required for most session types.",
        },
        {
          question: "Is telehealth as effective as in-person care?",
          answer: "Research consistently shows that telehealth therapy and psychiatry achieve outcomes equivalent to in-person care for most mental health conditions, including anxiety, depression, and ADHD.",
        },
        {
          question: "Which states do you serve?",
          answer: "We currently serve clients in all 50 states for therapy, and 40+ states for psychiatric services. Your provider will confirm availability for your specific state during intake.",
        },
        {
          question: "Can I get a prescription through telehealth?",
          answer: "Yes. Our psychiatric providers can prescribe most non-controlled medications through telehealth. Controlled substances are handled in accordance with state regulations.",
        },
        {
          question: "What happens if I'm in crisis?",
          answer: "We have dedicated crisis support available 24/7. If you are in immediate danger, always call 911 or 988 (Suicide & Crisis Lifeline). Our team can also facilitate warm handoffs to higher levels of care.",
        },
      ]}
    />
  );
}
