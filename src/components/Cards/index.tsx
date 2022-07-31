import { cardsInfo } from "../Produtos";
import { CardsImgsInfo } from "./CardsImgsInfo";

export function Cards() {
  const Fileira1 = cardsInfo.fileira1;
  const Fileira2 = cardsInfo.fileira2;

  return (
    <>
      <div>
        <div className="alinhamento justify-evenly pt-6 pb-[4.5rem]">
          <div className="w-80 h-[36rem] relative text-center group">
            <CardsImgsInfo 
                url={Fileira1.card1.url} 
                titulo={Fileira1.card1.titulo} 
                subTitulo={Fileira1.card1.subTitulo} 
                descrição={Fileira1.card1.descrição}
            />
          </div>

          <div className="w-80 h-[36rem] rounded-2xl relative text-center group">
          <CardsImgsInfo 
                url={Fileira1.card2.url} 
                titulo={Fileira1.card2.titulo} 
                subTitulo={Fileira1.card2.subTitulo} 
                descrição={Fileira1.card2.descrição}
            />
          </div>

          <div className="w-80 h-[36rem] rounded-2xl relative text-center group">
          <CardsImgsInfo 
                url={Fileira1.card3.url} 
                titulo={Fileira1.card3.titulo} 
                subTitulo={Fileira1.card3.subTitulo} 
                descrição={Fileira1.card3.descrição}
            />
          </div>
        </div>

        <div className="alinhamento justify-evenly pt-6 pb-[4.5rem]">
          <div className="w-80 h-[36rem] relative text-center group">
          <CardsImgsInfo 
                url={Fileira2.card1.url} 
                titulo={Fileira2.card1.titulo} 
                subTitulo={Fileira2.card1.subTitulo} 
                descrição={Fileira2.card1.descrição}
            />
          </div>

          <div className="w-80 h-[36rem] rounded-2xl relative text-center group">
            <CardsImgsInfo 
                url={Fileira2.card2.url} 
                titulo={Fileira2.card2.titulo} 
                subTitulo={Fileira2.card2.subTitulo} 
                descrição={Fileira2.card2.descrição}
            />
          </div>

          <div className="w-80 h-[36rem] rounded-2xl relative text-center group">
            <CardsImgsInfo 
                url={Fileira2.card3.url} 
                titulo={Fileira2.card3.titulo} 
                subTitulo={Fileira2.card3.subTitulo} 
                descrição={Fileira2.card3.descrição}
            />
          </div>
        </div>
      </div>
    </>
  );
}
