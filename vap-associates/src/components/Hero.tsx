import TaxCalc from "./TaxCalc";

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        <div>
          <span className="pill">
            <i></i>Chartered Accountants · Amravati · Nagpur · Raipur
          </span>
          <h1>
            Your books in order.<span>Your tax in sight.</span>
          </h1>
          <p className="lead">
            Audit, tax, GST and company law for clients from villages to big cities, across Amravati, Nagpur and Raipur. One partner-led team, plain answers, filings done before the deadline.
          </p>
          <div className="cta">
            <a className="btn" href="#contact">Book a free 20-minute call</a>
            <a className="btn alt" href="#services">See our services</a>
          </div>
          <div className="cred">
            <div><b>2014</b>founded in Amravati</div>
            <div><b>3</b>city offices</div>
            <div><b>5</b>partners</div>
          </div>
        </div>
        <TaxCalc />
      </div>
    </div>
  );
}
