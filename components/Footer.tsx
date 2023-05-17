import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

import styles from "../styles/footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterTop}>
        <nav>
          <ul>
            <li>
              <a href="#">Motos</a>
            </li>
            <li>
              <a href="#">Cuatrimotos</a>
            </li>
            <li>
              <a href="#">Posventa</a>
            </li>
            <li>
              <a href="#">Contactanos</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.FooterBody}>
        <div className={styles.FooterBranches}>
          <h3>Oficinas</h3>
          <ul>
            <li>
              <span>
                <FontAwesomeIcon icon={faMapMarker} />
              </span>
              <a href="#">Av. América Norte #1030</a>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faMapMarker} />
              </span>
              <a href="#">Mall Plaza - Motor Plaza STAND Yamaha</a>
            </li>
          </ul>
        </div>
        <div className={styles.FooterPhones}>
          <h3>Central telefónica</h3>
          <ul>
            <li>
              <span>Repuestos & accesorios</span>
              <a href="#">+51 914 199 997</a>
            </li>
            <li>
              <span>Mantenimiento</span>
              <a href="#">+51 951 584 331</a>
            </li>
          </ul>
        </div>
        <div className={styles.FooterLogo}>
          <div className={styles.FooterLogoImage}>
            <Image src="/img/motoquadlogo.png" alt="Motoquad logo" fill />
          </div>
        </div>
      </div>
      <div className={styles.FooterBottom}>
        <div className={styles.FooterCopy}>
          <div>
            <a href="#">Legal</a>
            <a href="#">Libro de reclamaciones</a>
          </div>
          <div>&copy; Copyright 2023</div>
        </div>
        <div className={styles.FooterSocial}>
          <a href="#" className={styles.FooterSocialIcon}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className={styles.FooterSocialIcon}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className={styles.FooterSocialIcon}>
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>
    </footer>
  );
};
