import React, { useEffect, useState } from 'react'
import "./administrador-tareas.css"
import ListadoTareas from '../listado-tareas-comp/listado-tareas';
import CrearTarea from '../crear-tarea-comp/crear-tarea';
import useTareaApi from '../../Api/useTareaApi';


import{
    Col,
    Form,
    Row,
    Alert
}from "react-bootstrap";

const AdministradorTareas = () => {

    const tareasApi = useTareaApi();
    const [listaTareas, setListaTareas] = useState([]);

    const getTareas = async () => {
        try {
            const { data } = await tareasApi.get("/tareas");
            setListaTareas(data);
        }
        catch (err) {
            <Alert variant={'warning'}>
                Hubo un error cargando las tareas
            </Alert>;
            setListaTareas([]);
        }
        finally {
            
        }
    }
    
    useEffect(() => {
        getTareas();
    }, []);
    
    return (
        <div className="admin">
            <Form.Group as={Row}>
                <Col sm={5}>
                    <CrearTarea></CrearTarea>
                </Col>
                <Col sm={7}>
                   
                    <ListadoTareas listaTareas = {listaTareas}></ListadoTareas>
                </Col>

            </Form.Group>
        </div>
    )
}

export default AdministradorTareas;
