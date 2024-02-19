import React, { useContext, useEffect, useState } from "react";
import { Cards } from "./Cards";
import { Titulo } from "../../Titulo";
import { CardKeys, ShopContext } from "../../../context/shopContext";
import { Modal } from "../../Modal";

export function Produtos(){
    const [loading, setLoading] = useState(true);
    const { products, modalInfo } = useContext(ShopContext);
    const productsStatic: CardKeys = [
        {
            id: 0,
            url: "/xiaomi-mi-10",
            image: "/Produtos/produto1.webp",
            titulo: "Celular Xiomi Mi 10",
            subTitulo: "Smartphone Xiaomi Redmi 10 5G Tela 6,58`` 4Gb+128Gb",
            desconto: 0,
            categoria: "Smartphones",
            destaque: 0,
            imageDestaque: "/Produtos/produto1.webp",
            descricao: "Smartphone 5G Intermediário com câmera de 50MPProcessador Dimensity 700 com 5G e processamento de 7nm | Câmera principal de alta resolução com 50MP | Modo Noturno impressionante | Tela FHD+ AdaptiveSync com 90Hz de taxa de atualização e proteção Corning® Gorilla® Glass | Bateria de 5000mAh (typ) de alta capacidade | Carregamento rápido de 18W",
            price: 2100,
            estoque: 55,
            imagemCarrossel: "/Produtos/produto1.webp",
            quantProduct: 4,
        },
        {
            id: 1,
            url: "/smartwatch-k88",
            image: "/Produtos/produto2.webp",
            titulo: "Smartwatch K88",
            subTitulo: "Smartwatch K88 Relogio Automático",
            desconto: 0,
            categoria: "Smartphones",
            destaque: 0,
            imageDestaque: "/Produtos/produto2.webp",
            descricao: "Smartwatch K88 Relogio Automático Tela Touch android 4.0 + ios 8.0 bt 4.2 42.5*36*13mm Função Distância Modo Noturno Sport Levante a mão e acenda a tela",
            price: 125,
            estoque: 178,
            imagemCarrossel: "/Produtos/produto2.webp",
            quantProduct: 8,
        },
        {
            id: 2,
            url: "/nilkon-d750",
            image: "/Produtos/produto3.webp",
            titulo: "Nikon Kit D750",
            subTitulo: " Nikon Kit D750 + lente 24-120mm VR DSLR cor  preto Nikon Kit D750 + lente 24-120mm VR DSLR cor  preto",
            desconto: 0,
            categoria: "Eletrônicos",
            destaque: 0,
            imageDestaque: "/Produtos/produto3.webp",
            descricao: " Nikon Kit D750 + lente 24-120mm VR DSLR cor  preto display de 3.2, obturador tem uma velocidade máxima de: 1/4000 s, modo de auto-foco,  flash integrado",
            price: 2400,
            estoque: 46,
            imagemCarrossel: "/Produtos/produto3.webp",
            quantProduct: 4,
        },
        {
            id: 3,
            url: "/macbook-air-13",
            image: "/Produtos/produto4.webp",
            titulo: "Macbook air 13",
            subTitulo: "macbook air 13 (2018) / 16gb ram / 512 gb ssd + case anti-impacto + adaptador hdmi",
            desconto: 0,
            categoria: "Eletrônicos",
            destaque: 0,
            imageDestaque: "/Produtos/produto4.webp",
            descricao: "macbook air 13 (2018) / 16gb ram / 512 gb ssd + case anti-impacto + adaptador hdmi tela de retina 13.3 processador 1.6ghz dual-core intel core i5 gráficos intel uhd graphics 617 1536 mb 16gb ram 512gb ssd",
            price: 3500,
            estoque: 80,
            imagemCarrossel: "/Produtos/produto4.webp",
            quantProduct: 5,
        },
        {
            id: 4,
            url: "/ipad-pro",
            image: "/Produtos/produto5.webp",
            titulo: "Apple Tablet iPad Pro",
            subTitulo: "Apple Tablet iPad Pro 4G 256GB 11´´",
            desconto: 0,
            categoria: "Smartphone",
            destaque: 0,
            imageDestaque: "/Produtos/produto5.webp",
            descricao: "Apple Tablet iPad Pro 4G 256GB 11´´ Retroiluminação por LED Multi Touch Screen de 11 polegadas (diagonal) com tecnologia IPS Resolução de 2388 x 1668 a 264 pixels por polegada (ppi) Tecnologia ProMotion",
            price: 7200,
            estoque: 44,
            imagemCarrossel: "/Produtos/produto5.webp",
            quantProduct: 2,
        },
        {
            id: 5,
            url: "/rtx-2080-ti",
            image: "/Produtos/produto6.webp",
            titulo: "Geforce RTX 2080 TI",
            subTitulo: "Placa de vídeo Nvidia MSI Gaming X Trio GeForce RTX 20 Series RTX 2080 Ti GEFORCE RTX 2080 TI GAMING X TRIO 11GBPlaca de vídeo Nvidia MSI  Gaming X Trio GeForce RTX 20 Series RTX 2080 Ti GEFORCE RTX 2080 TI GAMING X TRIO 11GB",
            desconto: 0,
            categoria: "Smartphone",
            destaque: 0,
            imageDestaque: "/Produtos/produto1.webp",
            descricao: "Interface PCI-Express 3 0  Interface de memória: 352bit  Quantidade de núcleos: 4352  Frequência boost do núcleo de 1755MHz  Resolução máxima: 7680x4320  Compatível com DirectX e OpenGL  Requer de 650W de alimentação  Permite a conexão de até 4 monitores simultâneos  Formatos de conexão: HDMI, DisplayPort, USB-C  Ideal para trabalhar em alta velocidade ",
            price: 1730,
            estoque: 133,
            imagemCarrossel: "/Produtos/produto1.webp",
            quantProduct: 5,
        },
    ]

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, []);

    return (
        <section className="overflow-hidden">
            <Titulo name="Produtos em Destaque" />
            {!loading ? (
                <section className="w-min md:w-auto md:max-w-[1200px] mx-auto mt-8 mb-14">
                    <Cards cardsInfo={products.length > 0 ? products.filter(produto => produto.destaque == 1) : productsStatic} pages="home" />
                </section>
            ) : (
                <div className="w-full h-screnn flex items-center justify-center my-8" role="status">
                    <svg aria-hidden="true" className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            )}

            {Object.keys(modalInfo).length > 0 ? (
                <Modal id={modalInfo.id} />
            ): null}
        </section>
    )
}