import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Principal } from "../views/Principal";
import { ClientesCrear } from "../views/ClientesCrear";
import { ClientesConsultar } from "../views/ClientesConsultar";
import { UsuariosCrear } from "../views/UsuariosCrear";
import { UsuariosActualizar } from "../views/UsuariosActualizar";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />}/>
                <Route path="/clientes-crear" element={<ClientesCrear />}/>
                <Route path="/clientes-consultar" element={<ClientesConsultar />}/>
                <Route path="/usuarios-crear" element={<UsuariosCrear />}/>
                <Route path="/usuarios-actualizar" element={<UsuariosActualizar />}/>
            </Routes>
        </BrowserRouter>
    );
};