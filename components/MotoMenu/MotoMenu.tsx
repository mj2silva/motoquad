import { useState } from "react";
import styles from "../../styles/MotoMenu.module.scss";
import { MotoMenuPictures } from "./MotoMenuPictures";

const motos = [
  {
    id: 1,
    category: "Paseo",
    coverUrl: "/img/motos/paseo/portada.jpg",
    motos: [
      {
        id: 1,
        name: "Crypton",
        pictureUrl: "/img/motos/paseo/crypton.jpg",
        url: "/motos/crypton",
      },
      {
        id: 2,
        name: "Cygnus Ray ZR",
        pictureUrl: "/img/motos/paseo/cygnus-ray.jpg",
        url: "#",
      },
      {
        id: 3,
        name: "NMax Connected",
        pictureUrl: "/img/motos/paseo/nmax-connected.jpg",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    category: "Streets",
    coverUrl: "/img/motos/streets/portada.webp",
    motos: [
      {
        id: 1,
        name: "YBR-Z",
        pictureUrl: "/img/motos/streets/ybr-z.jpg",
        url: "#",
      },
      {
        id: 2,
        name: "FZS FI",
        pictureUrl: "/img/motos/streets/fzsfi.jpg",
        url: "#",
      },
      {
        id: 3,
        name: "FZS 3.0 ABS",
        pictureUrl: "/img/motos/streets/fzsfi30abs.jpg",
        url: "#",
      },
      {
        id: 4,
        name: "FZ 25",
        pictureUrl: "/img/motos/streets/fz25.jpg",
        url: "#",
      },
      {
        id: 5,
        name: "FZ-X Connected",
        pictureUrl: "/img/motos/streets/FZXazul-mini.png",
        url: "#",
      },
      {
        id: 6,
        name: "FZS 3.0",
        pictureUrl: "/img/motos/streets/FZS3-17715.png",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    category: "Todo Terreno",
    coverUrl: "/img/motos/todo-terreno/portada.webp",
    motos: [
      {
        id: 1,
        name: "YB125 Chacarera",
        pictureUrl: "/img/motos/todo-terreno/7_yb125-chacarera.jpg",
        url: "#",
      },
      {
        id: 2,
        name: "XTZ125",
        pictureUrl: "/img/motos/todo-terreno/7_xtz125.jpg",
        url: "#",
      },
      {
        id: 3,
        name: "XTZ150",
        pictureUrl: "/img/motos/todo-terreno/7_xtz150_1.jpg",
        url: "#",
      },
      {
        id: 4,
        name: "XTZ250 ABS",
        pictureUrl: "/img/motos/todo-terreno/7_xtz250_1.jpg",
        url: "#",
      },
      {
        id: 5,
        name: "Ténéré",
        pictureUrl: "/img/motos/todo-terreno/7_tenere700.jpg",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    category: "MT Series",
    coverUrl: "/img/motos/mt-series/portada.webp",
    motos: [
      {
        id: 1,
        name: "MT-15",
        pictureUrl: "/img/motos/mt-series/7_mt15_2.jpg",
        url: "#",
      },
      {
        id: 2,
        name: "MT-03 ABS",
        pictureUrl: "/img/motos/mt-series/7_mt03_1.jpg",
        url: "#",
      },
      {
        id: 3,
        name: "MT-07 ABS",
        pictureUrl: "/img/motos/mt-series/mt07-abs-1.jpg",
        url: "#",
      },
      {
        id: 4,
        name: "MT-09 ABS",
        pictureUrl: "/img/motos/mt-series/7_mt09_abs.jpg",
        url: "#",
      },
    ],
  },
  {
    id: 5,
    category: "Super sport",
    coverUrl: "/img/motos/super-sport/7_portada.webp",
    motos: [
      {
        id: 1,
        name: "YZF-R15 ABS",
        pictureUrl:
          "/img/motos/super-sport/especificaciones-R15V4-BLUE-min.png",
        url: "#",
      },
      {
        id: 2,
        name: "YZF-R3 ABS",
        pictureUrl: "/img/motos/super-sport/7_r3.jpg",
        url: "#",
      },
      {
        id: 3,
        name: "YZF-R7",
        pictureUrl: "/img/motos/super-sport/7_r7.jpg",
        url: "#",
      },
      {
        id: 4,
        name: "YZF-R1",
        pictureUrl: "/img/motos/super-sport/7_r1.jpg",
        url: "#",
      },
    ],
  },
  {
    id: 6,
    category: "Sport touring",
    coverUrl: "/img/motos/sport-touring/7_portada_gt.webp",
    motos: [
      {
        id: 1,
        name: "Tracer 9 GT",
        pictureUrl: "/img/motos/sport-touring/7_tracer9_gt.jpg",
        url: "#",
      },
    ],
  },
  {
    id: 7,
    category: "Cross / Enduro",
    coverUrl: "/img/motos/cross-enduro/7_portada_2.webp",
    motos: [
      {
        id: 1,
        name: "PW 50",
        pictureUrl: "/img/motos/cross-enduro/7_pw50_1.jpg",
        url: "#",
      },
      {
        id: 2,
        name: "YZ65",
        pictureUrl: "/img/motos/cross-enduro/7_yz65_1.jpg",
        url: "#",
      },
      {
        id: 3,
        name: "YZ85LW",
        pictureUrl: "/img/motos/cross-enduro/7_YZ85_2.jpg",
        url: "#",
      },
      {
        id: 4,
        name: "YZ125",
        pictureUrl: "/img/motos/cross-enduro/7_yz125_1.jpg",
        url: "#",
      },
      {
        id: 5,
        name: "YZ250F",
        pictureUrl: "/img/motos/cross-enduro/7_yz250f_1.jpg",
        url: "#",
      },
      {
        id: 6,
        name: "YZ450F",
        pictureUrl: "/img/motos/cross-enduro/7_YZ450F_2.jpg",
        url: "#",
      },
      {
        id: 7,
        name: "WR250F",
        pictureUrl: "/img/motos/cross-enduro/7_wr250.jpg",
        url: "#",
      },
      {
        id: 8,
        name: "WR450F",
        pictureUrl: "/img/motos/cross-enduro/7_wr450.jpg",
        url: "#",
      },
    ],
  },
];

export const MotoMenu = () => {
  const [currentMenu, setCurrentMenu] = useState(1);

  const activeClassName = (id: number) => {
    return currentMenu === id ? styles.MotoMenuButtonActive : "";
  };

  return (
    <div className={styles.MotoMenu}>
      <nav>
        <ul>
          <li>
            <button
              className={activeClassName(1)}
              onClick={() => setCurrentMenu(1)}
            >
              Paseo
            </button>
          </li>
          <li>
            <button
              className={activeClassName(2)}
              onClick={() => setCurrentMenu(2)}
            >
              Streets
            </button>
          </li>
          <li>
            <button
              className={activeClassName(3)}
              onClick={() => setCurrentMenu(3)}
            >
              Todo Terreno
            </button>
          </li>
          <li>
            <button
              className={activeClassName(4)}
              onClick={() => setCurrentMenu(4)}
            >
              MT Series
            </button>
          </li>
          <li>
            <button
              className={activeClassName(5)}
              onClick={() => setCurrentMenu(5)}
            >
              Super sport
            </button>
          </li>
          <li>
            <button
              className={activeClassName(6)}
              onClick={() => setCurrentMenu(6)}
            >
              Sport touring
            </button>
          </li>
          <li>
            <button
              className={activeClassName(7)}
              onClick={() => setCurrentMenu(7)}
            >
              Cross / Enduro
            </button>
          </li>
        </ul>
      </nav>
      <MotoMenuPictures
        models={motos.find((moto) => moto.id === currentMenu)}
      />
    </div>
  );
};
