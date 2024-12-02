import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { ItemContext, ItemProvider } from './context/ItemsContext.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import Departamentos from './pages/Departamentos.jsx';
import Login from './pages/Login.jsx';





function App3() {
    return (
        <Router>
            {/* Aquí envolvemos el Navbar con el Router */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/departamento" element={<Departamentos />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
        // <div>
        //     hello world
        //     <Navbar/>

        // </div>
    )
}

export default App3
