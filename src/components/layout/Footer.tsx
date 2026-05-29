import { Link } from "@tanstack/react-router";
import { Mail, Phone, Clock, MapPin, Linkedin, Twitter, Instagram, Facebook, ShieldCheck, Award } from "lucide-react";
import logoFull from "@/assets/mindova-logo-full.png";

const socialLinks = [
  { icon: Linkedin,  href: "#", label: "LinkedIn"  },
  { icon: Twitter,   href: "#", label: "Twitter"   },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook,  href: "#", label: "Facebook"  },
];

export function Footer() {
  return (
    <footer className="bg-dark2 text-cream/80 relative z-10">
      {/* Top gold accent line */}
      <div
        className="h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #B89040 20%, #E4C06A 50%, #CFA84E 80%, transparent 100%)" }}
      />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-12 grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* ── Brand column (spans 4 of 12) ── */}
        <div className="md:col-span-4">
          <img src={logoFull} alt="Mindova Holdings" className="h-16 object-contain" loading="lazy" decoding="async" />

          <p className="mt-4 text-sm text-gold2 font-serif italic">Infrastructure for Growth &amp; Healing</p>
          <p className="mt-2 text-sm text-cream/50 max-w-xs leading-relaxed">
            A behavioral health platform connecting therapy, psychiatry, peptide wellness, and community care       built around your life.
          </p>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/8 text-[10px] tracking-[0.18em] text-emerald-400 uppercase">
              <ShieldCheck className="w-3 h-3" />
              HIPAA Compliant
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold2/30 bg-gold2/8 text-[10px] tracking-[0.18em] text-gold2 uppercase">
              <Award className="w-3 h-3" />
              Board Certified
            </div>
          </div>

          {/* Contact info */}
          <ul className="mt-6 space-y-2.5">
            {[
              { icon: Mail,    text: "care@mindovaholdings.com", href: "mailto:care@mindovaholdings.com" },
              { icon: Phone,   text: "(888) 000-0000",           href: "tel:+18880000000"                },
              { icon: Clock,   text: "Mon–Fri, 8am–8pm EST",     href: null                             },
              { icon: MapPin,  text: "All 50 States       Virtual",  href: null                             },
            ].map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-center gap-2.5 text-sm text-cream/55">
                <Icon className="w-3.5 h-3.5 text-gold2/70 flex-shrink-0" />
                {href ? (
                  <a href={href} className="hover:text-gold3 transition-colors duration-200">{text}</a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>

          {/* Social links */}
          <div className="mt-6 flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-cream/50 hover:text-gold3 hover:border-gold2/40 hover:bg-gold2/10 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              to="/get-matched"
              className="inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-12px_rgba(207,168,78,0.55)]"
            >
              Get Support
            </Link>
            <Link
              to="/join-the-network"
              className="inline-flex items-center gap-2 border border-cream/20 text-cream hover:text-gold3 hover:border-gold2/40 font-medium px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Join the Network
            </Link>
          </div>
        </div>

        {/* ── Nav columns (spans 8 of 12, split into 4×2) ── */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <FooterCol
            title="Services"
            links={[
              ["/services/mental-health",            "Mental Health"],
              ["/services/peptide-wellness",          "Peptide & Wellness"],
              ["/services/virtual-behavioral-health", "Virtual Behavioral"],
              ["/services/coaching-development",      "Coaching & Dev"],
              ["/services/provider-partnerships",     "Provider Partners"],
              ["/services/healthcare-consulting",     "Healthcare Consulting"],
              ["/services/therapy",                   "Telehealth Therapy"],
              ["/services/medication-management",     "Medication Mgmt"],
              ["/services/iop",                       "Intensive Outpatient"],
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              ["/community",         "About Us"],
              ["/providers",         "Our Providers"],
              ["/partnerships",      "Partnerships"],
              ["/contact",           "Contact Us"],
              ["/join-the-network",  "Join the Network"],
            ]}
          />
          <FooterCol
            title="Patients"
            links={[
              ["/get-matched", "Get Support"],
              ["/get-matched", "Get Matched"],
              ["/intake",      "Patient Intake Form"],
              ["/services",    "View All Services"],
              ["/providers",   "Find a Provider"],
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              ["#privacy",       "Privacy Policy"],
              ["#terms",         "Terms of Service"],
              ["#hipaa",         "HIPAA Notice"],
              ["#accessibility", "Accessibility"],
              ["#cookies",       "Cookie Policy"],
              ["#sitemap",       "Sitemap"],
            ]}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="border-t border-white/8" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/35">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Mindova Holdings, LLC. All rights reserved.</p>
          <span className="hidden sm:block text-cream/15">·</span>
          <p>Licensed in all 50 states. Telehealth services provided by licensed clinicians.</p>
        </div>
        <div className="flex items-center gap-5 flex-wrap justify-center">
          <a href="#privacy" className="hover:text-gold2 transition-colors duration-200">Privacy</a>
          <a href="#terms"   className="hover:text-gold2 transition-colors duration-200">Terms</a>
          <a href="#hipaa"   className="hover:text-gold2 transition-colors duration-200">HIPAA</a>
          <span className="text-cream/15">·</span>
          <a
            href="https://axistechgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold2 transition-colors duration-200"
          >
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-[10px] tracking-[0.28em] text-gold2 uppercase font-medium mb-4">{title}</h4>
      <ul className="space-y-2.5 text-[13px]">
        {links.map(([to, label]) => (
          <li key={label}>
            {to.startsWith("#") ? (
              <a href={to} className="text-cream/55 hover:text-gold3 transition-colors duration-200">
                {label}
              </a>
            ) : (
              <Link to={to as any} className="text-cream/55 hover:text-gold3 transition-colors duration-200">
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
