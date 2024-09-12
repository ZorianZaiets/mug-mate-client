import React, {Component} from 'react';
import advantages_img from '../../img/advantages_img.jpg';
import './Advantages.css';
import modern_icon from '../../img/modern-icon.png';
import energy_icon from '../../img/energy-icon.png';
import eazy_icon from '../../img/eazy-icon.png';
import led_icon from '../../img/led-icon.png';

class Advantages extends Component {
    render() {
        return (
            <div className="advantages">
                <div className="container">
                    <div className="advantages__box">
                        <img src={advantages_img} alt="cupholder2" className="advantages__img" rel="preload"/>
                        <article className="advantages__benefits">
                            <h2>Key Benefits:</h2>
                            <div className="benefits__box">
                                <div className="benefit">
                                    <img src={energy_icon} alt=""/>
                                    <p>Energy saving.</p>
                                </div>
                                <div className="benefit">
                                    <img src={modern_icon} alt=""/>
                                    <p>Modern design.</p>
                                </div>
                                <div className="benefit">
                                    <img src={eazy_icon} alt=""/>
                                    <p>Easy to use.</p>
                                </div>
                                <div className="benefit">
                                    <img src={led_icon} alt=""/>
                                    <p>Led indication.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default Advantages;