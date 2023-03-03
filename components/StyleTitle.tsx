import React from "react";

import styles from "../styles/StyleTitle.module.scss";

export const StyleTitle = () => {
  return (
    <div className={styles.StyleTitle}>
      <h2>
        Motos Yamaha <span>en Trujillo</span>
      </h2>
      <div className={styles.StyleTitleLine}></div>
    </div>
  );
};
