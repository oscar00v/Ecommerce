import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Departamentos from "../pages/Departamentos";
import Login from "../pages/Login";
import Navbar from "../Components/Navbar/Navbar";
import Signup from "../pages/Singup";

const RoutesIndex = () => {
    // const { isAuth } = useAuthContext()

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path="/departamento" element={<Departamentos />} />
                <Route path="/singup" element={<Signup />} />
                <Route path='/login' element={<Login />} />

            </Routes>
        </>
    )
}

export default RoutesIndex