import React from "react";
import { Cards } from "./Cards";
import { Titulo } from "../../Titulo";

export function Produtos(){
    return (
        <section className="overflow-hidden">
            <Titulo name="Produtos em Destaque" />
            <section className="w-min md:w-auto md:max-w-[1200px] mx-auto mt-8 mb-14">
                <Cards />
            </section>
        </section>
    )
}