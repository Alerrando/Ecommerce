import { EnvelopeSimple, GithubLogo, LinkedinLogo, List, ShoppingCart, X, User, SignIn } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from '../../../context/shopContext';

export function Header() {
  const [menu, setMenu] = useState("hidden");
  const { user, priceCart } = useContext(ShopContext);

  function handleMenu() {
    menu == "block" ? setMenu("hidden") : setMenu("block");
  }

  useEffect(() => { 
    priceCart()
  }, [user.carrinho])


  return (
    <header className="h-20 md:h-auto w-full pt-4 lg:pt-0 md:fixed bg-white z-50">
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
            <span>R$ {priceCart()}</span>
          </div>

          { Object.keys(user).length == 0 ? (
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
        className={`md:block fixed h-screen md:h-20 lg:h-14 left-0 z-20 top-0 w-[80%] md:w-full bg-sombreamento md:bg-transparent md:relative ${menu}`}
      >
        <div className="h-full flex flex-col md:flex-row md:items-center md:justify-between pl-4 md:pl-0 bg-white text-black md:mx-20">
          <X
            size={30}
            weight="bold"
            className="block my-2 cursor-pointer md:hidden"
            onClick={() => handleMenu()}
          />

          <ul className="flex flex-col md:flex-row justify-center h-auto items-start md:items-center gap-8 md:gap-6 mt-16 md:mt-0 font-Rokkitt text-base md:text-lg">
            <Link to="/" className="w-[80%] opacity-40 hover:opacity-80 border-b border-[#e5e5e5] md:border-none font-medium transition-all" >
              Home
            </Link>
            <Link to="/produtos" className="w-[80%] opacity-40 hover:opacity-80  border-b border-[#e5e5e5] md:border-none font-medium transition-all" >
              Produtos
            </Link>
            <Link to="/contato" className="w-[80%] opacity-40 hover:opacity-80  border-b border-[#e5e5e5] md:border-none font-medium transition-all" >
              Contato
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}