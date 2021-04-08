import React from 'react';
import Home from "../../Pages/Home/Home"
import AdministradorTareas from '../../Pages/administrador-tareas-comp/administrador-tareas';
import CrearTarea from '../../Pages/crear-tarea-comp/crear-tarea';
import Reportes from '../../Pages/reportes-comp/reportes';

import {
    Switch,
    Route,
  } from "react-router-dom";
import EditarBorrar from '../../Pages/editar-borrar-comp/editar-borrar';

const ContenedorPaginas = () => {
    return (
        <Switch>
            <Route path="/tareas">
                <AdministradorTareas></AdministradorTareas>
            </Route>

            <Route path="/crear-tarea">
                <CrearTarea></CrearTarea>                
            </Route>

            <Route path="/reporte-tareas">
                <Reportes></Reportes>                
            </Route>

            <Route path="/editar-tareas">
                <EditarBorrar></EditarBorrar>
            </Route>

            <Route path="/">
                <Home></Home>
            </Route>
      </Switch>
    );
}

export default ContenedorPaginas;