"use client";

import { useState } from "react";
import { EMAIL, MAIL_URL, PHONE, PHONE_DISPLAY, WHATSAPP_HELLO_URL } from "@/data/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [service, setService] = useState("Income tax");
  const [msg, setMsg] = useState("");

  const send = () => {
    const n = name.trim();
    const e = email.trim();
    const ph = mobile.replace(/\D/g, "");
    if (!n || e.indexOf("@") < 1 || ph.length < 10) {
      setMsg("Enter your name, a valid email and a 10-digit mobile number.");
      return;
    }
    const text = `Hello VAP & Associates, I am ${n}. I would like to talk about ${service}. Mobile: ${ph}. Email: ${e}.`;
    window.open(`https://web.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setMsg("Thank you. WhatsApp is opening with your message. Press send to reach a partner.");
  };

  return (
    <section id="contact-us" style={{ background: "var(--surf)", borderTop: "1px solid var(--line)" }}>
      <div className="wrap cu">
        <div>
          <span className="eb">Contact &amp; offices</span>
          <h2>Let’s talk about your numbers.</h2>
          <p className="sub">Tell us what you need. A partner will get back to you within one working day.</p>
          <div className="cl">
            <a href={WHATSAPP_HELLO_URL} target="_blank" rel="noopener noreferrer">
              <small>Call or WhatsApp</small>
              <b>{PHONE_DISPLAY}</b>
            </a>
            <a href={MAIL_URL} target="_blank" rel="noopener noreferrer">
              <small>Email</small>
              <b>{EMAIL}</b>
            </a>
          </div>
          <div className="of">
            <div><b>Amravati</b><small>Head office · since 2014</small></div>
            <div><b>Raipur</b><small>Since 2022</small></div>
            <div><b>Nagpur</b><small>Since 2026</small></div>
          </div>
        </div>
        <div className="contact" id="contact">
          <h3>Talk to a partner</h3>
          <input type="text" placeholder="Your name" aria-label="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email address" aria-label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" placeholder="Mobile number" aria-label="Mobile number" inputMode="tel" autoComplete="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          <select aria-label="Service" value={service} onChange={(e) => setService(e.target.value)}>
            <option>Income tax</option>
            <option>GST</option>
            <option>Audit</option>
            <option>Company law</option>
            <option>Virtual CFO</option>
          </select>
          <button className="btn" onClick={send}>Request a call</button>
          <div className="toast" role="status">{msg}</div>
        </div>
      </div>
    </section>
  );
}
