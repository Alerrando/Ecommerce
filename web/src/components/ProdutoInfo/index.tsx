import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { filterProduct } from "../../api";
import { CardKeys } from "../../context/shopContext";
import { Header } from "../../components/Header";
import { Main } from "./Main";

export function ProdutoInfo() {
  const { id } = useParams();
  const [produto, setProduto] = useState<CardKeys>({} as CardKeys)
  const { data } = useQuery(["product", parseInt(id as string)], () => filterProduct(parseInt(id as string)))

  useEffect(() => {
    (async () => {
      const aux = await handleFilterProduct();

      setProduto(aux);
    }) ()
  }, [])

  return (
    <> 
          <Header />
          <Main produto={data == undefined ? produto : data} />
    </>
  );

  function handleFilterProduct(){
    const aux = filterProduct(parseInt(id as string));
    return aux;
  }
}