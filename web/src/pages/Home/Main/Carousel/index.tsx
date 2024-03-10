import React, { useContext } from "react";
import { ShopContext } from "../../../../context/shopContext";
import { productsStatic } from "../../../../utils";

export function Carousel() {
  const { products } = useContext(ShopContext);

  return (
    <section className="w-full h-[22rem] md:h-[30rem] flex relative overflow-x-hidden">
        {handleImagesCarousel().map((imagem, index) => {
          return (
            <div className="w-full relative promoção group" key={index}>
              <div className="w-screen flex h-full animação">
                <img
                  src={imagem.image[0]}
                  alt={imagem.subTitulo}
                  className="w-full h-full bg-cover"
                />
              </div>

              <div className="z-10 absolute bottom-0 top-[15%] pl-8 md:pl-16 transition-all duration-300 animação card-info invisible group-hover:visible">
                <h3 className="text-red-600 text-2xl md:text-3xl font-medium">
                  {imagem.titulo}
                </h3>
                <h4 className="text-white text-xl md:text-2xl font-medium mt-1">
                  {imagem.subTitulo}
                </h4>
                <h5 className="text-blue-600 mt-5 font-bold">{`${imagem.desconto}% de desconto`}</h5>
              </div>
            </div>
          );
        })}
    </section>
  );

  function handleImagesCarousel(){
    return products.length > 0 ? products.filter(product => product.desconto !== 0) : productsStatic.filter((product) => product.destaque === 1);
  }
}
