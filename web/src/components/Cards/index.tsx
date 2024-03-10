import React, { useContext } from "react";
import { CardsImgsInfo } from "./CardsImgsInfo";
import { CardKeys } from '../../context/shopContext'
import { twMerge } from "tailwind-merge";

type CardsProps = {
  cardsInfo: CardKeys[];
  pages: string;
  className: string;
  classNameCards?: string;
}

export function Cards({ cardsInfo, pages, className, classNameCards }: CardsProps) {

  return (
    <div className={className}>
      {cardsInfo.map((card: CardKeys, index: number) => {
        return (
          <div className={twMerge("w-full h-auto md:flex md:flex-col md:gap-1 relative mx-auto text-center group rounded-xl md:card-product", classNameCards)} key={index}>
            <CardsImgsInfo card={card} pages={pages} />
          </div>
        );
      })}
    </div>
  );
}