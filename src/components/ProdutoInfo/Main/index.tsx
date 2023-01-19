import { HouseSimple } from 'phosphor-react';
import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProdutos } from '../../../api';
import { CardKeys, ShopContext } from '../../../context/shopContext';

type MainProps = {
    produto: CardKeys
}

export function Main(props: MainProps) {
    const { id, url } = useParams();
    const { produto } = props;

    return (
        <main className='w-full h-full'>
            <div className='py-4 px-[6rem] flex flex-col gap-6'>
                <div className='w-[32.5rem] flex items-center gap-6'>
                    <h1>{produto.titulo}</h1>
                    <Link to="/">
                        <HouseSimple size={22} />                    
                    </Link>
                    <span>{">"}</span>
                    <p className='text-lg font-medium cursor-pointer hover:underline'>{`${produto.titulo} ${produto.subTitulo}`}</p>

                </div>
                
                <div className='flex flex-col gap-6'>
                    <div className='w-full max-w-[515px] h-full max-h-[424px] border border-[#e5e5e5]'>
                        <img src={produto.image} alt={produto.url} className="w-[70%] h-full bg-cover mx-auto" />

                    </div>
                    
                    <div className='flex gap-8'>
                        <img src={produto.image} alt={produto.url} className="w-32 h-32 bg-cover border border-border-[#e5e5e5]"  />
                        <img src={produto.imageDestaque} alt={`${produto.url}-destaque`} className="w-32 h-32 bg-cover border border-border-[#e5e5e5]"  />
                    </div>
                </div>
            </div>
        </main>
    )
};