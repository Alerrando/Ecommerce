import * as React from "react";
import { useParams } from "react-router-dom";
import { getProdutos } from "../../api";
import { CardKeys } from "../../context/shopContext";
import { Header } from "../Home/Header";
import { Main } from "./Main";

export function ProdutoInfo() {
  const { id } = useParams();
  const [produto, setProduto] = React.useState<CardKeys>({} as CardKeys);
  
  React.useEffect(() => {
    getProduct();
  }, [])

  return (
    <>
      <Header />
      <Main produto={produto} />
    </>
  );
  
  async function getProduct(){
    const api = await getProdutos();

    setProduto(api[parseInt(id)-1])
  }
}
