import React from 'react';
import Home from "../../Pages/Home/Home"
import AdministradorTareas from '../../Pages/administrador-tareas-comp/administrador-tareas';
import CrearTarea from '../../Pages/crear-tarea-comp/crear-tarea';

import {
    Switch,
    Route,
  } from "react-router-dom";

const ContenedorPaginas = () => {
    return (
        <Switch>
            <Route path="/tareas">
                <AdministradorTareas></AdministradorTareas>
            </Route>

            <Route path="/crear-tarea">
                <CrearTarea></CrearTarea>                
            </Route>

            <Route path="/">
                <Home></Home>
            </Route>
      </Switch>
    );
}

export default ContenedorPaginas;