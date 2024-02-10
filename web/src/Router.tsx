import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ProdutoInfo } from './components/ProdutoInfo';
import { Produtos } from './components/Produtos';
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Carrinho } from './components/Carrinho';
import { Favoritos } from './components/Favoritos';


export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/produtos/:id/:url" element={<ProdutoInfo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
        </BrowserRouter>
    )
}