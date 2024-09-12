import React from 'react';
import './CartModal.css'
import {Link} from "react-router-dom";
import white_cross from '../../img/white-cross.png'
import remove_cart from '../../img/remove-cart.png'

function CartModal({cart, toggleCart, removeFromCart, updateQuantity, formattedAmount, currencyChar, convertPrice}) {
    console.log('Cart data:', cart); // Лог для проверки


    return (
        <div className="cart-modal">
            <button className="close-modal" onClick={toggleCart}><img src={white_cross} alt=""/></button>

            {cart.length === 0 ? (
                <div className='empty-cart'>
                    <p>Your cart is currently empty. <button onClick={toggleCart} className="click-here-button">Click
                        here</button> to continue shopping.
                    </p>
                </div>
            ) : (
                <div className="modal-content-wrap">
                    <div className="modal-content">

                        <ul>
                            {cart.map((item, index) => (
                                <li key={index} className="cart-item-row">
                                    <div className="splitter"></div>
                                    <div className="item-left-side">
                                        <div className="cart-image-container">
                                            <img src={item.img} alt="" className='cart-item-image'/>
                                        </div>
                                        <h2 className='cart-item-title'>{item.title}</h2>
                                    </div>
                                    <div className="item-right-side-wrap">
                                        <div className="item-right-side">
                                            <p className='cart-item-price'>{currencyChar}{convertPrice(item.price) }</p>
                                            <div className="quantity-control">
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="plus-minus-button">-
                                                </button>
                                                <div className="cart-item-quantity"><p>{item.quantity}</p></div>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="plus-minus-button">+
                                                </button>
                                            </div>
                                            <button onClick={() => removeFromCart(item.id)}
                                                    className='remove-item-button'><img src={remove_cart} alt="remove"/>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="cart-total">
                        <h3>Total price: {currencyChar}{formattedAmount}</h3>
                        <div className="cart-buttons-section">
                            <button className="continue-cart-button" onClick={toggleCart}>Continue Shopping
                            </button>
                            <Link to="/order" className="checkout-cart-button" onClick={toggleCart}>Checkout</Link>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default CartModal;