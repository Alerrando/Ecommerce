// @flow
import { ShoppingCart, SignIn, User } from "phosphor-react";
import * as React from "react";
import { Link } from "react-router-dom";
import { ShopContext } from '../../../context/shopContext';

export function Header() {
    const { user } = React.useContext(ShopContext)

  return (
    <header className="w-full h-auto flex items-center justify-center border-b border-b-zinc-300">
      <div className="w-full alinhamento justify-between py-4 mx-4 md:mx-20">
        <Link
          to="/"
          className="text-3xl font-Playfair-Display text-[#474747] font-semibold"
        >
          TechSoft
        </Link>
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

        <div className="w-[90%] md:w-auto flex text-center justify-end md:justify-center gap-8 md:gap-16">
            <div className="flex items-center justify-between gap-2">
            <ShoppingCart size={24} weight="bold" />
            <span>R$ 0,0</span>
            </div>
            {user.length == 0 ? (
            <Link to="/login" className="">
                <SignIn size={32} />
            </Link>
            ) : (
            <User size={32} />
            )}
        </div>
      </div>

    </header>
  );
}
