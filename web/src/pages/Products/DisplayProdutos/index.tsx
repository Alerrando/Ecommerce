import React, { useContext } from 'react';
import { Cards } from '../../../components';
import { useSearchParams } from 'react-router-dom';
import { ShopContext } from '../../../context/shopContext';

export function DisplayProdutos() {
    const { applyFilter } = useContext(ShopContext);
    const [searchParams] = useSearchParams();
    const typeProduct = searchParams.get('typeProduct');
    const price = searchParams.get('price');
    const categories = searchParams.get('categories');


    return (
        <section className="w-full my-8 px-8">
            <Cards 
                cardsInfo={applyFilter({typeProduct, price, categories})} 
                pages={"produtos"} 
                className='flex flex-wrap gap-y-4'
                classNameCards='md:w-5/12' 
            />
        </section>
    );
}