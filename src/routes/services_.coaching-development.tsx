import { createFileRoute } from "@tanstack/react-router";
import { ServiceCategoryPage } from "@/components/sections/ServiceCategoryTemplate";
import { serviceCategories } from "@/data/services";

export const Route = createFileRoute("/services_/coaching-development")({
  component: CoachingDevelopmentPage,
  head: () => ({
    meta: [
      { title: "Coaching & Personal Development     Mindova Holdings" },
      { name: "description", content: "Life coaching, executive coaching, mindfulness, and career transition support for high-achieving individuals." },
    ],
  }),
});

const category = serviceCategories.find((c) => c.id === "coaching-development")!;

function CoachingDevelopmentPage() {
  return (
    <ServiceCategoryPage
      category={category}
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
      whoIsItFor={[
        "Executives, entrepreneurs, and high-achievers seeking peak performance",
        "Individuals navigating major career pivots, life transitions, or identity shifts",
        "Anyone feeling stuck, unfulfilled, or wanting more clarity and direction",
        "Those who want structured growth support without a clinical diagnosis",
        "Leaders looking to improve communication, resilience, and team effectiveness",
      ]}
      process={[
        {
          step: "01",
          title: "Discovery Call",
          description: "A complimentary 20-minute call to explore your goals, challenges, and whether our coaching approach is the right fit for you.",
        },
        {
          step: "02",
          title: "Goal Mapping Session",
          description: "Define your core values, vision, and key focus areas in a structured 60-minute onboarding session with your coach.",
        },
        {
          step: "03",
          title: "Build Your Action Plan",
          description: "Develop a 90-day roadmap with clear milestones, behavioral targets, and accountability structures.",
        },
        {
          step: "04",
          title: "Ongoing Coaching Sessions",
          description: "Bi-weekly sessions to review progress, navigate obstacles, adapt your plan, and accelerate toward your goals.",
        },
      ]}
      faqs={[
        {
          question: "What's the difference between coaching and therapy?",
          answer: "Therapy focuses on healing and treating mental health conditions. Coaching is goal-oriented and forward-focused     it helps high-functioning individuals optimize performance, navigate transitions, and build momentum. Both are valuable, and they can complement each other.",
        },
        {
          question: "How often will we meet?",
          answer: "Most coaching engagements include bi-weekly sessions, with the option to meet weekly during intensive phases like a major transition or launch.",
        },
        {
          question: "Do I need a specific problem to benefit from coaching?",
          answer: "No. Many clients come to coaching simply wanting to accelerate growth, gain clarity, or make a meaningful change. You don't need to be struggling     you just need to want more.",
        },
        {
          question: "Is coaching covered by insurance?",
          answer: "Coaching is generally not covered by insurance. However, some employer wellness programs may reimburse coaching fees. We provide documentation to support any reimbursement requests.",
        },
        {
          question: "How long does a typical coaching engagement last?",
          answer: "Most clients start with a 3-month engagement, which provides enough time to make meaningful progress. Many continue with ongoing monthly sessions after the initial period.",
        },
      ]}
    />
  );
}
