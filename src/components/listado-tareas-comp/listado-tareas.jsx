import React from 'react'

import{
    ListGroup
}from "react-bootstrap";

const ListadoTareas = ({listaTareas}) => {
    return (
       
        <ListGroup variant = "flush">
            {listaTareas.map((tarea) =>{
                return(
                    <ListGroup.Item key = {tarea.id}>
                        {tarea.nombre}:
                        duracion: {tarea.duracion} horas, 
                        estado: {tarea.estado}
                
                    </ListGroup.Item>
                )            
            })}
        </ListGroup>
        
    )
};

export default ListadoTareas;

