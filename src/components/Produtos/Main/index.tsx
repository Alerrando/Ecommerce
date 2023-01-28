import React, { useContext } from "react";
import { DisplayProdutos } from "./DisplayProdutos";
import { Filtro } from "./Filtro";
import { Titulo } from "../../Titulo";
import { ShopContext } from "../../../context/shopContext";
import { Modal } from '../../Modal'

export function Main() {
  const { modalInfo } = useContext(ShopContext)

  return (
    <main className="w-full h-full md:pt-[10%] md:px-20 bg-[#F1F3F8]">
      <Titulo name="Produtos" />
      <div className="">
        <Filtro />
        <DisplayProdutos />
      </div>

      {Object.keys(modalInfo).length > 0 ? (
          <Modal />
      ): null}
    </main>
  );
}
