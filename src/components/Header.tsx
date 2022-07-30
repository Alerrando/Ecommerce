import { ShoppingCart } from "phosphor-react";

export function Header(){
    return (
        <header className="h-36 w-full bg-white">
            <div className="alinhamento justify-between py-8 mx-20">
                <h1 className="text-4xl font-Playfair-Display text-[#595959] font-semibold">TechSoft</h1>

                <div className="flex text-center gap-8">
                    <ShoppingCart size={24} weight="bold" />
                    <a href="">Login</a>
                </div>
            </div>

            <nav>
                <div className="alinhamento justify-between mx-20">
                    <ul className="alinhamento gap-6 font-Rokkitt">
                        <a href="">Promoções</a>
                        <a href="">Produtos</a>
                        <a href="">Crie o Seu</a>
                        <a href="">Sobre</a>
                    </ul>
                    
                    <div className="alinhamento gap-4">
                        <input type="text" name="" id=""  placeholder="Digite o que buscar..."/>
                        <button>Buscar</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}