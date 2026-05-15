import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import mark from "@/assets/mindova-mark.png";

const links = [
  { to: "/community", label: "About" },
  { to: "/providers", label: "Our Doctors" },
  { to: "/partnerships", label: "Partnerships" },
] as const;

const serviceDropdownLinks = [
  { to: "/services/therapy", label: "Therapy" },
  { to: "/services/medication-management", label: "Medication Management" },
  { to: "/services/iop", label: "IOP" },
] as const;

export function Navbar({ onDark = false }: { onDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const path = useRouterState({ select: (r) => r.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const transparent = onDark && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-[rgba(249,246,241,0.88)] backdrop-blur-xl border-b border-black/5 shadow-[0_1px_24px_-8px_rgba(12,11,9,0.08)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={mark} alt="Mindova" className="h-9 w-9 object-contain" />
          <div className="hidden min-[850px]:flex flex-col leading-none">
            <span className={`font-serif text-lg tracking-[0.2em] transition-colors ${transparent ? "text-cream" : "text-dark"}`}>
              MINDOVA
            </span>
            <span className="text-[10px] tracking-[0.32em] text-gold2 mt-1">HOLDINGS</span>
          </div>
        </Link>

        {/* Desktop nav pill */}
        <nav className="hidden md:flex justify-center">
          <div className="flex items-center gap-0.5 bg-dark text-cream rounded-full px-2 py-1.5 border border-white/5 shadow-[0_4px_16px_-8px_rgba(12,11,9,0.4)]">
            {/* Services dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-full text-sm transition-all duration-200 flex items-center gap-1 ${
                  path.startsWith("/services")
                    ? "bg-gold2/20 text-gold3 font-medium"
                    : "text-cream/65 hover:text-cream hover:bg-white/5"
                }`}
              >
                Services <ChevronDown className="w-3 h-3" />
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-xl border border-black/5 shadow-[0_8px_32px_-8px_rgba(12,11,9,0.18)] overflow-hidden transition-all duration-200 ${
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <Link
                  to="/services"
                  onClick={() => setServicesOpen(false)}
                  className="flex items-center px-5 py-3 text-sm text-dark hover:bg-cream hover:shadow-[inset_3px_0_0_0_#B89040] transition-all duration-150 border-b border-black/5"
                >
                  All Services
                </Link>
                {serviceDropdownLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center px-5 py-3 text-sm text-dark hover:bg-cream hover:shadow-[inset_3px_0_0_0_#B89040] transition-all duration-150"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {links.map((l) => {
              const active = path === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                    active
                      ? "bg-gold2/20 text-gold3 font-medium"
                      : "text-cream/65 hover:text-cream hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex justify-end">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-12px_rgba(207,168,78,0.55)]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className={`md:hidden justify-self-end p-2 rounded-full transition-colors ${
            transparent ? "text-cream" : "text-dark"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-20 bg-dark text-cream flex flex-col p-8 gap-6 z-50 overflow-y-auto">
          <div className="absolute inset-0 gold-glow opacity-50 pointer-events-none" />
          {/* Services group */}
          <div className="relative">
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className={`text-2xl font-serif transition-colors block ${path.startsWith("/services") ? "text-gold3" : "text-cream"}`}
            >
              Services
            </Link>
            <div className="mt-3 ml-4 flex flex-col gap-2 border-l border-gold/20 pl-4">
              {serviceDropdownLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="text-sm text-cream/70 hover:text-gold3 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          {links.map((l) => {
            const active = path === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`text-2xl font-serif transition-colors ${active ? "text-gold3" : "text-cream"}`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/booking"
            onClick={() => setOpen(false)}
            className="mt-4 bg-gold2 text-dark px-6 py-3 rounded-full text-center font-medium hover:bg-gold3 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
