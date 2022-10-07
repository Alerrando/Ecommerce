import React from "react";
import { Titulo } from "../Titulo";

export function Parcerias() {
  return (
    <section>
        <Titulo name="Parcerias" />
        <div className="grid gap-8 md:flex md:items-center justify-center md:gap-18 my-4 md:my-8">
            <div className="h-[75px] w-[200px] md:h-[150px] md:w-[250px] mr-5">
                <img
                src="https://www.svgrepo.com/show/303665/apple-11-logo.svg"
                alt="logo da apple"
                className="w-full h-full"
                />
            </div>

            <div className="h-[100px] w-[200px] md:h-[150px] md:w-[250px]">
                <img
                src="https://www.svgrepo.com/show/303445/dell-2-logo.svg"
                alt="logo da apple"
                className="w-full h-full"
                />
            </div>

            <div className="h-[120px] w-[200px] md:h-[180px] md:w-[210px]">
                <img
                src="https://www.svgrepo.com/show/354068/microsoft.svg"
                alt="logo da apple"
                className="w-full h-full object-cover"
                />
            </div>

            <div className="h-[100px] w-[190px] md:h-[180px] md:w-[210px]">
                <img
                src="https://www.svgrepo.com/show/349412/intel.svg"
                alt="logo da apple"
                className="w-full h-full object-cover"
                />
            </div>

            <div className="h-[125px] w-[200px] md:h-[200px] md:w-[230px]">
                <img
                src="https://www.svgrepo.com/show/303265/samsung-logo.svg"
                alt="logo da apple"
                className="w-full h-full object-cover"
                />
            </div>
        </div>
    </section>
  );
}
