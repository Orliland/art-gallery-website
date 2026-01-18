import "./hero.css";

import HeroMobile from "../../assets/mobile/image-hero.jpg";
import HeroTablet from "../../assets/tablet/image-hero.jpg";
import HeroDesktop from "../../assets/desktop/image-hero.jpg";

import Button from "../../components/Button";

function Hero() {
  return (
    <section className="hero">
      <picture className="thumbnail">
        <source srcSet={HeroDesktop} media="(width >= 1024px)" />
        <source srcSet={HeroTablet} media="(width >= 768px)" />
        <img
          className="thumbnail__image"
          src={HeroMobile}
          alt="Two people looking at art"
        />
      </picture>
      <div className="hero__body">
        <h1 className="headline hero__title">MODERN ART GALLERY</h1>
        <p className="body-s hero__description">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <Button text="OUR LOCATION" url="/location" action="to" />
      </div>
    </section>
  );
}

export default Hero;
