import { List, ShoppingCart } from "phosphor-react";
import React from "react";

export function Header(){
    return (
        <header className="h-20 md:h-44 w-full bg-white">
            <div className="alinhamento justify-between py-8 mx-4 md:mx-20">
                <h1 className="text-4xl font-Playfair-Display text-[#595959] font-semibold">TechSoft</h1>

                <div className="text-center gap-8 hidden md:flex">
                    <ShoppingCart size={24} weight="bold" />
                    <a href="">Login</a>
                </div>

                <List size={32} weight="bold" className="block md:hidden" />
            </div>

            <nav className="md:block fixed h-screen md:h-20 right-0 z-10 top-0 w-36 md:w-full bg-zinc-300 md:bg-transparent md:relative">
                <div className="block h-full md:flex md:items-center md:justify-between md:mx-20">
                    <ul className="grid h-20 md:flex md:items-center md:gap-6 font-Rokkitt text-lg">
                        <a href="" className="opacity-40 hover:opacity-80 transition-all">Promoções</a>
                        <a href="" className="opacity-40 hover:opacity-80 transition-all">Produtos</a>
                        <a href="" className="opacity-40 hover:opacity-80 transition-all">Crie o Seu</a>
                        <a href="" className="opacity-40 hover:opacity-80 transition-all">Sobre</a>
                    </ul>

                    <div className="md:flex md:items-center gap-4 hidden">
                        <input
                            type="text"
                            name="busca"
                            placeholder="Digite o que buscar..."
                            className="border-2 border-black rounded-xl p-2"
                        />
                        <button className="text-white bg-[#337ab7] border-2 border-black cursor-pointer py-2.5 px-5 rounded-[10px]">
                            Search
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}