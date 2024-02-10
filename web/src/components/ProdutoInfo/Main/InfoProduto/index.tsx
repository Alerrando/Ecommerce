import { Minus, Plus } from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardKeys } from "../../../../context/shopContext";

type InfoProdutoProps = {
    produto: CardKeys,
    addCart: (quantProduct: number, produto: CardKeys) => void,
}

export function InfoProduto(props: InfoProdutoProps) {
  const [quantProduct, setQuantProduct] = useState(1);
  const { addCart, produto } = props;

  return (
    <aside className="w-auto h-full">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold pb-4">
        {produto.descricao}
      </h2>

      <div className="flex flex-row items-center justify-start gap-4 border-y border-bg-[#e5e5e5] py-4">
        {produto.desconto == 0 ? (
          <h2 className="text-red-600 text-xl font-semibold">{`R$${produto.price},00`}</h2>
        ) : (
          <>
            <h2 className="text-xl text-gray-600 line-through">{`R$${produto.price},00`}</h2>
            <h2 className="text-xl text-red-600 font-semibold">{`R$${ produto.price - (produto.desconto / 100) * produto.price  }`}</h2>
          </>
        )}
      </div>

      <div className="max-w-full py-4">
        <p className={`text-[15px] font-medium leading-7`}>
          {window.innerWidth <= 640
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur inventore deserunt"
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum distinctio fuga molestiae modi dignissimos voluptates perspiciatis cum repudiandae, expedita est, vel illum suscipit maiores quo aperiam sed quibusdam voluptas nulla!"}
        </p>
      </div>

      <div className="border-y-2 border-bg[#e5e5e5]">
        <p className="text-green-600 py-3">{`${produto.estoque} em estoque`}</p>
      </div>

      <div className="flex items-center flex-col md:flex-row justify-start border-b border-[#e5e5e5] gap-6 py-4">
        <div className="w-full flex items-center flex-row gap-6">
          <span>Quant: </span>
          <div className="flex items-center flex-row gap-4">
            <div
              className="border border-zinc-400 py-2 w-8 flex items-center justify-center rounded cursor-pointer"
              onClick={() =>
                quantProduct > 1 ? setQuantProduct(quantProduct - 1) : null
              }
            >
              <Minus size={18} />
            </div>

            <input
              className="border border-zinc-400 focus:border-zinc-400 w-12 text-center py-1 rounded-md"
              type="number"
              value={`${quantProduct}`}
              name="quantProduct"
              title="Qpt"
              onChange={(e) => setQuantProduct(parseInt(e.target.value))}
              min={1}
              max={99}
              step={1}
              inputMode={'numeric'}
              autoComplete={'off'}
            />

            <div
              className="border border-zinc-400 py-2 w-8 flex items-center justify-center rounded cursor-pointer"
              onClick={() =>
                quantProduct < 99 ? setQuantProduct(quantProduct + 1) : null
              }
            >
              <Plus size={18} />
            </div>
          </div>
        </div>
        <div className="w-full">
          <button
            className="w-full md:w-auto py-3 px-2 bg-blue-700 text-white text-xs rounded-md float-right"
            onClick={e => handleAddCart(e)}
            type={'submit'}
          >
            Adicionar ao carrinho
          </button>
        </div>

      </div>

      <div className="flex flex-col gap-4 py-3">
        <p className="flex flex-row items-center gap-4">
            <span className="font-bold text-sm">Categoria: </span>
            <Link to="/produtos" className="opacity-50 hover:opacity-100">{produto.categoria}</Link>
        </p>
        <p className="flex flex-row items-center gap-4">
            <span className="font-bold text-sm">Tag: </span>
            <Link to="/produtos" className="opacity-50 hover:opacity-100">{produto.subTitulo}</Link>
        </p>
      </div>
    </aside>
  );

  function handleAddCart(e){
    e.preventDefault();

    addCart(quantProduct, produto)
  }
}
