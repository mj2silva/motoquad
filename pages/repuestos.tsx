import { Carousel } from "@components/Carousel/Carousel";
import { RepairsForm } from "@components/RepairsForm";
import React from "react";

const Repuestos = () => {
  return (
    <>
      <Carousel
        title="Repuestos"
        images={[
          { url: "/img/repuestos/1.jpg", alt: "Repuestos 1" },
          { url: "/img/repuestos/2.jpg", alt: "Repuestos 2" },
          { url: "/img/repuestos/3.jpg", alt: "Repuestos 3" },
          { url: "/img/repuestos/4.jpg", alt: "Repuestos 4" },
        ]}
      />
      <div className="container">
        <hr />
        <RepairsForm />
      </div>
    </>
  );
};

export default Repuestos;
