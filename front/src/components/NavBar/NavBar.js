import React, {useContext} from 'react';
import { UserContext } from '../../UserContext';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';
function NavBar({onLoginClick, onRegisterClick, toggleCart, showAccount}) {
    //se obtiene el usuario y la funcion "logout" del UserContext
    const { user, logout } = useContext(UserContext);
return (
    <nav className="navbar">
        <div className='logo'  >
        <FontAwesomeIcon icon={faArtstation} />
        </div>
        <div className='search'>
            <input type='text' placeholder='Busca productos...'></input>
            <button type='submit'>Buscar</button>
        </div>
        
        {!user ? (
                    <div className="entry-options">
                        <button onClick={onLoginClick}>Entra</button>
                        <button onClick={onRegisterClick}>Regístrate</button>
                    </div>
                ) : (
                    <div className="my-account">
                        <FontAwesomeIcon icon={faUser} onClick={showAccount} />
                        <button onClick={logout}>Cerrar Sesión</button>
                    </div>
                )}
        <div className="cart-icon" onClick={toggleCart} >
                <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    </nav>
    
);
}

export default NavBar;
