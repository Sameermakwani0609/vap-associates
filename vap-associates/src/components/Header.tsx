"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { EMAIL, NAV, PHONE_DISPLAY } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
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

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = window.localStorage.getItem("vap-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      root.dataset.theme = savedTheme;
      setTheme(savedTheme);
      return;
    }

    delete root.dataset.theme;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const syncTheme = () => setTheme(systemTheme.matches ? "dark" : "light");
    syncTheme();
    systemTheme.addEventListener("change", syncTheme);
    return () => systemTheme.removeEventListener("change", syncTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("vap-theme", nextTheme);
    setTheme(nextTheme);
  };

  // Sliding pill indicator behind the nav links
  const moveTo = useCallback((a: HTMLElement | null) => {
    if (!a || window.matchMedia("(max-width:1020px)").matches) {
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
            {PHONE_DISPLAY} &nbsp;|&nbsp; <span translate="no">{EMAIL}</span>
          </span>
        </div>
      </div>
      <div className="wrap header-bar">
        <Logo />
        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
              </svg>
            )}
          </button>
          <button
            className="mb"
            id="mb"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nv"
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>
        </div>
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
