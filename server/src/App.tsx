import { Footer, Header, Main, Parcerias, Produtos } from './components'
import React from "react";
import { ShopContext } from './context/shopContext';

export function App() {
  const { modalInfo } = React.useContext(ShopContext);
  console.log(modalInfo)

  return (
    <>
        <Header />
        <Main />
        <Produtos />
        <Parcerias />
        <Footer />
    </>
  )
}
