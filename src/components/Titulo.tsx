type TituloProps = {
    name: string;
}

export function Titulo(props: TituloProps){
    return (
        <div className="w-full h-16 bg-[#88c8bc] alinhamento justify-center">
            <h2 className="text-3xl text-white font-Rokkitt">{props.name}</h2>
        </div>
    )
}