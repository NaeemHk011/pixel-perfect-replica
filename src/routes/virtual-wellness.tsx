import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/virtual-wellness")({
  component: VirtualWellnessPage,
  head: () => ({
    meta: [
      { title: "Virtual Wellness | Mindova Holdings" },
      { name: "description", content: "Access virtual behavioral health, therapy, medication management, and wellness coaching  - from anywhere." },
    ],
  }),
});

function VirtualWellnessPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F1]">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-4xl mx-auto px-5 md:px-8 py-24 text-center">
          <p className="text-xs tracking-[0.18em] uppercase text-gold2 font-medium mb-4">Virtual Care</p>
          <h1 className="font-serif text-5xl md:text-6xl text-dark mb-6 leading-tight">
            Virtual Wellness, Wherever You Are
          </h1>
          <p className="text-dark/65 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Access therapy, medication management, coaching, and wellness support  - completely virtual, compassionate, and affordable.
          </p>
          <Link
            to="/get-matched"
            className="inline-flex items-center gap-2 bg-gold2 hover:bg-gold3 text-dark font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-12px_rgba(207,168,78,0.55)]"
          >
            Get Support
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
