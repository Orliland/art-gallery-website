import "./footer.css";

import LogoLight from "../../assets/logo-light.svg";
import LogoDark from "../../assets/logo-dark.svg";

import SocialLinks from "../../components/SocialLinks";

function Footer({ isDark }) {
  return (
    <footer className={`footer ${isDark ? "is-dark" : ""}`}>
      <img
        className="footer__logo"
        src={isDark ? LogoLight : LogoDark}
        alt="Modern Art Gallery Logo"
      />
      <p className="footer__description footer-text">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>
      <SocialLinks />
    </footer>
  );
}

export default Footer;
