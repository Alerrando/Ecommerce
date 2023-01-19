import { Footer, Header, Main, Parcerias, Produtos } from './components'
import React, { useContext, useEffect } from "react";
import { ShopContext } from './context/shopContext';
import { Modal } from './components/Modal';
import axios from 'axios';
import { getProdutos } from './api';

export function App() {
  const { modalInfo, setProducts } = useContext(ShopContext);

  useEffect(() => {
    getProduct();      

  }, [])

  return (
    <>
        <Header />
        <Main />
        <Produtos />
        <Parcerias />
        <Footer />
        {Object.keys(modalInfo).length > 0 ? (
          <Modal />
        ): null}
    </>
  )

  async function getProduct(){
    const api = await getProdutos();
  
    setProducts(api);
  }
}
