import { GST_CARDS } from "@/data/site";

export default function Gst() {
  return (
    <section id="gst">
      <div className="wrap">
        <span className="eb">Goods &amp; Services Tax</span>
        <h2>Goods and Services Tax, handled end to end.</h2>
        <p className="sub">
          Here is everything about GST: getting registered, filing on time and closing your returns with every credit matched.
        </p>
        <div className="gst">
          {GST_CARDS.map((c) => (
            <div className="gc" key={c.n}>
              <i>{c.n}</i>
              <h3>{c.t}</h3>
              <p>{c.p}</p>
              <ul>
                {c.li.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="cta" style={{ marginTop: 30 }}>
          <a className="btn" href="#contact">Talk to our GST team</a>
          <a className="btn alt" href="#updates">Read GST updates</a>
        </div>
      </div>
    </section>
  );
}
