# PHASE 6 — Website Frontend Redesign & Client Requirements
**Goal:** Client ki task list (WhatsApp image 2026-05-29) ke mutabiq website ko fully restructure karo  
**Status:** ✅ COMPLETED  
**Estimated Tasks:** 15 major steps  
**Files Location:** `pixel-perfect-replica/src/`

---

## Progress Tracker

| Step | Task | Status |
|------|------|--------|
| Step | Task | Status |
| Step 1 | Navbar Restructure | Done ✅ |
| Step 2 | Homepage Copy & Emotional Messaging | Done ✅ |
| Step 3 | Homepage CTA Buttons | Done ✅ |
| Step 4 | Navigation Routes — New Pages Add (incl. Virtual Wellness) | Done ✅ |
| Step 5 | Get Matched / Get Support Page | Done ✅ |
| Step 6 | Patient Intake Form Update | Done ✅ |
| Step 7 | Clinical vs Coaching — Pages Restructure | Done ✅ |
| Step 8 | Legal Disclaimer + Terminology Audit | Done ✅ |
| Step 9 | Join the Network — Recruitment Landing Page | Done ✅ |
| Step 10 | Provider Application — Two Separate Forms | Done ✅ |
| Step 11 | "What Mindova Provides" Section | Done ✅ |
| Step 12 | Provider Types Section — Two Pathways | Done ✅ |
| Step 13 | Healing Is A Movement — Partner Program Section | Done ✅ |
| Step 14 | Footer Redesign (nav links, privacy policy, contact) | 🔄 Partial — privacy-policy ✅, terms ✅, full footer columns ⬜ |
| Step 15 | Branding Polish & Final Review | Done ✅ |

---

## STEP 1 — Navbar Restructure Done ✅

**File:** `src/components/layout/Navbar.tsx`

### Kya karna hai:
1. Logo ke saath / neeche **"Mindova Holdings"** text add karo
2. Navigation links update karo:

**CURRENT NAV → NEW NAV**
```
Home          →  Home
Services      →  About
Providers     →  Services
Booking       →  Get Matched
Contact       →  Virtual Wellness
              →  Coaching
              →  Join the Network
              →  Contact
```

3. Top-right mein **2 CTA buttons** add karo:
   - **GET SUPPORT** (gold/primary button → `/get-matched` route)
   - **BECOME A PROVIDER** (ghost/outline button → `/join-the-network` route)

4. Mobile menu mein bhi yahi changes reflect karo

---

## STEP 2 — Homepage Copy & Emotional Messaging  Done ✅

**File:** `src/routes/index.tsx` + `src/components/sections/Hero.tsx`

### Hero Section Update:
**Headline (new):**
> "Your Path to Healing Starts Here"
> or
> "Mental Wellness. Behavioral Health. Real Support."

**Subheadline (new):**
> "Mindova connects individuals with licensed therapists, psychiatrists, coaches, and wellness professionals — virtually, compassionately, and affordably."

**Hero messaging pillars add karo (beneath hero):**
- Mental Wellness
- Behavioral Health
- Virtual Care
- Coaching
- Provider Infrastructure

### Emotional Messaging Words — Throughout Homepage:
Yeh words/themes page mein naturally weave karo:
- **Healing** — "Your healing journey starts here"
- **Support** — "Real support when you need it most"
- **Growth** — "Grow beyond your challenges"
- **Guidance** — "Guided by licensed professionals"
- **Wellness** — "Total wellness — mind, body, spirit"
- **Connection** — "Connected care, wherever you are"

### "Who We Are" Section (homepage mein add karo):
Visitors ko immediately samjhao:
- **Who is Mindova?** — A virtual behavioral health platform
- **Who does Mindova help?** — Individuals seeking therapy, coaching, psychiatric care
- **What services does Mindova offer?** — Therapy, Medication Management, Coaching, Assessments

---

## STEP 3 — Homepage CTA Buttons Done ✅

