import React from "react";
import { Cards } from "./Cards";
import { Titulo } from "../Titulo";

export const cardsInfo = [
    {
        card1: {
            url: "Produtos/produto1.webp",
            titulo: "Iphone",
            subTitulo: "Pro Max",
            descrição : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod qui delectus repudiandae eum? \
            Tempora rem aliquam, quo aut repellat omnis laboriosam molestiae error qui magnam quae suscipit sint esse. \
            Commodi?",
        },

        card2: {
            url: "Produtos/produto2.webp",
            titulo: "Apple",
            subTitulo: "Watch",
            descrição : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod qui delectus repudiandae eum? \
            Tempora rem aliquam, quo aut repellat omnis laboriosam molestiae error qui magnam quae suscipit sint esse. \
            Commodi?",
        },

        card3: {
            url: "Produtos/produto3.webp",
            titulo: "Camera",
            subTitulo: "Clicking",
            descrição : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod qui delectus repudiandae eum? \
            Tempora rem aliquam, quo aut repellat omnis laboriosam molestiae error qui magnam quae suscipit sint esse. \
            Commodi?",
        },
    },

    {
        card1: {
            url: "Produtos/produto4.webp",
            titulo: "Notebook",
            subTitulo: "Dell Inspiron 3000",
            descrição : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod qui delectus repudiandae eum? \
            Tempora rem aliquam, quo aut repellat omnis laboriosam molestiae error qui magnam quae suscipit sint esse. \
            Commodi?",
        },

        card2: {
            url: "Produtos/produto5.webp",
            titulo: "iPad",
            subTitulo: "Pro 2018",
            descrição : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod qui delectus repudiandae eum? \
            Tempora rem aliquam, quo aut repellat omnis laboriosam molestiae error qui magnam quae suscipit sint esse. \
            Commodi?",
        },

        card3: {
            url: "Produtos/produto6.webp",
            titulo: "Hardware",
            subTitulo: "Core i9",
            descrição : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod qui delectus repudiandae eum? \
            Tempora rem aliquam, quo aut repellat omnis laboriosam molestiae error qui magnam quae suscipit sint esse. \
            Commodi?",
        },
    }
]

export function Produtos(){
    return (
        <section className="overflow-hidden">
            <Titulo name="Produtos em Destaque" />
            <section>
                <Cards />
            </section>
        </section>
    )
}