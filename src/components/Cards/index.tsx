import { cardsInfo } from "../Produtos"

export function Cards(){
    const Fileira1 = cardsInfo.fileira1

    return(
        <>
            <div>
                <div className="alinhamento justify-around mt-12">
                    <div className="w-72 h-[30rem] relative">
                        <div className="w-full h-full">
                            <img 
                                src={Fileira1.card1.url} 
                                alt={Fileira1.card1.subTitulo}
                                className="w-full h-full rounded-xl"
                            />
                        </div>

                        <div className="cards-info absolute bottom-0 p-8">
                            <h3>{Fileira1.card1.titulo}</h3>
                            <h4>{Fileira1.card1.subTitulo}</h4>
                            <h5>{Fileira1.card1.descrição}</h5>
                        </div>
                    </div>

                    <div className="w-72 h-[30rem] rounded-2xl relative">
                        <div className="w-full h-full">
                            <img 
                                src={Fileira1.card2.url} 
                                alt={Fileira1.card2.subTitulo}
                                className="w-full h-full rounded-xl"
                            />
                        </div>

                        <div className="cards-info absolute bottom-0 p-8">
                            <h3>{Fileira1.card2.titulo}</h3>
                            <h4>{Fileira1.card2.subTitulo}</h4>
                            <h5>{Fileira1.card2.descrição}</h5>
                        </div>
                    </div>

                    <div className="w-72 h-[30rem] rounded-2xl relative">
                        <div className="w-full h-full">
                            <img 
                                src={Fileira1.card3.url} 
                                alt={Fileira1.card3.subTitulo}
                                className="w-full h-full rounded-xl"
                            />
                        </div>

                        <div className="cards-info absolute bottom-0 p-8">
                            <h3>{Fileira1.card3.titulo}</h3>
                            <h4>{Fileira1.card3.subTitulo}</h4>
                            <h5>{Fileira1.card3.descrição}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="alinhamento justify-around mt-12">
                    <div className="w-60 h-[30rem] rounded-2xl bg-red-500">
                        <div>

                        </div>

                        <div className="cards-info">

                        </div>
                    </div>

                    <div className="w-60 h-[30rem] rounded-2xl bg-red-500">
                        <div>

                        </div>

                        <div className="cards-info">

                        </div>
                    </div>

                    <div className="w-60 h-[30rem] rounded-2xl bg-red-500">
                        <div>

                        </div>

                        <div className="cards-info">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}