**Files:** `src/components/sections/` ke sab CTA sections

### Website mein yeh 5 CTAs consistently use karo:

| Button Text | Route | Use Location |
|-------------|-------|-------------|
| **Get Support** | `/get-matched` | Hero section, top of homepage |
| **Get Matched** | `/get-matched` | Mid-page, service sections |
| **Become a Provider** | `/join-the-network` | Provider sections, navbar |
| **Join the Network** | `/join-the-network` | Footer, provider section |
| **Start Your Wellness Journey** | `/get-matched` | Bottom of homepage CTA |

### BookingCTA component update:
- Existing "Book Free Consultation" button ko **"Get Support"** aur **"Get Matched"** buttons se replace karo

---

## STEP 4 — Navigation Routes — New Pages Add ✅

**File:** `src/router.tsx` + `src/routes/` folder

### Naye routes/pages create karo:

```
/get-matched              → Get Matched / Get Support page (new)
/join-the-network         → Provider Recruitment Landing page (new)
/services/clinical        → Clinical Mental Health Services (update existing)
/services/coaching        → Wellness & Coaching Services (update existing)
/virtual-wellness         → Virtual Wellness hub page (new or update)
/about                    → About Mindova page (new or update)
```

### Route file banao:
- `src/routes/get-matched.tsx`
- `src/routes/join-the-network.tsx`
- `src/routes/about.tsx` (agar nahi hai)
- `src/routes/virtual-wellness.tsx` (naya)

### Virtual Wellness Page — Content Spec:
**File:** `src/routes/virtual-wellness.tsx`

```
Hero:
  Headline: "Care From Anywhere"
  Subheadline: "HIPAA-secure virtual sessions with licensed therapists,
               psychiatrists, and wellness coaches — from your home."

Sections:
  1. How Virtual Care Works (3 steps: Book → Connect → Heal)
  2. Services available virtually:
     - Individual Therapy
     - Medication Management
     - Psychiatric Evaluations
     - Wellness Coaching
     - Crisis Support
  3. Technology: "No special software — any device with camera/mic"
  4. Privacy & Security: "HIPAA-compliant, end-to-end encrypted"

CTA: [Get Matched] → /get-matched
```

---

## STEP 5 — Get Matched / Get Support Page ✅

**File:** `src/routes/get-matched.tsx` (naya banana hai)

### Page Structure:

#### Hero Section:
```
Headline: "Find Your Perfect Provider"
Subheadline: "Tell us what you're looking for — we'll match you with
             the right licensed therapist, psychiatrist, or wellness coach."
```

#### Concierge Matching Flow (3 steps visually dikhao):
```
Step 1: Share Your Needs      → Fill the form
Step 2: We Match You          → Our team reviews & finds best provider
Step 3: Start Your Journey    → Book your first session
```

#### Below flow: Patient Intake / Matching Form (Step 6 se connected)

#### Bottom CTA:
```
"Already know what you need? → Book Directly"  → /booking
```

---

## STEP 6 — Patient Intake Form Update ✅

**NOTE — 2 alag forms hain, confuse mat hona:**
- **Form A** → `/get-matched` page par — naye patients ke liye matching form (client ka task)
- **Form B** → `/intake` page par — already booked patients ka pre-appointment form (Workflow 12 se linked)

**Yeh step dono ke fields define karta hai. GHL mein dono alag forms banenge.**

**Files:** `src/routes/get-matched.tsx` (Form A) + `src/routes/intake.tsx` (Form B, update existing)

### Form A — Get Matched Form Fields (`/get-matched`)
*Client task: naye patient ka matching form*

**Personal Info:**
- [ ] Full Name
- [ ] Age
- [ ] State of Residence
- [ ] Email Address
- [ ] Phone Number
- [ ] Preferred Communication Method (dropdown: Call / Text / Email)

