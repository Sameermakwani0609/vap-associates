"use client";

import { useState } from "react";
import { SERVICES } from "@/data/site";

export default function Services() {
  const [si, setSi] = useState(0);
  const x = SERVICES[si];

  return (
    <section id="services">
      <div className="wrap">
        <span className="eb">Our services</span>
        <h2>Expertise for everyday needs. Depth for complex matters.</h2>
        <p className="sub">Start with the service you need. Explore the scope, approach and work involved.</p>
        <div className="sv">
          <div className="svl" id="svl" role="tablist" aria-label="Services">
            {SERVICES.map((s, i) => (
              <button key={s.k} role="tab" aria-selected={i === si} onClick={() => setSi(i)}>
                <i>0{i + 1}</i>
                <span>
                  {s.k}
                  {s.n !== s.k && <small>{s.n}</small>}
                </span>
              </button>
            ))}
          </div>
          <div className="svp" id="svp" role="tabpanel">
            <div className="pin" key={si}>
              <h3>{x.n}</h3>
              <p className="pd">{x.d}</p>
              <div className="pc">
                <div>
                  <h4>Scope</h4>
                  <ul>{x.sc.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
                <div>
                  <h4>Approach</h4>
                  <p>{x.ap}</p>
                </div>
                <div>
                  <h4>Work involved</h4>
                  <ul>{x.wk.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              </div>
              <a className="btn" href="#contact">Discuss this service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
