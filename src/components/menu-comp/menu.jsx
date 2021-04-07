import React from 'react';


import {
    Nav,
    Navbar
} from 'react-bootstrap';

import {
    Link
} from "react-router-dom";


const Menu = () => {
    return (
        <Navbar bg="primary" variant="dark" className="justify-content-around"  >
            <Navbar.Brand>Tareas App</Navbar.Brand>
            <Nav >
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/crear-tarea">Crear tarea</Nav.Link>
                <Nav.Link as={Link} to="/tareas">Lista tareas</Nav.Link>
                <Nav.Link as={Link} to="">Editar tarea</Nav.Link>
                <Nav.Link as={Link} to="">Reportes de tareas</Nav.Link>
                
            </Nav>            
        </Navbar>
    )
}

export default Menu;