**Service Interest (checkboxes — multiple select allowed):**
- [ ] Therapy
- [ ] Wellness Coaching
- [ ] Medication Management
- [ ] Anxiety / Stress Support
- [ ] Relationship Support
- [ ] Personal Development
- [ ] Accountability Coaching
- [ ] Other (text field)

**Provider Preferences:**
- [ ] Preferred Provider Gender (Male / Female / No Preference)
- [ ] Session Type (Virtual Only / In-Person / No Preference)
- [ ] Specialty Preference (text field — e.g. "anxiety", "trauma", "CBT", "life transitions")
- [ ] Language Preference (text field)
- [ ] Payment Method (Insurance / Self-Pay / Both)

**Note at bottom of form:**
> "Mindova's care coordinators will review your preferences and connect you with the best-fit provider within 24–48 hours."

### Form B — Intake Form Fields (`/intake`)
*Pre-appointment form — Workflow 12 se automatically link bhejta hai*
- [ ] Full Name
- [ ] Date of Birth
- [ ] Emergency Contact
- [ ] Insurance Information (if applicable)
- [ ] Chief Complaint / Reason for Visit
- [ ] Previous Mental Health History (Yes/No + details)
- [ ] Current Medications
- [ ] Any allergies

### GHL Setup (Pehle GHL mein karo):

**Form A — Get Matched (`/get-matched`):**
1. GHL mein yeh naye custom fields add karo (`Settings → Custom Fields`):
   - Age (Number)
   - Preferred Communication Method (Dropdown: Call / Text / Email)
   - Session Type (Dropdown: Virtual Only / In-Person / No Preference)
   - Specialty Preference (Text)
   - Language Preference (Text)
   - Payment Method (Dropdown: Insurance / Self-Pay / Both)
2. GHL mein "Get Matched — Matching Form" banao with above fields
3. Embed code → `get-matched.tsx` page mein paste karo

**Form B — Intake (`/intake`):**
1. GHL mein existing intake form update karo ya naya "Patient Intake Form" banao
2. Embed code → `intake.tsx` page mein paste karo
3. Workflow 12 mein `https://mindovaholdings.com/intake` link already set hai

---

## STEP 7 — Clinical vs Coaching Pages Restructure  Done ✅

**Files:**
- `src/routes/services_.mental-health.tsx` (update)
- `src/routes/services_.coaching-development.tsx` (update)

### A. Clinical Mental Health Services Page

**Page must include:**

**Services Offered:**
| Service | Description |
|---------|-------------|
| Therapy | Individual, couples, and group therapy |
| Assessments | Psychological and behavioral assessments |
| Psychiatric Services | Diagnosis and psychiatric evaluations |
| Medication Management | Ongoing medication review and management |

**Licensed Providers on this page:**
- LPC (Licensed Professional Counselor)
- LMFT (Licensed Marriage and Family Therapist)
- LCSW (Licensed Clinical Social Worker)
- Psychologist
- Psychiatrist

**Provider label to use:** "Licensed Clinical Professionals"

---

### B. Wellness & Coaching Services Page

**Services Offered:**
| Service | Description |
|---------|-------------|
| Life Coaching | Goal-setting and life direction |
| Wellness Coaching | Holistic health and lifestyle support |
| Accountability Coaching | Structured progress and goal accountability |
| Mentorship | Guidance from experienced professionals |
| Personal Development | Growth-focused personal transformation |

**Wellness/Coaching Providers:**
- Life Coaches
- Wellness Coaches
- Accountability Coaches
- Mentors
- Personal Development Specialists

**Provider label to use:** "Non-Clinical Wellness Professionals" ✅
**NEVER use:** "Unlicensed Therapist" ❌

---

## STEP 8 — Legal Disclaimer + Terminology Audit ✅

**Files:** All service pages, coaching pages, provider profiles

### Legal Disclaimer — Coaching Pages par add karo:

```
⚠️ DISCLAIMER:
"Coaching services provided through Mindova are non-clinical in nature
and are not intended to diagnose, treat, or replace licensed mental
health care. For clinical mental health concerns, please consult with a
licensed professional."
```

