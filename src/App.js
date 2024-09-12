import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../src/components/pages/Home'
import Order from "./components/pages/Order";
import CartModal from "./components/cartModal/CartModal";
import Shop from './components/pages/shop/Shop'
import React, {useEffect, useState} from "react";
import aluminium_cupholder from "./img/aluminium-cupholder.jpeg";
import wood_cupholder from "./img/wood-cupholder.jpeg";
import plastik_cupholder from "./img/plastik-cupholder.jpeg";
import aluminium_wood_cupholder from "./img/aluminium-wood-cupholder.jpeg";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

function App() {

    const products = [
        {id: 1, title: 'Aluminium Mate', img: aluminium_cupholder, price: '235', route: 'alluminium'},
        {id: 2, title: 'Wood Mate', img: wood_cupholder, price: '185', route: 'wood'},
        {id: 3, title: 'Plastik Mate', img: plastik_cupholder, price: '155', route: 'plastic'},
        {id: 4, title: 'W&A Mate', img: aluminium_wood_cupholder, price: '255', route: 'woodandalluminium'},
    ];


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
            <NavBar toggleCart={toggleCart} cart={cart} formattedAmount={formattedAmount}
                    onCurrencyChange={handleCurrencyChange} currencyChar={currencyChar} currency={currency}/>
            <Routes>
                <Route path="/"
                       element={<Home products={products} currencyChar={currencyChar} convertPrice={convertPrice}/>}/>
                <Route path="/shop" element={<Shop addToCart={addToCart} products={products} convertPrice={convertPrice}
                                                   currencyChar={currencyChar}/>}/>
                <Route path="/order" element={<Order currencyChar={currencyChar} convertPrice={convertPrice} cart={cart}
                                                     totalAmount={totalAmount} formattedAmount={formattedAmount}
                                                     currency={currency}/>}/>
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
