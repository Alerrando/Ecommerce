import React, { useContext } from "react";
import { ShopContext } from "../../../../context/shopContext";

export function Carrossel() {
  const { products } = useContext(ShopContext);
  const imagensCarouselStatic = [
    {
      imagemCarrossel: "/Carrossel/produto1.webp",
      titulo: "Nintendo Switch",
      subTitulo: "Console Nintendo Switch",
      desconto: "25%",
    },

    {
      imagemCarrossel: "/Carrossel/produto2.webp",
      titulo: "Ipad",
      subTitulo: "Apple Ipad Pro",
      desconto: "8%",
    },

    {
      imagemCarrossel: "/Carrossel/produto3.webp",
      titulo: "Tv 25'",
      subTitulo: "Console Nintendo Switch",
      desconto: "25%",
    },

    {
      imagemCarrossel: "/Carrossel/produto4.webp",
      titulo: "Playstation 5",
      subTitulo: "Microsoft Playstation 5",
      desconto: "12%",
    }
  ]

  return (
    <section>
      <div className="w-full h-[22rem] md:h-[30rem] flex relative overflow-x-hidden">
        {handleImagesCarousel().map((imagem, index) => {
          return (
            <div className="w-full relative promoção" key={index}>
              <div className="w-[27rem] md:w-[77rem] xl:w-[85rem] flex h-full animação">
                <img
                  src={imagem.imagemCarrossel}
                  alt={imagem.subTitulo}
                  className="w-full h-full bg-cover"
                />
              </div>

              <div className="z-10 absolute bottom-0 top-[15%] pl-8 md:pl-16 invisible transition-all duration-300 animação card-info">
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
      </div>
    </section>
  );

  function handleImagesCarousel(){
    return products.length > 0 ? products.filter(product => product.desconto !== 0) : imagensCarouselStatic;
  }
}
