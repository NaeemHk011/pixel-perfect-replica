export type ProviderType = "Therapists" | "Psychiatrists" | "Counselors" | "Wellness";

export interface Provider {
  id: string;
  initials: string;
  name: string;
  credentials: string;
  specialty: string;
  tags: string[];
  rating: number;
  type: ProviderType;
}

export const providers: Provider[] = [
  { id: "p1", initials: "AL", name: "Dr. Annika Lindberg", credentials: "PMHNP-BC", specialty: "Trauma, Anxiety, EMDR", tags: ["PMHNP", "Trauma"], rating: 5.0, type: "Psychiatrists" },
  { id: "p2", initials: "JM", name: "Dr. James Malik", credentials: "MD, Psychiatrist", specialty: "Mood Disorders", tags: ["Psychiatrist"], rating: 4.9, type: "Psychiatrists" },
  { id: "p3", initials: "PS", name: "Priya Solanki", credentials: "LMFT", specialty: "Couples & Family Therapy", tags: ["LMFT"], rating: 4.8, type: "Therapists" },
  { id: "p4", initials: "MO", name: "Marcus Okoye", credentials: "LCSW", specialty: "Men's Mental Health", tags: ["LCSW"], rating: 4.9, type: "Counselors" },
  { id: "p5", initials: "EC", name: "Elena Castillo", credentials: "LPC", specialty: "Depression, Burnout", tags: ["LPC"], rating: 4.9, type: "Counselors" },
  { id: "p6", initials: "RH", name: "Rohan Hegde", credentials: "LCSW", specialty: "Adolescent Therapy", tags: ["LCSW", "Teens"], rating: 4.8, type: "Therapists" },
  { id: "p7", initials: "NT", name: "Naomi Tate", credentials: "RDN, Wellness", specialty: "Nutrition & Lifestyle", tags: ["Wellness"], rating: 5.0, type: "Wellness" },
  { id: "p8", initials: "DV", name: "Daniel Vega", credentials: "LMFT", specialty: "Anxiety & ADHD", tags: ["LMFT", "ADHD"], rating: 4.7, type: "Therapists" },
  { id: "p9", initials: "SK", name: "Sana Khoury", credentials: "Breathwork Coach", specialty: "Somatic & Breathwork", tags: ["Wellness"], rating: 4.9, type: "Wellness" },
];
