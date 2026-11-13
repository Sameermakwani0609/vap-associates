"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { EMAIL, NAV, PHONE_DISPLAY } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [ind, setInd] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Scroll: shrink header, progress bar, highlight current section
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => (y > 40 ? true : y < 10 ? false : prev));
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${h > 0 ? Math.min(y / h, 1) : 0})`;
      }
      let cur: string | null = null;
      NAV.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetParent && el.getBoundingClientRect().top <= 150)
          cur = id;
      });
      setActive(cur);
    };
    const onHash = () => setTimeout(onScroll, 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  // Escape closes the mobile menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Sliding pill indicator behind the nav links
  const moveTo = useCallback((a: HTMLElement | null) => {
    if (!a || window.matchMedia("(max-width:960px)").matches) {
      setInd((p) => ({ ...p, opacity: 0 }));
      return;
    }
    setInd({ left: a.offsetLeft, width: a.offsetWidth, opacity: 1 });
  }, []);

  const rest = useCallback(() => {
    moveTo(navRef.current?.querySelector<HTMLElement>("a.act") ?? null);
  }, [moveTo]);

  useEffect(() => {
    rest();
  }, [active, rest]);

  useEffect(() => {
    window.addEventListener("resize", rest);
    return () => window.removeEventListener("resize", rest);
  }, [rest]);

  return (
    <header id="hd" className={scrolled ? "scrolled" : undefined}>
      <div className="topstrip">
        <div className="wrap">
          <span>ICAI Firm Reg. No. 138722W</span>
          <span>Amravati &nbsp;·&nbsp; Nagpur &nbsp;·&nbsp; Raipur</span>
          <span>
            {PHONE_DISPLAY} &nbsp;|&nbsp; {EMAIL}
          </span>
        </div>
      </div>
      <div className="wrap bar">
        <Logo />
        <button
          className="mb"
          id="mb"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nv"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          id="nv"
          ref={navRef}
          className={open ? "open" : undefined}
          aria-label="Main"
          onMouseLeave={rest}
          onBlur={rest}
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          <span className="ind" style={ind} />
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "act" : undefined}
              onMouseEnter={(e) => moveTo(e.currentTarget)}
              onFocus={(e) => moveTo(e.currentTarget)}
            >
              {label}
            </a>
          ))}
          <a className="btn" href="#contact">
            Book a call <span>→</span>
          </a>
        </nav>
      </div>
      <div className="prog" id="pg" ref={progressRef}></div>
    </header>
  );
}
