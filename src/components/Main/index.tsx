import React from "react";
import { useState } from "react";
import { Carrossel } from "./Carrossel";
import { Titulo } from '../Titulo';


export function Main(){

    return (
        <main className="pt-[10%]">
            <Titulo name="Promoções" />
            <Carrossel />
        </main>
    )
}