import React from "react";
import { CardKeys, ShopContext } from "../../../../context/shopContext";
import { Eye, EyeClosed } from 'phosphor-react'
import { Link } from "react-router-dom";

type CardsImgsInfo = {
    card: CardKeys;
}

export function CardsImgsInfo(props: CardsImgsInfo){
  const { card } = props;
  const [eyes, setEyes] = React.useState<boolean>(false)
  const { setModalInfo, favoritos, handleFavorites } = React.useContext(ShopContext);
  const hearth = favoritos.includes(card.subTitulo) ? "❤️" : "🖤";

    return(
        <>
            <div className="w-full h-full">
              <img
                src={card.imageDestaque}
                alt={card.subTitulo}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            <div className="w-full absolute md:invisible flex justify-between top-0 p-8 text-start md:group-hover:visible md:group-hover:pb-12 transition-all">
                <Eye size={28} className="cursor-pointer" onClick={() => setModalInfo(card)} />

              <span className="h-auto w-auto text-xl cursor-pointer" onClick={() => handleFavorites(card.subTitulo)}>
                {hearth}
              </span>
            </div>

            <div className="absolute md:invisible bottom-0 p-8 text-start md:group-hover:visible md:group-hover:pb-12 transition-all">
              <h3 className="text-red-500 font-Rokkitt font-medium text-2xl md:text-3xl" translate="no">
                {card.titulo}
              </h3>
              <h4 className="text-white font-Rokkitt font-medium text-xl md:text-2xl" translate="no">
                {card.subTitulo}
              </h4>
              <h5 className="text-blue-600 font-semibold mt-4 md:mt-6 text-xs md:text-sm" translate="no">
                Lorem ipsum dolor sit amet consectetur, adipi
              </h5>

            </div>

            <Link to={`produtos/${card.id}/${card.url}`} target="_blank" className="text-white bg-zinc-600 px-4 py-1 mt-3 top-[8%] hover:bg-blue-900 transition-colors rounded-md relative">
                Mais Informações
            </Link>
            
        </>
    )
}