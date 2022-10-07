import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Parcerias } from "./components/Parcerias";
import { Produtos } from "./components/Produtos";
import React from "react";

export function App() {
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
