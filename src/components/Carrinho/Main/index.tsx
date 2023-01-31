import React, { useContext } from 'react';
import { ShoppingCart } from 'phosphor-react'
import { CardKeys, ShopContext } from '../../../context/shopContext';

export function Main() {
    const { user } = useContext(ShopContext);


    return (
        <main className='w-full h-screen md:pt-[10%] bg-[#e5e5e5]'>
            <div className='w-full md:w-[90%] h-auto md:mx-20 bg-white'>
                <header className='w-full h-auto py-2 flex items-center justify-start gap-4'>
                    <ShoppingCart size={30} className="text-[#ff0000]" />
                    <h2 className='text-xl font-bold'>Meu Carrinho</h2>
                </header>

                <section className='w-full h-auto py-4 overflow-x-auto'>
                    <table className='w-full border-collapse'>
                        <thead className='text-base md:text-lg border-b border-[#e5e5e5]'>
                            <td className='p-1 w-3/5'>Produtos</td>
                            <td className='p-1'>Quantidade</td>
                            <td className='p-1'>Preço</td>
                        </thead>

                        <tbody>
                            {Object.keys(user).length != 0 ? (
                                <>
                                    {user.carrinho.map((produto: CardKeys, index: number) => (
                                        <tr className='border-b-2 text-base md:text-lg'>
                                            <td className='flex flex-col md:flex-row items-center justify-center md:justify-start'>
                                                <img src={produto.imageDestaque} alt={produto.descricao} className="h-full w-1/5 mx-auto md:mx-0" />
            
                                                <div className='h-auto w-auto flex items-center justify-center'>
                                                    <h3>{produto.descricao}</h3>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </>
                            ): null}
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    );
}