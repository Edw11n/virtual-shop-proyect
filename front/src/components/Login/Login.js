import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import Axios from "axios";
import './Login.css';
import Manage from '../Manage/Manage';

function Login({ onClose }) {
    //estados para controlar los campos del formulario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setmessage] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const { setUser } = useContext(UserContext);

    //la funcion se ejecuta al hacer click de iniciar sesion
    const verifyLogin = () => {
    //verifica que los campos esten completos
    if (!email || !password) {
        //mensaje en caso de que algun campo no esté relleno
        setmessage("Por favor, complete todos los campos");
    return;
    }

    //verifica en la base de datos los datos ingresador a travez de axios
    Axios.post('http://localhost:5000/login', {
        email,
        password
    }).then(response => {
        const { Users_idrol, Users_name, Users_email } = response.data;
    //verificacion del rol del usuario
    if (Users_idrol === 1) {
        //si el usuario es administrador
        setIsAdmin(true);
        setUser({ role: 'admin', name: Users_name, email: Users_email });
    } else {
        //si el usuario no es administrador
        setmessage("Inicio de sesión exitoso como usuario");
        setUser({ role: 'user', name: Users_name, email: Users_email });
        // Cerrar el formulario de login
        onClose();
    }
    }).catch(error => {
        //si hubo algun fallo al iniciar sesion
        setmessage("Hubo un error al iniciar sesión. Por favor, inténtelo de nuevo más tarde.");
        console.error('Error:', error);
    });
};

return (
    <div className="login">
        <div className="login-content">
        <h3>Iniciar sesión</h3>
        <input type='text' placeholder='correo electrónico' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type='password' placeholder='contraseña' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button className="login-verify" onClick={verifyLogin}>Iniciar sesión</button>
        <button className="login-onclose" onClick={onClose}>Cerrar</button>
        {message && <p>{message}</p>}
        {isAdmin && <Manage />} {/*renderiza el componente Manage*/}
        </div>
    </div>
);
}

export default Login;
