import React, { useState } from 'react'
import useTareaApi from '../../Api/useTareaApi';


import {
    Form,
    Col,
    Button,
    Alert
}from "react-bootstrap";


const FormularioTarea = ({tarea, operacion}) => {

    
    const [datos, setDatos] = useState(tarea);
    const [error, setError] = useState('');
    const tareasApi = useTareaApi();

    const onCampoChange = (evento) => {
        setDatos(
            {
                ...datos,
                [evento.target.name]: evento.target.value
            }
        );
    }

    const onSubmit = async (evento) => {

        evento.preventDefault();
        setError(null);
        try {            
            if(operacion === 'crearTarea'){
                await tareasApi.post("/tareas", datos);
                setDatos({
                    nombre:'',
                    duracion: 0,
                    estado: 'no-iniciado',
                });
            }
            else if (operacion === "editarTarea") {
                await tareasApi.put(`/tareas/${tarea.id}`, datos);
            }
        }
        catch (err) {
            setError('Hubo un error al guardar la tarea');
        }
        finally {
            
        }
    }
    return (
        
        <Form onSubmit={onSubmit}>

            <Form.Row >
               <Form.Group as = {Col}>
                <Form.Label>Titulo</Form.Label>
                   
                    <Form.Control 
                        name = "nombre"                     
                        value={datos.nombre}
                        placeholder="Nombre tarea" 
                        onChange = {onCampoChange}
                        />
                  
               </Form.Group>
            </Form.Row >

            <Form.Row>
                <Form.Group as ={Col}>
                    
                    <Form.Label>Duracion en horas</Form.Label>
                    
                        <Form.Control 
                            name = "duracion"
                            type = "number"
                            value={datos.duracion}
                            placeholder="Duracion en horas" 
                            onChange = {onCampoChange}
                        /> 
                </Form.Group>
            
                <Form.Group as = {Col}>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control 
                            as = "select"
                            name = "estado"
                            value={datos.estado}
                            onChange = {onCampoChange}
                            >                        
                            <option value="no-iniciado">No iniciado</option>
                            <option value="iniciado">Iniciado</option>
                            <option value="terminado">Terminado</option>
                                        
                    </Form.Control>  
                </Form.Group>
            </Form.Row>
           
            <Button 
                variant="primary"
                type="submit"                   
            >
                Guardar Tarea         
            </Button>

            <Form.Group>
                <br/>
                {error ?
                    <Alert variant="danger">
                        {error}
                    </Alert>
                    : null
                }
            </Form.Group>
             
        </Form> 
        
    )
};
export default FormularioTarea;