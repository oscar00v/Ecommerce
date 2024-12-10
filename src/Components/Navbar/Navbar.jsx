import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuth'; // Ajusta la ruta si es necesario
import './Navbar.scss';

function Navbar() {
  const { isAuth, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Llama a la función logout del contexto
    navigate('/'); // Redirige al usuario al home o login
  };

  return (
    <nav className='header'>
      <NavLink to="/" className='header__logo'>
        LOGO
      </NavLink>

      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? 'header__item-link header__item-link--is-active' 
                : 'header__item-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink 
            to="/departamento" 
            className={({ isActive }) => 
              isActive 
                ? 'header__item-link header__item-link--is-active' 
                : 'header__item-link'
            }
          >
            Departamento
          </NavLink>
        </li>

        {!isAuth ? (
          // Mostrar estos enlaces si NO está autenticado
          <>
            <li className='header__list-item'>
              <NavLink 
                to="/singup" 
                className={({ isActive }) => 
                  isActive 
                    ? 'header__item-link header__item-link--is-active' 
                    : 'header__item-link'
                }
              >
                Signup
              </NavLink>
            </li>
            <li className='header__list-item'>
              <NavLink 
                to="/login" 
                className={({ isActive }) => 
                  isActive 
                    ? 'header__item-link header__item-link--is-active' 
                    : 'header__item-link'
                }
              >
                Login
              </NavLink>
            </li>
          </>
        ) : (
          // Mostrar este enlace si está autenticado
          <>
          <li className='header__list-item'>
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => 
                  isActive 
                    ? 'header__item-link header__item-link--is-active' 
                    : 'header__item-link'
                }
              >
                Dashboard
              </NavLink>
            </li> 
            <li className='header__list-item'>
              <button 
                onClick={handleLogout} 
                className='header__item-link header__logout-btn'
              >
                {}Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;


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
