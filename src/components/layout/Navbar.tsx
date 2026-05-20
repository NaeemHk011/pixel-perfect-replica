import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, Brain, Zap, Video, Target, Users, Building2 } from "lucide-react";
import logoFull from "@/assets/mindova-logo-full.png";

const links = [
  { to: "/community",    label: "About"        },
  { to: "/providers",    label: "Our Doctors"   },
  { to: "/partnerships", label: "Partnerships"  },
  { to: "/contact",      label: "Contact"       },
] as const;

const serviceCategories = [
  { id: "mental-health",            icon: Brain,      label: "Mental Health Services",          color: "text-blue-500",    bg: "bg-blue-50" },
  { id: "peptide-wellness",         icon: Zap,        label: "Peptide & Wellness Optimization",  color: "text-emerald-600", bg: "bg-emerald-50" },
  { id: "virtual-behavioral-health",icon: Video,      label: "Virtual Behavioral Health",        color: "text-violet-600",  bg: "bg-violet-50" },
  { id: "coaching-development",     icon: Target,     label: "Coaching & Personal Development",  color: "text-orange-500",  bg: "bg-orange-50" },
  { id: "provider-partnerships",    icon: Users,      label: "Provider Partnerships",            color: "text-rose-500",    bg: "bg-rose-50" },
  { id: "healthcare-consulting",    icon: Building2,  label: "Healthcare Consulting",            color: "text-amber-700",   bg: "bg-amber-50" },
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

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const transparent = onDark && !scrolled;

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-[rgba(249,246,241,0.88)] backdrop-blur-xl shadow-[0_1px_24px_-8px_rgba(12,11,9,0.08)]"
      }`}
    >
      <div className="relative z-[1] max-w-7xl mx-auto px-5 md:px-8 h-20 lg:h-24 grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img src={logoFull} alt="Mindova Holdings" className="h-12 md:h-14 lg:h-20 object-contain" />
        </Link>

        {/* Desktop nav pill — lg and above only */}
        <nav className="hidden lg:flex justify-center">
          <div className="flex items-center gap-0.5 bg-dark text-cream rounded-full px-2 py-1.5 border border-white/5 shadow-[0_4px_16px_-8px_rgba(12,11,9,0.4)]">

            {/* Services mega-dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onPointerEnter={(e) => { if (e.pointerType === "mouse") setServicesOpen(true); }}
              onPointerLeave={(e) => { if (e.pointerType === "mouse") setServicesOpen(false); }}
            >
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-200 flex items-center gap-1 ${
                  path.startsWith("/services")
                    ? "bg-gold2/20 text-gold3 font-medium"
                    : "text-cream/65 hover:text-cream hover:bg-white/5"
                }`}
              >
                Services <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Invisible bridge to prevent gap-triggered close */}
              <div className="absolute top-full left-0 h-3 w-[480px]" />

              {/* Mega-dropdown panel */}
              <div
                className={`absolute top-full left-0 mt-3 w-[480px] bg-white rounded-2xl border border-black/5 shadow-[0_12px_40px_-12px_rgba(12,11,9,0.2)] overflow-hidden transition-all duration-200 ${
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                {/* Header row */}
                <Link
                  to="/services"
                  onClick={() => setServicesOpen(false)}
                  className="flex items-center justify-between px-5 py-3.5 bg-dark text-cream hover:bg-dark/90 transition-colors duration-150"
                >
                  <span className="text-sm font-medium">All Services</span>
                  <span className="text-xs text-gold2 tracking-[0.15em] uppercase">View All →</span>
                </Link>

                {/* 2-column category grid */}
                <div className="grid grid-cols-2 gap-px bg-black/5">
                  {serviceCategories.map(({ id, icon: Icon, label, color, bg }) => (
                    <Link
                      key={id}
                      to={`/services/${id}`}
                      onClick={() => setServicesOpen(false)}
                      className={`group flex items-center gap-3 px-4 py-3.5 bg-white hover:${bg} transition-colors duration-150`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${bg}`}>
                        <Icon className={`w-3.5 h-3.5 ${color}`} />
                      </div>
                      <span className={`text-xs font-medium text-dark/80 group-hover:${color} transition-colors duration-150 leading-tight`}>
                        {label}
                      </span>
                    </Link>
                  ))}
                </div>
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

        {/* CTA — lg and above only */}
        <div className="hidden lg:flex justify-end">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-12px_rgba(207,168,78,0.55)]"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Hamburger — shown below lg (mobile + tablets including iPad mini) */}
        <button
          aria-label="Toggle menu"
          className={`lg:hidden justify-self-end p-2 rounded-full transition-colors ${
            transparent ? "text-cream" : "text-dark"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Golden shimmer border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, transparent 0%, #CFA84E 30%, #E4C06A 50%, #CFA84E 70%, transparent 100%)" }}
        />
        <div
          className="absolute inset-y-0 w-[30%] animate-nav-shimmer"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(245,228,168,0.95) 50%, transparent 100%)" }}
        />
      </div>

    </header>

    {/* Mobile/tablet menu — rendered OUTSIDE <header> to avoid backdrop-filter containment */}
    {open && (
      <div className="lg:hidden fixed inset-x-0 top-20 md:top-20 bottom-0 bg-dark text-cream flex flex-col p-8 gap-6 z-[60] overflow-y-auto">
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
          <div className="mt-4 ml-4 flex flex-col gap-1 border-l border-gold/20 pl-4">
            {serviceCategories.map(({ id, icon: Icon, label, color, bg }) => (
              <Link
                key={id}
                to={`/services/${id}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 py-1.5 text-sm text-cream/70 hover:text-gold3 transition-colors"
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 opacity-70 ${bg}`}>
                  <Icon className={`w-3 h-3 ${color}`} />
                </div>
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
          Book a Consultation
        </Link>
      </div>
    )}
    </>
  );
}
