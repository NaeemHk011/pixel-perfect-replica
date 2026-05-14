import { Link } from "@tanstack/react-router";
import mark from "@/assets/mindova-mark.png";

export function Footer() {
  return (
    <footer className="bg-dark2 text-cream/80 pt-20 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={mark} alt="Mindova" className="h-10 w-10 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg tracking-[0.2em] text-cream">MINDOVA</span>
              <span className="text-[10px] tracking-[0.32em] text-gold2 mt-1">HOLDINGS</span>
            </div>
          </div>
          <p className="mt-5 text-sm text-gold2 font-serif italic">Infrastructure for Growth & Healing</p>
          <p className="mt-3 text-sm text-cream/60 max-w-xs">
            A behavioral health platform built for people — connecting therapy, psychiatry, and community wellness in one seamless experience.
          </p>
        </div>

        <FooterCol title="Services" links={[
          ["/services", "Telehealth Therapy"],
          ["/services", "Psychiatric Care"],
          ["/services", "Wellness Programs"],
          ["/community", "Community Outreach"],
        ]} />
        <FooterCol title="Company" links={[
          ["/community", "About Us"],
          ["/providers", "Our Providers"],
          ["/partnerships", "Partnerships"],
          ["/community", "Change Log"],
        ]} />
        <FooterCol title="Support" links={[
          ["/booking", "Book Appointment"],
          ["/services", "Insurance Info"],
          ["/booking", "Patient Portal"],
          ["/partnerships", "Contact Us"],
        ]} />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/50">
        <p>© {new Date().getFullYear()} Mindova Holdings. All rights reserved.</p>
        <span className="px-4 py-1.5 rounded-full border border-gold2/40 text-gold2 tracking-wider">
          HIPAA · COMPLIANT PLATFORM
        </span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-xs tracking-[0.24em] text-gold2 uppercase font-sans font-medium mb-5">{title}</h4>
      <ul className="space-y-3 text-sm">
        {links.map(([to, label]) => (
          <li key={label}>
            <Link to={to} className="hover:text-gold3 transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