### Terminology Audit — Find & Replace:

| Find (remove) | Replace with |
|---------------|-------------|
| "Unlicensed Therapist" | "Non-Clinical Wellness Professional" |
| "Therapist" (for coaching staff) | "Wellness Coach" / "Life Coach" |
| "Therapy" (for coaching services) | "Coaching" / "Wellness Support" |

**Grep karo poore codebase mein:**
```bash
grep -r "unlicensed" src/
grep -r "Unlicensed" src/
```

---

## STEP 9 — Join the Network — Recruitment Landing Page Done ✅

**File:** `src/routes/join-the-network.tsx` (naya banana hai)

### Page Structure:

#### Hero Section:
```
Headline:    "Build Your Virtual Practice With Mindova"
Subheadline: "Mindova provides infrastructure, operational support, and
              client growth systems so providers can focus on delivering
              care and impact."
CTA Button:  [JOIN THE NETWORK]  [APPLY NOW]
```

#### Two Pathway Cards (saath mein dikhao):
```
[ Licensed Clinical Provider ]     [ Wellness & Coaching Professional ]
  LPCs, LMFTs, LCSWs,               Life Coaches, Wellness Coaches,
  Psychologists, Psychiatrists,      Accountability Coaches, Mentors,
  PMHNPs                             Peer Support Specialists
  
  [Apply as Clinical Provider]       [Apply as Wellness Professional]
```

#### "What Mindova Provides" Section (Step 11 se yahan bhi use karo)

#### Provider Testimonials / Social Proof section

#### Bottom CTA:
```
"Ready to join?" → [Apply Now] → /provider-apply
```

---

## STEP 10 — Provider Application — Two Separate Forms Done ✅  is may loader lagana hy

**File:** `src/routes/provider-apply.tsx` (update existing)

### Form Redesign — Two Tabs / Two Paths:

**Tab 1: Licensed Clinical Professional**

Fields:
- [ ] Full Name
- [ ] Email Address
- [ ] Phone Number
- [ ] License Type (dropdown: LPC / LMFT / LCSW / Psychologist / Psychiatrist / PMHNP / Other)
- [ ] License Number
- [ ] States Licensed In (multi-select)
- [ ] Specialty / Focus Area (text)
- [ ] Years of Experience (dropdown: 0-2 / 3-5 / 6-10 / 10+)
- [ ] Resume Upload (PDF/DOC)
- [ ] Brief Bio (textarea)

**Tab 2: Wellness & Coaching Professional**

Fields:
- [ ] Full Name
- [ ] Email Address
- [ ] Phone Number
- [ ] Coaching Specialty (dropdown: Life Coaching / Wellness Coaching / Accountability / Mentorship / Personal Development / Other)
- [ ] Certifications (text — e.g., ICF, ACE, etc.)
- [ ] Focus Areas (checkboxes — multiple)
- [ ] Years of Experience (dropdown)
- [ ] Brief Bio (textarea)

### GHL Setup (Pehle GHL mein karo):
1. GHL mein **2 alag forms** banao (`Sites → Forms`):
   - `Provider Application — Clinical` (licensed professionals ke liye)
   - `Provider Application — Coaching` (wellness/coaching professionals ke liye)
2. Clinical form mein Resume Upload field add karo (GHL ka File Upload field type)
3. Dono forms ke alag embed codes lo
4. Website par Tab 1 mein Clinical form ka embed, Tab 2 mein Coaching form ka embed paste karo
5. Dono forms apne apne GHL workflows automatically trigger karenge (Workflow 8A / 8B) — koi webhook nahi

---

## STEP 11 — "What Mindova Provides" Section   Done ✅

**File:** `src/components/sections/WhatMindovaProvides.tsx` (naya component)

### 10 Visual Service Blocks (grid layout):

