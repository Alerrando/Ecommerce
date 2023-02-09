import { User } from 'phosphor-react';
import React, { useState } from 'react';

type MenuDropDownProps = {
  dropDown: boolean,
  setDropDown: (dropDown: boolean) => void,
}

export function MenuDropDown(props: MenuDropDownProps){
  const { dropDown, setDropDown} = props;
    
    
    return (
      <div className='w-10 h-10 hidden md:flex flex-row items-center justify-center' onClick={() => setDropDown(!dropDown)}>
        <User size={32} className="cursor-pointer" />

        {dropDown ? (
          <div className='w-32 h-32 bg-[#222] absolute top-[3.25rem] z-50 arrow-menu'>
            
          </div>
        ) : null}

      </div>
    );
};