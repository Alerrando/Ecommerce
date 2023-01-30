import React, { useContext, useState, useEffect } from "react";
import { DisplayProdutos } from "./DisplayProdutos";
import { Filtro } from "./Filtro";
import { Titulo } from "../../Titulo";
import { ShopContext } from "../../../context/shopContext";
import { Modal } from '../../Modal'
import { FiltroProduto } from "./Filtro/FiltroProduto";
import { getProdutos } from '../../../api'

export function Main() {
  const { modalInfo, setProducts } = useContext(ShopContext);
  const [modalFiltro, setModalFiltro] = useState<boolean>(false);

  useEffect(() => {
    getProduct();
  }, [])


  return (
    <main className="w-full h-full md:pt-[10%] md:px-20 bg-[#F1F3F8]">
      <Titulo name="Produtos" />
      <Filtro setModalFiltro={setModalFiltro} />
      <DisplayProdutos />
      {Object.keys(modalInfo).length > 0 ? (
          <Modal />
      ): null}

    {modalFiltro ? ( <FiltroProduto setModalFiltro={setModalFiltro} /> ) : null}
    </main>
  );

  async function getProduct(){
    const api = await getProdutos();
  
    setProducts(api);
  }
}
