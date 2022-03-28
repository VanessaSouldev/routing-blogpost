import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './navigation.css';

function Navigation ({ isAuth, toggleAuth}) {
    const history = useHistory();

    function signOut() {
        toggleAuth(false);
        history.push('/')
    }

    return (
        <nav>
           <ul className='navStyle'>
               <li>
                   <NavLink to='/'>Homepage</NavLink>
               </li>
               {isAuth === true ? <>
               <li>
                   <NavLink to='/blog'>Blogs</NavLink>
               </li>
               <li>
                   <button type="button" onClick={signOut}>Uitloggen</button>
               </li>
               </> :
               <li>
                   <NavLink to='/login'>Login</NavLink>
               </li>}
           </ul>
        </nav>


    );
}

export default Navigation;