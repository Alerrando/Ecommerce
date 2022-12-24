// @flow
import * as React from "react";
import { useParams, useRoutes } from "react-router-dom";
import { getProduto } from "../../utils/getProduto";
import { Header } from "./Header";
import { Main } from "./Main";

export function ProdutoInfo() {
  const { id } = useParams();  
  

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
