import React, { useEffect, useState } from 'react'
import "./administrador-tareas.css"
import ListadoTareas from '../../components/listado-tareas-comp/listado-tareas';
import useTareaApi from '../../Api/useTareaApi';


import{
    Form,
    Alert,
    Container
}from "react-bootstrap";

const AdministradorTareas = () => {

    console.log("debug5");
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
    console.log("debug6");
    useEffect(() => {
        getTareas();
    }, []);
    
    console.log("debug7");
   
    return (
        
        <div className="admin">
            <Container fluid>
                <h3>Listado de tareas</h3>
                <br/>
                <Form.Group >               
                    <ListadoTareas listaTareas = {listaTareas}></ListadoTareas>
                </Form.Group>
            </Container>
        </div>
    )
}

export default AdministradorTareas;
