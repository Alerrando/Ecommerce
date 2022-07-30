import { useState } from "react";
import { Carrossel } from "../Carrossel";
import { Titulo } from "../Titulo";

export const carrosselImagens = {
    imagem1: {
        url: "https://images.unsplash.com/photo-1550921464-9f7a27f99edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)",
        title: "Console",
        subTitulo: "Nintendo Switch",
        desconto: "20% de Desconto",
    },

    imagem2: {
        url: "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
        title: "Apple",
        subTitulo: "Ipad pro",
        desconto: "30% de Desconto",
    },

    imagem3: {
        url: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
        title: "Smart TV",
        subTitulo: '70"',
        desconto: "10% de Desconto",
    },

    imagem4: {
        url: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
        title: "Console",
        subTitulo: "Playstation 5",
        desconto: "15% de Desconto",
    },
}


export function Main(){

    return (
        <section>
            <Titulo name="Promoções" />
            <Carrossel />
        </section>
    )
}