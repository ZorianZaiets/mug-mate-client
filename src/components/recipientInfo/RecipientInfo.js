import {React, useState} from 'react';
import './RecipientInfo.css'
function RecipientInfo({handleChangeInput, formData}) {

    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        const regex = /^[0-9\s\+\-\(\)]+$/;

        // Проверяем, соответствует ли значение регулярному выражению
        if (regex.test(value) || value === '') {
            setPhone(value);
            setError(''); // Сбрасываем ошибку
        } else {
            setError('Неверный формат номера телефона'); // Устанавливаем ошибку
        }
    }

    return (
        <div className="recipient-info-container">
            <h1 className="recipient-info-title">Recipient Information</h1>
            <div className="recipient-info-row">
                <input type="text" name="name" className="recipient-info-row-input" placeholder="Name" value={formData.name} onChange={handleChangeInput}/>
                <input type="text" name="surname" className="recipient-info-row-input" placeholder="Surname" value={formData.surname} onChange={handleChangeInput}/>
            </div>
            <input type="email" name="email" autoComplete="email" className="recipient-info-input"
                   placeholder="Email" value={formData.email} onChange={handleChangeInput}/>
            <input type="text" name="company" className="recipient-info-input"
                   placeholder="Company (optional)" value={formData.company} onChange={handleChangeInput}/>
            <input type="text" name="address" autoComplete="address-line1"
                   className="recipient-info-input"
                   placeholder="Address" value={formData.address} onChange={handleChangeInput}/>
            <div className="recipient-info-row">
                <input type="text" className="recipient-info-row-input" name="city" placeholder="City" value={formData.city} onChange={handleChangeInput}/>
                <input type="text" className="recipient-info-row-input" placeholder="Postal code" name="postcode" value={formData.postcode} onChange={handleChangeInput}/>
            </div>
            <input type="tel" name="phone" autoComplete="tel"  className="recipient-info-input"
                   placeholder="Phone Number" value={phone} onChange={handleChange}/>
        </div>
    );
}

export default RecipientInfo;