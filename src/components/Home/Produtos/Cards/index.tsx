import React, { useContext } from "react";
import { CardsImgsInfo } from "./CardsImgsInfo";
import { CardKeys, ShopContext } from '../../../../context/shopContext'

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
            <div className="max-w-[16.25rem] md:max-w-[16.75rem] h-[25rem] md:h-[20rem] relative mb-16 mx-auto text-center group border border-zinc-400 rounded-xl card-product" key={index}>
              <CardsImgsInfo card={card} pages={pages} />
            </div>
          );
        })}
      </div>
    </>
  );
}
