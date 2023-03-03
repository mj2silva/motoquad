import React from "react";
import Image from "next/image";

import styles from "../styles/header.module.scss";
import { HeaderMainMenu } from "./HeaderMainMenu";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <Link href="/">
        <div className={styles.HeaderLogo}>
          <Image fill src="/img/motoquadlogo.png" alt="Motoquad logo" />
        </div>
      </Link>
      <div className={styles.HeaderMenu}>
        <div className={styles.HeaderMainMenu}>
          <HeaderMainMenu />
        </div>
      </div>
    </header>
  );
};
