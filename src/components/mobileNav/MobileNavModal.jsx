import React, {useState} from 'react';
import './MobileNavModal.css'
import {Link} from "react-router-dom";
import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'
import twitter from '../../img/twitter.png'
import youtube from '../../img/youtube.png'
import tiktok from '../../img/tiktok.png'
import CurrencySelector from "../CurrencySelector/CurrencySelector";

function MobileNavModal({toggleNav, onCurrencyChange, currency}) {


    const [mobileCurrency, setMobileCurrency] = useState(currency);

    const handleChange = (e) => {
        setMobileCurrency(e.target.value);
        onCurrencyChange(e.target.value);
    };
    return (
        <div className="mobile-nav-modal">
            <div className="container">
                <ul className="mobile-nav-list">
                    <li><Link to="/shop" className='mobile-nav-link' onClick={toggleNav}>Shop</Link></li>
                    <li><Link to='/about' className='mobile-nav-link' onClick={toggleNav}>About MugMate</Link></li>
                    <li><Link to="/contact" className='mobile-nav-link' onClick={toggleNav}>Contact Us</Link></li>
                </ul>
                <div className="currency-container">
                    <p>Select currency:</p>
                    <select value={mobileCurrency}  onChange={handleChange} className="mobile-currency-change" >
                        <option value="USD">USD $</option>
                        <option value="EUR">EUR €</option>
                        <option value="UAH">UAH ₴</option>
                    </select>
                </div>

                <div className="mobile-social">
                    <p className="social-title">SOCIAL MEDIA:</p>
                    <div className="social-icons-row">
                        <a href=""><img src={instagram} alt=""/></a>
                        <a href=""><img src={facebook} alt=""/></a>
                        <a href=""><img src={twitter} alt=""/></a>
                        <a href=""><img src={youtube} alt=""/></a>
                        <a href=""><img src={tiktok} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileNavModal;