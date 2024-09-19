import React from 'react';
import './OrderCard.css'
import {Link} from "react-router-dom";

const OrderCard = ({product, addToCart, currencyChar, convertPrice }) => {
    return (
        <div className="order-card">
            <div className="card-item">
                <Link to={`/product/${product.id}`}><img src={product.img} alt={product.title}
                                                         className="card-item-img"/></Link>
                <div className="card-item-bottom">
                    <Link to={`/product/${product.id}`}  className="card-item-title"><h3>{product.title}</h3></Link>
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