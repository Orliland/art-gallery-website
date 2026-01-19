import "./card.css";

function Card({ title, content, isDark }) {
  return (
    <article className={`card ${isDark ? "card--dark" : "card--light"}`}>
      <h2 className="card__title subheadline">{title}</h2>
      <p className="card__content body-text">{content}</p>
    </article>
  );
}

export default Card;
