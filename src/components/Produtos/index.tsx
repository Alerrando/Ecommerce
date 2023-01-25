import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
import { Header } from '../Home/Header';
import { Main } from './Main';

export function Produtos () {

    return (
        <>
            <Header />
            <Main />
        </>
     );
}
