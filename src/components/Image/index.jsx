import "./image.css";

function Image({ src, alt, className }) {
  const srcMobile = new URL(`../../assets/mobile/${src}`, import.meta.url).href;
  const srcTablet = new URL(`../../assets/tablet/${src}`, import.meta.url).href;
  const srcDesktop = new URL(`../../assets/desktop/${src}`, import.meta.url)
    .href;

  return (
    <picture className={`picture ${className}`}>
      <source srcSet={srcDesktop} media="(min-width: 1024px)" />
      <source srcSet={srcTablet} media="(min-width: 768px)" />
      <img
        className={`picture__image ${className}__image`}
        src={srcMobile}
        alt={alt}
      />
    </picture>
  );
}

export default Image;
