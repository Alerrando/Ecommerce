import React, { useContext } from "react";
import { ShopContext, userProps } from "../../../context/shopContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { EnvelopeSimple, FacebookLogo, GoogleLogo, LockKey } from 'phosphor-react'

export type FormLoginInputs = {
  email: string;
  password: string;
}

export function Main() {
  const { register, handleSubmit, formState: { isValid }} = useForm<FormLoginInputs>();
  const { searchRegistrarion, setUser, user, registers } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <main className="w-full absolute flex items-center justify-center text-white bg-cover h-[-webkit-fill-available] background-login-register">
      <div className="w-full md:w-[40%] h-full md:h-[90%] px-6 bg-white overflow-auto md:rounded-2xl border border-black shadow-lg">
        <div className="h-full grid gap-4 md:px-6 py-6">
          <header className="w-full h-auto text-center pb-4  text-black" translate="no">
            <h2 className="font-serif text-2xl font-bold">
              LOGIN
            </h2>
          </header>

          <section className="w-full h-auto grid gap-6 md:gap-0 md:flex items-start">
            <form onSubmit={handleSubmit(submit)} className="h-full w-full text-black grid gap-3">
              <div className="flex flex-row items-center gap-2 border-b border-zinc-400">
                <EnvelopeSimple size={22} />
                <input
                  className="w-full outline-none px-2"
                  type="email"
                  placeholder="Digite seu email"
                  id="email"
                  required
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
              </div>
              <div className="flex flex-row items-center gap-2 border-b border-zinc-400">
                <LockKey size={22} />
                <input
                  className="w-full outline-none px-2"
                  type="password"
                  placeholder="Digite sua senha"
                  id="password"
                  {...register("password", { required: true, minLength: 6 })}
                  required
                />
              </div>

              <div className="w-full h-auto flex flex-row items-center justify-between">
                <div className="w-auto h-auto flex flex-row items-center gap-2">
                  <input type="checkbox" name="" id="" className="w-4 h-4" />
                  <span className="text-sm md:text-[15px] font-semibold">Lembre de mim</span>
                </div>

                <a className="text-blue-600" href="#">
                  Esqueci minha senha
                </a>
              </div>

              <button
                className={`w-full h-10 px-4 py-1 mx-auto mt-[7%] bg-blue-700 text-white rounded-full ${!isValid ? "opacity-20" : "opacity-100 cursor-pointer"}`}
                disabled={!isValid}
              >
                Login
              </button>
            </form>
          </section>

          <div className="w-full h-auto py-2 flex flex-col justify-center gap-4 text-black text-center">
            <h3>Logar com</h3>

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
            Não tem conta ainda?{" "}
            <Link to="/register" className="text-blue-600 cursor-pointer">
              Inscreva-se gratuitamente
            </Link>
          </h3>
        </div>
      </div>

      <div className="w-[380px] md:w-[40%] h-[90%] hidden">
        <img src="Login/background-login.jpg" alt="" className="h-full w-full" />
      </div>
    </main>
  );

  function submit(event) {
    if (checkRegisters(event))
      navigate("/");

  }

  function checkRegisters(login: object | any) {
    console.log(login)
    if(searchRegistrarion(login) == 0){
        const aux: userProps | any = {
            id: Object.keys(user).length,
            password: login.password,
            email: login.email,
            carrinho: [],
        };

        setUser(aux);
        return true;
    } else { 
        alert("Login não existe!"); 
        return false;
    }
''}
}