# Claude Code — Mindova Holdings: Missing Pages & Sections

## CONTEXT
We have an existing Mindova Holdings telehealth website built in React + TypeScript + Vite + Tailwind CSS + React Router v6. The design system is already established. DO NOT change any existing design, colors, components, or file structure. Only ADD the missing pieces listed below.

## EXISTING DESIGN SYSTEM (DO NOT CHANGE)
```
Colors:
  --cream:      #F9F6F1
  --cream2:     #F3EEE6
  --white:      #FFFFFF
  --dark:       #0C0B09
  --dark2:      #1A1814
  --gold:       #B89040
  --gold2:      #CFA84E
  --gold3:      #E4C06A
  --muted:      #7A7060
  --border2:    rgba(0,0,0,0.08)

Fonts:
  Headings → Playfair Display (italic gold for emphasis)
  Body      → Inter

Card style   → border-radius: 20px, border: 1px solid border2, hover lift
Buttons      → gold pill (bg: gold2, text: dark, border-radius: 9999px)
Section label→ small uppercase gold text + horizontal line before it
```

---

## TASK 1 — ADD "HOW IT WORKS" SECTION ON HOME PAGE

**File:** `src/components/sections/HowItWorks.tsx`

**Design:**
- Background: `#F3EEE6` (cream2)
- Section label: "THE PROCESS"
- H2: `How It` **`Works`** (Works = italic gold, Playfair Display)
- Subtitle: "From your first click to your first session — we make it effortless."
- 4 steps in a horizontal row, connected by a thin gold dashed line between them

**4 Steps:**
```
01  Fill a Short Form
    Takes 2 minutes. Just your name,
    contact, and what you're looking for.

02  Pick Your Provider
    Browse our vetted specialists and
    choose who feels right for you.

03  Book Your Session
    Select a date and time that works
    for you — same-week availability.

04  Start Your Care
    Join your secure telehealth session
    and begin your care plan.
```

**Each step card:**
- White background, rounded-2xl
- Gold number top-left (Playfair Display, large, italic, muted opacity)
- Icon below number
- Title (Playfair Display, ~20px)
- Description (Inter, 13px, muted)
- On hover: border turns gold, slight lift

**Connector:**
- Between cards: thin dashed line `border-top: 1px dashed rgba(184,144,64,0.3)`
- Only visible on desktop, hidden on mobile

**Mobile:**
- Stack vertically, no connector line, each card full width

**Placement in HomePage.tsx:**
Add `<HowItWorks />` AFTER the `<ServicesGrid />` section and BEFORE the `<ProvidersSection />` section.

---

## TASK 2 — ADD INDIVIDUAL SERVICE PAGES

Create 3 separate pages. Each shares the same layout template — create a reusable component first.

---

### Reusable Template: `src/components/sections/ServicePageTemplate.tsx`

**Props interface:**
```typescript
interface ServicePageProps {
  eyebrow: string
  title: string
  titleEmphasis: string
  subtitle: string
  heroIcon: string
  whatIsIt: string
  whoIsItFor: string[]
  whatToExpect: {
    step: string
    title: string
    description: string
  }[]
  includes: string[]
  pricing: {
    label: string
    amount: string
    note: string
  }
  faqs: {
    question: string
    answer: string
  }[]
}
```

**Page Layout (top to bottom):**

**A. Hero Banner**
- Dark background (`#0C0B09`)
- Subtle gold radial glow (same as homepage hero)
- Eyebrow label (gold, uppercase, small)
- H1: title + italic gold emphasis word (Playfair Display)
- Subtitle paragraph
- Two buttons: "Book Appointment →" (gold pill) + "View All Services" (ghost)

**B. What Is It Section**
- Cream background, 2-column
- Left: Section label + H2 "What Is `[Service Name]`?" + paragraph from `whatIsIt` prop
- Right: Dark card with gold border — bullet list from `whoIsItFor` array
  - Title of dark card: "Who Is This For?"
  - Each bullet: gold dot + text

**C. What To Expect — Step by Step**
- White background
- Section label: "THE PROCESS"
- H2: "What to `Expect`"
- Vertical stepper — left side has gold numbered circles connected by vertical line
- Right side: step title + description
- Each step: number in gold circle, title bold, description muted

