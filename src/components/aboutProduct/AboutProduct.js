import './AboutProduct.css'
import about_product_img from '../../img/about_product_image.jpg'
import React, {Component} from 'react';

class AboutProduct extends Component {
    render() {
        return (
            <div className='about__product'>
                <div className="container">
                    <div className="about__product_box">
                            <article className="about__product_description">
                                <h2>What is MugMate?</h2>
                                <p>Meet MugMate, the revolutionary coaster that ensures your tea or coffee is always at
                                    the
                                    perfect temperature.
                                    With MugMate, you will never have to guess when your drink is ready to enjoy.
                                    Our innovative product signals when your beverage has cooled down to a comfortable
                                    drinking temperature,
                                    making every sip enjoyable.</p>
                            </article>
                        <img src={about_product_img} alt="cupholder-1" className="cupholder-img" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutProduct;