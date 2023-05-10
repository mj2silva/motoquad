import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "../styles/header.module.scss";
import { HeaderMainMenu } from "./HeaderMainMenu";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const { pathname } = useRouter();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(pathname === "/");
  }, [pathname]);

  return (
    <header
      className={styles.Header + (!isHome ? " " + styles.HeaderStatic : "")}
    >
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
