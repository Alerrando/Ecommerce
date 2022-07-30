import { ShoppingCart } from "phosphor-react";

export function Header(){
    return (
        <header className="h-44 w-full bg-white">
            <div className="alinhamento justify-between py-8 mx-20">
                <h1 className="text-4xl font-Playfair-Display text-[#595959] font-semibold">TechSoft</h1>

                <div className="flex text-center gap-8">
                    <ShoppingCart size={24} weight="bold" />
                    <a href="">Login</a>
                </div>
            </div>

            <nav>
                <div className="alinhamento justify-between mx-20">
                    <ul className="alinhamento gap-6 font-Rokkitt text-lg">
                        <a href="" className="opacity-40 hover:opacity-80 transition-all">Promoções</a>
                        <a href="" className="opacity-40 hover:opacity-80 transition-all">Produtos</a>
                        <a href="" className="opacity-40 hover:opacity-80 transition-all">Crie o Seu</a>
                        <a href="" className="opacity-40 hover:opacity-80 transition-all">Sobre</a>
                    </ul>
                    
                    <div className="alinhamento gap-4">
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