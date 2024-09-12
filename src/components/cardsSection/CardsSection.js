import {React} from 'react';
import OrderCard from '../orderCard/OrderCard';
import './CardsSection.css';
import {Link} from "react-router-dom";
import HomeMobileSlider from "../HomeMobileSlider/HomeMobileSlider";

const CardsSection = ({ addToCart , products, currencyChar, convertPrice})=> {

        return (
            <div className="order" id="order">
                <div className="container">
                    <section className="order__section">
                        <h2 className='order-section-heading'>Discover new collection!</h2>
                        <p className="order__section_description">We are presenting our innovative cupholder available
                            in four distinct materials:
                            the natural elegance of wood, the sleek modernity of aluminium, the practicality of plastic,
                            and a unique blend of wood with aluminium. Each material offers a perfect balance of style
                            and function
                            to suit your needs.</p>
                        <div className="cards__row">
                            {products.map((product) => (
                                <OrderCard key={product.id} product={product} addToCart={addToCart} currencyChar={currencyChar} convertPrice={convertPrice}/>
                            ))}
                        </div>

                        {/*<HomeMobileSlider  products={products}/>*/}

                        <Link to="/shop" className='go-shop-link'>Go Shop</Link>
                    </section>
                </div>
            </div>
        );
};

export default CardsSection;