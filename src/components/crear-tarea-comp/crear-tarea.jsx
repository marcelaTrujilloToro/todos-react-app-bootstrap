import React from 'react'
import FormularioTarea from '../formulario-tarea-comp/formulario-tarea';

const CrearTarea = () => {
    return (
        <FormularioTarea
            tarea = {{
                nombre: "",
                duracion: 0,
                estado: "no-iniciado"
            }}
            operacion = "crearTarea"        
        >

        </FormularioTarea>
    )
}
export default CrearTarea;