import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Carousel } from "./Carousel";
import { Titulo } from '../../../components/Titulo';
import { ShopContext } from "../../../context/shopContext";
import { Skeleton } from "../../../@/components/ui/skeleton";


export function Main(){
    const [loading, setLoading] = useState(true);
    const { products } = useContext(ShopContext);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])


    return (
        <main className="md:pt-[9%]">
            <Titulo name="Promoções" />
            {!loading ? (
                <Carousel />
            ) : (
                <div className="w-full flex overflow-x-hidden">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div className="w-full h-[22rem] md:h-[30rem] bg-zinc-600 animate-pulse" key={index}>
                            <Skeleton className="w-screen h-full bg-zinc-600 animação" />
                        </div>
                    ))}
                </div>
            )}
        </main>
    )
}