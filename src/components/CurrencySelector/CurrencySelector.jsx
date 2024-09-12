import './CurrencySelector.css'

import {React, useState} from 'react';

function CurrencySelector({onCurrencyChange}) {

    const [currency, setCurrency] = useState('USD');

    const handleChange = (e) => {
        setCurrency(e.target.value);
        onCurrencyChange(e.target.value);
    };

    return (
        <select value={currency} className="currency-select" onChange={handleChange}>
            <option value="USD">USD $</option>
            <option value="EUR">EUR €</option>
            <option value="UAH">UAH ₴</option>
        </select>
    );
}

export default CurrencySelector;