**D. What's Included**
- Cream2 background
- Section label: "INCLUDED"
- H2: "Everything `Covered`"
- 2-column grid of feature items
- Each item: gold checkmark icon + text

**E. Pricing / Insurance Card**
- White background, centered
- Single card (dark, rounded-3xl, gold border)
- Pricing label + amount + note
- Below: "Insurance Accepted · Cash-Pay Available"
- Gold "Book Appointment →" button

**F. Mini FAQ**
- Cream background
- Section label: "FAQ"
- H2: "Common `Questions`"
- Accordion (same style as homepage FAQ)
- Max 4 questions per service

**G. CTA Banner**
- Same dark CTA card as homepage bottom
- "Ready to begin?" + Book button

---

### Page 1: `src/pages/TherapyPage.tsx`

**Route:** `/services/therapy`

```typescript
const therapyData: ServicePageProps = {
  eyebrow: "TELEHEALTH THERAPY",
  title: "Same-Day",
  titleEmphasis: "Therapy",
  subtitle: "Connect with a licensed therapist today — secure, private, and from wherever you are.",
  heroIcon: "🧠",
  whatIsIt: "Our telehealth therapy service connects you with licensed therapists (LPCs, LCSWs, LMFTs) via secure HIPAA-compliant video sessions. Whether you're dealing with anxiety, depression, trauma, relationship challenges, or simply need someone to talk to — we match you with the right provider, often the same day you reach out.",
  whoIsItFor: [
    "Adults dealing with anxiety or depression",
    "Individuals processing trauma or grief",
    "Those navigating relationship or family challenges",
    "People seeking personal growth and self-awareness",
    "Anyone who has tried therapy before and wants to try again"
  ],
  whatToExpect: [
    {
      step: "01",
      title: "Book Online",
      description: "Fill a short form and choose your preferred therapist from our vetted network."
    },
    {
      step: "02",
      title: "Complete Intake",
      description: "Fill out your secure digital intake form — takes about 10 minutes."
    },
    {
      step: "03",
      title: "Join Your Session",
      description: "Connect via secure video link at your scheduled time — no downloads needed."
    },
    {
      step: "04",
      title: "Follow Your Plan",
      description: "Your therapist creates a personalized care plan and you meet regularly."
    }
  ],
  includes: [
    "50-minute individual therapy sessions",
    "Secure HIPAA-compliant video platform",
    "Personalized care plan",
    "Between-session messaging with your therapist",
    "Session notes accessible via patient portal",
    "Insurance billing support",
    "Easy rescheduling with 24hr notice",
    "Same-week availability"
  ],
  pricing: {
    label: "Per Session",
    amount: "$150",
    note: "Cash-pay rate. Most insurance plans accepted — verify before booking."
  },
  faqs: [
    {
      question: "How quickly can I see a therapist?",
      answer: "Most patients are matched and booked within 24–72 hours. Same-week appointments are frequently available."
    },
    {
      question: "Do you accept insurance for therapy?",
      answer: "Yes. We accept most major insurance providers. We verify your coverage before your first session at no cost to you."
    },
    {
      question: "What platform do you use for video sessions?",
      answer: "We use a HIPAA-compliant secure video platform integrated into SimplePractice. No downloads required — just click your link."
    },
    {
      question: "Can I switch therapists if it's not a good fit?",
      answer: "Absolutely. We want you to feel comfortable. You can request a different provider at any time."
    }
  ]
}
```

---

### Page 2: `src/pages/MedicationPage.tsx`

**Route:** `/services/medication-management`

