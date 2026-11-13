import { STEPS } from "@/data/site";

export default function Process() {
  return (
    <section className="dark" id="process">
      <div className="wrap">
        <span className="eb">How we work</span>
        <h2>Onboarded in a week. Calm every month after.</h2>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.t}>
              <h3>{s.t}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
