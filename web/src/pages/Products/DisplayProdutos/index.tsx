import React from 'react';
import { Cards } from '../../../components';
import { productsStatic } from '../../../utils';

export function DisplayProdutos() {
    return (
        <section className="w-full my-8 px-8">
            <Cards 
                cardsInfo={productsStatic} 
                pages={"produtos"} 
                className='flex flex-wrap gap-y-4'
                classNameCards='md:w-5/12' 
            />
        </section>
    );
}