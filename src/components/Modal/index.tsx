import { X } from 'phosphor-react'
import React from 'react'
import { CardKeys, ShopContext } from '../../context/shopContext'

export function Modal(){
    const { modalInfo, setModalInfo } = React.useContext(ShopContext);

    console.log(modalInfo)

 
    return (
        <div className='w-full h-screen fixed flex items-center justify-center top-0 left-0 bg-sombreamento z-50'>
            <div className='w-2/3 h-3/4 px-8 bg-white'>
                <header className='py-2 flex items-center justify-end'>
                    <X size={26} className="cursor-pointer" onClick={() => setModalInfo({} as CardKeys)} />
                </header>

                <section className='w-full h-full flex'>
                    <div className='h-full max-h-[86%] min-w-[24rem] py-4 border border-gray-700 border-solid shadow-lg'>
                        <img src={modalInfo.image} alt={modalInfo.url} className="w-full h-full object-cover" />
                    </div>

                    <div className='grid gap-3 px-6'>
                        <h2 className='text-xl'>{modalInfo.descricao}</h2>
                    </div>
                </section>
            </div>
        </div>
    )
}