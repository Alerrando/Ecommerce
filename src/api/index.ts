import axios from "axios";
import { CardKeys } from "../context/shopContext"

export function getProdutos(){
    return axios.get("https://api-loja-production.up.railway.app/").then(response => response.data)
}

export async function filterProduct(id: number){
        let aux: CardKeys[] = []
        await fetch("https://api-loja-production.up.railway.app/")
        .then(response => response.json())
        .then(data => aux = data)

        const productFilter  = aux.filter(product => product.id == id);

        return productFilter[0];
}