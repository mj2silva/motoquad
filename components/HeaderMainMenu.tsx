import React from "react";

import styles from "../styles/HeaderMainMenu.module.scss";

export const HeaderMainMenu = () => {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>Motos</li>
        <li>Cuatrimotos</li>
        <li>Posventa</li>
        <li>Contactanos</li>
      </ul>
    </nav>
  );
};
