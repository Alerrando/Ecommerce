import axios from "axios";
import { CardKeys } from "../context/shopContext"
const url = "https://api-loja-production.up.railway.app/"

export function getProdutos(){
    return axios.get(`${url}`).then(response => response.data)
}

export function filterProduct(id: number){
    let aux: CardKeys[] = []
    axios.get(`${url}`).then(response => aux.push(response.data))

    const productFilter  = aux.filter(product => product.id == id);

    return productFilter[0];
}
