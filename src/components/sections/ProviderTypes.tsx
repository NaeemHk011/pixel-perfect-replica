import { SectionLabel } from "@/components/ui/SectionLabel";
import { CheckCircle2, Building2, Leaf, AlertCircle, ShieldCheck } from "lucide-react";

const clinicalProviders = [
  "LPCs (Licensed Professional Counselors)",
  "LMFTs (Licensed Marriage & Family Therapists)",
  "LCSWs (Licensed Clinical Social Workers)",
  "Psychologists",
  "Psychiatrists",
  "PMHNPs (Psychiatric Mental Health Nurse Practitioners)",
];

const wellnessProviders = [
  "Life Coaches",
  "Wellness Coaches",
  "Accountability Coaches",
  "Mentors",
  "Peer Support Specialists",
];

export function ProviderTypes({ light = true }: { light?: boolean }) {
  const bg      = light ? "bg-cream"    : "bg-dark";
  const heading = light ? "text-dark"   : "text-cream";
  const cardBg  = light ? "bg-white"    : "bg-white/[0.05]";
  const cardBorder = light ? "border-dark/[0.07]" : "border-white/10";

  return (
    <section className={`py-24 md:py-32 ${bg} relative z-10`}>
      {!light && (
        <>
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute inset-0 gold-glow opacity-50 pointer-events-none" />
        </>
      )}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">

        <div className="text-center mb-14 reveal">
          <SectionLabel light={!light}>Provider Pathways</SectionLabel>
          <h2 className={`font-serif text-4xl md:text-5xl mt-5 tracking-tight ${heading}`}>
            Two pathways,{" "}
            <em className={light ? "text-gold italic" : "text-gold3 italic"}>one network</em>
          </h2>
          <p className={`mt-4 text-sm max-w-xl mx-auto leading-relaxed ${light ? "text-muted" : "text-cream/55"}`}>
            Mindova brings together licensed clinical professionals and certified wellness coaches under one platform  - each serving a distinct and vital role in whole-person care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ── Column 1: Licensed Clinical Providers ── */}
          <div className={`reveal rounded-[28px] border ${cardBorder} ${cardBg} overflow-hidden shadow-[0_4px_24px_-8px_rgba(12,11,9,0.08)]`}>
            {/* Blue accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className={`font-serif text-lg md:text-2xl tracking-tight ${light ? "text-dark" : "text-cream"}`}>
                    Licensed Clinical Providers
                  </h3>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-blue-500 font-medium">
                    Clinical Track
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {clinicalProviders.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className={`text-sm ${light ? "text-dark/75" : "text-cream/75"}`}>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-5 border-t border-dark/[0.06] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-xs text-dark/50 tracking-wide">Licensed Clinical Professionals</span>
              </div>
            </div>
          </div>

          {/* ── Column 2: Wellness & Coaching Professionals ── */}
          <div className={`reveal rounded-[28px] border ${cardBorder} ${cardBg} overflow-hidden shadow-[0_4px_24px_-8px_rgba(12,11,9,0.08)]`} data-reveal-delay="100">
            {/* Emerald accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500" />

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className={`font-serif text-lg md:text-2xl tracking-tight ${light ? "text-dark" : "text-cream"}`}>
                    Wellness &amp; Coaching Professionals
                  </h3>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-emerald-600 font-medium">
                    Wellness Track
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {wellnessProviders.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className={`text-sm ${light ? "text-dark/75" : "text-cream/75"}`}>{p}</span>
                  </li>
                ))}
              </ul>

              {/* Non-Clinical disclaimer badge */}
              <div className="mt-7 pt-5 border-t border-dark/[0.06]">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300/60 bg-amber-50/70 text-amber-700 text-xs tracking-[0.15em] uppercase font-medium">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  Non-Clinical Wellness Professionals
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
