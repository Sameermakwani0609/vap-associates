import { OFFICE_CARDS, TIMELINE } from "@/data/site";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <span className="eb">About us</span>
        <div className="story">
          <h2>Three cities. One standard of care.</h2>
          <div>
            <p className="sub">
              Founded in Amravati by CA Anil Patel and CA Vipul Patel, our firm has grown through new offices, an additional partner and broader professional capabilities. We work with clients from villages, small towns and cities, bringing the same care to a local business’s accounts and an institution’s detailed review. VAP &amp; Associates provides chartered accounting services such as company formation, statutory registration and bookkeeping.
            </p>
          </div>
        </div>
        <div className="tl">
          {TIMELINE.map((m) => (
            <div className="ms" key={m.y}>
              <b>{m.y}</b>
              <h3>{m.t}</h3>
              <p>{m.p}</p>
            </div>
          ))}
        </div>
        <div className="offs">
          {OFFICE_CARDS.map((o) => (
            <div className="off" key={o.city}>
              <span className={o.cls ? `tag ${o.cls}` : "tag"}>{o.tag}</span>
              <h3>{o.city}</h3>
              <p>{o.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
