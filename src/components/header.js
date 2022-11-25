import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye ,faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return ( 
        <header className='header'>
            <h1 className='header-title'>lista de tareas</h1>
            <button className='header-button'>no mostrar tareas compledatadas
            <FontAwesomeIcon className='header-iconButton' icon={faEyeSlash}  />
            </button>
        </header>
     );
}
 
export default Header;