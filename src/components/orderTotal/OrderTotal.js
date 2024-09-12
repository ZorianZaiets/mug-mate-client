import './OrderTotal.css'

import React from 'react';

function OrderTotal({cart, convertPrice, currencyChar, totalAmount, deliveryPrice, formattedAmount, setSumToPay}) {

    let total_sum = parseFloat(totalAmount) + parseFloat(convertPrice(deliveryPrice));

    setSumToPay(total_sum);

    const formattedTotalSum = total_sum.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return (
        <div className='order-total'>
            {cart.length === 0 ? (
                <div className='empty-cart'>
                    <p>Your cart is currently empty.</p>
                </div>
            ) : (
                <div className='order-cart-container'>
                    <h2 className="order-summary-title">Order summary</h2>

                    <ul className='order-cart'>
                        {cart.map((item, index) => (
                            <li key={index}
                                className='order-cart-item-row'>
                                <div className="order-item-row-left">
                                    <img src={item.img} alt="" className='order-cart-item-image'/>
                                    <h3 className='item-title'>{item.title}</h3>
                                </div>

                                <div className="order-item-row-right">
                                    <p className='item-price'>{currencyChar}{convertPrice(item.price)}</p>
                                    <p>x</p>
                                    <p className='item-quantity'>{item.quantity}</p>
                                </div>

                            </li>
                        ))}
                    </ul>

                    <hr className='form-split-line'/>
                    <div className="subtotal-row">Subtotal
                        <div>{currencyChar}{formattedAmount}</div>
                    </div>
                    <div className="shipping-row">
                        <p className="shipping-title">Shipping</p>
                        <p className="shipping-price">{currencyChar}{convertPrice(deliveryPrice)}</p>
                    </div>
                    <div className="total-row">
                        <p className="order-total-title">Total</p>
                        <p className="order-total-sum">{currencyChar}{formattedTotalSum}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OrderTotal;