import React, { useState, useEffect } from "react";
import Axios from "axios";

function Manage() {
    //estados para almacenar el listado de usuario, carga y error
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Obtener el listado de usuarios 
    useEffect(() => {
        obtenerUsuarios();
    }, []);
    //obtener el listado de usuarios desde la base de datos
    const obtenerUsuarios =() => {
        Axios.get('http://localhost:5000/usuarios')
    .then(response => {
        setUsuarios(response.data);
        setLoading(false);
    })
    //en caso de eror
    .catch(error => {
        console.error('Error al obtener usuarios:', error);
        setError('Error al obtener usuarios. Por favor, inténtelo de nuevo más tarde.');
        setLoading(false);
    });
};
//funcion para eliminar un usuario de la base de datos a traves de axios
const eliminarUsuario = (id) => {
    Axios.delete(`http://localhost:5000/usuarios/${id}`)
    .then(response => {
        console.log(response.data);
        //obtener la lista de usuarios actualizada al eliminar uno
        obtenerUsuarios();
    })
    //en caso de error
    .catch(error => {
        console.error('Error al eliminar usuario:', error);
    });
};

if (loading) {
    return <div>Cargando listado de usuarios...</div>;
}

if (error) {
    return <div>{error}</div>;
}

return (
    //renderizado de la tabla de usuarios
    <div>
    <h2>Listado de usuarios registrados</h2>
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Username</th>
            <th>Correo electrónico</th>
            <th>Contraseña</th>
            <th>ID rol</th>
            <th>ID status</th>
            <th>Opciones</th>
        </tr>
        </thead>
        <tbody>
            {usuarios.map(usuario => (
            <tr key={usuario.id}>
                <td>{usuario.Users_id}</td>
                <td>{usuario.Users_name}</td>
                <td>{usuario.Users_lastname}</td>
                <td>{usuario.Users_username}</td>
                <td>{usuario.Users_email}</td>
                <td>{usuario.Users_password}</td>
                <td>{usuario.Users_idrol}</td>
                <td>{usuario.Users_idstatus}</td>
                <td><button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button></td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
}

export default Manage;
