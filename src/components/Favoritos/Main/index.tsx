import React, { Key, useContext, useEffect, useState } from 'react';
import { HeartStraight, ShoppingCart } from 'phosphor-react'
import { CardKeys, ShopContext } from '../../../context/shopContext';
import { getProdutos } from '../../../api/index'
import { Link }from 'react-router-dom'

export function Main() {
    const [favoritesProducts, setFavoritesProducts] = useState<CardKeys[]>([] as CardKeys[]);
    const { favoritos , addCart, handleFavorites } = useContext(ShopContext);


    useEffect(() => {
        filterFavoritesProducts();
    }, [])

    return (
        <main className='w-full h-screen pt-[5%] md:pt-[12%] px-2 bg-[#e5e5e5] flex flex-row justify-center'>
            <section className='w-full md:w-[90%] h-[93%] md:h-[85%] py-2 md:py-4 px-2 md:px-8 bg-white'>
                <header className='w-full h-auto py-4 flex flex-row items-center justify-start gap-6'>
                    <HeartStraight size={32} className="hearth-favorites text-[#dc2626]" />
                    <h2 className='text-2xl font-bold'>Favoritos</h2>
                </header>

                <div className='w-full h-auto md:h-full flex flex-col items-center justify-start gap-4 overflow-auto'>
                    {favoritesProducts.map((product: CardKeys, index: Key) => (
                        <div className='w-full h-auto md:h-44 flex flex-col md:flex-row items-center justify-between px-2 py-1 border'>
                            <div className='w-full md:w-3/5 h-full flex items-start justify-start'>
                                <div className='max-w-[8.4375rem] md:min-w-min md:max-w-[30%] h-full pr-4 md:pr-0'>
                                    <img src={product.image} alt={product.descricao} className="h-full w-full object-cover" />
                                </div>

                                <div className='w-[80%] h-full flex flex-col items-start ml-4'>
                                    <span className='text-sm font-normal text-[#7F858D]'>{product.titulo}</span>
                                    <h2 className='text-sm font-bold md:text-xl'>{product.descricao}</h2>
                                </div>
                            </div>

                            <div className='w-full md:w-2/5 h-full flex flex-row justify-between border-t md:border-t-0 pt-6 gap-6'>
                                <div className='w-auto h-[80%] flex flex-col items-start justify-center gap-3 md:border-x md:px-12'>
                                    <span className='text-xs font-semibold md:text-sm opacity-60 line-through'>{`R$${product.price},00`}</span>

                                    <div className='flex flex-col gap-2'>
                                        <span className='text-xl md:text-2xl font-semibold text-green-600'>{`R$${calcDiscountTicket(product.price)},00`}</span>
                                        <span className='text-xs opacity-40 font-bold'>À vista no Pix</span>
                                    </div>
                                </div>

                                <div className='w-auto h-full flex flex-col items-end justify-between gap-4 md:gap-0'>
                                    <span className='text-lg md:text-xl' onClick={() => handleFavorites(product.subTitulo)}>{favoritos.includes(product.subTitulo) ? "❤️" : "🖤"}</span>

                                    <button className='w-auto] md:w-full flex items-center justify-between py-2 px-4 rounded bg-[#009e2a] text-white' onClick={e => handleAddCart(e, product)}>
                                        <ShoppingCart size={24} className="fill-white" />
                                        <span className='font-bold'>Comprar</span> 
                                    </button>
                                </div>
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