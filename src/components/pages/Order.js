import React from 'react';
import OrderForm from "../orderForm/OrderForm";
import NavBar from "../navBar/NavBar";

const Order = ({cart, currencyChar, convertPrice, totalAmount, formattedAmount, currency, setCart}) => {

    return (
        <div>
            <OrderForm cart={cart} currencyChar={currencyChar} convertPrice={convertPrice} totalAmount={totalAmount}
                       formattedAmount={formattedAmount} currency={currency} setCart={setCart}/>
        </div>
    );
}

export default Order;