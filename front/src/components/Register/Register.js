import React from "react";
import './Register.css';

function Register({onClose}) {
    return (
        <div className="register" >
            <div className="register-content" >
                <h2>Registrate</h2>
                <input type='text' placeholder='Nombre'></input><br />
                <input type='text' placeholder='Apellido'></input><br />
                <input type='text' placeholder='Teléfono'></input><br />
                <input type='text' placeholder='Correo electrónico'></input><br />
                <input type='password' placeholder='Contraseña'></input><br />
                <input type='password' placeholder='Repetir contraseña'></input><br />
                <button onClick={onClose}>Registrate</button>
            </div>
        </div>
);
}
export default Register;

