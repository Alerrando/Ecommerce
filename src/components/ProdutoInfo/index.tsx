// @flow 
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { CardKeys } from '../Home/Produtos/Cards';
import { getProduto } from './getProduto';
type Props = {
    card: CardKeys;
};

export function ProdutoInfo(){
    const { id } = useParams();
    const produto = getProduto(id as string);

    return (
        <div>
            <h1>Title</h1>
        </div>
    );
};