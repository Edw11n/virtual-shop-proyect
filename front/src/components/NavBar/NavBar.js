import React from 'react';
import './NavBar.css';
import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/images/CartIcon.png';

function NavBar({onLoginClick, onRegisterClick}) {
return (
    <nav className="navbar">
        <div className='logo' >
            <img src={logo} alt='logo de la tienda' ></img>
        </div>
        <div className='search'>
            <input type='text' placeholder='Busca productos...'></input>
            <button type='submit'>Buscar</button>
        </div>
        <div className='entry-options'>
            <button onClick={onLoginClick} >Entra</button>
            <button onClick={onRegisterClick} > Registrate</button>
        </div>
        <div className="cart">
            <img src={cartIcon} alt="Icono de carrito" />
            <span className="cart-count">0</span> {/* Contador de productos en el carrito */}
        </div>
    </nav>
    
);
}

export default NavBar;
