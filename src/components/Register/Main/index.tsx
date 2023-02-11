import { EnvelopeSimple, FacebookLogo, GoogleLogo, IdentificationCard, LockKey, Phone } from "phosphor-react";
import React, { useContext} from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { ShopContext, userProps } from "../../../context/shopContext";
import { FormLoginInputs } from "../../Login/Main";

type FormRegisterInputs = {
  name: string;
  tel: string;
  termos: string;
} & FormLoginInputs 

export function Main() {
  const { registers, searchRegistrarion, setUser, setRegisters, user } = useContext(ShopContext);
  const { register, handleSubmit,formState: { isValid }} = useForm<FormRegisterInputs>();
  const navigate = useNavigate();

  console.log()
  
  return (
    <main className="w-full absolute flex items-center justify-center text-white bg-cover h-[-webkit-fill-available]" style={{background: 'url("Login/background.jpg")', backgroundSize: "cover"}}>
      <div className="w-full md:w-[40%] h-full md:h-[90%] px-6 bg-white overflow-auto md:rounded-2xl border border-black shadow-lg">
        <div className="h-full grid gap-4 md:px-6 py-6">
          <header className="w-full h-auto text-center pb-4  text-black" translate="no">
            <h2 className="font-serif text-base md:text-2xl font-bold">
              REGISTRO
            </h2>
          </header>

          <section className="w-full h-auto grid gap-6 md:gap-0 md:flex items-start">
            <form
              className="h-full w-full text-black grid gap-3"
              onSubmit={handleSubmit(submit)}
            >
              <div className="flex flex-row items-center gap-2 border-b border-zinc-400">
                <IdentificationCard size={22} />
                <input
                  className="w-full outline-none px-2"
                  type="text"
                  placeholder="Digite seu nome completo"
                  id="name"
                  {...register("name", {required: true})}
                />
              </div>
              <div className="flex flex-row items-center gap-2 border-b border-zinc-400">
                <EnvelopeSimple size={22} />
                <input
                  className="w-full outline-none px-2"
                  type="email"
                  placeholder="Digite seu email"
                  id="email"
                  {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                />
              </div>
              <div className="flex flex-row items-center gap-2 border-b border-zinc-400">
                <LockKey size={22} />
                <input
                  className="w-full outline-none px-2"
                  type="password"
                  placeholder="Digite sua senha"
                  required
                  id="password"
                  {...register("password", {required: true, minLength: 6})}
                />
              </div>
              <div className="flex flex-row items-center gap-2 border-b border-zinc-400">
                <Phone size={22} />
                <input
                  className="w-full outline-none px-2"
                  type="tel"
                  placeholder="(##)#####-####"
                  required
                  id="tel"
                  {...register("tel", {required: true, minLength: 14})}
                />
              </div>

              <div className="w-auto h-auto flex flex-row items-start gap-2 text-black">
                <input type="checkbox" id="termos" className="w-4 h-4 mt-[2px]" {...register("termos", {required: true})} />
                <label className="text-sm" htmlFor="termos">
                  Aceito os{" "}
                  <a href="#" className="text-blue-600">
                    Termos e condições
                  </a>{" "}
                  de privacidade da Hostelaria
                </label>
              </div>

              <button
                type="submit"
                className={`w-full h-10 px-4 py-1 mx-auto mt-[7%] bg-blue-700 text-white rounded-full ${!isValid ? "opacity-20" : "opacity-100 cursor-pointer"}`}
                disabled={!isValid}
              >
                Registrar
              </button>

            </form>
          </section>

          <div className="w-full h-auto py-2 flex flex-col justify-center gap-4 text-black text-center">
            <h3>Registrar com</h3>

            <div className="w-full h-auto flex flex-row items-center justify-center gap-8">
              <button className="w-20 h-10 bg-zinc-600 rounded-lg flex items-center justify-center md:opacity-60 md:hover:opacity-100 transition-all">
                <GoogleLogo size={22} className="text-white" />
              </button>

              <button className="w-20 h-10 bg-zinc-600 rounded-lg flex items-center justify-center md:opacity-60 md:hover:opacity-100 transition-all">
                <FacebookLogo size={22} className="text-white" />
              </button>
            </div>
          </div>

          <h3 className="text-black mt-4 flex flex-col md:flex-row gap-0 md:gap-3">
            Já tem conta?{" "}
            <Link to="/login" className="text-blue-600 cursor-pointer">
              Faça Login
            </Link>
          </h3>
        </div>
      </div>
    </main>
  );

  function submit(event) {
    createUser(event);

    if(searchRegistrarion(event) != 0)
      navigate("/");
  }

  function createUser(userCreate: object | any){
    if(searchRegistrarion(userCreate) != 0){
        const aux: userProps = {
            id: Object.keys(user).length,
            name: userCreate.name,
            password: userCreate.password,
            email: userCreate.email,
            telefone: userCreate.tel,
            carrinho: [],
            favoritos: [],
        };

        setUser(aux);
        setRegisters([...registers, aux]);
    }else{ alert("Usuário já existe") }

  }
}
