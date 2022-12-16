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

type ShopContextProps = {
    user: userProps[],
    setUser: (user: []) => void,
    register: userProps[],
    setRegister: (user: []) => void,
    createUser: (userCreate: object | any) => void,
    checkRegister: (user: object | any) => boolean,
}

export const ShopContext = createContext<ShopContextProps>({} as ShopContextProps);

function CreateContextProvider({children}: IPropsContext){
    const [user, setUser] = useState<userProps[]>([] as userProps[]);
    const [register, setRegister] = useState<userProps[]>([] as userProps[]);
    
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
            setRegister([aux, ...register]);
        }else{ alert("Usuário já existe") }

    }

    function checkRegister(login: object | any) {
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

        register.forEach(user => {
            if (user.email === login.email || user.telefone === login.telefone){
                verificar = 0
            }
        })

        return register.length == 0 ? 1 : verificar == -1 ? verificar : 0
    }
    
    return(
        <ShopContext.Provider value={{user, setUser, register,setRegister,createUser, checkRegister}}>
            {children}
        </ShopContext.Provider>
    )
}

export default CreateContextProvider;