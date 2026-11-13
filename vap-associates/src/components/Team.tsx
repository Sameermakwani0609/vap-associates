import { TEAM } from "@/data/site";

export default function Team() {
  return (
    <section id="team" style={{ background: "var(--surf)", borderBlock: "1px solid var(--line)" }}>
      <div className="wrap">
        <span className="eb">Our team</span>
        <h2>The partners behind your numbers.</h2>
        <p className="sub">
          Five partners across audit, tax, GST, banking, real estate and insolvency, so your work reaches the right specialist.
        </p>
        <div className="team">
          {TEAM.map((p) => (
            <div className={p.f ? "tm f" : "tm"} key={p.name}>
              <div className="av">{p.ini}</div>
              <h3>{p.name}</h3>
              <span className="rl">{p.role}</span>
              <p>{p.bio}</p>
              <div className="chips">
                {p.chips.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
              {p.since && <span className="since">{p.since}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
