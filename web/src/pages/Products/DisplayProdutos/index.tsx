import React from 'react';
import { Cards } from '../../../components';
import { productsStatic } from '../../../utils';

export function DisplayProdutos() {
    return (
        <section className="w-min md:w-auto md:max-w-full mx-auto mt-8 mb-14">
            <Cards cardsInfo={productsStatic} pages={"produtos"} />
        </section>
    );
}