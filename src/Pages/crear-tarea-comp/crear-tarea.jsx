import React from 'react'
import FormularioTarea from '../../components/formulario-tarea-comp/formulario-tarea';
import "./crear-tarea.css"


const CrearTarea = () => {
    console.log("debug1");
    return (
        <div className = "crear-tarea">
           <h3>Agregar un nueva tarea</h3> 
           <br/>
            <FormularioTarea
                tarea = {{
                    nombre: "",
                    duracion: 0,
                    estado: "no-iniciado"
                }}
                operacion = 'crearTarea'        
            >
            </FormularioTarea>
      </div>
    )
    
}
export default CrearTarea;