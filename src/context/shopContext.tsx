import React, { createContext, useState } from "react";

type IPropsContext = {
    children : React.ReactNode;
}

export type userProps = {
    id: number;
    name: string;
    email: string;
    password: string;
    telefone: string;
    carrinho: [];
    favoritos: any[];
}

export type CardKeys = {
    id: number;
    url: string;
    image: string;
    titulo: string;
    subTitulo: string;
    desconto: number;
    categoria: string;
    destaque: number;
    imageDestaque: string;
    descricao: string;
    price: number;
    estoque: number;
};

type PriceProps = {
    preço: number,
    quant: number
}

type ShopContextProps = {
    carrinho: any[],
    setCarrinho: (carrinho: any[]) => void,
    modalInfo: CardKeys,
    setModalInfo: (modalInfo: CardKeys) => void,
    products: CardKeys[],
    setProducts: (products: CardKeys[]) => void,
    favoritos: string[],
    setFavoritos: (favoritos: string[]) => void,
    preços: number,
    setPreços: (preços: number) => void,
    priceCart: () => number,
    handleFavorites: (subTitulo: string) => void;
    addCart: (quantProduct: number, product: CardKeys) => void,
}

export const ShopContext = createContext<ShopContextProps>({} as ShopContextProps);

function CreateContextProvider({children}: IPropsContext){
    const [carrinho, setCarrinho] = useState<any[]>([])
    const [modalInfo, setModalInfo] = useState<CardKeys>({} as CardKeys);
    const [products, setProducts] = useState<CardKeys[]>([] as CardKeys[]);
    const [favoritos, setFavoritos] = useState<string[]>([])
    const [preços, setPreços] = useState(0);

    function priceCart(){
        const carrinhoAux = [...carrinho];
        let price = 0;
        carrinhoAux?.forEach((cart: PriceProps) => {
            price += (cart.preço * cart.quant);
        })
    
        return price;
    }

    function handleFavorites(subTitulo: string){
        const favoritesAux = [...favoritos];
        const favoritesIndex = favoritos.indexOf(subTitulo)
  
        favoritesIndex > -1 ? favoritesAux.splice(favoritesIndex, 1) : favoritesAux.push(subTitulo);
  
        setFavoritos(favoritesAux);
    }

    function addCart(quantProduct: number, product: CardKeys){
        let infoProduto = {
            id: product.id,
            quant: quantProduct,
            preço: product.price,
        }

        setCarrinho([...carrinho, infoProduto])
    }
    
    return(
        <ShopContext.Provider value={{carrinho, setCarrinho, modalInfo, setModalInfo, products, setProducts, favoritos, setFavoritos, preços, setPreços, priceCart, handleFavorites, addCart}}>
            {children}
        </ShopContext.Provider>
    )
}

export default CreateContextProvider;