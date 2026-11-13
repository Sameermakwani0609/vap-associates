export default function Insights() {
  return (
    <section id="insights">
      <div className="wrap">
        <span className="eb">Knowledge &amp; resources</span>
        <h2>Insights from our desk.</h2>
        <p className="sub">Practical guides on tax, GST and compliance. No jargon, no filler.</p>
        <div className="arts">
          <a className="art big" href="#post-icai-2022">
            <span className="tag">Blog · 3 min read</span>
            <h3>ICAI Awards 2022: who won and the night’s highlights</h3>
            <p>The Institute of Chartered Accountants of India announced its annual awardees on 2 February 2022. Here is what stood out.</p>
            <span style={{ fontWeight: 600, color: "var(--brass)" }}>Read article →</span>
          </a>
          <a className="art" href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">
            <span className="tag">Resource · GST</span>
            <h3>GST Portal</h3>
            <p>File returns, track applications and download certificates on the official portal.</p>
            <span className="lk">Visit gst.gov.in ↗</span>
          </a>
          <a className="art" href="https://www.incometax.gov.in/" target="_blank" rel="noopener noreferrer">
            <span className="tag it">Resource · Income tax</span>
            <h3>Income Tax e-Filing</h3>
            <p>File returns, view Form 26AS and AIS, and respond to notices on the official portal.</p>
            <span className="lk">Visit incometax.gov.in ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
