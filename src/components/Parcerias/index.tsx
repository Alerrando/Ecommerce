import { Titulo } from "../Titulo";

export function Parcerias() {
  return (
    <section>
        <Titulo name="Parcerias" />
        <div className="alinhamento justify-center gap-18 my-8">
            <div className="h-[150px] w-[250px] mr-5">
                <img
                src="https://www.svgrepo.com/show/303665/apple-11-logo.svg"
                alt="logo da apple"
                className="w-full h-full"
                />
            </div>

            <div className="h-[150px] w-[250px]">
                <img
                src="https://www.svgrepo.com/show/303445/dell-2-logo.svg"
                alt="logo da apple"
                className="w-full h-full"
                />
            </div>

            <div className="h-[200px] w-[250px">
                <img
                src="https://www.svgrepo.com/show/354068/microsoft.svg"
                alt="logo da apple"
                className="w-full h-full"
                />
            </div>

            <div className="h-[200px] w-[250px]">
                <img
                src="https://www.svgrepo.com/show/349412/intel.svg"
                alt="logo da apple"
                className="w-full h-full"
                />
            </div>

            <div className="h-[200px] w-[250px]">
                <img
                src="https://www.svgrepo.com/show/303265/samsung-logo.svg"
                alt="logo da apple"
                className="w-full h-full"
                />
            </div>
        </div>
    </section>
  );
}
