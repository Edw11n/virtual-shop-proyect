import React, {useState} from "react";
import Axios from "axios";
import './Register.css';

function Register({onClose}) {
        const [name, setName] = useState("");
        const [lastname, setLastname] = useState("");
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [repeatPassword, setRepeatPassword] = useState("");
        const [mensaje, setMensaje] = useState(""); // Agrega estado para el mensaje

        //en esta funcion add si algun campo está sin completar dará el mensaje predefinido, sino, continuará la acción.
        const onRegister = () => {
            if (!name || !lastname|| !username || !email || !password || !repeatPassword){ 
            setMensaje("Por favor, complete todos los campos");
            return;
        }
        if (password !== repeatPassword) {
            setMensaje("Las contraseñas no coinciden");
            return;
        }
          //se usa la biblioteca axios para escuchar la ruta definida y usando el método .post envia la solicitud a la funcion de devolucion siguiente
        Axios.post('http://localhost:5000/register', {
            name: name,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            //actualiaza las variables de estado luego de que se realiza la solicitud correctamente 
        }).then(response => {
            setMensaje("Datos enviados correctamente");
            setName("");
            setLastname("");
            setUsername("");
            setEmail("");
            setPassword("");
            //si no se realiza correactamente se mostrará el mensaje de error en pantalla y consola
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

