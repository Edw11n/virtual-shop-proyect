import React, { useState } from'react';
import logo from './logo.svg';
import './App.css';

function Registro() {
return (
    <div className='register'>
        <input id='inputNameR' type='text' placeholder='Nombre' ></input>
        <input id='inputLastNameR' type='text' placeholder='Apellido' ></input>
        <input id='inputPhoneNumberR' type='number' placeholder='Nombre' ></input>
        <input id='inputMailR' type="text" placeholder="Correo electrónico"></input><br/>
        <input id='inputPasswordR' type="text" placeholder="Contraseña"></input><br/>
        <button id='sendButton' >Ingresar</button><br/>
        <a href='./App,js' >Ya tienes cuenta? Inicia sesión aquí</a>
        
    </div>
);
}

export default Registro;


