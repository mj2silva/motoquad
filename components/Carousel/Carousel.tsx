import React, { FC } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import styles from "../../styles/Carousel.module.scss";
import Image from "next/image";
import { SideMenu } from "../SideMenu/SideMenu";

import "@splidejs/react-splide/css";

type Props = {
  title?: string;
  images: {
    alt: string;
    url: string;
  }[];
  interval?: number;
  sideLinks?: boolean;
};

export const Carousel: FC<Props> = (props) => {
  const { title, interval = 3500, images, sideLinks } = props;

  return (
    <div className={styles.Carousel}>
      <Splide
        options={{
          arrows: false,
          type: "loop",
          autoplay: true,
          pauseOnHover: false,
          interval,
        }}
        aria-label="Motoquad carrusel"
      >
        {images?.map((image) => {
          return (
            <SplideSlide key={image.url}>
              <div className={styles.Image}>
                <Image fill src={image.url} alt={image.alt} />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      {title && (
        <div className={styles.Title}>
          <h1>{title}</h1>
        </div>
      )}
      {sideLinks && <SideMenu className={styles.SideMenu} />}
    </div>
  );
};
