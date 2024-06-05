import React from "react";
import './Product.css';

function Product({name, price, image, addToCart}) {
        return (
            <div className="product">
                {/* imagen del producto */}
                <img src={image} alt={name} />
                {/* nombre del prodcuto */}
                <h3>{name}</h3>
                {/* precio del producto */}
                <p>{price}</p>
                {/* Boton para agregar el producto al carrito de compras */}
                <button className="add-to-cart-button" onClick={addToCart} >Añadir al carrito</button>
            </div>
        );
}
export default Product;