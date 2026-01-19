import "./grid.css";
import Image from "../../components/Image";
import Card from "../../components/Card";

function Grid() {
  return (
    <section className="grid">
      <div className="grid__header">
        <Image src="image-grid-1.jpg" />
        <Card
          title="Your Day at the Gallery"
          content="Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process."
          isDark={false}
        />
      </div>
      <div className="grid__body">
        <Image src="image-grid-2.jpg" />
        <Image src="image-grid-3.jpg" />
        <Card
          title="COME & BE INSPIRED"
          content="We’re excited to welcome you to our gallery and see how our collections influence you."
          isDark={true}
        />
      </div>
    </section>
  );
}

export default Grid;
