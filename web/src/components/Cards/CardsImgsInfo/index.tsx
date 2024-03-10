
import React from "react";
import { CardKeys, ShopContext } from "../../../context/shopContext";
import { useLocation } from 'react-router-dom';
import { Eye } from 'phosphor-react'
import { Link } from "react-router-dom";

type CardsImgsInfo = {
    card: CardKeys;
    pages: string;
}

export function CardsImgsInfo(props: CardsImgsInfo){
  const { card, pages } = props;
  const pathname = useLocation();
  const { setModalInfo, favoritos, handleFavorites } = React.useContext(ShopContext);
  const hearth = favoritos.includes(card.subTitulo) ? "❤️" : "🖤";

    return(
        <>
          <div className="w-full h-full flex flex-col">
            <img
              src={pathname.pathname.includes("produtos") ? card.image[0] : card.image[1]}
              alt={card.subTitulo}
              className="w-full h-full rounded-xl object-cover"
            />

            <div className="w-full absolute md:invisible flex justify-between top-0 p-8 text-start md:group-hover:visible md:group-hover:pb-12 transition-all">
                <Eye size={28} className="cursor-pointer text-zinc-400" onClick={() => setModalInfo(card)} />

              <span className="h-auto w-auto text-xl cursor-pointer" onClick={() => handleFavorites(card.subTitulo)}>
                {hearth}
              </span>
            </div>

            <div className="absolute md:invisible bottom-16 md:bottom-6 p-6 md:p-8 text-start md:group-hover:visible md:group-hover:pb-8 transition-all">
              <h3 className="text-red-500 font-Rokkitt font-medium text-xl tmd:ext-2xl" translate="no">
                {card.titulo}
              </h3>
              <h4 className="text-white font-Rokkitt font-medium text-lg md:text-xl" translate="no">
                {card.subTitulo}
              </h4>
              <div className="flex items-center justify-start text-orange-600 gap-4 mt-4 md:mt-6">
                <h2 className="font-bold text-base md:text-lg">Preço:</h2>
                <h2 className="font-semibold text-base md:text-lg" translate="no">
                  {`R$${card.price}`}
                </h2>
              </div>

            </div>
          </div>

            <Link to={`${pages == "home" ? `produtos/${card.id}` : card.id}`} className="w-auto text-white bg-zinc-600 px-4 py-1 mt-3 hover:bg-blue-900 transition-colors rounded-md mx-auto">
                Mais Informações
            </Link>
        </>
    )
}