import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageProps } from "@/components/sections/ServicePageTemplate";

export const Route = createFileRoute("/services_/therapy")({
  component: TherapyPage,
  head: () => ({
    meta: [
      { title: "Same-Day Therapy    Mindova Holdings" },
      { name: "description", content: "Connect with a licensed therapist today    secure, private, and from wherever you are." },
    ],
  }),
});

const therapyData: ServicePageProps = {
  eyebrow: "TELEHEALTH THERAPY",
  title: "Same-Day",
  titleEmphasis: "Therapy",
  subtitle: "Connect with a licensed therapist today    secure, private, and from wherever you are.",
  heroIcon: "🧠",
  whatIsIt:
    "Our telehealth therapy service connects you with licensed therapists (LPCs, LCSWs, LMFTs) via secure HIPAA-compliant video sessions. Whether you're dealing with anxiety, depression, trauma, relationship challenges, or simply need someone to talk to    we match you with the right provider, often the same day you reach out.",
  whoIsItFor: [
    "Adults dealing with anxiety or depression",
    "Individuals processing trauma or grief",
    "Those navigating relationship or family challenges",
    "People seeking personal growth and self-awareness",
    "Anyone who has tried therapy before and wants to try again",
  ],
  whatToExpect: [
    {
      step: "01",
      title: "Book Online",
      description: "Fill a short form and choose your preferred therapist from our vetted network.",
    },
    {
      step: "02",
      title: "Complete Intake",
      description: "Fill out your secure digital intake form    takes about 10 minutes.",
    },
    {
      step: "03",
      title: "Join Your Session",
      description: "Connect via secure video link at your scheduled time    no downloads needed.",
    },
    {
      step: "04",
      title: "Follow Your Plan",
      description: "Your therapist creates a personalized care plan and you meet regularly.",
    },
  ],
  includes: [
    "50-minute individual therapy sessions",
    "Secure HIPAA-compliant video platform",
    "Personalized care plan",
    "Between-session messaging with your therapist",
    "Session notes accessible via patient portal",
    "Insurance billing support",
    "Easy rescheduling with 24hr notice",
    "Same-week availability",
  ],
  pricing: {
    label: "Per Session",
    amount: "$150",
    note: "Cash-pay rate. Most insurance plans accepted    verify before booking.",
  },
  faqs: [
    {
      question: "How quickly can I see a therapist?",
      answer:
        "Most patients are matched and booked within 24–72 hours. Same-week appointments are frequently available.",
    },
    {
      question: "Do you accept insurance for therapy?",
      answer:
        "Yes. We accept most major insurance providers. We verify your coverage before your first session at no cost to you.",
    },
    {
      question: "What platform do you use for video sessions?",
      answer:
        "We use a HIPAA-compliant secure video platform integrated into SimplePractice. No downloads required    just click your link.",
    },
    {
      question: "Can I switch therapists if it's not a good fit?",
      answer:
        "Absolutely. We want you to feel comfortable. You can request a different provider at any time.",
    },
  ],
};

function TherapyPage() {
  return (
    <div className="min-h-screen">
      <Navbar onDark />
      <main>
        <ServicePageTemplate {...therapyData} />
      </main>
      <Footer />
    </div>
  );
}
