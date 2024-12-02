import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ItemProvider } from './context/ItemsContext.jsx'; // Asegúrate de la ruta correcta
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import Departamentos from './pages/Departamentos.jsx';
import Login from './pages/Login.jsx';

function App3() {
    return (
        <ItemProvider> {/* Envuelve todo con ItemProvider */}
            <Router>
                <Navbar /> {/* Navbar tiene acceso al contexto */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/departamento" element={<Departamentos />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </ItemProvider>
    );
}

export default App3;