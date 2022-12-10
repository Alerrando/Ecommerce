import React from "react";
import { Cards } from "./Cards";
import { Titulo } from "../Titulo";

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