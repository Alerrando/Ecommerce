import React from "react";

type CardsImgsInfo = {
    url: string;
    titulo: string;
    subTitulo: string;
    descrição: string;
}

export function CardsImgsInfo(props: CardsImgsInfo){
    return(
        <>
            <div className="w-full h-full">
              <img
                src={props.url}
                alt={props.subTitulo}
                className="w-full h-full rounded-xl"
              />
            </div>

            <div className="absolute md:invisible bottom-0 p-8 text-start md:group-hover:visible md:group-hover:pb-12 transition-all">
              <h3 className="text-red-500 font-Rokkitt font-medium text-2xl md:text-3xl">
                {props.titulo}
              </h3>
              <h4 className="text-white font-Rokkitt font-medium text-xl md:text-2xl">
                {props.subTitulo}
              </h4>
              <h5 className="text-white mt-4 md:mt-6 text-xs md:text-sm">
                {props.descrição}
              </h5>
            </div>

            <button className="text-white bg-zinc-600 px-4 py-1 mt-4 hover:bg-blue-900 transition-colors rounded-md">
                Adicionar ao carrinho
            </button>
        </>
    )
}