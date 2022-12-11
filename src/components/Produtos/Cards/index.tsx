import React from "react";
import { lojaProdutos } from "../../../database";
import { CardsImgsInfo } from "./CardsImgsInfo";

export function Cards() {
  const cardsInfo = lojaProdutos[0]["cardsInfo"]

  return (
    <>
      <div className="grid grid-cols-projetos gap-14">
        {cardsInfo.map((card) => (
            <>
              <div className="max-h-[30rem] max-w-[300px] relative text-center group border border-zinc-400 rounded-xl cursor-pointer">
                <CardsImgsInfo
                  url={card.url}
                  titulo={card.titulo}
                  subTitulo={card.subTitulo}
                  descrição={card.descrição}
                />
              </div>
            </>
        ))}
      </div>
    </>
  );
}
