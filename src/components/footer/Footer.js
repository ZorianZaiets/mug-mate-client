import React from 'react';
import './Footer.css';
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";
import youtube from "../../img/youtube.png";
import tiktok from "../../img/tiktok.png"; // подключаем файл стилей

const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer-content">
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#terms">Terms of Service</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-bottom">
                    <p className='all-rights'>&copy; 2024 MugMate. All rights reserved.</p>
                    <div className="media-icons-row">
                        <a href=""><img src={instagram} alt=""/></a>
                        <a href=""><img src={facebook} alt=""/></a>
                        <a href=""><img src={twitter} alt=""/></a>
                        <a href=""><img src={youtube} alt=""/></a>
                        <a href=""><img src={tiktok} alt=""/></a>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
