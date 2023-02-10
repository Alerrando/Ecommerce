import { Footer, Header, Main, Parcerias, Produtos } from './components'
import React, { useContext, useEffect } from "react";
import { ShopContext } from './context/shopContext';
import { getProdutos } from './api';

export function App() {
  const { registers, setRegisters, setProducts, user, setUser} = useContext(ShopContext);
  
  
  useEffect(() => {
    try {
      getProduct();
      const savedInfos = JSON.parse(localStorage.getItem('react-ecommerce-data') || "");
      
      if(savedInfos.length > 0){
        setRegisters(savedInfos);
      }
    } catch (error) {
      console.log(error);
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem(
      'react-ecommerce-data',
      JSON.stringify(registers)
    );
  }, [user.carrinho != undefined]);
  
  return (
    <>
        <Header />
        <Main />
        <Produtos />
        <Parcerias />
        <Footer />
    </>
  )

  async function getProduct(){
    const api = await getProdutos();
  
    setProducts(api);
  }
}
