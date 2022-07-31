import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Parcerias } from "./components/Parcerias";
import { Produtos } from "./components/Produtos";

export function App() {
  return (
    <>
      <Header />
      <Main />
      <Produtos /> 
      <Parcerias />
    </>
  )
}
