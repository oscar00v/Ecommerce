import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuth';
import { ItemContext } from '../../context/ItemsContext'; 
import { CartContext } from '../../context/CartContext'; // Importar el contexto del carrito
import CartDropdown from '../CartDropdown'; 
import './Navbar.scss';

function Navbar() {
  const { isAuth, role, logout } = useAuthContext();
  const { setSearchQuery } = useContext(ItemContext);
  const { cartItems } = useContext(CartContext); // Obtener items del carrito
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setCartOpen] = useState(false); // Estado para mostrar/ocultar carrito
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchQuery(e.target.value);
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <nav className="header">
      <NavLink to="/" className="header__logo">LOGO</NavLink>
      <ul className="header__nav-list">
        <li className="header__list-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'}
          >
            Home
          </NavLink>
        </li>
        <li className="header__list-item">
          <NavLink 
            to="/departamento" 
            className={({ isActive }) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'}
          >
            Departamento
          </NavLink>
        </li>
        {role === 'ADMIN' && (
          <li className="header__list-item">
            <NavLink 
              to="/add-product" 
              className={({ isActive }) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'}
            >
              Agregar Producto
            </NavLink>
          </li>
        )}
        {!isAuth ? (
          <>
            <li className="header__list-item">
              <NavLink 
                to="/signup" 
                className={({ isActive }) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'}
              >
                Signup
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink 
                to="/login" 
                className={({ isActive }) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'}
              >
                Login
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="header__list-item">
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'}
              >
                Dashboard
              </NavLink>
            </li> 
            <li className="header__list-item">
              <button 
                onClick={handleLogout} 
                className="header__item-link header__logout-btn"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
      <input 
        type="text" 
        placeholder="Buscar productos..." 
        value={searchTerm} 
        onChange={handleSearchChange} 
        className="search-bar"
      />
      <div className="header__cart">
        <button onClick={toggleCart}>
          🛒 ({cartItems.reduce((total, item) => total + item.quantity, 0)})
        </button>
        {isCartOpen && <CartDropdown />}
      </div>
    </nav>
  );
}

export default Navbar;

//? import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useAuthContext } from '../../hooks/useAuth';
// import { useContext } from 'react';
// import { ItemContext } from '../../context/ItemsContext'; // Importamos el contexto de items
// import './Navbar.scss';

// function Navbar() {
//   const { isAuth, role, logout } = useAuthContext();
//   const { setSearchQuery } = useContext(ItemContext); // Contexto de items para actualizar la búsqueda
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setSearchQuery(e.target.value); // Actualizamos el término de búsqueda en el contexto
//   };

//   return (
//     <nav className="header">
//       <NavLink to="/" className="header__logo">LOGO</NavLink>
//       <ul className="header__nav-list">
//         <li className="header__list-item">
//           <NavLink 
//             to="/" 
//             className={({ isActive }) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'}
//           >
//             Home
//           </NavLink>
//         </li>
//         <li className="header__list-item">
//           <NavLink 
//             to="/departamento" 
//             className={({ isActive }) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'}
//           >
//             Departamento
//           </NavLink>
//         </li>
//         {role === 'ADMIN' && (
//           <li className="header__list-item">
//             <NavLink 
//               to="/add-product" 
//               className={({ isActive }) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'}
//             >
//               Agregar Producto
//             </NavLink>
//           </li>
//         )}
//         {!isAuth ? (
//           <>
//             <li className="header__list-item">
//               <NavLink 
//                 to="/signup" 
//                 className={({ isActive }) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'}
//               >
//                 Signup
//               </NavLink>
//             </li>
//             <li className="header__list-item">
//               <NavLink 
//                 to="/login" 
//                 className={({ isActive }) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'}
//               >
//                 Login
//               </NavLink>
//             </li>
//           </>
//         ) : (
//           <>
//             <li className="header__list-item">
//               <NavLink 
//                 to="/dashboard" 
//                 className={({ isActive }) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'}
//               >
//                 Dashboard
//               </NavLink>
//             </li> 
//             <li className="header__list-item">
//               <button 
//                 onClick={handleLogout} 
//                 className="header__item-link header__logout-btn"
//               >
//                 Logout
//               </button>
//             </li>
//           </>
//         )}
//       </ul>
//       <input 
//         type="text" 
//         placeholder="Buscar productos..." 
//         value={searchTerm} 
//         onChange={handleSearchChange} 
//         className="search-bar"
//       />
//     </nav>
//   );
// }

// export default Navbar;


// ////!
// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useAuthContext } from '../../hooks/useAuth';
// import './Navbar.scss';

// function Navbar() {
//   const { isAuth, role, logout } = useAuthContext(); // Incluir el rol
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     <nav className="header">
//       <NavLink to="/" className="header__logo">LOGO</NavLink>
//       <ul className="header__nav-list">
//         <li className="header__list-item">
//           <NavLink 
//             to="/" 
//             className={({ isActive }) => 
//               isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
//             }
//           >
//             Home
//           </NavLink>
//         </li>
//         <li className="header__list-item">
//           <NavLink 
//             to="/departamento" 
//             className={({ isActive }) => 
//               isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
//             }
//           >
//             Departamento
//           </NavLink>
//         </li>
//         {role === 'ADMIN' && (
//           <li className="header__list-item">
//             <NavLink 
//               to="/add-product" 
//               className={({ isActive }) => 
//                 isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
//               }
//             >
//               Agregar Producto
//             </NavLink>
//           </li>
//         )}
//         {!isAuth ? (
//           <>
//             <li className="header__list-item">
//               <NavLink 
//                 to="/singup" 
//                 className={({ isActive }) => 
//                   isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
//                 }
//               >
//                 Signup
//               </NavLink>
//             </li>
//             <li className="header__list-item">
//               <NavLink 
//                 to="/login" 
//                 className={({ isActive }) => 
//                   isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
//                 }
//               >
//                 Login
//               </NavLink>
//             </li>
//           </>
//         ) : (
//           <>
//             <li className="header__list-item">
//               <NavLink 
//                 to="/dashboard" 
//                 className={({ isActive }) => 
//                   isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
//                 }
//               >
//                 Dashboard
//               </NavLink>
//             </li> 
//             <li className="header__list-item">
//               <button 
//                 onClick={handleLogout} 
//                 className="header__item-link header__logout-btn"
//               >
//                 Logout
//               </button>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
// ////!
// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useAuthContext } from '../../hooks/useAuth'; // Ajusta la ruta si es necesario
// import './Navbar.scss';

// function Navbar() {
//   const { isAuth, logout } = useAuthContext();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout(); // Llama a la función logout del contexto
//     navigate('/'); // Redirige al usuario al home o login
//   };

//   return (
//     <nav className='header'>
//       <NavLink to="/" className='header__logo'>
//         LOGO
//       </NavLink>

//       <ul className='header__nav-list'>
//         <li className='header__list-item'>
//           <NavLink 
//             to="/" 
//             className={({ isActive }) => 
//               isActive 
//                 ? 'header__item-link header__item-link--is-active' 
//                 : 'header__item-link'
//             }
//           >
//             Home
//           </NavLink>
//         </li>
//         <li className='header__list-item'>
//           <NavLink 
//             to="/departamento" 
//             className={({ isActive }) => 
//               isActive 
//                 ? 'header__item-link header__item-link--is-active' 
//                 : 'header__item-link'
//             }
//           >
//             Departamento
//           </NavLink>
//         </li>

//         {!isAuth ? (
//           // Mostrar estos enlaces si NO está autenticado
//           <>
//             <li className='header__list-item'>
//               <NavLink 
//                 to="/singup" 
//                 className={({ isActive }) => 
//                   isActive 
//                     ? 'header__item-link header__item-link--is-active' 
//                     : 'header__item-link'
//                 }
//               >
//                 Signup
//               </NavLink>
//             </li>
//             <li className='header__list-item'>
//               <NavLink 
//                 to="/login" 
//                 className={({ isActive }) => 
//                   isActive 
//                     ? 'header__item-link header__item-link--is-active' 
//                     : 'header__item-link'
//                 }
//               >
//                 Login
//               </NavLink>
//             </li>
//           </>
//         ) : (
//           // Mostrar este enlace si está autenticado
//           <>
//           <li className='header__list-item'>
//               <NavLink 
//                 to="/dashboard" 
//                 className={({ isActive }) => 
//                   isActive 
//                     ? 'header__item-link header__item-link--is-active' 
//                     : 'header__item-link'
//                 }
//               >
//                 Dashboard
//               </NavLink>
//             </li> 
//             <li className='header__list-item'>
//               <button 
//                 onClick={handleLogout} 
//                 className='header__item-link header__logout-btn'
//               >
//                 {}Logout
//               </button>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.scss';

// function Navbar() {
//   return (
//     <nav className='header'>
//       <NavLink to="/" className='header__logo'>
//         LOGO
//       </NavLink>

//       <ul className='header__nav-list'>
//         <li className='header__list-item'>
//           <NavLink 
//             to="/" 
//             className={({ isActive }) => 
//               isActive 
//                 ? 'header__item-link header__item-link--is-active' 
//                 : 'header__item-link'
//             }
//           >
//             Home
//           </NavLink>
//         </li>
//         <li className='header__list-item'>
//           <NavLink 
//             to="/departamento" 
//             className={({ isActive }) => 
//               isActive 
//                 ? 'header__item-link header__item-link--is-active' 
//                 : 'header__item-link'
//             }
//           >
//             Departamento
//           </NavLink>
//         </li>
//         <li className='header__list-item'>
//           <NavLink 
//             to="/singup" 
//             className={({ isActive }) => 
//               isActive 
//                 ? 'header__item-link header__item-link--is-active' 
//                 : 'header__item-link'
//             }
//           >
//             Singup
//           </NavLink>
//         </li>

//         <li className='header__list-item'>
//           <NavLink 
//             to="/login" 
//             className={({ isActive }) => 
//               isActive 
//                 ? 'header__item-link header__item-link--is-active' 
//                 : 'header__item-link'
//             }
//           >
//             Login
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;





// import React from 'react'
// import Home from '../../pages/Home'
// import Departamentos from '../../pages/Departamentos'
// import './Navbar.scss'
// function Navbar() {
//     return (
//         <nav className='header'>
//             <a href="/" className='header__logo'>LOGO</a>

//             <ul className='header__nav-list'>
//                 <li className='header__list-item'>
//                     <a href="/" className='header__item-link header__item-link--is-active'>Home</a>
//                 </li>
//                 <li className='header__list-item'>
//                     <a href="/Departamento" className='header__item-link'>Departamento</a>
//                 </li>
//                 <li className='header__list-item'>
//                     <a href='/login' className='header__item-link'>Login</a>
//                 </li>

//             </ul>

//             Navbar

//             {/* <Home/>
//       <Departamentos/> */}
//         </nav>

//     )
// }

// export default Navbar
