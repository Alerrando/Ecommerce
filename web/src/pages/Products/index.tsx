import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Cards, Footer, Header } from "../../components";
import { Modal } from "../../components/Modal";
import { Titulo } from "../../components/Titulo";
import { CardKeys, ShopContext } from "../../context/shopContext";
import { productsStatic } from "../../utils";
import { Filtro } from "./Filtro";
import { FiltroProduto } from "./Filtro/FiltroProduto";

export function Products() {
	const [products, setProducts] = useState<CardKeys[]>(productsStatic);
	const { modalInfo, applyFilter } = useContext(ShopContext);
	const [modalFiltro, setModalFiltro] = useState<boolean>(false);
	const [searchParams] = useSearchParams();
	const typeProduct = searchParams.get("typeProduct");
	const price = searchParams.get("price");
	const categories = searchParams.get("categories");

	useEffect(() => {
		setProducts(applyFilter({typeProduct, price, categories}));
	}, [searchParams]);

	return (
		<>
			<Header />
			<main className="w-full h-auto md:pt-[10%] px-8 md:px-0 bg-[#F1F3F8]" id="main-produtos">
				<Titulo name="Produtos" />
				<Filtro setModalFiltro={setModalFiltro} quantProduct={products.length} />
				<section className="w-full p-8">
					{products.length > 0 ? (
						<Cards 
							cardsInfo={products}
							pages={"produtos"} 
							className='flex flex-wrap gap-y-4'
							classNameCards='md:w-5/12' 
						/>
					) : (
						<div className="flex flex-col items-center justify-center gap-4">
							<img src="/no_data.svg" alt="" className="w-1/4" />
							<h1 className="text-3xl font-bold">Nenhum resultado encontrado</h1>
						</div>
					)}
				</section>
				{Object.keys(modalInfo).length > 0 ? (
					<Modal id={modalInfo.id} />
				): null}

				{modalFiltro ? ( <FiltroProduto setModalFiltro={setModalFiltro} /> ) : null}
			</main>
			<Footer/>
		</>
	);
}
