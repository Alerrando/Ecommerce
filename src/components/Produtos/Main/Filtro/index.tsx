import { Faders } from 'phosphor-react';
import React, { useContext, useState } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import { ShopContext } from '../../../../context/shopContext';

type OrdenarProps = {
    text: string;
};

type FiltroProps = {
    setModalFiltro: (modalInfo: boolean) => void,
}

export function Filtro(props: FiltroProps) {
    const { setModalFiltro } = props;
    const { products } = useContext(ShopContext);
    const ordenar: readonly OrdenarProps[] = [
        { text: "Preço Crescente" },
        { text: "Preço Decrescente" },
        { text: "Mais Avaliados" },
        { text: "Mais Recentes" },
        { text: "Mais Procurados" },
        { text: "Promoção" },
    ];

    return (
        <section className='relative w-auto h-full bg-white'>
            <div className='w-full h-full flex flex-col md:flex-row md:items-center justify-between md:px-6 border-b border-zinc-400'>
                <div className='w-full h-full flex flex-row items-center justify-between px-4 border-b border-[#e5e5e5]'>
                    <header className='flex flex-row items-center justify-start gap-6'>
                        <Faders size={26} className="cursor-pointer" onClick={() => setModalFiltro(true)} />
                    </header>

                    <div className="w-auto h-auto flex flex-row items-center gap-6 py-4">
                        <label className='text-sm md:text-base'>Ordenar Por: </label>
                        <Autocomplete
                            id="country-select-demo"
                            size='small'
                            className="w-[100px!important] md:w-[220px!important]"
                            options={ordenar}
                            autoHighlight
                            getOptionLabel={(option) => option.text}
                            renderOption={(props, option) => (
                            <Box component="li" {...props}>
                                <img
                                    loading="lazy"
                                    width="10"
                                    src={`https://flagcdn.com/w20/${option.text.toLowerCase()}.png`}
                                    srcSet={`https://flagcdn.com/w40/${option.text.toLowerCase()}.png 2x`}
                                    alt=""
                                />
                                <span className='text-xs md:text-base'>{option.text}</span>
                            </Box>
                            )}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Escolha"
                                inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                            />
                            )}
                        />
                    </div>
                </div>

                <div className='w-auto md:w-1/2 flex flex-row items-center md:justify-end px-4 md:px-0 py-4 md:py-0 gap-4'>
                    <span className='text-sm md:text-base font-medium'>{`${products.length}`}</span>
                    <h3 className='text-base md:text-lg'>Produtos</h3>
                </div>
            </div>

        </section>
    );
}