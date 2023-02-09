import { List, ShoppingCart, X, User, SignIn, HeartStraight, Gear, SignOut } from "phosphor-react";
import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography } from '@mui/material';
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ShopContext } from '../../../context/shopContext';
import { MenuDropDown } from './MenuDropDown'

export function Header() {
  const [menu, setMenu] = useState("hidden");
  const { user } = useContext(ShopContext);
  const [dropDown, setDropDown] = useState<boolean>(false);

  function handleMenu() {
    menu == "block" ? setMenu("hidden") : setMenu("block");
  }

  return (
    <header className="h-auto w-full pt-4 lg:pt-0 relative md:fixed bg-white z-50">
      <div className="w-full md:max-w-[85%] alinhamento justify-between pt-1 md:pt-4 md:mx-20">
        <h1 className="text-4xl font-Playfair-Display text-[#595959] font-semibold">
          TechSoft
        </h1>

        <div className="md:flex md:items-center gap-4 hidden">
          <input
            type="text"
            name="busca"
            placeholder="Digite o que buscar..."
            className="border-2 border-black rounded-xl p-2"
          />
          <button className="text-white bg-[#337ab7] cursor-pointer py-2.5 px-5 rounded-[10px]">
            Search
          </button>
        </div>

        <div className="w-auto flex text-center justify-between md:justify-center gap-16 relative">
          <Link className="flex items-center justify-between gap-2" to="/carrinho">
            <ShoppingCart size={24} weight="bold" />

            <div className="w-4 h-4 rounded-full absolute flex items-center justify-center top-[-3px] left-4 bg-[#ff0000] text-white">
              <span className="text-sm">{Object.keys(user).length != 0 ? user.carrinho.length : 0}</span>
            </div>
          </Link>

          <div className="hidden md:block">
            { Object.keys(user).length == 0 ? (
              <Link to="/login" className="">
                <SignIn size={32} />
              </Link>
            ) : (
              <MenuDropDown dropDown={dropDown} setDropDown={setDropDown} />
            ) }
          </div>
        </div>

        <List
          size={32}
          weight="bold"
          className="block md:hidden cursor-pointer"
          onClick={() => handleMenu()}
        />
      </div>

      <nav
        className={`md:block fixed h-screen md:h-20 lg:h-14 left-0 z-20 top-0 w-full md:w-full bg-sombreamento md:bg-transparent md:relative ${menu}`}
      >
        <div className="h-full w-[80%] flex flex-col md:flex-row md:items-center md:justify-between py-2 md:py-0 pl-4 md:pl-0 bg-white text-black md:mx-20">
          <header className="h-auto w-full my-2 flex items-center jsutify-start md:hidden">
            <X
              size={26}
              weight="bold"
              className="cursor-pointer"
              onClick={() => handleMenu()}
            />
          </header>

          <ul className="flex flex-col md:flex-row justify-center h-auto items-start md:items-center gap-8 md:gap-6 mt-16 md:mt-0 font-Rokkitt text-base md:text-lg">
            <Link to="/" className="w-[80%] opacity-40 hover:opacity-80 border-b border-[#e5e5e5] md:border-none font-medium transition-all" >
              Home
            </Link>
            <Link to="/produtos" className="w-[80%] opacity-40 hover:opacity-80  border-b border-[#e5e5e5] md:border-none font-medium transition-all" >
              Produtos
            </Link>
            <Link to="/contato" className="w-[80%] opacity-40 hover:opacity-80  border-b border-[#e5e5e5] md:border-none font-medium transition-all" >
              Contato
            </Link>
          </ul>
            

          <div className="h-full w-[90%] flex md:hidden flex-row items-end justify-between">
            {Object.keys(user).length > 0 ? (
              <>
                <Accordion>
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                  >
                      <Typography>Menu Usuário</Typography>
                  </AccordionSummary>
                  <AccordionDetails className='flex flex-col gap-4 border-t border-[#e5e5e5]'>
                      <div className="h-9 flex flex-row items-center gap-6 cursor-pointer hover:border-b hover:border-[#949494] transition-all">
                          <HeartStraight size={32} />
                          <span translate='no'>Oferta</span>
                      </div>
                      <div className="h-9 flex flex-row items-center gap-6 cursor-pointer hover:border-b hover:border-[#949494] transition-all">
                          <Gear size={32} />
                          <span translate='no'>Configurações</span>
                      </div>
                      <div className="h-9 flex flex-row items-center gap-6 cursor-pointer hover:border-b hover:border-[#949494] transition-all">
                          <SignOut size={32} />
                          <span translate='no'>Sair</span>
                      </div>
                  </AccordionDetails>
                </Accordion>
              </>
            ) : (
              <>
                <Link className="h-8 w-24 bg-blue-600 flex items-center justify-center rounded-md text-white" to="/login">Login</Link>
                <Link className="h-8 w-24 bg-blue-600 flex items-center justify-center rounded-md text-white" to="/register">Registro</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );

}