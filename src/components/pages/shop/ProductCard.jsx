import React from 'react';
import './ProductCard.css'
import {Link} from "react-router-dom";

function ProductCard({product, addToCart, convertPrice, currencyChar}) {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <Link to={`/product/${product.id}`}><img src={product.photos[0]} alt=""/></Link>
            </div>
            <div className="product-description-container">
                <div className="product-heading-row">
                    <Link to={`/product/${product.id}`} className='product-heading'>{product.title}</Link>
                    <p className='product-price'><span
                        className='from'>From</span> {currencyChar}{convertPrice(product.price)}</p>
                </div>
                <div className="product-description">
                    <p>{product.description_eng}</p>
                </div>
                <div className="add-button-container">
                    <button className="add-button" onClick={() => addToCart(product)}>+ ADD</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;