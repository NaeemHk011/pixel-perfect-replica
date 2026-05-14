import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function GoldButton({ to, children, className = "" }: { to: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-medium px-6 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5 shadow-[0_12px_30px_-12px_rgba(207,168,78,0.6)] ${className}`}
    >
      {children} <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

export function GhostButton({ to, children, light = false, className = "" }: { to: string; children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border transition-all hover:-translate-y-0.5 ${
        light ? "border-cream/20 text-cream hover:bg-white/5" : "border-dark/15 text-dark hover:bg-dark hover:text-cream"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

export function FancyHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight ${className}`}>{children}</h2>;
}
