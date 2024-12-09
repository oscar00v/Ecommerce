import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { ItemProvider } from './context/ItemsContext.jsx'; // Asegúrate de la ruta correcta
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import Departamentos from './pages/Departamentos.jsx';
import Login from './pages/Login.jsx';

import RoutesIndex from './routes/RoutesIndex.jsx'

function App3() {
    return (
        <ItemProvider>
            <Router>
                <RoutesIndex /> {/* Importa las rutas desde RoutesIndex */}
            </Router>
        </ItemProvider>
    );
}

export default App3;


{/* <ItemProvider>
      
            <Router>
                <Navbar /> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/departamento" element={<Departamentos />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </ItemProvider> */}