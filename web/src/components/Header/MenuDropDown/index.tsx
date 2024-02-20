import { Gear, HeartStraight, SignOut, User } from 'phosphor-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext, UserProps } from '../../../context/shopContext';

type MenuDropDownProps = {
  dropDown: boolean,
  setDropDown: (dropDown: boolean) => void,
}

export function MenuDropDown(props: MenuDropDownProps){
  const { dropDown, setDropDown} = props;
  const { setUser } = useContext(ShopContext)
    
    
    return (
      <div className='w-10 h-10 hidden md:flex flex-row items-center justify-center' onClick={() => setDropDown(!dropDown)}>
        <User size={32} className="cursor-pointer" />

        {dropDown ? (
          <div className='w-auto h-auto bg-[#fff] flex flex-col items-center justify-start gap-3 py-2 absolute top-[3.25rem] border rounded-md z-50 arrow-menu text-black'>
            <Link to="/favoritos" className="w-full h-9 flex flex-row items-center gap-6 cursor-pointer px-4 hover:bg-[#ddd] transition-all">
                <HeartStraight size={26} />
                <span translate='no'>Favoritos</span>
            </Link>

            <div className="w-full h-9 flex flex-row items-center gap-6 cursor-pointer px-4 hover:bg-[#ddd] transition-all">
                <Gear size={26} />
                <span translate='no'>Configurações</span>
            </div>

            <div className="w-full h-9 flex flex-row items-center gap-6 cursor-pointer px-4 hover:bg-[#ddd] transition-all" onClick={() => setUser({} as UserProps)}>
                <SignOut size={26} />
                <span translate='no'>Sair</span>
            </div>
          </div>
        ) : null}

      </div>
    );
};