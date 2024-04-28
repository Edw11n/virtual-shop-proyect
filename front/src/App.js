import React, {useState} from'react';
import NavBar from './components/NavBar/NavBar.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Product from './components/Product/Product.js';
import './App.css';


function App() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const products = [
        { id: 1, name: 'Producto 1', price: '$10', imageUrl: 'imagen1.jpg' },
        { id: 2, name: 'Producto 2', price: '$20', imageUrl: 'imagen2.jpg' },
        { id: 3, name: 'Producto 3', price: '$15', imageUrl: 'imagen3.jpg' },
        { id: 4, name: 'Producto 4', price: '$15', imageUrl: 'imagen4.jpg' },
        { id: 5, name: 'Producto 5', price: '$15', imageUrl: 'imagen5.jpg' },
        { id: 6, name: 'Producto 6', price: '$15', imageUrl: 'imagen6.jpg' },
        { id: 7, name: 'Producto 7', price: '$15', imageUrl: 'imagen7.jpg' },
        { id: 8, name: 'Producto 8', price: '$15', imageUrl: 'imagen8.jpg' },
        { id: 9, name: 'Producto 9', price: '$15', imageUrl: 'imagen9.jpg' },
        { id: 10, name: 'Producto 10', price: '$15', imageUrl: 'imagen10.jpg' },
];

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };
    const handleCloseLoginForm = () => {
        setShowLoginForm(false);
    };

    const handleRegisterClick = () => {
        setShowRegisterForm(true);
    };
    const handleCloseRegisterForm = () => {
        setShowRegisterForm(false);
    };
    return (
        <div className="App">
            <NavBar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick}/>
            {showLoginForm && <Login onClose={handleCloseLoginForm}/>}
            {showRegisterForm && <Register onClose={handleCloseRegisterForm}/>}
            <div className="product-list">
                {products.map(product => (
                    <Product
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        imageUrl={product.imageUrl}
                    />))}</div>
        </div>
    );

}

export default App;


