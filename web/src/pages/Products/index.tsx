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
      <main className="w-full h-auto md:pt-[10%] px-8 md:px-0 bg-[#F1F3F8] mb-4" id="main-produtos">
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
