import { carrosselImagens } from "../Main";


export function Carrossel(){
    console.log(carrosselImagens.imagem1);
    return (
        <section>
            <div className="w-full h-[30rem] flex relative overflow-x-hidden">
                <div className="w-full promoção">
                    <div className="w-[1200px] flex h-full animação">
                        <img
                            src={carrosselImagens.imagem1.url}
                            alt={carrosselImagens.imagem1.subTitulo}
                            className="w-full h-full"
                        />
                    </div>

                    <div className="z-10 absolute bottom-0 top-[15%] invisible transition duration-300 animação card-info">
                        <h3>{carrosselImagens.imagem1.title}</h3>
                        <h4>{carrosselImagens.imagem1.subTitulo}</h4>
                        <h5>{carrosselImagens.imagem1.desconto}</h5>
                    </div>
                </div>

                <div className="w-full promoção">
                    <div className="w-[1200px] flex h-full animação">
                        <img
                            src={carrosselImagens.imagem2.url}
                            alt={carrosselImagens.imagem2.subTitulo}
                            className="w-full h-full"
                        />
                    </div>

                    <div className="z-10 absolute bottom-0 top-[15%] left-[100%] invisible transition duration-300 animação card-info">
                        <h3>{carrosselImagens.imagem2.title}</h3>
                        <h4>{carrosselImagens.imagem2.subTitulo}</h4>
                        <h5>{carrosselImagens.imagem2.desconto}</h5>
                    </div>
                </div>

                <div className="w-full promoção">
                    <div className="w-[1200px] flex h-full animação">
                        <img
                            src={carrosselImagens.imagem3.url}
                            alt={carrosselImagens.imagem3.subTitulo}
                            className="w-full h-full"
                        />
                    </div>

                    <div className="z-10 absolute bottom-0 top-[15%] left-[200%] invisible transition duration-300 animação card-info">
                        <h3>{carrosselImagens.imagem3.title}</h3>
                        <h4>{carrosselImagens.imagem3.subTitulo}</h4>
                        <h5>{carrosselImagens.imagem3.desconto}</h5>
                    </div>
                </div>

                <div className="w-full promoção">
                    <div className="w-[1200px] flex h-full animação">
                        <img
                            src={carrosselImagens.imagem4.url}
                            alt={carrosselImagens.imagem4.subTitulo}
                            className="w-full h-full"
                        />
                    </div>

                    <div className="z-10 absolute bottom-0 top-[15%] left-[300%] invisible transition-all duration-300 animação card-info">
                        <h3>{carrosselImagens.imagem4.title}</h3>
                        <h4>{carrosselImagens.imagem4.subTitulo}</h4>
                        <h5>{carrosselImagens.imagem4.desconto}</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}