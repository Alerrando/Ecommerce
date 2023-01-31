import React from 'react';
import { ShoppingCart } from 'phosphor-react'

export function Main() {
    return (
        <main className='w-full h-screen md:pt-[10%] bg-[#e5e5e5]'>
            <div className='w-[90%] h-auto md:mx-20 bg-white'>
                <header className='w-full h-auto py-2 flex items-center justify-start gap-4'>
                    <ShoppingCart size={30} className="text-[#ff0000]" />
                    <h2 className='text-xl font-bold'>Meu Carrinho</h2>
                </header>

            </div>
        </main>
    );
}