import "./sociallinks.css";

import FacebookIcon from "../../assets/icon-facebook.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import InstagramIcon from "../../assets/icon-instagram.svg";

function Link({ icon, href, alt }) {
  return (
    <li className="links__item">
      <a className="links__link" href={href}>
        <img className="links__icon" src={icon} alt={alt} />
      </a>
    </li>
  );
}

function SocialLinks() {
  return (
    <ul className="links">
      <Link
        icon={FacebookIcon}
        href="https://www.facebook.com"
        alt="Follow us on Facebook"
      />
      <Link
        icon={TwitterIcon}
        href="https://www.twitter.com"
        alt="Follow us on Twitter"
      />
      <Link
        icon={InstagramIcon}
        href="https://www.instagram.com"
        alt="Follow us on Instagram"
      />
    </ul>
  );
}

export default SocialLinks;
