import { createFileRoute } from "@tanstack/react-router";
import { ServiceCategoryPage } from "@/components/sections/ServiceCategoryTemplate";
import { serviceCategories } from "@/data/services";

export const Route = createFileRoute("/services_/provider-partnerships")({
  component: ProviderPartnershipsPage,
  head: () => ({
    meta: [
      { title: "Provider Partnerships     Mindova Holdings" },
      { name: "description", content: "Referral networks, co-care coordination, group practice support, and clinical supervision for behavioral health providers." },
    ],
  }),
});

const category = serviceCategories.find((c) => c.id === "provider-partnerships")!;

function ProviderPartnershipsPage() {
  return (
    <ServiceCategoryPage
      category={category}
      heroImage="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80"
      whoIsItFor={[
        "Independent therapists and psychiatrists seeking a reliable referral pipeline",
        "Group practices wanting co-care coordination infrastructure and shared tools",
        "Primary care physicians needing behavioral health referral partners they can trust",
        "Provisionally licensed clinicians actively pursuing supervision hours toward licensure",
        "Healthcare organizations building out behavioral health service lines",
      ]}
      process={[
        {
          step: "01",
          title: "Initial Inquiry",
          description: "Reach out to our partnership team to discuss your practice profile, referral needs, or supervision requirements.",
        },
        {
          step: "02",
          title: "Partnership Assessment",
          description: "We evaluate fit, credentialing alignment, referral volume, and mutual care coordination capabilities.",
        },
        {
          step: "03",
          title: "Network Onboarding",
          description: "Complete our streamlined onboarding process and gain access to our care coordination tools, shared messaging, and referral portal.",
        },
        {
          step: "04",
          title: "Begin Collaborating",
          description: "Start sending and receiving referrals, participating in shared care plans, and connecting through our provider network.",
        },
      ]}
      faqs={[
        {
          question: "How do I refer a patient into your network?",
          answer: "Contact our referral coordinator or use our online intake portal. We'll match the patient to the appropriate provider and follow up within 24 business hours.",
        },
        {
          question: "What types of providers do you partner with?",
          answer: "We partner with therapists, psychiatrists, PCPs, neurologists, integrative medicine physicians, and specialty behavioral health practices across all care settings.",
        },
        {
          question: "How does co-care coordination work in practice?",
          answer: "We establish a shared care plan, use HIPAA-secure messaging for cross-provider communication, and hold regular case review touchpoints for complex clients.",
        },
        {
          question: "Do you offer clinical supervision for provisionally licensed clinicians?",
          answer: "Yes. We have LPC-S and LCSW-S licensed supervisors available for individual and group supervision formats, with HIPAA-compliant note review included.",
        },
        {
          question: "Is there a cost to join the provider network?",
          answer: "Network participation is free for referring providers. Group practice support and clinical supervision services have separate fee structures that we'll discuss during onboarding.",
        },
      ]}
    />
  );
}
