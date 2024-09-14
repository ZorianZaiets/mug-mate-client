import {React, useState} from 'react';
import './RecipientInfo.css'

function RecipientInfo({formData, setFormData, errors, handleBlur}) {

    const handleChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleChange = (e) => {
        handleChangeInput(e);
        if (e.target.value.trim().length === 0) {
            if (e.target.name === "name") {
                errors[e.target.name] = "Name is required";
            }
            if (e.target.name === "surname") {
                errors[e.target.name] = "Surname is required";
            }
            if (e.target.name === "address") {
                errors[e.target.name] = "Address is required";
            }
            if (e.target.name === "email") {
                errors[e.target.name] = "Email is required";
            }
            if (e.target.name === "city") {
                errors[e.target.name] = "City is required";
            }
            if (e.target.name === "postcode") {
                errors[e.target.name] = "Postcode is required";
            }
            if (e.target.name === "phone") {
                errors[e.target.name] = "Phone number is required";
            }
        } else if (e.target.name === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(e.target.value)) {
                errors[e.target.name] = "Email is not valid";
            } else{
                errors[e.target.name] = "";
            }
        } else {
            errors[e.target.name] = "";
        }
    }


    return (
        <div className="recipient-info-container">
            <h1 className="recipient-info-title">Recipient Information</h1>
            <div className="recipient-info-row">
                <div className="recipient-info-row-container">
                    <input type="text" name="name" className={`recipient-info-row-input ${errors.name && 'error'}`}
                           placeholder="Name" value={formData.name} onChange={handleChange}/>
                    {errors.name && <p style={{color: "red"}} className="error-for-input">{errors.name}</p>}
                </div>

                <div className="recipient-info-row-container">
                    <input type="text" name="surname"
                           className={`recipient-info-row-input ${errors.surname && 'error'}`} placeholder="Surname"
                           value={formData.surname} onChange={handleChange}/>
                    {errors.surname && <p style={{color: "red"}} className="error-for-input">{errors.surname}</p>}
                </div>
            </div>
            <div className="recipient-info-row-container">
                <input type="email" name="email" autoComplete="email"
                       className={`recipient-info-input ${errors.email && 'error'}`}
                       placeholder="Email" value={formData.email} onChange={handleChange}/>
                {errors.email && <p style={{color: "red"}} className="error-for-input">{errors.email}</p>}
            </div>

            <input type="text" name="company" className="recipient-info-input"
                   placeholder="Company (optional)" value={formData.company} onChange={handleChange}/>

            <div className="recipient-info-row-container">
                <input type="text" name="address" autoComplete="address-line1"
                       className={`recipient-info-input ${errors.address && 'error'}`}
                       placeholder="Address" value={formData.address} onChange={handleChange}/>
                {errors.address && <p style={{color: "red"}} className="error-for-input">{errors.address}</p>}
            </div>

            <div className="recipient-info-row">
                <div className="recipient-info-row-container">
                    <input type="text" className={`recipient-info-row-input ${errors.city && 'error'}`} name="city"
                           placeholder="City"
                           value={formData.city} onChange={handleChange}/>
                    {errors.city && <p style={{color: "red"}} className="error-for-input">{errors.city}</p>}
                </div>

                <div className="recipient-info-row-container">
                    <input type="text" className={`recipient-info-row-input ${errors.postcode && 'error'}`}
                           placeholder="Postal code" name="postcode"
                           value={formData.postcode} onChange={handleChange}/>
                    {errors.postcode && <p style={{color: "red"}} className="error-for-input">{errors.postcode}</p>}
                </div>

            </div>

            <div className="recipient-info-row-container">
                <input type="tel" name="phone" autoComplete="tel"
                       className={`recipient-info-input ${errors.phone && 'error'}`}
                       placeholder="Phone Number" value={formData.phone} onChange={handleChange}/>
                {errors.phone && <p style={{color: "red"}} className="error-for-input">{errors.phone}</p>}
            </div>
        </div>
    );
}

export default RecipientInfo;