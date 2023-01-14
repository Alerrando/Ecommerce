import { X } from 'phosphor-react'
import React from 'react'
import { ShopContext } from '../../context/shopContext'

export function Modal(){
    const { modalInfo, setModalInfo } = React.useContext(ShopContext)

 
    return (
        <div className='w-full h-screen fixed flex items-center justify-center top-0 left-0 bg-sombreamento z-50'>
            <div className='w-2/3 h-3/4 bg-white'>
                <header className='py-2 px-8'>
                    <X size={32} className="cursor-pointer" onClick={() => setModalInfo({})} />
                </header>
            </div>
        </div>
    )
}