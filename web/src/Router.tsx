import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ProdutoInfo } from './components/ProdutoInfo';
import { Products } from './pages/Products';
import { Login } from './pages/access/Login'
import { Register } from './pages/access/Register'
import { Carrinho } from './components/Carrinho';
import { Favoritos } from './components/Favoritos';


export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/produtos" element={<Products />} />
                <Route path="/produtos/:id/:url" element={<ProdutoInfo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
        </BrowserRouter>
    )
}