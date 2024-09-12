import './OrderConfirmaton.css'

import React from 'react';
import PayButton from "../payButton/PayButton";

function OrderConfirmation({toggleConfirmation, paymentType, formData, sumToPay, currency }) {
    return (

        <div className="order-confirmation-container">
            <h2 className="order-confirmation-title">Review and Pay</h2>
            <div className="recipient-confirmation">
                <div className="confirmation-info-row">
                    <div>
                        <p className="confirmation-info-label">Email</p>
                        <p className="confirmation-email">{formData.email}</p>
                    </div>

                    <button className="change-button" onClick={toggleConfirmation}>Change</button>
                </div>

                <div className="confirmation-info-row">
                    <div>
                        <p className="confirmation-info-label">Recipient</p>
                        <p>{formData.name} {formData.surname}</p>
                    </div>

                    <button className="change-button" onClick={toggleConfirmation}>Change</button>
                </div>

                <div className="confirmation-info-row">
                    <div>
                        <p className="confirmation-info-label">Phone</p>
                        <p>{formData.phone}</p>
                    </div>


                    <button className="change-button" onClick={toggleConfirmation}>Change</button>
                </div>

                <div className="confirmation-info-row">
                    <div>
                        <p className='confirmation-info-label'>Address</p>
                        <p>{formData.city}, {formData.address}, {formData.postcode}</p>
                    </div>

                    <button className="change-button" onClick={toggleConfirmation}>Change</button>
                </div>

            </div>

            {paymentType === "payNow" ? (
                    <PayButton sumToPay={sumToPay} currency={currency}/>
                ) : (
                    <button className="make-order-button" onClick={toggleConfirmation}>Make Order</button>
                )}

        </div>

    );
}

export default OrderConfirmation;