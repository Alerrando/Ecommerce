import { HouseSimple, Minus, Plus } from 'phosphor-react';
import React, { useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { CardKeys, ShopContext } from '../../../context/shopContext';
import { ImageDisplay } from './ImageDisplay';
import { InfoProduto } from './InfoProduto';

type MainProps = {
    produto: CardKeys
}

export function Main(props: MainProps) {
    const { produto } = props;
    const { favoritos, handleFavorites, addCart, user, setUser} = useContext(ShopContext)
    const hearth = favoritos.includes(produto.subTitulo) ? "❤️" : "🖤";

    useEffect(() => {
        try {
          const savedInfos = JSON.parse(localStorage.getItem('react-ecommerce-data') || "");
    
          if(savedInfos.length > 0){
            setUser(prevState => {
              return {...prevState, carrinho: savedInfos}
            })
          }
        } catch (error) {
          console.log(error);
        }
        
    }, [])
    
    useEffect(() => {
        localStorage.setItem(
            'react-ecommerce-data',
            JSON.stringify(user.carrinho)
        );
    }, [user.carrinho]);


    return (
        <main className='w-full h-full pt-[10%]'>
            <div className='py-4 sm:px-[3.625rem] mx-6 flex flex-col gap-6 overflow-auto'>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-auto flex items-center gap-6'>
                        <Link to="/">
                            <HouseSimple size={22} />                    
                        </Link>
                        <span>{">"}</span>
                        <p className='text-lg font-medium cursor-pointer hover:underline'>{`${produto.titulo} ${produto.subTitulo}`}</p>
                    </div>
                    <span className='cursor-pointer' onClick={() => handleFavorites(produto.subTitulo)}>{hearth}</span>
                </div>

                <div className='flex text-start flex-col md:flex-row gap-8'>
                    <ImageDisplay produto={produto}  />
                    <InfoProduto produto={produto} addCart={addCart}  />
                </div>
            </div>
        </main>
    )
};