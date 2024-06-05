
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apptienda'
  });

db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

// Rutas para el CRUD

// Obtener todos los usuarios
app.get('/usuarios', (req, res) => {
        db.query('SELECT * FROM usuarios', (err, results) => {
            if (err) {
                console.error('Error al obtener usuarios:', err);
                res.status(500).send('Error al obtener usuarios');
                return;
            }
            res.json(results);
        });
    });
  
  // Crear un nuevo usuario
  app.post('/users', (req, res) => {
    const { name, lastname, username, password, email, idrol, idstatus } = req.body;
    if (!name || !lastname || !username || !password || !email || !idrol || !idstatus) {
      res.status(400).send('Por favor proporciona nombre, lastname, username, paswword, email, rol, status');
      return;
    }
  
    db.query('INSERT INTO users (Users_name, Users_lastname, Users_username, Users_email, Users_password, Users_idrol, Users_idstatus) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, lastname, username, email, password, idrol, idstatus ], (err, result) => {
      if (err) {
        console.error('Error al crear usuario:', err);
        res.status(500).send('Error al crear usuario');
        return;
      }
      res.status(201).send('Usuario creado exitosamente');
    });
  });
  
    // Crear un nuevo articulo
    app.post('/articulo', (req, res) => {
        const { name, categoria, codigo, precio, stock, descripcion, imagen } = req.body;
        if (!name || !categoria || !codigo || !precio || !stock || !descripcion || !imagen) {
          res.status(400).send('Por favor proporciona nombre, categoria, precio, stock, descripcion, imagen');
          return;
        }
      
        db.query('INSERT INTO articulo (articulo_name, articulo_idcategoria, articulo_idCodigo, articulo_precio, articulo_stock, articulo_descripcion, articulo_imagen) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, categoria, codigo, precio, stock, descripcion, imagen ], (err, result) => {
          if (err) {
            console.error('Error al crear articulo:', err);
            res.status(500).send('Error al crear articulo');
            return;
          }
          res.status(201).send('Articulo creado exitosamente');
        });
    });

    // Crear una nueva categoria
    app.post('/categoria', (req, res) => {
        const { name, descripcion, estado} = req.body;
        if (!name || !descripcion || !estado) {
            res.status(400).send('Por favor proporcione nombre, descripcion y estado');
            return;
        }

        db.query('INSERT INTO categoria (categoria_name, categoria_descripcion, categoria_estado) VALUES (?, ?, ?)' [name, descripcion, estado], (err, result) => {
            if (err){
                console.error('Error al crear categoria:', err);
                res.status(500).send('Error al crear categoria');
                return;
            }
            res.status(201).send('Categoria creado exitosamente');
        });
    });
      
    // crear detalle de venta
    app.post('/detalle de venta', (req, res) =>{
        const { cantidad, precio, descuento} = req.body;
        if (!cantidad || !precio || !descuento) {
            res.status(400).send('Por favor proporcione cantidad, precio, descuento');
            return;
        }

        db.query('INSERT INTO detalle de venta (detalle_venta_cantidad, detalle_venta_precio, detalle_venta_descuento) VALUES (?, ?, ?)' [cantidad, precio, descuento], (err, result) => {
            if (err){
                console.error('Error al crear detalle de venta:', err);
                res.status(500).send('Error al crear detalle de venta');
                return;
            }
            res.status(201).send('Detalle de venta creador exitosamente');
        });
    });

    // crear rol 
    app.post('/rol', (req, res) => {
        const { text}= req.body;
        if (!text){
            res.status(400).send('Por favor proporcione el Rol');
            return;
        }

        db.query('INSERT INTO rol (rol_text) VALUES (?)' [text], (err,result)=> {
            if (err){
                console.err('Error al crear Rol:', err);
                res.status(500).send('Error al crear Rol');
                return;
            }
            res.status(201).send('Rol creado exitosamente');
        });
    });
    
  // Actualizar un usuario
  app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, email, telefono } = req.body;
    if (!nombre || !email || !telefono) {
      res.status(400).send('Por favor proporciona nombre, email y telefono');
      return;
    }
  
    db.query('UPDATE usuarios SET nombre = ?, email = ?, telefono = ? WHERE id = ?', [nombre, email, telefono, id], (err, result) => {
      if (err) {
        console.error('Error al actualizar usuario:', err);
        res.status(500).send('Error al actualizar usuario');
        return;
      }
      res.send('Usuario actualizado exitosamente');
    });
  });
  
  // Eliminar un usuario
  app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
  
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar usuario:', err);
        res.status(500).send('Error al eliminar usuario');
        return;
      }
      if (result.affectedRows === 1) {
        res.send('Usuario eliminado exitosamente');
      } else {
        res.status(404).send('No se encontró ningún usuario con el ID proporcionado');
      }
    });
  });

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});