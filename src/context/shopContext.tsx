import React, { createContext, useState } from "react";

type IPropsContext = {
    children : React.ReactNode;
}

export type userProps = {
    id: number;
    name: string;
    email: string;
    carrinho: object;
}

type ShopContextProps = {
    user: userProps[],
    setUser: (user: []) => void,
}

export const ShopContext = createContext<ShopContextProps>({} as ShopContextProps);

function CreateContextProvider({children}: IPropsContext){
    const [user, setUser] = useState<userProps[]>([{ id: 1, name: "", email: "", carrinho: [] }] as userProps[]);

    return(
        <ShopContext.Provider value={{user, setUser}}>
            {children}
        </ShopContext.Provider>
    )
}

export default CreateContextProvider;