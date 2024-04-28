import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://tu-backend.com/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Tienda en línea</h1>
            </header>
            <div className="product-list">
                {products.map(product => (
                    <Product
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
