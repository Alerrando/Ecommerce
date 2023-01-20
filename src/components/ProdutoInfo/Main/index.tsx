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

                <div className='block text-start sm:flex flex-row gap-8'>
                    <div className='flex flex-col gap-6'>
                        <div className='w-[100%] sm:w-[32.1875rem] h-full sm:mx-0 border border-[#e5e5e5]'>
                            <img src={selectImage == 0 ? produto.image : produto.imageDestaque} alt={produto.url} className="w-full sm:w-[70%] h-full bg-cover mx-auto" />

                        </div>
                        
                        <div className='flex gap-8'>
                            <img src={produto.image} alt={produto.url} className="w-32 h-32 bg-cover border border-border-[#e5e5e5] cursor-pointer" onClick={() => setSelectImage(0)} />
                            <img src={produto.imageDestaque} alt={`${produto.url}-destaque`} className="w-32 h-32 bg-cover border border-border-[#e5e5e5] cursor-pointer" onClick={() => setSelectImage(1)}  />
                        </div>
                    </div>

                    <div className='w-auto h-full'>
                        <h2 className='text-2xl font-bold pb-4'>{produto.descricao}</h2>

                        <div className='flex items-center justify-start border-y border-bg-[#e5e5e5] py-4'>
                            {produto.desconto == 0 ? (
                                <h2 className='text-red-600 text-xl font-semibold'>{`R$${produto.price},00`}</h2>
                            ): (
                                <>
                                    <h2 className='text-xl text-gray-600 line-through'>{`R$${produto.price},00`}</h2>
                                    <h2 className='text-xl text-red-600 font-semibold'>{`R$${produto.price - ((produto.desconto / 100) * produto.price)}`}</h2>
                                </>
                            )}
                        </div>

                        <div className='max-w-full py-4'>
                            <p className={`text-[15px] font-medium leading-7`}>
                                {window.innerWidth <= 640  ? (
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur inventore deserunt"

                                ) : (
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum distinctio fuga molestiae modi dignissimos voluptates perspiciatis cum repudiandae, expedita est, vel illum suscipit maiores quo aperiam sed quibusdam voluptas nulla!"
                                )}
                            </p>
                        </div>
                    </div>
                </div>[]
            </div>
        </main>
    )
};