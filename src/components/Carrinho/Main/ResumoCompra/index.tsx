import { ListChecks, Money, ShoppingBag } from 'phosphor-react';
import React, { useContext } from 'react';
import { ShopContext } from '../../../../context/shopContext';
import { Link } from 'react-router-dom'

type PriceProps = {
    price: number,
    quantProduct: number
}

export function ResumoCompra() {
    const { user } = useContext(ShopContext);
    const freight = calcFreight();

    return (
        <div className='w-full h-ful py-2 px-4'>
            <header className='w-full h-auto flex items-center gap-2 pb-2 border-b border-[#b9b9b9]'>
                <ListChecks size={32} />
                <h2>Resumo</h2>
            </header>

            <section className='w-full h-auto py-8 grid'>
                <div className='flex items-center justify-between pb-3 border-b border-[#e5e5e5]'>
                    <h2 className='opacity-60 text-sm'>Valor dos Produtos:</h2>
                    <span className='font-semibold'>{`R$${priceCart()}`}</span>
                </div>

                <div className='flex items-center justify-between py-3 border-b border-[#e5e5e5]'>
                    <h2 className='opacity-60 text-sm'>Frete: </h2>
                    <span className='font-semibold'>{`R$${freight}`}</span>
                </div>

                <div className='flex flex-col items-start py-3'>
                    <div className='w-full flex items-center justify-between'>
                        <h2 className='text-base'>Total: </h2>
                        <span className='font-semibold text-lg'>{`R$${priceCart() + freight}`}</span>
                    </div>

                    <div className='w-full flex flex-col items-start pt-6 pb-2 border-b border-[#b9b9b9]'>
                        <div className='w-full flex items-start justify-between'>
                            <img src="barcode-svgrepo-com.svg" alt="barcode" className='w-8 h-8' />
                            <span className='font-semibold text-lg text-green-600'>{`R$${calcDiscountTicket()}`}</span>
                        </div>
                    </div>
                </div>
                
                <div className='w-full h-full flex flex-col items-center justify-center gap-4 md:pt-[70%]'>
                    <button className='w-full flex items-center justify-between py-2 px-4 rounded bg-[#009e2a] text-white' onClick={() => confirmPurchase()}>
                        <ShoppingBag size={24} className="fill-white" />
                        <span className='font-bold'>Finalizar Compra</span> 
                    </button>

                    <Link to="/produtos" className='w-full flex items-center justify-between py-2 px-4 rounded border border-[#009e2a] text-[#009e24]'>
                        <span className='font-bold'>Continuar Comprando</span>
                    </Link>
                </div>
            </section>
        </div>
    );

    function priceCart(){
        let price = 0;

        if(Object.keys(user).length > 0){
            user.carrinho.forEach((cart: PriceProps) => {
                price += (cart.price * cart.quantProduct)
            })

            return price;
        }

        return 0;
    }

    function calcDiscountTicket(){
        return Math.floor(priceCart() + freight - (0.15 * (priceCart() + freight)));
    }

    function confirmPurchase(){
        Object.keys(user).length == 0 ? alert("Você precisa estar logado para realizar a compra") : 
        Object.keys(user.carrinho).length > 0 ? alert("Compra Realizada com sucesso")
        : alert("Adicione algum produto no carinho");
    }

    function calcFreight(){
        if(priceCart() > 150)
            return 0.0;
        else{
            return 100 * priceCart() / (1000);
        }
    }
}