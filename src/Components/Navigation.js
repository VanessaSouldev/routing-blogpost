import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
    return (
        <nav>
           <ul className='navStyle'>
               <li>
                   <NavLink to='/'>Homepage</NavLink>
               </li>
               <li>
                   <NavLink to='/login'>Login</NavLink>
               </li>
               <li>
                   <NavLink to='/blog'>Blogs</NavLink>
               </li>
           </ul>
        </nav>
    );
};

export default Navigation;