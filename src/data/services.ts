import {
  Video, Brain, Leaf, Users, Building2,
  Zap, Target, Activity, ShieldCheck,
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
  link?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  bullets: string[];
}

export interface CategoryTheme {
  iconBg: string;
  iconColor: string;
  labelColor: string;
  accentVia: string;
  cardBorder: string;
  checkColor: string;
  sectionBg: string;
}

export interface ServiceCategory {
  id: string;
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  link: string;
  theme: CategoryTheme;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "mental-health",
    icon: Brain,
    number: "01",
    title: "Mental Health Services",
    link: "/services/mental-health",
    description:
      "Evidence-based clinical care for a full spectrum of mental health needs     from individual talk therapy to structured psychiatric treatment.",
    theme: {
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      labelColor: "text-blue-500",
      accentVia: "via-blue-400/60",
      cardBorder: "border-blue-100 hover:border-blue-200",
      checkColor: "text-blue-500",
      sectionBg: "bg-cream",
    },
    services: [
      {
        title: "Individual Therapy",
        description:
          "One-on-one sessions with licensed therapists using evidence-based modalities tailored to your unique needs.",
        bullets: [
          "CBT, DBT & EMDR modalities",
          "Same-day availability",
          "Evening & weekend slots",
          "HIPAA-encrypted sessions",
        ],
      },
      {
        title: "Psychiatry & Medication Management",
        description:
          "Board-certified psychiatrists for evaluation, diagnosis, and ongoing medication oversight.",
        bullets: [
          "Initial psychiatric evaluation",
          "Medication prescribing & refills",
          "Coordinated with therapy team",
          "Telehealth follow-ups",
        ],
      },
      {
        title: "Group Therapy",
        description:
          "Structured group sessions for shared healing, accountability, and community connection.",
        bullets: [
          "Condition-specific groups",
          "Clinician-facilitated peer support",
          "Weekly recurring sessions",
          "Sliding scale pricing",
        ],
      },
      {
        title: "Intensive Outpatient (IOP)",
        description:
          "Structured multi-session weekly care for those needing more support than standard weekly therapy.",
        bullets: [
          "3–5 sessions per week",
          "Group + individual therapy",
          "Psychiatric support included",
          "Insurance typically covered",
        ],
      },
    ],
  },
  {
    id: "peptide-wellness",
    icon: Zap,
    number: "02",
    title: "Peptide & Wellness Optimization",
    link: "/services/peptide-wellness",
    description:
      "Cutting-edge peptide protocols and longevity strategies to optimize performance, recovery, and overall vitality.",
    theme: {
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      labelColor: "text-emerald-600",
      accentVia: "via-emerald-400/60",
      cardBorder: "border-emerald-100 hover:border-emerald-200",
      checkColor: "text-emerald-500",
      sectionBg: "bg-cream2",
    },
    services: [
      {
        title: "Peptide Therapy Protocols",
        description:
          "Clinically supervised peptide programs for cognitive function, muscle recovery, and immune modulation.",
        bullets: [
          "BPC-157, TB-500, CJC-1295",
          "Physician-supervised dosing",
          "Ongoing lab monitoring",
          "Personalized stack design",
        ],
      },
      {
        title: "Longevity & Anti-Aging",
        description:
          "Comprehensive longevity assessments and interventions targeting healthspan extension.",
        bullets: [
          "Biomarker & bloodwork panels",
          "NAD+ & mitochondrial support",
          "Epigenetic lifestyle mapping",
          "Annual optimization reviews",
        ],
      },
      {
        title: "Hormone Optimization",
        description:
          "Balancing key hormones to restore energy, libido, mood, and metabolic function.",
        bullets: [
          "Comprehensive hormone panels",
          "TRT & HRT protocols",
          "Thyroid & adrenal support",
          "Ongoing titration support",
        ],
      },
      {
        title: "Metabolic Health",
        description:
          "Targeted nutrition, glucose management, and metabolic strategies for lasting vitality.",
        bullets: [
          "Continuous glucose monitoring",
          "Personalized nutrition plans",
          "Metabolic rate optimization",
          "GLP-1 & weight management",
        ],
      },
    ],
  },
  {
    id: "virtual-behavioral-health",
    icon: Video,
    number: "03",
    title: "Virtual Behavioral Health",
    link: "/services/virtual-behavioral-health",
    description:
      "Accessible, high-quality behavioral health care delivered entirely via secure telehealth     wherever you are.",
    theme: {
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      labelColor: "text-violet-600",
      accentVia: "via-violet-400/60",
      cardBorder: "border-violet-100 hover:border-violet-200",
      checkColor: "text-violet-500",
      sectionBg: "bg-cream",
    },
    services: [
      {
        title: "Same-Day Telehealth",
        description:
          "Connect with a licensed provider the same day     no long wait times or commutes required.",
        bullets: [
          "Same-day & next-day scheduling",
          "All 50 states covered",
          "Mobile & desktop compatible",
          "No waitlists",
        ],
      },
      {
        title: "HIPAA-Secure Video Sessions",
        description:
          "End-to-end encrypted video with clinical documentation and prescription integration built in.",
        bullets: [
          "256-bit encryption",
          "Integrated care notes",
          "Prescription integration",
          "Session recording on request",
        ],
      },
      {
        title: "Asynchronous Messaging",
        description:
          "Ongoing clinical support between sessions via secure, direct provider messaging.",
        bullets: [
          "Direct provider messaging",
          "48-hour guaranteed response",
          "Medication questions handled",
          "Crisis escalation protocols",
        ],
      },
      {
        title: "Crisis Support",
        description:
          "24/7 behavioral health crisis resources and warm handoffs to higher levels of care.",
        bullets: [
          "24/7 crisis line access",
          "Warm handoffs to ER/IOP",
          "Safety planning support",
          "Family notification options",
        ],
      },
    ],
  },
  {
    id: "coaching-development",
    icon: Target,
    number: "04",
    title: "Coaching & Personal Development",
    link: "/services/coaching-development",
    description:
      "Goal-driven coaching programs to help individuals thrive personally, professionally, and emotionally.",
    theme: {
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      labelColor: "text-orange-600",
      accentVia: "via-orange-400/60",
      cardBorder: "border-orange-100 hover:border-orange-200",
      checkColor: "text-orange-500",
      sectionBg: "bg-cream2",
    },
    services: [
      {
        title: "Life Coaching",
        description:
          "Structured coaching to clarify goals, break patterns, and build momentum across every life domain.",
        bullets: [
          "Values & vision alignment",
          "Accountability frameworks",
          "Habit architecture",
          "Bi-weekly progress reviews",
        ],
      },
      {
        title: "Executive Coaching",
        description:
          "Leadership and performance coaching for high-achievers navigating complex professional challenges.",
        bullets: [
          "Leadership style assessment",
          "Conflict & communication skills",
          "Burnout prevention strategies",
          "360-degree feedback integration",
        ],
      },
      {
        title: "Mindfulness & Resilience",
        description:
          "Science-backed mindfulness programs to build stress tolerance and emotional regulation.",
        bullets: [
          "MBSR-based curriculum",
          "Daily practice tools",
          "Breathwork protocols",
          "Resilience tracking",
        ],
      },
      {
        title: "Career & Life Transitions",
        description:
          "Support for major life changes     career pivots, relationship shifts, and identity transitions.",
        bullets: [
          "Transition mapping workshops",
          "Identity & values work",
          "Network strategy coaching",
          "Re-entry support programs",
        ],
      },
    ],
  },
  {
    id: "provider-partnerships",
    icon: Users,
    number: "05",
    title: "Provider Partnerships",
    link: "/services/provider-partnerships",
    description:
      "Collaborative care models connecting independent providers, clinics, and health systems into one coordinated network.",
    theme: {
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      labelColor: "text-rose-600",
      accentVia: "via-rose-400/60",
      cardBorder: "border-rose-100 hover:border-rose-200",
      checkColor: "text-rose-500",
      sectionBg: "bg-cream",
    },
    services: [
      {
        title: "Referral Network",
        description:
          "A trusted warm-referral ecosystem connecting patients to the right provider at the right time.",
        bullets: [
          "Warm referral intake process",
          "Specialty-matched routing",
          "Real-time provider availability",
          "Patient status loop-back",
        ],
      },
      {
        title: "Co-Care Coordination",
        description:
          "Shared care plans and cross-provider communication for complex or multi-diagnosis patients.",
        bullets: [
          "Shared EHR access",
          "Care team messaging",
          "Coordinated treatment plans",
          "Outcome tracking",
        ],
      },
      {
        title: "Group Practice Support",
        description:
          "Infrastructure, credentialing, and operational support for independent group practices.",
        bullets: [
          "Credentialing & payor enrollment",
          "Group scheduling systems",
          "Shared billing operations",
          "Brand & marketing support",
        ],
      },
      {
        title: "Clinical Supervision",
        description:
          "Individual and group supervision for provisionally licensed clinicians pursuing full licensure.",
        bullets: [
          "Licensed supervisors (LPC-S, LCSW-S)",
          "Individual & group formats",
          "HIPAA-compliant note review",
          "Licensure milestone tracking",
        ],
      },
    ],
  },
  {
    id: "healthcare-consulting",
    icon: Building2,
    number: "06",
    title: "Healthcare Consulting",
    link: "/services/healthcare-consulting",
    description:
      "Strategic advisory services helping healthcare organizations grow, streamline operations, and deliver better outcomes.",
    theme: {
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
      labelColor: "text-amber-700",
      accentVia: "via-amber-400/60",
      cardBorder: "border-amber-100 hover:border-amber-200",
      checkColor: "text-amber-600",
      sectionBg: "bg-cream2",
    },
    services: [
      {
        title: "Practice Growth Strategy",
        description:
          "Data-driven growth plans for behavioral health practices looking to scale sustainably.",
        bullets: [
          "Market & competitor analysis",
          "Service line expansion planning",
          "Provider recruitment strategies",
          "Revenue diversification roadmaps",
        ],
      },
      {
        title: "Insurance & Billing Optimization",
        description:
          "Maximize reimbursement rates and reduce claim denials with expert revenue cycle strategy.",
        bullets: [
          "Payor contract negotiation",
          "Denial management protocols",
          "Coding audit & correction",
          "RCM system selection",
        ],
      },
      {
        title: "Compliance & HIPAA Advisory",
        description:
          "Risk assessments, policy development, and training to keep your organization fully compliant.",
        bullets: [
          "HIPAA risk assessment",
          "Policy & procedure drafting",
          "Staff compliance training",
          "Breach response planning",
        ],
      },
      {
        title: "Workflow & Operations Design",
        description:
          "Streamline clinical and administrative workflows to reduce burnout and increase care capacity.",
        bullets: [
          "Intake & scheduling optimization",
          "EHR implementation support",
          "Staff efficiency mapping",
          "KPI dashboard design",
        ],
      },
    ],
  },
];

