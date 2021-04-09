import React, { useEffect, useState } from 'react'
import useTareaApi from '../../Api/useTareaApi';
import "./reportes.css";

import {
    Alert,
    Card,
    CardColumns,
    Badge,
    CardGroup,
    CardDeck

} from 'react-bootstrap';


const Reportes = () => {

    const tareasApi = useTareaApi();

    const [listaTareas, setListaTareas] = useState([]);
    const [error, setError] = useState('');
    

    const [contadorXEstado, setContadorXEstado] = useState({
        contNoIniciado: 0,
        contIniciado: 0,
        contTerminado: 0,
    });
    
    const{contNoIniciado, contIniciado, contTerminado} = contadorXEstado;

    const getTareas = async () => {
        try {
            const { data } = await tareasApi.get("/tareas");
            setListaTareas(data);
            contarTareasXEstados();

        }
        catch (err) {
            setError('Hubo un error contando las tareas');
        }
        finally {
            
        }
    }
    useEffect(() => {
        getTareas();
        
    },[]);

    
    const contarTareasXEstados = () => {
        let contadorNOIni = 0;
        let contadorIni = 0;
        let contadorTer = 0;

        for (let i = 0; i < listaTareas.length; i++) {
            if (listaTareas[i].estado === 'no-iniciado') {
                contadorNOIni ++;
            }else if (listaTareas[i].estado === 'iniciado') {
                contadorIni ++;    
            } else {
                contadorTer ++;
            }                
        } 
        setContadorXEstado({...contadorXEstado, contNoIniciado: contadorNOIni, contIniciado:contadorIni, contTerminado: contadorTer});
    }

    if (error) {
        return (
            <Alert variant="danger">
                Hubo un error contando las tareas
            </Alert>
        );
    }

    return (
        <>
        <h3>Reporte tareas</h3>
        <CardDeck className = "cardDeck">
            <Card border="info"  >
                <Card.Body>
                <Card.Title>Total de tareas</Card.Title>
                <Card.Text>
                    <h3>
                    <Badge variant="info">{listaTareas.length}</Badge>
                    </h3>
                </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="\imagenes\check.png" />
            </Card>
            
            <Card border="danger" >
                <Card.Body>
                <Card.Title>Tareas no iniciadas</Card.Title>
                <Card.Text>
                    <h3>
                        <Badge variant="danger">{contNoIniciado}</Badge>
                    </h3>
                </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="\imagenes\no-iniciadas.jpg" />
            </Card>

            <Card border="primary" >
                <Card.Body>
                <Card.Title>Tareas Iniciadas</Card.Title>
                <Card.Text>
                    <h3>
                        <Badge variant="primary">{contIniciado}</Badge>
                    </h3>
                </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="\imagenes\terminada.png" />
            </Card>
            
            <Card border="success" >
                <Card.Body>
                <Card.Title>Tareas terminadas</Card.Title>
                <Card.Text>
                    <h3>
                        <Badge variant="success">{contTerminado}</Badge>
                    </h3>
                </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="\imagenes\iniciadas.png" />
            </Card>
            
          
        </CardDeck>
        </>
    )
};

export default Reportes;
