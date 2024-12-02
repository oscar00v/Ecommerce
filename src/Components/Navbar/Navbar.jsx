import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
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
      </ul>
    </nav>
  );
}

export default Navbar;





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
