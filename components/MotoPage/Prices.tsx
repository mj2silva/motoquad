import React, { FC, useState } from "react";

import { MotoPageData } from "@types";
import styles from "@styles/MotoPrices.module.scss";
import Image from "next/image";
import Title from "@components/Common/Title";
import { REFERENCE_CHANGE_TYPE } from "@lib/constants";

type Props = {
  moto: MotoPageData;
};

export const Prices: FC<Props> = ({ moto }) => {
  const [currentColor, setCurrentColor] = useState(moto.colors[0]);

  const changeColor = (color: MotoPageData["colors"][0]) => {
    setCurrentColor(color);
  };

  return (
    <>
      <Title text="Precios" />
      <div className={styles.MotoPricesBody}>
        <div className={styles.MotoPricesImage}>
          <Image
            src={currentColor.pictureUrl}
            fill
            alt={currentColor.description}
          />
        </div>
        <div className={styles.MotoPricesInfo}>
          <h1 className={styles.MotoPricesTitle}>{moto.name}</h1>
          <p className={styles.MotoPricesPhrase}>{moto.phrase}</p>
          <p className={styles.MotoPricesPrice}>
            $ {moto.prices.dollars?.toFixed(2) || "-"}
          </p>
          <p className={styles.MotoPricesPrice}>
            S/{" "}
            {moto.prices.pen ||
              (moto.prices.dollars &&
                (moto.prices.dollars * REFERENCE_CHANGE_TYPE).toFixed(2)) ||
              "-"}
          </p>
          <p className={styles.MotoPricesChangeType}>
            (TCR: S/ {REFERENCE_CHANGE_TYPE})
          </p>
          <div className={styles.MotoPricesColors}>
            {moto.colors?.map((color) => (
              <button
                key={moto.name + color.rgb}
                style={{ backgroundColor: color.rgb }}
                onClick={() => changeColor(color)}
              ></button>
            ))}
          </div>
          <div className={styles.MotoPricesButtonContainer}>
            <a href="/contacto" className={styles.MotoPricesButton}>
              Contáctate con un vendedor
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
