import React from 'react';
import './OrderCard.css'

const OrderCard = ({product, addToCart, currencyChar, convertPrice }) => {
    return (
        <div className="order-card">
            <div className="card-item">
                <img src={product.img} alt={product.title} className="card-item-img"/>
                <div className="card-item-bottom">
                    <h3 className="card-item-title">{product.title}</h3>
                    <div className="card-item-price-block">
                        <p className='from'>From</p>
                        <p className="card-item-price">{currencyChar}{convertPrice(product.price)}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default OrderCard;