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

type ModalInfoProps = {
    url: string,
    img: string,
    titulo: string,
    subTitulo: string,
    descrição: string
}

type ShopContextProps = {
    user: userProps[],
    setUser: (user: []) => void,
    registers: userProps[],
    setRegisters: (user: []) => void,
    createUser: (userCreate: object | any) => void,
    checkRegisters: (user: object | any) => boolean,
    modalInfo: ModalInfoProps,
    setModalInfo: (modalInfo: ModalInfoProps) => void,

}

export const ShopContext = createContext<ShopContextProps>({} as ShopContextProps);

function CreateContextProvider({children}: IPropsContext){
    const [user, setUser] = useState<userProps[]>([] as userProps[]);
    const [registers, setRegisters] = useState<userProps[]>([] as userProps[]);
    const [modalInfo, setModalInfo] = useState<ModalInfoProps>({} as ModalInfoProps);

    
    function createUser(userCreate: object | any){
        if(searchRegistrarion(userCreate) != 0){
            const aux: userProps | any = {
                id: user.length,
                name: userCreate.name,
                password: userCreate.password,
                email: userCreate.email,
                telefone: userCreate.telefone,
                carrinho: [],
            };
    
            setUser(aux);
            setRegisters([aux, ...registers]);
        }else{ alert("Usuário já existe") }

    }

    function checkRegisters(login: object | any) {
        debugger;
        if(searchRegistrarion(login) == 0){
            const aux: userProps | any = {
                id: user.length,
                name: login.name,
                password: login.password,
                email: login.email,
                telefone: login.telefone,
                carrinho: [],
            };

            setUser(aux);
            return true;
        } else { 
            alert("Login não existe!"); 
            return false;
        }
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
    
    return(
        <ShopContext.Provider value={{user, setUser, registers,setRegisters,createUser, checkRegisters, modalInfo, setModalInfo}}>
            {children}
        </ShopContext.Provider>
    )
}

export default CreateContextProvider;