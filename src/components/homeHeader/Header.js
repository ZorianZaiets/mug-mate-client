import React from 'react';
import './Header.css'; // подключаем файл стилей
import header_img from '../../img/header_img.jpg'
import {Link} from "react-router-dom";

const Header = ({scrollToOrder}) => {
    return (
        <header className="header">
            <div className="container">
                <aside className="presenting__about">
                    <span className='presenting__title'>Brand New:</span>
                    <span className='presenting__title'>MugMate</span>
                    <p className="presenting__slogan">
                        The best cup holder for you!
                    </p>
                    <Link to='/shop' className="order__button">ORDER NOW</Link>
                </aside>
            </div>
        </header>
    );
};

export default Header;
