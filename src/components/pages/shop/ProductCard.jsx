import React from 'react';
import './ProductCard.css'
import {Link} from "react-router-dom";

function ProductCard({product, addToCart, convertPrice,currencyChar}) {
    let productLink = product.route;
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.img} alt=""/>
            </div>
            <div className="product-description-container">
                <div className="product-heading-row">
                    <Link to={`/${productLink}`} className='product-heading'>{product.title}</Link>
                    <p className='product-price'> <span className='from'>From</span> {currencyChar}{convertPrice(product.price)}</p>
                </div>
                <div className="product-description">
                    <p>This style has a rusted embossed hand painted pattern all over the metal head and the body. It gives the old rusty look we wanted to imprint from the old tractor lights. We added a star on the chest and stripes on the head to resemble old military vehicles. To achieve the rusted effect we hand paint each of them and use a combination of 8 different colors to have the perfect “rusty” look.</p>
                </div>
                <div className="add-button-container">
                    <button className="add-button" onClick={() => addToCart(product)}>+ ADD</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;