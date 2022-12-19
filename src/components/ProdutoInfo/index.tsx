// @flow
import * as React from "react";
import { useParams } from "react-router-dom";
import { getProduto } from "../../utils/getProduto";
import { Header } from "./Header";
import { Main } from "./Main";

export function ProdutoInfo() {
  const { id } = useParams();
  const produto = getProduto(id as string);

  

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
