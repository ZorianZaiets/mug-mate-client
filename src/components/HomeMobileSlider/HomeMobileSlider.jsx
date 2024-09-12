import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OrderCard from "../orderCard/OrderCard";
import './HomeMobileSlider.css'

function HomeMobileSlider({products}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true

    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slider-card">
                    {products.map((product) => (
                        <OrderCard key={product.id} product={product}/>
                    ))}
                </div>
            </Slider>
        </div>
    );
}

export default HomeMobileSlider;
