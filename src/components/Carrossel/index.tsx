import { carrosselImagens } from "../Main";


export function Carrossel(){
    console.log(carrosselImagens.imagem1);
    return (
        <section>
            <div className="w-full h-[39rem] flex relative overflow-x-hidden">
                <div className="w-full promoção">
                    <div className="w-[1000px] flex h-full animação">
                        <img
                            src={carrosselImagens.imagem1.url}
                            alt={carrosselImagens.imagem1.subTitulo}
                            className="w-full h-full"
                        />
                    </div>

                    <div className="z-10 absolute bottom-0 top-[15%] pl-16 invisible transition-all duration-300 animação card-info">
                        <h3 className="text-red-600 text-3xl font-medium">
                            {carrosselImagens.imagem1.title}
                        </h3>
                        <h4 className="text-white text-2xl font-medium mt-1">
                            {carrosselImagens.imagem1.subTitulo}
                        </h4>
                        <h5 className="text-white mt-5">
                            {carrosselImagens.imagem1.desconto}
                        </h5>
                    </div>
                </div>

                <div className="w-full promoção">
                    <div className="w-[1000px] flex h-full animação">
                        <img
                            src={carrosselImagens.imagem2.url}
                            alt={carrosselImagens.imagem2.subTitulo}
                            className="w-full h-full"
                        />
                    </div>

                    <div className="z-10 absolute bottom-0 top-[15%] left-[100%] pl-16 invisible transition-all duration-300 animação card-info">
                        <h3 className="text-red-600 text-3xl font-medium">
                            {carrosselImagens.imagem2.title}
                        </h3>
                        <h4 className="text-white text-2xl font-medium mt-1">
                            {carrosselImagens.imagem2.subTitulo}
                        </h4>
                        <h5 className="text-white mt-5">
                            {carrosselImagens.imagem2.desconto}
                        </h5>
                    </div>
                </div>

                <div className="w-full promoção">
                    <div className="w-[1000px] flex h-full animação">
                        <img
                            src={carrosselImagens.imagem3.url}
                            alt={carrosselImagens.imagem3.subTitulo}
                            className="w-full h-full"
                        />
                    </div>

                    <div className="z-10 absolute bottom-0 top-[15%] left-[200%] pl-16 invisible transition-all duration-300 animação card-info">
                        <h3 className="text-red-600 text-3xl font-medium">
                            {carrosselImagens.imagem3.title}
                        </h3>
                        <h4 className="text-white text-2xl font-medium mt-1 shadow-sm">
                            {carrosselImagens.imagem3.subTitulo}
                        </h4>
                        <h5 className="text-white mt-5">
                            {carrosselImagens.imagem3.desconto}
                        </h5>
                    </div>
                </div>

                <div className="w-full promoção">
                    <div className="w-[1000px] flex h-full animação">
                        <img
                            src={carrosselImagens.imagem4.url}
                            alt={carrosselImagens.imagem4.subTitulo}
                            className="w-full h-full"
                        />
                    </div>

                    <div className="z-10 absolute bottom-0 top-[15%] left-[300%] pl-16 invisible transition-all duration-300 animação card-info">
                        <h3 className="text-red-600 text-3xl font-medium">
                            {carrosselImagens.imagem4.title}
                        </h3>
                        <h4 className="text-white text-2xl font-medium mt-1">
                            {carrosselImagens.imagem4.subTitulo}
                        </h4>
                        <h5 className="text-white mt-5">
                            {carrosselImagens.imagem4.desconto}
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    )
}