import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Departamentos from "../pages/Departamentos";
import Login from "../pages/Login";
import Navbar from "../Components/Navbar/Navbar";

const RoutesIndex = () => {
    // const { isAuth } = useAuthContext()

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path="/departamento" element={<Departamentos />} />
                <Route path='/login' element={<Login />} />

            </Routes>
        </>
    )
}

export default RoutesIndex