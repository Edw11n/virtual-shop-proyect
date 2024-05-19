import React from "react";
import './Product.css';

function Product({name, price, image, addToCart}) {
        return (
            <div className="product">
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{price}</p>
                <button className="add-to-cart-button" onClick={addToCart} >Añadir al carrito</button>
            </div>
        );
}
export default Product;