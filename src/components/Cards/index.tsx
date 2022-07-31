import { cardsInfo } from "../Produtos";

export function Cards() {
  const Fileira1 = cardsInfo.fileira1;
  const Fileira2 = cardsInfo.fileira2;

  return (
    <>
      <div>
        <div className="alinhamento justify-evenly pt-6 pb-[4.5rem]">
          <div className="w-80 h-[36rem] relative text-center group">
            <div className="w-full h-full">
              <img
                src={Fileira1.card1.url}
                alt={Fileira1.card1.subTitulo}
                className="w-full h-full rounded-xl"
              />
            </div>

            <div className="absolute invisible bottom-0 p-8 text-start group-hover:visible group-hover:pb-12 transition-all">
              <h3 className="text-red-500 font-Rokkitt font-medium text-3xl">
                {Fileira1.card1.titulo}
              </h3>
              <h4 className="text-white font-Rokkitt font-medium text-2xl">
                {Fileira1.card1.subTitulo}
              </h4>
              <h5 className="text-white mt-6 text-sm">
                {Fileira1.card1.descrição}
              </h5>
            </div>

            <button className="text-white bg-zinc-600 px-4 py-1 mt-4 hover:bg-blue-900 transition-colors">
                Adicionar ao carrinho
            </button>
          </div>

          <div className="w-80 h-[36rem] rounded-2xl relative text-center group">
            <div className="w-full h-full">
              <img
                src={Fileira1.card2.url}
                alt={Fileira1.card2.subTitulo}
                className="w-full h-full rounded-xl"
              />
            </div>

            <div className="absolute invisible bottom-0 p-8 text-start group-hover:visible group-hover:pb-12 transition-all">
              <h3 className="text-red-500 font-Rokkitt font-medium text-3xl">
                {Fileira1.card2.titulo}
              </h3>
              <h4 className="text-white font-Rokkitt font-medium text-2xl">
                {Fileira1.card2.subTitulo}
              </h4>
              <h5 className="text-white mt-6 text-sm">
                {Fileira1.card2.descrição}
              </h5>
            </div>

            <button className="text-white bg-zinc-600 px-4 py-1 mt-4 hover:bg-blue-900 transition-colors">
                Adicionar ao carrinho
            </button>
          </div>

          <div className="w-80 h-[36rem] rounded-2xl relative text-center group">
            <div className="w-full h-full">
              <img
                src={Fileira1.card3.url}
                alt={Fileira1.card3.subTitulo}
                className="w-full h-full rounded-xl"
              />
            </div>

            <div className="absolute invisible bottom-0 p-8 text-start group-hover:visible group-hover:pb-12 transition-all">
              <h3 className="text-red-500 font-Rokkitt font-medium text-3xl">
                {Fileira1.card3.titulo}
              </h3>
              <h4 className="text-white font-Rokkitt font-medium text-2xl">
                {Fileira1.card3.subTitulo}
              </h4>
              <h5 className="text-white mt-6 text-sm">
                {Fileira1.card3.descrição}
              </h5>
            </div>

            <button className="text-white bg-zinc-600 px-4 py-1 mt-4 hover:bg-blue-900 transition-colors">
                Adicionar ao carrinho
            </button>
          </div>
        </div>

        <div className="alinhamento justify-evenly pt-6 pb-[4.5rem]">
          <div className="w-80 h-[36rem] relative text-center group">
            <div className="w-full h-full">
              <img
                src={Fileira2.card1.url}
                alt={Fileira2.card1.subTitulo}
                className="w-full h-full rounded-xl"
              />
            </div>

            <div className="absolute invisible bottom-0 p-8 text-start group-hover:visible group-hover:pb-12 transition-all">
              <h3 className="text-red-500 font-Rokkitt font-medium text-3xl">
                {Fileira2.card1.titulo}
              </h3>
              <h4 className="text-white font-Rokkitt font-medium text-2xl">
                {Fileira2.card1.subTitulo}
              </h4>
              <h5 className="text-white mt-6 text-sm">
                {Fileira2.card1.descrição}
              </h5>
            </div>

            <button className="text-white bg-zinc-600 px-4 py-1 mt-4 hover:bg-blue-900 transition-colors">
                Adicionar ao carrinho
            </button>
          </div>

          <div className="w-80 h-[36rem] rounded-2xl relative text-center group">
            <div className="w-full h-full">
              <img
                src={Fileira2.card2.url}
                alt={Fileira2.card2.subTitulo}
                className="w-full h-full rounded-xl"
              />
            </div>

            <div className="absolute invisible bottom-0 p-8 text-start group-hover:visible group-hover:pb-12 transition-all">
              <h3 className="text-red-500 font-Rokkitt font-medium text-3xl">
                {Fileira2.card2.titulo}
              </h3>
              <h4 className="text-white font-Rokkitt font-medium text-2xl">
                {Fileira2.card2.subTitulo}
              </h4>
              <h5 className="text-white mt-6 text-sm">
                {Fileira2.card2.descrição}
              </h5>
            </div>

            <button className="text-white bg-zinc-600 px-4 py-1 mt-4 hover:bg-blue-900 transition-colors">
                Adicionar ao carrinho
            </button>
          </div>

          <div className="w-80 h-[36rem] rounded-2xl relative text-center group">
            <div className="w-full h-full">
              <img
                src={Fileira2.card3.url}
                alt={Fileira2.card3.subTitulo}
                className="w-full h-full rounded-xl"
              />
            </div>

            <div className="absolute invisible bottom-0 p-8 text-start group-hover:visible group-hover:pb-12 transition-all">
              <h3 className="text-red-500 font-Rokkitt font-medium text-3xl">
                {Fileira2.card3.titulo}
              </h3>
              <h4 className="text-white font-Rokkitt font-medium text-2xl">
                {Fileira2.card3.subTitulo}
              </h4>
              <h5 className="text-white mt-6 text-sm">
                {Fileira2.card3.descrição}
              </h5>
            </div>

            <button className="text-white bg-zinc-600 px-4 py-1 mt-4 hover:bg-blue-900 transition-colors">
                Adicionar ao carrinho
            </button>
          </div>
        </div>

        
      </div>

      
    </>
  );
}
