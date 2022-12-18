import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  List,
  ShoppingCart,
  X,
} from "phosphor-react";
import React, { useContext, useState } from "react";
import { User, SignIn } from 'phosphor-react'
import { Link } from "react-router-dom";
import { ShopContext } from '../../../context/shopContext';

export function Header() {
  const [menu, setMenu] = useState("hidden");
  const { user } = useContext(ShopContext);

  function handleMenu() {
    menu == "block" ? setMenu("hidden") : setMenu("block");
  }

  return (
    <header className="h-20 md:h-auto w-full pt-4 md:fixed bg-white z-50">
      <div className="alinhamento justify-between pt-4 mx-4 md:mx-20">
        <h1 className="text-4xl font-Playfair-Display text-[#595959] font-semibold">
          TechSoft
        </h1>

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

        <div className="w-[90%] md:w-auto flex text-center justify-between md:justify-center gap-16 absolute top-[11%] md:relative">
          <div className="flex items-center justify-between gap-2">
            <ShoppingCart size={24} weight="bold" />
            <span>R$ 0,0</span>
          </div>
          { user.length == 0 ? (
            <Link to="/login" className="">
              <SignIn size={32} />
            </Link>
          ) : (
            <User size={32} />
            
          ) }
        </div>

        <List
          size={32}
          weight="bold"
          className="block md:hidden cursor-pointer"
          onClick={() => handleMenu()}
        />
      </div>

      <nav
        className={`md:block fixed h-screen md:h-20 right-0 z-20 top-0 w-36 md:w-full bg-[#337ab7] md:bg-transparent md:relative ${menu}`}
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

          <footer className="w-full md:hidden">
            <div className="alinhamento justify-around">
              <div className="w-10 h-10 rounded-full">
                <a
                  href="https://www.linkedin.com/in/alerrando-breno-656aa8188/"
                  target="_blank"
                  title="Linkedin"
                >
                  <LinkedinLogo
                    className="h-[80%] w-[80%] cursor-pointer transition-colors text-white"
                    weight="bold"
                  />
                </a>
              </div>

              <div className="w-10 h-10 rounded-full">
                <a
                  href="https://github.com/Alerrando"
                  target="_blank"
                  title="Github"
                >
                  <GithubLogo
                    size={32}
                    weight="bold"
                    className="h-[80%] w-[80%] cursor-pointer transition-colors text-white"
                  />
                </a>
              </div>

              <div className="w-10 h-10 rounded-full">
                <a
                  href="mailto:alerrando2@gmail.com"
                  target="_blank"
                  title="Email"
                >
                  <EnvelopeSimple
                    className="h-[80%] w-[80%] cursor-pointer transition-colors text-white"
                    weight="bold"
                  />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </nav>
    </header>
  );
}
