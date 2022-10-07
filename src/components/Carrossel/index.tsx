import React from "react";
import { carrosselImagens } from "../Main";

export function Carrossel() {
  return (
    <section>
      <div className="w-full h-[22rem] md:h-[39rem] flex relative overflow-x-hidden">
        {carrosselImagens.map((imagem, index) => (
          <>
            <div className="w-full relative promoção">
              <div className="w-[27rem] md:w-[1735px] flex h-full animação">
                <img
                  src={carrosselImagens[index].url}
                  alt={carrosselImagens[index].subTitulo}
                  className="w-full h-full bg-cover"
                />
              </div>

              <div className="z-10 absolute bottom-0 top-[15%] pl-8 md:pl-16 invisible transition-all duration-300 animação card-info">
                <h3 className="text-red-600 text-2xl md:text-3xl font-medium">
                  {carrosselImagens[index].title}
                </h3>
                <h4 className="text-white text-xl md:text-2xl font-medium mt-1">
                  {carrosselImagens[index].subTitulo}
                </h4>
                <h5 className="text-white mt-5">
                  {carrosselImagens[index].desconto}
                </h5>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
