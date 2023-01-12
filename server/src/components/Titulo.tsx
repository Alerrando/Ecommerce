import React from "react";

type TituloProps = {
    name: string;
}

export function Titulo(props: TituloProps){
    return (
        <div className="w-full h-12 md:h-16 bg-[#88c8bc] alinhamento justify-center">
            <h2 className="text-2xl md:text-3xl text-white font-Rokkitt">{props.name}</h2>
        </div>
    )
}