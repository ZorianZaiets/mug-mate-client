import {React, useState, useEffect} from 'react';
import './OrderForm.css'
import DeliveryElement from "../deliveryElement/DeliveryElement";
import PaymentTypeSelect from "../paymentTypeSelect/PaymentTypeSelect";
import RecipientInfo from "../recipientInfo/RecipientInfo";
import OrderTotal from "../orderTotal/OrderTotal";
import OrderConfirmation from "../orderConfirmation/OrderConfirmation";
import PayButton from "../payButton/PayButton";


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

    const [errors, setErrors] = useState({});


    const validate = () => {
        const newErrors = {};

        // Проверка имени
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.surname.trim()) {
            newErrors.surname = "Surname is required";
        }

        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        }


        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }

        if (!formData.postcode.trim()) {
            newErrors.postcode = "Postcode is required";
        }


        // Проверка email (простая проверка на "@" и ".")
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = "Email is not valid";
        }

        // Проверка телефона (только цифры и знак "+")
        const phonePattern = /^[+]?[\d]+$/;
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!phonePattern.test(formData.phone)) {
            newErrors.phone = "Phone must contain only digits and '+'";
        }

        return newErrors;
    };


    const handleSubmit = () => {
        const validationErrors = validate();

        formData.post = postType;
        formData.cartitems = cartItems;

        if (Object.keys(validationErrors).length === 0) {
            // Данные валидны
            console.log("Form submitted", formData);
            setErrors(validationErrors);
            toggleConfirmation();
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else {
            // Есть ошибки
            setErrors(validationErrors);
        }

    };

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


    return (
        <div>
            {isConfirmation ? (
                <div className="confirmation-row">
                    <div className="confirmation-container">
                        <OrderConfirmation toggleConfirmation={toggleConfirmation}
                                           formData={formData}/>
                        {!isMobileView && <PayButton sumToPay={sumToPay} currency={currency}/>}

                    </div>

                    <div className="confirmation-total">
                        <OrderTotal cart={cart} totalAmount={totalAmount} currencyChar={currencyChar}
                                    convertPrice={convertPrice} deliveryPrice={deliveryPrice}
                                    formattedAmount={formattedAmount} setSumToPay={setSumToPay}/>
                        {isMobileView &&
                            <div className="mobile-pay-button-container">
                                <PayButton sumToPay={sumToPay} currency={currency}/>
                            </div>}

                    </div>


                </div>

            ) : (
                <div className="order-form">
                    <div className="order-form-container">
                        <div className="order-options">
                            <div className="order-form-wrap">
                                <form className="order-form-form">

                                    <RecipientInfo setFormData={setFormData} formData={formData} errors={errors}
                                                   validate={validate} setErrors={setErrors} />

                                    <hr className="form-split-line"/>

                                    <DeliveryElement currencyChar={currencyChar} convertPrice={convertPrice}
                                                     setPostType={setPostType} postType={postType}
                                                     setDeliveryPrice={setDeliveryPrice} nova_price={nova_price}
                                                     ukr_price={ukr_price}/>

                                    <hr className="form-split-line"/>

                                    <PaymentTypeSelect setPaymentType={setPaymentType} paymentType={paymentType}/>

                                    <button type="button" className="review-order-button" onClick={handleSubmit}>
                                        Review order
                                    </button>
                                </form>
                            </div>
                            <div className="mobile-form-split-line"></div>
                            <div className="product-buy">
                                <OrderTotal cart={cart} totalAmount={totalAmount} currencyChar={currencyChar}
                                            convertPrice={convertPrice} deliveryPrice={deliveryPrice}
                                            formattedAmount={formattedAmount} setSumToPay={setSumToPay}/>
                            </div>
                            <div className="mobile-review-button-container">
                                <button type="submit" className="mobile-review-order-button"
                                        onClick={handleSubmit}>Review
                                    order
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )
            }
        </div>

    );
}

export default OrderForm;