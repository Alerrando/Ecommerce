import React, { useContext, useEffect, useState } from 'react';
import { CardKeys, ShopContext } from '../../../context/shopContext';
import { getProdutos } from '../../../api/index'

export function Main() {
    const [favoritesProducts, setFavoritesProducts] = useState<CardKeys[]>([] as CardKeys[]);
    const { favoritos ,products } = useContext(ShopContext);

    useEffect(() => {
        filterFavoritesProducts();
    }, [])

    return (
        <main className='w-full h-screen pt-[3%] md:pt-[12%] pb-6 bg-[#e5e5e5] flex flex-row justify-center'>
            <section className='w-full md:w-[90%] h-auto py-4 px-4 md:px-8 bg-white'>
                
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
}