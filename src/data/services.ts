import {
  Video, Activity, Brain, Leaf, Users, ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  bullets: string[];
}

export const services: Service[] = [
  {
    id: "same-day-therapy",
    icon: Video,
    number: "01",
    title: "Same-Day Therapy",
    shortDesc: "Secure HIPAA video sessions with licensed therapists, often the same day you book.",
    fullDesc: "Connect with a licensed therapist via secure, HIPAA-compliant video. Available evenings and weekends, with same-day openings for urgent needs.",
    bullets: ["Licensed LPC, LCSW, LMFT clinicians", "Same-day & evening availability", "Encrypted video & messaging", "Integrated care notes"],
  },
  {
    id: "quick-diagnostics",
    icon: Activity,
    number: "02",
    title: "Quick Diagnostics",
    shortDesc: "Behavioral health assessments, screenings, and lifestyle baselines — quickly.",
    fullDesc: "Comprehensive diagnostic intake covering mood, anxiety, ADHD, sleep, and lifestyle baselines — delivered with clinical precision.",
    bullets: ["Validated screening tools", "Same-week turnaround", "Plain-language reports", "Care plan handoff"],
  },
  {
    id: "psychiatry",
    icon: Brain,
    number: "03",
    title: "Psychiatry",
    shortDesc: "Assessment, diagnosis, and medication management with board-certified psychiatrists.",
    fullDesc: "Board-certified psychiatrists for evaluation, medication management, and long-term care coordination.",
    bullets: ["Board-certified psychiatrists", "Medication management", "Refills via telehealth", "Coordinated with therapy"],
  },
  {
    id: "wellness",
    icon: Leaf,
    number: "04",
    title: "Wellness & Longevity",
    shortDesc: "Nutrition, breathwork, and lifestyle plans crafted for everyday wellbeing.",
    fullDesc: "Integrative wellness plans covering nutrition, sleep, breathwork, and somatic practices — built alongside your clinical care.",
    bullets: ["Personalized nutrition plans", "Breathwork & somatic tools", "Sleep optimization", "Monthly check-ins"],
  },
  {
    id: "community",
    icon: Users,
    number: "05",
    title: "Community Outreach",
    shortDesc: "Subsidized programs and nonprofit collaborations bringing care to underserved communities.",
    fullDesc: "Free and reduced-cost programs delivered through nonprofit partners, schools, and community organizations.",
    bullets: ["Subsidized session vouchers", "Nonprofit partner network", "Community workshops", "Multilingual providers"],
  },
  {
    id: "insurance",
    icon: ShieldCheck,
    number: "06",
    title: "Insurance Navigation",
    shortDesc: "We handle insurance verification so finances never stand between you and support.",
    fullDesc: "Our team verifies benefits, files claims, and confirms costs up front — so you can focus on care, not paperwork.",
    bullets: ["Benefits verification", "Direct claim filing", "Cash-pay transparency", "Sliding scale options"],
  },
];
