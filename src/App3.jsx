import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { ItemProvider } from './context/ItemsContext.jsx'; // Asegúrate de la ruta correcta
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import Departamentos from './pages/Departamentos.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { AuthProvider } from './context/AuthContext';
import RoutesIndex from './routes/RoutesIndex.jsx'
import { CartProvider } from './context/CartContext.jsx';

function App3() {
    return (
        <CartProvider>
        <AuthProvider>
            <ItemProvider>
                <Router>
                    <RoutesIndex /> {/* Importa las rutas desde RoutesIndex */}
                </Router>
            </ItemProvider>
        </AuthProvider>
        </CartProvider>

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