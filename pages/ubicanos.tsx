import { Carousel } from "@components/Carousel/Carousel";

const Ubicanos = () => {
  return (
    <>
      <Carousel
        title="Ubícanos"
        images={[
          { url: "/img/repuestos/1.jpg", alt: "Repuestos 1" },
          { url: "/img/repuestos/2.jpg", alt: "Repuestos 2" },
          { url: "/img/repuestos/3.jpg", alt: "Repuestos 3" },
          { url: "/img/repuestos/4.jpg", alt: "Repuestos 4" },
        ]}
      />
      <div className="container">
        <hr />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8693.017024951982!2d-79.03071314661193!3d-8.106065021603223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spe!4v1677884394596!5m2!1sen!2spe"
          width="600"
          height="450"
          style={{ border: 0, width: "100%", margin: "3rem auto" }}
          allowFullScreen
          loading="lazy"
          className="map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Ubicanos;
