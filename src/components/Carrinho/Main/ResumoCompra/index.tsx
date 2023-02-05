import { ListChecks } from 'phosphor-react';
import React from 'react';

export function ResumoCompra() {
    return (
        <div className='w-full h-ful py-2 px-4'>
            <header className='w-full h-auto flex items-center gap-2 pb-2 border-b border-[#b9b9b9]'>
                <ListChecks size={32} />
                <h2>Resumo</h2>
            </header>
        </div>
    );
}