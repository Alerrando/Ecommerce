import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { Faders, X } from 'phosphor-react';
import React, { Key, useContext, useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ShopContext } from '../../../../context/shopContext';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schemaTypeValue = z.object({
    typeProduct: z.string(),
    price: z.string(),
    categories:  z.string(),
})

type SchemaType = z.infer<typeof schemaTypeValue>

type FiltroProdutoProps = {
    setModalFiltro: (modalFiltro: boolean) => void,
}

export function FiltroProduto({ setModalFiltro }: FiltroProdutoProps) {
    const [valuePrice, setValuePrice] = useState("");
    const { register, handleSubmit } = useForm<SchemaType>({
        resolver: zodResolver(schemaTypeValue),
        defaultValues: {
            categories: [],
            price: "",
            typeProduct: [],
        }
    });
    const { products } = useContext(ShopContext);
    const typeProduct: string[] = ["Oferta", "Liquidação", "Frete Gratis"];
    const categorias: string[] = ["Eletrônicos", "Video Game"];

    return (
        <div className="w-full h-screen fixed top-0 left-0 bg-sombreamento z-50">
            <div className='w-4/5 md:w-1/3 h-full px-8 bg-white overflow-auto'>
                <header className='h-auto py-4 w-full flex items-center justify-end'>
                    <X size={28} className="cursor-pointer" onClick={() => setModalFiltro(false)} />
                </header>

                <section className='w-full h-auto flex flex-col items-center justify-start gap-6 mb-3'>
                    <header className='h-auto w-full relative flex flex-row items-center justify-between'>
                        <div className='w-auto h-auto flex items-center justify-start gap-3'>
                            <Faders size={26} className="text-[#88C8BC]" />
                            <span>Filtrar Por: </span>
                        </div>

                        <span className='font-semibold opacity-70 cursor-pointer'>Limpar Filtros</span>
                    </header>

                    <form className='w-full h-auto flex flex-col gap-6' onSubmit={handleSubmit(applyFilter)}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Tipo de Produto</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='flex flex-col gap-4 border-t border-[#e5e5e5]'>
                                {typeProduct.map((item: string, index: Key) => (
                                    <div className='flex items-center gap-1' key={index}>
                                        <input type="radio" value="ofertaProduto" className="w-[25px]" {...register("typeProduct")} />
                                        <label translate='no'>{item}</label>
                                    </div>
                                ))}
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Preço</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='flex flex-col gap-6 border-t border-[#e5e5e5]'>
                                <label>Intervalo de Preço</label>
                                <Slider 
                                    defaultValue={0} 
                                    aria-label="Default" 
                                    valueLabelDisplay="auto"
                                    { ...register("price") }
                                />
                            </AccordionDetails>
                        </Accordion>
                        
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Categoria</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='flex flex-col gap-6 border-t border-[#e5e5e5]'>
                                {categorias.map((category: string, index: Key) => (
                                    <div className='flex flex-row items-center justify-start gap-4' key={index}>
                                        <input type="radio" value={category} className="w-[25px]" {...register("categories")} />
                                        <label className='first-letter:uppercase' translate='no'>{category}</label>
                                    </div>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                        
                        <button type="submit" className='w-full py-2 bg-blue-600 text-white'>Aplicar Filtro</button>
                    </form>
                </section>
            </div>
        </div>
    );

    function applyFilter(formData: SchemaType){
        console.log(formData);
    }
}