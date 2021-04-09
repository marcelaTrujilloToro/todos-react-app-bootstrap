import React, { useEffect, useState } from 'react'
import FormularioTarea from '../../components/formulario-tarea-comp/formulario-tarea';
import useTareaApi from '../../Api/useTareaApi';

import {
    Alert
} from 'react-bootstrap';

import {
    useParams
} from "react-router-dom";

const EditarTarea = () => {

    let { idTarea } = useParams();
    const tareasApi = useTareaApi();
    const [error, setError] = useState('');
    const [tarea, setTarea] = useState({});

    useEffect(()=>{
        const getTareaById = async () => {
            try {
                const { data } = await tareasApi.get(`/tareas/${idTarea}`);
                setTarea(data);
            }
            catch (err) {
                setError('Hubo un error cargado la tarea');
            }
            finally {
            }
        }

        getTareaById();
    }, [idTarea]);

    if (error) {
        return (
            <Alert variant="danger">
                {error}
            </Alert>
        );
    }

    return (
        <FormularioTarea tarea={tarea} operacion='editarTarea'></FormularioTarea>
    )
}
export default EditarTarea;
