# PHASE 6  - Website Frontend Redesign & Client Requirements
**Goal:** Client ki task list (WhatsApp image 2026-05-29) ke mutabiq website ko fully restructure karo  
**Status:** ✅ COMPLETED  
**Estimated Tasks:** 14 major steps  
**Files Location:** `pixel-perfect-replica/src/`

---

## Progress Tracker

| Step | Task | Status |
|------|------|--------|
| Step 1 | Navbar Restructure | ✅ Completed |
| Step 2 | Homepage Copy & Emotional Messaging | ✅ Completed |
| Step 3 | Homepage CTA Buttons | ✅ Completed |
| Step 4 | Navigation Routes  - New Pages Add | ✅ Completed |
| Step 5 | Get Matched / Get Support Page | ✅ Completed |
| Step 6 | Patient Intake Form Update | ✅ Completed |
| Step 7 | Clinical vs Coaching  - Pages Restructure | ✅ Completed |
| Step 8 | Legal Disclaimer + Terminology Audit | ✅ Completed |
| Step 9 | Join the Network  - Recruitment Landing Page | ✅ Completed |
| Step 10 | Provider Application  - Two Separate Forms | ✅ Completed |
| Step 11 | "What Mindova Provides" Section | ✅ Completed |
| Step 12 | Provider Types Section  - Two Pathways | ✅ Completed |
| Step 13 | Healing Is A Movement  - Partner Program Section | ✅ Completed |
| Step 14 | Branding Polish & Final Review | ✅ Completed |

---

## STEP 1  - Navbar Restructure ✅

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

## STEP 2  - Homepage Copy & Emotional Messaging ✅

**File:** `src/routes/index.tsx` + `src/components/sections/Hero.tsx`

### Hero Section Update:
**Headline (new):**
> "Your Path to Healing Starts Here"
> or
> "Mental Wellness. Behavioral Health. Real Support."

**Subheadline (new):**
> "Mindova connects individuals with licensed therapists, psychiatrists, coaches, and wellness professionals  - virtually, compassionately, and affordably."

**Hero messaging pillars add karo (beneath hero):**
- Mental Wellness
- Behavioral Health
- Virtual Care
- Coaching
- Provider Infrastructure

### Emotional Messaging Words  - Throughout Homepage:
Yeh words/themes page mein naturally weave karo:
- **Healing**  - "Your healing journey starts here"
- **Support**  - "Real support when you need it most"
- **Growth**  - "Grow beyond your challenges"
- **Guidance**  - "Guided by licensed professionals"
- **Wellness**  - "Total wellness  - mind, body, spirit"
- **Connection**  - "Connected care, wherever you are"

### "Who We Are" Section (homepage mein add karo):
Visitors ko immediately samjhao:
- **Who is Mindova?**  - A virtual behavioral health platform
- **Who does Mindova help?**  - Individuals seeking therapy, coaching, psychiatric care
- **What services does Mindova offer?**  - Therapy, Medication Management, Coaching, Assessments

---

## STEP 3  - Homepage CTA Buttons ✅

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

## STEP 4  - Navigation Routes  - New Pages Add ✅

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

---

## STEP 5  - Get Matched / Get Support Page ✅

**File:** `src/routes/get-matched.tsx` (naya banana hai)

### Page Structure:

