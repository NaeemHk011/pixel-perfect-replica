import { createFileRoute } from "@tanstack/react-router";
import { ServiceCategoryPage } from "@/components/sections/ServiceCategoryTemplate";
import { serviceCategories } from "@/data/services";

export const Route = createFileRoute("/services_/mental-health")({
  component: MentalHealthPage,
  head: () => ({
    meta: [
      { title: "Mental Health Services     Mindova Holdings" },
      { name: "description", content: "Evidence-based therapy, psychiatry, group therapy, and IOP     delivered with clinical excellence." },
    ],
  }),
});

const category = serviceCategories.find((c) => c.id === "mental-health")!;

function MentalHealthPage() {
  return (
    <ServiceCategoryPage
      category={category}
      heroImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
      whoIsItFor={[
        "Individuals experiencing anxiety, depression, trauma, or mood disorders",
        "Those seeking medication management or a psychiatric evaluation",
        "People who need structured intensive support through IOP",
        "Anyone wanting high-quality mental health care without long waitlists",
        "Families navigating a loved one's mental health challenges",
      ]}
      process={[
        {
          step: "01",
          title: "Book Online",
          description: "Choose your service and preferred provider via our secure booking portal. Same-day slots are often available.",
        },
        {
          step: "02",
          title: "Complete Clinical Intake",
          description: "Fill out your HIPAA-secure intake form covering your history, current symptoms, and goals     takes about 10 minutes.",
        },
        {
          step: "03",
          title: "Meet Your Provider",
          description: "Connect via encrypted video with your therapist or psychiatrist for your first session.",
        },
        {
          step: "04",
          title: "Begin Your Care Plan",
          description: "Collaborate with your provider on a personalized treatment plan with clear goals and regular check-ins.",
        },
      ]}
      faqs={[
        {
          question: "How do I know which type of therapy is right for me?",
          answer: "During your first session, your therapist will conduct a thorough assessment and recommend the most appropriate modality     CBT, DBT, EMDR, or others     based on your symptoms, goals, and history.",
        },
        {
          question: "Do you accept insurance for therapy and psychiatry?",
          answer: "Yes, we accept most major insurance plans. Our team verifies your benefits before your first appointment so there are no surprises.",
        },
        {
          question: "What's the difference between therapy and psychiatry?",
          answer: "Therapy focuses on talk-based treatment and behavioral techniques. Psychiatry involves medical evaluation and, when appropriate, medication management. Many clients benefit from both working together.",
        },
        {
          question: "How long does treatment typically take?",
          answer: "Treatment length depends on your goals and needs. Some clients see significant improvement in 8–12 sessions; others benefit from ongoing care. Your provider will set expectations at the start.",
        },
        {
          question: "What is Intensive Outpatient (IOP) and do I need it?",
          answer: "IOP provides 3–5 structured sessions per week and is designed for people who need more support than weekly therapy but don't require inpatient care. Your clinical team will help determine if IOP is the right level.",
        },
      ]}
    />
  );
}
