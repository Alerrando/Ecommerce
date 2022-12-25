// @flow 
import { HouseSimple } from 'phosphor-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
type MainProps = {
    produto: any;
};
export function Main(props: MainProps){
    const { produto } = props;

    return (
        <main className='w-full h-full'>
            <div className='py-4 px-[6rem] grid gap-4'>
                <div className='w-[32.5rem] flex items-center gap-6'>
                    <Link to="/">
                        <HouseSimple size={22} />                    
                    </Link>
                    <span>{">"}</span>
                    <p className='text-lg font-medium cursor-pointer hover:underline'>{`${produto.titulo} ${produto.subTitulo}`}</p>

                </div>
                
                <div className='flex gap-6'>
                    <div className='grid gap-8'>
                        <img src={`${produto.img}`} alt={produto.url} className="w-32 h-32 bg-cover"  />
                    </div>

                    <div className='w-[21.875rem] h-[32.5rem]'>
                        <img src={`${produto.img}`} alt={produto.url} className="w-full h-full bg-cover" />
                    </div>
                </div>
            </div>
        </main>
    );
};