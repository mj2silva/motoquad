import { Carousel } from "@components/Carousel/Carousel";
import { ShopForm } from "@components/ShopForm";

const Taller = () => {
  return (
    <>
      <Carousel
        title="Taller"
        images={[
          { url: "/img/repuestos/1.jpg", alt: "Repuestos 1" },
          { url: "/img/repuestos/2.jpg", alt: "Repuestos 2" },
          { url: "/img/repuestos/3.jpg", alt: "Repuestos 3" },
          { url: "/img/repuestos/4.jpg", alt: "Repuestos 4" },
        ]}
      />
      <div className="container">
        <hr />
        <ShopForm />
      </div>
    </>
  );
};

export default Taller;
