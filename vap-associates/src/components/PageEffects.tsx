"use client";

import { useEffect } from "react";

const REVEAL = ".news,.d,.entry,.step,.art,.contact,h2,.ms,.off,.pp,.gc,.post,.tm";

/** Scroll-reveal animation + #hash routing for the blog-post view. Renders nothing. */
export default function PageEffects() {
  // Fade-in on scroll (skipped for reduced-motion users)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion:reduce)").matches || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = () => {
      document.querySelectorAll(REVEAL).forEach((el) => {
        if (!el.classList.contains("in")) {
          el.classList.add("rv");
          io.observe(el);
        }
      });
    };

    observe();
    // pick up elements React adds later (tab filters, due dates, service panels)
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  // "#post-icai-2022" shows the article on its own; any other hash scrolls to its section
  useEffect(() => {
    const route = () => {
      const h = location.hash;
      const isPost = h === "#post-icai-2022";
      document.documentElement.classList.toggle("postmode", isPost);
      if (isPost) {
        window.scrollTo(0, 0);
      } else if (h.length > 1) {
        const el = document.getElementById(h.slice(1));
        if (el) setTimeout(() => el.scrollIntoView(), 0);
      }
    };
    route();
    window.addEventListener("hashchange", route);
    return () => window.removeEventListener("hashchange", route);
  }, []);

  return null;
}
