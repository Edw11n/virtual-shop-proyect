import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import './Account.css';
function Account({onClose}) {
    const { user, logout } = useContext(UserContext);

if (!user) {
    return <div>No has iniciado sesión.</div>;
}

return (
    <div className='account'>
        <div className='account-content'>
        <h2>Información de la cuenta</h2>
        <p>Nombre: {user.name}</p>
        <p>Correo electrónico: {user.email}</p>
        <p>Rol: {user.role === 'admin' ? 'Administrador' : 'Usuario'}</p>
        <button onClick={logout} >Cerrar sesión</button>
        <button onClick={onClose}>Cerrar</button>
        </div>
    </div>
);
}

export default Account;
