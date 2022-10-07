import {
  EnvelopeSimple,
  LinkedinLogo,
  List,
  ShoppingCart,
  X,
} from "phosphor-react";
import React, { useState } from "react";

export function Header() {
  const [menu, setMenu] = useState("hidden");

  function handleMenu() {
    menu == "block" ? setMenu("hidden") : setMenu("block");
  }

  return (
    <header className="h-20 md:h-44 w-full bg-white">
      <div className="alinhamento justify-between py-8 mx-4 md:mx-20">
        <h1 className="text-4xl font-Playfair-Display text-[#595959] font-semibold">
          TechSoft
        </h1>

        <div className="text-center gap-8 hidden md:flex">
          <ShoppingCart size={24} weight="bold" />
          <a href="">Login</a>
        </div>

        <List
          size={32}
          weight="bold"
          className="block md:hidden cursor-pointer"
          onClick={() => handleMenu()}
        />
      </div>

      <nav
        className={`md:block fixed h-screen md:h-20 right-0 z-10 top-0 w-36 md:w-full bg-[#337ab7] md:bg-transparent md:relative ${menu}`}
      >
        <div className="grid grid-rows-sidebar h-full md:flex md:items-center md:justify-between text-white md:text-black md:mx-20">
          <X
            size={30}
            weight="bold"
            className="block my-2 ml-2 cursor-pointer md:hidden"
            onClick={() => handleMenu()}
          />

          <ul className="grid justify-center h-20 md:flex items-center gap-4 md:gap-6 font-Rokkitt text-xl md:text-lg">
            <a
              href=""
              className="md:opacity-40 md:hover:opacity-80 transition-all"
            >
              Promoções
            </a>
            <a
              href=""
              className="md:opacity-40 md:hover:opacity-80 transition-all"
            >
              Produtos
            </a>
            <a
              href=""
              className="md:opacity-40 md:hover:opacity-80 transition-all"
            >
              Crie o Seu
            </a>
            <a
              href=""
              className="md:opacity-40 md:hover:opacity-80 transition-all"
            >
              Sobre
            </a>
          </ul>

          <div className="md:flex md:items-center gap-4 hidden">
            <input
              type="text"
              name="busca"
              placeholder="Digite o que buscar..."
              className="border-2 border-black rounded-xl p-2"
            />
            <button className="text-white bg-[#337ab7] cursor-pointer py-2.5 px-5 rounded-[10px]">
              Search
            </button>
          </div>

          <footer className="w-full md:hidden">
            <div className="alinhamento justify-around">
              <div className="w-10 h-10 rounded-full">
                <LinkedinLogo
                  className="h-[80%] w-[80%] cursor-pointer transition-colors text-black"
                  weight="bold"
                />
              </div>

              <div className="w-10 h-10 rounded-full">
                <img
                  src="github-svgrepo-com.svg"
                  alt=""
                  className="cursor-pointer h-[70%] w-[70%]"
                />
              </div>

              <div className="w-10 h-10 rounded-full">
                <EnvelopeSimple
                  className="h-[80%] w-[80%] cursor-pointer transition-colors text-black"
                  weight="bold"
                />
              </div>
            </div>
          </footer>
        </div>
      </nav>
    </header>
  );
}
