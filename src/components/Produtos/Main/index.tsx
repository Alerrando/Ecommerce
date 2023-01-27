import React from 'react';
import { DisplayProdutos } from './DisplayProdutos';
import { Filtro } from './Filtro';

export function Main(props) {
    return (
        <main className='w-full h-full pt-[12%] px-20 bg-[#F1F3F8]'>
            <div className=''>
                <Filtro />
                <DisplayProdutos />
            </div>
        </main>
    );
}