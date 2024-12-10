import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Departamentos from "../pages/Departamentos";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Navbar from "../Components/Navbar/Navbar";
import Signup from "../pages/Singup";
import ProductDetail from "../pages/ProductDetails"; // Importar el nuevo componente

const RoutesIndex = () => {
    // const { isAuth } = useAuthContext()

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/departamento" element={<Departamentos />} />
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="/singup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product/:id" element={<ProductDetail />} /> {/* Nueva ruta */}
            </Routes>
        </>
    );
};

export default RoutesIndex;
