import React from "react";
import { Link } from "react-router-dom";
import { CardKeys } from ".";

type CardsImgsInfo = {
    card: CardKeys;
}

export function CardsImgsInfo(props: CardsImgsInfo){
  const { card } = props;

    return(
        <>
            <div className="w-full h-full">
              <img
                src={card.url}
                alt={card.subTitulo}
                className="w-full h-full rounded-xl"
              />
            </div>

            <div className="absolute md:invisible bottom-0 p-8 text-start md:group-hover:visible md:group-hover:pb-12 transition-all">
              <h3 className="text-red-500 font-Rokkitt font-medium text-2xl md:text-3xl" translate="no">
                {card.titulo}
              </h3>
              <h4 className="text-white font-Rokkitt font-medium text-xl md:text-2xl" translate="no">
                {card.subTitulo}
              </h4>
              <h5 className="text-white mt-4 md:mt-6 text-xs md:text-sm" translate="no">
                {card.descrição}
              </h5>
            </div>

            <Link to={`produto/${card.id}`} target="_blank" className="text-white bg-zinc-600 px-4 py-1 top-[3%] hover:bg-blue-900 transition-colors rounded-md relative">
                Mais Informações
            </Link>
        </>
    )
}