import { MotoPageData } from "./types";
import { Categories } from "./constants";

export const motosDataList: MotoPageData[] = [
  {
    slug: "crypton",
    name: "Crypton",
    category: Categories.PASEO,
    phrase: "Va contigo a donde quieras",
    prices: {
      dollars: 1769,
    },
    colors: [
      {
        rgb: "#ff0000",
        pictureUrl: "/img/motos/single/crypton/7_crypton.jpg",
        description: "Crypton rojo",
      },
      {
        rgb: "#c0c0c0",
        pictureUrl: "/img/motos/single/crypton/7_crypton2.jpg",
        description: "Crypton silver",
      },
    ],
    description: {
      paragraphs: [
        "Esta pequeña moto de grandes atributos está diseñada para ir contigo a donde vayas. Sumamente versátil y con estilo moderno, desde el cuadro de instrumentos hasta el carenado. Con frenos de disco y aros de aluminio, la crypton da la hora. Además su faro extra luminoso con cubierta de cristal cincelado permite una mayor visibilidad, haciendo de esta moto la mejor opción en su categoría.",
      ],
    },
  },
  {
    slug: "cygnus-ray-zr",
    name: "Cygnus Ray ZR",
    category: Categories.PASEO,
    phrase: "¡Atrévete a ser distinto!",
    prices: {
      dollars: 2379,
    },
    colors: [
      {
        rgb: "#2682bb",
        pictureUrl: "/img/motos/single/cygnus-ray-zr/Color-1-T72min.png",
        description: "Matt Light Blue",
      },
      {
        rgb: "#161214",
        pictureUrl: "/img/motos/single/cygnus-ray-zr/Color-3-T72min.png",
        description: "Midnight Black",
      },
      {
        rgb: "#c53126",
        pictureUrl: "/img/motos/single/cygnus-ray-zr/Color-2-T72min.png",
        description: "Matt Light Red",
      },
    ],
    description: {
      paragraphs: [
        "Con un diseño deportivo, urbano y dinámico la nueva CYGNUS RAY ZR expresa actitud por donde la veas.",
        "Disfruta la sensación de libertad que te brinda su motor de 4 tiempos, SOHC de 2 válvulas de 125 cc “BLUE CORE”, con transmisión continua variable y un peso ultra ligero de apenas 99 kilogramos, además ahorra como nunca lo imaginaste gracias al sistema Start&Stop que tiene incorporado. Además cuentas con una excelente capacidad de carga de 21 litros debajo del asiento.",
      ],
    },
  },
];