```
+--------------------+  +--------------------+  +--------------------+
| 📣 Marketing       |  | 👥 Client          |  | 💳 Billing &       |
|    Support         |  |    Referrals        |  |    Credentialing   |
+--------------------+  +--------------------+  +--------------------+

+--------------------+  +--------------------+  +--------------------+
| 📅 Scheduling      |  | 🏥 Administrative  |  | 💻 Virtual         |
|    Systems         |  |    Support          |  |    Platform Access  |
+--------------------+  +--------------------+  +--------------------+

+--------------------+  +--------------------+  +--------------------+
| 🩺 Medical         |  | 💊 Medication      |  | 🤝 Care            |
|    Director        |  |    Collaboration    |  |    Coordination    |
|    Oversight       |  |                    |  |                    |
+--------------------+  +--------------------+  +--------------------+

+--------------------+
| 🌱 Growth          |
|    Opportunities   |
+--------------------+
```

### Use karo:
- `join-the-network.tsx` page par (Step 9)
- `provider-apply.tsx` page par bhi (Step 10)

---

## STEP 12 — Provider Types Section — Two Pathways  Done ✅

**File:** `src/components/sections/ProviderTypes.tsx` (naya component)
**Use in:** `src/routes/providers.tsx` + `src/routes/join-the-network.tsx`

### Two-Column Layout:

**Column 1 — Licensed Clinical Providers:**
```
Title: "Licensed Clinical Providers"
Icon: 🏥

List:
• LPCs (Licensed Professional Counselors)
• LMFTs (Licensed Marriage & Family Therapists)
• LCSWs (Licensed Clinical Social Workers)
• Psychologists
• Psychiatrists
• PMHNPs (Psychiatric Mental Health Nurse Practitioners)
```

**Column 2 — Wellness & Coaching Professionals:**
```
Title: "Wellness & Coaching Professionals"
Icon: 🌿

List:
• Life Coaches
• Wellness Coaches
• Accountability Coaches
• Mentors
• Peer Support Specialists

Disclaimer badge: "Non-Clinical Wellness Professionals"
```

---

## STEP 13 — Healing Is A Movement — Partner Program Section  Done ✅

**File:** `src/components/sections/HealingIsAMovement.tsx` (naya component)
**Add to:** Homepage bottom + `src/routes/partnerships.tsx`

### Section Content:

**Header:**
```
Logo: HEALING IS A MOVEMENT (with Mindova branding)
Title: "MINDOVA HOLDINGS PREFERRED PARTNER PROGRAM"
Subtitle: "Partner With Purpose. Impact Your Community."
```

**Description:**
> "As a preferred partner, you receive complimentary access to Mindova's platform while helping us bring healing, support, and resources to the communities we serve."

**Three Benefit Cards (horizontal layout):**

```
+------------------------+  +------------------------+  +------------------------+
| ❤️ DONATE 3–6 HOURS   |  | 🌍 SUPPORT             |  | 🎁 6 MONTHS FREE       |
|                        |  |    THE MISSION         |  |    ACCESS              |
| Donate 3–6 hours of    |  |                        |  |                        |
| in-kind service to     |  | One time helps provide |  | Receive 6 months of    |
| support community      |  | free mental health and |  | complimentary access   |
| wellness initiatives   |  | wellness resources to  |  | to the Mindova         |
| through the Ferguson   |  | individuals and        |  | platform as a          |
| Foundation             |  | families in need       |  | Preferred Partner.     |
+------------------------+  +------------------------+  +------------------------+
```

**Fee Waiver Detail (important — image se):**
> "AFTER 3 TO 6 MONTHS: MONTHLY MANAGEMENT FEE WAIVED"
> Partners jo 3–6 months in-kind service donate karte hain unka monthly management fee waive ho jaata hai.

**Bottom CTA:**
```
[BECOME A PREFERRED PARTNER]  →  /partnerships
```

**Ferguson Foundation Logo/Badge** — bottom right corner

---

## STEP 14 — Footer Redesign 🔄 Partial

