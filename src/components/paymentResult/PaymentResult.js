import './PaymentResult.css'

import React from 'react';
import {Link} from "react-router-dom";

function PaymentResult({orderId}) {
    return (

            <div className="payment-result-container">
                <div className="payment-result-content">
                    <h2 className="payment-result-title">Thanks, your order has been successfully confirmed!</h2>
                    <div className="payment-result-row">
                        <p>Order ID:</p>
                        <p>{orderId}</p>
                    </div>
                    <Link className="payment-result-link" to={"/"}> Go Home</Link>
                </div>
            </div>
    );
}

export default PaymentResult;