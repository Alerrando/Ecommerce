import React from 'react';
import { Filtro } from './Filtro';

export function Main(props) {
    return (
        <main className='w-full h-screen  pt-[12%] mx-auto bg-[#F1F3F8]'>
            <div className='flex items-center justify-between w-full h-full'>
                <Filtro />
            </div>
        </main>
    );
}