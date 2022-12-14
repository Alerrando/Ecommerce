import * as React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Login } from "./components/Login";


export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}