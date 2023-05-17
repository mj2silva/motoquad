import { Prices } from "@components/MotoPage/Prices";
import { motosDataList } from "@lib/data";
import { MotoPageData } from "@types";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";

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

const MotoPage: FC<{ moto?: MotoPageData }> = ({ moto }) => {
  return moto ? <Prices moto={moto} /> : <>No hay datos para mostrar</>;
};

export default MotoPage;
