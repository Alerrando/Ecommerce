import { Footer, Header, Main, Parcerias, Produtos } from './components'
import React from "react";
import { ShopContext } from './context/shopContext';
import { Modal } from './components/Modal';

export function App() {
  const { modalInfo } = React.useContext(ShopContext);

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
