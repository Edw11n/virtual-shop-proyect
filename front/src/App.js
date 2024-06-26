import React, {useState} from'react';
import NavBar from './components/NavBar/NavBar.js';
import Login from './components/Login/Login.js';
import { UserProvider } from './UserContext';
import Account from './components/Account/Account.js';
import Register from './components/Register/Register.js';
import Product from './components/Product/Product.js';
import ShoppingCart from './components/ShoppingCart/ShoppingCart.js';
import './App.css';
import img1 from './assets/images/img1.png';
import img2 from './assets/images/img2.png';
import img3 from './assets/images/img3.png';
import img4 from './assets/images/img4.png';
import img5 from './assets/images/img5.png';
import img6 from './assets/images/img6.png';
import img7 from './assets/images/img7.png';
import img8 from './assets/images/img8.png';
import img9 from './assets/images/img9.png';
function App() {
    //controla la visibilidad del formulario de iniciar sesión
    const [showLoginForm, setShowLoginForm] = useState(false);
    //controla la visibilidad del formulario de registro
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    //controla la visibilidad del carrito de compras
    const [showShoppingCart, setShowShoppingCart] = useState(false);
    //controla y muestra los productos en el carrito de compras
    const [cartItems, setCartItems] = useState([]);
    //controla la visibilidad de la informacion del usuario
    const [showAccount, setShowAccount] = useState(false);

    //listado de productos de la tienda
    const products = [ 
        { id: 1, name: 'Llavero Escoba', price: '$10.000', image: img1},
        { id: 2, name: 'Llavero Triangular', price: '$12.000', image: img2},
        { id: 3, name: 'Llavero Tortuga', price: '$15.000', image: img3},
        { id: 4, name: 'Llavero Cruz', price: '$15.000', image: img4},
        { id: 5, name: 'Manilla Sencilla', price: '$8.000', image: img5},
        { id: 6, name: 'Manilla Doble', price: '$10.000', image: img6},
        { id: 7, name: 'Manilla Triple', price: '$12.000', image: img7},
        { id: 8, name: 'Manilla de Chaquiras', price: '$20.000', image: img8},
        { id: 9, name: 'Collar', price: '$25.000', image: img9},
];
    //funcion para mostrar el formulario de inicio de sesion
    const handleLoginClick = () => {
        setShowLoginForm(true);
    };
    //funcion para ocultar el formulario de inicio de sesion
    const handleCloseLoginForm = () => {
        setShowLoginForm(false);
    };

    //funcion para mostrar el formulario de registro
    const handleRegisterClick = () => {
        setShowRegisterForm(true);
    };
    //funcion para ocultar el formulario de registro
    const handleCloseRegisterForm = () => {
        setShowRegisterForm(false);
    };

    //funcion para mostrar el carrito de compras
    const handleToggleShoppingCart = () => {
        setShowShoppingCart(true);
    };
    //funcion para ocultar el carrito de compras
    const handleCloseShoppingCart = () => {
        setShowShoppingCart(false);
    };

    //funcion para añadir productos al carrito de compras
    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    //funcion para eliminar productos del carrito de compras
    const handleRemoveFromCart = (index) => {
        const newCartItems = cartItems.filter((item, i) => i !== index);
        setCartItems(newCartItems);
    };

    //funcion para mostrar la informacion de la cuenta del usuario
    const handleShowAccount = () => {
        setShowAccount(true);
    };
    //funcion para ocultar la informacion de la cuenta del usuario
    const handleCloseAccount = () => {
        setShowAccount(false);
    };
    return (
        <UserProvider>
        <div className="App">
            <NavBar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} toggleCart={handleToggleShoppingCart} showAccount={handleShowAccount}/>
            {showLoginForm && <Login onClose={handleCloseLoginForm}/>}
            {showRegisterForm && <Register onClose={handleCloseRegisterForm}/>}
            {showShoppingCart && <ShoppingCart onClose={handleCloseShoppingCart} cartItems={cartItems} removeItems={handleRemoveFromCart}/>}
            {showAccount && <Account onClose={handleCloseAccount} />}
            <div className="product-list">
                {products.map(product => (
                    <Product
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        addToCart={() => handleAddToCart(product)}
                    />))}</div>
        </div>
        </UserProvider>
    );

}

export default App;


