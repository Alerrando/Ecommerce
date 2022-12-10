import React from "react";
import { lojaProdutos } from "../../../database";
import { CardsImgsInfo } from "./CardsImgsInfo";

export function Cards() {
  const cardsInfo = lojaProdutos[0]["cardsInfo"]

  return (
    <>
      <div className="grid md:block mt-4 mb-16 md:my-0">
        {cardsInfo.map((card) => (
          <div className="grid gap-16 pb-16 md:flex items-center justify-evenly md:pt-6 md:pb-[4.5rem]">
            <>
              <div className="h-[20rem] md:w-80 md:h-[36rem] relative text-center group">
                <CardsImgsInfo
                  url={card.card1.url}
                  titulo={card.card1.titulo}
                  subTitulo={card.card1.subTitulo}
                  descrição={card.card1.descrição}
                />
              </div>

              <div className="h-[20rem] md:w-80 md:h-[36rem] rounded-2xl relative text-center group">
                <CardsImgsInfo
                  url={card.card2.url}
                  titulo={card.card2.titulo}
                  subTitulo={card.card2.subTitulo}
                  descrição={card.card2.descrição}
                />
              </div>

              <div className="h-[20rem] md:w-80 md:h-[36rem] rounded-2xl relative text-center group">
                <CardsImgsInfo
                  url={card.card3.url}
                  titulo={card.card3.titulo}
                  subTitulo={card.card3.subTitulo}
                  descrição={card.card3.descrição}
                />
              </div>
            </>
          </div>
        ))}
      </div>
    </>
  );
}
