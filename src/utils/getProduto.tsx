import { lojaProdutos } from '../database';


export function getProduto(url: string | undefined){
    let produto = {}
    const { cardsInfo } = lojaProdutos[0];

    cardsInfo.forEach(card => {
        if(card.url === url)
            produto = card;
    })

    return produto;
}