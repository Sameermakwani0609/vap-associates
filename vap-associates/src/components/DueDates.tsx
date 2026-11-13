"use client";

import { useEffect, useState } from "react";
import { DEADLINES } from "@/data/site";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type Row = { title: string; desc: string; ext: boolean; day: number; month: string; n: number };

export default function DueDates() {
  // Computed after mount so server and browser never disagree about "today"
  const [rows, setRows] = useState<Row[] | null>(null);

  useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const r = DEADLINES.map(([date, title, desc, flag]) => {
      const dt = new Date(date + "T00:00:00");
      return {
        title,
        desc,
        ext: flag === "ext",
        day: dt.getDate(),
        month: MONTHS[dt.getMonth()],
        n: Math.round((dt.getTime() - now.getTime()) / 864e5),
      };
    })
      .filter((o) => o.n >= 0)
      .slice(0, 6);
    setRows(r);
  }, []);

  return (
    <section id="due" style={{ background: "var(--surf)", borderBlock: "1px solid var(--line)" }}>
      <div className="wrap due">
        <div>
          <span className="eb">Compliance calendar</span>
          <h2>Never miss a filing date.</h2>
          <p className="sub">Upcoming GST, TDS and income tax deadlines, counted down from today. Extended dates are flagged.</p>
          <div className="sub2">
            <input
              type="email"
              placeholder="Email for reminders"
              aria-label="Email for reminders"
              style={{ padding: "13px 14px", borderRadius: 8, border: "1px solid var(--line)", background: "var(--bg)", color: "var(--ink)", font: "inherit" }}
            />
            <a className="btn" href="#contact">Get reminders</a>
          </div>
          <p className="fine">Always confirm on the GST and income tax portals before filing.</p>
        </div>
        <div className="dl" id="dl">
          {rows &&
            (rows.length === 0 ? (
              <p className="sub">No upcoming dates listed.</p>
            ) : (
              rows.map((o) => {
                const cls = o.ext ? "chip ext" : o.n <= 3 ? "chip hot" : "chip";
                const label = o.n === 0 ? "Due today" : o.n === 1 ? "1 day left" : `${o.n} days left`;
                return (
                  <div className="d" key={o.title + o.day + o.month}>
                    <div className="dt">
                      {o.day}
                      <small>{o.month}</small>
                    </div>
                    <div>
                      <h3>{o.title}</h3>
                      <p>{o.desc}</p>
                    </div>
                    <span className={cls}>
                      {o.ext ? "Extended · " : ""}
                      {label}
                    </span>
                  </div>
                );
              })
            ))}
        </div>
      </div>
    </section>
  );
}
