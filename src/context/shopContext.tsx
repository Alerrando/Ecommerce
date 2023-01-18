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
    carrinho: object;
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

type ShopContextProps = {
    user: userProps,
    setUser: (user: userProps) => void,
    registers: userProps[],
    setRegisters: (user: []) => void,
    modalInfo: CardKeys,
    setModalInfo: (modalInfo: CardKeys) => void,
    searchRegistrarion: (login: object | any) => number,
    products: CardKeys[],
    setProducts: (products: CardKeys[]) => void,
    favoritos: string[],
    setFavoritos: (favoritos: string[]) => void,
}

export const ShopContext = createContext<ShopContextProps>({} as ShopContextProps);

function CreateContextProvider({children}: IPropsContext){
    const [user, setUser] = useState<userProps>({} as userProps);
    const [registers, setRegisters] = useState<userProps[]>([] as userProps[]);
    const [modalInfo, setModalInfo] = useState<CardKeys>({} as CardKeys);
    const [products, setProducts] = useState<CardKeys[]>([] as CardKeys[]);
    const [favoritos, setFavoritos] = useState<string[]>([])

    function searchRegistrarion(login: object | any){
        let verificar = -1;

        registers.forEach(user => {
            if (user.email === login.email || user.telefone === login.telefone){
                verificar = 0
            }
        })

        return registers.length == 0 ? 1 : verificar == -1 ? verificar : 0
    }
    
    return(
        <ShopContext.Provider value={{user, setUser, registers,setRegisters, modalInfo, setModalInfo, searchRegistrarion, products, setProducts, favoritos, setFavoritos}}>
            {children}
        </ShopContext.Provider>
    )
}

export default CreateContextProvider;