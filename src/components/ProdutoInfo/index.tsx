// @flow
import * as React from "react";
import { useParams } from "react-router-dom";
import { getProduto } from "../../utils/getProduto";
import { Header } from "./Header";

export function ProdutoInfo() {
  const { id } = useParams();
  const produto = getProduto(id as string);

  

  return (
    <>
      <Header />
    </>
  );
}