```typescript
const medicationData: ServicePageProps = {
  eyebrow: "PSYCHIATRIC CARE",
  title: "Medication",
  titleEmphasis: "Management",
  subtitle: "Board-certified psychiatrists and PMHNPs providing evaluation, diagnosis, and ongoing medication support.",
  heroIcon: "💊",
  whatIsIt: "Our medication management service connects you with board-certified psychiatrists and Psychiatric-Mental Health Nurse Practitioners (PMHNPs) who specialize in evaluating, diagnosing, and managing psychiatric conditions. From initial evaluation to ongoing medication adjustments — we provide consistent, evidence-based psychiatric care via telehealth.",
  whoIsItFor: [
    "Individuals seeking psychiatric evaluation for the first time",
    "Those already on medication who need ongoing management",
    "People with ADHD, depression, anxiety, bipolar, or PTSD",
    "Patients transitioning from in-person to telehealth psychiatry",
    "Those whose therapist has recommended a medication evaluation"
  ],
  whatToExpect: [
    {
      step: "01",
      title: "Initial Evaluation",
      description: "60-minute comprehensive psychiatric evaluation with your provider."
    },
    {
      step: "02",
      title: "Diagnosis & Plan",
      description: "Your provider reviews history, symptoms, and creates a treatment plan."
    },
    {
      step: "03",
      title: "Prescription",
      description: "If appropriate, prescriptions are sent electronically to your pharmacy."
    },
    {
      step: "04",
      title: "Follow-Up Care",
      description: "Regular 30-minute follow-up sessions to monitor and adjust as needed."
    }
  ],
  includes: [
    "Initial 60-minute psychiatric evaluation",
    "Diagnosis and personalized treatment plan",
    "Electronic prescription management",
    "30-minute follow-up sessions",
    "Medication monitoring and adjustments",
    "Coordination with your therapist if applicable",
    "Patient portal access to all records",
    "Insurance billing support"
  ],
  pricing: {
    label: "Initial Evaluation",
    amount: "$250",
    note: "Follow-up sessions from $150. Most insurance plans accepted."
  },
  faqs: [
    {
      question: "Can a telehealth provider prescribe medication?",
      answer: "Yes. Our licensed PMHNPs and psychiatrists are authorized to prescribe psychiatric medications via telehealth in most states."
    },
    {
      question: "What conditions do you treat?",
      answer: "We treat depression, anxiety, ADHD, bipolar disorder, PTSD, OCD, and other behavioral health conditions requiring medication management."
    },
    {
      question: "How often are follow-up appointments?",
      answer: "Typically monthly for the first few months, then every 2–3 months once stable. Your provider determines the right frequency for your needs."
    },
    {
      question: "Do I need a therapist referral?",
      answer: "No referral is needed. You can book a psychiatric evaluation directly. However, we often recommend combining medication with therapy for best outcomes."
    }
  ]
}
```

---

### Page 3: `src/pages/IOPPage.tsx`

**Route:** `/services/iop`

```typescript
const iopData: ServicePageProps = {
  eyebrow: "INTENSIVE OUTPATIENT PROGRAM",
  title: "Intensive",
  titleEmphasis: "Outpatient Program",
  subtitle: "Structured, high-support behavioral health care for those who need more than weekly therapy — without inpatient admission.",
  heroIcon: "🏥",
  whatIsIt: "Our Intensive Outpatient Program (IOP) is a structured treatment program designed for individuals who need a higher level of care than standard weekly therapy but do not require 24-hour inpatient treatment. IOP typically involves multiple sessions per week, combining group therapy, individual therapy, and psychiatric support — all delivered via telehealth.",
  whoIsItFor: [
    "Individuals stepping down from inpatient or residential care",
    "Those in crisis who need structured daily support",
    "People with severe depression, anxiety, or trauma",
    "Those whose weekly therapy is no longer sufficient",
    "Individuals with substance use and co-occurring mental health conditions"
  ],
  whatToExpect: [
    {
      step: "01",
      title: "Clinical Assessment",
      description: "A thorough evaluation to confirm IOP is the right level of care for you."
    },
    {
      step: "02",
      title: "Personalized Treatment Plan",
      description: "Your care team creates an individualized plan with clear goals and milestones."
    },
    {
      step: "03",
      title: "Structured Sessions",
      description: "Attend 3–5 sessions per week including group and individual therapy via telehealth."
    },
    {
      step: "04",
      title: "Step-Down & Aftercare",
      description: "As you progress, care is stepped down to standard therapy with a clear aftercare plan."
    }
  ],
  includes: [
    "Clinical assessment and intake evaluation",
    "3–5 sessions per week (group + individual)",
    "Psychiatric medication management if needed",
    "Personalized treatment plan with measurable goals",
    "Family involvement sessions where appropriate",
    "Crisis support between sessions",
    "Coordination with outside providers",
    "Insurance pre-authorization support"
  ],
  pricing: {
    label: "Insurance Covered",
    amount: "Most Plans",
    note: "IOP is typically covered by insurance. We handle pre-authorization. Cash-pay options available."
  },
  faqs: [
    {
      question: "How many days per week is IOP?",
      answer: "Standard IOP is 3 days per week, 3 hours per day. Intensive tracks may be 5 days per week. Your clinical team determines the right schedule."
    },
    {
      question: "Is telehealth IOP as effective as in-person?",
      answer: "Research shows telehealth IOP has comparable outcomes to in-person. It also removes barriers like transportation and time off work."
    },
    {
      question: "How long does IOP last?",
      answer: "Typically 6–8 weeks, though this varies based on clinical progress. Your care team reassesses regularly."
    },
    {
      question: "Does insurance cover IOP?",
      answer: "Most major insurance plans cover IOP. We handle pre-authorization and benefits verification before you begin. Cash-pay rates are also available."
    }
  ]
}
```

