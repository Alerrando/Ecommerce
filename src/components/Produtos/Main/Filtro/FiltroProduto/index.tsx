import { X } from 'phosphor-react';
import React from 'react';

type FiltroProdutoProps = {
    setModalFiltro: (modalFiltro: boolean) => void,
}

export function FiltroProduto(props: FiltroProdutoProps) {
    const { setModalFiltro } = props;
    return (
        <div className="w-full h-screen fixed top-0 left-0 bg-sombreamento z-50">
            <div className='w-4/5 md:w-1/3 h-full px-8 bg-white'>
                <header className='h-auto py-4 w-full flex items-center justify-end'>
                    <X size={28} className="cursor-pointer" onClick={() => setModalFiltro(false)} />
                </header>
            </div>
        </div>
    );
}