// Legacy flat list     used by ServicesGrid and BookingPage
export const services: Service[] = [
  {
    id: "same-day-therapy",
    icon: Video,
    number: "01",
    title: "Same-Day Therapy",
    shortDesc: "Secure HIPAA video sessions with licensed therapists, often the same day you book.",
    fullDesc: "Connect with a licensed therapist via secure, HIPAA-compliant video. Available evenings and weekends, with same-day openings for urgent needs.",
    bullets: ["Licensed LPC, LCSW, LMFT clinicians", "Same-day & evening availability", "Encrypted video & messaging", "Integrated care notes"],
    link: "/services/therapy",
  },
  {
    id: "quick-diagnostics",
    icon: Activity,
    number: "02",
    title: "Quick Diagnostics",
    shortDesc: "Behavioral health assessments, screenings, and lifestyle baselines     quickly.",
    fullDesc: "Comprehensive diagnostic intake covering mood, anxiety, ADHD, sleep, and lifestyle baselines     delivered with clinical precision.",
    bullets: ["Validated screening tools", "Same-week turnaround", "Plain-language reports", "Care plan handoff"],
    link: "/services/therapy",
  },
  {
    id: "psychiatry",
    icon: Brain,
    number: "03",
    title: "Psychiatry",
    shortDesc: "Assessment, diagnosis, and medication management with board-certified psychiatrists.",
    fullDesc: "Board-certified psychiatrists for evaluation, medication management, and long-term care coordination.",
    bullets: ["Board-certified psychiatrists", "Medication management", "Refills via telehealth", "Coordinated with therapy"],
    link: "/services/medication-management",
  },
  {
    id: "wellness",
    icon: Leaf,
    number: "04",
    title: "Wellness & Longevity",
    shortDesc: "Nutrition, breathwork, and lifestyle plans crafted for everyday wellbeing.",
    fullDesc: "Integrative wellness plans covering nutrition, sleep, breathwork, and somatic practices     built alongside your clinical care.",
    bullets: ["Personalized nutrition plans", "Breathwork & somatic tools", "Sleep optimization", "Monthly check-ins"],
    link: "/services/therapy",
  },
  {
    id: "community",
    icon: Users,
    number: "05",
    title: "Community Outreach",
    shortDesc: "Subsidized programs and nonprofit collaborations bringing care to underserved communities.",
    fullDesc: "Free and reduced-cost programs delivered through nonprofit partners, schools, and community organizations.",
    bullets: ["Subsidized session vouchers", "Nonprofit partner network", "Community workshops", "Multilingual providers"],
    link: "/community",
  },
  {
    id: "insurance",
    icon: ShieldCheck,
    number: "06",
    title: "Insurance Navigation",
    shortDesc: "We handle insurance verification so finances never stand between you and support.",
    fullDesc: "Our team verifies benefits, files claims, and confirms costs up front     so you can focus on care, not paperwork.",
    bullets: ["Benefits verification", "Direct claim filing", "Cash-pay transparency", "Sliding scale options"],
    link: "/booking",
  },
  {
    id: "iop",
    icon: Building2,
    number: "07",
    title: "Intensive Outpatient (IOP)",
    shortDesc: "Structured multi-session weekly care for those needing more than weekly therapy.",
    fullDesc: "Our telehealth IOP provides 3–5 structured sessions per week combining group therapy, individual therapy, and psychiatric support.",
    bullets: [
      "3–5 sessions per week via telehealth",
      "Group + individual therapy combined",
      "Psychiatric support included",
      "Insurance typically covered",
    ],
    link: "/services/iop",
  },
];
