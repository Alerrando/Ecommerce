import React, { useContext } from "react";
import { CardsImgsInfo } from "./CardsImgsInfo";
import { CardKeys, ShopContext } from '../../../../context/shopContext'


export function Cards() {
  const { products } = useContext(ShopContext)
  const cardsInfo = products.filter(produto => produto.destaque == 1);

  return (
    <>
      <div className="grid grid-cols-projetos gap-14">
        {cardsInfo.map((card: CardKeys, index: number) => {
          return (
            <div className="max-w-[16.75rem] relative mb-16 mx-auto text-center group border border-zinc-400 rounded-xl card-product" key={index}>
              <CardsImgsInfo card={card} />
            </div>
          );
        })}
      </div>
    </>
  );
}
