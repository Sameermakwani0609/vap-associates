"use client";

import { useState } from "react";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

type Slab = [number, number][];

function slab(t: number, s: Slab) {
  let tax = 0;
  let p = 0;
  for (const [u, r] of s) {
    if (t > p) tax += (Math.min(t, u) - p) * r;
    p = u;
  }
  return tax;
}

function newTax(i: number) {
  const t = Math.max(0, i - 75000);
  if (t <= 1200000) return 0;
  return (
    slab(t, [[400000, 0], [800000, 0.05], [1200000, 0.1], [1600000, 0.15], [2000000, 0.2], [2400000, 0.25], [Infinity, 0.3]]) * 1.04
  );
}

function oldTax(i: number, d: number) {
  const t = Math.max(0, i - 50000 - d);
  if (t <= 500000) return 0;
  return slab(t, [[250000, 0], [500000, 0.05], [1000000, 0.2], [Infinity, 0.3]]) * 1.04;
}

export default function TaxCalc() {
  const [inc, setInc] = useState(1500000);
  const [ded, setDed] = useState(200000);

  const a = newTax(inc);
  const b = oldTax(inc, ded);
  const m = Math.max(a, b, 1);
  const diff = Math.abs(a - b);

  return (
    <div className="slip" aria-label="Tax regime calculator">
      <h3>Which tax regime saves you more?</h3>
      <small>Salaried individual · FY 2025–26</small>

      <label className="row" htmlFor="inc">
        Annual salary <output id="oi">{fmt(inc)}</output>
      </label>
      <input id="inc" type="range" min={300000} max={5000000} step={50000} value={inc} onChange={(e) => setInc(+e.target.value)} />

      <label className="row" htmlFor="ded">
        Deductions (80C, 80D, HRA…) <output id="od">{fmt(ded)}</output>
      </label>
      <input id="ded" type="range" min={0} max={600000} step={10000} value={ded} onChange={(e) => setDed(+e.target.value)} />

      <div className="bars">
        <div className={"bar" + (a <= b ? " win" : "")}>
          <div style={{ width: Math.max((a / m) * 100, 3) + "%" }}></div>
          <span>
            <b>New regime</b>
            <b>{fmt(a)}</b>
          </span>
        </div>
        <div className={"bar" + (b < a ? " win" : "")}>
          <div style={{ width: Math.max((b / m) * 100, 3) + "%" }}></div>
          <span>
            <b>Old regime</b>
            <b>{fmt(b)}</b>
          </span>
        </div>
      </div>

      <p className="verdict">
        {diff < 1 ? (
          "Both regimes cost the same."
        ) : (
          <>
            The <em>{a <= b ? "new" : "old"} regime</em> saves you {fmt(diff)} a year.
          </>
        )}
      </p>
      <p className="fine">Illustrative estimate incl. 4% cess; excludes surcharge. Not tax advice.</p>
    </div>
  );
}
