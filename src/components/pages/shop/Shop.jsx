import React from 'react';
import './Shop.css'
import ProductCard from "./ProductCard";
import NavBar from "../../navBar/NavBar";

function Shop({toggleCart, cart, addToCart, products, convertPrice, currencyChar, currency, onCurrencyChange, formattedAmount}) {
    return (
        <div>
            <NavBar toggleCart={toggleCart} cart={cart} formattedAmount={formattedAmount}
                    onCurrencyChange={onCurrencyChange} currencyChar={currencyChar} currency={currency}/>
            <div className="shop">
                <div className="container">
                    <h2 className="products-heading">Shop</h2>
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