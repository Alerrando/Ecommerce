// @flow 
import * as React from 'react';
type MainProps = {
    produto: any;
};
export function Main(props: MainProps){
    const { produto } = props;

    return (
        <main className='w-full h-full'>
            <div className='py-4 px-[6rem] grid gap-4'>
                <p className='text-lg font-medium'>{`${produto.titulo} ${produto.subTitulo}`}</p>

                <div className='w-[350px] h-[520px]'>
                    <img src={`/public/${produto.img}`} alt={produto.url} className="w-full h-full bg-cover" />
                </div>
            </div>
        </main>
    );
};