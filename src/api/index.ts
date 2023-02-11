import axios from "axios";
import { CardKeys } from "../context/shopContext"
const url = "https://api-loja-production.up.railway.app/"

export function getProdutos(){
    return axios.get(`${url}`).then(response => response.data)
}

export async function filterProduct(id: number){
    let aux: CardKeys[] = []
    aux = await axios.get(`${url}`).then(response => response.data)
    const productFilter  = aux.filter(product => product.id == id);

    return productFilter[0];
}