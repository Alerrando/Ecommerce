import { HouseSimple, Minus, Plus } from 'phosphor-react';
import React, { useState, useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import { CardKeys, ShopContext } from '../../../context/shopContext';

type MainProps = {
    produto: CardKeys
}

export function Main(props: MainProps) {
    const { produto } = props;
    const [quantProduct, setQuantProduct] = useState(0);
    const [selectImage, setSelectImage] = useState<number>(0);
    const { favoritos, handleFavorites, addCart, setCarrinho, carrinho } = useContext(ShopContext)
    const hearth = favoritos.includes(produto.subTitulo) ? "❤️" : "🖤";

    useEffect(() => {
        try {
          const savedInfos = JSON.parse(localStorage.getItem('react-ecommerce-data') || "");
    
          if(savedInfos.length > 0)
            setCarrinho(savedInfos)
          
        } catch (error) {
          console.log(error);
        }
    }, [])
    
    useEffect(() => {
            localStorage.setItem(
                'react-ecommerce-data',
                JSON.stringify(carrinho)
            );
    }, [carrinho]);


    return (
        <main className='w-full h-full pt-[10%]'>
            <div className='py-4 sm:px-[3.625rem] mx-6 flex flex-col gap-6 overflow-auto'>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-auto flex items-center gap-6'>
                        <Link to="/">
                            <HouseSimple size={22} />                    
                        </Link>
                        <span>{">"}</span>
                        <p className='text-lg font-medium cursor-pointer hover:underline'>{`${produto.titulo} ${produto.subTitulo}`}</p>
                    </div>
                    <span className='cursor-pointer' onClick={() => handleFavorites(produto.subTitulo)}>{hearth}</span>
                </div>

                <div className='flex text-start flex-col md:flex-row gap-8'>
                    <div className='flex flex-col gap-6'>
                        <div className='w-[100%] md:w-[32.1875rem] h-full sm:h-auto sm:max-h-[70%] sm:mx-0 border border-[#e5e5e5]'>
                            <img src={selectImage == 0 ? produto.image : produto.imageDestaque} alt={produto.url} className="w-full sm:w-[55%] md:w-[70%] h-full bg-cover mx-auto" />

                        </div>
                        
                        <div className='flex gap-8'>
                            <img src={produto.image} alt={produto.url} className="w-32 h-32 bg-cover border border-border-[#e5e5e5] cursor-pointer" onClick={() => setSelectImage(0)} />
                            <img src={produto.imageDestaque} alt={`${produto.url}-destaque`} className="w-32 h-32 bg-cover border border-border-[#e5e5e5] cursor-pointer" onClick={() => setSelectImage(1)}  />
                        </div>
                    </div>

                    <div className='w-auto h-full'>
                        <h2 className='text-lg sm:text-xl md:text-2xl font-bold pb-4'>{produto.descricao}</h2>

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

                        <div className='border-y-2 border-bg[#e5e5e5]'>
                            <p className='text-green-600 py-3'>{`${produto.estoque} em estoque`}</p>
                        </div>

                        <div className='flex items-center justify-start gap-6 py-4'>
                            <span>Quant: </span>
                            <div className='flex items-center flex-row gap-4'>
                                <div className='border border-zinc-400 py-2 w-8 flex items-center justify-center rounded cursor-pointer' onClick={() => quantProduct > 1 ? setQuantProduct(quantProduct - 1 ) : null}>
                                    <Minus size={18}/>
                                </div>
                                
                                <input className='border border-zinc-400 focus:border-zinc-400 w-12 text-center py-1 rounded-md' pattern='[0-9]' type="number" value={quantProduct} onChange={e => setQuantProduct(parseInt(e.target.value))} min={1} max={99} />
                                
                                <div className='border border-zinc-400 py-2 w-8 flex items-center justify-center rounded cursor-pointer' onClick={() => quantProduct < 99 ? setQuantProduct(quantProduct + 1) : null}>
                                    <Plus size={18}/>
                                </div>
                            </div>
                            <div className='w-full'>
                                <button className='py-3 px-2 bg-blue-700 text-white text-xs rounded-md float-right' onClick={() => addCart(quantProduct, produto)}>Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};