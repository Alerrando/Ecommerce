import React from "react";
import { Titulo } from "../../../components/Titulo";

export function Partnership() {
  return (
    <section className="mb-20 md:mb-28 lg:mb-[4.5rem]">
        <Titulo name="Parcerias" />
        <div className="grid gap-8 md:flex md:items-center justify-center md:gap-18 my-4 md:my-8">
            <div className="h-[4.6875rem] w-[12.5rem] md:h-[8.75rem] md:w-[15rem] lg:h-[4.6875rem] lg:w-[12.5rem] mr-5">
                <img
                src="https://www.svgrepo.com/show/303665/apple-11-logo.svg"
                alt="logo da apple"
                className="w-full h-full"
                />
            </div>

            <div className="h-[6.25rem] w-[12.5rem] md:h-[8.75rem] md:w-[15.rem] lg:h-[6.25rem] lg:w-[12.5rem]">
                <img
                src="https://www.svgrepo.com/show/303445/dell-2-logo.svg"
                alt="logo da apple"
                className="w-full h-full"
                />
            </div>

            <div className="h-[7.5rem] w-[12.5rem] md:h-[10.625rem] md:w-[12.5rem] lg:h-[6.25rem] lg:w-[12.5rem]">
                <img
                src="https://www.svgrepo.com/show/354068/microsoft.svg"
                alt="logo da apple"
                className="w-full h-full object-cover"
                />
            </div>

            <div className="h-[6.25rem] w-[11.875rem] md:h-[10.625rem] md:w-[12.5rem] lg:h-[6.25rem] lg:w-[12.5rem]">
                <img
                src="https://www.svgrepo.com/show/349412/intel.svg"
                alt="logo da apple"
                className="w-full h-full object-cover"
                />
            </div>

            <div className="h-[7.8125rem] w-[12.5rem] md:h-[11.875rem] md:w-[13.75rem] lg:h-[6.25rem] lg:w-[12.5rem]">
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
