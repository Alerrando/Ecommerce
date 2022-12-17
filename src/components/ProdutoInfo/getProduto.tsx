import { lojaProdutos } from '../../database';


export function getProduto(id: string){
    let produto = {}
    const { cardsInfo } = lojaProdutos[0];

    cardsInfo.forEach(card => {
        if(card.id === parseInt(id))
            produto = card;
    })

    return produto;
}