**File:** `src/components/layout/Footer.tsx`

### Footer mein yeh sab hona chahiye:

**Column 1 — About:**
```
Mindova Holdings logo
Short tagline: "Virtual behavioral health, coaching & wellness."
Social media icons (Facebook, Instagram, LinkedIn)
```

**Column 2 — Navigation Links:**
```
Home
About
Services
  → Clinical Mental Health
  → Wellness & Coaching
Get Matched
Virtual Wellness
Join the Network
Contact
```

**Column 3 — For Providers:**
```
Join the Network
Apply as Clinical Provider
Apply as Wellness Professional
What Mindova Provides
```

**Column 4 — Legal & Info:**
```
Privacy Policy        → /privacy-policy
Terms of Service      → /terms
Contact Information
  → Email: care@mindovaholdings.com
  → Phone: [business number]
HIPAA Notice
```

**Bottom bar:**
```
© 2026 Mindova Holdings. All rights reserved.
"Healing Is A Movement" — Ferguson Foundation Partner
Legal disclaimer (coaching is non-clinical)
```

### Route banao:
- `src/routes/privacy-policy.tsx` — basic privacy policy page
- `src/routes/terms.tsx` — terms of service page

---

## STEP 15 — Branding Polish & Final Review ⬜

**Files:** Multiple — global styles + individual components

### Brand Feel Checklist:

| Quality | How to Achieve |
|---------|---------------|
| **Mindful** | Calm imagery, soft gradients, thoughtful spacing |
| **Clean** | Remove clutter, consistent typography, whitespace |
| **Premium** | Gold accents, Playfair Display headings, refined buttons |
| **Emotionally Supportive** | Warm copy, empathetic language, healing-focused visuals |
| **Organized** | Clear hierarchy, consistent section structure |
| **Scalable** | Reusable components, consistent design tokens |
| **Executive Wellness** | Professional tone, trust signals, credentials visible |

### Bold Building Sections to Add:
- [ ] **Provider Highlights** — Featured provider spotlight cards
- [ ] **Team Messaging** — "Our clinical team is here for you"
- [ ] **Partnerships** — Insurance partners, Ferguson Foundation, community orgs
- [ ] **Wellness Mission** — Mindova's mission statement prominently displayed
- [ ] **Navigation Links** — Clear footer nav + internal linking throughout site
- [ ] **Privacy Policy** — `/privacy-policy` page + footer link
- [ ] **Contact Information** — Visible on footer, contact page, and about page

### Final Review Checklist (before delivery):
- [ ] Patients clearly understand service offerings
- [ ] Providers clearly understand how to join platform
- [ ] Coaching and therapy are clearly separated
- [ ] Website explains what Mindova does (not just a directory)
- [ ] Mindova describes itself appropriately throughout (behavioral health platform)
- [ ] Overall user-experience is welcoming and supportive
- [ ] "Unlicensed therapist" removed from all pages
- [ ] Legal disclaimer present on all coaching pages
- [ ] All forms collect required information
- [ ] All GHL forms embedded and tested on all pages (embed code live check)
- [ ] Navigation is logical and user-friendly
- [ ] Footer has privacy policy, contact info, nav links
- [ ] Mobile responsive on all new pages
- [ ] All new routes properly linked in TanStack Router

---

## EXECUTION ORDER (Recommended)

```
Week 1:
  Step 1  → Navbar
  Step 2  → Homepage Copy
  Step 3  → Homepage CTAs
  Step 4  → New Routes Setup (incl. Virtual Wellness page)

Week 2:
  Step 5  → Get Matched Page
  Step 6  → Intake Form Update (GHL form embed)
  Step 7  → Clinical vs Coaching Pages

Week 3:
  Step 8  → Legal Disclaimer Audit
  Step 9  → Join the Network Page
  Step 10 → Provider Forms (Two Paths — GHL embeds)

Week 4:
  Step 11 → What Mindova Provides Section
  Step 12 → Provider Types Section
  Step 13 → Healing Is A Movement Section
  Step 14 → Footer Redesign (privacy policy, nav links, contact)
  Step 15 → Branding Polish + Final Review
```

