import React from "react";
import { carrosselImagens } from "../Main";

export function Carrossel() {
  return (
    <section>
      <div className="w-full h-[22rem] md:h-[39rem] flex relative overflow-x-hidden">
        {carrosselImagens.map((imagem, index) => (
          <>
            <div className="w-full">
              <div className="w-96 md:w-[1500px] flex h-full animação">
                <img
                  src={carrosselImagens[index].url}
                  alt={carrosselImagens[index].subTitulo}
                  className="w-full h-full bg-cover"
                />
              </div>

              <div className="z-10 absolute bottom-0 top-[15%] pl-8 md:pl-16 invisible transition-all duration-300 animação card-info">
                <h3 className="text-red-600 text-2xl font-medium">
                  {carrosselImagens[index].title}
                </h3>
                <h4 className="text-white text-xl font-medium mt-1">
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
