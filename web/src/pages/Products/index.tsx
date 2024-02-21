import React, { useContext, useState, useEffect } from "react";
import { DisplayProdutos } from "./DisplayProdutos";
import { Filtro } from "./Filtro";
import { Titulo } from "../../components/Titulo";
import { ShopContext } from "../../context/shopContext";
import { Modal } from '../../components/Modal'
import { FiltroProduto } from "./Filtro/FiltroProduto";
import { getProdutos } from '../../api'
import { Footer, Header } from "../../components";

export function Products() {
  const { modalInfo } = useContext(ShopContext);
  const [modalFiltro, setModalFiltro] = useState<boolean>(false);


  return (
    <>
      <Header />
      <main className="w-full h-full md:pt-[10%] md:px-20 bg-[#F1F3F8] border-b mb-4" id="main-produtos">
        <Titulo name="Produtos" />
        <Filtro setModalFiltro={setModalFiltro} />
        <DisplayProdutos />
        {Object.keys(modalInfo).length > 0 ? (
            <Modal id={modalInfo.id} />
        ): null}

      {modalFiltro ? ( <FiltroProduto setModalFiltro={setModalFiltro} /> ) : null}
      </main>
      <Footer/>
    </>
  );
}
