import React from "react";
import './Login.css';

function Login({onClose}) {
    return (
    <div className="login" >
    <div className="login-content" >
            <h3>Iniciar sesión</h3>
            <input type='text' placeholder='Correo electrónico'></input><br />
            <input type='password' placeholder='Contraseña'></input><br />
            <button onClick={onClose} >Iniciar sesión</button>
    </div>
    </div>
);
}
export default Login;

