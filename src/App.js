import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContenedorPaginas from './components/contendor-paginas-comp/contenedor-paginas';
import Menu from './components/menu-comp/menu';


import {
  BrowserRouter as Router,
} from "react-router-dom";

import {
  Container
} from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Container fluid className="app-container">
        
          <Menu></Menu>  
          
          <ContenedorPaginas></ContenedorPaginas>
            
      </Container>
    </Router>
  );
}

export default App;
