import React, { useState } from'react';
import logo from './logo.svg';
import './App.css';

function Login() {
return (
    <div className='login'>
        <input id='inputMail' type="text" placeholder="Correo electrónico"></input><br/>
        <input id='inputPassword' type="text" placeholder="Contraseña"></input><br/>
        <button id='sendButton' >Ingresar</button><br/>
        <a href="./Register.js">No tienes cuenta? Registrate aquí</a>
    </div>
);
}

export default Login;