---

## TASK 3 — UPDATE SERVICES SECTION CARDS (HomePage + ServicesPage)

In `src/components/sections/ServicesGrid.tsx` — update each service card to have a "Learn More →" link:

```
Same-Day Therapy        → /services/therapy
Quick Diagnostics       → /services/therapy (same for now)
Psychiatry              → /services/medication-management
Wellness & Longevity    → /services/therapy
Community Outreach      → /community
Insurance Navigation    → /booking
IOP                     → /services/iop
```

Each card bottom: add a small gold text link "Learn More →" using React Router `<Link>`.

---

## TASK 4 — UPDATE NAVBAR

In `src/components/layout/Navbar.tsx`:

Change "Services" nav link to a **dropdown** on hover:

```
Services ▾
  ├── Therapy                → /services/therapy
  ├── Medication Management  → /services/medication-management
  └── IOP                    → /services/iop
```

**Dropdown style:**
- White background, rounded-xl, subtle shadow
- Each item: padding 12px 20px, hover background cream, gold left border on hover
- Smooth fade-in animation (opacity 0→1, translateY -4px→0, 0.2s ease)
- Close on outside click or mouse leave

---

## TASK 5 — ADD ROUTES IN App.tsx

Add these new routes:

```typescript
import TherapyPage from './pages/TherapyPage'
import MedicationPage from './pages/MedicationPage'
import IOPPage from './pages/IOPPage'

// Inside <Routes>:
<Route path="/services/therapy" element={<TherapyPage />} />
<Route path="/services/medication-management" element={<MedicationPage />} />
<Route path="/services/iop" element={<IOPPage />} />
```

---

## TASK 6 — ADD IOP TO SERVICES DATA FILE

In `src/data/services.ts` — add IOP as 7th service:

```typescript
{
  id: 7,
  icon: "🏥",
  number: "07",
  title: "Intensive Outpatient (IOP)",
  shortDesc: "Structured multi-session weekly care for those needing more than weekly therapy.",
  fullDesc: "Our telehealth IOP provides 3–5 structured sessions per week combining group therapy, individual therapy, and psychiatric support.",
  bullets: [
    "3–5 sessions per week via telehealth",
    "Group + individual therapy combined",
    "Psychiatric support included",
    "Insurance typically covered"
  ],
  link: "/services/iop"
}
```

---

## IMPORTANT RULES

1. **DO NOT** change any existing component styles, colors, or layouts
2. **DO NOT** modify Navbar, Footer, or any existing page that is already working
3. **Only ADD** new files and new routes
4. All new components must **match existing design system exactly**
5. All internal links must use React Router `<Link>` — never `<a href>`
6. All new pages must include `<Navbar />` and `<Footer />` via the existing layout
7. TypeScript — fully typed, no `any`
8. Tailwind only — no inline styles
9. Scroll animation on all new sections (fade up on viewport entry — same as existing site)
10. All new pages must be **fully mobile responsive**
