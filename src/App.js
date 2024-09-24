import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../src/components/pages/Home'
import Order from "./components/pages/Order";
import CartModal from "./components/cartModal/CartModal";
import Shop from './components/pages/shop/Shop'
import React, {useEffect, useState} from "react";
import Footer from "./components/footer/Footer";
import About from './components/pages/aboutPage/About'
import ContactUs from "./components/pages/contactUs/ContactUs";
import ProductPage from "./components/pages/shop/productPage/ProductPage";

import {products} from './products'

function App() {




    //CURRENCY CHANGE LOGIC
    const [currency, setCurrency] = useState('USD');
    const [currencyChar, setCurrencyChar] = useState('$');


    const currencyChars = {
        USD: '$',
        EUR: '€',
        UAH: '₴'
    }

    const currencyRates = {
        USD: 1,
        EUR: 0.85,
        UAH: 41.00
    };

    const handleCurrencyChange = (selectedCurrency) => {
        setCurrencyChar(currencyChars[selectedCurrency]);
        setCurrency(selectedCurrency);
    };

    const convertPrice = (price) => {
        return (price * currencyRates[currency]).toFixed(2);
    };

    // SHOPPING CART LOGIC
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);


    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };


    const updateQuantity = (id, quantity) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === id ? {...item, quantity: Math.max(1, quantity)} : item
            )
        );
    };


    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };


    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                );
            } else {
                return [...prevCart, {...product, quantity: 1}];
            }
        });
    };


    useEffect(() => {
        if (isCartOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isCartOpen]);


    // Загрузка состояния корзины из localStorage при монтировании компонента
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        console.log('Loaded cart from localStorage:', savedCart);
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }

    }, []);


    // Сохранение состояния корзины в localStorage при изменении корзины
    useEffect(() => {
        console.log('Saving cart to localStorage:', cart); // Лог для проверки
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


    // Функция для подсчета общей суммы
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => {
            const price = parseFloat(convertPrice(item.price));
            return total + price * item.quantity;
        }, 0); // Округляем до двух знаков после запятой
    };


    let totalAmount = calculateTotalPrice();

    const formattedAmount = totalAmount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });


    return (

        <Router>

            <Routes>
                <Route path="/"
                       element={<Home cart={cart} products={products} currencyChar={currencyChar}
                                      convertPrice={convertPrice} formattedAmount={formattedAmount}
                                      toggleCart={toggleCart} currency={currency}
                                      onCurrencyChange={handleCurrencyChange}/>}/>
                <Route path="/shop"
                       element={<Shop cart={cart} addToCart={addToCart} products={products} convertPrice={convertPrice}
                                      currencyChar={currencyChar} currency={currency} formattedAmount={formattedAmount}
                                      onCurrencyChange={handleCurrencyChange} toggleCart={toggleCart}/>}/>

                <Route path="/order" element={<Order currencyChar={currencyChar} convertPrice={convertPrice} cart={cart}
                                                     totalAmount={totalAmount} formattedAmount={formattedAmount}
                                                     currency={currency} setCart={setCart}/> }/>

                <Route path="/about"
                       element={<About toggleCart={toggleCart} cart={cart} formattedAmount={formattedAmount}
                                       onCurrencyChange={handleCurrencyChange} currencyChar={currencyChar}
                                       currency={currency}/>}/>
                <Route path="/contact"
                       element={<ContactUs toggleCart={toggleCart} cart={cart} formattedAmount={formattedAmount}
                                           onCurrencyChange={handleCurrencyChange} currencyChar={currencyChar}
                                           currency={currency}/>}/>
                <Route path="/product/:id" element={<ProductPage products = {products} toggleCart={toggleCart} cart={cart} formattedAmount={formattedAmount}
                                                                 onCurrencyChange={handleCurrencyChange} currencyChar={currencyChar}
                                                                 currency={currency} convertPrice={convertPrice} addToCart={addToCart}/>} />
            </Routes>
            {isCartOpen && <CartModal cart={cart} toggleCart={toggleCart}
                                      removeFromCart={removeFromCart} updateQuantity={updateQuantity}
                                      formattedAmount={formattedAmount} currencyChar={currencyChar}
                                      convertPrice={convertPrice}/>}
            <Footer/>
        </Router>
    );
}

export default App;
