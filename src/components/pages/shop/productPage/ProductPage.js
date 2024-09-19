import {useParams} from 'react-router-dom';
import NavBar from "../../../navBar/NavBar";
import {React, useEffect, useRef, useState} from "react";
import next from '../../../../img/next.png'
import prev from '../../../../img/previous.png'

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ProductPage.css'

const ProductPage = ({
                         products,
                         formattedAmount,
                         currencyChar,
                         currency,
                         onCurrencyChange,
                         cart,
                         toggleCart,
                         convertPrice, addToCart
                     }) => {
    const {id} = useParams();
    const product = products.find((product) => product.id === Number(id));

    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 800);

    // Обработчик изменения размера экрана
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 800);
        };

        window.addEventListener('resize', handleResize);
        // Удаление обработчика при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const swiperRef = useRef(null); // Реф для доступа к Swiper
    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.navigation.init(); // Инициализация навигации
            swiperRef.current.swiper.navigation.update(); // Обновление состояния кнопок навигации
        }
    }, []);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex); // Получаем текущий индекс слайда

    };

    const handleButtonClick = (index) => {
        setActiveIndex(index);
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index); // Переключаемся на нужный слайд
        }
    }


    return (
        <div>
            <NavBar toggleCart={toggleCart} cart={cart} formattedAmount={formattedAmount}
                    onCurrencyChange={onCurrencyChange} currencyChar={currencyChar} currency={currency}/>
            <div className="product-page">
                <div className="product-page-main">
                    <div className="product-page-main-container">
                        <div className="product-page-images">
                            <div className="swiper-container">
                                <Swiper
                                    ref={swiperRef}
                                    navigation={isMobileView ? false : { // Включаем навигацию только на десктопе
                                        nextEl: '.custom-next',
                                        prevEl: '.custom-prev',
                                    }}
                                    spaceBetween={30}
                                    pagination={isMobileView ? { clickable: true, dynamicBullets: true, } : false} // Кастомная пагинация
                                    modules={[Pagination, Navigation]}
                                    centeredSlides={true}  // Центрирование слайдов
                                    onSlideChangeTransitionStart={handleSlideChange}
                                >
                                    {product.photos.map((photo, i) => (
                                        <SwiperSlide key={i}><img src={photo} alt=""
                                                                  className="product-page-product-image"/></SwiperSlide>
                                    ))}
                                </Swiper>
                                {/* Кастомная пагинация */}
                                {isMobileView && <div className="custom-pagination">
                                    {product.photos.map((photo, i) => (
                                        <div key={i} className={`custom-pagination-bullet ${i === activeIndex && "active-bullet"}`}></div>
                                    ))}
                                </div>}

                                <button className="custom-prev custom-control">
                                    <img src={prev} alt="" className="custom-control-image"/>
                                </button>
                                <button className="custom-next custom-control">
                                    <img src={next} alt="" className="custom-control-image"/>
                                </button>
                            </div>
                            {!isMobileView && <div className="product-images-buttons-row">
                                {product.photos.map((photo, i) => (
                                    <button key={i} className={`test-slide ${i === activeIndex ? 'active' : ''}`}
                                            onClick={() => handleButtonClick(i)}>
                                        <img src={photo} alt=""/>
                                    </button>
                                ))}
                            </div>}

                        </div>
                        <div className="product-page-info-box">
                            <div className="product-page-info-container">
                                {product ? (
                                    <>
                                        <h1 className="product-page-prod-title">{product.title}</h1>
                                        <p className='product-page-prod-description'>{product.description_eng}</p>
                                        <p className='product-page-prod-price'>{currencyChar}{convertPrice(product.price)}</p>
                                        <div className="product-page-buttons-container">
                                            <button className="add-to-cart-secondary-button" onClick={() => addToCart(product)}>Add to cart</button>
                                        </div>
                                    </>
                                ) : (
                                    <p>Product not found</p>
                                )}
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default ProductPage;