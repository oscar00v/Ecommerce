import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Departamentos from "../pages/Departamentos";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Navbar from "../Components/Navbar/Navbar";
import Signup from "../pages/Singup";
import ProductDetail from "../pages/ProductDetails"; // Importar el nuevo componente
import AddProduct from '../pages/AddProduct';

const RoutesIndex = () => {
    // const { isAuth } = useAuthContext()

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/departamento" element={<Departamentos />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<Signup />} /> {/* Corregí la ruta aquí */}               
                <Route path="/login" element={<Login />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/add-product" element={<AddProduct />} /> {/* Nueva ruta */}
            </Routes>
        </>
    );
};

export default RoutesIndex;
