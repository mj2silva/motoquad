import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";
import { json } from "stream/consumers";

const REFERENCE_CHANGE_TYPE = 3.865;

const motosDataList: MotoPageData[] = [
  {
    slug: "crypton",
    name: "Crypton",
    phrase: "Va contigo a donde quieras",
    prices: {
      dollars: 1769,
    },
    colors: [
      { rgb: "#ff0000", pictureUrl: "" },
      { rgb: "#c0c0c0", pictureUrl: "" },
    ],
    description: {
      paragraphs: [
        "Esta pequeña moto de grandes atributos está diseñada para ir contigo a donde vayas. Sumamente versátil y con estilo moderno, desde el cuadro de instrumentos hasta el carenado. Con frenos de disco y aros de aluminio, la crypton da la hora. Además su faro extra luminoso con cubierta de cristal cincelado permite una mayor visibilidad, haciendo de esta moto la mejor opción en su categoría.",
      ],
    },
  },
];

type MotoPageData = {
  slug: string;
  name: string;
  phrase: string;
  prices: {
    dollars?: number;
    pen?: number;
  };
  colors: { rgb: string; pictureUrl: string }[];
  description: {
    paragraphs: string[];
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: motosDataList.map((moto) => ({ params: { slug: moto.slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: {
      moto: motosDataList.find((moto) => moto.slug === context.params?.slug),
    },
  };
};

const MotoPage: FC<{ moto: MotoPageData }> = ({ moto }) => {
  return <h1>{moto.name || "S/N"}</h1>;
};

export default MotoPage;
