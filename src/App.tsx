import { Footer, Header, Main, Parcerias, Produtos } from './components'
import React, { useContext, useEffect } from "react";
import { ShopContext } from './context/shopContext';
import { Modal } from './components/Modal';
import { getProdutos } from './api';

export function App() {
  const { modalInfo, setProducts, carrinho ,setCarrinho } = useContext(ShopContext);

  useEffect(() => {
    try {
      getProduct();
      const savedInfos = JSON.parse(localStorage.getItem('react-ecommerce-data') || "");

      if(savedInfos.length > 0)
        setCarrinho(savedInfos)
      
    } catch (error) {
      console.log(error);
    }
  }, [])

  useEffect(() => {
		localStorage.setItem(
			'react-ecommerce-data',
			JSON.stringify(carrinho)
		);
	}, [carrinho]);

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
