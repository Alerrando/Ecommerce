import React, { Key, useContext, useEffect, useState } from 'react';
import { ShoppingCart } from 'phosphor-react'
import { CardKeys, ShopContext } from '../../../context/shopContext';
import { getProdutos } from '../../../api/index'
import { Link }from 'react-router-dom'

export function Main() {
    const [favoritesProducts, setFavoritesProducts] = useState<CardKeys[]>([] as CardKeys[]);
    const { favoritos , addCart } = useContext(ShopContext);


    useEffect(() => {
        filterFavoritesProducts();
    }, [])

    return (
        <main className='w-full h-screen pt-[3%] md:pt-[12%] pb-6 bg-[#e5e5e5] flex flex-row justify-center'>
            <section className='w-full md:w-[90%] h-auto py-4 px-4 md:px-8 bg-white'>
                <div className='w-full h-full flex flex-col items-center justify-start'>
                    {favoritesProducts.map((product: CardKeys, index: Key) => (
                        <div className='w-full h-44 flex flex-row items-center justify-between px-2 py-1 border'>
                            <div className='w-[60%] h-full flex items-start justify-start'>
                                <div className='max-w-[8.4375rem] md:min-w-min md:max-w-[30%] h-full pr-4 md:pr-0'>
                                    <img src={product.image} alt={product.descricao} className="h-full w-full object-cover" />
                                </div>

                                <div className='w-[80%] h-full flex flex-col items-start ml-4'>
                                    <span className='text-sm font-normal text-[#7F858D]'>{product.titulo}</span>
                                    <h2 className='text-base font-bold md:text-xl'>{product.descricao}</h2>
                                </div>
                            </div>

                            <div className='w-auto h-full flex flex-col items-start gap-6'>
                                <span className='opacity-60 line-through'>{`R$${product.price},00`}</span>
                                <span className='font-semibold text-lg text-green-600'>{`R$${calcDiscountTicket(product.price)},00`}</span>
                            </div>

                            <div className='w-auto h-full flex flex-col items-end justify-between'>
                                <span className='text-lg md:text-xl'>{favoritos.includes(product.subTitulo) ? "❤️" : "🖤"}</span>

                                <button className='w-full flex items-center justify-between py-2 px-4 rounded bg-[#009e2a] text-white' onClick={e => handleAddCart(e, product)}>
                                    <ShoppingCart size={24} className="fill-white" />
                                    <span className='font-bold'>Comprar</span> 
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );

    async function filterFavoritesProducts(){
        const aux: CardKeys[] = await getProdutos();
        const auxProduct: CardKeys[] = [];

        favoritos.map(favorito => {
            aux.map(producto => {
                if(favorito == producto.subTitulo)
                    auxProduct.push(producto);
            })
        })

        setFavoritesProducts(auxProduct)
    }

    function handleAddCart(e, product: CardKeys){
        e.preventDefault();

        addCart(1, product)
  }

  function calcDiscountTicket(price: number){
    return Math.floor(price - (0.15 * price));
}
}