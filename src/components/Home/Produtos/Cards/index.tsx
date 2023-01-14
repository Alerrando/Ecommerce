import React from "react";
import { lojaProdutos } from "../../../../database";
import { CardsImgsInfo } from "./CardsImgsInfo";
import { CardKeys } from '../../../../context/shopContext'


export function Cards() {
  const cardsInfo = lojaProdutos[0]["cardsInfo"];

  return (
    <>
      <div className="grid grid-cols-projetos gap-14">
        {cardsInfo.map((card: CardKeys, index: number) => {
          return (
            <div className="max-h-[27rem] max-w-[16.75rem] relative text-center group border border-zinc-400 rounded-xl" key={index}>
              <CardsImgsInfo card={card} />
            </div>
          );
        })}
      </div>
    </>
  );
}
