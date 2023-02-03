import { Trash } from 'phosphor-react';
import React, { Key, useContext } from 'react';
import { CardKeys, ShopContext } from '../../../../context/shopContext';

export function ProdutosCarrinho() {
    const { user } = useContext(ShopContext);

    return (
        <>
            {user.carrinho.map((carrinho: CardKeys, index: Key) => (
                <div className='w-full h-full flex flex-col md:flex-row items-center border-b border-[#b9b9b9]' key={index}>
                    <div className='w-full h-full flex flex-row items-center'>
                        <div className='max-w-[8.4375rem] md:min-w-min md:max-w-[22%] h-full md:min-h-min md:max-h-[22%] pr-4 md:pr-0'>
                            <img src={carrinho.image} alt={carrinho.descricao} className="h-full w-full object-cover" />
                        </div>

                        <div className='w-auto h-[7.5rem] md:h-[22%] flex flex-col justify-between md:gap-16'>
                            <h2 className='text-sm md:text-base descricao-carrinho'>{carrinho.descricao}</h2>

                            <div className='w-fit flex flex-row justify-start gap-3 md:gap-4 border border-[#f00] cursor-pointer p-1'>
                                <Trash size={22} className="text-[#f00]" />
                                <span className='text-[#f00] text-sm md:text-base font-bold'>Remover Produto</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}