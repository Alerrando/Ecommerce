import { HouseSimple } from 'phosphor-react';
import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProdutos } from '../../../api';
import { CardKeys, ShopContext } from '../../../context/shopContext';

type MainProps = {
    produto: CardKeys
}

export function Main(props: MainProps) {
    const { produto } = props;
    const [selectImage, setSelectImage] = React.useState<number>(0)


    return (
        <main className='w-full h-full'>
            <div className='py-4 sm:px-[6rem] mx-6 flex flex-col gap-6 overflow-auto'>
                <div className='w-full sm:w-[32.5rem] flex items-center gap-6'>
                    <Link to="/">
                        <HouseSimple size={22} />                    
                    </Link>
                    <span>{">"}</span>
                    <p className='text-lg font-medium cursor-pointer hover:underline'>{`${produto.titulo} ${produto.subTitulo}`}</p>

                </div>

                <div className='block text-start sm:flex flex-row'>
                    <div className='flex flex-col gap-6'>
                        <div className='w-[100%] sm:w-full sm:max-w-[450px] h-full sm:mx-0 border border-[#e5e5e5]'>
                            <img src={selectImage == 0 ? produto.image : produto.imageDestaque} alt={produto.url} className="w-full sm:w-[70%] h-full bg-cover mx-auto" />

                        </div>
                        
                        <div className='flex gap-8'>
                            <img src={produto.image} alt={produto.url} className="w-32 h-32 bg-cover border border-border-[#e5e5e5] cursor-pointer" onClick={() => setSelectImage(0)} />
                            <img src={produto.imageDestaque} alt={`${produto.url}-destaque`} className="w-32 h-32 bg-cover border border-border-[#e5e5e5] cursor-pointer" onClick={() => setSelectImage(1)}  />
                        </div>
                    </div>

                    <div className='w-auto h-full'>
                        <h2>{`${produto.titulo} ${produto.subTitulo}`}</h2>
                    </div>
                </div>
            </div>
        </main>
    )
};