import { Footer, Header } from './components'
import React, { useContext, useEffect } from "react";
import { ShopContext, UserProps } from './context/shopContext';
import { Products } from "./pages/Home/Products";
import { Partnership } from "./pages/Home/Partnership";
import { Main } from "./pages/Home/Main";

export function App() {
  const { registers, setRegisters, setProducts, user,setUser} = useContext(ShopContext);
  
  useEffect(() => {
    try {
      const savedInfos = JSON.parse(localStorage.getItem('react-ecommerce-data') || "");
      
      if(savedInfos.length > 0){
        setRegisters(savedInfos);

        if(Object.keys(user).length == 0)
          setUser({} as UserProps)
      }

      if(user == undefined)
        setUser({} as UserProps)
    } catch (error) {
      console.log(error);
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem(
      'react-ecommerce-data',
      JSON.stringify(registers)
    );
  }, [user != undefined]);
  
  return (
    <>
        <Header />
        <Main />
        <Products />
        <Partnership />
        <Footer />
    </>
  )
}
