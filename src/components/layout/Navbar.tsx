import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import mark from "@/assets/mindova-mark.png";

const links = [
  { to: "/services", label: "Services" },
  { to: "/community", label: "About" },
  { to: "/providers", label: "Our Doctors" },
  { to: "/partnerships", label: "Partnerships" },
] as const;

export function Navbar({ onDark = false }: { onDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (r) => r.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = onDark && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent" : "bg-[rgba(249,246,241,0.85)] backdrop-blur-xl border-b border-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={mark} alt="Mindova" className="h-9 w-9 object-contain" />
          <div className="hidden sm:flex flex-col leading-none">
            <span className={`font-serif text-lg tracking-[0.2em] ${transparent ? "text-cream" : "text-dark"}`}>MINDOVA</span>
            <span className="text-[10px] tracking-[0.32em] text-gold2 mt-1">HOLDINGS</span>
          </div>
        </Link>

        <nav className="hidden md:flex justify-center">
          <div className="flex items-center gap-1 bg-dark text-cream rounded-full px-2 py-1.5 border border-white/5">
            {links.map((l) => {
              const active = path === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    active ? "bg-white/10 text-cream" : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="hidden md:flex justify-end">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-6 py-2.5 rounded-full text-sm transition-colors shadow-[0_8px_24px_-12px_rgba(207,168,78,0.6)]"
          >
            Contact
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className={`md:hidden justify-self-end p-2 rounded-full ${transparent ? "text-cream" : "text-dark"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-20 bg-dark text-cream flex flex-col p-8 gap-6 z-50">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-2xl font-serif">
              {l.label}
            </Link>
          ))}
          <Link to="/booking" onClick={() => setOpen(false)} className="mt-4 bg-gold2 text-dark px-6 py-3 rounded-full text-center font-medium">
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
