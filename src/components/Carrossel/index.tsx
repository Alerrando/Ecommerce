import { carrosselImagens } from "../Main";


export function Carrossel(){
    console.log(carrosselImagens.imagem1);
    return (
        <section>
            <div className="w-full h-[30rem] flex overflow-x-hidden">
                <div className="w-full">
                    <div className="w-[1200px] h-full">
                        <img
                            src={carrosselImagens.imagem1.url}
                            alt={carrosselImagens.imagem1.subTitulo}
                            className="w-full h-full"
                        />
                    </div>

                    <div>

                    </div>
                </div>

                <div className="w-full">
                    <div className="w-[1200px] h-full">
                        <img
                            src={carrosselImagens.imagem2.url}
                            alt={carrosselImagens.imagem2.subTitulo}
                            className="w-full h-full"
                        />
                    </div>

                    <div>

                    </div>
                </div>

                <div className="w-full">
                    <div className="w-[1200px] h-full">
                        <img
                            src={carrosselImagens.imagem3.url}
                            alt={carrosselImagens.imagem3.subTitulo}
                            className="w-full h-full"
                        />
                    </div>

                    <div>

                    </div>
                </div>

                <div className="w-full">
                    <div className="w-[1200px] h-full">
                        <img
                            src={carrosselImagens.imagem4.url}
                            alt={carrosselImagens.imagem4.subTitulo}
                            className="w-full h-full"
                        />
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}