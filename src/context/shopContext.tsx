import React, { createContext, useState } from "react";

type IPropsContext = {
    children : React.ReactNode;
}

export type userProps = {
    id: number;
    name: string;
    email: string;
    password: string;
    carrinho: object;
}

type ShopContextProps = {
    user: userProps[],
    setUser: (user: []) => void,
    register: userProps[],
    setRegister: (user: []) => void,
    handleInputChange: (e: any, login: userProps, setInputLogin: Function) => void,
    createUser: (userCreate: object | any) => void,
    checkRegister: (user: object | any) => void,
}

export const ShopContext = createContext<ShopContextProps>({} as ShopContextProps);

function CreateContextProvider({children}: IPropsContext){
    const [user, setUser] = useState<userProps[]>([] as userProps[]);
    const [register, setRegister] = useState<userProps[]>([] as userProps[]);

    const handleInputChange = (e: any, login: object, setInputLogin: Function) => {
        const { name, value } = e.target;
        setInputLogin({ ...login, [name]: value });
    };
    
    function createUser(userCreate: object | any){
        debugger;
        const aux: userProps | any = {
            id: user.length,
            name: userCreate.name,
            email: userCreate.email,
            carrinho: [],
        };

        setUser(aux);
        setRegister([aux, ...register]);
    }

    function checkRegister(login: object | any) {
        debugger;
        if(register.length > 0){
            register.forEach(user => {
                if (user.email === login.email)
                    createUser(login);
                else
                    alert("Login não existe!");
            })
        } else { alert("Login não existe!"); }
    }
    
    return(
        <ShopContext.Provider value={{user, setUser, register,setRegister,createUser, handleInputChange, checkRegister}}>
            {children}
        </ShopContext.Provider>
    )
}

export default CreateContextProvider;