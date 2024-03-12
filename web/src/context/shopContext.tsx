import React, { createContext, useState } from "react";
import { productsStatic } from "../utils";
import { SchemaTypeFilter } from "../pages/Products/Filtro/FiltroProduto";

type IPropsContext = {
    children : React.ReactNode;
}

export type UserProps = {
    id: number;
    email: string;
    password: string;
    carrinho: any[];
    favoritos: any[];
}

export type CardKeys = {
    id: string;
    url: string;
    image: string[];
    titulo: string;
    subTitulo: string;
    desconto: number;
    categoria: string;
    destaque: number;
    descricao: string;
    price: number;
    estoque: number;
    quantProduct: number;
};

type ShopContextProps = {
    user: UserProps,
    setUser: (user: UserProps) => void,
    registers: UserProps[],
    setRegisters: (user: UserProps[]) => void,
    searchRegistrarion: (login: object | any) => number,
    modalInfo: CardKeys,
    setModalInfo: (modalInfo: CardKeys) => void,
    products: CardKeys[],
    setProducts: (products: CardKeys[]) => void,
    favoritos: string[],
    setFavoritos: (favoritos: string[]) => void,
    handleFavorites: (subTitulo: string) => void;
    applyFilter: (data: SchemaTypeFilter) => CardKeys[];
    addCart: (quantProduct: number, product: CardKeys) => void,
}

export const ShopContext = createContext<ShopContextProps>({} as ShopContextProps);

function CreateContextProvider({children}: IPropsContext){
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [registers, setRegisters] = useState<UserProps[]>([] as UserProps[]);
    const [modalInfo, setModalInfo] = useState<CardKeys>({} as CardKeys);
    const [products, setProducts] = useState<CardKeys[]>([] as CardKeys[]);
    const [favoritos, setFavoritos] = useState<string[]>([])

    function searchRegistrarion(login: object | any){
        let verificar = -1;

        registers.forEach(user => {
            if (user.email === login.email){
                verificar = 0
            }
        })

        return registers.length == 0 ? 1 : verificar == -1 ? verificar : 0
    }

    function handleFavorites(subTitulo: string){
        const favoritesAux = [...favoritos];
        const favoritesIndex = favoritos.indexOf(subTitulo)
  
        favoritesIndex > -1 ? favoritesAux.splice(favoritesIndex, 1) : favoritesAux.push(subTitulo);
  
        setFavoritos(favoritesAux);
    }

    function applyFilter(data: SchemaTypeFilter){
        debugger;
        let auxProducts = productsStatic;
        if(data.price){
            auxProducts = productsStatic.filter((product) => product.price <= parseInt(data.price));
        }

        return auxProducts;
    }

    function addCart(quantProduct: number, product: CardKeys){
        if(Object.keys(user).length > 0){
            const aux: any[] = user.carrinho;
            const preçoProduto = product.desconto == 0 ? product.price : product.price - ((product.desconto / 100) * product.price)
            let auxCarrinho: CardKeys[] = []

            let infoProduto:CardKeys = product;
            infoProduto.quantProduct = quantProduct;
            infoProduto.price = preçoProduto;
            
            if(aux.length > 0){
                let index = -1;

                for (let i = 0; i < aux.length; i++) {
                    const element: CardKeys = aux[i];

                    if(element.subTitulo != product.subTitulo)
                        index = 0;
                    
                    else
                        index = -1
                    
                }

                if(index != -1){
                    auxCarrinho = aux;
                    auxCarrinho.push(infoProduto)
                }
                else
                    auxCarrinho = aux;
            }
            else{
                    auxCarrinho = aux;
                    auxCarrinho.push(infoProduto)
            }
    
            setUser(prevState => {
                return {...prevState, carrinho: auxCarrinho}
            })

            return ;
        }

        alert("Faça Login primeiro para adicionar produtos ao carrinho!")
    }
    
    return(
        <ShopContext.Provider value={{user, setUser, registers, setRegisters, searchRegistrarion, modalInfo, setModalInfo, products, setProducts, favoritos, setFavoritos, handleFavorites, applyFilter, addCart}}>
            {children}
        </ShopContext.Provider>
    )
}

export default CreateContextProvider;