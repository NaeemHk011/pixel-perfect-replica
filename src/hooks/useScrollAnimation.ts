import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = parseInt(e.target.getAttribute("data-reveal-delay") ?? "0");
            if (delay > 0) {
              setTimeout(() => e.target.classList.add("is-visible"), delay);
            } else {
              e.target.classList.add("is-visible");
            }
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
