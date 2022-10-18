import React from "react";
import { useState } from "react";
import { Carrossel } from "../Carrossel";
import { Titulo } from "../Titulo";

export const carrosselImagens = [
    {
        url: "Carrossel/produto1.webp",
        title: "Console",
        subTitulo: "Nintendo Switch",
        desconto: "20% de Desconto",
    },

    {
        url: "Carrossel/produto2.webp",
        title: "Apple",
        subTitulo: "Ipad pro",
        desconto: "30% de Desconto",
    },

    {
        url: "Carrossel/produto3.webp",
        title: "Smart TV",
        subTitulo: '70"',
        desconto: "10% de Desconto",
    },

    {
        url: "Carrossel/produto4.webp",
        title: "Console",
        subTitulo: "Playstation 5",
        desconto: "15% de Desconto",
    },
]


export function Main(){

    return (
        <main>
            <Titulo name="Promoções" />
            <Carrossel />
        </main>
    )
}