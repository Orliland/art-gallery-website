import "./button.css";

import { Link } from "react-router";

import IconArrowLeft from "../../assets/icon-arrow-left.svg";
import IconArrowRight from "../../assets/icon-arrow-right.svg";

function Button({ text, url, action, className }) {
  return (
    <Link to={url} className={`button ${className}`}>
      <picture
        className={`button__icon ${action === "to" ? "change-order" : ""}`}
      >
        <img
          className="button__img"
          src={action === "to" ? IconArrowRight : IconArrowLeft}
          alt={action === "to" ? "Arrow pointing right" : "Arrow pointing left"}
        />
      </picture>

      <span className="button__text">{text}</span>
    </Link>
  );
}

export default Button;
