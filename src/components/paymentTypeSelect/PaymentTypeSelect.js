import React from 'react';
import './PaymentTypeSelect.css'

function PaymentTypeSelect({setPaymentType, paymentType}) {

    const handleChange = (e) => {
        setPaymentType(e.target.value);
    }


    return (

        <div className="payment-type">
            <h2 className="payment-type-title">Payment</h2>
            <div className={`pay-now-row ${paymentType === "payNow" ? "pay-now-active" : ""}`}>
                <input type="radio" id="payNow" name="payment" value="payNow" checked={paymentType === "payNow"} onChange={handleChange}/>
                <label htmlFor="payNow">Pay Now</label>
            </div>
            <div className={`pay-after-row ${paymentType === "payAfter" ? "pay-after-active" : ""}`}>
                <input type="radio" id="payAfter" name="payment" value="payAfter" checked={paymentType === "payAfter"} onChange={handleChange}/>
                <label htmlFor="payAfter">Pay On Post</label>
            </div>
        </div>

    );
}

export default PaymentTypeSelect;