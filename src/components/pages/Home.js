import React, {useRef} from 'react';
import Header from "../homeHeader/Header";
import AboutProduct from "../aboutProduct/AboutProduct";
import Advantages from "../advantages/Advantages";
import CardsSection from "../cardsSection/CardsSection";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import MugMateInstagram from "../insagramComponent/MugMateInstagram";


const Home = ({toggleCart, cart, products, currencyChar, convertPrice}) => {



    return (
        <div>

            <Header />
            <AboutProduct/>
            <Advantages/>
            <CardsSection   products={products} currencyChar={currencyChar} convertPrice={convertPrice}/>
            <MugMateInstagram/>
        </div>
    );
}

export default Home;