---

## GHL UPDATES REQUIRED (Alongside Website)

**Note:** Ham GHL forms ko website mein directly embed kar rahe hain — koi webhook nahi.
GHL form submit hone par automations automatically trigger hoti hain.

| GHL Task | For Which Step |
|----------|---------------|
| 5 naye custom fields add karo (Age, Session Type, Language Preference, Preferred Communication, Payment Method) | Step 6 |
| "Get Matched — Patient Intake" form banao GHL mein + embed karo | Step 6 |
| "Provider Application — Clinical" form banao GHL mein + embed karo | Step 10 |
| "Provider Application — Coaching" form banao GHL mein + embed karo | Step 10 |
| Workflow 8A banao — Clinical provider application trigger | Step 10 |
| Workflow 8B banao — Coaching provider application trigger | Step 10 |
| AI Bot Knowledge Base update karo (Clinical vs Coaching distinction) | Step 7 |
| AI Bot system prompt update karo (coaching disclaimer add karo) | Step 8 |
| Custom Values banao — har provider ka calendar link (provider_1_calendar, provider_2_calendar, etc.) | Step 6 |
| Multi-Conditional Matching Workflow banao (Workflow 15) | Step 6 |
| AI Bot prompt update karo — mini-matching (new vs returning patient) | Step 6 |
| Voice AI prompt update karo — new patient → /get-matched, returning → direct calendar | Step 6 |

---

## WORKFLOW 15 — Multi-Conditional Provider Matching ⬜

**Name:** `Get Matched — Provider Matching`
**Trigger:** Form Submitted → "Get Matched — Matching Form"

### Custom Values Setup (Pehle Banao):
```
GHL → Settings → Custom Values → + Add

provider_1_calendar  → [Provider 1 ka GHL Calendar link]
provider_2_calendar  → [Provider 2 ka GHL Calendar link]
provider_3_calendar  → [Provider 3 ka GHL Calendar link]
coach_1_calendar     → [Coach 1 ka GHL Calendar link]
coach_2_calendar     → [Coach 2 ka GHL Calendar link]
default_calendar     → [Main/Default GHL Calendar link]
```
> Jab bhi provider change ho ya naya aaye — sirf custom value update karo, workflow nahi badlega.

### Workflow Logic (Decision Tree):

```
TRIGGER: Get Matched Form Submit
         ↓
ACTION 1 — IF/ELSE (Service Type check)
│
├── Condition: Service Interest CONTAINS "Therapy"
│             OR "Medication Management"
│             OR "Anxiety" OR "Psychiatric"
│   (Clinical Path)
│       ↓
│   ACTION 2A — IF/ELSE (Gender check)
│   ├── Gender = "Female"
│   │       ↓
│   │   ACTION 3A — IF/ELSE (Language check)
│   │   ├── Language = "Spanish" → SMS: {{custom_values.provider_2_calendar}}
│   │   └── Default             → SMS: {{custom_values.provider_1_calendar}}
│   │
│   ├── Gender = "Male"
│   │   → SMS: {{custom_values.provider_3_calendar}}
│   │
│   └── No Preference
│       → SMS: {{custom_values.default_calendar}}
│
└── Condition: Service Interest CONTAINS "Wellness Coaching"
              OR "Personal Development"
              OR "Accountability Coaching"
    (Coaching Path)
        ↓
    ACTION 2B — IF/ELSE (Specialty check)
    ├── Specialty CONTAINS "fitness" OR "nutrition" OR "wellness"
    │   → SMS: {{custom_values.coach_1_calendar}}
    └── Default coaching
        → SMS: {{custom_values.coach_2_calendar}}

FALLBACK (koi condition match na kare):
→ SMS: {{custom_values.default_calendar}}
```

