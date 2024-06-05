import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';
function NavBar({onLoginClick, onRegisterClick, toggleCart}) {
return (
    <nav className="navbar">
        <div className='logo' >
        <FontAwesomeIcon icon={faArtstation} />
        </div>
        <div className='search'>
            <input type='text' placeholder='Busca productos...'></input>
            <button type='submit'>Buscar</button>
        </div>
        <div className='entry-options'>
            <button onClick={onLoginClick}>Entra</button>
            <button onClick={onRegisterClick}>Regístrate</button>
        </div>
        <div className="cart-icon" onClick={toggleCart} >
                <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div className="account" onClick={showAccount}>
            <FontAwesomeIcon icon={faUser}  />
        </div>
    </nav>
    
);
}

export default NavBar;
