import React from 'react'

import{
    ListGroup
}from "react-bootstrap";

import { Link } from 'react-router-dom';

const ListadoTareas = ({listaTareas}) => {
    return (
       
        <ListGroup variant = "flush">
            {listaTareas.map((tarea) =>{
                return(
                    <ListGroup.Item key = {tarea.id}>
                        <Link to = {`/editar-tarea/${tarea.id}`}><b>{tarea.nombre}</b>:
                        duracion: {tarea.duracion} horas, 
                        estado: {tarea.estado}</Link>
                        
                
                    </ListGroup.Item>
                )            
            })}
        </ListGroup>
        
    )
};

export default ListadoTareas;