### SMS Template (Matching Confirmation):
```
Hi {{contact.first_name}}! 🌿

Great news — we found your perfect provider match!

Based on your preferences, we've matched you with
a provider who specializes in exactly what you need.

Book your first session here:
[matched provider link — upar se jo bhi aya]

Questions? Reply to this message.
— Mindova Team
```

### After SMS:
```
ACTION — Move Pipeline → "Booking Link Sent"
ACTION — Add Tag → "provider-matched"
ACTION — Wait 24 hours
ACTION — IF/ELSE
  Stage still "Booking Link Sent"?
  YES → Follow-up SMS:
    "Hi {{contact.first_name}}, your provider match
     is still available. Book here: [same link]
     — Mindova Team"
  NO → End (already booked)

ACTION — Wait 48 more hours (total 72 hrs)
ACTION — IF/ELSE
  Stage still "Booking Link Sent"?
  YES → Move Pipeline → "Lost"
  NO → End
```

---

## AI BOT UPDATE — Mini-Matching (Option A) ⬜

**Update karo:** `GHL → AI Employee → Conversation AI → Mindova Assistant → Edit Prompt`

### Booking Request par Bot Ka Naya Behavior:

```
Jab patient booking karna chahe, bot pehle 2 sawal pooche:

Bot: "I'd love to help you get matched with the right provider!
     Are you looking for:
     A) Clinical services (therapy, medication management,
        psychiatric care)
     B) Wellness & coaching (life coaching, wellness coaching,
        personal development)"

Patient: "A" ya "Clinical"
        ↓
Bot: "Great! Do you have a preference for your provider's gender?
     Male / Female / No Preference"
        ↓
Patient jawab de
        ↓
Bot sends matched link:
  Female → {{custom_values.provider_1_calendar}}
  Male   → {{custom_values.provider_3_calendar}}
  No Pref → {{custom_values.default_calendar}}

Patient: "B" ya "Coaching"
        ↓
Bot: "Perfect! Book with our wellness team here:
     {{custom_values.coach_1_calendar}}"

RETURNING PATIENT (pehle se contact exist kare):
Bot: "Welcome back, {{contact.first_name}}!
     Book your next session here:
     {{custom_values.default_calendar}}"
```

### Bot Prompt Addition:
```
BOOKING FLOW:
When patient wants to book an appointment:
1. Ask: Clinical services OR Wellness coaching?
2. If Clinical: Ask gender preference (Male/Female/No Preference)
3. Send appropriate calendar link based on answer:
   - Clinical + Female → {{custom_values.provider_1_calendar}}
   - Clinical + Male   → {{custom_values.provider_3_calendar}}
   - Clinical + No Pref → {{custom_values.default_calendar}}
   - Coaching (any)   → {{custom_values.coach_1_calendar}}
4. If returning patient (contact already exists):
   Skip questions → Send {{custom_values.default_calendar}}
```

---

## VOICE AI UPDATE — New vs Returning Patient ⬜

**Update karo:** `GHL → AI Agents → Voice AI → Mindova Voice Assistant → Edit`

### Agent Prompt Addition:
```
BOOKING FLOW:
When caller wants to book an appointment:
1. Ask: "Are you a new patient or have you been with us before?"

NEW PATIENT:
  "I'd love to match you with the perfect provider!
   I'll send you a quick link to our matching form —
   it takes 2 minutes and we'll find your best fit.
   Can I send it to your phone number on file?"
  → Send SMS: "Complete your provider match here:
    mindovaholdings.com/get-matched — Mindova Team"

RETURNING PATIENT:
  "Welcome back! Let me book that for you right now."
  → Use Appointment Booking Action → default calendar
```

---

*Phase 6 created: 2026-05-29*
*Phase 6 updated: 2026-06-02 — Multi-conditional matching workflow, AI Bot mini-matching, Voice AI new/returning patient flow added*
*Source: Client WhatsApp task list (image: 2026-05-29 8:51 PM)*
