export interface Testimonial {
  id: string;
  initials: string;
  quote: string;
  name: string;
  role: string;
  service: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    initials: "HL",
    quote: "Finally, a clinic that respects my time. The same-day availability isn't just a marketing slogan      it's the reality. I was seen by my therapist within hours of booking, and walked out with a clear, actionable plan.",
    name: "Hannah L.",
    role: "New York, NY",
    service: "Mental Health Services",
    rating: 5,
  },
  {
    id: "t2",
    initials: "MR",
    quote: "The peptide protocol completely transformed my energy and recovery. I'm a different person at 48 than I was at 40. The physician monitoring and lab reviews gave me confidence the entire time.",
    name: "Marcus R.",
    role: "Austin, TX",
    service: "Peptide & Wellness Optimization",
    rating: 5,
  },
  {
    id: "t3",
    initials: "SP",
    quote: "As a nurse practitioner, I was skeptical about telehealth quality. Mindova completely changed my perspective. The clinical rigor and documentation standards match any in-person practice I've worked with.",
    name: "Sarah P., NP",
    role: "Chicago, IL",
    service: "Virtual Behavioral Health",
    rating: 5,
  },
  {
    id: "t4",
    initials: "JW",
    quote: "The executive coaching program gave me tools I use every single day. My team has noticed. My board has noticed. And I've noticed most of all      I'm leading with clarity instead of reacting from stress.",
    name: "James W.",
    role: "CEO, San Francisco, CA",
    service: "Coaching & Personal Development",
    rating: 5,
  },
  {
    id: "t5",
    initials: "AT",
    quote: "Referring patients to the Mindova network has been seamless. The warm handoff process is professional, and the feedback loop keeps me in the loop. Finally a behavioral health partner I can trust completely.",
    name: "Dr. A. Thompson",
    role: "Family Medicine, Dallas, TX",
    service: "Provider Partnerships",
    rating: 5,
  },
  {
    id: "t6",
    initials: "LM",
    quote: "Within 90 days, Mindova's consulting team helped us reduce our denial rate by 22% and renegotiate two key payor contracts. The return on investment was immediate and measurable.",
    name: "Lisa M.",
    role: "Practice Director, Miami, FL",
    service: "Healthcare Consulting",
    rating: 5,
  },
];
