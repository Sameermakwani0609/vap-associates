"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_HELLO_URL } from "@/data/site";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const f = () => setShowTop(window.scrollY > 700);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <>
      <a className="fab" href={WHATSAPP_HELLO_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.2.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4z" />
        </svg>
        <span>Chat with us</span>
      </a>
      <button
        className={showTop ? "top on" : "top"}
        id="tp"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}
