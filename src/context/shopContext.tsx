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
}

export type CardKeys = {
    id: number;
    url: string;
    img: string;
    titulo: string;
    subTitulo: string;
};

type ShopContextProps = {
    user: userProps[],
    setUser: (user: []) => void,
    registers: userProps[],
    setRegisters: (user: []) => void,
    modalInfo: CardKeys,
    setModalInfo: (modalInfo: CardKeys) => void,
    searchRegistrarion: (login: object | any) => number,
    products: CardKeys[],
    setProducts: (products: CardKeys[]) => void,
}

export const ShopContext = createContext<ShopContextProps>({} as ShopContextProps);

function CreateContextProvider({children}: IPropsContext){
    const [user, setUser] = useState<userProps[]>([] as userProps[]);
    const [registers, setRegisters] = useState<userProps[]>([] as userProps[]);
    const [modalInfo, setModalInfo] = useState<CardKeys>({} as CardKeys);
    const [products, setProducts] = useState<CardKeys[]>([] as CardKeys[]);

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
        <ShopContext.Provider value={{user, setUser, registers,setRegisters, modalInfo, setModalInfo, searchRegistrarion, products, setProducts}}>
            {children}
        </ShopContext.Provider>
    )
}

export default CreateContextProvider;