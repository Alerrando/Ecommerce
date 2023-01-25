import * as React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ProdutoInfo } from './components/ProdutoInfo';
import { Produtos } from './components/Produtos';


export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/produtos/:id/:url" element={<ProdutoInfo />} />
            </Routes>
        </BrowserRouter>
    )
}