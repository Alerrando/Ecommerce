import axios from "axios";

export function getProdutos(){
    return axios.get("https://api-loja-production.up.railway.app/").then(response => response.data)
}