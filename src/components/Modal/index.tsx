import { Minus, Plus, X } from 'phosphor-react'
import React, { useState } from 'react'
import { CardKeys, ShopContext } from '../../context/shopContext'

export function Modal(){
    const [quantProduct, setQuantProduct] = useState<number>(1);
    const { modalInfo, setModalInfo, favoritos, handleFavorites, addCart } = React.useContext(ShopContext);
    
    const hearth = favoritos.includes(modalInfo.subTitulo) ? "❤️" : "🖤";
 
    return (
        <div className='w-full h-screen fixed flex items-center justify-center top-0 left-0 bg-sombreamento z-50'>
            <div className='w-3/4 md:w-2/3 h-3/4 px-0 sm:pl-6 bg-white overflow-auto sm:overflow-hidden'>
                <header className='w-full md:w-[97%] py-2 px-1 md:px-0 flex items-center justify-between'>
                    <X size={26} className="cursor-pointer" onClick={() => setModalInfo({} as CardKeys)} />
                    <span className='cursor-pointer' onClick={() => handleFavorites(modalInfo.subTitulo)}>{hearth}</span>
                </header>

                <section className='w-full h-[85%] block sm:flex'>
                    <img src={modalInfo.image} alt={modalInfo.url} className="w-full md:w-[55%] h-[60%] sm:h-[80%] md:h-full object-cover" />

                    <div className='flex flex-col gap-6 px-6 overflow-auto'>
                        <h2 className='text-xl border-b pb-4 border-b-gray-400'>{modalInfo.descricao}</h2>

                        <div className='flex flex-row items-center justify-start gap-4'>
                            {modalInfo.desconto == 0 ? (
                                <h2 className='text-red-600 text-lg font-semibold'>{`R$${modalInfo.price},00`}</h2>
                            ): (
                                <>
                                    <h2 className='text-lg text-gray-600 line-through'>{`R$${modalInfo.price},00`}</h2>
                                    <h2 className='text-lg text-red-600'>{`R$${modalInfo.price - ((modalInfo.desconto / 100) * modalInfo.price)}`}</h2>
                                </>
                            )}
                        </div>
                        
                        <div className='max-w-full'>
                            <p className={`text-[15px] font-medium leading-7`}>
                                {window.innerWidth <= 640  ? (
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur inventore deserunt"

                                ) : (
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur inventore deserunt cupiditate cum voluptatibus nulla expedita architecto in perspiciatis voluptas autem eius, dolores, corporis possimus?"
                                )}
                            </p>
                        </div>

                        <div className='border-y-2 border-gray-400'>
                            <p className='text-green-600 py-3'>{`${modalInfo.estoque} em estoque`}</p>
                        </div>

                        <div className='flex flex-col'>
                            <div className='flex items-center justify-start gap-3 sm:gap-6 pb-4'>
                                <span className='text-sm sm:text-base'>Quant: </span>

                                <div className='flex items-center flex-row gap-3 sm:gap-4'>
                                    <div className='border border-zinc-400 py-1 sm:py-2 w-7 sm:w-9 text-sm sm:text-lg flex items-center justify-center rounded cursor-pointer' onClick={() => quantProduct > 1 ? setQuantProduct(quantProduct - 1 ) : null}>
                                        <Minus size={18}/>
                                    </div>
                                    
                                    <input className='border border-zinc-400 focus:border-zinc-400 w-10 sm:w-12 text-center py-1 sm:py-2 rounded-md' pattern='[0-9]' type="number" value={quantProduct} onChange={e => setQuantProduct(parseInt(e.target.value))} max={99} />
                                    
                                    <div className='border border-zinc-400 py-1 w-7 sm:w-9 text-sm sm:text-lg flex items-center justify-center rounded cursor-pointer' onClick={() => quantProduct < 99 ? setQuantProduct(quantProduct + 1) : null}>
                                        <Plus size={18}/>
                                    </div>
                                </div>
                            </div>
                            <button className='py-3 px-2 mb-2 bg-blue-700 text-white text-xs rounded-md' onClick={() => addCart(quantProduct, modalInfo)}>Adicionar ao carrinho</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )

}