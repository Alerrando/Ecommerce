import React, { useContext } from "react";
import { CardsImgsInfo } from "./CardsImgsInfo";
import { CardKeys } from '../../../../context/shopContext'

type CardsProps = {
  cardsInfo: CardKeys[];
  pages: string;
}

export function Cards(props: CardsProps) {
  const { cardsInfo, pages } = props;

  return (
    <>
      <div className="grid grid-cols-projetos gap-14">
        {cardsInfo.map((card: CardKeys, index: number) => {
          return (
            <div className="h-auto md:h-[75%] relative mx-auto text-center group border border-zinc-400 rounded-xl md:card-product" key={index}>
              <CardsImgsInfo card={card} pages={pages} />
            </div>
          );
        })}
      </div>
    </>
  );
}