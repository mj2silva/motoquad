import { Carousel } from "@components/components/Carousel/Carousel";
import Head from "next/head";

import "@splidejs/react-splide/css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Motoquad</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel
        sideLinks
        images={[
          {
            alt: "Imagen 1",
            url: "/img/portada/1.jpg",
          },
          {
            alt: "Imagen 2",
            url: "/img/portada/2.jpg",
          },
          {
            alt: "Imagen 3",
            url: "/img/portada/3.jpg",
          },
          {
            alt: "Imagen 4",
            url: "/img/portada/4.jpg",
          },
          {
            alt: "Imagen 5",
            url: "/img/portada/5.jpg",
          },
        ]}
      />
    </>
  );
}
