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
    carrinho: any[];
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
    imagemCarrossel: string;
};

type PriceProps = {
    preço: number,
    quant: number
}

type ShopContextProps = {
    user: userProps,
    setUser: (user: userProps) => void,
    registers: userProps[],
    setRegisters: (user: []) => void,
    searchRegistrarion: (login: object | any) => number,
    modalInfo: CardKeys,
    setModalInfo: (modalInfo: CardKeys) => void,
    products: CardKeys[],
    setProducts: (products: CardKeys[]) => void,
    favoritos: string[],
    setFavoritos: (favoritos: string[]) => void,
    priceCart: () => number,
    handleFavorites: (subTitulo: string) => void;
    addCart: (quantProduct: number, product: CardKeys) => void,
}

export const ShopContext = createContext<ShopContextProps>({} as ShopContextProps);

function CreateContextProvider({children}: IPropsContext){
    const [user, setUser] = useState<userProps>({} as userProps);
    const [registers, setRegisters] = useState<userProps[]>([] as userProps[]);
    const [modalInfo, setModalInfo] = useState<CardKeys>({} as CardKeys);
    const [products, setProducts] = useState<CardKeys[]>([] as CardKeys[]);
    const [favoritos, setFavoritos] = useState<string[]>([])

    function priceCart(){
        const carrinhoAux = user.carrinho;
        let price = 0;
        carrinhoAux?.forEach((cart: PriceProps) => {
            price += (cart.preço * cart.quant);
        })
    
        return price;
    }

    function searchRegistrarion(login: object | any){
        let verificar = -1;

        registers.forEach(user => {
            if (user.email === login.email || user.telefone === login.telefone){
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

    function addCart(quantProduct: number, product: CardKeys){
        if(Object.keys(user).length > 0){
            const aux: any[] = user.carrinho;
            const preçoProduto = product.desconto == 0 ? modalInfo.price : modalInfo.price - ((modalInfo.desconto / 100) * modalInfo.price)

            let infoProduto = {
                id: modalInfo.id,
                quant: quantProduct,
                preço: preçoProduto,
            }
            
            aux.push(infoProduto);
    
            setUser(prevState => {
                return {...prevState, carrinho: aux}
            })

            return ;
        }

        alert("Faça Login primeiro para adicionar produtos ao carrinho!")
    }
    
    return(
        <ShopContext.Provider value={{user, setUser, registers, setRegisters, searchRegistrarion, modalInfo, setModalInfo, products, setProducts, favoritos, setFavoritos, priceCart, handleFavorites, addCart}}>
            {children}
        </ShopContext.Provider>
    )
}

export default CreateContextProvider;