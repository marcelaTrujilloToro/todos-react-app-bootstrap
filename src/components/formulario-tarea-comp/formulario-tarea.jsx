import React, { useState } from 'react'
import useTareaApi from '../../Api/useTareaApi';


import {
    Form,
    Col,
    Row,
    Button,
    Dropdown,
    Alert
}from "react-bootstrap";


const FormularioTarea = ({tarea, operacion}) => {

    
    const [datos, setDatos] = useState(tarea);
    const tareasApi = useTareaApi();

    const onCampoChange = (evento) => {
        setDatos(
            {
                ...datos,
                [evento.target.name]: evento.target.value
            }
        );
    }

    const onSubmit = async () => {
        try {            
            if(operacion === 'crearTarea'){
                await tareasApi.post("/tareas", datos);
                setDatos({
                    nombre:'',
                    duracion: 0,
                    estado: 'no-iniciado',
                });
            }
        }
        catch (err) {
            <Alert variant={'warning'}>
                Hubo un error cargando las tareas
            </Alert>
        }
        finally {
            
        }
    }
    return (
        
        <Form onSubmit={onSubmit}>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Titulo
                </Form.Label>
                <Col sm={10}>
                <Form.Control 
                    name = "nombre"                     
                    value={datos.nombre}
                    placeholder="Nombre tarea" 
                    onChange = {onCampoChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Duracion
                </Form.Label>
                <Col sm={10}>
                <Form.Control 
                    name = "duracion"
                    type = "number"
                    value={datos.duracion}
                    placeholder="Duracion en horas" 
                    onChange = {onCampoChange}
                    />
                </Col>
            </Form.Group>

            <Dropdown>
                <Dropdown.Toggle
                    variant="outline-secondary"
                    name = "estado"
                    value={datos.estado}
                    onChange = {onCampoChange}
                    >
                    Estado de la tarea
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item value="no-iniciado">No iniciado</Dropdown.Item>
                    <Dropdown.Item value="iniciado">Iniciado</Dropdown.Item>
                    <Dropdown.Item value="terminado">Terminado</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <br/>
            <Button 
                variant="primary"
                type="submit"                   
            >
            Guardar Tarea
            </Button>
        </Form> 
        
    )
};
export default FormularioTarea;