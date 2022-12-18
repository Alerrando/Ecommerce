// @flow 
import * as React from 'react';
import { Link } from 'react-router-dom';
type Props = {
    
};
export function Header(props: Props){
    return (
        <header className='w-full h-auto flex items-center justify-center border-b border-b-zinc-300'>
            <div className='w-[85%] h-full py-3'>
                <Link to="/" className='text-2xl font-Playfair-Display text-[#474747] font-semibold'>TechSoft</Link>
            </div>
        </header>
    );
};