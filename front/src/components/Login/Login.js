import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import Axios from "axios";
import './Login.css';
import Manage from '../Manage/Manage';

function Login({ onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setmessage] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const { setUser } = useContext(UserContext);

const verifyLogin = () => {
    if (!email || !password) {
        setmessage("Por favor, complete todos los campos");
    return;
    }

    Axios.post('http://localhost:5000/login', {
        email,
        password
    }).then(response => {
        const { Users_idrol, Users_name, Users_email } = response.data;

    if (Users_idrol === 1) {
        setIsAdmin(true);
        setUser({ role: 'admin', name: Users_name, email: Users_email });
    } else {
        setmessage("Inicio de sesión exitoso como usuario");
        setUser({ role: 'user', name: Users_name, email: Users_email });
        // Cerrar el login
        onClose();
    }
    }).catch(error => {
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
        <button onClick={verifyLogin}>Iniciar sesión</button>
        <button onClick={onClose}>Cerrar</button>
        {message && <p>{message}</p>}
        {isAdmin && <Manage />} {/*renderiza el componente Manage*/}
        </div>
    </div>
);
}

export default Login;
