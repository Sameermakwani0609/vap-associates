import Logo from "./Logo";
import { EMAIL, FIRM_REG, MAIL_URL, PHONE_DISPLAY, WHATSAPP_URL } from "@/data/site";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="fg">
          <div>
            <Logo />
            <p className="fb">
              <span>Chartered Accountants</span>
              <b>The mark of expertise.</b>
            </p>
            <p className="reg">ICAI Firm Registration No. {FIRM_REG}</p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#about">About us &amp; our journey</a>
            <a href="#services">Our services</a>
            <a href="#team">Our team</a>
            <a href="#team">Partner profiles</a>
            <a href="#insights">Knowledge &amp; resources</a>
            <a href="#updates">News &amp; events</a>
            <a href="#contact">Contact &amp; offices</a>
          </div>
          <div>
            <h4>Connect with us</h4>
            <a href={MAIL_URL} target="_blank" rel="noopener noreferrer">{EMAIL}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{PHONE_DISPLAY}</a>
            <span>Amravati &nbsp;·&nbsp; Raipur &nbsp;·&nbsp; Nagpur</span>
          </div>
        </div>
        <div className="fbar">
          <span className="cp">© 2026 VAP &amp; Associates. All rights reserved.</span>
          <span className="pw">
            Powered by{" "}
            <a href="https://web.whatsapp.com/send?phone=919359789199" target="_blank" rel="noopener noreferrer" aria-label="Message Sameer Makwani on WhatsApp Web">
              <b>Sameer Makwani</b>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
