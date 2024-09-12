import {React, useState, useRef} from 'react';
import './OrderForm.css'
import DeliveryElement from "../deliveryElement/DeliveryElement";
import PaymentTypeSelect from "../paymentTypeSelect/PaymentTypeSelect";
import RecipientInfo from "../recipientInfo/RecipientInfo";
import OrderTotal from "../orderTotal/OrderTotal";
import OrderConfirmation from "../orderConfirmation/OrderConfirmation";


const OrderForm = ({currencyChar, convertPrice, cart, totalAmount, formattedAmount, currency}) => {

    let nova_price = 2.5;
    let ukr_price = 1.1;

    const [paymentType, setPaymentType] = useState('payNow');

    const [postType, setPostType] = useState('ukrPost');

    const [deliveryPrice, setDeliveryPrice] = useState(ukr_price);



    const [sumToPay, setSumToPay] = useState(0);

    const cartItems = cart.map(({title, quantity}) => ({title, quantity}));

    const [isConfirmation, setIsConfirmation] = useState(false);

    const toggleConfirmation = () => {
        setIsConfirmation(!isConfirmation);
    }


    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        postcode: '',
        company: '',
        post: '',
        payment: '',
        currency: '',
        sumtopay: '',
        cartitems: []
    });

    const handleChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = () => {

        formData.post = postType;
        formData.cartitems = cartItems;
        //console.log('Отправляем данные:', formData);
        // Здесь можно использовать fetch или axios для отправки на сервер
        toggleConfirmation();
    };


    /*Релиазована оплата, все работает корректно. План на завтра:
    * Валидация данных - пользователя не должно пропускать к оплате если он не ввел свои данные.
    * Один из способов доставки должен быть по умолчанию выбран чтобы избежать конфликта с общей суммой.
    * Адаптация интерфейста подтверждения оплаты на мобильные устройства.
    * Разобраться как задеплоить сервер на хостинг.
    * Так же разобраться как получить результат оплаты заказа.
    * */


    return (
        <div className="order-form">
            <div className="order-form-container">
                <div className="order-options">
                    {isConfirmation ? (
                        <OrderConfirmation toggleConfirmation={toggleConfirmation} paymentType={paymentType} cart={cart}
                                           formattedTotalSum={formattedAmount} currencyChar={currencyChar}
                                           convertPrice={convertPrice} formData={formData} sumToPay={sumToPay}
                                           currency={currency}/>) : (
                        <div className="order-form-wrap">
                            <form className="order-form-form">

                                <RecipientInfo handleChangeInput={handleChangeInput} formData={formData}/>

                                <hr className="form-split-line"/>

                                <DeliveryElement currencyChar={currencyChar} convertPrice={convertPrice}
                                                 setPostType={setPostType} postType={postType}
                                                 setDeliveryPrice={setDeliveryPrice} nova_price={nova_price} ukr_price={ukr_price}/>

                                <hr className="form-split-line"/>

                                <PaymentTypeSelect setPaymentType={setPaymentType} paymentType={paymentType}/>

                                <button type="button" className="review-order-button" onClick={handleSubmit}>
                                    Review order
                                </button>
                            </form>
                        </div>
                    )}

                    <div className="mobile-form-split-line"></div>
                    <div className="product-buy">
                        <OrderTotal cart={cart} totalAmount={totalAmount} currencyChar={currencyChar}
                                    convertPrice={convertPrice} deliveryPrice={deliveryPrice}
                                    formattedAmount={formattedAmount} setSumToPay={setSumToPay}/>
                        <div className="mobile-review-button-container">
                            <button type="submit" className="mobile-review-order-button">Review order</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default OrderForm;