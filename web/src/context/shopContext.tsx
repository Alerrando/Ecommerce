import React, { createContext, useState } from "react";
import { SchemaTypeFilter } from "../pages/Products/Filtro/FiltroProduto";
import { productsStatic } from "../utils";

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
    image: string[];
    titulo: string;
    subTitulo: string;
    desconto: number;
    categoria?: string;
    destaque: number;
    descricao: string;
    price?: number;
    estoque: number;
    quantProduct: number;
};

type ShopContextProps = {
    user: UserProps,
    setUser: (user: UserProps) => void,
    registers: UserProps[],
    setRegisters: (user: UserProps[]) => void,
    searchRegistrarion: (login: { email: string }) => number,
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
	const [favoritos, setFavoritos] = useState<string[]>([]);

	function searchRegistrarion(login: { email: string }){
		let verificar = -1;

		registers.forEach(user => {
			if (user.email === login.email){
				verificar = 0;
			}
		});

		return registers.length == 0 ? 1 : verificar == -1 ? verificar : 0;
	}

	function handleFavorites(subTitulo: string){
		const favoritesAux = [...favoritos];
		const favoritesIndex = favoritos.indexOf(subTitulo);
  
		favoritesIndex > -1 ? favoritesAux.splice(favoritesIndex, 1) : favoritesAux.push(subTitulo);
  
		setFavoritos(favoritesAux);
	}

	function applyFilter(data: SchemaTypeFilter){
		const quantEmpty = isEmpty(data);
		const auxProducts:CardKeys[] = productsStatic.filter((product) => {
			if(quantEmpty >= 2){
				if((product.price ?? 0) <= parseInt(data.price as string) || product.categoria == data.categories){
					return product;
				}
			} else{
				if((product.price ?? 0) <= parseInt(data.price as string) && product.categoria == data.categories){
					return product;
				}
			}

            
		});
		return auxProducts;
	}

	function isEmpty(obj) {
		let quantEmpty = 0;
		Object.entries(obj).forEach((item) => {
			if(!item[1]){
				quantEmpty++;
			}
		});
        
		return quantEmpty;
	}

	function addCart(quantProduct: number, product: CardKeys){
		if(Object.keys(user).length > 0){
			const aux: any[] = user.carrinho;
			const preçoProduto = product.desconto == 0 ? product.price : (product.price ?? 0)- ((product.desconto / 100) * (product.price ?? 0));
			let auxCarrinho: CardKeys[] = [];

			const infoProduto:CardKeys = product;
			infoProduto.quantProduct = quantProduct;
			infoProduto.price = preçoProduto;
            
			if(aux.length > 0){
				let index = -1;

				for (let i = 0; i < aux.length; i++) {
					const element: CardKeys = aux[i];

					if(element.subTitulo != product.subTitulo)
						index = 0;
                    
					else
						index = -1;
                    
				}

				if(index != -1){
					auxCarrinho = aux;
					auxCarrinho.push(infoProduto);
				}
				else
					auxCarrinho = aux;
			}
			else{
				auxCarrinho = aux;
				auxCarrinho.push(infoProduto);
			}
    
			setUser(prevState => {
				return {...prevState, carrinho: auxCarrinho};
			});

			return ;
		}

		alert("Faça Login primeiro para adicionar produtos ao carrinho!");
	}
    
	return(
		<ShopContext.Provider value={{user, setUser, registers, setRegisters, searchRegistrarion, modalInfo, setModalInfo, products, setProducts, favoritos, setFavoritos, handleFavorites, applyFilter, addCart}}>
			{children}
		</ShopContext.Provider>
	);
}

export default CreateContextProvider;