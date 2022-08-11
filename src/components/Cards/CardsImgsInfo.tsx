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

            <div className="absolute invisible bottom-0 p-8 text-start group-hover:visible group-hover:pb-12 transition-all">
              <h3 className="text-red-500 font-Rokkitt font-medium text-3xl">
                {props.titulo}
              </h3>
              <h4 className="text-white font-Rokkitt font-medium text-2xl">
                {props.subTitulo}
              </h4>
              <h5 className="text-white mt-6 text-sm">
                {props.descrição}
              </h5>
            </div>

            <button className="text-white bg-zinc-600 px-4 py-1 mt-4 hover:bg-blue-900 transition-colors">
                Adicionar ao carrinho
            </button>
        </>
    )
}