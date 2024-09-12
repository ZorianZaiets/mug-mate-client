import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import './NavBar.css'

import shop_bag_img_white from '../../img/shop_bag_white.png'
import shop_bag_img_black from '../../img/shop_bag_black.png'
import MobileNavModal from "../mobileNav/MobileNavModal";
import CurrencySelector from "../CurrencySelector/CurrencySelector";

import mugmate_logo from '../../img/mugmate_logo.png'


const NavBar = ({toggleCart, cart, formattedAmount, onCurrencyChange, currencyChar, currency}) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };


    return (
        <div className="nav-bar">

            {isNavOpen && <MobileNavModal toggleNav={toggleNav} onCurrencyChange={onCurrencyChange} currency={currency}/>}

            <div className="container">
                <div className="nav__row">
                    <Link to='/' className="nav__logo">MugMate</Link>
                    <div className="header__nav">
                        <ul className="nav__list">
                            <li><Link to='/shop' className='nav__link'>Shop</Link></li>
                            <li><Link to='/about' className='nav__link'>About</Link></li>
                            <li><Link to="/contact" className='nav__link'>Contact Us</Link></li>
                        </ul>

                        {cart.length === 0 ? (
                            <button className='empty-cart-button'>
                                <img src={shop_bag_img_black} alt="cart" onClick={toggleCart}/>
                            </button>
                        ) : (
                            <button className="nav-cart-button" onClick={toggleCart}>
                                <img src={shop_bag_img_white} alt="cart"/>
                                <p>{currencyChar}{formattedAmount}</p>
                            </button>
                        )}

                        <CurrencySelector onCurrencyChange={onCurrencyChange}/>
                    </div>
                </div>
                <div className="mobile-nav">
                    <button className="nav-button" onClick={toggleNav}>
                        <div className="nav-button-line"></div>
                        <div className="nav-button-line"></div>
                        <div className="nav-button-line"></div>
                    </button>

                    <Link to='/' className="nav__logo">MugMate</Link>

                    <button className="mobile-cart-button" onClick={toggleCart}>
                        <img src={shop_bag_img_black} alt="cart" className="mobile-cart-img"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;