import React, { FC } from "react";

import styles from "@styles/StyleTitle.module.scss";

type Props = {
  text: string;
};

const Title: FC<Props> = ({ text }) => {
  return (
    <div
      className={styles.StyleTitle}
      style={{ fontSize: "2rem", maxWidth: "1366px", margin: "2rem auto" }}
    >
      <h2 style={{ fontSize: "2rem" }}>{text}</h2>
      <div className={styles.StyleTitleLine}></div>
    </div>
  );
};

export default Title;
