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

  
    const tareasApi = useTareaApi();
    const [error, setError] = useState('');
    const [listaTareas, setListaTareas] = useState([]);

    const getTareas = async () => {
        try {
            const { data } = await tareasApi.get("/tareas");
            setListaTareas(data);
            setError(null);
        }
        catch (err) {
            setError('Hubo un error cargando las tareas');
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
            <Container fluid>
                <h3>Listado de tareas</h3>
                <br/>
                {error ?
                    <Alert variant="danger">
                        {error}
                    </Alert>
                    : null
                }             
                <Form.Group >  
                <ListadoTareas listaTareas = {listaTareas}></ListadoTareas>
                </Form.Group>
            </Container>
        </div>
    )
}

export default AdministradorTareas;
