import "./grid.css";
import Image from "../../components/Image";

function Grid() {
  return (
    <section className="grid">
      <div className="grid__header">
        <Image src="image-grid-1.jpg" />
        <div>Card</div>
      </div>
      <div className="grid__body">
        <Image src="image-grid-2.jpg" />
        <Image src="image-grid-3.jpg" />
        <div>Card</div>
      </div>
    </section>
  );
}

export default Grid;
