import React from 'react';
import './Shop.css'
import ProductCard from "./ProductCard";

function Shop({toggleCart, cart, addToCart, products, convertPrice, currencyChar}) {
    return (
        <div>
            <div className="shop">
                <div className="container">
                    <h2 className="products-heading">Products</h2>
                    <div className="products-container">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} addToCart={addToCart}
                                         convertPrice={convertPrice} currencyChar={currencyChar}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;