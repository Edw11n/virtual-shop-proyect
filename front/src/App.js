import React, {useState} from'react';
import NavBar from './components/NavBar/NavBar.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Product from './components/Product/Product.js';
import ShoppingCart from './components/ShoppingCart/ShoppingCart.js';
import './App.css';
import img1 from './assets/images/img1.jpg'
import img2 from './assets/images/img2.jpg'
import img3 from './assets/images/img3.jpg'
import img4 from './assets/images/img4.jpg'
import img5 from './assets/images/img5.jpg'
import img6 from './assets/images/img6.jpg'
import img7 from './assets/images/img7.jpg'
import img8 from './assets/images/img8.jpg'
import img9 from './assets/images/img9.jpg'
function App() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showShoppingCart, setShowShoppingCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const products = [
        { id: 1, name: 'Producto 1', price: '$10', image: img1},
        { id: 2, name: 'Producto 2', price: '$20', image: img2},
        { id: 3, name: 'Producto 3', price: '$15', image: img3},
        { id: 4, name: 'Producto 4', price: '$15', image: img4},
        { id: 5, name: 'Producto 5', price: '$15', image: img5},
        { id: 6, name: 'Producto 6', price: '$15', image: img6},
        { id: 7, name: 'Producto 7', price: '$15', image: img7},
        { id: 8, name: 'Producto 8', price: '$15', image: img8},
        { id: 9, name: 'Producto 9', price: '$15', image: img9},
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
    const handleToggleShoppingCart = () => {
        setShowShoppingCart(true);
    };
    const handleCloseShoppingCart = () => {
        setShowShoppingCart(false);
    };
    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    return (
        <div className="App">
            <NavBar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} toggleCart={handleToggleShoppingCart} />
            {showLoginForm && <Login onClose={handleCloseLoginForm}/>}
            {showRegisterForm && <Register onClose={handleCloseRegisterForm}/>}
            {showShoppingCart && <ShoppingCart onClose={handleCloseShoppingCart} cartItems={cartItems} />}
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
    );

}

export default App;


