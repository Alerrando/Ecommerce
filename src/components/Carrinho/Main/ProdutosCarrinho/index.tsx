import { ArrowLeft, Minus, Plus, Trash } from 'phosphor-react';
import React, { Key, useContext, useState } from 'react';
import { CardKeys, ShopContext } from '../../../../context/shopContext';

export function ProdutosCarrinho() {
    const { user, setUser } = useContext(ShopContext);

    console.log(user.carrinho)


    return (
        <>
            {user.carrinho.map((carrinho: CardKeys, index: Key) => (
                <div className='w-full h-full flex flex-col md:flex-row items-center border-b border-[#b9b9b9]' key={index}>
                    <div className='w-full h-full flex flex-row items-center justify-between'>
                        <div className='max-w-[8.4375rem] md:min-w-min md:max-w-[22%] h-full md:min-h-min md:max-h-[22%] pr-4 md:pr-0'>
                            <img src={carrinho.image} alt={carrinho.descricao} className="h-full w-full object-cover" />
                        </div>

                        <div className='w-full h-full flex flex-col justify-between p-2 gap-8 md:gap-16'>
                            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0'>
                                <h2 className='md:w-[60%] w-full text-sm md:text-base descricao-carrinho '>{carrinho.descricao}</h2>

                                <div className='flex items-center flex-row justify gap-3 sm:gap-4'>
                                    <div className='border border-zinc-400 py-1 sm:py-2 w-7 sm:w-9 text-sm sm:text-lg flex items-center justify-center rounded cursor-pointer' onClick={() => carrinho.quantProduct > 1 ? handleAddOrRemoveQuantProduct(carrinho, index, false) : null}>
                                        <Minus size={18}/>
                                    </div>
                                    
                                    <input className='border border-zinc-400 focus:border-zinc-400 w-10 sm:w-12 text-center py-1 sm:py-2 rounded-md' pattern='[0-9]' type="number" value={carrinho.quantProduct} max={99} />
                                    
                                    <div className='border border-zinc-400 py-1 w-7 sm:w-9 text-sm sm:text-lg flex items-center justify-center rounded cursor-pointer' onClick={() => carrinho.quantProduct > 0 ? handleAddOrRemoveQuantProduct(carrinho, index, true) : null}>
                                        <Plus size={18}/>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='flex flex-row md:items-start items-center justify-between gap-6 md:gap-0'>
                                <div className='w-fit flex flex-row items-center justify-start gap-3 md:gap-4 border border-[#f00] cursor-pointer p-2 md:p-1' onClick={() => handleDelete(index)}>
                                    <Trash size={22} className="text-[#f00]" />
                                    <span className='hidden md:block text-[#f00] text-sm md:text-base font-bold'>Remover Produto</span>
                                </div>
                                
                                <div className='h-full w-auto flex items-end justify-start'>
                                    <span className='text-[#337AB7] font-bold text-base md:text-lg'>{`R$ ${calcProduct(carrinho.price, carrinho.quantProduct)}`}</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            ))}
        </>
    );

    function handleAddOrRemoveQuantProduct(product: CardKeys, index: Key, addOrRemove: boolean){
        let infoProduto = {
            id: product.id,
            url: product.url,
            image: product.image,
            titulo: product.titulo,
            subTitulo: product.subTitulo,
            desconto: product.desconto,
            categoria: product.categoria,
            destaque: product.destaque,
            imageDestaque: product.imageDestaque,
            descricao: product.descricao,
            price: product.price,
            estoque: product.estoque,
            imagemCarrossel: product.imagemCarrossel,
            quantProduct: addOrRemove ?  product.quantProduct + 1 : product.quantProduct - 1,
        }

        const auxCarrinho = user.carrinho.map((carrinho: CardKeys, indexCarrinho) => {
            if(indexCarrinho === index){
                return infoProduto
            }

            return carrinho
        })

        console.log(auxCarrinho, infoProduto)

        setUser(prevState => {
            return { ...prevState, carrinho: auxCarrinho }
        })
    }

    function handleDelete(index: Key){
        const aux = user.carrinho;

        aux.splice(index as number, 1);

        setUser(prevState => {
            return { ...prevState, carrinho: aux }
        })
    }

    function calcProduct(price: number, quant:number){
        console.log(price, quant)
        return price * quant;
    }
}