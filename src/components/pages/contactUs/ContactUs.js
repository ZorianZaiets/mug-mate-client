import React, {useState, useRef} from 'react';
import './ContactUs.css'
import contact_us_image from '../../../img/contact_page_img.jpg'
import instagram from "../../../img/instagram.png";
import facebook from "../../../img/facebook.png";
import twitter from "../../../img/twitter.png";
import youtube from "../../../img/youtube.png";
import tiktok from "../../../img/tiktok.png";

function ContactUs(props) {
    const [message, setMessage] = useState('');

    const [areaNonEmpty, setAreaNonEmpty] = useState(null);
    // Обработчик изменения текста
    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    // Обработчик потери фокуса
    const handleBlur = () => {
        // Если поле не пустое, верните фокус обратно
        if (message.trim() !== '') {
            setAreaNonEmpty(true);
        }else{
            setAreaNonEmpty(false);
        }
    };
    return (
        <div className="contact-us">
            <div className="container">
                <div className="contact-us-container">
                    <h1 className="contact-us-title">Contact Us</h1>
                    <div className="contact-us-row">
                        <aside className="contact-us-description">
                            <h3 className="contact-description-title">Please let us know how we can help you.</h3>
                            <img src={contact_us_image} alt=""/>
                            <p>If you would like to contact us for any reason, including questions regarding any product
                                that we
                                sell, email us using our feedback form below.</p>

                            <p>Once you have entered your question/s or comment/s in the fields provided just click the
                                "Send"
                                button. The more details you include the better we will be able to answer your
                                questions.</p>
                            <h3 className="contact-description-title">Mailing Address</h3>
                            <p>
                                Send all inquiries to:<br/>

                                Herasyma Kondratieva 154<br/>
                                Sumy, Sumska obl. <br/>
                                40021 <br/>
                                UKRAINE
                            </p>
                            <h3 className="contact-description-title">Customer Contacts</h3>
                            <p><strong>Phone:</strong> +380686205763</p>
                            <p><strong>Email:</strong> bravisabright@gmail.com</p>
                        </aside>
                        <section className="contact-form-container">
                            <h3 className="contact-us-form-title">CONTACT US</h3>
                            <form action="" className="contact-form">
                                <input type="text" className="contact-input" placeholder="Enter your name:"/>
                                <input type="email" className="contact-input" placeholder="Enter your email:"/>
                                <textarea name="" id="" cols="30" rows="10"
                                          className={`contact-message-input ${areaNonEmpty && "area-non-empty"}`}
                                          placeholder="Enter your message:" value={message}
                                          onChange={handleChange}
                                          onBlur={handleBlur}></textarea>
                                <button className="send-message-button">Send</button>
                            </form>
                            <h3 className="contact-us-form-title">FOLLOW US</h3>
                            <div className="contact-media-icons-row">
                                <a href=""><img src={instagram} alt=""/></a>
                                <a href=""><img src={facebook} alt=""/></a>
                                <a href=""><img src={twitter} alt=""/></a>
                                <a href=""><img src={youtube} alt=""/></a>
                                <a href=""><img src={tiktok} alt=""/></a>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactUs;