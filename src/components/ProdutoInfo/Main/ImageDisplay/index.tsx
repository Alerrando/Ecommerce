import React, { useState } from 'react';
import { CardKeys } from '../../../../context/shopContext';

type ImageDisplayProps = {
    produto: CardKeys
}

export function ImageDisplay(props: ImageDisplayProps) {
    const [selectImage, setSelectImage] = useState<number>(0);
    const { produto } = props;

    return (
        <div>
            <div className='flex flex-col gap-6'>
                <div className='w-[100%] md:w-[32.1875rem] h-full sm:h-auto sm:max-h-[70%] sm:mx-0 border border-[#e5e5e5]'>
                    <img src={selectImage == 0 ? produto.image : produto.imageDestaque} alt={produto.url} className="w-full sm:w-[55%] md:w-[70%] h-full bg-cover mx-auto" />

                </div>
                        
                <div className='flex gap-8'>
                    <img src={produto.image} alt={produto.url} className="w-32 h-32 bg-cover border border-border-[#e5e5e5] cursor-pointer" onClick={() => setSelectImage(0)} />
                    <img src={produto.imageDestaque} alt={`${produto.url}-destaque`} className="w-32 h-32 bg-cover border border-border-[#e5e5e5] cursor-pointer" onClick={() => setSelectImage(1)}  />
                </div>
            </div>
        </div>
    );
}