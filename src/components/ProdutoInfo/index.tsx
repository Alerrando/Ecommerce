import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { filterProduct } from "../../api";
import { CardKeys } from "../../context/shopContext";
import { Header } from "../Home/Header";
import { Main } from "./Main";

export function ProdutoInfo() {
  const { id } = useParams();
  const [produto, setProduto] = useState<CardKeys>({} as CardKeys)
  const { data, isError } = useQuery(["product", parseInt(id as string)], () => filterProduct(parseInt(id as string)))

  useEffect(() => {
    (async () => {
      const aux = await handleFilterProduct();

      setProduto(aux);
    }) ()
  }, [])

  console.log(produto, data)

  return (
    <> 
          <Header />
          <Main produto={data == undefined ? produto : data} />
    </>
  );

  async function handleFilterProduct(){
    const aux = await filterProduct(parseInt(id as string));
    return aux;
  }
}