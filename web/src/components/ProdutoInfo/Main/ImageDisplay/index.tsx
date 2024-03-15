import React, { useState } from 'react';
import { CardKeys } from '../../../../context/shopContext';

type ImageDisplayProps = {
    produto: CardKeys
}

export function ImageDisplay(props: ImageDisplayProps) {
    const [selectImage, setSelectImage] = useState<number>(0);
    const { produto } = props;

    return (
        <>
            <div className='w-full h-[calc(100vh_-_125px)] flex flex-row-reverse gap-6'>
                <div className='w-[85%] sm:mx-0 border border-[#e5e5e5]'>
                    <img src={selectImage == 0 ? produto.image[0] : produto.image[selectImage]} alt={produto.titulo} className="w-full h-full object-cover mx-auto" />
                </div>

                <div className='w-[25%] flex flex-col gap-8'>
                    <img src={produto.image[0]} alt={produto.titulo} className="w-full h-[35%] bg-cover border border-border-[#e5e5e5] cursor-pointer object-cover" onClick={() => setSelectImage(0)} />
                    <img src={produto.image[1]} alt={`${produto.titulo}-destaque`} className="w-full h-[35%] bg-cover border border-border-[#e5e5e5] cursor-pointer object-cover" onClick={() => setSelectImage(1)}  />
                </div>
            </div>
        </>
    );
}