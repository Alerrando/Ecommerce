import { ShoppingCart } from "phosphor-react";

export function Header(){
    return (
        <header className="h-36 w-full bg-white">
            <div className="flex items-center justify-between py-8 mx-20">
                <h1 className="text-4xl font-Playfair-Display text-[#595959] font-semibold">TechSoft</h1>

                <div className="flex text-center gap-8">
                    <ShoppingCart size={24} weight="bold" />
                    <a href="">Login</a>
                </div>
            </div>
        </header>
    )
}