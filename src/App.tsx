import { Footer, Header, Main, Parcerias, Produtos } from './components'
import React, { useContext, useEffect } from "react";
import { ShopContext } from './context/shopContext';
import { Modal } from './components/Modal';
import axios from 'axios';

export function App() {
  const { modalInfo } = useContext(ShopContext);

  useEffect(() => {
    axios.get("https://api-loja-production.up.railway.app/")
    .then((json) => console.log(json.data))
    .catch((error) => console.log(error))
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
}
