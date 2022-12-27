import React, { FormEvent, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { ShopContext } from "../../../context/shopContext";
import { FormLoginInputs } from "../../Login/Main";

type FormRegisterInputs = {
  name: string;
  tel: string;
  termos: string;
} & FormLoginInputs 

export function Main() {
  const { createUser, registers } = useContext(ShopContext);
  const { register, handleSubmit, formState: { isValid }} = useForm<FormRegisterInputs>();
  const navigate = useNavigate();

  return (
    <main className="w-full h-[91%] md:h-[90%] absolute flex items-center justify-center text-white mt-[63px] md:mt-[69px]">
      <img
        src="Login/background.jpg"
        alt=""
        className="h-full w-full bg-cover -z-10 absolute"
      />
      <div className="w-[380px] md:w-[46%] h-[500px] md:h-auto bg-white overflow-auto rounded-2xl border border-zinc-600 shadow-lg">
        <div className="grid gap-4 px-6 py-6">
          <header className="w-full h-auto text-black" translate="no">
            <h2 className="font-serif text-base md:text-lg">
              Faça seu login ou crie sua conta
            </h2>
          </header>

          <section className="w-full h-auto grid gap-6 md:gap-0 md:flex items-start">
            <form
              className="h-full w-full max-w-[250px] text-black grid gap-3"
              onSubmit={handleSubmit(submit)}
            >
              <div className="grid gap-2 md:gap-[1px]">
                <label>Digite seu nome completo</label>
                <input
                  className="outline-none h-8 md:h-10 px-2 border border-zinc-400"
                  type="text"
                  placeholder="Digite seu nome completo"
                  id="name"
                  {...register("name", {required: true})}
                />
              </div>
              <div className="grid gap-2 md:gap-[1px]">
                <label>Digite seu email</label>
                <input
                  className="outline-none h-8 md:h-10 px-2 border border-zinc-400"
                  type="email"
                  placeholder="Digite seu email"
                  id="email"
                  {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                />
              </div>
              <div className="grid gap-2 md:gap-[1px]">
                <label>Digite sua senha</label>
                <input
                  className="outline-none h-8 md:h-10 px-2 border border-zinc-400"
                  type="password"
                  placeholder="Digite sua senha"
                  required
                  id="password"
                  {...register("password", {required: true, minLength: 6})}
                />
              </div>
              <div className="grid gap-2 md:gap-[1px]">
                <label>Digite seu telefone</label>
                <input
                  className="outline-none h-8 md:h-10 px-2 border border-zinc-400"
                  type="tel"
                  placeholder="(##)#####-####"
                  required
                  id="tel"
                  {...register("tel", {required: true, minLength: 14})}
                />
              </div>

              <button
                type="submit"
                className={`px-4 py-1 bg-blue-700 text-white ${!isValid ? "opacity-20" : "opacity-100 cursor-pointer"}`}
                disabled={!isValid}
              >
                Registrar
              </button>
            </form>

            <div className="block h-[1px] md:h-full w-full md:w-[1px] md:mx-8 bg-zinc-500"></div>

            <div className="w-full grid gap-3 text-black">
              <p>Ou conecte com outra conta</p>

              <div className="grid gap-2">
                <div className="w-full h-10 border border-zinc-400 cursor-pointer hover:bg-sombreamento">
                  <div className="w-full h-full flex items-center gap-6 ml-2">
                    <img
                      src="Login/google-svgrepo-com.svg"
                      alt=""
                      className="h-6 w-6 flex items-center justify-center"
                    ></img>
                    <p className="text-sm md:text-[15px]">
                      Registre-se com o Google
                    </p>
                  </div>
                </div>

                <div className="w-full h-10 border border-zinc-400 cursor-pointer hover:bg-sombreamento">
                  <div className="w-full h-full flex items-center gap-6 ml-2">
                    <img
                      src="Login/facebook-svgrepo-com.svg"
                      className="h-6 w-6 flex items-center justify-center"
                    ></img>
                    <p className="text-sm md:text-[15px]">
                      Registre-se com o Facebook
                    </p>
                  </div>
                </div>

                <div className="w-full h-10 border border-zinc-400 cursor-pointer hover:bg-sombreamento">
                  <div className="w-full h-full flex items-center gap-6 ml-2">
                    <img
                      src="Login/apple-svgrepo-com.svg"
                      className="h-6 w-6 flex items-center justify-center"
                    ></img>
                    <p className="text-sm md:text-[15px]">
                      Registre-se com o Apple
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-full md:pt-[35%]">
                <form className="flex gap-2 text-black">
                  <input type="checkbox" id="termos" className="w-[25px]" {...register("termos", {required: true})} />
                  <label className="text-sm" htmlFor="termos">
                    Aceito os{" "}
                    <a href="#" className="text-blue-600">
                      Termos e condições
                    </a>{" "}
                    de privacidade da Hostelaria
                  </label>
                </form>
              </div>
            </div>
          </section>

          <h3 className="text-black mt-4">
            Já tem conta?{" "}
            <Link to="/login" className="text-blue-600 cursor-pointer">
              {" "}
              Faça login
            </Link>
          </h3>
        </div>
      </div>
    </main>
  );

  function submit(event) {

    createUser(event);
    navigate("/");
  }
}