#### Hero Section:
```
Headline: "Find Your Perfect Provider"
Subheadline: "Tell us what you're looking for  - we'll match you with
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

## STEP 6  - Patient Intake Form Update ✅

**File:** `src/routes/intake.tsx` (update existing) + `src/routes/get-matched.tsx`

### Form Fields (complete list):

**Personal Info:**
- [ ] Full Name
- [ ] Age
- [ ] State of Residence
- [ ] Email Address
- [ ] Phone Number
- [ ] Preferred Communication Method (dropdown: Call / Text / Email)

**Service Interest (checkboxes  - multiple select allowed):**
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
- [ ] Language Preference (text field)
- [ ] Payment Method (Insurance / Self-Pay / Both)

**Note at bottom of form:**
> "Mindova's care coordinators will review your preferences and connect you with the best-fit provider within 24–48 hours."

### GHL Integration:
- Form submission → GHL webhook (existing webhook update karo ya naya banao)
- New custom fields in GHL: Age, Preferred Communication, Session Type, Language Preference

---

## STEP 7  - Clinical vs Coaching Pages Restructure ✅

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

## STEP 8  - Legal Disclaimer + Terminology Audit ✅

**Files:** All service pages, coaching pages, provider profiles

### Legal Disclaimer  - Coaching Pages par add karo:

```
⚠️ DISCLAIMER:
"Coaching services provided through Mindova are non-clinical in nature
and are not intended to diagnose, treat, or replace licensed mental
health care. For clinical mental health concerns, please consult with a
licensed professional."
```

### Terminology Audit  - Find & Replace:

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

## STEP 9  - Join the Network  - Recruitment Landing Page ✅

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

## STEP 10  - Provider Application  - Two Separate Forms ✅

**File:** `src/routes/provider-apply.tsx` (update existing)

### Form Redesign  - Two Tabs / Two Paths:

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
- [ ] Certifications (text  - e.g., ICF, ACE, etc.)
- [ ] Focus Areas (checkboxes  - multiple)
- [ ] Years of Experience (dropdown)
- [ ] Brief Bio (textarea)

### GHL Integration:
- Licensed form → GHL "Provider Application (Clinical)" workflow
- Coaching form → GHL "Provider Application (Coaching)" workflow
- Resume Upload → GHL file attachment field

---

## STEP 11  - "What Mindova Provides" Section ✅

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

## STEP 12  - Provider Types Section  - Two Pathways ✅

**File:** `src/components/sections/ProviderTypes.tsx` (naya component)
**Use in:** `src/routes/providers.tsx` + `src/routes/join-the-network.tsx`

### Two-Column Layout:

**Column 1  - Licensed Clinical Providers:**
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

**Column 2  - Wellness & Coaching Professionals:**
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

## STEP 13  - Healing Is A Movement  - Partner Program Section ⬜

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

**Bottom CTA:**
```
[BECOME A PREFERRED PARTNER]  →  /partnerships
```

**Ferguson Foundation Logo/Badge**  - bottom right corner

---

## STEP 14  - Branding Polish & Final Review ⬜

**Files:** Multiple  - global styles + individual components

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
- [ ] **Provider Highlights**  - Featured provider spotlight cards
- [ ] **Team Messaging**  - "Our clinical team is here for you"
- [ ] **Partnerships**  - Insurance partners, Ferguson Foundation, community orgs
- [ ] **Wellness Mission**  - Mindova's mission statement prominently displayed

### Final Review Checklist (before delivery):
- [ ] Patients clearly understand service offerings
- [ ] Providers clearly understand how to join platform
- [ ] Coaching and therapy are clearly separated
- [ ] Website explains what Mindova does (not just a directory)
- [ ] Mindova describes itself appropriately throughout
- [ ] Overall user-experience is welcoming and supportive
- [ ] "Unlicensed therapist" removed from all pages
- [ ] Legal disclaimer present on all coaching pages
- [ ] All forms collect required information
- [ ] Navigation is logical and user-friendly
- [ ] Mobile responsive on all new pages
- [ ] All new routes properly linked in TanStack Router

---

## EXECUTION ORDER (Recommended)

```
Week 1:
  Step 1  → Navbar
  Step 2  → Homepage Copy
  Step 3  → Homepage CTAs
  Step 4  → New Routes Setup

Week 2:
  Step 5  → Get Matched Page
  Step 6  → Intake Form Update
  Step 7  → Clinical vs Coaching Pages

Week 3:
  Step 8  → Legal Disclaimer Audit
  Step 9  → Join the Network Page
  Step 10 → Provider Forms (Two Paths)

Week 4:
  Step 11 → What Mindova Provides Section
  Step 12 → Provider Types Section
  Step 13 → Healing Is A Movement Section
  Step 14 → Branding Polish + Final Review
```

---

## GHL UPDATES REQUIRED (Alongside Website)

| GHL Task | For Which Step |
|----------|---------------|
| Add new custom fields: Age, Session Type, Language Preference, Preferred Communication | Step 6 |
| Create "Provider Application (Coaching)" workflow | Step 10 |
| Update knowledge base with Clinical vs Coaching distinction | Step 7 |
| Add Coaching legal disclaimer to AI bot responses | Step 8 |
| Update intake form in GHL to match new fields | Step 6 |

---

*Phase 6 created: 2026-05-29*  
*Source: Client WhatsApp task list (image: 2026-05-29 8:51 PM)*
