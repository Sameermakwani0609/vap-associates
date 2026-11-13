"use client";

import { useState } from "react";
import { UPDATES, UPDATE_TABS } from "@/data/site";

export default function Updates() {
  const [cur, setCur] = useState("All");
  const list = UPDATES.filter((u) => cur === "All" || u.c === cur);

  return (
    <section id="updates">
      <div className="wrap">
        <span className="eb">News &amp; updates</span>
        <h2>What changed this week, in plain English.</h2>
        <p className="sub">Key GST, income tax and company law updates, summarised in plain English.</p>
        <div className="tabs" id="tabs" role="group" aria-label="Filter updates">
          {UPDATE_TABS.map((t) => (
            <button key={t} aria-pressed={t === cur} onClick={() => setCur(t)}>
              {t}
            </button>
          ))}
        </div>
        <div className="feed" id="feed">
          {list.map((u) => (
            <article className="news" key={u.t}>
              <div className="meta">
                <span className={u.cls ? `tag ${u.cls}` : "tag"}>{u.c}</span>
                <span>{u.d}</span>
              </div>
              <h3>{u.t}</h3>
              <p>{u.s}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
