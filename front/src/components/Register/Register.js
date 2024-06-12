import React, {useState} from "react";
import Axios from "axios";
import './Register.css';

function Register({onClose}) {
        //se define estados para controlar los campos del formulario
        const [name, setName] = useState("");
        const [lastname, setLastname] = useState("");
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [repeatPassword, setRepeatPassword] = useState("");
        const [mensaje, setMensaje] = useState("");

        //funcion que se inicializa al hacer click en el boton de registrarse
        const onRegister = () => {
            //verificacion de que no haya campos vacios
            if (!name || !lastname|| !username || !email || !password || !repeatPassword){ 
            //mensaje si se encuentra campos vacios
            setMensaje("Por favor, complete todos los campos");
            return;
        }
        //se verifica que las contraseñas ingresadas sean iguales
        if (password !== repeatPassword) {
            setMensaje("Las contraseñas no coinciden");
            return;
        }
        //envío de los datos ingresados al servidor usando Axios
        Axios.post('http://localhost:3001/users', {
            name: name,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
        //actualiaza los estados y mensaje de confirmacion
        }).then(response => {
            setMensaje("Datos enviados correctamente");
            setName("");
            setLastname("");
            setUsername("");
            setEmail("");
            setPassword("");
        //mensaje de error en caso de fallo
        }).catch(error => {
            setMensaje("Hubo un error al enviar los datos. Por favor, inténtelo de nuevo más tarde.");
            console.error('Error:', error);
        });
        };
        
    return (
        <div className="register" >
            <div className="register-content" >
                <h2>Registrate</h2>
                <input type='text' placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}></input><br />
                <input type='text' placeholder='Apellido' value={lastname} onChange={(e) => setLastname(e.target.value)}></input><br />
                <input type='text' placeholder='Teléfono' value={username} onChange={(e) => setUsername(e.target.value)}></input><br />
                <input type='text' placeholder='Correo electrónico' value={email} onChange={(e) => setEmail(e.target.value)}></input><br />
                <input type='password' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)}></input><br />
                <input type='password' placeholder='Repetir contraseña' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}></input><br />
                <button className="register-onregister" onClick={onRegister}>Registrarse</button><br />
                <button  className="register-onclose" onClick={onClose}>Cerrar</button>
                {mensaje && <p>{mensaje}</p>}
            </div>
        </div>
);
}
export default Register;

