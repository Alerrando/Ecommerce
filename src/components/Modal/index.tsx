import { X } from 'phosphor-react'
import React from 'react'
import { CardKeys, ShopContext } from '../../context/shopContext'

export function Modal(){
    const { modalInfo, setModalInfo } = React.useContext(ShopContext);

    console.log(modalInfo)

 
    return (
        <div className='w-full h-screen fixed flex items-center justify-center top-0 left-0 bg-sombreamento z-50'>
            <div className='w-2/3 h-3/4 px-0 sm:px-8 bg-white overflow-auto sm:overflow-hidden'>
                <header className='py-2 flex items-center justify-end'>
                    <X size={26} className="cursor-pointer" onClick={() => setModalInfo({} as CardKeys)} />
                </header>

                <section className='w-full h-full block sm:flex'>
                    <div className='h-full w-full max-h-[86%] min-w-[240px] md:min-w-[60%] py-4'>
                        <img src={modalInfo.image} alt={modalInfo.url} className="w-full h-full object-cover" />
                    </div>

                    <div className='flex flex-col gap-6 px-6 overflow-auto'>
                        <h2 className='text-xl border-b pb-4 border-b-gray-400'>{modalInfo.descricao}</h2>

                        <div className='flex items-center justify-start'>
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

                        <div className='flex items-center justify-start gap-4'>
                            <span>Quant: </span>
                            <input className='border border-zinc-400 focus:border-zinc-400 w-12 text-center py-2 px-2 rounded-md' pattern='[0-9]' type="number" name="quant" defaultValue={1} max={999} />
                            <button className='py-2 px-5 bg-blue-700 text-white rounded-md'>Adicionar ao carrinho</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}