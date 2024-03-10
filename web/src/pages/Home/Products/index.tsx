import React, { useContext, useEffect, useState } from "react";
import { Titulo } from "../../../components/Titulo";
import { ShopContext } from "../../../context/shopContext";
import { Modal } from "../../../components/Modal";
import { Cards } from "../../../components";
import { productsStatic } from "../../../utils";
import { Skeleton } from "../../../@/components/ui/skeleton";

export function Products(){
    const [loading, setLoading] = useState(true);
    const { products, modalInfo } = useContext(ShopContext);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, []);

    return (
        <section className="overflow-hidden">
            <Titulo name="Produtos em Destaque" />
            {!loading ? (
                <section className="w-3/5 md:w-11/12 mx-auto my-8">
                    <Cards 
                        cardsInfo={products.length > 0 ? products.filter(produto => produto.destaque == 1) : productsStatic.filter((product) => product.destaque === 2)} 
                        pages="home" 
                        className="flex flex-wrap gap-6 md:gap-4"
                        classNameCards="md:w-[25%] h-auto grid gap-1"
                    />
                </section>
            ) : (
                <section className="w-3/5 md:w-11/12 h-auto mx-auto my-8 flex flex-wrap justify-between gap-6 md:gap-4">
                    {Array.from({ length: 6 }).map((__, index) => (
                        <div className="w-full md:w-[25%] grid gap-1 h-max" key={index}>
                            <Skeleton className="w-full h-[412px] md:h-[555px] bg-zinc-600" />
                            <Skeleton className="w-9/12 md:w-5/12 bg-zinc-500 py-4 mx-auto" />
                        </div>
                    ))}
                </section>
            )}

            {Object.keys(modalInfo).length > 0 ? (
                <Modal id={modalInfo.id} />
            ): null}
        </section>
    )
}