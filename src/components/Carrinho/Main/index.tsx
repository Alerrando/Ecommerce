import React, { useContext } from 'react';
import { ShoppingBag, ShoppingCart, Trash } from 'phosphor-react'
import { ShopContext } from '../../../context/shopContext'

export function Main() {
    const { user, setUser } = useContext(ShopContext);

    return (
        <main className='w-full h-screen md:pt-[10%] bg-[#e5e5e5]'>
            <div className='w-[90%] h-auto md:mx-20 py-4 px-8 bg-white'>
                <header className='w-full h-auto py-2 flex items-center justify-start gap-4'>
                    <ShoppingCart size={30} className="text-[#ff0000]" />
                    <h2 className='text-xl font-bold'>Meu Carrinho</h2>
                </header>

                <section className='w-full h-auto mt-[2%]'>
                    <div className='w-full h-auto py-2 border-b border-[#e5e5e5] flex items-center justify-between'>
                        <div className='flex flex-row-reverse items-center gap-6'>
                            <h2 className='font-bold text-xl'>Produtos</h2>
                            <ShoppingBag size={24} className="text-[#f00]" />
                        </div>

                        <div className='flex flex-row gap-4 border border-[#f00] cursor-pointer p-2' onClick={() => handleDeleteAllProducts()}>
                            <Trash size={26} className="text-[#f00]" />
                            <span className='text-[#f00] font-bold'>Remover Todos os Produtos</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );

    function handleDeleteAllProducts(){
        const deleteAllProducts = {};

        setUser(prevState => {
            return { ...prevState, carrinho: deleteAllProducts }
        })
    }
}