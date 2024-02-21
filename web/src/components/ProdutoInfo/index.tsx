import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { filterProduct } from "../../api";
import { CardKeys } from "../../context/shopContext";
import { Header } from "../../components/Header";
import { Main } from "./Main";
import { productsStatic } from "../../utils";

export function ProdutoInfo() {
  const { id } = useParams();
  const data = productsStatic.filter((product) => product.id === id as string);

  return (
    <> 
          <Header />
          <Main produto={data[0] == undefined ? {} as CardKeys : data[0]} />
    </>
  );
}