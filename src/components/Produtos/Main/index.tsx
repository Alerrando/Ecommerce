import React from "react";
import { DisplayProdutos } from "./DisplayProdutos";
import { Filtro } from "./Filtro";
import { Titulo } from "../../Titulo";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Autocomplete } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type OrdenarProps = {
  text: string;
};

export function Main() {
  const ordenar: readonly OrdenarProps[] = [
    { text: "Preço Crescente" },
    { text: "Preço Decrescente" },
    { text: "Mais Avaliados" },
    { text: "Mais Recentes" },
    { text: "Mais Procurados" },
    { text: "Promoção" },
  ];

  return (
    <main className="w-full h-full md:pt-[10%] md:px-20 bg-[#F1F3F8]">
      <Titulo name="Produtos" />
      <div className="">
        <div className="w-full h-auto flex flex-row items-center gap-6 py-4 border-b border-zinc-400">
          <label>Ordenar Por: </label>
          <Autocomplete
            id="country-select-demo"
            sx={{ width: 200 }}
            options={ordenar}
            autoHighlight
            getOptionLabel={(option) => option.text}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.text.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.text.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.text}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Escolha: "
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
        </div>

        <Filtro />
        <DisplayProdutos />
      </div>
    </main>
  );
}
