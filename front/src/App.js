import React, {useState} from'react';
import NavBar from './components/NavBar/NavBar.js';
import Login from './components/Login/Login.js';
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
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showShoppingCart, setShowShoppingCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const products = [
        { id: 1, name: 'Llavero Escoba', price: '$10', image: img1},
        { id: 2, name: 'Llavero Triangular', price: '$20', image: img2},
        { id: 3, name: 'Llavero Tortuga', price: '$15', image: img3},
        { id: 4, name: 'Llavero Cruz', price: '$15', image: img4},
        { id: 5, name: 'Manilla Sencilla', price: '$15', image: img5},
        { id: 6, name: 'Manilla Doble', price: '$15', image: img6},
        { id: 7, name: 'Manilla Triple', price: '$15', image: img7},
        { id: 8, name: 'Manilla de Chaquiras', price: '$15', image: img8},
        { id: 9, name: 'Collar', price: '$15', image: img9},
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
    const handleRemoveFromCart = (index) => {
        const newCartItems = cartItems.filter((item, i) => i !== index);
        setCartItems(newCartItems);
    };
    return (
        <div className="App">
            <NavBar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} toggleCart={handleToggleShoppingCart} />
            {showLoginForm && <Login onClose={handleCloseLoginForm}/>}
            {showRegisterForm && <Register onClose={handleCloseRegisterForm}/>}
            {showShoppingCart && <ShoppingCart onClose={handleCloseShoppingCart} cartItems={cartItems} removeItems={handleRemoveFromCart}/>}
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


