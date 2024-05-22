
import './ShoppingCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ShoppingCart ({onClose, cartItems, removeItems}){
    return(
        <div className="shopping-cart" >
            <div className="shopping-cart-content" >
                <h3>Carrito de compras</h3>
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p>No hay productos en el carrito.</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{item.price}</p>
                                </div>
                                    <button className="remove-button" onClick={() => removeItems(index)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <button  className='cancel-buy-button' onClick={onClose} >Cancelar</button>
                <button className='confirm-buy-button' >Comprar</button>
            </div>
        </div>
    );
}
export default ShoppingCart;
    