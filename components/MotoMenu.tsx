import Image from "next/image";
import React from "react";

import styles from "../styles/MotoMenu.module.scss";

export const MotoMenu = () => {
  return (
    <div className={styles.MotoMenu}>
      <nav>
        <ul>
          <li>
            <button>Paseo</button>
          </li>
          <li>
            <button>Streets</button>
          </li>
          <li>
            <button>Todo Terreno</button>
          </li>
          <li>
            <button>MT Series</button>
          </li>
          <li>
            <button>Super sport</button>
          </li>
          <li>
            <button>Sport touring</button>
          </li>
          <li>
            <button>Cross / Enduro</button>
          </li>
        </ul>
      </nav>
      <div className={styles.MotoMenuPictures}>
        <div>{/* <Image src={} alt="" fill /> */}</div>
      </div>
    </div>
  );
};
