import React from 'react';
import OrderForm from "../orderForm/OrderForm";
import NavBar from "../navBar/NavBar";

const Order = ({cart, currencyChar, convertPrice, totalAmount, formattedAmount, currency}) =>{

    return (
        <div>
            <OrderForm cart={cart} currencyChar={currencyChar} convertPrice={convertPrice} totalAmount={totalAmount}  formattedAmount={formattedAmount} currency={currency}/>
        </div>
    );
}

export default Order;